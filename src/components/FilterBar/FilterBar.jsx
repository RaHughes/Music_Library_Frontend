import React, {Component} from 'react';


class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterBy: "",
            filter: "",
            noDupes: []
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.sort(this.state.filterBy, this.state.filter)
    }

    render() { 
        return ( 
        <form onSubmit={this.handleSubmit}>   
            <select name="filterBy" onChange={this.handleChange}>
                <option value="all">All</option>
                <option value="artist">Artist</option>
                <option value="album">Album</option>
                <option value="genre">Genre</option>
                <option value="release_date">Release Date</option>
                <option value="title">Title</option>
            </select>
            <select name="filter" onChange={this.handleChange}>
               {this.props.songs.map(song => {
                   if(song[this.state.filterBy] in this.state.noDupes){
                       return
                   } else {
                    this.state.noDupes.push(song[this.state.filterBy])
                    return <option value={song[this.state.filterBy]}>{song[this.state.filterBy]}</option>
                }
                })}
            </select>    
            <button type="submit">Filter</button>
        </form>)
    }
}
 
export default FilterBar;
