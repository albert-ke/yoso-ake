// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	res.render('index', data);
};

exports.addList = function(req, res){
	name = req.query.name;
	description = req.query.description;
	newList = {
								"name": name,
								"description": description,
								"members": "Albert Ke"
						};
	data["lists"].push(newList);
	res.redirect('/');
};

exports.deleteList = function(req, res){
	var list = req.params.name;
	data["lists"] = data["lists"].filter(function(o){return o.name != list});
	res.redirect('/');
};

exports.test = function(req, res){
	console.log("index.test");
}
