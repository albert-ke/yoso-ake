'use strict';

var currentTab = "lists";

$(document).ready(function() {
	console.log('moose');
	displayLists();
	$(".tab-icon").click(changeTab);
})

function changeTab(e) {
	var nextTab = $(this).attr("id");
	nextTab = nextTab.substring(0, nextTab.length - 5);
	//console.log(currentTab + ", " + nextTab);
	if (nextTab != currentTab) {
		//console.log("changing tabs");

		$("#" + currentTab + "-icon").removeClass("selected");
		$("#" + nextTab + "-icon").addClass("selected");

		currentTab = nextTab;

		if (currentTab == "lists") {
			displayLists();
		}
		else if (currentTab == "friends") {
			displayFriends();
		}
		else if (currentTab == "contact") {
			displayContact();
		}
	}
}

function displayLists() {
	// make sure content fits within middle section
	var headerHeight = $('header').height();
	var footerHeight = $('footer').height();

	$('.add').css('top', headerHeight);
	$('.add-form').css('top', headerHeight + $('.add').height());
	$('.main').css('margin-top', headerHeight);
	$('.main').css('margin-bottom', footerHeight); 

	$('.edit').css('height', $('.element').height());
	$('.menu-right').click(function() {
		function hideEdit(callback) {
			$('.add-form').hide();
			callback();
		}

		hideEdit(function() {
			$('.add').toggle('slide', {direction: 'up'});
		});
		
		if (parseInt($('.main').css('margin-top')) == headerHeight) {
			$('.main').animate({'margin-top': headerHeight + $('.add').height()});
		} else {
			$('.main').animate({'margin-top': headerHeight});
		}

  	$('.edit').toggle('slide', {direction: 'right'});
		$('.menu-right').text($(this).text() == 'edit' ? 'done' : 'edit');
	});

	$('.add').click(function() {
		$('.add-form').toggle();
	});
}

function displayList() {
	// make sure content fits within middle section
	var headerHeight = $('header').height();
	var footerHeight = $('footer').height();

	$('.main').css('margin-top', headerHeight);
	$('.main').css('margin-bottom', footerHeight); 

	$('.add').css('top', headerHeight);
	$('.add-form').css('top', headerHeight + $('.add').height());
	$('.edit').css('height', $('.element').height());

	$('.menu-right').click(function() {
		function hideEdit(callback) {
			$('.add-form').hide();
			callback();
		}

		hideEdit(function() {
			$('.add').toggle('slide', {direction: 'up'});
		});
		
		if (parseInt($('.main').css('margin-top')) == headerHeight) {
			$('.main').animate({'margin-top': headerHeight + $('.add').height()});
		} else {
			$('.main').animate({'margin-top': headerHeight});
		}

  	$('.edit').toggle('slide', {direction: 'right'});
		$('.menu-right').text($(this).text() == 'edit' ? 'done' : 'edit');
	});

	$('.add').click(function() {
		$('.add-form').toggle();
	});

	$('.item-element').click(function() {
		if ($(this).is('.todo')) {
			$(this).removeClass('todo').addClass('done');
			$(this).find('.status').text('done');
		}
		else {
			$(this).removeClass('done').addClass('todo');
			$(this).find('.status').text('todo');
		}
	});
}

function displayFriends() {
	// make sure content fits within middle section
	var headerHeight = $('header').height();
	var footerHeight = $('footer').height();

	$('.main').css('margin-top', headerHeight);
	$('.main').css('margin-bottom', footerHeight); 
	$('.main').html('friends');
}

function displayContact() {
	// make sure content fits within middle section
	var headerHeight = $('header').height();
	var footerHeight = $('footer').height();

	$('.main').css('margin-top', headerHeight);
	$('.main').css('margin-bottom', footerHeight); 
	$('.main').html('contact');
}
