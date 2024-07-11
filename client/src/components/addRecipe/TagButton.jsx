import './styles/tagButtons.css';

export default function TagButton (props) {

  const { id, tag, handleClick } = props;

  return (
    <button className='tag-button' onClick={() => handleClick(id)}>{tag}</button>
  );
};