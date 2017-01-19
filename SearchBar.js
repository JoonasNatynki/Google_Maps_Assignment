
function initializeSearchBar ()
{
    var form = document.getElementById('Search Form');

    form.addEventListener('submit', onSearchSubmitted);

    function onSearchSubmitted(event)
    {
        event.preventDefault();
        console.log('onSearchSubmitted');
        var searchValue = document.getElementById('Search_Bar').value;
        geocodeSearch(searchValue);
    }
}

function geocodeSearch(value)
{
    console.log('geocodeSearch');

    var geoCoder = new google.maps.Geocoder();
    geoCoder.geocode({'address': value}, onSearchResult);
}

function onSearchResult(result, status)
{
    console.log('GOT RESULT!!');

    if(status == google.maps.GeocoderStatus.OK)
    {
        var mapDiv = document.getElementById('map');
        //var googleMap = new google.maps.Map(mapDiv);
        console.log(result[0]);
        var coordinatesOfTheItem = result[0].geometry.location;
        googleMap.setCenter(coordinatesOfTheItem);
    }
}

initializeSearchBar();