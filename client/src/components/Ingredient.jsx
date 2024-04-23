export default function Ingredient(props) {
  
  const { ingredient } = props;
  //template
  return (
    <div className="ingredients-container">
      <body className="ingredient">
        - &nbsp;
        {ingredient}
        <br></br>
        <br></br>
      </body>
    </div>
  );
};
