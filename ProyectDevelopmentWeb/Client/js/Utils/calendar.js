function inicializeCalendar() {
	var argEvent = [];
	var event;
	console.log(calendar);
//	var calendarMatches = requestAjax('getCallendarMatches');
//	for (int = 1; int <= Object.keys(calendarMatches).length; int++) {
//		for(int2 = 0; int2 < Object.keys(calendarMatches[int]).length; int2++){
//			event = {title: 'J'+calendarMatches[int][int2]['jornada'],start: calendarMatches[int][int2]['fecha'],className: 'evento'};
//		}
//		argEvent.push(event);
//	}
	$('#calendar').fullCalendar({
		lang: 'es',
		header: {
			left: 'title',
			center: '',
			right: 'prev,next,today'
		},
		defaultDate: Date.now(),
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		//defaultDate: '2014-10-21',
		events: calendar,
        eventClick: function(e,r,t){
        	document.getElementById(e.title).selected = 'true';
        	change_marker();
    	}
	});
}