var map, infoWindow;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 6
      });
      infoWindow = new google.maps.InfoWindow;
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    };
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    };
// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
    function initAutocomplete() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 13,
        mapTypeId: 'roadmap'
      });
    // Create the search box and link it to the UI element.
    //<<< Need to link search term (city) to breweryDB >>>
    
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();
        if (places.length == 0) {
          return;
        }
        // Clear out the old markers.
        markers.forEach(function(marker) {
          marker.setMap(null);
        });
        markers = [];
        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
            places.forEach(function(place) {
              if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
              }
              var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
              };
              // Create a marker for each place.
              markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
              }));
              if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
              } else {
                bounds.extend(place.geometry.location);
              }
            });
            map.fitBounds(bounds);
        });
    };



    // On click function for Search button
 $("#runSearch").on("click", function(){
  searchVal = $("#searchCity").val().trim();

    //Empties the search results section
$("#tbodyid").empty();

 
  geoURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+ searchVal +"&key=AIzaSyAUDOon4WO3ZCaMTAeTtmIXVH_6_I9gi_M";
  console.log(searchVal);

  $(document).ready(function() {
    console.log( "ready!" );
//  takes a CITY NAME and returns latitude and longitude for the brewery API
$.ajax({
      url: geoURL,
      method: 'GET'
    })
    .done(function(response) {
         console.log(response);
         console.log(response.results[0].geometry.location.lat);
         console.log(response.results[0].geometry.location.lng);
         var searchLat = response.results[0].geometry.location.lat;
         var searchLong = response.results[0].geometry.location.lng;

searchBrewsInTown(searchLat, searchLong); 
})
         function searchBrewsInTown(searchLat, searchLong) {
        var authKey = "6bf963895d0729291380bc463329fa0e";
        //var queryURL = "http://api.brewerydb.com/v2/locations?locality=cary&key=6bf963895d0729291380bc463329fa0e";
        var queryURL2 = "https://api.brewerydb.com/v2/search/geo/point?lat=" + searchLat + "&lng=" + searchLong + "&key=" + authKey;
// 
        $.ajax({
            url: queryURL2,
            method: "GET"
        })
        .done(function(results) {
            console.log(results);
            var brewsResults = results.data;
            for (var i = 0; i < brewsResults.length; i++) {
                
              console.log(results.data[i].brewery.name);      
              console.log(results.data[i].streetAddress);
              console.log(results.data[i].locality);
              console.log(results.data[i].phone)        
              console.log(results.data[i].website);
              console.log(results.data[i].latitude);
              console.log(results.data[i].longitude);

  //Code to append results
                var tr = $('<tr>');
                var tdName = $('<td>').append(results.data[i].brewery.name);
                var tdAddress = $('<td>').append(results.data[i].streetAddress);
                var tdPhone = $('<td>').append(results.data[i].phone); 
                var tdWebsite = $('<td>').append("<a href='" + results.data[i].website + "'>" + results.data[i].website + "</a>");
    
                tr.append(tdName, tdAddress, tdPhone, tdWebsite );
                $('tbody').append(tr);
                
            } 
        })


    }
 

 })

})

  //This button clears the results section
  $('#clearAll').on('click', function () {
    $('#tbodyid').empty();
      console.log("All Clear!");
      
      });