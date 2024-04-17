// imports
import "../styles/browse.css";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import RecipeList from "../components/RecipeList";
import BrowseOptions from "../components/BrowseOptions";

export default function Browse() {

  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="Recipes" />
      <Spacer />
      <BrowseOptions />
      <div className="browse-body" >
        <RecipeList />
      </div>
      {/* <Spacer /> */}
    </div>
  );
}
