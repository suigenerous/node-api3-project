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
    const returnObj = await db.insert(req.body);
    res.status(201).json({data: returnObj});
  } catch {
    res.status(500).json({message: "internal server error"});
  };
});

router.get('/', async (req, res) => {
  try {
    const returnObj = await db.get();
    res.status(200).json({data: returnObj});
  } catch {
    res.status(500).json({message: "internal server error"});
  };
});

router.get('/:id', async (req, res) => {
  try {
    const returnObj = await db.getById(req.params.id);
    res.status(200).json({data: returnObj});
  } catch {
    res.status(500).json({message: "internal server error"});
  };
});

router.get('/:id/posts', async (req, res) => {
  try {
    const returnObj = await db.getUserPosts(req.params.id);
    res.status(200).json({data: returnObj});
  } catch {
    res.status(500).json({message: "internal server error"});
  };
});

router.delete('/:id', async (req, res) => {
  try {
    const returnObj = await db.remove(req.params.id);
    res.status(204).json({data: returnObj});
  } catch {
    res.status(500).json({message: "internal server error"});
  };
});

router.put('/:id', async (req, res) => {
  try {
    const count = await db.update(req.params.id, req.body);
    if (count == 1){
      res.status(200).json({data: returnObj});
    } else {
      throw error;
    } 
  } catch {
    res.status(500).json({message: "internal server error"});
  };
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
