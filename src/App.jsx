import React from "react";
import start from "./Components/start";

import Reset from "./Components/Reset";
import Chart from "./Components/chart";

function App(){

return(
<div>
<h1>Welcome to Tambola</h1>
<div id="number">Press Next To Start</div>
  <a id="myTicket" href="ticket.html" target="_blank"> <button id="ticket2">Ticket</button></a>

  <button type="button2" className="btn btn-warning" id="start" onClick={start} >Next</button>
  <button onClick={Reset}>Reset</button>


  <div id="text"></div><br></br><br></br>
<div id="Chartbuttons"></div>
<div id = "playerPosition"></div>


 
</div>
)}





export default (App)
