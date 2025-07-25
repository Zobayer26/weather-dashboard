import { useContext, useEffect, useState } from "react";

import Header from "./components/Header/Header";
import WeatherBoard from "./components/WeatherBody/WeatherBoard";
import { WeatherContext } from "./context";

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

export default function Page() {
    const [backgroundImage, setBackgroundImage] = useState("")
    const { weatherData, loading } = useContext(WeatherContext)


    function handleBackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return ScatterdCloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderStormImage;
            case "Fog":
                return WinterImage;
            case "Haze":
                return FewCloudsImage;
            case "Mist":
                return MistImage;
            default:
                return ClearSkyImage;
        }
    }
    useEffect(() => {
        const bgImage = handleBackgroundImage(weatherData.climate)
        setBackgroundImage(bgImage)
    }, [weatherData.climate])
    return (
        <>
            {loading.status ?
                (
                    <div className="flex bg-gray-200 rounded-md w-[500px] p-8 mt-14 mx-auto">
                        <p className="text-center text-3xl text-black">
                            {loading.message}
                        </p>
                    </div>
                )
                :
                (
                    <div style={{ backgroundImage: `url('${backgroundImage}')` }}
                        className="grid place-items-center h-screen bg-no-repeat bg-cover">
                        <Header />
                        <main>
                            <section>
                                <WeatherBoard />
                            </section>
                        </main>
                    </div >
                )
            }
        </>
    )
}