const api_key = "8b4a1cfe7b37f251dcce8b232975fd6d";

export const getByCity = async (city = "") => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
  );
  const data = await response.json();
  return data;
};

export const getForecastByCity = async (city = "") => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`
  );
  const data = await response.json();
  return data;
};
