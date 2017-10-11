

var brewAPI = "19168d0b6f6ee2f248cb255e94cf89bc";

// $("#button").on("click", function()){
// 	searchVal = "#info";
// }

var searchResults = "";



 
searchVal = "Michigan";

var baseUrl = "https://api.brewerydb.com/v2";
			var locale = "/?q=/locations/postalCode";
			var search = "/search?q="+ searchVal +"&withLocations=y";
			var beerName = ""
			var type = "&type=beer";
			var key = "&key=19168d0b6f6ee2f248cb255e94cf89bc";
			var beer = /beer/;
			var brew = "&withBreweries=y";
			var limit = "&limit=5"
			var geo = "/search/geo/point?lat=35.772096&lng=-78.638614"
			// var id = response.data[0].id;
			var fullUrl = baseUrl + search + brew + limit + key;
			// var fullUrl = baseUrl + search + beerName + type + key;
var queryURL = fullUrl;
console.log(fullUrl);

$(document).ready(function() {
    console.log( "ready!" );

$.ajax({
      url: queryURL,
      method: 'GET'
    })
		.done(function(response) {
         console.log(response);
      
       // .locations[i].locality
      // $.each(response.data[i].locations.locality;);
      // console.log(citySearch);
//       for (var i = 0; i < data.collection.items.length; i++) {
//     if(typeof(data.collection.items[i].data[2].value.packet_data_field.application_data_params) != 'undefined'){
//     var data = data.collection.items[i].data[2].value.packet_data_field.application_data_params.hk5;
//     }
//     console.log(belaMode);
// }

			      var dataArray = response.data;
			for (var i = 0; i < dataArray.length; i++){
			          	  for (var j = 0; j < dataArray[i].locations.length; j++) {

			          	 		var citySearch = response.data[i].locations[j].locality;
			          	 		if (citySearch != 'undefined') {
			          			   j++; }
			          	 				else {
			          	 				$("#listArea").append(citySearch+"<br>");
			          					 }				
			          	  }
			}  	 	
        })
          
          	// $("#listArea").append(dataArray[i].abv+"<br>");
          
            
    })




    