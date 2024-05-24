export default function EditableIngredient(props) {
  
  const { ingredient } = props;
  //template
  return (
    <div className="ingredients-container">
      <div className="ingredient">
        - &nbsp;
        {ingredient}
        <br></br>
        <br></br>
        <button className="edit-button">EDIT</button>
      </div>
    </div>
  );
};
