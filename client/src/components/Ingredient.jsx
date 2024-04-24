export default function Ingredient(props) {
  
  const { ingredient } = props;
  //template
  return (
    <div className="ingredients-container">
      <div className="ingredient">
        - &nbsp;
        {ingredient}
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
