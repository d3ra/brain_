const express = require('express');
const router = express.Router();
const config = require('../../config.json');

const mongojs = require('mongojs');
const db = mongojs(config.dbConnection, config.collections);

//Get all
router.get('/', (req, res, next) => {
	//res.send('PRODUCTS PAGE');
	db.products.find((err, products) => {
		if(err) {
			res.send(err);
		}
		res.json(products);
	})
});

//Get single
/*
router.get('/:id', (req, res, next) => {
	//console.log("product: " + req.params.id);
  // TODO controllo 12 caratteri
	db.products.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, product) => {
		if(err) {
			res.send(err);
		}
		res.json(product);
	})
});
*/

router.get('/:type', (req, res, next) => {
  db.products.findOne({ type: req.params.type }, (err, product) => {
    if (err) {
      res.send(err);
    }
    res.json(product);
  })
});

//Create Object
router.post('/', (req, res, next) => {
	let product = req.body;
	if(!product.name) {
		res.status(400);
		res.json({
			"error": "Bad data"
		})
	} else {
		db.products.save(product, (err, product) => {
			if(err) {
				res.send(err);
			}
			res.json(product);
		});
	}
});

//Delete
router.delete('/:id', (req, res, next) => {
	db.products.remove({_id: mongojs.ObjectId(req.params.id)}, (err, product) => {
		if(err) {
			res.send(err);
		}
		res.json(product);
	})
});

//Update
router.put('/:id', (req, res, next) => {
	let product = req.body;
	let updProd = {};

	if(product.name) {
		updProd.name = product.name;
	}
	if(product.code) {
		updProd.code = product.code;
	}
	if(product.price) {
		updProd.price = product.price;
	}

	if(!updProd) {
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	} else {
		db.products.update({_id: mongojs.ObjectId(req.params.id)}, updProd, {}, (err, product) => {
		if(err) {
			res.send(err);
		}
		res.json(product);
	})
	}
});


module.exports = router;
