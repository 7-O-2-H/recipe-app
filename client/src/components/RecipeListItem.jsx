// imports
import "../styles/RecipeListItem.css";

export default function RecipeListItem(props) {

  const { name, time, servingSize, description } = props;

  // template
  return (
    <div className="recipe-list-item">
      <h1>{name}</h1>
      <h3>{time}</h3>
      <p>{description}</p>
    </div>
  );
}