#dom2jsonml

Convert DOM to JSONML

##Usage
```javascript
var jsonMl = dom2jsonml( <Node> elem [, <func> filter( <array> jsonMl, <Node> elem)] [, <func> callback(err, <array> jsonMl)]);
```

##Examples
```javascript
var dom2jsonml = require('dom2jsonml');
dom2jsonml(window.document.body, function(err, jsonMl){
  if(err) throw err;
  else console.log(JSON.stringify(jsonMl));
});
```

```javascript
var dom2jsonml = require('dom2jsonml');
var jsonMl = dom2jsonml(window.document.body);
if(null === jsonMl) throw new Error("Invalid DOM");
else console.log(JSON.stringify(jsonMl));
```

##Installation

`npm install dom2jsonml`

## Contributors

 - Maqentaer

## MIT Licenced
