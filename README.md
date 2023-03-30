# gpx-to-encoded-polyline

## Converts GPX file upload to Encoded Polyline

#### To view package go to: [gpx-to-encoded-polyline](https://www.npmjs.com/package/gpx-to-encoded-polyline)

#### This package is designed to easily and efficiently handle GPX file uploads from form data and converts it to an encoded polyline string.

<table>
<tr>
<td>
GPX files are extremely dense and inefficient.  This package handles parsing the GPX data, and converting it to an encoded polyline string.  This can be efficiently held in your database or as a variable to be decoded on the front end.  
</td>
</tr>
</table>

## Getting Started:

<table>
<tr>
<td>
  To install, use npm i gpx-to-encoded-polyline
</td>
</tr>
</table>
<br>
<table>
<tr>
<td>
There are two functions you can use in this package:
<br>
- gpxToEncodedPolyline accepts an uploaded GPX file as an object and returns an encoded polyline.
<br><br>
- gpxFileToEncodedPolyline accepts a GPX filepath and returns an encoded polyline.
</td>
</tr>
</table>

## Troubleshooting:

<table>
<tr>
<td>
This package is designed to handle a GPX file as either a file path or as an uploaded object.  Be sure to use gpxToEncodedPolyline for uploads, and gpxFileToEncodedPolyline for file paths.
<br>
Let me know if you run into any issues.
</td>
</tr>
</table>
