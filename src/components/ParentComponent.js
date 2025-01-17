import React, {Component} from 'react';
import DisplayData from './DisplayData';
import Form from './Form'

class ParentComponent extends Component{
    state = {
        firstname: "",
        lastname: "",
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      } 



render(){
    return(
        <div>
        <Form 
        formData={this.state}
        handleChange={this.handleChange}

        />
        <DisplayData formData={this.state}/>
        </div>
    )
}

}
export default ParentComponent;