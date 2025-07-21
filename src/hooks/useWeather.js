import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState({
    status: false,
    message: "",
  });
  const [weatherData, setWeatherData] = useState({
    location: "",
    temperature: "",
    minTemperature: "",
    maxTemperature: "",
    wind: "",
    cloudy: "",
    Humadity: "",
    time: "",
    timezone: "",
    longitude: "",
    latitude: "",
    climate: "",
    sunrise: "",
    sunset: "",
  });

  const { selectedLocation } = useContext(LocationContext);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        status: true,
        message: "Weather information loading wait a moment",
      });

      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      if (!response.ok) {
        const errorMessage = `Data fetching failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const partOfData = {
        ...weatherData,
        location: data?.city?.name,
        temperature: data.list[0].main.temp,
        minTemperature: data.list[0].main.temp_min,
        maxTemperature: data.list[0].main.temp_max,
        wind: data?.list[0]?.wind?.speed,
        cloudy: data?.list[0]?.clouds.all,
        Humadity: data.list[0].main.humidity,
        time: data?.list[0]?.dt_txt,
        timezone: data?.city?.timezone,
        latitude: latitude,
        longitude: longitude,
        climate: data?.list[0]?.weather[0]?.main,
        sunrise: data?.city?.sunrise,
        sunset: data?.city?.sunset,
      };

      setWeatherData(partOfData);
    } catch (err) {
      setError(err);
      console.log(` Error Occured : ${err}`);
    } finally {
      setLoading({
        ...loading,
        status: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    setLoading((prev) => ({
      ...prev,
      status: true,
      message: "Searching Location",
    }));
    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return {
    weatherData,
    loading,
    error,
  };
};
export default useWeather;
