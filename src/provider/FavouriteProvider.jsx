import PropTypes from 'prop-types';
import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";
const FavouriteProvider = ({ children }) => {
    const [favouriteValue, setFavouriteValue] = useLocalStorage("favouriteLocation", [])

    const AddToFavourite = (location, latitude, longitude) => {
        setFavouriteValue([
            ...favouriteValue,
            {
                location: location,
                latitude: latitude,
                longitude: longitude
            }
        ])
        console.log(favouriteValue[0])
    }
    const removeFromFavourite = (location) => {
        const restValue = favouriteValue.filter((item) => item.location !== location)
        setFavouriteValue(restValue)
    }

    return (
        <FavouriteContext.Provider value={{ favouriteValue, AddToFavourite, removeFromFavourite }}>
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteProvider
FavouriteProvider.propTypes = { children: PropTypes.any }