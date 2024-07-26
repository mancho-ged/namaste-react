import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestorants, setListOfRestorants] = useState([]);
  const [searchText, setSearchText] = useState('');

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
    const json = await data.json();
    console.log(json);
    setListOfRestorants(json?.categories);
    setFilteredRestaurants(json?.categories);
  };

  // Conditional Rendering
  return listOfRestorants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const newListOfRestorants = listOfRestorants.filter((res) =>
                res.strCategory.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(newListOfRestorants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestorants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestorants(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <RestaurantCard resData={res} key={res.idCategory} />
        ))}
      </div>
    </div>
  );
};

export default Body;
