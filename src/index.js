import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
const App = () => {
  return (
    <div>
      <div className="card-group">
        <Card cardTitle="Card Title I" cardText="LOrem Ipsum text I" updatedTime="Last Updated 1 min ago"/>

        <Card cardTitle="Card Title II" cardText="LOrem Ipsum text II" updatedTime="Last Updated 2 min ago"/>

        <Card cardTitle="Card Title I" cardText="LOrem Ipsum text I" updatedTime="Last Updated 1 min ago"/>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
