import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To extract the category from the URL
import './CategoryPage.css'; // Optional: Add your styles here

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get category name from the URL
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        // Fetch category-specific news from your API (replace with your API endpoint)
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=${categoryName}&apiKey=9317057e1c2f4a46831357f52f2be78a`
        );
        const data = await response.json();
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchCategoryNews();
  }, [categoryName]); // Re-fetch whenever the category changes

  return (
    <div className="category-page">
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div className="news-list">
          {news.map((article, index) => (
            <div key={index} className="news-card">
              <img src={article.urlToImage} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;