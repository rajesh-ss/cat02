
function loadXMLDoc() {

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    // Request finished and response
    // is ready and Status is "OK"
    if (this.readyState == 4 && this.status == 200) {
        console.log("connected");
        stdsetails(this);
        //document.getElementById("display").innerHTML = "";
  };
    }

  // employee.xml is the external xml file
  xmlhttp.open("GET", "stdDetails.xml", true);
  xmlhttp.send();

  }

function stdsetails(xml) {
  var i;
  var xmlDoc = xml.responseXML;

  var table = "<tr><th>student name</th><th>university name</th></tr>";

  

  var x = xmlDoc.getElementsByTagName("COMPUTER_SCIENCE");

  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("STU_NAME")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("STU_UNIVERSITY")[0].childNodes[0].nodeValue+
      "</td></tr>" ;
  } 
  document.getElementById("display").innerHTML = table;
  // Print the xml data in table form
  
}
