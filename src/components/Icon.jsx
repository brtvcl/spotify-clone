import home from "../assets/svg/home.svg?raw";
import search from "../assets/svg/search.svg?raw";
import bookshelf from "../assets/svg/bookshelf.svg?raw";
import plus from "../assets/svg/plus.svg?raw";
import heart from "../assets/svg/heart.svg?raw";
import chevron_right from "../assets/svg/chevron_right.svg?raw";
import chevron_left from "../assets/svg/chevron_left.svg?raw";
import shuffle from "../assets/svg/shuffle.svg?raw";
import heart_outline from "../assets/svg/heart_outline.svg?raw";
import heart_filled from "../assets/svg/heart_filled.svg?raw";
import loop from "../assets/svg/loop.svg?raw";
import volume from "../assets/svg/volume.svg?raw";
import play from "../assets/svg/play.svg?raw";
import pause from "../assets/svg/pause.svg?raw";
import backward from "../assets/svg/backward.svg?raw";
import forward from "../assets/svg/forward.svg?raw";
import clock from "../assets/svg/clock.svg?raw";

let icons = {
    home,
    search,
    bookshelf,
    plus,
    heart,
    chevron_right,
    chevron_left,
    shuffle,
    heart_outline,
    heart_filled,
    loop,
    volume,
    play,
    pause,
    backward,
    forward,
    clock
}

function Icon(props) {

    //Import svgs as raw strings and html render it to be able to change color and size 
    return (
        <div style={{width:props.size || "24px", height:props.size || "24px"}} dangerouslySetInnerHTML={{__html:icons[props.name]}}/>
    )
    
}

export default Icon;