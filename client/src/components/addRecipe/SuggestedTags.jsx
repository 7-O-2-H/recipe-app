import TagButton from "./TagButton";

export default function SuggestedTags (props) {

  const { tags } = props;

  const tagButtons = tags.map(tag => (
    <TagButton 
      key={tag.id}
      id={tag.id}
      tag={tag.tag}
    />
  ));

  // templat
  return (
    <div>
      {tagButtons}
    </div>
  );

};