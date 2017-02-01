var locations = [{
    'data': {
        'address': 'United Kingdom',
        'name': 'Felixstowe Port',
        //'tags': ['queens'],
    },
    'position': {
        'lat': 51.9633814,
        'lng': 1.3276758
    },
    'zoom': 7
}, {
    'data': {
        'address': 'United Kingdom',
        'name': 'Southamption Port',
        //'tags': ['brooklyn'],
    },
    'position': {
        'lat': 50.9168015,
        'lng': -1.435598
    },
    'zoom': 7
}, {
    'data': {
        'address': 'United Kingdom',
        'name': 'Eastbourn Port',
        //'tags': ['manhattan'],
    },
    'position': {
        'lat': 50.7824805,
        'lng': 0.2525862
    },
    'zoom': 8
}];


(function() {

    // store map locations list wrapper.
    var mapLocationsEl = $('.map-locations');

    // create a map object, and include the MapTypeId to add to the map type control.
    var mapOptions = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 51.9633814,
            lng: 1.32767585
        },
        mapTypeControl: 0,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
        streetViewControl: 0,
        zoom: 7,
        zoomControl: 0
    });

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);


    // store all our location markers.
    var markers = [];
	

    // our primary map tools functions.
    var mapTools = {
        addMarker: function(location, index) {
            var marker = new google.maps.Marker({
                'id': location.id,
                'data': location.data,
                'map': map,
                'position': location.position
            });
		
			
			//change color of marker
            marker.setIcon('https://www.google.com/mapfiles/marker_black.png');
			

            // create click event listener for each marker.
            marker.addListener('click', mapTools.focusOnLocation);
	
	
            // save the marker.
            markers.push(marker);
        },
        addToList: function(location) {
            $('ul', mapLocationsEl)
                .append(
                    '<li class="icon icon_port " data-id="' + location.id + '">' +
                    '<a><span class="s-place">' + location.data.name + '</span><span class="s-region">' +
                    location.data.address + '</span></a></li>'
                );
        },
		
		

        focusOnLocation: function() {
			
			
            var marker = this,
                $currentListItem = $('li[data-id="' + marker.id + '"]');
			

            // animate (bounce) selecter marker.
            marker.setAnimation(google.maps.Animation.BOUNCE);
			
			 // scroll to active list item when marker clicked.
       		// marker.addListener('click', function() {
      		//$('.alternate-location').animate({
			//scrollTop: $('.alternate-location li.active').position().top
            //scrollTop: $currentListItem.position().top
			//scrollTop: $('.alternate-location').position().top
            //}, 'slow');
		
			//});

            // increase zoom.
            //map.setZoom(8);

            // update interactive list active item.
            $currentListItem
                .addClass('active')
                .siblings()
                .removeClass('active');

            // move to selected location on map.
            map.panTo(marker.position);
	

            // animate for duration of one bounce (v3.13).
            setTimeout(function() {
                marker.setAnimation(null);
            }, 700);

        }
    };


    // add markers for all locations.
    locations.forEach(function(location, i) {
        // use index as unique id.
        location.id = i;

        mapTools.addMarker(locations[i]);
        mapTools.addToList(locations[i]);
    });

    // handle interactive list events.
    $('ul', mapLocationsEl).on('mouseover', 'li', function() {
        var locationId = $(this).data('id');
		
	

        google.maps.event.trigger(markers[locationId], 'click');
		
		

    });

})();