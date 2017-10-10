

var brewAPI = "19168d0b6f6ee2f248cb255e94cf89bc";

// $("#button").on("click", function()){
// 	searchVal = "#info";
// }
searchVal = "Michigan";

var baseUrl = "http://api.brewerydb.com/v2";
			var locale = "/?q=/locations/postalCode";
			var search = "/search?q="+searchVal+"/withLocations=y";
			var beerName = ""
			var type = "&type=beer";
			var key = "&key=19168d0b6f6ee2f248cb255e94cf89bc";
			var beer = /beer/;
			var brew = "?withBreweries=y";
			var limit = "&limit=5"
			// var id = response.data[0].id;
			var fullUrl = baseUrl + search + key;
			// var fullUrl = baseUrl + search + beerName + type + key;
var queryURL = fullUrl;

$( document ).ready(function() {
    console.log( "ready!" );


$.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      var dataArray = response.data;
       
      // create and display our gif's
      
          for (var i = 0; i < dataArray.length; i++){
          	$("#gifArea").append(dataArray[i].postalCode+"<br>");
          	$("#gifArea").append(dataArray[i].abv+"<br>");
            // var newDiv = $('<div>');
            //   newDiv.addClass('dbzGif'); 
    }})
})

// $.ajax({
// 	url
// })


    