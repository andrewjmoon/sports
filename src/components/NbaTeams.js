import React, { useState, useEffect } from 'react';
import '../App.css';

export default () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://www.balldontlie.io/api/v1/teams');
    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };

  return (
    /* <div>
      {items.map(item => (
        <p key={item.id}>
          <li>{item.name}</li>
        </p>
      ))} */
    <div>
      {items.map(item => (
        <div key={item.id}>
          <li>
            {item.first_name} {item.last_name} {item.position}
          </li>
        </div>
      ))}
    </div>
  );
};
