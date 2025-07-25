import CloudIcon from "../../assets/icons/cloud.svg"
import HumidityIcon from "../../assets/icons/humidity.svg"
import MaxTempIcon from "../../assets/icons/temp-max.svg"
import MinTempIcon from "../../assets/icons/temp-min.svg"
import WindIcon from "../../assets/icons/wind.svg"

import { useContext } from "react"
import { WeatherContext } from "../../context"

export default function WeatherCondition() {

    const { weatherData } = useContext(WeatherContext)
    const { maxTemperature, minTemperature, Humadity, cloudy, wind, climate } = weatherData

    return (
        <div>
            <p className="text-sm lg:text-lg font-bold uppercase mb-8">The Climate is <u>{climate}</u></p>
            <ul className="space-y-6 lg:space-y-6">
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp max</span>
                    <div className="inline-flex space-x-4">
                        <p>{Math.round(maxTemperature)}°</p>
                        <img src={MaxTempIcon} alt="temperature-max" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp min</span>
                    <div className="inline-flex space-x-4">
                        <p>{Math.round(minTemperature)}°</p>
                        <img src={MinTempIcon} alt="temp-min" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Humadity</span>
                    <div className="inline-flex space-x-4">
                        <p>{Humadity}%</p>
                        <img src={HumidityIcon} alt="humidity" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Cloudy</span>
                    <div className="inline-flex space-x-4">
                        <p>{cloudy}%</p>
                        <img src={CloudIcon} alt="cloudy" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Wind</span>
                    <div className="inline-flex space-x-4">
                        <p>{wind}km/h</p>
                        <img src={WindIcon} alt="wind" />
                    </div>
                </li>
            </ul>
        </div>
    )
}