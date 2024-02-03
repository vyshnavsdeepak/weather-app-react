import axios from "axios"

const getWeather = async ({lat, lng}, signal) => {
  const { data } = await axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude="+lat+
  "&longitude="+lng+"&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m",
  {
    signal,
  });

  const result = {
    temperature: `${data.current.temperature_2m}${data.current_units.temperature_2m}`,
    windspeed: `${data.current.wind_speed_10m}${data.current_units.wind_speed_10m}`
  }

  return result;
}

export default getWeather;