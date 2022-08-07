import React from "react";
class Item extends  React.Component{
    constructor(props){
        super(props)

        this.state ={
            clicks:0,
            remain:10,
        }
    }
    clickMe()
    {
        this.setState({
            clicks:this.state.clicks+1,
            remain:this.state.remain-1
        })
    }
    render(){
        return(
           <div>
            <h1 onClick={()=>this.clickMe()}>Hello {this.props.name}</h1>
            <span>
                {this.state.clicks} are clicks {this.state.remain}
            </span>
            </div> 
            
        )
    }
}
export default Item;