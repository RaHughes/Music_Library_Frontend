import React, { Component } from 'react'; 
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
import SongForm from './SongForm/SongForm';

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

    addSong = async(newSong) => {
        console.log(newSong)
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
        console.log(response)
    }

    render() {
        return (
            <div>
            <MusicTable deleteSong={this.deleteSong} songs={this.state.songs} />
            <SongForm addNewSong={this.addSong}/>
            </div>
        )
    }
}
export default App; 