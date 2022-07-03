import Chart from "./chart";
var arr = []; 
function start() {
 

    var num = Math.floor(Math.random() * 90 + 1);
    for (var i = 0; i < arr.length; i++) {
      if (num === arr[i]) {
        num = Math.floor(Math.random() * 90 + 1);
        i = 0;
              }}
    document.getElementById('number').innerHTML = num;
    
  
    if (arr.length === 90) {
      alert('Game Over!!!!!!!');
      
    }
    arr.push(num);

    

    
    document.getElementById('Chartbuttons').innerHTML = Chart();

  
}

  export default start;
  





