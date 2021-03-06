import React from 'react';
import './MusicTable.css'

const MusicTable = (props) => {
    console.log(props)
    if (props.songs !== [])
    return ( 
        <div>
                <table>
                    <tr> 
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                    {props.songs.map(song => {
                        return <tr key={song.id}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.genre}</td>
                                <td>{song.release_date}</td>
                                <button onClick={() => props.deleteSong(song.id)} type='submit'>Delete Song</button>
                               </tr>
                    })}
                </table>
        </div>
     );

     else {
         return(
             <div>
                 <h1>Loading Music, Please Wait</h1>
             </div>
         )
     }
}
 
export default MusicTable;
