import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { House } from '../House/House';
export default class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            houses: []
        }
    }
    componentDidMount() {
      this.getHouses(); 
    }
    
    getHouses(){
        axios.get( '/api/getHouses' )
        .then( response => {
            console.log(response)
            this.setState(()=> ({ houses: response.data.houses }))
        })
        .catch( err => {
            console.log( err )
        })
    }
    
    delete(id){
        axios.delete(`/api/deleteSong/${id}`)
        .then(response => {
          this.setState(()=>({music:response.data}))
        })
        .catch(err=>{
          console.log(err)
        })
        }

    render() {
        console.log(this.state.houses)
        return (
            <div>
                <h1>Dashboard</h1>
                {this.state.houses ? this.state.houses.map((e, i)=>{return <p key= {i}>House</p>}): null}
        <Link to= '/wizard'><button>Add New Property</button></Link>
        <House />
            </div>
        );
    }
}