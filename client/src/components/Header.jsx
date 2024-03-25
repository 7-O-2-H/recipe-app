import "../styles/Header.css";

export default function Header(props) {
  
  const title = props.title;
  
  // Template
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}