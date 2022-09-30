import GenreCard from "../components/GenreCard";

import genreSrc0 from "../assets/img/db67616d00001e02d21608137a3071f8e7537770.jpg";
import genreSrc1 from "../assets/img/ab67706f00000002bf3bd3f4b22276ca752cea7d.jpg";
import genreSrc2 from "../assets/img/ab67706f00000002db32a17c1f5291b19317b62e.jpg";
import genreSrc3 from "../assets/img/bb67706f0000000296e08a91ef3c7a6e7bfaa9a6.jpg";
import genreSrc4 from "../assets/img/db67616d00001e0280e0d24017f500ec026b92df.jpg";
import genreSrc5 from "../assets/img/ab67706f000000021dc047de8e4984604b5d8fa5.jpg";
import genreSrc6 from "../assets/img/db67616d00001e0204cd9a1664fb4539a55643fe.jpg";
import genreSrc7 from "../assets/img/db67616d00001e02911d0ad5322127c9c4a6a2c2.jpg";
import genreSrc8 from "../assets/img/db67616d00001e0280e0d24017f500ec026b92df.jpg";
import genreSrc9 from "../assets/img/db67616d00001e027ba032b4d7ea3113cc0042d9.jpg";
import genreSrc10 from "../assets/img/db67616d00001e02a935e4689f15953311772cc4.jpg";
import genreSrc11 from "../assets/img/bb67706f000000025b0a7b8408322a3b9ed15e1e.jpg";
import genreSrc12 from "../assets/img/ab67706f00000002f95e0d3dd06dbadb407ef766.jpg";
import genreSrc13 from "../assets/img/ab67706f000000023b52952432e3a6d3f517eb2e.jpg";

function Search() {
    return (
        <>
            <div className="py-2"></div>
            <h2 className="playlist-collection-title">Hepsine göz at</h2>
            <div className="genre-collection mt-4">
                <GenreCard imgSrc={genreSrc0} color="rgb(30, 50, 100)" name="Senin İçin Hazırlandı"></GenreCard>
                <GenreCard imgSrc={genreSrc1} color="rgb(141, 103, 171)" name="Listeler"></GenreCard>
                <GenreCard imgSrc={genreSrc2} color="rgb(232, 17, 91)" name="Yeni Çıkanlar"></GenreCard>
                <GenreCard imgSrc={genreSrc3} color="rgb(141, 103, 171)" name="Keşfet"></GenreCard>
                <GenreCard imgSrc={genreSrc4} color="rgb(141, 103, 171)" name="Pop"></GenreCard>
                <GenreCard imgSrc={genreSrc5} color="rgb(186, 93, 7)" name="Hip Hop"></GenreCard>
                <GenreCard imgSrc={genreSrc6} color="rgb(255, 200, 100)" name="Yaz"></GenreCard>
                <GenreCard imgSrc={genreSrc7} color="rgb(180, 155, 200)" name="Popüler"></GenreCard>
                <GenreCard imgSrc={genreSrc8} color="rgb(141, 103, 171)" name="Ruh Hali"></GenreCard>
                <GenreCard imgSrc={genreSrc9} color="rgb(20, 138, 8)" name="EQUAL"></GenreCard>
                <GenreCard imgSrc={genreSrc10} color="rgb(186, 93, 7)" name="Dönem müzikleri"></GenreCard>
                <GenreCard imgSrc={genreSrc11} color="rgb(240, 55, 165)" name="Öğrenci"></GenreCard>
                <GenreCard imgSrc={genreSrc12} color="rgb(220, 20, 140)" name="Dans ve Elektronik"></GenreCard>
                <GenreCard imgSrc={genreSrc13} color="rgb(230, 30, 50)" name="Rock"></GenreCard>
            </div>
            <div className="genre-collection">

            </div>
        </>
    )
}

export default Search;