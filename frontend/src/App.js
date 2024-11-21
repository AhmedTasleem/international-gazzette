import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await axios.get('http://localhost:5000/api/news');
      setNews(data);
    };

    fetchNews();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">News Aggregator</h1>
      <div className="row">
        {news.map((article, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <img src={article.image} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
