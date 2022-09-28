export const countries = [
  "argentina",
  "brazil",
  "chile",
  "colombia",
  "paraguay",
  "peru",
  "suriname",
  "uruguay"
];

const url: string = `http://universities.hipolabs.com/search?country`;


export const endpoints: string[] = countries.map(country => `${url}=${country}`);

