import './styles/tagsPrompt.css';
import { useRouter } from 'next/router';

export default function TagsPrompt(props) {

  const router = useRouter();
  const { recipeId } = props;

  // handlers
  const handleSkipTags = (e) => {
    router.push(`/recipes/${recipeId}`);
  };

  return (
    <div className="tags=prompt">
      <h2>Add Tags?</h2>
      <p>Adding tags makes it easier for others to find your recipes.</p>
      <div className="tags-prompt-buttons">
        <button onClick={handleSkipTags}>SKIP</button>
        <button>TAGS</button>
      </div>
    </div>
  )
};