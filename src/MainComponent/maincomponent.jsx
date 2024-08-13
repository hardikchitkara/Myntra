import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import './MainComponent.css';

const MainComponent = (props) => {

  let shirtstodisplay = [];
  const [allShirts, setAllShirts] = useState([]);

  useEffect(() => {

    async function fetchShirtsDataset() {

      let shirtsDataSet = [];
      try {
        const itemsData = await fetch('dataset.json');
        shirtsDataSet = await itemsData.json();
      } catch (err) { }

      if (!shirtsDataSet.length) {
        setAllShirts([]);
        return;
      }


      if (props.sendstringdata.length === 0) {
        shirtstodisplay = shirtsDataSet;
      } else {
        let strToCompare = props.sendstringdata.toLowerCase();
        shirtstodisplay = shirtsDataSet.filter((el) => {
          if (
            el.filter.toLowerCase().includes(strToCompare) ||
            el.brand.toLowerCase().includes(strToCompare) ||
            el.price.toLowerCase().includes(strToCompare) ||
            el.discount.toLowerCase().includes(strToCompare)
          ) {
            return true;
          }
          return false;
        });
      }
      shirtstodisplay = shirtstodisplay.filter((el) => {
        if (
          (props.sendsexdata.length === 0 || props.sendsexdata.includes(el.sex))
          && (props.sendbranddata.length === 0 || props.sendbranddata.includes(el.brand))
          && (props.sendcolordata.length === 0 || props.sendcolordata.includes(el.color))
          && (props.senddiscountrangedata.length === 0 || Math.max(...props.senddiscountrangedata.map((i) => Number(i))) <= parseInt(el.discount))
          && (props.sendpricedata.length === 0 || checkingprices(props.sendpricedata, el.price))
        ) {
          return true;
        }
      });
      if (props.sendsortingchoice === "choi5") {
        shirtstodisplay.sort(function (a, b) {
          return a.price - b.price;
        })
      }
      else if (props.sendsortingchoice === "choi4") {
        shirtstodisplay.sort(function (a, b) {
          return b.price - a.price;
        })
      }
      else if (props.sendsortingchoice === "choi3") {
        shirtstodisplay.sort(function (a, b) {
          return b.discount - a.discount;
        })
      }
      setAllShirts(shirtstodisplay);
    };
    fetchShirtsDataset();
  });

  function checkingprices(p1, p2) {
    for (let i = 0; i < p1.length; i++) {
      if (parseInt(p1[i].split(',')[0]) <= parseInt(p2) && parseInt(p2) <= parseInt(p1[i].split(',')[1])) {
        return true;
      }
    }
    return false;
  }


  return (
    <>
      {
        (allShirts.length) ?
          <div className="alltickets">
            {
              allShirts.map((el) => {
                return (
                  <Link
                    to={{
                      pathname: "/details", state: [{
                        filter: el.filter,
                        brand: el.brand,
                        price: el.price,
                        discount: el.discount,
                        color: el.color,
                        imgurl: el.imgurl,
                        sex: el.sex
                      }]
                    }}

                    style={{ textDecoration: 'none', color: 'black' }} >

                    <div className="ticket" >
                      <img src={el.imgurl}></img>
                      <div id="idofwish" onClick={() => {
                        alert("Wishlist is just for UI as it requires login");
                      }}>WishList</div>
                      <div className="product-details">
                        <h3 class="product-brand">{el.brand}</h3>
                        <h4 class="product-product">{el.filter}</h4>
                        <span class="product-discountedPrice">Rs. {el.price}</span>
                        <span class="product-discountPercentage">({el.discount}% OFF)</span>

                      </div>
                    </div>

                  </Link>
                )
              }
              )
            }
          </div>
          :
        <div className="image-container">
          <img className="no-items-found-image" src='assets/no-items-found.png' alt="" />
        </div>
      }
    </>
  )

}
export default MainComponent;
