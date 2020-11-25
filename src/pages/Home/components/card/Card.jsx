import React , { Component } from "react";
class Card extends Component {
  render() {
    return        <div className="col-sm-4">
           <div className="card bg-primary ece" >
               <div className="card-body">
                   <h5 className="ec">{this.props.greeting}</h5>
               </div>
           </div>
       </div>;
  }
}
export default Card;

