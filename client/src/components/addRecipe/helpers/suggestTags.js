export function suggestTags (name, description) {

  let nameArray = name.split(' ');
  let descriptionArray = description.split(' ');

  const keyWordArray = nameArray.concat(descriptionArray);

  return keyWordArray;
};
