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
  const [time, setTime] = useState(0);
  const [query, setQuery] = useState('');
  
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

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  // template
  return (
    <div className="browse-page">
      <NavBar />
      {/* <Spacer /> */}
      <Header title="Add to Taste" />
      <h2 className="browse-title">RECIPES</h2>
      <Spacer />
      <BrowseOptions
        handleSelectIngredient={handleSelectIngredient}
        handleSelectTag={handleSelectTag}
        handleSelectTime={handleSelectTime}
        handleSearch={handleSearch}
      />
      <div className="browse-body" >
        <RecipeList
          ingredient={ingredient}
          tag={tag}
          time={time}
          query={query}
        />
      </div>
    </div>
  );
};
