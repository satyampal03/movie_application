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




// -------------------###START-HERE###----------------------------
// Elements Selection here
const cards = document.querySelector('.cards');



// On arrow buttons click scroller should be work

const left_btn = document.querySelector('.fa-angle-left');
const right_btn =document.querySelector('.fa-angle-right');

left_btn.addEventListener('click', ()=>{
    cards.scrollLeft -= 140;
})

right_btn.addEventListener('click', ()=>{
    cards.scrollLeft += 140;
})

// Emplimenting the actual card Data here
const getMovie = async () => {
    try{
        const getFetch = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=387a089c850f9bb023b31ffad051f531`)
        let data = await getFetch.json();

        console.log(data.results[0].adult);
        console.log(data.results[0].backdrop_path);
        console.log(data.results[0].genre_ids);
        console.log(data.results[0].id);
        console.log(data.results[0].original_language);
        console.log(data.results[0].original_title);
        console.log(data.results[0].overview);
        console.log(data.results[0].popularity);
        console.log(data.results[0].poster_path);
        console.log(data.results[0].release_date);
        console.log(data.results[0].title);
        console.log(data.results[0].video);
        console.log(data.results[0].vote_average);
        console.log(data.results[0].vote_count);

        const movies = (data.results);


        
        movies.forEach(elem => {
            const card = document.createElement('a');
            card.classList.add('card');

            
            let html =
                     `
                    <img src="https://image.tmdb.org/t/p/original/${elem.backdrop_path}}" class="poster" alt="${title} image not found">
                    <div class="rest_card">
                        <img src="https://image.tmdb.org/t/p/original/${elem.poster_path}}" alt="${title} not found">
                        <div class="cont">
                            <h4>${elem.original_title}</h4>
                            <div class="sub_title">
                            
                                <p>${elem.original_language} ${elem.release_date}</p>
                                <h3><span>IMDB</span><i class="fa-solid fa-star"></i>${elem.vote_average.toFixed(2)}</h3>
                            </div>
                        </div>
                    </div>
        `;
        //https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg

        card.innerHTML = html;
        cards.appendChild(card);
        });
       
        document.querySelector('.count');




    }catch(err){
        console.log(err);
    }
}
getMovie();