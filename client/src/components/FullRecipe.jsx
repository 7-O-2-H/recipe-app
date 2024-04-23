export default function FullRecipe (props) {

  const { recipe, ingredients, steps } = props;

  // create array of ingredients with measurement and quantity
  const ingredientsArray = [];
  for (const ing of ingredients) {
    let str = '';
    if (ing['quantity'] > 1) {
      str += `${ing['quantity']} ${ing['measurement']}s of ${ing['ingredient']}`; 
    } else {
      str += `${ing['quantity']} ${ing['measurement']} of ${ing['ingredient']}`;
    }
    ingredientsArray.push(str);
  }

  console.log("Ingredients Array: ", ingredientsArray);

  return (
    <div>
      {recipe.description}
      <div className="recipe-ingredients" >
        <div className="ingredients" >
          <p>INGREDIENTS</p>
            <p>{ingredients[0]['quantity']} {ingredients[0]['measurement']} of {ingredients[0]['ingredient']}</p>
        </div>
      </div>
    </div>
  )
  
};