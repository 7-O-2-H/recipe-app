import TagButton from "./TagButton";
import './styles/tagButtons.css';

export default function SuggestedTags (props) {

  const { tags } = props;

  const tagButtons = tags.map(tag => (
    <TagButton 
      key={tag.id}
      id={tag.id}
      tag={tag.tag}
    />
  ));

  // template
  return (
    <div className="tag-button-container">
      {tagButtons}
    </div>
  );

};