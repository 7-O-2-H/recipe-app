// imports
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useAppData from "../../hooks/useAppData";
import { addStep } from "../../helpers/stepsHelpers";

export default function TagsForm (props) {

  const { recipeId } = props;

  const [tagContainer, setTagContainer] = useState('');

  // handle tag input
  const handleTagChange = (e) => {
    const tag = onput.target.value;
    setTagContainer(tag);
    console.log(tagContainer);
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