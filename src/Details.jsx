import Header from './Header/Header.js';
import React from 'react';
import Mainelementdetails from './Mainelementdetails/Mainelementdetails.jsx';
import { useLocation } from 'react-router-dom';
import { useState } from "react";

function Details() {

  const location = useLocation();
  const [data, setdata] = useState({ sex: "", price: "", brand: "", discount: "", color: "", size: " " });

  function receivesexdata(param) {
    let obj = data;
    obj.sex = param;
    setdata({ ...obj });
  }

  function receivepricedata(param) {
    let obj = data;
    obj.price = param;
    setdata({ ...obj });
  }

  function receivebranddata(param) {
    let obj = data;
    obj.brand = param;
    setdata({ ...obj });
  }

  function receivediscountrangedata(param) {
    let obj = data;
    obj.discount = param;
    setdata({ ...obj });
  }

  function receivecolordata(param) {
    let obj = data;
    obj.color = param;
    setdata({ ...obj });
  }

  function receivesizedata(param) {
    let obj = data;
    obj.size = param;
    setdata({ ...obj });
  }

  return (
    <div>
      <div className="App">
        <Header
          sendalldata={data}
        />
      </div>
      <div>
        <Mainelementdetails
          sendsexticket={location.state[0].sex}
          sendbrandticket={location.state[0].brand}
          sendpriceticket={location.state[0].price}
          senddiscountticket={location.state[0].discount}
          sendcolorticket={location.state[0].color}
          sendimgurlticket={location.state[0].imgurl}
          sendfilterticket={location.state[0].filter}
          receivesexdata={receivesexdata}
          receivepricedata={receivepricedata}
          receivebranddata={receivebranddata}
          receivediscountrangedata={receivediscountrangedata}
          receivecolordata={receivecolordata}
          receivesizedata={receivesizedata}
        />
      </div>
    </div>
  )

}
export default Details;
