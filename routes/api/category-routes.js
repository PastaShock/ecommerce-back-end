const router = require('express').Router();
// Category is the sequelize extention from model that declares a datatype/config
// for pulling from the database.

const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    // include in the find all:
    include: {
      // call model name (from models)
      model: Product,
      // declare columns to return
      attributes:['id', 'prod_name', 'price', 'stock', 'cat_id'],
    },
  }).then(data => {
    if(!data) {
      res.status(404).json({message: 'no categories'})
      return;
    }
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
   Category.findOne({
    //  filter down using SQL WHERE
     where: {
      //  select column and value for selecting a row
       id: req.params.id
     },
     include: {
       model: Product,
       attributes: ['id', 'prod_name', 'price', 'stock', 'cat_id']
     },
  }).then(data => {
    if(!data) {
      res.status(404).json({message: 'no categories'})
      return;
    }
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    // create with key:value
    cat_name: req.body.cat_name,
  }).then(data => res.json(data))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(data => {
    if(!data) {
      res.status(404).json({message: 'no categories found'})
      return;
    }
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(data => {
    if(!data) {
      res.status(404).json({message: 'no categories found'})
      return;
    }
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

module.exports = router;
