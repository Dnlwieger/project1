
var brewAPI = "19168d0b6f6ee2f248cb255e94cf89bc";
var geoAPI = "AIzaSyAUDOon4WO3ZCaMTAeTtmIXVH_6_I9gi_M"
// GOOGLE API Geo Locator example URl:
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

// Brewery DB API Url examples:
// https://api.brewerydb.com/v2/breweries?/locations/locality&key=19168d0b6f6ee2f248cb255e94cf89bc
// https://api.brewerydb.com/v2/search?type=brewery&q=North%20Carolina&key=19168d0b6f6ee2f248cb255e94cf89bc

searchVal = "Durham";
beerSearchVal = "Two Hearted";
geoURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+ searchVal +"&key=AIzaSyAUDOon4WO3ZCaMTAeTtmIXVH_6_I9gi_M";
var baseUrl = "https://api.brewerydb.com/v2/";
            var locationSearch = "/locations/locality"
			var locale = "&withLocations";
			var search = "/search?type=beer&q="+ beerSearchVal;
			var newSearch = "search?type=brewery&q=" + searchVal;
			var beerName = ""
			var type = "type=breweries";
			var key = "&key=19168d0b6f6ee2f248cb255e94cf89bc";
			var beer = /beer/;
			var brew = "breweries?";
			var limit = "&limit=5"
			var geo = "/search/geo/point?lat=35.772096&lng=-78.638614"
			// var id = response.data[0].id;
			var fullUrl = baseUrl + search + key;
			newURL = "https://api.brewerydb.com/v2/breweries?/locations/locality&key=19168d0b6f6ee2f248cb255e94cf89bc"
			// var fullUrl = baseUrl + search + beerName + type + key;
var queryURL = fullUrl;
console.log(fullUrl);

$(document).ready(function() {
    console.log( "ready!" );
//  takes a CITY NAME and returns latitude and longitude for the brewery API
$.ajax({
      url: geoURL,
      method: 'GET'
    })
		.done(function(response) {
         
         console.log(response.results[0].geometry.location.lat);
         var searchLat = response.results[0].geometry.location.lat;
         console.log(response.results[0].geometry.location.lng);
         var searchLong = response.results[0].geometry.location.lng;

searchBrewsInTown(searchLat, searchLong); 
})
         function searchBrewsInTown(searchLat, searchLong) {
        var authKey = "6bf963895d0729291380bc463329fa0e";
        //var queryURL = "http://api.brewerydb.com/v2/locations?locality=cary&key=6bf963895d0729291380bc463329fa0e";
        var queryURL2 = "http://api.brewerydb.com/v2/search/geo/point?lat=" + searchLat + "&lng=" + searchLong + "&key=" + authKey;
// 
        $.ajax({
            url: queryURL2,
            method: "GET"
        })
        .done(function(results) {
            
            var brewsResults = results.data;
            for (var i = 0; i < brewsResults.length; i++) {
            	console.log(results.data[i].brewery.name);
            	console.log(results.data[i].streetAddress);
            	console.log(results.data[i].locality);
            	console.log(results.data[i].phone);            	
            	console.log(results.data[i].website);
            	console.log(results.data[i].latitude);
            	console.log(results.data[i].longitude);
            } 
        })
    }
 })

var beerSearchVal = beerSearchVal.split(' ').join('_');
           $.ajax({
      url: queryURL,
      method: 'GET'
    })
        .done(function(response) {
         console.log(response);
         for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i].name);
                console.log(response.data[i].style.name);
                console.log(response.data[i].description);
                console.log(response.data[i].abv);

            } 

            var getBeerName = $('<h3>').html(response.data[0].name);
            $("#beerDescription").append(getBeerName);
            var getBeerStyle = $('<h4>').html(response.data[0].style.name);
              $("#beerDescription").append(getBeerStyle);
            var getBeerDescription = $('<p>').html(response.data[0].description);
              $("#beerDescription").append(getBeerDescription);
              var abvLabel = $('<h4>').html("ABV: "+ response.data[0].abv);
              $("#beerAbv").html(abvLabel);
              
 
})

        $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('#modal1').modal();
  });
       // .locations[i].locality
      // $.each(response.data[i].locations.locality;);
      // console.log(citySearch);
//       for (var i = 0; i < data.collection.items.length; i++) {
//     if(typeof(data.collection.items[i].data[2].value.packet_data_field.application_data_params) != 'undefined'){
//     var data = data.collection.items[i].data[2].value.packet_data_field.application_data_params.hk5;
//     }
//     console.log(belaMode);
// }

			//       var dataArray = response.data;
			// for (var i = 0; i < dataArray.length; i++){
			//           	  for (var j = 0; j < dataArray[i].locations.length; j++) {

			//           	 		var citySearch = response.data[i].locations[j].locality;
			//           	 		if (citySearch != 'undefined') {
			//           			   j++; }
			//           	 				else {
			//           	 				$("#listArea").append(citySearch+"<br>");
			//           					 }				
			//           	  }
			// }  	 	
       
          	// $("#listArea").append(dataArray[i].abv+"<br>");
          
            
   




    