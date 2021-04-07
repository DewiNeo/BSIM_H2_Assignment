const charactersList = document.getElementById('charactersList');
let hpCharacters = [];

const loadCharacters = async () => {
    try {
        const res = await fetch('https://animechan.vercel.app/api/quotes');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.anime}</h2>
                <p>${character.character}</p>
                <p>${character.quote}</p>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
