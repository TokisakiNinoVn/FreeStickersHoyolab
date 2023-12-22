// Tạo một mảng lưu trữ thông tin về Genshin Impact
const genshinImpactData = [
    {
        land: 'Mondstadt',
        characters: [
            {
                name: 'Venti',
                    images: [
                        'https://upload-bbs.mihoyo.com/upload/2022/02/23/e56aa43cdca473369df4e2af3cb5e446_7888845532527976373.png',
                        // 'https://upload-bbs.mihoyo.com/upload/2022/02/23/393cbbc78d89a687c2dfbbc06388acd9_7666845323120594128.png',
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
                        // 'https://upload-bbs.mihoyo.com/upload/2022/02/23/91d8eeafb8ae3b158eae5a9c503efc79_2994313389762429967.png',
                    ],
            },
            {
                name: 'QiQi',
                    images: [
                        'https://upload-bbs.mihoyo.com/upload/2022/02/23/713c1371800d60a8d15832da71270e60_1674879938132494608.png',
                        // 'https://upload-bbs.mihoyo.com/upload/2022/02/23/91d8eeafb8ae3b158eae5a9c503efc79_2994313389762429967.png',
                    ],
            },
        ],
    },
    {
        land: 'Inazuma',
        characters: [
            {
                name: 'Gorou',
                    images: [
                        'https://upload-bbs.mihoyo.com/upload/2022/02/23/c59fc1f1cc8b9e52b21367f5f67b444a_1831406912966687028.png',
                        '',
                    ],
            },
            {
                name: 'Itto',
                    images: [
                        'https://upload-bbs.mihoyo.com/upload/2022/02/23/95a2c01a0c3b3178819adbdbc2810a45_8935106242639110966.png',
                        '',
                    ],
            },
        ],
    },
    {
        land: 'Sumeru',
        characters: [
            {
                name: 'Faruzan',
                    images: [
                        'https://upload-os-bbs.hoyolab.com/upload/2023/05/06/e62996a81f75ee030730f981a4203c49_4301153847037532797.png',
                        '',
                    ],
            },
            {
                name: 'Mochi/Scaramouche',
                    images: [
                        'https://upload-os-bbs.hoyolab.com/upload/2023/05/06/efff6e7e2807597edd0007b843238e5b_5256042736721132640.png',
                        '',
                    ],
            },
        ],
    },
    {
        land: 'Fontaine',
        characters: [
            {
                name: 'Wrowily',
                    images: [
                        'https://upload-os-bbs.hoyolab.com/upload/2023/10/19/a5f2e089aeb0ac6a779c9f4ab3b04aef_5465554896877414784.png',
                        '',
                    ],
            },
            {
                name: 'Furina',
                    images: [
                        'https://upload-os-bbs.hoyolab.com/upload/2023/11/17/66fb73e569b6b91bd398d253749583db_8867564860876177156.png',
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
// function searchCharacters() {
//     const searchTerm = document.getElementById('searchInput').value.toLowerCase();
//     const characterContainer = document.getElementById('characterContainer');
//     characterContainer.innerHTML = '';

//     genshinImpactData.forEach(land => {
//     const matchingCharacters = land.characters.filter(character => {
//         return character.name.toLowerCase().includes(searchTerm) || land.land.toLowerCase().includes(searchTerm);
//     });

//     if (matchingCharacters.length > 0) {
//         matchingCharacters.forEach(character => {
//         displayCharacter(character);
//         });
//     }
//     });
// }


// function updateCharacterOptions() {
// const filterSelect = document.getElementById('filterSelect');
// const characterSelect = document.getElementById('characterSelect');
// const selectedLand = filterSelect.value.toLowerCase();

// // Nếu vùng đất được chọn khác với vùng đất trước đó, cập nhật danh sách nhân vật
// if (selectedLand !== currentLand) {
//     currentLand = selectedLand;
//     characterSelect.innerHTML = '<option value="">All Characters</option>'; // Đặt lại tất cả nhân vật
//     if (selectedLand) {
//     const charactersInLand = genshinImpactData.find(land => land.land.toLowerCase() === selectedLand)?.characters;
//     if (charactersInLand) {
//         charactersInLand.forEach(character => {
//         const option = document.createElement('option');
//         option.value = character.name;
//         option.textContent = character.name;
//         characterSelect.appendChild(option);
//         });
//     }
//     }
// }

// filterCharacters();
// }

// function filterCharacters() {
// const selectedLand = document.getElementById('filterSelect').value.toLowerCase();
// const selectedCharacter = document.getElementById('characterSelect').value.toLowerCase();
// const characterContainer = document.getElementById('characterContainer');
// characterContainer.innerHTML = '';

// genshinImpactData.forEach(land => {
//     if ((!selectedLand || land.land.toLowerCase() === selectedLand) &&
//         (!selectedCharacter || land.characters.some(character => character.name.toLowerCase() === selectedCharacter))) {
//     land.characters.forEach(character => {
//         displayCharacter(character);
//     });
//     }
// });
// }

// function displayCharacter(character) {
// const characterContainer = document.getElementById('characterContainer');
// const characterCard = document.createElement('div');
// characterCard.classList.add('character-card');

// const characterName = document.createElement('h3');
// characterName.textContent = character.name;

// const characterImages = document.createElement('div');
// character.images.forEach(image => {
//     const img = document.createElement('img');
//     img.src = image;
//     img.classList.add('character-image');
//     img.addEventListener('click', () => copyImageLink(image));
//     characterImages.appendChild(img);
// });

// characterCard.appendChild(characterName);
// characterCard.appendChild(characterImages);
// characterContainer.appendChild(characterCard);
// }

// function copyImageLink(image) {
// const copyText = document.createElement('input');
// copyText.value = image;
// document.body.appendChild(copyText);
// copyText.select();
// document.execCommand('copy');
// document.body.removeChild(copyText);

// showCopyMessage();
// }

// function showCopyMessage() {
// const copyMessage = document.getElementById('copyMessage');
// copyMessage.style.display = 'block';
// copyMessage.textContent = 'Link copied to clipboard!';
// setTimeout(() => {
//     copyMessage.style.display = 'none';
// }, 2000);
// }

// // Initial render
// searchCharacters();



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
    const matchingCharacters = land.characters.filter(character => {
        return (!selectedLand || land.land.toLowerCase() === selectedLand) &&
            (!selectedCharacter || character.name.toLowerCase() === selectedCharacter);
    });

    if (matchingCharacters.length > 0) {
        matchingCharacters.forEach(character => {
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