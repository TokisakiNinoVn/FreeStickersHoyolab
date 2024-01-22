const listLinkSticker = [
    {
        imgTypes: ['Genshin Impact', 'GI'],
        charactersInfor: [
            {
                land: 'Mondstadt',
                characters: [
                    {
                        name: 'Venti',
                        gender: 'male',
                        images: [
                            'https://upload-bbs.mihoyo.com/upload/2022/02/23/e56aa43cdca473369df4e2af3cb5e446_7888845532527976373.png',
                        ],
                    },
                    {
                        name: 'Mona',
                        gender: 'female',
                        images: [
                                'https://upload-bbs.mihoyo.com/upload/2022/02/23/c2a3ac5d82cca5b4efb5010fd4e39102_1236708117295664816.png',
                        ],
                    },
                ],
            },
        ],
    },

    {
        imgTypes: ['Honkai Impact 3rd', 'HI3'],
        charactersInfor: [
            {
                name: ['Elysian', 'Herrcher of Human: Ego'],
                gender: 'female',
                images: [
                    'https://upload-os-bbs.hoyolab.com/upload/2022/08/24/d1113c7758d375f16ef80dd46a644c1b_7684969619619390958.png',
                    // 'https://upload-os-bbs.hoyolab.com/upload/2022/08/24/d1113c7758d375f16ef80dd46a644c1b_7684969619619390958.png?x-oss-process=image%2Fresize%2Cs_200%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80',
                ],
            }
        ]
    },

    {
        imgTypes: ['Honkai Star Rail', 'HSR'],
        charactersInfor: [
            {
                name: 'Marth 7th',
                gender: 'female',
                images: [
                    'https://upload-os-bbs.hoyolab.com/upload/2023/12/28/4374b5b9d950a7eef1723bf8470387b6_5528635137601829273.png',
                ],
            }
        ]
    }
];
// function filterCharacters() {
//     const gameSelect = document.getElementById('gameSelect');
//     const searchInput = document.getElementById('characterSearch').value.toLowerCase();
//     const selectedGame = gameSelect.value;
//     const characterListContainer = document.getElementById('characterList');
//     characterListContainer.innerHTML = '';

//     listLinkSticker.forEach((game) => {
//         if (selectedGame === 'all' || game.imgTypes.includes(selectedGame)) {
//             game.charactersInfor.forEach((characterInfo) => {
//                 characterInfo.characters.forEach((character) => {
//                     const characterName = character.name.toLowerCase();

//                     if (characterName.includes(searchInput)) {
//                         const characterImage = document.createElement('img');
//                         characterImage.src = character.images[0];
//                         characterImage.alt = character.name;

//                         characterListContainer.appendChild(characterImage);
//                     }
//                 });
//             });
//         }
//     });
// }

// // Initial load
// filterCharacters();



// const mainRenderDiv = document.getElementById('main_rander');

// // Duyệt qua mảng listLinkStickerconst mainRenderDiv = document.getElementById('main_rander');

// if (mainRenderDiv) {
//     listLinkSticker.forEach((sticker, indexSticker) => {
//         if (sticker && sticker.charactersInfor) {
//             sticker.charactersInfor.forEach((character, indexCharacter) => {
//                 if (character && character.images) {
//                     character.images.forEach((imageUrl, indexImage) => {
//                         const imgElement = document.createElement('img');
//                         imgElement.src = imageUrl;
//                         mainRenderDiv.appendChild(imgElement);
//                     });
//                 } else {
//                     console.error(`Missing 'images' property in character[${indexCharacter}] of sticker[${indexSticker}]`);
//                 }
//             });
//         } else {
//             console.error(`Missing 'charactersInfor' property in sticker[${indexSticker}]`);
//         }
//     });
// } else {
//     console.error("Element with id 'main_rander' not found");
// }



document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
    }
});
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
    }
});