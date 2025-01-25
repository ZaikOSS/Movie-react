import React, { useState, useEffect } from "react";
import "./schedule.css";
import Card from "../components/Card";
function Schedule() {
  const filterList = [
    {
      _id: 1,
      name: "All",
      active: true,
    },
    {
      _id: 2,
      name: "Romance",
      active: false,
    },
    {
      _id: 3,
      name: "Action",
      active: false,
    },
    {
      _id: 4,
      name: "Thriller",
      active: false,
    },
    {
      _id: 5,
      name: "Horror",
      active: false,
    },
    {
      _id: 6,
      name: "Adventure",
      active: false,
    },
  ];

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);

  const fetchData = async () => {
    try {
      const response = await fetch("https://zaikoss.github.io/api_movies/movieData.json");
      if (!response.ok) {
        throw new Error("Failed to fetch movie data");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const handleFilterMovies = (category) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );
    if (category === "All") {
      setMovies(data);
      return;
    }
    setMovies(data.filter((movie) => movie.category === category));
  };

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluide">
        <div className="row">
          <h4 className="section-title">Opening this week</h4>
        </div>
        <div className="row">
          <ul className="filters">
            {filters.map((filter) => (
              <li
                key={filter._id}
                className={`${filter.active ? "active" : undefined}`}
                onClick={() => {
                  handleFilterMovies(filter.name);
                }}
              >
                {filter.name}
              </li>
            ))}
            ``
          </ul>
        </div>
      </div>
      <div className="row mt-5">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <Card key={movie._id} movie={movie} />)}
      </div>
    </section>
  );
}

export default Schedule;
