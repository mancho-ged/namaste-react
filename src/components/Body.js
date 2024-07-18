import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
  const [listOfRestorants, setListOfRestorants] = useState(resList.categories);

  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestorants.map((res) => (
          <RestaurantCard resData={res} key={res.idCategory} />
        ))}
      </div>
    </div>
  );
};

export default Body;
