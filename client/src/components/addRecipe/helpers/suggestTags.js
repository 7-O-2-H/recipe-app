export function suggestTags (name, description, serves, time, tags) {

  console.log(serves, time, typeof serves, typeof time, tags, tags[10], tags[12]);

  const nameArray = name.split(' ');
  const descriptionArray = description.split(' ');

  const keyWordArray = nameArray.concat(descriptionArray);

  const lowerCaseKeywords = keyWordArray.map(tag => tag.toLowerCase());

  const filteredTags = tags.filter(tagObj => 
    lowerCaseKeywords.includes(tagObj.tag.toLowerCase())
  );


  if (serves >= 4 && serves <= 6) {
    const fourToSixTag = tags.find(tagObj => tagObj.tag === 'serves 4-6');
    filteredTags.push(fourToSixTag);
  };

  if (time <= 60) {
    const underSixtyTag = tags.find(tagObj => tagObj.tag === '60 minutes or less');
    filteredTags.push(underSixtyTag);
  };

  console.log(filteredTags);

  return filteredTags;
};
