const charactersBtn = document.getElementById('characters-btn');
const spellsBtn = document.getElementById('spells-btn');
const searchBar = document.getElementById('search-bar');
const content = document.getElementById('content');

charactersBtn.addEventListener('click', () => {
    fetchCharacters();
});

spellsBtn.addEventListener('click', () => {
    fetchSpells();
});

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.innerText.toLowerCase().includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

async function fetchCharacters() {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    const characters = await response.json();
    displayCharacters(characters);
}

function displayCharacters(characters) {
    content.innerHTML = '';
    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('card', 'col-md-3'); // Columna de Bootstrap para el diseño responsivo
        card.innerHTML = `
            <h3>${character.name}</h3>
            <img src="${character.image}" alt="${character.name}">
            <p>Especie: ${character.species}</p>
            <p>Casa: ${character.house}</p>
        `;
        content.appendChild(card);
    });
}

async function fetchSpells() {
    const response = await fetch('https://hp-api.onrender.com/api/spells');
    const spells = await response.json();
    displaySpells(spells);
}

function displaySpells(spells) {
    content.innerHTML = '';
    spells.forEach(spell => {
        const card = document.createElement('div');
        card.classList.add('card', 'col-md-3'); 
        card.innerHTML = `
            <h3>${spell.name}</h3>
            <p>Hechizo: ${spell.spell}</p>
            <p>Descripción: ${spell.description}</p>
        `;
        content.appendChild(card);
    });
}






// Función para crear estrellitas
function createStar() {
    const star = document.createElement('div');
    star.
    
classList.add('star');
    
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = '0px'; // Iniciar desde arriba

    // movimiento random
    const randomX = (Math.random() - 0.5) * 200; 
    star.style.setProperty('--random-x', randomX);

    // Añadir la estrella 
    document.body.appendChild(star);
    
    // Animar la estrella
    setTimeout(() => {
        star.style.opacity = 1; // se ve
        star.
   
style.animation = 'fall 2s forwards'; //duración
    }, 10);

    // Eliminar la estrella 
    setTimeout(() => {
        star.remove();
    }, 2000);
}

searchBar.addEventListener('click', () => {
    for (let i = 0; i < 120; i++) { 
        createStar();
    }
});