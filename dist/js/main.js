require([
    "esri/map",
    "esri/arcgis/utils",
    "esri/dijit/Legend",
    "esri/config",
    "dojo/domReady!"
], function(Map, arcgisUtils, Legend, esriConfig) {
    //arcgisUtils.createMap("9a37e33ec60e464b895218b524d60457", "map").then(function (response) {
    //    map = response.map;
    //    //console.log(map);
    //
    //    var legend = new Legend({
    //        map: map,
    //        layerInfos:(arcgisUtils.getLegendLayers(response))
    //    }, "legendDiv");
    //
    //    legend.startup();
    //});
    var map = new Map("map", {
        center: [-98, 40],
        zoom: 4,
        basemap: "topo"//"streets"
    });

    var legend = new Legend({
        map: map,
        layerInfos: {} //need find out where get layer info
    }, "legendDiv");

    legend.startup();
    map.on('click', function(e){
        console.log(e);
    })
});
