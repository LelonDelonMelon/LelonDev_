// // List of commands that require API calls

import { devJoke, getProjects, jokeNorris } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};
export const devjoke = async (args: string[]): Promise <string> => {
  const data = await devJoke();
 // console.log("Inside api commands waiting for joke: ", data[0].question, data[0].punchline)
  const joke =`“${data[0].question}” : ${data[0].punchline}} - by omegaseven`;
  return joke;
}
export const joke = async (args: string[]): Promise <string> => {
  const data = await jokeNorris();
 // console.log("Inside api commands waiting for joke: ", data[0].question, data[0].punchline)
  //const joke =`“${data[0].question}” : ${data[0].punchline}} - by omegaseven`;
  return data.value;
}

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
