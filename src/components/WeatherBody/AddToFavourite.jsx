import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

export default function AddToFavourite() {
    const [isFavourite, setIsFavourite] = useState(false);
    const { weatherData } = useContext(WeatherContext);
    const { AddToFavourite, removeFromFavourite, favouriteValue } =
        useContext(FavouriteContext);
    const { location, latitude, longitude } = weatherData;

    const handleFavourite = (location, latitude, longitude) => {
        const found = favouriteValue.find((item) => item.location === location);
        if (!found) {
            AddToFavourite(location, latitude, longitude);
        } else {
            removeFromFavourite(location);
        }
        setIsFavourite(!isFavourite);
    };
    useEffect(() => {
        const found = favouriteValue.find((item) => item.location === location);
        setIsFavourite(found);
    }, []);

    return (
        <div className="md:col-span-2">
            <div
                onClick={() => {
                    handleFavourite(location, latitude, longitude);
                }}
                className="flex items-center justify-end space-x-6"
            >
                <button
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5
                 cursor-pointer rounded-md bg-[#C5C5C54D]"
                >
                    <span>Add to Favourite</span>
                    <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="" />
                </button>
            </div>
        </div>
    );
}

