import { useContext } from "react"
import { FavouriteContext, LocationContext } from "../../context"
export default function FavouriteListModal() {
    const { favouriteValue } = useContext(FavouriteContext)
    const { setSelectedLocation } = useContext(LocationContext)


    return (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
            <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
            <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                {favouriteValue.length > 0 ? (

                    favouriteValue.map((item) => (
                        <li key={item.location}
                            onClick={() => { setSelectedLocation({ ...item }) }}
                            className="hover:bg-gray-200">

                            {item.location}
                        </li>
                    ))
                ) : (
                    <li className="hover:bg-gray-200">No Favourite Location found</li>
                )}

            </ul>
        </div>
    )
}