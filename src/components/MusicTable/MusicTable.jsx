import React from 'react';

const MusicTable = (props) => {
    console.log(props)
    if (props.songs != '')
    return ( 
        <div>
            <h1>Music Library</h1>
            {props.songs.map(song => {
                return <div>
                    <h2>{song.title}</h2>
                    <h3>{song.artist}</h3>
                    <p>{song.album}</p>
                    <p>{song.genre}</p>
                    <p>{song.release_date}</p>
                </div>
            })}
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
