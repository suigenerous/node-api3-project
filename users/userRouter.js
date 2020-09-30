const express = require('express');
const db = require('./userDb')
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const returnObj = await db.insert(req.body);
    res.status(201).json({data: returnObj});
  } catch {
    res.status(500).json({message: "internal server error"});
  };
});

router.post('/:id/posts', async (req, res) => {
  try {

  } catch {
    res.status(500).json({message: "internal server error"});
  }
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
