var locations = [
    //21,22
    [20.4629122,-103.4705729,'img/fichas/IVA.jpg','HOMBRE','ISMAEL','ISMAEL','','VIVAS','ACEVES','null','TLAJOMULCO DE ZUÃ‘IGA'],
    [20.643741,-103.438816,'img/fichas/MAPL.jpg','HOMBRE','MARCO ANTONIO','MARCO ANTONIO','','PENA','LOPEZ','EL COLLI','ZAPOPAN'],
    [20.6087498,-103.4294234,'img/fichas/FGR.jpg','MUJER','FABIOLA','FABIOLA','MONTSERRAT','REGALADO','GUERRERO','EL MANTE','ZAPOPAN'],
    [19.7681061,-104.3585715,'img/fichas/MAT.jpg','HOMBRE','MANUEL','MANUEL','','AMANTE','TORREZ','null','AUTLAN DE NAVARROS'],
    [21.2504666,-102.3470442,'img/fichas/LEGC.png','HOMBRE','LUIS','LUIS','ENRIQUE','GONZALEZ','CRUZ','null','SAN JUAN DE LOS LAGOS'],
    [21.3552095,-101.9405422,'img/fichas/AWM.jpg','HOMBRE','ANSELMO','ANSELMO','','WARIO','MARTINEZ','null','LAGOS DE MORENO'],
    [20.6551812,-103.7112751,'img/fichas/JEYA.jpg','HOMBRE','JOSE','JOSE','ELIAS','YANEZ','AVILA','null','TALA'],
    [20.6932724,-103.343748,'img/fichas/ZJVG.png','MUJER','ZULEYMA','ZULEYMA','JAEL','VILLANUEVA','GONZALEZ','ALCALDE BARRANQUITAS','ZAPOPAN'],
    [20.8552617,-104.9775836,'img/fichas/OALE.png','HOMBRE','OSCAR','OSCAR','ANTONIO','LOPEZ','ENAMORADO','SAN SEBASTIAN DEL OESTE','PUERTO VALLARTA'],
    [20.6209359,-103.3745307,'img/fichas/MFAA.jpg','MUJER','MARIA','MARIA','FERNANDA','AZPEITIA','AMADOR','POLANCO','GUADALAJARA']
  ];
  
  var lastOpenedWindow;
  var urlImagen;
  
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {lat: 20.553789, lng: -103.4492546}
    });
  
    setMarkers(map);
  
  
  //$("#myModal").modal()
  
  // Data for the markers consisting of a name, a LatLng and a zIndex for the
  // order in which these markers should display on top of each other.
  
  function setMarkers(map) {
    // Adds markers to the map.
  
    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.
  
    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    var image = {
      //url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
  
      url: 'img/hombre_lleno.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32)
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };
    var markers = new Array();
    for (var i = 0; i < locations.length; i++) {
      var location = locations[i];
      console.log(location[3]);
      if(location[3]=="MUJER"){
          urlImagen='img/mujer_lleno.png';
      }
      else{
        urlImagen='img/hombre_lleno.png'
      }
      var marker = new google.maps.Marker({
        position: {lat: location[0], lng: location[1]},
        map: map,
        icon: {url: urlImagen,
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(20, 32),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32)},
        shape: shape,
        title: location[4],
        //zIndex: beach[3]
      });
      markers.push(marker);
  
      attachImage(marker, location[2]);
  
  
    }
  }
      function attachImage(marker, imageURL) {
          var InfoWindow = new google.maps.InfoWindow({
  
            content: "<div><img src='"+imageURL+"'></div>"
            //content: imageURL
            //content: "<img src=\""+location[2]+"\">"
          });
  
        marker.addListener('click', function() {
          closeLastOpenedWindow();
          InfoWindow.open(marker.get(map), marker);
          lastOpenedWindow = InfoWindow;
        });
      }
      function closeLastOpenedWindow(){
  
        if(lastOpenedWindow){
          lastOpenedWindow.close();
        }
      }
          google.maps.event.addDomListener(window, 'load', initMap);
  }