const parseCode = (str) => {
  // Split the input string by "000" to get an array of firstName, lastName, and id

	if (!str) {
    return null; // or handle it according to your use case
  }
  const [firstName, lastName, id] = str.split("000");

  // Remove leading zeros from the id
  const cleanedId = id.replace(/^0+/, '');

  // Return an object with properties firstName, lastName, and id
  return {
    firstName,
    lastName,
    id: cleanedId
  };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));

