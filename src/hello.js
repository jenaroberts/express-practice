export const hello = (request, response) => {
  response.send("Hello, is it me you're looking for");
};

export const helloPerson = (request, response) => {
  const { person } = request.params;
  response.send(`Hello, ${person}`);
};

export const greetNewPerson = (request, response) => {
  const { firstName, lastName } = request.body;
  response.send(`Hello, ${firstName} ${lastName}.`);
};
