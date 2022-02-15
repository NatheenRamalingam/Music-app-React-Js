 import React,{Component} from "react";

class Change extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : "Natheen"
        }
        
                
    }

    valuechange =  ()=> {
        const value = this.state.value === 'Natheen' ? "Ramalingam" : "Natheen"
        this.setState({value})
    
    }
   
    
   

   
    render(){
        return(
            <div className="text-center">
                 <h1>Hello,{this.state.value}</h1>
               <button onClick={this.valuechange}>Click Me</button>
             
               
                <div><br />
                
                </div>
            </div>
            
        )
    }
}
export default Change;

