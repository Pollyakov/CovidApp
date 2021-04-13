import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  

  useEffect(() => {

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchData = async () => {
      const data = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=Putin`, {
          cancelToken: source.token,
        }
      );
    
      setData(data.data.hits); 
    } 
   
    setTimeout(()=>fetchData(),20000);

    return () => {
      source.cancel("user cancelled");
    };
   
  });

  const renderedHits = data.map((hit) => {
    return (
      <li key={hit.ObjectID}>
        <a href={hit.url}>{hit.title}</a>
      </li>
    );
  });

  return (
    <div>
      <button onClick={()=>setToggle(!toggle)}>{toggle ? "Hide Data" : "Display Data" }</button>
      <ul>{toggle&&renderedHits}</ul>
    </div>
  );
};

export default App;
