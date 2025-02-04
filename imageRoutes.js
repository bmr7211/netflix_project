// /Users/shinji81/Downloads/my-app_fe/backend/routes/imageRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../database/db');

// 키워드 목록 가져오기
router.get('/keywords', async (req, res) => {  
  console.log('키워드 요청 받음'); 

  try {
    const query = 'SELECT * FROM keywords';
    const [results] = await db.promise().query(query); 
    res.json(results); 
  } catch (err) {
    console.error('Error fetching keywords:', err);
    res.status(500).send('Error fetching keywords');
  }
});

// 콘텐츠 검색
router.get('/contents', async (req, res) => { 
  let keywords = req.query.keywords; 

  if (!keywords || keywords.length === 0) {
    return res.json([]);
  }

  if (typeof keywords === 'string') {
    keywords = [decodeURIComponent(keywords)]; 
  } else {
    keywords = keywords.map(keyword => decodeURIComponent(keyword)); 
  }
  console.log("Decoded Keywords:", keywords);
  const placeholders = keywords.map(() => '?').join(', ');

  const query = `
    SELECT DISTINCT c.*
    FROM contents c
    JOIN contents_keywords ck ON c.contents_id = ck.contents_id
    JOIN keywords k ON ck.keywords_id = k.keywords_id
    WHERE k.keywords_name IN (${placeholders})
    GROUP BY c.contents_id
    HAVING COUNT(DISTINCT k.keywords_name) = ?;
  `;

  try {
    const [results] = await db.promise().query(query, [...keywords, keywords.length]);
    res.json(results);
  } catch (err) {
    console.error('Error fetching contents:', err);
    res.status(500).send('Error fetching contents');
  }
});

// 콘텐츠 상세 정보 + 키워드 포함
router.get('/api/contents/:id', async (req, res) => {
  const contentId = req.params.id;

  const query = `
    SELECT c.*, JSON_ARRAYAGG(k.keywords_name) AS keywords
    FROM contents c
    JOIN contents_keywords ck ON c.contents_id = ck.contents_id
    JOIN keywords k ON ck.keywords_id = k.keywords_id
    WHERE c.contents_id = ?
    GROUP BY c.contents_id;
  `;

  try {
    const [results] = await db.promise().query(query, [contentId]);
    console.log("Returned Content Data:", results[0]);
    res.json(results[0]);
  } catch (err) {
    console.error('Error fetching content details:', err);
    res.status(500).send('Error fetching content details');
  }
});

module.exports = router;
