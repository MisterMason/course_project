import React, { Component } from "react";
import background from '../images/homebackground.jpg';
 
class Home extends Component {
  render() {
    return (
          <div className="divBackground" style={{ backgroundImage: `url('${background}')` }}>
            <div className="divContent">
              <h2>Welcome to Nixon's Solutions</h2>
              <br></br>
              <p><b>Wireless Prepaid</b></p>
              <p>No Contracts. No Overages. Great Customer Service</p>
              <p><b>High Speed Interne</b>t</p>
              <p>No Contracts.  Unlimited Data. Reliable Connectivity.</p>
              <p><b>Computer & IT Services</b></p>
              <p>Over 30+ Years at Same Location.  Repair Apple Products</p>
            </div>
      </div>
    );
  }
}
 
export default Home;