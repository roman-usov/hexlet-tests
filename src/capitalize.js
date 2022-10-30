const capitalize = (str) => {

  const [firstChar = '', ...rest] = str;

  return `${firstChar.toUpperCase()}${rest.join('')}`;
};

export default capitalize;
