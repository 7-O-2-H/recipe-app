// imports
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppData } from "../../hooks/useAppData";
import { addStep } from "../../helpers/stepsHelpers";

export default function TagsForm (props) {

  // rectreive recipe ID from props
  const { recipeId } = props;

  // set initial states
  const [tagContainer, setTagContainer] = useState('');

  // retreive tags from db
  const { allTags } = useAppData();

  // handle tag input
  const handleTagChange = (e) => {
    const inputValue = e.target.value;
    setTagContainer(inputValue);
    console.log(allTags);
  };

  // template
  return (
    <div>
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
    </div>
  );
};