import './App.css';
import Middle from './Middle/Middle.js';
import Header from './Header/Header.js';
import Leftpane from './LeftPane/leftpane.js';
import Maincomponent from './MainComponent/maincomponent.jsx'
import React from 'react';
class App extends React.Component {
  state = {
    sexdata: [],
    pricedata: [],
    branddata: [],
    discountrangedata: [],
    colordata: [],
    searchedstring: "",
    sortingchoice: "",

  }
  receivesexdata = (param) => {
    this.setState({

      sexdata: param
    })
  }
  receivepricedata = (param) => {
    this.setState({

      pricedata: param
    })
  }
  receivebranddata = (param) => {
    this.setState({

      branddata: param
    })
  }
  receivediscountrangedata = (param) => {
    this.setState({

      discountrangedata: param
    })
  }
  receivecolordata = (param) => {
    this.setState({

      colordata: param
    })
  }
  receivestringdata = (param) => {
    this.setState({
      searchedstring: param

    })
  }
  receivesortingdata = (param) => {
    this.setState({
      sortingchoice: param
    })
  }
  render() {
    console.log("cart data --->", this.state.cart);

    return (
      <React.Fragment>
        <div>
          <div className="App">
            <Header
              receivestringdata={this.receivestringdata}
            />
            <Middle
              receivesortingdata={this.receivesortingdata}
            />
          </div>
          <div className="App2">
            <div className="leftpane">
              <Leftpane
                receivesexdata={this.receivesexdata}
                receivepricedata={this.receivepricedata}
                receivebranddata={this.receivebranddata}
                receivediscountrangedata={this.receivediscountrangedata}
                receivecolordata={this.receivecolordata}
              />
            </div>
            <div className="rightpane">
              <Maincomponent
                sendsexdata={this.state.sexdata}
                sendpricedata={this.state.pricedata}
                sendbranddata={this.state.branddata}
                senddiscountrangedata={this.state.discountrangedata}
                sendcolordata={this.state.colordata}

                sendstringdata={this.state.searchedstring}
                sendsortingchoice={this.state.sortingchoice}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
