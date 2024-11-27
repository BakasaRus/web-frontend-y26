let pokemons = [
    { id: 1, name: 'pikachu', weight: 58, height: 110 },
    { id: 2, name: 'ditto', weight: 58, height: 110 },
    { id: 3, name: 'eevee', weight: 58, height: 110 },
];

let openRequest = indexedDB.open('pokemons', 1);

openRequest.onupgradeneeded = () => {
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('pokemons')) {
        db.createObjectStore('pokemons', { keyPath: 'id' });
    }
};

openRequest.onsuccess = () => {
    let db = openRequest.result;

    let tx = db.transaction('pokemons', 'readwrite');
    let store = tx.objectStore('pokemons');

    // store.clear();

    for (const pokemon of pokemons) {
        // Can use .add() instead
        let request = store.put(pokemon);

        request.onsuccess = () => {
            console.log(`${pokemon.name} is added to IndexedDB`);
        }
    }

    let request = store.getAll();
    request.onsuccess = () => {
        for (const element of request.result) {
            tbody.innerHTML += `<tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.weight}</td>
                <td>${element.height}</td>
            </tr>`;
        }
    }

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let tx = db.transaction('pokemons', 'readwrite');
        let store = tx.objectStore('pokemons');
    
        const pokemonId = id.value;
        const pokemonName = pname.value;
        const pokemonWeight = weight.value;
        const pokemonHeight = height.value;
    
        store.put({ 
            id: +pokemonId,
            name: pokemonName,
            weight: +pokemonWeight,
            height: +pokemonHeight,
        });

        tbody.innerHTML += `<tr>
                <td>${pokemonId}</td>
                <td>${pokemonName}</td>
                <td>${pokemonWeight}</td>
                <td>${pokemonHeight}</td>
            </tr>`;
    });
}
