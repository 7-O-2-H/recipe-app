// imports
import "../styles/RecipeListItem.css";

export default function RecipeListItem(props) {

  const { name, time, unit, servingSize, description } = props;

  // template
  return (
    <div className="recipe-list-item-container">
      <div className="recipe-list-item">
        <div className="recipe-name" >
          <h2>{name}</h2> 
        <div className="description" >
          <p>Description: {description}</p>
        </div>
        </div>
        <div className="details" >
          <div className="time" >
            <h3>Time: {time} {unit}</h3>
          </div>
            Serves: {servingSize}
        </div>
      </div>
    </div>
  );
}