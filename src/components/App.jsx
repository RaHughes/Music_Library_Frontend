import React, { Component } from 'react'; 
import axios from 'axios';
import { render } from '@testing-library/react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs: ''
        }
    }


    componentDidMount(){
        this.getSongs()
    }

    async getSongs() {
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs: response.data
        })
        console.log(response.data)
    }

    render() {
        return (
            <div>
                Hello Comrade
            </div>
        )
    }
}
export default App; 