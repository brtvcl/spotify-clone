import PlaylistCollection from "../components/PlaylistCollection";

function Home() {

	return (
		<div>
			<div className="py-2">
			</div>
			<PlaylistCollection title="Günlük Müzik İhtiyacın" playlists={[
				"sKY4Y2kZAJwkZl2TB9c9d",
				"9IalVQ9s5foJ2xc5otglI",
				"5i959HxVjLQnQNIUu1iJg",
				"EfFKOgChsAif4jtfCiST0",
				"Rl68udRfpimQcSgGJJxdT",
				"GMZO61tUhHFdMeifNNtP1",
				"my9ozGDR6spQeyfeDHnNY",
				"2CvrVbw3oDCDkzZnHTnrw",
			]}/>
			<PlaylistCollection title="Odaklan" playlists={[
				"7mUWj4dXRif_IDkC5JEgl",
				"REenImeqvx5EFA3qZC435",
				"mh6vLaE_2av1x0SBRgSDL",
				"eKAYktezuEaHUeOQc3f6J",
				"ARPn2QH6PMFhMVwMjAGfh",
				"wF_2Y9LLDTEF5p2BQtIvk",
				"hf0enx5wYfFiA45v59ytp",
				"3YPkFOgiCX93a5JV7hHQ4",
			]}/>
			<PlaylistCollection title="Ruh Hali" playlists={[
				"a4FzqwqW9YX4yrHWPpFFX",
				"kz00y9VtyhEKbwE7eKZbD",
				"wd-0GI-eabE2BKvicRFc8",
				"GrQkfDQrTeIT923bljMzQ",
				"7plXodKvWanA8tuBa_96S",
				"7BM8GSQP60mm4U98XzxKq",
				"asx9PPme7YDUQ_IM0Cja8",
				"tcomNN872WGRW8zWsSNm3",
			]}/>
			<PlaylistCollection title="Popüler yeni çıkanlar" playlists={[
				"YNxMFXd6499TqgPihtZkH",
				"d7oHnR5sLK8IYaakyQuGn",
				"aZrkpXIiG_wgNOffhikUW",
				"H5Spvh34OL8oyQheDJlpz",
				"7HjpKIJjT1XCFCLqzwID_",
				"Ed0_R3tLxfmTVvxf6XqYc",
				"eBhEzlg3sLFQjk2ArhKqX",
				"BmClYX88hVAreUmgJC2mJ",
			]}/>
		</div>
	
	)
}

export default Home
