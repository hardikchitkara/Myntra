import React from "react";
import "./Middle.css"

class Middle extends React.Component{
    state={
        sortingdata:"Recommended"
    }
     MouseOver(event) {
        const element = document.getElementById("sec");
        element.style.visibility= "visible";
        
      }
      
      MouseOut(event){
        const element = document.getElementById("sec");
        element.style.visibility= "hidden";
      }
render(){
    return (
        <div>
            <div className="ad"></div>
            <div className="mid">
                <div className="mid_1">
                    Home / Clothing / <span className="mid_1_3">Shirts for Men & Women</span>
                </div>
                <div className="mid_2">
                    Shirts For Men & Women -
                </div>
                <div className="mid_3">
                    <div className="mid_3_1">Filters</div>
                    <div className="mid_3_2">
                        <div className="mid_3_2_1">Add-ons</div>
                        <div className="mid_3_2_2">Bundles</div>
                        <div className="mid_3_2_3">Characters</div>
                        <div className="mid_3_2_4">Collars</div>
                        <div className="mid_3_2_5">Country of origin</div>
                        <div className="mid_3_2_6">Fabric</div>
                    </div>
                    <div className="mid_3_3">
                        <div className="sort-sortBy" onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}>
                            <span>Sort By: </span>
                            <span className="betdis">{this.state.sortingdata} </span>
                            <i class="p-icon--chevron-down" ></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu" id="sec" onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}>
                    <table aria-label="Example of a sortable table">
                        <tbody>
                        <tr>
                            <th className="tablevalues" onClick={()=>{
                                this.setState({
                                    sortingdata:"What's new"
                                })
                                this.props.receivesortingdata("choi1")
                            }}>What's new</th>
                            </tr>
                            <tr>
                            <th className="tablevalues" onClick={()=>{
                                this.setState({
                                    sortingdata:"Popularity"
                                })
                                this.props.receivesortingdata("choi2")
                            }}>Popularity</th>
                            </tr>
                            <tr>
                            <th  className="tablevalues" onClick={()=>{
                                this.setState({
                                    sortingdata:"Better Discount"
                                })
                                this.props.receivesortingdata("choi3")
                            }}>Better Discount</th>
                            </tr>
                            <tr>
                            <th className="tablevalues" onClick={()=>{
                                this.setState({
                                    sortingdata:"Price:High-Low"
                                })
                                this.props.receivesortingdata("choi4")
                            }}>Price: High to Low</th>
                            </tr>
                            <tr>
                            <th className="tablevalues" onClick={()=>{
                                this.setState({
                                    sortingdata:"Price:Low-High"
                                })
                                this.props.receivesortingdata("choi5")
                            }}>Price: Low to High</th>                            
                            </tr>
                            <tr>
                            <th className="tablevalues" onClick={()=>{
                                this.setState({
                                    sortingdata:"Cusromer Rating"
                                })
                                this.props.receivesortingdata("choi6")
                            }}>Cusromer Rating</th>                            
                            </tr>
                        </tbody>
                        </table>
                    </div>

        </div>
    )
}
    
}
export default Middle;