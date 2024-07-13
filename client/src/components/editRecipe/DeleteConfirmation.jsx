export default function DeleteConfirmation(props) {

  const { deleteRecipe, recipe, cancel } = props;



  return (
    <div>
      <p>Are you sure you want to delete this recipe ({recipe})?</p>
      <div>
        <button onClick={cancel}>NO</button>
        <button>YES</button>
      </div>
    </div>
  )
};