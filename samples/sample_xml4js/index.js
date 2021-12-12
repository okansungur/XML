
var validator = require('xsd-schema-validator');

let fs = require('fs');

var xmlStream = fs.createReadStream('resources/sample2.xml');


validator.validateXML(xmlStream, 'resources/sample2.xsd', function(err, result) {
  if (err) {
    console.log("Error: xml is not valid!" );    
    
  }
  console.log("xml for validation against schema  is "+result.valid );
  
});