import "./maincomponent.css"
import React from "react";

import { Link } from "react-router-dom";
class maincomponent extends React.Component {
  state = {
    allshirts: [
      {
        filter: "Women Casual Shirt",
        brand: "Roadster",
        price: "699",
        discount:"65",
        color: "Red",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2418013/2021/1/27/089225e3-14cf-4322-b300-6e805b1cc06b1611738678086-Roadster-Women-Navy-Blue--Blue-Regular-Fit-Checked-Casual-Sh-1.jpg",
        sex: "Girls",
        wishlist:"false"
      },
      {
        filter: "AntiViral finish Denim Shirt",
        brand: "Roadster",
        price: "989",
        discount:"45",
        color: "Blue",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12525054/2020/10/14/bacb446d-b1c0-42d4-a315-3abe6a1317a31602656765200-Roadster-Women-Shirts-7321602656762448-1.jpg",
        sex:"Girls",
        wishlist:"false"
      },
      {
        filter: "Men Slim Fit Casual Shirt",
        brand: "Blackberrys",
        price: "1959",
        discount:"30",
        color: "Black",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14947642/2021/7/27/31d14634-43a2-427a-ba8f-a0b9c747bf4d1627367742489BlackberrysMenBlackSlimFitCasualShirt1.jpg",
        sex: "Men",
        wishlist:"false"
      },
      {
        filter: "Cotton Slim Fit Checked Shirt",
        brand: "Blackberrys",
        price: "1496",
        discount:"25",
        color: "Green",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15101076/2021/8/24/9b8ebdcd-588c-4cfa-a11a-9b63e3f2b6d61629806504142-Blackberrys-Men-Shirts-4771629806503305-1.jpg",
        sex: "Men",
        wishlist:"false"
      },
      {
        filter: "Floral Printed Casual Shirt",
        brand: "Allen Solly",
        price: "779",
        discount:"40",
        color: "White",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/21/b50e6e91-4111-4023-8fca-607cf3bd225d1624252325543-1.jpg",
        sex: "Boys",
        wishlist:"false"
      },
      {
        filter: "Boys Printed Casual Shirt",
        brand: "Allen Solly",
        price: "1119",
        discount:"20",
        color: "White",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15278996/2021/8/27/b63a0bb3-f93e-4b07-84f9-c6e6ec84ebd21630051728585AllenSollyJuniorBoysWhiteSlimFitFloralOpaquePrintedCasualShi1.jpg",
        sex: "Boys",
        wishlist:"false"
      },
      {
        filter: "Boys Pure Cotton Casual Shirt",
        brand: "Allen Solly",
        price: "1199",
        discount:"20",
        color: "Red",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15275930/2021/10/5/d7f44ea7-29e0-4cea-9e92-10b2f5db09291633414916160-Allen-Solly-Junior-Boys-Red-Pure-Cotton-Printed-Casual-Shirt-1.jpg",
        sex: "Boys",
        wishlist:"false"
      },
      {
        filter: "Boys Self Design Casual Shirt",
        brand: "Allen Solly",
        price: "1124",
        discount:"25",
        color: "Blue",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15275912/2021/11/8/f1e66fe0-fcfa-405f-a043-d83c537ec3a01636361538608-Allen-Solly-Junior-Boys-Shirts-7111636361538121-1.jpg",
        sex: "Boys",
        wishlist:"false"
      },
      {
        filter: "Boys Regular Fit Casual Shirt",
        brand: "Allen Solly",
        price: "779",
        discount:"40",
        color: "White",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/21/c5e78bc6-cb23-4605-9bd5-084a6029f2d31624255225911-1.jpg",
        sex: "Boys",
        wishlist:"false"
      },
      {
        filter: "Pure Cottom Shirt",
        brand: "Roadster",
        price: "584",
        discount:"55",
        color: "White",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13398886/2021/3/15/cd522037-58f2-4714-ae83-bdd5620536121615789775676-Roadster-Women-Shirts-3481615789774001-5.jpg",
        sex: "Women",
        wishlist:"false"
      },
      {
        filter: "Women Solid Casual Shirt",
        brand: "Roadster",
        price: "494",
        discount:"55",
        color: "Green",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13722874/2021/11/18/8edafc82-57e6-41fe-b56a-a2ec8070f14c1637236795961-Roadster-Women-Shirts-9541637236795463-1.jpg",
        sex: "Women",
        wishlist:"false"
      },
      {
        filter: "PUre Cotton Solid Casual Shirt",
        brand: "Roadster",
        price: "559",
        discount:"60",
        color: "Green",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14614982/2021/9/13/31e7dd0e-3ae8-4abe-bc5e-a0e4255e07ee1631526307558-Roadster-Women-Green-Pure-Cotton-Solid-Casual-Shirt-84616315-1.jpg",
        sex: "Women",
        wishlist:"false"
      },
      {
        filter: "Opaque Casual Shirt",
        brand: "Roadster",
        price: "439",
        discount:"60",
        color: "Blue",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15049278/2021/9/16/0dec011f-71e9-441f-93e0-24fb0327bfff1631773289792SweatshirtsRoadsterWomenSweatshirtsRoadsterWomenSweatshirtsR1.jpg",
        sex: "Women",
        wishlist:"false"
      },
      {
        filter: "Men Checked Tailored Fit Shirt",
        brand: "ColorPlus",
        price: "2000",
        discount:"65",
        color: "Green",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15533282/2021/9/20/d7cb7f65-06f8-47b9-b458-d7b4257e81051632127570529ColorPlusMenGreenTailoredFitOpaqueCheckedCasualShirt1.jpg",
        sex: "Men",
        wishlist:"false"
      },
      {
        filter: "Tailored Fir Casual Shirt",
        brand: "ColorPlus",
        price: "999",
        discount:"60",
        color: "White",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/11/27/d73e5ab6-1daf-4f71-a065-96347f9dbd491606492519592-3.jpg",
        sex: "Men",
        wishlist:"false"
      },
      {
        filter: "Men Slim Fit Casual Shirt",
        brand: "ColorPlus",
        price: "799",
        discount:"60",
        color: "Red",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/2/0d08767e-1e2a-4e00-8027-70660400df581564764833564-1.jpg",
        sex: "Men",
        wishlist:"false"
      },
      {
        filter: "Slim Fit Checked Casual Shirt",
        brand: "Blackberrys",
        price: "1559",
        discount:"35",
        color: "Grey",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11860954/2020/6/11/2e5e02e0-6bb5-4605-800d-d76c305d0a801591899345071ASMNSWTEECLTRNIKEAIR4FShirtsBlackberrysMenShirtsBlackberrysM1.jpg",
        sex: "Men",
        wishlist:"false"
      },
      {
        filter: "Men Cotton Casual Shirt",
        brand: "Roadster",
        price: "947",
        discount:"35",
        color: "Grey",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10740910/2019/11/27/3f8fa350-d733-4d6b-97ee-099236592e2f1574856122708-Roadster-Men-Shirts-8401574856120054-1.jpg",
        sex: "Men",
        wishlist:"false"
      },
      {
        filter: "Regulat Fit Casual Shirt",
        brand: "Roadster",
        price: "647",
        discount:"55",
        color: "Red",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11987164/2020/7/7/3252c353-32e3-4ccc-9a2d-9101957b4fcb1594113095777-Roadster-Women-Navy-Blue--Pink-Regular-Fit-Checked-Casual-Sh-1.jpg",
        sex: "Men",
        wishlist:"false"
      },
      {
        filter: "Men Solid Slim Casual Shirt",
        brand: "Allen Solly",
        price: "1599",
        discount:"20",
        color: "White",
        imgurl:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15840286/2021/10/18/be66f8df-5b67-4443-a2c0-c5cf229cab101634552214198AllenSollyMenWhiteSlimFitOpaqueCasualShirt1.jpg",
        sex: "Men",
        wishlist:"false"
      },
      // 
    ]
  };
  
render(){
  function checkingprices(p1,p2){
    
    for(let i=0;i<p1.length;i++)
    {
      if(parseInt(p1[i].split(',')[0])<=parseInt(p2) && parseInt(p2)<=parseInt(p1[i].split(',')[1])) {
        return true;
      }
    }
    return false;
  }
  let shirtstodisplay=[];
  if (this.props.sendstringdata.length==0) {
    shirtstodisplay=this.state.allshirts;
  }
  else{
    let strToCompare = this.props.sendstringdata.toLowerCase();
    shirtstodisplay = this.state.allshirts.filter((el) => {
      if(
      el.filter.toLowerCase().includes(strToCompare) || 
      el.brand.toLowerCase().includes(strToCompare) || 
      el.price.toLowerCase().includes(strToCompare) || 
      el.discount.toLowerCase().includes(strToCompare)
      )
      {
        return true;
      }
      return false;
    });
    
    
  }
  shirtstodisplay = shirtstodisplay.filter((el) => {
    
    if(
      (this.props.sendsexdata.length==0 || this.props.sendsexdata.includes(el.sex))
      &&(this.props.sendbranddata.length==0 || this.props.sendbranddata.includes(el.brand))
      &&(this.props.sendcolordata.length==0 || this.props.sendcolordata.includes(el.color))
      &&(this.props.senddiscountrangedata.length==0 || Math.max(...this.props.senddiscountrangedata.map((i)=>Number(i)))<=parseInt(el.discount) )
      &&(this.props.sendpricedata.length==0 || checkingprices(this.props.sendpricedata,el.price))
      )
    {
        return true;
    }
      
  });
  if(this.props.sendsortingchoice=="choi5")
  {
      shirtstodisplay.sort(function(a,b){
        return a.price-b.price;
      })
  }
  else if(this.props.sendsortingchoice=="choi4")
  {
    shirtstodisplay.sort(function(a,b){
      return b.price-a.price;
    })
  }
  else if(this.props.sendsortingchoice=="choi3")
  {
    shirtstodisplay.sort(function(a,b){
      return b.discount-a.discount;
    })
  }
  
  
    return(    
      
          <div className="alltickets">
            {
            shirtstodisplay.map((el)=>{
                return (
                  
                  <Link
                  to={{pathname:"/details",state:[{ 
                    filter: el.filter,
                    brand: el.brand,
                    price: el.price,
                    discount:el.discount,
                    color: el.color,
                    imgurl:el.imgurl,
                    sex: el.sex}]}}

                  style={{ textDecoration: 'none' ,color:'black'}} >

                  <div className="ticket" >
                    <img src={el.imgurl}></img>
                    <div  id="idofwish">WishList</div>
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
        
    
)
}


}
export default maincomponent
// { 
//   filter: el.filter,
//   brand: el.brand,
//   price: el.price,
//   discount:el.discount,
//   color: el.color,
//   imgurl:el.imgurl,
//   sex: el.sex}