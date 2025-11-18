// const getMovie = async () => {
//     try{
//         const getFetch = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=387a089c850f9bb023b31ffad051f531`)

//         const data = await getFetch.json();


//         console.log(data.results[0].adult);
//         console.log(data.results[0].backdrop_path);
//         console.log(data.results[0].genre_ids);
//         console.log(data.results[0].id);
//         console.log(data.results[0].original_language);
//         console.log(data.results[0].original_title);
//         console.log(data.results[0].overview);
//         console.log(data.results[0].popularity);
//         console.log(data.results[0].poster_path);
//         console.log(data.results[0].release_date);
//         console.log(data.results[0].title);
//         console.log(data.results[0].video);
//         console.log(data.results[0].vote_average);
//         console.log(data.results[0].vote_count);

//     }catch(err){
//         console.log(err);
//     }
// }
// getMovie();

// On arrow buttons click scroller should be work

const left_btn = document.querySelector('.fa-angle-left');
const right_btn =document.querySelector('.fa-angle-right');
const cards = document.querySelector('.cards');

left_btn.addEventListener('click', ()=>{
    cards.scrollLeft -= 140;
})

right_btn.addEventListener('click', ()=>{
    cards.scrollLeft += 140;
})

