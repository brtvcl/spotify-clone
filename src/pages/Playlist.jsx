import { useParams, useNavigate } from "react-router-dom";
import playlists from "../data/playlists";
import albums from "../data/albums";
import months from "../data/months";
import Icon from "../components/Icon";
import { useEffect } from "react";

function Playlist() {

    //Id from url
    let id = "none";
    id = useParams().id;

    //Find playlist with id
    let playlist = playlists.find(p => p.id == id);
    
    //Empty dataset if playlist not found
    if (!playlist) {
        playlist = {
            id: "none",
            title : "",
            description: "",
            authors: [],
            likes: 0,
            songs: []
        }
    };

    //Navigate hook
    const navigate = useNavigate();

    // Array to hold songs of playlist
    let songs = [];

    //Find song data from albums
    playlist.songs.forEach(song => {
        let album = albums.find(album=>album.id==song.albumId); //Get album from playlist
        let songData  = album.songs[song.songIndex];    //Get song from album

        //Structure data for rendering
        let track = {album: album, ...songData, insertDate: song.insertDate};
        songs.push(track);   //Push song to array
    });

    //Import playlist cover img src
    let imgSrc = new URL(`../assets/img/${playlist.coverImg}`, import.meta.url).href;	


    //Insert time rendering 
    function renderInsertTime(insertDate) {
        //Difference of current time and insert time in ms 
        let diff = new Date().getTime() - insertDate.getTime();

        if (diff < 1000*60) {
            return `${Math.floor(diff/1000)} saniye önce`
        } else if (diff < 1000*60*60) {
            return `${Math.floor(diff/(1000*60))} dakika önce`
        } else if (diff < 1000*60*60*24) {
            return `${Math.floor(diff/(1000*60*60))} saat önce`
        } else if (diff < 1000*60*60*24*30) {
            return `${Math.floor(diff/(1000*60*60*24))} gün önce`
        }  else {
            return `${insertDate.getDate()} ${months[insertDate.getMonth()]} ${insertDate.getFullYear()}`;
        }
    }

    //If playlist not found navigate to not found page
    useEffect(()=>{
        if (playlist.id == "none") {
            navigate("/not-found");
        }
    }, []);

    return (
        <div>
           <div className="playlist-info">
                <img src={imgSrc} alt="" className="playlist-info-img" />
                <div className="d-flex flex-column mt-auto">
                    <div className="playlist-info-top-text visible-md">Çalma Listesi</div>
                    <div className="playlist-info-title">{playlist.title}</div>
                    <div className="c-gray-1 mt-1">{playlist.description}</div>
                    <div className="playlist-info-sub-text">
                        <span className="fw-bold">{playlist.authors.map(author=>author)}</span> • 
                        <span>{playlist.likes.toLocaleString()} beğenme • </span> 
                        <span className="visible-md"> {playlist.songs.length} şarkı,</span> 
                        <span className="c-gray-1">6sa 6 dk</span>
                    </div>
                </div>
                
           </div>
           <div className="playlist-actions">
                <div style={{fontFamily:"monospace",fontSize:"24px", color:"#000000"}} className="playlist-actions-play">
                    <Icon size="2rem" name="play"/>
                </div>
                <div style={{fontFamily:"monospace",fontSize:"48px"}} className="playlist-actions-like">
                    <Icon size="2rem" name="heart_outline"/>
                </div>
                <div  className="playlist-actions-more visible-md">...</div>
           </div>
           <div className="playlist-table">
            <table style={{borderCollapse:"collapse"}} className="table table-borderless c-gray-1">
                <thead className="visible-md">
                    <tr style={{borderBottom:"1px solid #272727"}}>
                        <th></th>
                        <th>Başlık</th>
                        <th>Albüm</th>
                        <th className="visible-md">Tarih Eklendi</th>
                        <th className="visible-md"><Icon name="clock"></Icon></th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song,i)=><tr key={i.toString()}>
                        <td className="w-auto" style={{verticalAlign:"middle"}}>{i+1}</td>
                        <td className="">
                            <span className="playlist-song-title">{song.title}</span>
                            <div className="invisible-md">{song.album.title}</div>
                        </td>
                        <td className="visible-md">{song.album.title}</td>
                        <td className="w-25 visible-md">{renderInsertTime(new Date(song.insertDate))}</td>
                        <td className="w-auto visible-md">{`${Math.floor(song.length/60)}:${song.length%60}`}</td>
                    </tr>)}
                </tbody>
            </table>
           </div>
        </div>
    )
}

export default Playlist;