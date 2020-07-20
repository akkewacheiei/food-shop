import React, {Component} from 'react';

export default class Store extends Component{
    state={
        showInfo:false
    };
    handleInfo=()=>{
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render(){
        const {id,name,img,detail,address}=this.props.shop;
        const {removeShop}=this.props;

        console.log(this.props.shop)
        return(
            <div className="shop">

                <div className="img-container">
                    <img src={img} />
                    <span className="close-btn" onClick={()=>removeShop(id)}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>

                <div className="shop-info">
                    <h4> 
                        <p></p> <b>{name}</b> 
                    </h4>
                    <h5>
                        <t style={{marginLeft:"2.5em"}}></t> {detail}
                    </h5>
                    <h6>
                        ที่อยู่ร้าน {""}
                        <span className="address-show" onClick={this.handleInfo}>
                            <i class="fas fa-caret-square-down"></i>                        
                        </span> 
                        {this.state.showInfo && <p>{address}</p>}
                    </h6>
                </div>

            </div>
        )
    }
}