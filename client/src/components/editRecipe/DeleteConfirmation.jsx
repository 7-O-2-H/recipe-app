export default function DeleteConfirmation(props) {

  const { deleteRecipe, recipe, cancel } = props;



  return (
    <div>
      <p>Are you sure you want to delete this recipe ({recipe.recipe})?</p>
      <div>
        <button onClick={cancel}>NO</button>
        <button onClick={deleteRecipe}>YES</button>
      </div>
    </div>
  )
};