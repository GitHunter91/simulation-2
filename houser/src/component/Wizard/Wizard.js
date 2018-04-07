import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class Wizard extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }

    }
    handleInputChange( key, value ){
        this.setState({[key]:value})
    }

    addHouse(){
        console.log(this.state)
        axios.post('/api/addHouse', this.state)
        .then(response=>{
          this.props.newHouse();
          this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
          });
        })
        .catch(err=>{
          console.log(err)
        })
        console.log(this.state)
      }
    render() {
        return (
            <div>
              <h1>Wizard</h1>
              <Link to= '/'><button>Cancel</button></Link>
              <form>
                <input type = "text" placeholder="name"onChange = {(e)=>{this.handleInputChange(e.target.value) }} />
                <input placeholder="address"onChange = {(e)=>{this.handleInputChange(e.target.value)}} />
                <input placeholder="city"onChange = {(e)=>{this.handleInputChange(e.target.value)}} />
                <input placeholder="state"onChange ={(e)=>{this.handleInputChange(e.target.value)}} />
                <input placeholder="zipcode"onChange = {(e)=>{this.handleInputChange(e.target.value)}}/>
                <Link to='/'><button onClick={this.addHouse()}>Add Home</button></Link>
                </form>
            </div>
        );
    }
}