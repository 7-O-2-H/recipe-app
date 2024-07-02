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
import { addTags } from "../../helpers/tagsHelpers";
// components
import TagButton from "../addRecipe/TagButton";

export default function EditTags (props) {

  // rectreive recipe ID from props
  const { recipe, revertToEditForm, refreshEditForm } = props;

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
  const [addTagTrigger, setAddTagTrigger] = useState(false);

  
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

    // useEffect to handle adding tag to array after tagObject is updated
    useEffect(() => {
      if (addTagTrigger) {
        addTagObjectToArray();
        setAddTagTrigger(false);
      }
    }, [tagObject]);

  // // add tags to list user wants to add
  const handleAddTag = (e) => {
    e.preventDefault();

    console.log("suggestions: ", tagSuggestions, "object: ", tagObject);

    // Check if the current input matches a suggestion
    const matchingSuggestion = tagSuggestions.find(tag => tag.tag.toLowerCase() === tagObject.tag.toLowerCase());

    console.log("matcing: ", matchingSuggestion, "Conainer: ", tagContainer);

    // If there is a matching suggestion, use its data
    if (matchingSuggestion) {
      setTagObject((prevState) => ({
        ...prevState,
        tag_id: matchingSuggestion.id,
        tag: matchingSuggestion.tag
      }));
        // if matching suggestion add tag to tags Array with tag id from existing tags else add to tags array with null id
        setAddTagTrigger(true);
    } else {
      addTagObjectToArray();
    }
  };

  const addTagObjectToArray = () => {

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

  // // submit all tags as array
  const handleSubmitNewTags = async (e) => {
    e.preventDefault();


    console.log(tagsArray);
    // call add tags helper
    await addTags(tagsArray);

    // refresh edit form 
    refreshEditForm();
    
    // revert to edit form
    revertToEditForm();
  };

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
        <button onClick={handleSubmitNewTags}>SUBMIT NEW TAGS</button>
      </form>
    </div>
  );
};