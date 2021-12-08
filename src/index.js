import React from "react";
import ReactDOM from "react-dom";

function App(){ 
    const str1 = "CLİCK "
    const str2 = "ME"
    return (
    <div>
        <button tabIndex="3" className="jsxCLASS" type="button" style={{padding:"10px", color:"white", backgroundColor:"blue", border:"2px solid yellow"}}>{str1.concat(str2)}</button>
    </div>
);
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
