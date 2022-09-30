import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setColor } from "../redux/slices/colorSlice";
import playlists from '../data/playlists';
import Icon from "./Icon";

function PlaylistCard({ id }) {

	const dispatch = useDispatch();
	const [playlist, setPlaylist] = useState({});
	const [imageUrl, setImageUrl] = useState("");

	useEffect(()=>{
		//Find playlist from Mock database and set as state
		setPlaylist(playlists.find(p=>p.id == id));
	}, []);

	useEffect(()=>{
		//When playlist is set import the image of it and set as img src
		let imgSrc = new URL(`../assets/img/${playlist.coverImg}`, import.meta.url).href;	
		setImageUrl(imgSrc);
	}, [playlist])

	
	
	//Change background color on hover
	function hoverHandler() {
		dispatch(setColor(playlist.color || "rgba(77,77,77,1)"));
	}

    return (
        <div className="playlist-card" onMouseEnter={hoverHandler}>
			<Link to={`playlist/${id}`}>
				<div className="playlist-card-cover">
					<img className="playlist-card-img" src={imageUrl} alt="" />
					<div className="playlist-card-play-btn">
						<Icon name="play"></Icon>
					</div>
				</div>
				<div className="playlist-card-title c-white">
					{playlist.title}
				</div>
				<div className="playlist-card-desc c-gray-1">
					{playlist.description}
				</div>
			</Link>
		</div>
    )
}

export default PlaylistCard;