import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("hooks");
  const [search, setSearch] = useState('hooks');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setIsLoading(true);
      try{
      const data = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${search}`
      );
      setResults(data.data.hits);
    } catch (error) {
      setError(true);
   
      console.log(error);
    }
      setIsLoading(false);
    };
    fetchData();
    //Once the query changes, the data request should fire again.
  }, [search]);

  const renderedHits = results.map((hit) => {
    return (
      <li key={hit.ObjectID}>
        <a href={hit.url}>{hit.title}</a>
      </li>
    );
  });

  return (
    <div>
      <label>Search:  </label>
      <input type="text" onChange={(e) => {setQuery(e.target.value)}} value={query}></input>
      <button onClick={() => setSearch(query)}> Search on Algolia</button>
      {isError && <div>Error!</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
      <ul>{renderedHits}</ul>
      )}
    </div>
  );
};

export default App;
