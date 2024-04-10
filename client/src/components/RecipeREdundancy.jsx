// export default function Recipe({ recipeId }) {

//   // retrieve recipeId from router
//   const router = useRouter();
//   const { recipeId } = router.query;
//   // const { currentRecipe } = useRecipe(recipeId);
//   console.log("recipe: ", recipe, "\nrecipeId: ", recipeId)



//   // If the page is not yet generated, display a loading message
//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   // Render the recipe details
//   return (
//     <div>
//       <NavBar />
//       <Spacer />
//       <Header title="Recipe Name" />
//       <Spacer />
//     </div>
//   );
// };