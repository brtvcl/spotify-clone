import useWindowDimensions from "../utils/useWindowDimension";
import PlaylistCard from "./PlaylistCard";

function PlaylistCollection ({playlists, title}) {

    //Get window dimensions for responsive playlist collection
    const { height, width } = useWindowDimensions();
    

    //Amount of playlist card that will be show in a collection
    //Changes based on a window width
    let displayPlaylistAmount = 2;


    //Set breakpoints for responsiveness
    switch (true) {
        case width > 1900:
            displayPlaylistAmount = 8;
            break;
        case width > 1700:
            displayPlaylistAmount = 7;
            break;
        case width > 1500:
            displayPlaylistAmount = 6;
            break;
        case width > 1300:
            displayPlaylistAmount = 5;
            break;
        case width > 970:
            displayPlaylistAmount = 4;
            break;
        case width > 770:
            displayPlaylistAmount = 3;
            break;
        default:
            displayPlaylistAmount = 8;
            break;
    }
    
    return (
        <div className="playlist-collection-container" >
				<div className="playlist-collection-title">
					{title}
				</div>
				<div className="playlist-collection">
                    {playlists.map((id, i) => {
                        //render only defined amount of playlist card
                        if (i<displayPlaylistAmount) {
                            return <PlaylistCard id={id}></PlaylistCard>
                        }
                    })}
				</div>
			</div>
    )
}
export default PlaylistCollection