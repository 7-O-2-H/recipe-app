// imports
import "../styles/RecipeListItem.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function RecipeListItem(props) {

  // props from recipe list
  const { id, name, time, unit, servingSize, submitted, description } = props;
  
  // use state and effect for recipeId 
  const [recipeId, setRecipeId] = useState(0);
  useEffect(() => {
    setRecipeId(id);
  }, [id]);

  // template
  return (
      <Link className="recipe-list-item"  href={`/recipes/${recipeId}`}>
        <div className="name-description">
          <div className="recipe-name" >
            <div className="name">{name}</div> 
          <div className="description" >
            {description}
          </div>
        </div>
        </div>
        <div className="details" >
          <div className="time" >
            <h3>Time: {time} {unit}</h3>
          </div>
            Serves: {servingSize}
            <div>
              Submitted By: {submitted}
            </div>
        </div>
      </Link>
  );
}