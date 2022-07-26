const $ = selector => document.querySelector(selector);
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '414719ea0fmsha0ecd054478251ep11468bjsn6da2fe06c4dc',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

const getData = async ()=>{
    try {
        const response = await fetch('https://spotify81.p.rapidapi.com/albums?ids=6PBZN8cbwkqm1ERj2BGXJ1', options);
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Ocurrió un error")
    }
};

const printAlbum = async ()=>{
    const albums = await getData();

    const album = albums.albums[0];

    const tracks = album.tracks.items;
    
    const nodes = tracks.map((track)=>{
        return `<div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src= ${album.images[0].url} alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <a target="_blank" href=${track.preview_url} class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${track.name}
          </a>
        </div>
      </div>`
    })
    const content = $("#content");
    nodes.forEach(element => {
       content.innerHTML += element; 
    });
}
printAlbum();