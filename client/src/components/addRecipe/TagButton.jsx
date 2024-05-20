export default function TagButton (props) {

  const { tag } = props;

  return (
    <button className='tag-button'>{tag.tag}</button>
  );
};