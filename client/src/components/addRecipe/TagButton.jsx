import './styles/tagButtons.css';

export default function TagButton (props) {

  const { id, tag } = props;

  return (
    <button className='tag-button'>{tag}</button>
  );
};