import React, { Component } from 'react';
import Counter from './counter';


class CounterList extends Component{
    

    constructor(props){
        super(props);

        //creating ref of child component to reset the couter. 
        //this.counterRef = React.createRef();
        //not in use, but we can use it to call child component method
        //ex- this.counterRef.current.METHOD_NAME();

        this.refArray = [];
    }

    state = {
        counters: [
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
    }

    handleResetClick = ()=>{ 
        this.refArray.map(ctrl=>{ 
            //using truthy to check NULL obeject
            //since as per implementation user can delete the component 
            ctrl && ctrl.handleReset();
        }); 
    };

    handleDeleteClick = id =>{
        let newCounterColl = this.state.counters.filter( obj => {
            return obj.id != id
        });

        console.log(newCounterColl);
        this.setState({counters: newCounterColl}); 
    };
    
    render(){ 
        return(
            <React.Fragment>
                <div>
                    <button className="btn" onClick={this.handleResetClick}>Reset Counter</button>    
                </div>
                <div>
                    {
                        this.state.counters.map((counter,index)=>{
                            return <Counter ref={refinput=>this.refArray[index] = refinput} key={counter.id} id={counter.id} val={counter.value} onDelete={this.handleDeleteClick}></Counter>;
                        })
                    }
                </div>  
            </React.Fragment>
        )
    };
}
 
export default CounterList;