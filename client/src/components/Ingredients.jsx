// imports
import useAppData from "../hooks/useAppData";
import { useEffect, useState } from "react";

export default function Ingredients() {

  const { recipeIngredients } = useAppData();
  // console.log(recipeIngredients);
  return (
    <div>Hello</div>
  )
}