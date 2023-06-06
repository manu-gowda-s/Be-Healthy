import React, { useCallback, useEffect, useState } from "react";
import './newscard.css';

export default function NewsCard() {
  const [news, setNews] = useState([]);

  const fetchJSONDataFrom = useCallback(async (path) => {
    const response = await fetch(path, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const data = await response.json();
    setNews(data);
  }, []);

  useEffect(() => {
    fetchJSONDataFrom("data/records.json");
  }, [fetchJSONDataFrom]);

  return (
    <div className="container-fluid">
      <div className="row">
        {news.map((health) => (
          <div className="col-xxl-4 col-xl-4 col-md-8 col-sm-12 mb-2" key={health.id} >
           <ul className="health-cards-wrapper">
              <li className="health-cards">
                <img src={health.image} alt='' className="healthImg"/ >
                <h3 className="fs-5 text-primary p-1">{health.title}</h3>
                <p className="fs-6 p-1">{health.article}</p>
              </li>
              </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
