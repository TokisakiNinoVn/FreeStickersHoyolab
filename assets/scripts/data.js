// 
// 
const linkImgGenshinImpact = [
    {
        land: 'Mondstadt',
        male: [
            {
                name: [''],
                images: [
                    '',
                ],
            },
        ],
        female: [
            {
                name: [''],
                images: [
                        '',
                ],
            },
        ],
    },
    {
        land: 'Liyue',
        male: [
            {
                name: [''],
                images: [
                    '',
                ],
            },
        ],
        female: [
            {
                name: [''],
                images: [
                        '',
                ],
            },
        ],
    },
    {
        land: 'Inazuma',
        male: [
            {
                name: [''],
                images: [
                    '',
                ],
            },
        ],
        female: [
            {
                name: ['Ei', 'Raiden Shogun'],
                images: [
                    'https://upload-os-bbs.hoyolab.com/upload/2023/12/28/4bb1fdde040fa06122b047dfe518ea7d_7012957660689990894.png',
                    'https://upload-bbs.mihoyo.com/upload/2022/02/23/c0739c8c34bae5b3ee8749ef77b9384e_5736952483423015425.png',
                ],
            },
        ],
    },
    {
        land: 'Sumeru',
        male: [
            {
                name: [''],
                images: [
                    '',
                ],
            },
        ],
        female: [
            {
                name: [''],
                images: [
                        '',
                ],
            },
        ],
    },
    {
        land: 'Fontaine',
        male: [
            {
                name: ['Lynet'],
                images: [
                    'https://upload-os-bbs.hoyolab.com/upload/2023/11/17/0b9d14c640ec5fd5f3721f82efed088e_2439392095879388438.png',
                ],
            },
            {
                name: ['Freminet'],
                images: [
                    'https://upload-os-bbs.hoyolab.com/upload/2023/11/17/ed7e49250ae0a57a27a8d829721c439f_2622842278920165888.png',
                ],
            },
        ],
        female: [
            {
                name: ['Chevreuse'],
                images: [
                        '',
                ],
            },
        ],
    },
    
]


function search_() {
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

function search() {
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
    input_search.addEventListener('', function () {
        search();
    });
});
