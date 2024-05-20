// imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppData } from "../../hooks/useAppData";
import { addTags } from "../../helpers/tagsHelpers";

export default function TagsForm (props) {
  
  // declare router
  const router = useRouter();

  // rectreive recipe ID from props
  const { recipeId } = props;

  // set initial states
  const [tagContainer, setTagContainer] = useState('');
  const [tagObject, setTagObject] = useState({
    recipe_id: recipeId,
    tag: ''
  });
  const [tagsArray, setTagsArray] = useState([]);

  // retreive tags from db
  const { allTags } = useAppData();

  // use useEffect to ensure tagObject is using latest value
  useEffect(() => {
    setTagObject({
      ...tagObject,
      tag: tagContainer
    })
  }, [tagContainer]);

  // handlers

  // handle tag input
  const handleTagChange = (e) => {

    const inputValue = e.target.value;
    setTagContainer(inputValue);
    
    const filteredTags = allTags.filter(tag => tag.tag.toLowerCase().includes(inputValue.toLowerCase())).slice(0, 5);

    setTagObject({
      ...tagObject, 
      tag: tagContainer
    });
  };

  // handle dropdown suggestions
  // const handleTagSuggestions = (selectedTagId) = {

  //   const selectedTag = allTags.find(tag => tag.id === selectedTagId);

  // };

  // add tags to list user wants to add
  const handleAddTag = (e) => {
    setTagsArray([
      ...tagsArray,
      tagObject
    ]);
    setTagContainer('');
  };

  // submit all tags as array
  const handleSubmitTags = (e) => {
    e.preventDefault();
    addTags(tagsArray);
    router.push(`/recipes/${recipeId}`);
  };

  // template
  return (
    <div>
      {tagsArray && tagsArray[0] && (
        <h2>Tags:</h2>
      )}
      <p>
        {tagsArray && tagsArray[0] && (
          tagsArray.map((tag, index) => (
            <li key={index} >
              {tag.tag}
            </li>
          ))
        )}
      </p>
      <form className="tags-form" >
        <input
          id="tag"
          type="text"
          className="tag"
          placeholder=" Search for tag"
          value={tagContainer}
          onChange={handleTagChange}
        />
      </form>
      <button onClick={handleAddTag}>ADD TAG</button>
      <button onClick={handleSubmitTags}>SUBMIT TAGS</button>
    </div>
  );
};