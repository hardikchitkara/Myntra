import React from "react";

import "./Leftpane.css";

class Leftpane extends React.Component {
  state = {
    sex: [],
    brand: [],
    price: [],
    color: [],
    discountrange: [],
  };

  checkfirst(p1, p2) {
    if (p2) {
      let l = this.state.sex;
      l.push(p1);
      this.setState({
        sex: l,
      });
    } else {
      let l = this.state.sex;
      const index = l.indexOf(p1);
      l.splice(index, 1);
      this.setState({
        sex: l,
      });
    }
    this.props.receivesexdata(this.state.sex);
  }

  checksecond(p1, p2) {
    if (p2) {
      let l = this.state.brand;
      l.push(p1);
      this.setState({
        brand: l,
      });
    } else {
      let l = this.state.brand;
      const index = l.indexOf(p1);
      l.splice(index, 1);
      this.setState({
        brand: l,
      });
    }
    this.props.receivebranddata(this.state.brand);
  }

  checkthird(p1, p2) {
    if (p2) {
      let l = this.state.price;
      l.push(p1);
      this.setState({
        price: l,
      });
    } else {
      let l = this.state.price;
      const index = l.indexOf(p1);
      l.splice(index, 1);
      this.setState({
        price: l,
      });
    }
    this.props.receivepricedata(this.state.price);
  }

  checkfourth(p1, p2) {
    if (p2) {
      let l = this.state.color;
      l.push(p1);
      this.setState({
        color: l,
      });
    } else {
      let l = this.state.color;
      const index = l.indexOf(p1);
      l.splice(index, 1);
      this.setState({
        color: l,
      });
    }
    this.props.receivecolordata(this.state.color);
  }

  checkfifth(p1, p2) {
    if (p2) {
      let l = this.state.discountrange;
      l.push(p1);
      this.setState({
        discountrange: l,
      });
    } else {
      let l = this.state.discountrange;
      const index = l.indexOf(p1);
      l.splice(index, 1);
      this.setState({
        discountrange: l,
      });
    }
    this.props.receivediscountrangedata(this.state.discountrange);
  }

  render() {
    return (
      <div>
        <div className="leftcomponent">
          <div className="first">
            <form className="sex">
              <input
                type="checkbox"
                id="Men"
                onChange={(e) => this.checkfirst("Men", e.target.checked)}
              />
              <label htmlFor="Men">Men</label>
              <input
                type="checkbox"
                id="Women"
                onChange={(e) => this.checkfirst("Women", e.target.checked)}
              />
              <label htmlFor="Women">Women</label>
              <input
                type="checkbox"
                id="Boys"
                onChange={(e) => this.checkfirst("Boys", e.target.checked)}
              />
              <label htmlFor="Boys">Boys</label>
              <input
                type="checkbox"
                id="Girls"
                onChange={(e) => this.checkfirst("Girls", e.target.checked)}
              />
              <label htmlFor="Girls">Girls</label>
            </form>
          </div>
          <span className="namebrands">Brands</span>
          <div className="second">
            <form className="brands">
              <input
                type="checkbox"
                id="Roadster"
                onChange={(e) => this.checksecond("Roadster", e.target.checked)}
              />
              <label htmlFor="Roadster">Roadster</label>
              <input
                type="checkbox"
                id="Blackberrys"
                onChange={(e) =>
                  this.checksecond("Blackberrys", e.target.checked)
                }
              />
              <label htmlFor="Blackberrys">Blackberrys</label>
              <input
                type="checkbox"
                id="Allen Solly"
                onChange={(e) =>
                  this.checksecond("Allen Solly", e.target.checked)
                }
              />
              <label htmlFor="Allen Solly">Allen Solly</label>
              <input
                type="checkbox"
                id="ColorPlus"
                onChange={(e) =>
                  this.checksecond("ColorPlus", e.target.checked)
                }
              />
              <label htmlFor="ColorPlus">ColorPlus</label>
            </form>
          </div>
          <span className="nameprice">Price</span>
          <div className="third">
            <form className="price">
              <input
                type="checkbox"
                id="249"
                onChange={(e) => this.checkthird("249,5937", e.target.checked)}
              />
              <label htmlFor="249">Rs. 249 to Rs. 5937</label>
              <input
                type="checkbox"
                id="5937"
                onChange={(e) =>
                  this.checkthird("5937,11625", e.target.checked)
                }
              />
              <label htmlFor="5937">Rs. 5937 to Rs. 11625</label>
              <input
                type="checkbox"
                id="11625"
                onChange={(e) =>
                  this.checkthird("11625,17313", e.target.checked)
                }
              />
              <label htmlFor="11625"> Rs. 11625 to Rs. 17313</label>
            </form>
          </div>
          <span className="namecolor">Color</span>
          <div className="fourth">
            <form className="color">
              <input
                type="checkbox"
                id="Blue"
                onChange={(e) => this.checkfourth("Blue", e.target.checked)}
              />
              <label htmlFor="Blue">Blue</label>
              <input
                type="checkbox"
                id="White"
                onChange={(e) => this.checkfourth("White", e.target.checked)}
              />
              <label htmlFor="White">White</label>
              <input
                type="checkbox"
                id="Grey"
                onChange={(e) => this.checkfourth("Grey", e.target.checked)}
              />
              <label htmlFor="Grey">Grey</label>
              <input
                type="checkbox"
                id="Black"
                onChange={(e) => this.checkfourth("Black", e.target.checked)}
              />
              <label htmlFor="Black">Black</label>
              <input
                type="checkbox"
                id="Red"
                onChange={(e) => this.checkfourth("Red", e.target.checked)}
              />
              <label htmlFor="Red">Red</label>
              <input
                type="checkbox"
                id="Green"
                onChange={(e) => this.checkfourth("Green", e.target.checked)}
              />
              <label htmlFor="Green">Green</label>
            </form>
          </div>
          <span className="namediscountrange">Discount Range</span>
          <div className="fifth">
            <form className="discountrange">
              <input
                type="checkbox"
                id="10%"
                onChange={(e) => this.checkfifth("10", e.target.checked)}
              />
              <label htmlFor="10%">10% and above</label>
              <input
                type="checkbox"
                id="20%"
                onChange={(e) => this.checkfifth("20", e.target.checked)}
              />
              <label htmlFor="20%">20% and above</label>
              <input
                type="checkbox"
                id="30%"
                onChange={(e) => this.checkfifth("30", e.target.checked)}
              />
              <label htmlFor="30%">30% and above</label>
              <input
                type="checkbox"
                id="40%"
                onChange={(e) => this.checkfifth("40", e.target.checked)}
              />
              <label htmlFor="40%">40% and above</label>
              <input
                type="checkbox"
                id="50%"
                onChange={(e) => this.checkfifth("50", e.target.checked)}
              />
              <label htmlFor="50%">50% and above</label>
              <input
                type="checkbox"
                id="60%"
                onChange={(e) => this.checkfifth("60", e.target.checked)}
              />
              <label htmlFor="60%">60% and above</label>
              <input
                type="checkbox"
                id="70%"
                onChange={(e) => this.checkfifth("70", e.target.checked)}
              />
              <label htmlFor="70%">70% and above</label>
              <input
                type="checkbox"
                id="80%"
                onChange={(e) => this.checkfifth("80", e.target.checked)}
              />
              <label htmlFor="80%">80% and above</label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Leftpane;
