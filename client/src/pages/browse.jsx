// imports
//styles
import "../styles/browse.css";
// react
import { useState } from "react";
// components
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import RecipeList from "../components/RecipeList";
import BrowseOptions from "../components/BrowseOptions";

export default function Browse() {
    
  const [ingredient, setIngredient] = useState('');
  const [tag, setTag] = useState('');
  const [time, setTime] = useState('');
  
  // handlers to be used to set filter data, update state vars and refresh rec list
  const handleSelectIngredient = (selectedOption) => {  
    setIngredient(selectedOption);
  };

  const handleSelectTag = (selectedOption) => {
    setTag(selectedOption);
  };

  const handleSelectTime = (selectedOption) => {
    setTime(selectedOption);
  };
  

  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="Recipes" />
      <Spacer />
      <BrowseOptions
        handleSelectIngredient={handleSelectIngredient}
        handleSelectTag={handleSelectTag}
        handleSelectTime={handleSelectTime}
      />
      <div className="browse-body" >
        <RecipeList
          ingredient={ingredient}
          tag={tag}
          time={time}
        />
      </div>
    </div>
  );
};
