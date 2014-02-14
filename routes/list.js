// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log("list.view");
	res.render('list', data);
};

exports.addItem = function(req, res){
	console.log("list.addItem");
	name = req.query.name;
	quantity = req.query.quantity;
	newItem = {
								"name": name,
								"quantity": quantity,
								"completed": false
						};
	console.log(data["lists"][0]["contents"]);
	data["lists"][0]["contents"].push(newItem);
	res.redirect('/list/Groceries');
};

exports.deleteItem = function(req, res){
	var item = req.params.itemname;
	var allLists = data["lists"];
	for (i = 0; i < allLists.length; i++) {
		for (j = 0; j < allLists[i]["contents"].length; j++) {
			if (allLists[i]["contents"][j]["name"] == item) {
				allLists[i]["contents"].splice(j, 1);
				console.log(allLists[i]["contents"][j]);
			}
		}
	}
	res.redirect('/list/Groceries');
};

exports.test = function(req, res){
	console.log("list.test");
	res.redirect('/list/Groceries');
}
