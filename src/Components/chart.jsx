
function Chart(){

  
  var button = '';
  for (var i = 1; i < 91; i++) {
    button += "<button id='" + i + "'>" + i + "</button>";
  
  }
  
  return button
}

document.getElementById('Chartbuttons');


export default Chart;