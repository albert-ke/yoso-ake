// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('friends', data);
	//res.redirect('/friends');
};

exports.addFriend = function(req, res) {   
	// Your code goes here
	firstName = req.query.firstName;
	lastName = req.query.lastName;
	email = req.query.email;

	newFriend = {
		"firstName": firstName,
		"lastName" : lastName,
		"email": email
	};
	
	console.log(newFriend);
	data["friends"].push(newFriend);

	console.log(data);
	//res.render('friends', data);
	res.redirect('/friends');
};

exports.searchFriend = function(req, res) {
	var friends = data[friends];
	res.json(friends);
};
