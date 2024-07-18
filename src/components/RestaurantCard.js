const RestaurantCard = (props) => {
  const { resData } = props;
  const { strCategoryThumb, strCategory, strCategoryDescription, avgRating } =
    resData;

  return (
    <div className="res-card">
      <img alt="res-image" className="res-image" src={strCategoryThumb} />
      <h4>{strCategory}</h4>
      <h4>rating: {avgRating}</h4>
      <h4>{strCategoryDescription}</h4>
    </div>
  );
};

export default RestaurantCard;
