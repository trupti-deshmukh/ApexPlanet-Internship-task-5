document.getElementById("jokeBtn").addEventListener("click", getJoke);

function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("jokeText").innerHTML =
                `${data.setup} 😂<br><br><b>${data.punchline}</b>`;
        })
        .catch(error => {
            document.getElementById("jokeText").innerHTML = 
                "Oops! Couldn't fetch a joke 😢 Try again.";
        });
}
