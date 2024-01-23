import { linkImgGenshinImpact } from './data.js';

export function search() {
    const genderFilter = document.getElementById('fill_gender').value;
    const landFilter = document.getElementById('fill_land').value;

    renderCharacters(genderFilter, landFilter);
}

function renderCharacters(genderFilter, landFilter) {
    const resultContainer = document.getElementById('main_rander');
    resultContainer.innerHTML = '';

    linkImgGenshinImpact.forEach(land => {
        if (landFilter === 'all_land' || landFilter === land.land.toLowerCase()) {
            const charactersToRender = genderFilter === 'male' ? land.male : genderFilter === 'female' ? land.female : [...land.male, ...land.female];

            charactersToRender.forEach(character => {
                const characterNames = character.name.map(name => name.toLowerCase());
                character.images.forEach(image => {
                    if (image) {
                        const imgElement = document.createElement('img');
                        imgElement.src = image;
                        imgElement.alt = characterNames.join(', ');
                        imgElement.classList.add('result-item');
                        imgElement.addEventListener('click', () => copyImageLink(image));
                        resultContainer.appendChild(imgElement);
                    } else {
                        // alert('No image available for this character.');
                    }
                });
            });
        }
    });
}


function copyImageLink(link) {
    navigator.clipboard.writeText(link).then(() => {
        alert('Image link copied to clipboard!');
    }).catch(err => {
        console.error('Unable to copy image link', err);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    function getRandomImages() {
        const resultContainer = document.getElementById('main_rander');
        resultContainer.innerHTML = '';

        const randomIndexes = [];
        while (randomIndexes.length < 4) {
            const randomIndex = Math.floor(Math.random() * linkImgGenshinImpact.length);
            if (!randomIndexes.includes(randomIndex)) {
                randomIndexes.push(randomIndex);
            }
        }

        randomIndexes.forEach(index => {
            const land = linkImgGenshinImpact[index];
            const characters = [...land.male, ...land.female];
            characters.forEach(character => {
                const characterNames = character.name.map(name => name.toLowerCase());
                character.images.forEach(image => {
                    if (image) {
                        const imgElement = document.createElement('img');
                        imgElement.src = image;
                        imgElement.alt = characterNames.join(', ');
                        imgElement.classList.add('result-item');
                        imgElement.addEventListener('click', () => copyImageLink(image));
                        resultContainer.appendChild(imgElement);
                    } else {
                        // alert('No image available for this character.');
                    }
                });
            });
        });
    }

    getRandomImages();

    const input_search = document.querySelector('.input_search');
    input_search.addEventListener('input', function () {
        let valueInput = input_search.value;
        if(valueInput == 0 || valueInput === '') {
            getRandomImages();
        }
    });
    
    input_search.addEventListener('change', function () {
        let valueInput = input_search.value;
        if(valueInput == 0 || valueInput === '') {
            getRandomImages();
        }
    });

    const clearInputBtn = document.querySelector(".clear_input");
    clearInputBtn.addEventListener("click", function() {
        getRandomImages();
    });
});

export function search_() {
    const searchTerm = document.querySelector('.input_search').value.toLowerCase();
    const resultContainer = document.getElementById('main_rander');
    resultContainer.innerHTML = '';

    linkImgGenshinImpact.forEach(land => {
        [land.male, land.female].flat().forEach(character => {
            const characterNames = character.name.map(name => name.toLowerCase());
            if (characterNames.includes(searchTerm)) {
                character.images.forEach(image => {
                    if (image) {
                        const imgElement = document.createElement('img');
                        imgElement.src = image;
                        imgElement.alt = characterNames.join(', ');
                        imgElement.classList.add('result-item');
                        imgElement.addEventListener('click', () => copyImageLink(image));
                        resultContainer.appendChild(imgElement);
                    } else {
                        // alert('No image available for this character.');
                    }
                });
            }
        });
    });
}
