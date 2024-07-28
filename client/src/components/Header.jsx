import "../styles/Header.css";
import Spacer from "./Spacer";

export default function Header(props) {
  
  const title = props.title;
  
  // Template
  return (
    <div className="header">
      <h1>{title}</h1>
      <Spacer />
    </div>
  );
}