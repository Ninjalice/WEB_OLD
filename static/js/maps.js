
function myMap() {
    var mapCanvas = document.getElementById("googlemap");
    var mapOptions = {
        center: new google.maps.LatLng(42.8309448, -1.6117365), zoom: 15
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

