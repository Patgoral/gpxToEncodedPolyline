const fs = require('fs');
const sax = require('sax');
const polyline = require('polyline');

function gpxToEncodedPolyline(files) {
    const polylines = [];
  
    files.forEach((file) => {
      const gpxContent = fs.readFileSync(file.path, 'utf8');
      const saxParser = sax.parser(true);
  
      let points = [];
      saxParser.onopentag = (node) => {
        if (node.name === 'trkpt') {
          const lat = parseFloat(node.attributes.lat);
          const lon = parseFloat(node.attributes.lon);
          points.push([lat, lon]);
        }
      };
  
      saxParser.write(gpxContent).close();
  
      const encodedPolyline = polyline.encode(points);
      polylines.push(encodedPolyline);
    });
  
    return polylines;
  }


function gpxFileToEncodedPolyline(filePath) {
    const gpxContent = fs.readFileSync(filePath, 'utf8');
    const saxParser = sax.parser(true);
  
    let points = [];
    saxParser.onopentag = (node) => {
      if (node.name === 'trkpt') {
        const lat = parseFloat(node.attributes.lat);
        const lon = parseFloat(node.attributes.lon);
        points.push([lat, lon]);
      }
    };
  
    saxParser.write(gpxContent).close();
  
    return polyline.encode(points);
  }


  module.exports = { gpxToEncodedPolyline, gpxFileToEncodedPolyline };
