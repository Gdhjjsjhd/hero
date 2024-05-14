const button = document.getElementById('sorteador');
const card = document.getElementById('card');
const personagem = document.getElementById('personagem');
const link = "https://www.superheroapi.com/api.php/6068122033302389/ ";

const gerarNumeroAleatori = () => {
    const id = Math.floor(Math.random() * 732)
    return id;
}

button.addEventListener('click', () => {
    card.innerHTML = ''
    personagem.innerHTML = ''

    fetch(`${link}${gerarNumeroAleatori()}`)
    .then((response) => response.json())
    .then((data) => {
        card.src = data.image.url;
        personagem.innerHTML = `Nome de herói : ${data.name} <br>
        Nome real: ${data.biography["full-name"]}<br>
        Alter egos: ${data.biography["alter-egos"]}<br>
        Grupos de afiliação: ${data.connections["group-affiliation"]}<br>
        Local de nacimento: ${data.biography[""]}
        Primeira aparição:${data.biography["firts-appearance"]}<br> 
        Editora:${data.biography.publisher}<br>
        Esatísticas de poder:<br>
        Força:${data.powerstats.strenght}<br>
        Iteligencia:${data.powerstats.intelligence}
        Velocidade:${data.powerstats.speed}<br>
        ...
        `;


    });
});