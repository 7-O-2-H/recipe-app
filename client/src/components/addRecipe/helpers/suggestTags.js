export function suggestTags (name, description, tags) {

  let nameArray = name.split(' ');
  let descriptionArray = description.split(' ');

  const keyWordArray = nameArray.concat(descriptionArray);

  const lowerCaseKeywords = keyWordArray.map(tag => tag.toLowerCase());

  // console.log(keyWordArray, tags);

  const filteredTags = tags
    .filter(tagObj => lowerCaseKeywords.includes(tagObj.tag.toLowerCase()))
    .map(tagObj => tagObj.tag);

  // const filteredTags = keyWordArray.filter(tag =>
  //   tags.some(tagObj => tagObj.tag.toLowerCase() === tag.toLowerCase())
  // );

  console.log(filteredTags)
  return filteredTags;
};
