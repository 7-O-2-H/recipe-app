export function suggestTags (recipe, tags) {

  const nameArray = recipe.recipe.split(' ');
  const descriptionArray = recipe.description.split(' ');

  const keyWordArray = nameArray.concat(descriptionArray);

  const lowerCaseKeywords = keyWordArray.map(tag => tag.toLowerCase());

  const filteredTags = tags.filter(tagObj => 
    lowerCaseKeywords.includes(tagObj.tag.toLowerCase())
  );


  if (recipe.serves >= 4 && recipe.serves <= 6) {
    const fourToSixTag = tags.find(tagObj => tagObj.tag === 'serves 4-6');
    filteredTags.push(fourToSixTag);
  };

  if (recipe.time <= 60) {
    const underSixtyTag = tags.find(tagObj => tagObj.tag === '60 minutes or less');
    filteredTags.push(underSixtyTag);
  };

  return filteredTags;
};
