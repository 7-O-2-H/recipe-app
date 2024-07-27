// imports
import "../styles/RecipeListItem.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function RecipeListItem(props) {

  // props from recipe list
  const { id, name, time, unit, user_id, servingSize, submitted, description } = props;
  
  // use state and effect for recipeId 
  const [recipeId, setRecipeId] = useState(null);
  useEffect(() => {
    setRecipeId(id);
  }, [id]);
  
  // template
  return (
      <Link className="recipe-list-item"  href={`/recipes/${recipeId}`}>   
        <div className="recipe-name" >
          <div className="name">{name}</div> 
        </div>
        <div className="description-details" >
          <p className="description" >
            {description}
          </p>
          <div className="details" >
            <div className="icons" >
              <p>
                ⏲️ 
              </p>
              <p>
                🍽️
              </p>
              <p>
                🧑‍🍳
              </p>
            </div>
            <div>
              <div className="time" >
                {time} {unit} 
              </div>
              <p>

                {servingSize} 
              </p>
              <div>
                {submitted}
              </div>
            </div>
          </div>
        </div>
      </Link>
  );
}