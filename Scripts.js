var googleMap;
function initMap() 
{
        var defaultCoord = {lat: 60.220859, lng: 24.805229};
        googleMap = new google.maps.Map(
            document.getElementById('map'), 
            {
            zoom: 16,
            center: defaultCoord
            }
        );
        var marker = new google.maps.Marker({
          position: defaultCoord,
          map: googleMap
        });
}

initMap();