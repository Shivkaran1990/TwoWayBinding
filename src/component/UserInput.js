import React,{Component} from 'react';
import UserOut from './UserOut';

class UserInput extends Component
{
    state=({
        name:'Shivkaran Ravidas'
    })
    
printHandler=(event) =>{
    this.setState({
       name: event.target.value
    })
}

    render()
    {
        return(
            <div>
              <label>UserName</label> 
              <input type="text" click={this.printHandler}></input> 
              <UserOut name={this.state.name}></UserOut>
            </div>
        )

    }
}

export default UserInput;