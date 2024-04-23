export default function Ingredient(props) {
  
  const { ingredient } = props;
  //template
  return (
    <div className="ingredients-container">
      <body className="ingredient">
        - &nbsp;
        {ingredient}
      </body>
    </div>
  );
};
