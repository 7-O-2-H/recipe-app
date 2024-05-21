export function suggestTags (name, description, recipeData, ingredients, tags) {

  console.log(recipeData, ingredients, recipeData['recipe'], recipeData['description']);

  let nameArray = name.split(' ');
  let descriptionArray = description.split(' ');

  // let nameArray = recipeData['recipe'].split(' ');
  // let descriptionArray = recipeData['description'].split(' ');

  const keyWordArray = nameArray.concat(descriptionArray);

  const lowerCaseKeywords = keyWordArray.map(tag => tag.toLowerCase());

  const filteredTags = tags.filter(tagObj => 
    lowerCaseKeywords.includes(tagObj.tag.toLowerCase())
  );

  return filteredTags;
};
