// imports
//styles
import "../styles/browse.css";
// react
import { useState } from "react";
import { useRouter } from "next/router";
// components
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import RecipeList from "../components/RecipeList";
import BrowseOptions from "../components/BrowseOptions";

const router = useRouter();

const [ingredient, setIngredient] = useState('');

// handlers to be used to set filter data, update state vars and refresh rec list
const handleSelectIngredient = (selectedOption) => {

  setIngredient(selectedOption);
  router.push('/browse');
};

export default function Browse() {

  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="Recipes" />
      <Spacer />
      <BrowseOptions
        handleSelect={handleSelectIngredient}   
      />
      <div className="browse-body" >
        <RecipeList
          ingredient={ingredient}
        />
      </div>
    </div>
  );
};
