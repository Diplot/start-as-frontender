'use strict';

$(document).ready( () => {
  console.log('app started');
  new Catalog();
});

class Catalog {
  constructor () {

    $("#accordion" ).accordion({
      animate: 500,
      collapsible: true
    });
    
    this.initMap();
    this.startCountdown();
    this.startTwenty();
    this.startZoom();
  }
  
  initMap () {
        var uluru = new google.maps.LatLng(48.4650377 ,35.0531267);
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
          
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });   
    
        let autocomplete = new google.maps.places.Autocomplete(document.getElementById('map-autocomplete'));
         autocomplete.bindTo('bounds', map);
         
        }
        
  startCountdown () {
    let counter = $("#getting-started");
    counter.countdown("2018/01/01", (e) => {
      counter.text(
        e.strftime('%D days %H:%M:%S')
      );
    });
  }
  
  startTwenty() {
     $("#twentytwenty-container").twentytwenty();
  }
  
  startZoom () {
    $('#zoom_01').elevateZoom({
      zoomType: "inner",
      cursor: "crosshair",
      zoomWindowFadeIn: 500,
      zoomWindowFadeOut: 750
    }); 
  }
}