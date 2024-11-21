const express = require('express');
const router = express.Router();
const axios = require('axios');
const News = require('../models/news');
require('dotenv').config();
// Fetch news from an external API
router.get('/fetch', async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
    );

    // Save articles to the database
    const articles = response.data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.urlToImage,
      source: article.source.name,
      publishedAt: article.publishedAt,
    }));

    await News.insertMany(articles);
    res.status(200).json({ message: 'News fetched and stored' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get news from the database
router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;