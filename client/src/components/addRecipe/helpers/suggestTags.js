export function suggestTags (name, description, serves, time, tags) {

  console.log(name, description, serves, time);

  const nameArray = name.split(' ');
  const descriptionArray = description.split(' ');

  const keyWordArray = nameArray.concat(descriptionArray);

  const lowerCaseKeywords = keyWordArray.map(tag => tag.toLowerCase());

  const filteredTags = tags.filter(tagObj => 
    lowerCaseKeywords.includes(tagObj.tag.toLowerCase())
  );

  return filteredTags;
};
