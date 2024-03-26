// imports
import "../styles/RecipeListItem.css";

export default function RecipeListItem(props) {

  const { name, time, unit, servingSize, description } = props;

  // template
  return (
      <div className="recipe-list-item">
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
        </div>
      </div>
  );
}