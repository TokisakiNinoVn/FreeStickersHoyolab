// Tạo một mảng lưu trữ thông tin về Genshin Impact
const genshinImpactData = [
    {
        land: 'Mondstadt',
        characters: [
            {
                name: 'Venti',
                    images: [
                        'https://upload-bbs.mihoyo.com/upload/2022/02/23/e56aa43cdca473369df4e2af3cb5e446_7888845532527976373.png',
                        'https://upload-bbs.mihoyo.com/upload/2022/02/23/393cbbc78d89a687c2dfbbc06388acd9_7666845323120594128.png',
                    ],
            },
            {
                name: 'Mona',
                    images: [
                        'https://upload-bbs.mihoyo.com/upload/2022/02/23/c2a3ac5d82cca5b4efb5010fd4e39102_1236708117295664816.png',
                        '',
                    ],
            },
        ],
    },
    {
        land: 'Liyue',
        characters: [
            {
                name: 'Xiao',
                    images: [
                        'https://upload-bbs.mihoyo.com/upload/2022/02/23/069c8e521150c000675450aab191d584_7316112639016562625.png',
                        'https://upload-bbs.mihoyo.com/upload/2022/02/23/91d8eeafb8ae3b158eae5a9c503efc79_2994313389762429967.png',
                    ],
            },
        ],
    },
    {
        land: 'Inazuma',
        characters: [
            {
                name: 'venty',
                    images: [
                        '',
                        '',
                    ],
            },
        ],
    },
    {
        land: 'Sumeru',
        characters: [
            {
                name: 'faruzan',
                    images: [
                        '',
                        '',
                    ],
            },
            {
                name: 'mochi scaramouche',
                    images: [
                        '',
                        '',
                    ],
            },
        ],
    },
    {
        land: 'Fontaine',
        characters: [
            {
                name: 'Furina',
                    images: [
                        '',
                        '',
                    ],
            },
        ],
    },
];

// In thông tin về nhân vật trong mỗi vùng đất
// genshinImpactData.forEach(land => {
// console.log(`Land: ${land.land}`);
// land.characters.forEach(character => {
//     console.log(`  Character: ${character.name}`);
//     console.log(`    Images:`);
//     character.images.forEach(image => {
//     console.log(`      ${image}`);
//     });
// });
// });


let currentLand = '';
function searchCharacters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const characterContainer = document.getElementById('characterContainer');
    characterContainer.innerHTML = '';

    genshinImpactData.forEach(land => {
    const matchingCharacters = land.characters.filter(character => {
        return character.name.toLowerCase().includes(searchTerm) || land.land.toLowerCase().includes(searchTerm);
    });

    if (matchingCharacters.length > 0) {
        matchingCharacters.forEach(character => {
        displayCharacter(character);
        });
    }
    });
}


function updateCharacterOptions() {
const filterSelect = document.getElementById('filterSelect');
const characterSelect = document.getElementById('characterSelect');
const selectedLand = filterSelect.value.toLowerCase();

// Nếu vùng đất được chọn khác với vùng đất trước đó, cập nhật danh sách nhân vật
if (selectedLand !== currentLand) {
    currentLand = selectedLand;
    characterSelect.innerHTML = '<option value="">All Characters</option>'; // Đặt lại tất cả nhân vật
    if (selectedLand) {
    const charactersInLand = genshinImpactData.find(land => land.land.toLowerCase() === selectedLand)?.characters;
    if (charactersInLand) {
        charactersInLand.forEach(character => {
        const option = document.createElement('option');
        option.value = character.name;
        option.textContent = character.name;
        characterSelect.appendChild(option);
        });
    }
    }
}

filterCharacters();
}

function filterCharacters() {
const selectedLand = document.getElementById('filterSelect').value.toLowerCase();
const selectedCharacter = document.getElementById('characterSelect').value.toLowerCase();
const characterContainer = document.getElementById('characterContainer');
characterContainer.innerHTML = '';

genshinImpactData.forEach(land => {
    if ((!selectedLand || land.land.toLowerCase() === selectedLand) &&
        (!selectedCharacter || land.characters.some(character => character.name.toLowerCase() === selectedCharacter))) {
    land.characters.forEach(character => {
        displayCharacter(character);
    });
    }
});
}

function displayCharacter(character) {
const characterContainer = document.getElementById('characterContainer');
const characterCard = document.createElement('div');
characterCard.classList.add('character-card');

const characterName = document.createElement('h3');
characterName.textContent = character.name;

const characterImages = document.createElement('div');
character.images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.classList.add('character-image');
    img.addEventListener('click', () => copyImageLink(image));
    characterImages.appendChild(img);
});

characterCard.appendChild(characterName);
characterCard.appendChild(characterImages);
characterContainer.appendChild(characterCard);
}

function copyImageLink(image) {
const copyText = document.createElement('input');
copyText.value = image;
document.body.appendChild(copyText);
copyText.select();
document.execCommand('copy');
document.body.removeChild(copyText);

showCopyMessage();
}

function showCopyMessage() {
const copyMessage = document.getElementById('copyMessage');
copyMessage.style.display = 'block';
copyMessage.textContent = 'Link copied to clipboard!';
setTimeout(() => {
    copyMessage.style.display = 'none';
}, 2000);
}

// Initial render
searchCharacters();