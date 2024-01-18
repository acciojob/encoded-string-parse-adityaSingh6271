const parseCode = (str) => {
  // Split the input string by "000" to get an array of firstName, lastName, and id
  const [firstName, lastName, id] = str.split("000");

  // Return an object with properties firstName, lastName, and id
  return {
    firstName,
    lastName,
    id
  };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
