import { useState, useEffect } from "react"
import playerAlbumCoverSrc from "./assets/img/bb67706f00000002863b311d4b787ed621f7e696.jpg";
import audioSrc from "./assets/snd/demo.mp3";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Routes, Route, useNavigate, NavLink, Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import Slider from "./components/Slider";
import Icon from "./components/Icon";
import { useSelector } from "react-redux";

//Import pages
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Search from "./pages/Search";



function App() {

    //Bg color
    const color = useSelector(state => state.bgColor.color);
    
    //Play time of music player
    const [time, setTime] = useState(0);

    //Navigate back and forth with buttons
    const navigate = useNavigate();

    //Audio object as state
    const [audio] = useState(new Audio(audioSrc));

    //Playing state
    const [playing, setPlaying] = useState(false);

    //Toggle playing between true/false
    const togglePlaying = () => setPlaying(!playing);

    //Find seconds from percentage value
    function setCurrentTime(percentage) {
        let value = (audio.duration * (percentage / 100));
        audio.currentTime = value;
    }

    //When playing state changes sync with audio object
    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    //Effect for updating slider percentage every second
    //sets interval by 1 second.
    //sets playing to false when audio ends
    //cleansup interval and eventlistener after unmounting 
    useEffect(() => {
        const interval = setInterval(() => {
            let percentage = (audio.currentTime / audio.duration)*100
            setTime(percentage);
        }, 1000);

        function audio_ended_handler() {
            setPlaying(false);
        }

        audio.addEventListener("ended", audio_ended_handler);

        return () => {
          clearInterval(interval);
          audio.removeEventListener("ended", audio_ended_handler);
        };
      }, []);


    return (
    <div className="container-fluid d-flex flex-column p-relative">		
        <div className="row flex-grow-1 h-100">
            <div className="flex-shrink-0 sidebar c-bg-black c-white visible-md">
                <ul className="nav-menu mt-4">
                    <li>
                        <NavLink to="/">
                            <i> 
                                <Icon size="24px" name="home"/>
                            </i>
                            <span>Ana Sayfa</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search">
                            <i>
                                <Icon size="24px" name="search"/>
                            </i>
                            <span>Ara</span>
                        </NavLink>
                    </li>
                    <li>
                        <Link to="#">
                            <i>
                                <Icon size="24px" name="bookshelf"/>
                            </i>
                            <span>Kitaplığın</span>
                        </Link>            
                    </li>
                </ul>
                <ul className="nav-menu">
                    <li>
                        <Link to="#">
                            <div className="new-list">
                                <Icon size="16px" name="plus"/>
                            </div>
                            <span>Çalma Listesi Oluştur</span>
                        </Link>      
                    </li>
                    <li>
                        <Link to="#">
                            <div className="liked-songs">
                                <Icon size="12px" name="heart"/>
                            </div>
                            <span>Beğenilen Şarkılar</span>
                        </Link>      
                    </li>
                </ul>
            </div>
            <div className="col mainview" style={{background:`linear-gradient(180deg, ${color} 0%, rgba(19,19,19,1) 33%, rgba(0,0,0,1) 68%)`}}>
                <div className="topbar visible-md">
                    <div className="topbar-btn" onClick={()=>{navigate(-1)}}>
                        <Icon name="chevron_left"/>
                    </div>
                    <div className="topbar-btn"  onClick={()=>{navigate(1)}}>
                        <Icon name="chevron_right"/>
                    </div>
                </div>
                <Scrollbars renderView={props=><div {...props} style={{...props.style,overflowX:"hidden"}}></div>}>
                <div className="px-4 topbar-margin" style={{paddingBottom:"180px",background:`linear-gradient(180deg, ${color} 0%, rgba(19,19,19,1) 33%, rgba(0,0,0,1) 68%)`}}>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/playlist/:id" element={<Playlist/>}></Route>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="*" element={<div style={{color:"white"}}>Page not found.</div>} />
                    </Routes>
                </div>
                </Scrollbars>
            </div>
        </div>
        <div className="row flex-shrink-0 flex-grow-0 bottombar px-3  visible-md">
            <div className="col-md-3 col-2 d-flex">

                <div className="d-flex my-auto c-white">
                    <img src={playerAlbumCoverSrc} width="60" alt="" />
                    <div className="ms-4 me-4 my-auto">
                        <div className="player-songname">Song</div>
                        <div className="player-albumname"> Album </div>
                    </div>
                    <div className="p-2 my-auto">
                        <Icon name="heart_outline" />
                    </div> 
                </div>
            </div>
            <div className="col my-auto pt-2">
                <div style={{gap:"10px"}} className="d-flex align-items-center justify-content-center">
                    <div className="p-1">
                        <Icon size="28px" name="shuffle"/>
                    </div>
                    <div className="p-1">
                        <Icon name="backward"/>
                    </div>
                    <div className="p-1 play-button" onClick={togglePlaying}>
                        {playing ? <Icon name="pause"/> : <Icon name="play"/>}
                    </div>
                    <div className="p-1">
                        <Icon name="forward"/>
                    </div>
                    <div className="p-1">
                        <Icon name="loop"/>
                    </div>
                </div>
                <div  className="d-flex align-items-center justify-content-center">
                    <div className="player-duration">0:19</div>
                    <div className="player-slider-container">
                        <Slider onChange={(percentage)=>{setCurrentTime(percentage)}} value={time}></Slider>
                    </div>
                    
                    <div className="player-duration">2:25</div>
                </div>
            </div>
            <div className="col-md-3 col-2 d-flex align-items-center justify-content-end">
                <div className="p-1">
                    <Icon size="18px" name="volume"/>
                </div>
                <div className="volume-slider-container">
                    <Slider></Slider>
                </div>
            </div>
        </div>
        <div className="invisible-md mobile-nav">
            <NavLink to="/">
                <div className="mobile-nav-item">
                    <Icon name="home"/>
                    <div>Ana sayfa</div>
                </div>
            </NavLink>
            <NavLink to="/search">
                <div className="mobile-nav-item">
                    <Icon name="search"/>
                    <div>Ara</div>
                </div>
            </NavLink>
            <Link to="#">
                <div className="mobile-nav-item">
                    <Icon name="bookshelf"/>
                    <div>Kitaplığın</div>
                </div>
            </Link>
        </div>
        <div className="invisible-md mobile-player" style={{backgroundColor:"#457054"}}>
            <div className="d-flex flex-row">
                <div>
                    <img src={playerAlbumCoverSrc} alt="player album cover" width={45} height={45} />
                </div>
                <div className="mobile-player-song-info">
                    <h6>Song</h6>
                    <p>Album</p>
                </div>
                <div className="mobile-player-action">
                    <Icon size="2rem" name="heart_outline"/>
                    <div style={{padding:"0.25rem"}}></div>
                    <div onClick={togglePlaying}>
                        {playing ? <Icon size="2rem" name="pause"/> : <Icon size="2rem" name="play"/>}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    )
};

export default App;