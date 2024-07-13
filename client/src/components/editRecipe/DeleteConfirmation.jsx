export default function DeleteConfirmation(props) {

  const { deleteRecipe } = props;
  
  return (
    <div>
      <p>Are you sure you want to delete this recipe ()?</p>
      <div>
        <button>NO</button>
        <button>YES</button>
      </div>
    </div>
  )
};