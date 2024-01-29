import { useEffect, useState } from "react";
import Menucard from "./Menucard";

import Shimmer from "./Shimmer";
import Usestatus from "../utilis/Usestatus";
const Body = () => {
  // local state variable Most powerful variable
  const [listofrestaurent, setlistofrestaurent] = useState([]); //Array destructurnig

  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const d = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); // it return promist thats why we used async and await fxn;
    const json = await d.json();
    // console.log(json);
    //    Optional Chaining
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setlistofrestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const status = Usestatus();

  if (status === false) return <h1>Offline</h1>;

  return listofrestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="textbox"
          value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
        ></input>
        <button
          className="btntext"
          onClick={() => {
            const filterlist = listofrestaurent.filter((x) =>
              x.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            setlistofrestaurent(filterlist);
          }}
        >
          Search
        </button>
        <button
          className="rating-btn"
          onClick={() => {
            const h = listofrestaurent.filter(
              (swiggi) => swiggi.info.avgRating > 4
            );

            setlistofrestaurent(h);
          }}
        >
          Ratings
        </button>
      </div>
      <div className="Rest-MenuCard">
        {listofrestaurent.map((restaurent) => (
          <Menucard key={restaurent.info.id} swiggidata={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
