// imports
// react
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// hooks
import { useAppDataWithRefresh } from "../../hooks/useAppData";
import { useFullTags } from "../../hooks/useTag";
// helpers
import { deleteTags } from "../../helpers/tagsHelpers";
// components
import TagButton from "../addRecipe/TagButton";
// import { addTags } from "../../helpers/tagsHelpers";
// import { suggestTags } from "./helpers/suggestTags";
// import SuggestedTags from "./SuggestedTags";

export default function EditTags (props) {

  // rectreive recipe ID from props
  const { recipe, tags } = props;

  // set initial states
  const [tagContainer, setTagContainer] = useState('');
  const [tagObject, setTagObject] = useState({
    tag_id: null,
    recipe_id: recipe.id,
    tag: ''
  });
  const [selectedTagId, setSelectedTagId] = useState(null);
  const [tagsArray, setTagsArray] = useState([]);
  const [showDropDown, setShowDropdown] = useState(false);
  const [tagSuggestions, setTagSuggestions] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [refresh, setRefresh] = useState(true);
  
  const { fullTagsInfo } = useFullTags(recipe.id, refresh);

  const { allTags } = useAppDataWithRefresh(refresh);

  const handleSelectTag = (tag) => {
    
    // remove tag from array if in selected Tags
    if (selectedTags.includes(tag)) {

      // create new array without reselected tag
      const updatedSelectedTags = selectedTags.filter(tagId => tagId !== tag);

      // set selected tag to updated tags
      setSelectedTags(updatedSelectedTags);

      return;
    };
    setSelectedTags((prevSelectedTags) => [...prevSelectedTags, tag]);
  };

  // handlers
  const handleDeleteTags = async (event) => {

    // delete selected
    await deleteTags(selectedTags);

    // refresh component and parent so they only show existing tags
    setSelectedTags([]);
    setRefresh((prevState) => !prevState);

  };

  const existingTags = fullTagsInfo.map((tag) => {
    return (
      <TagButton
        key={tag.tag_id}
        id={tag.id}
        tag={tag.tag}
        handleClick={handleSelectTag}
      />
    )
  });

  // use useEffect to ensure tagObject is using latest value
  useEffect(() => {
    setTagObject({
      ...tagObject,
      tag: tagContainer
    })
  }, [tagContainer]);

  useEffect(() => {
    setTagObject({
      ...tagObject,
      tag_id: null
    })
  }, [tagsArray]);

  // handlers

  // handle tag input
  const handleTagChange = (e) => {

    const inputValue = e.target.value;
    setTagContainer(inputValue);
    
    const filteredTags = allTags.filter(tag => tag.tag.toLowerCase().includes(inputValue.toLowerCase())).slice(0, 5);

    // only show dropdown if there is input
    setShowDropdown(inputValue.trim() !== '');
    setTagSuggestions(filteredTags);
    console.log(tagSuggestions);

    setTagObject({
      ...tagObject, 
      tag: tagContainer
    });
  };

  // // handle dropdown suggestions
  const handleTagSuggestions = (selectedTagId) => {

    const selectedTag = allTags.find(tag => tag.id === selectedTagId);
    setTagContainer(selectedTag.tag);

    setTagObject({
      ...tagObject,
      tag_id: selectedTag.id,
      tag: tagContainer
    });

    setTagSuggestions([]);
  };

  // // add tags to list user wants to add
  const handleAddTag = (e) => {
    e.preventDefault();

    // init variable to prevent submission if tag is already in tagsArray
    let tagExists = false

    // update var if tag is in tagsArray
    tagExists = tagsArray.some(existingTag => existingTag.tag.toLowerCase() === tagObject.tag.toLowerCase());

    // prevent submission and show toast error
    if (tagExists) {
      toast.error("This tag is already scheduled to be added.")
      return;
    };

    // check if tag is aleady in existing tags 
    tagExists = fullTagsInfo.some(existingTag => existingTag.tag.toLowerCase() === tagObject.tag.toLowerCase());

    // prevent submission and show toast error - separate case from prior check to show different toast error
    if (tagExists) {
      toast.error("This recipe already has this tag.")
      return;
    };

    setTagsArray([
      ...tagsArray,
      tagObject
    ]);

    setSelectedTagId(null);
    setTagContainer('');
    setTagObject({
      ...tagObject,
      tag_id: selectedTagId,
      tag: tagContainer
    });

    setTagSuggestions([]);
  };

  const handleRemoveScheduledTag = (tagName) => {
    // e.preventDefault();
    const updatedTagsArray = tagsArray.filter(tag => tag.tag.toLowerCase() !== tagName.toLowerCase());
    setTagsArray(updatedTagsArray);
    setRefresh(prevState => !prevState);
  };

  // const handleAddTagWithButton = (tagId) => {

  //   const selectedTag = allTags.find(tag => tag.id === tagId);
  //   setTagContainer(selectedTag.tag);

  //   const tagButtonObject = {
  //     tag_id: tagId,
  //     recipe_id: recipe.id,
  //     tag: selectedTag.tag
  //   }

  //   setTagsArray([
  //     ...tagsArray,
  //     tagButtonObject
  //   ]);

  //   setSelectedTagId(null);
  //   setTagContainer('');
  // };

  // // submit all tags as array
  // const handleSubmitTags = (e) => {
  //   e.preventDefault();
  //   addTags(tagsArray);
  //   router.push(`/recipes/${recipe.id}`);
  // };

  // const handleCancel = (event) => {
  //   event.preventDefault();
  //   onCancel();
  //   return;
  // };

  // template
  return (
    <div>
      <ToastContainer />
      <h2>Existing Tags</h2>
      <div>{existingTags}</div>
      <button type="submit" onClick={handleDeleteTags}>DELETE SELECTED</button>
      <h2>Add Tags</h2>
      <form className="tags-form" >
        <input
          id="tag"
          type="text"
          className="tag"
          placeholder=" Search for tag"
          value={tagContainer}
          onChange={handleTagChange}
          />
        {showDropDown && (
          <ul>
            {tagSuggestions.map(tag => (
              <li key={tag.id} onClick={() => handleTagSuggestions(tag.id)}>
                {tag.tag}
              </li>
            ))}
          </ul>
        )}
        <button onClick={handleAddTag}>ADD TAG</button>
        {tagsArray && tagsArray[0] && (
          <div>
            <h2>New Tags</h2>
            <ul>{tagsArray.map(tag => (
              <li key={tag.id} onClick={() => handleRemoveScheduledTag(tag.tag)}>{tag.tag}</li>
            ))}</ul>
          </div>
        )}
        <button onClick={handleSubmitTags}>SUBMIT NEW TAGS</button>
        {/* 
        <button onClick={handleCancel}>CANCEL</button> */}
      </form>
    </div>
  );
};