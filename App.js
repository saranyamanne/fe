import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import DisplayList from './DisplayList';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://api.publicapis.org/entries')
      .then(response => {
        setData(response.data.entries);
        setFilteredData(response.data.entries);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Filter data based on the search query
    setFilteredData(
      data.filter(item =>
        item.API.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, data]);

  return (
    <div className="App">
      <h1>Public APIs</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <DisplayList data={filteredData} />
    </div>
  );
}

export default App;
