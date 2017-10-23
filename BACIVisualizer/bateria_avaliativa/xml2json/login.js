window.onload = function() {
	document.getElementById('btnOpen').onclick = open;
	document.getElementById('userXML').onchange = function(event) {
		load();
	}
}
function open() {
	if ('FileReader' in window) {
    document.getElementById('userXML').click();
  } else {
    alert('Your browser does not support the HTML5 FileReader.');
  }
}


function load(){
	var fileToLoad = event.target.files[0];

  if (fileToLoad) {
    var reader = new FileReader();
    reader.onload = function(fileLoadedEvent) {
      var textFromFileLoaded = fileLoadedEvent.target.result;
      document.getElementById('exampleTextarea').value = textFromFileLoaded;
	  var x2js = new X2JS();
	  var jsonObj = x2js.xml_str2json( textFromFileLoaded );
	  console.log(jsonObj);
    };
    reader.readAsText(fileToLoad, 'UTF-8');
  }
}

function loadXML(){
	
	var fileToLoad = event.target.files[0];
	var reader = new FileReader();
	reader.onload = function(){
		var parsed = new DOMParser().parseFromString(this.result, "text/xml");
		console.log(parsed);
	};
	reader.readAsText(fileToLoad);
	first();
}
