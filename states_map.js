(function ($) {

  $(function(){

    $('#map').usmap({
      'stateStyles': {
        fill: "#6699ff",
        stroke: "ff66cc",
        "stroke-width": 2,
        "stroke-linejoin": "round",
        scale: [1, 1]
      },
      'stateHoverStyles': {
        fill: "#C7F464",
        stroke: "#ff66cc",
        scale: [1.1, 1.1]
      },
     
      'labelBackingStyles': {
        fill: "#6699ff",
        stroke: "#ff66cc",
        "stroke-width": 2,
        "stroke-linejoin": "round",
        scale: [1, 1]
      },
     
      //'stateSpecificHoverStyles': {
      //  'HI' : {fill: '#ff6633'}
      // },
      
      'mouseoverState': {
        'HI' : function(event, data) {
          //return false;
        }
      },
    
    'click' : function(event, data) {
      console.log(data.name);
      $('#state-info').load('admin/states_map?state='+data.name+' #state-details');
         //$('#state-info')
          //.text(data.name)
          //.stop()
          //.css('backgroundColor', 'white')
          //.animate({backgroundColor: 'white'}, 1000);
       }

    });

  });

}(jQuery));