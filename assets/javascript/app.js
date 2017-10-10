

var brewAPI = "dcdc14443d5c9b669aa7e11d1ea8c526";

var queryURL = "https://api.brewerydb.com/v2/?key=19168d0b6f6ee2f248cb255e94cf89bc";

$( document ).ready(function() {
    console.log( "ready!" );


$.ajax({
      url: queryURL,
      method: 'GET/beer/O3tmVI/breweries'
    }).done(function(response) {
      console.log(response);
    });


// $.ajax({
// 	url
// })


});    