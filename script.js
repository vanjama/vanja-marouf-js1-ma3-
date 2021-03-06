
//Question 1
const getRemainder = (a,b) => a % b;

//Question 2
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=c0af1a1cb4164a739622929a21f5850e";

const resultsContainer = document.querySelector(".results");

fetch(url)
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error)
    resultsContainer.innerHTML = displayError("An error occurred when calling the API");
})

function createHTML(results){
    const facts = results.all;

    resultsContainer.innerHTML = "";

    for( let i =0; i < facts.length; i++){
        if (i === 8){
            break;
        }
        resultsContainer.innerHTML +=`<div class="result">$(facts[i].text)</div>`;
    }
}




/*fetch(url)
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log (`ERROR`))*/
    