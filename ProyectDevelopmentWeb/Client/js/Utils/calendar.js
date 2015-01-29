function inicializeCalendar() {
	var argEvent = [];
	var event;
	$('#calendar').fullCalendar({
		lang: 'es',
		header: {
			left: 'title',
			center: '',
			right: 'prev,next,today'
		},
		defaultDate: Date.now(),
		editable: false,
		eventLimit: false,
		events: calendar,
        eventClick: function(e,r,t){
        	document.getElementById(e.title).selected = 'true';
        	console.log(e._id);
        	extractMatches(e._id);
    	}
	});
}