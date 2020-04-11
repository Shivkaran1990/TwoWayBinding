import React,{Component} from 'react';

class UserOut extends Component
{
    render(props)
    {
        return(
            <div>
            <p>My User Name is {this.props.name} </p>
            <p></p>   
            </div>
        );
    }
}
export default UserOut;
