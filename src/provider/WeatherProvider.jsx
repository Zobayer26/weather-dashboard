import PropTypes from 'prop-types';
import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherProvider = ({ children }) => {
    const { weatherData, loading, error } = useWeather()
    return (
        <WeatherContext.Provider value={{ weatherData, loading, error }}>
            {children}
        </WeatherContext.Provider>
    )
}



export default WeatherProvider

WeatherProvider.propTypes = { children: PropTypes.any }