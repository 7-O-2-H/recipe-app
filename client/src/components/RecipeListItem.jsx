// imports
import "../styles/RecipeListItem.css";
import Link from "next/link";

export default function RecipeListItem(props) {

  const { name, time, unit, servingSize, submitted, description } = props;

  // template
  return (
      <Link className="recipe-list-item"  href="/ingredients">
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