export function suggestTags (name, description, tags) {

  let nameArray = name.split(' ');
  let descriptionArray = description.split(' ');

  const keyWordArray = nameArray.concat(descriptionArray);

  const lowerCaseKeywords = keyWordArray.map(tag => tag.toLowerCase());

  const filteredTags = tags.filter(tagObj => 
    lowerCaseKeywords.includes(tagObj.tag.toLowerCase())
  );

  console.log(filteredTags)
  return filteredTags;
};
