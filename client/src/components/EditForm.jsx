// imports
import { useRouter } from "next/router";

export default function EditForm(props) {

  const router = useRouter();
  const { recipe, ingredients, steps } = router.query;

  console.log("Rec: ", recipe);
  console.log("Ings: ", ingredients);
  console.log("Steps: ", steps);
  
  // template
  return (
    <div className="edit-form">
      <div className="edit-recipe-name">
        <h3>Title</h3>
        <h3>Recipe Name</h3>
        <button>EDIT TITLE</button>
      </div>
    </div>
  )
};