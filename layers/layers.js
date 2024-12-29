var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PITBHR_1 = new ol.format.GeoJSON();
var features_PITBHR_1 = format_PITBHR_1.readFeatures(json_PITBHR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PITBHR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PITBHR_1.addFeatures(features_PITBHR_1);
var lyr_PITBHR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PITBHR_1, 
                style: style_PITBHR_1,
                popuplayertitle: "PIT BHR",
                interactive: true,
    title: 'PIT BHR<br />\
    <img src="styles/legend/PITBHR_1_0.png" /> PIT 1<br />\
    <img src="styles/legend/PITBHR_1_1.png" /> PIT 3<br />\
    <img src="styles/legend/PITBHR_1_2.png" /> PIT 4<br />\
    <img src="styles/legend/PITBHR_1_3.png" /> PIT 5<br />\
    <img src="styles/legend/PITBHR_1_4.png" /> <br />'
        });
var format_MessPTMMS_2 = new ol.format.GeoJSON();
var features_MessPTMMS_2 = format_MessPTMMS_2.readFeatures(json_MessPTMMS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MessPTMMS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MessPTMMS_2.addFeatures(features_MessPTMMS_2);
var lyr_MessPTMMS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MessPTMMS_2, 
                style: style_MessPTMMS_2,
                popuplayertitle: "Mess PT MMS",
                interactive: true,
                title: '<img src="styles/legend/MessPTMMS_2.png" /> Mess PT MMS'
            });
var format_Infrastruktur_3 = new ol.format.GeoJSON();
var features_Infrastruktur_3 = format_Infrastruktur_3.readFeatures(json_Infrastruktur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastruktur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastruktur_3.addFeatures(features_Infrastruktur_3);
var lyr_Infrastruktur_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastruktur_3, 
                style: style_Infrastruktur_3,
                popuplayertitle: "Infrastruktur",
                interactive: true,
    title: 'Infrastruktur<br />\
    <img src="styles/legend/Infrastruktur_3_0.png" /> JETTY BHR<br />\
    <img src="styles/legend/Infrastruktur_3_1.png" /> Mess BHR & Parkiran<br />\
    <img src="styles/legend/Infrastruktur_3_2.png" /> POS 1<br />\
    <img src="styles/legend/Infrastruktur_3_3.png" /> PREPARASI<br />\
    <img src="styles/legend/Infrastruktur_3_4.png" /> <br />'
        });
var format_RuteMessBHR_4 = new ol.format.GeoJSON();
var features_RuteMessBHR_4 = format_RuteMessBHR_4.readFeatures(json_RuteMessBHR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteMessBHR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteMessBHR_4.addFeatures(features_RuteMessBHR_4);
var lyr_RuteMessBHR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteMessBHR_4, 
                style: style_RuteMessBHR_4,
                popuplayertitle: "Rute Mess - BHR",
                interactive: true,
                title: '<img src="styles/legend/RuteMessBHR_4.png" /> Rute Mess - BHR'
            });
var format_IUPBHR_5 = new ol.format.GeoJSON();
var features_IUPBHR_5 = format_IUPBHR_5.readFeatures(json_IUPBHR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUPBHR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUPBHR_5.addFeatures(features_IUPBHR_5);
var lyr_IUPBHR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUPBHR_5, 
                style: style_IUPBHR_5,
                popuplayertitle: "IUP BHR",
                interactive: true,
                title: '<img src="styles/legend/IUPBHR_5.png" /> IUP BHR'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PITBHR_1.setVisible(true);lyr_MessPTMMS_2.setVisible(true);lyr_Infrastruktur_3.setVisible(true);lyr_RuteMessBHR_4.setVisible(true);lyr_IUPBHR_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PITBHR_1,lyr_MessPTMMS_2,lyr_Infrastruktur_3,lyr_RuteMessBHR_4,lyr_IUPBHR_5];
lyr_PITBHR_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Deskripsi': 'Deskripsi', 'Dokumentasi': 'Dokumentasi', });
lyr_MessPTMMS_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Deskripsi': 'Deskripsi', 'Dokumentasi': 'Dokumentasi', });
lyr_Infrastruktur_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Deskripsi': 'Deskripsi', 'Dokumentasi': 'Dokumentasi', });
lyr_RuteMessBHR_4.set('fieldAliases', {'fid': 'fid', 'Lenght (Km)': 'Lenght (Km)', });
lyr_IUPBHR_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Luas (Ha)': 'Luas (Ha)', });
lyr_PITBHR_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Deskripsi': 'TextEdit', 'Dokumentasi': 'ExternalResource', });
lyr_MessPTMMS_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Deskripsi': 'TextEdit', 'Dokumentasi': 'TextEdit', });
lyr_Infrastruktur_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Deskripsi': 'TextEdit', 'Dokumentasi': 'ExternalResource', });
lyr_RuteMessBHR_4.set('fieldImages', {'fid': 'TextEdit', 'Lenght (Km)': '', });
lyr_IUPBHR_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Luas (Ha)': '', });
lyr_PITBHR_1.set('fieldLabels', {'fid': 'no label', 'ID': 'inline label - always visible', 'Deskripsi': 'inline label - always visible', 'Dokumentasi': 'inline label - always visible', });
lyr_MessPTMMS_2.set('fieldLabels', {'fid': 'no label', 'ID': 'inline label - always visible', 'Deskripsi': 'no label', 'Dokumentasi': 'no label', });
lyr_Infrastruktur_3.set('fieldLabels', {'fid': 'no label', 'ID': 'inline label - always visible', 'Deskripsi': 'inline label - always visible', 'Dokumentasi': 'inline label - always visible', });
lyr_RuteMessBHR_4.set('fieldLabels', {'fid': 'no label', 'Lenght (Km)': 'inline label - always visible', });
lyr_IUPBHR_5.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', 'Luas (Ha)': 'inline label - always visible', });
lyr_IUPBHR_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});