//using asynchronous functions

const getDadJoke = async () => {
  const getJoke = await fetch("https://icanhazdadjoke.com/", {
    method: "get",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonResponse = await getJoke.json();
  const dadJoke = jsonResponse.joke;
  return dadJoke;
};

export { getDadJoke };
