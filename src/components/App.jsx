import React, { Component } from 'react'; 
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';

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

    async deleteSong(key){
        console.log(key)
        await axios.delete(`http://127.0.0.1:8000/music/${key}/`)
    }

    render() {
        return (
            <MusicTable deleteSong={this.deleteSong} songs={this.state.songs} />
        )
    }
}
export default App; 