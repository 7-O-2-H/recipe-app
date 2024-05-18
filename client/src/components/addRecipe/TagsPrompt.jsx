export default function TagsPrompt(props) {

  const { recipeId } = props;

  return (
    <div>
      <h2>Add Tags?</h2>
      <p>Adding tags makes it easier for others to find your recipes.</p>
      <div className="tags-prompt-buttons">
        <button>SKIP</button>
        <button>TAGS</button>
      </div>
    </div>
  )
};