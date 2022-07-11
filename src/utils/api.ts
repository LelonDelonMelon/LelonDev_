import axios from 'axios';
import config from '../../config.json';

//devjokeAPI
let jokeAPI =
  "https://api.chucknorris.io/jokes/random";
let devJokeAPI = "https://backend-omega-seven.vercel.app/api/getjoke";

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const devJoke = async ()=> {
  const {data} = await axios.get(devJokeAPI);
  //console.log("Waiting for joke", data);

   return data;
}
export const jokeNorris = async ()=> {
  const {data} = await axios.get(jokeAPI);
  console.log("chuck norris joke", data)
  return data;
}

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };


};
