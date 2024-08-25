import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log(json);
    setResInfo(json.meals);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul className="menu-list">
        {resInfo.map((meal) => (
          <li key={meal.idMeal} className="menu-card">
            <h4>{meal.strMeal}</h4>
            <img src={meal.strMealThumb} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
