db.products.remove({});
db.products.insert({
	name: "hoodie_bb_w",
	code: "COD1",
	price: 20,
	size: "L",
	color: "white",
	type: "hoodie",
	category: ["hoodie", "boy", "girl"],
	quantity: 5
});
db.products.insert({
	name: "hoodie_bb_b",
	code: "COD2",
	price: 20,
	size: "L",
	color: "black",
	type: "hoodie",
	category: ["hoodie", "boy", "girl"],
	quantity: 3
});
db.products.insert({
	name: "hat_brain_r",
	code: "COD3",
	price: 15,
	size: "L",
	color: "red",
	type: "hat",
	category: ["hat", "boy", "girl"],
	quantity: 10
});