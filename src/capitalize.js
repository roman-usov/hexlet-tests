const capitalize = (str) => {
  if(str === '') return str;

  const [firstChar, ...rest] = str;

  return `${firstChar.toUpperCase()}${rest.join('')}`;
};

export default capitalize;
