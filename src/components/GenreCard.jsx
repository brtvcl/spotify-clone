function GenreCard(props) {
    //Render genre card
    return (
        <div className="genre-card" style={{backgroundColor:props.color}}>
            <div className="genre-card-body c-white">
                {props.name}
            </div>
            <img src={props.imgSrc} alt="" className="genre-card-img" />
        </div>
    )
}


export default GenreCard