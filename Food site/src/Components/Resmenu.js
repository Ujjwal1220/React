import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Resmenu = () => {
  const [res, setres] = useState(null);
  const prams = useParams();
  console.log(prams);
  useEffect(() => {
    fetchmenu();
  }, []);

  const fetchmenu = async () => {
    const d = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await d.json();
    setres(json.data);
    console.log(json.data);
  };

  if (res === null) return <Shimmer />;

  return (
    <div className="menu">
      <li>
        <h1>
          {
            res?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants[0]?.info.name
          }
        </h1>
        <p>
          {
            res?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants[0]?.info.costForTwo
          }
        </p>

        <p>
          Ratings{" "}
          {
            res?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants[0]?.info.avgRating
          }
        </p>
        <p>
          <b> Cuisines:- </b>
          {res?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info.cuisines.join(
            "  "
          )}
        </p>
      </li>
      {/* {res.map((element)=> (
        <Resmenu 
       ))} */}
    </div>
  );
};
export default Resmenu;
