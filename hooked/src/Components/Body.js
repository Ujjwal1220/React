import { useState } from "react";
import swiggilist from "../utilis/Swigglist";
import Menucard from "./Menucard";

const Body = () => {
  // local state variable Most powerful variable
  const [listofrestaurent, setlistofrestaurent] = useState(swiggilist); //Array destructurnig

  return (
    <div className="body">
      <div className="search">
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
