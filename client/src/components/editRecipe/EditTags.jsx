// imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import 'react-toastify/dist/ReactToastify.css';
import { useAppData } from "../../hooks/useAppData";
import TagButton from "../addRecipe/TagButton";
// import { addTags } from "../../helpers/tagsHelpers";
// import { suggestTags } from "./helpers/suggestTags";
// import SuggestedTags from "./SuggestedTags";

export default function EditTags (props) {
  

  // rectreive recipe ID from props
  const { recipe } = props;

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


  // use useEffect to ensure tagObject is using latest value
  // useEffect(() => {
  //   setTagObject({
  //     ...tagObject,
  //     tag: tagContainer
  //   })
  // }, [tagContainer]);

  // useEffect(() => {
  //   setTagObject({
  //     ...tagObject,
  //     tag_id: null
  //   })
  // }, [tagsArray]);

  // handlers

  // handle tag input
  // const handleTagChange = (e) => {

  //   const inputValue = e.target.value;
  //   setTagContainer(inputValue);
    
  //   const filteredTags = allTags.filter(tag => tag.tag.toLowerCase().includes(inputValue.toLowerCase())).slice(0, 5);

  //   // only show dropdown if there is input
  //   setShowDropdown(inputValue.trim() !== '');
  //   setTagSuggestions(filteredTags);

  //   setTagObject({
  //     ...tagObject, 
  //     tag: tagContainer
  //   });
  // };

  // // handle dropdown suggestions
  // const handleTagSuggestions = (selectedTagId) => {

  //   const selectedTag = allTags.find(tag => tag.id === selectedTagId);
  //   setTagContainer(selectedTag.tag);

  //   setTagObject({
  //     ...tagObject,
  //     tag_id: selectedTag.id,
  //     tag: tagContainer
  //   });

  //   setTagSuggestions([]);
  // };

  // // add tags to list user wants to add
  // const handleAddTag = (e) => {
  //   e.preventDefault();

  //   setTagsArray([
  //     ...tagsArray,
  //     tagObject
  //   ]);

  //   setSelectedTagId(null);
  //   setTagContainer('');
  //   setTagObject({
  //     ...tagObject,
  //     tag_id: selectedTagId,
  //     tag: tagContainer
  //   });

  // };

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
      {/* {tagsArray && tagsArray[0] && (
        <h2>Tags:</h2>
      )} */}
      {/* <p>
        {tagsArray && tagsArray[0] && (
          tagsArray.map((tag, index) => (
            <li key={index} >
              {tag.tag}
            </li>
          ))
        )}
      </p> */}
      <h2>Existing Tags</h2>

      <form className="tags-form" >
        <input
          id="tag"
          type="text"
          className="tag"
          placeholder=" Search for tag"
          value={tagContainer}
          // onChange={handleTagChange}
        />
        {/* <ul>
          {tagSuggestions.map(tag => (
            <li key={tag.id} onClick={() => handleTagSuggestions(tag.id)}>
              {tag.tag}
            </li>
          ))}
        </ul> */}
        {/* <button onClick={handleAddTag}>ADD TAG</button>
        <button onClick={handleSubmitTags}>SUBMIT TAGS</button>
        <button onClick={handleCancel}>CANCEL</button> */}
      </form>
    </div>
  );
};