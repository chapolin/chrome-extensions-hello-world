var getValueFromLocalStorage = function (property) {
	var value = null;
	
	if(localStorage[property]) {
		value = localStorage[property];
	}
	
	return value;
};

var setValueToLocalStorage = function(property, value) {
	if(property && value) {
		localStorage.setItem(property, value);
	}
};

var showNotification = function() {
	if (window.Notification) {
		var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
	  var hour = time[1] % 12 || 12;               // The prettyprinted hour.
	  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
		
	  new Notification(hour + time[2] + ' ' + period, {
	    icon: 'images/toasty.jpg',
	    body: 'Toasty...'
	  });
	}
};
