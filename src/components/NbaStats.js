import React, { useState, useEffect } from 'react';
import '../App.css';

export default () => {
  const [items, setItems] = useState([]);

  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchItems();
  }, [search]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${query}`
    );
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
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>
      {items.map(item => (
        <div key={item.id}>
          <li>
            {item.first_name} {item.last_name} : {item.position}
          </li>
        </div>
      ))}
    </div>
  );
};
