import React, { useState, useEffect } from 'react';
import './MainSection.css'; // Create a CSS file for styling

const MainSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch news from an API (this will be explained later)
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=9317057e1c2f4a46831357f52f2be78a'
        );
        const data = await response.json();
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);
  return (
    <div className="main-section-container">
      {/* Left Ad Section */}
      <div className="ads-section left-ads">
        <p>Ad Space</p>
      </div>

      {/* Main News Section */}
      <div className="main-news">
        {loading ? (
          <p>Loading news...</p>
        ) : (
          news.map((article, index) => (
            <div key={index} className="news-card">
              <img src={article.urlToImage} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))
        )}
      </div>

      {/* Right Ad Section */}
      <div className="ads-section right-ads">
        <p>Ad Space</p>
      </div>
    </div>
  );
};

export default MainSection;
