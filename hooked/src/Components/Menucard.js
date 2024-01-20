import { swiggilogo } from "../utilis/constant";

const Menucard = (props) => {
  const { swiggidata } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    deliveryTime,
    costForTwo,
  } = swiggidata?.info;

  return (
    <div className="menucard">
      <img
        className="foodlogo"
        alt="Food image"
        src={swiggilogo + swiggidata.info.cloudinaryImageId}
      ></img>
      <div className="character">
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRatingString}star</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};
export default Menucard;
