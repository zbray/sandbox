import React from "react";

function MonCard(){
  return (
  <div>
    Image: <br />
    Name: <br />
    National Dex:<br />
    Type:<br />
    <form name="rn">
    <input type="text" id="tb" name="tb" />
    <input type="button" value="Random Number!" onclick="Random();" />
</form>
  </div>
  )
}

export default MonCard;