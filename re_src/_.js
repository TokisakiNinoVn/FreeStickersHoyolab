










// function search() {
//     const genderFilter = document.getElementById('fill_gender').value;
//     const landFilter = document.getElementById('fill_land').value;
//     const resultContainer = document.getElementById('main_rander');
//     resultContainer.innerHTML = '';

//     linkImgGenshinImpact.forEach(land => {
//         if ((landFilter === 'all_land' || landFilter === land.land.toLowerCase()) &&
//             (genderFilter === 'all_gender' || land.male.some(character => character.name.length > 0) && genderFilter === 'male' || land.female.some(character => character.name.length > 0) && genderFilter === 'female')) {
//             [land.male, land.female].flat().forEach(character => {
//                 const characterNames = character.name.map(name => name.toLowerCase());
//                 character.images.forEach(image => {
//                     if (image) {
//                         const imgElement = document.createElement('img');
//                         imgElement.src = image;
//                         imgElement.alt = characterNames.join(', ');
//                         imgElement.classList.add('result-item');
//                         imgElement.addEventListener('click', () => copyImageLink(image));
//                         resultContainer.appendChild(imgElement);
//                     } else {
//                         // alert('No image available for this character.');
//                     }
//                 });
//             });
//         }
//     });
// }

// function copyImageLink(link) {
//     navigator.clipboard.writeText(link).then(() => {
//         alert('Image link copied to clipboard!');
//     }).catch(err => {
//         console.error('Unable to copy image link', err);
//     });
// }









// function search() {
//     const genderFilter = document.getElementById('fill_gender').value;
//     const landFilter = document.getElementById('fill_land').value;

//     renderCharacters(genderFilter, landFilter);
// }







// function search() {
//     const searchTerm = document.querySelector('.input_search').value.toLowerCase();
//     const resultContainer = document.getElementById('main_rander');
//     resultContainer.innerHTML = '';

//     linkImgGenshinImpact.forEach(land => {
//         [land.male, land.female].flat().forEach(character => {
//             const characterNames = character.name.map(name => name.toLowerCase());
//             if (characterNames.includes(searchTerm)) {
//                 character.images.forEach(image => {
//                     if (image) {
//                         const imgElement = document.createElement('img');
//                         imgElement.src = image;
//                         imgElement.alt = characterNames.join(', ');
//                         imgElement.classList.add('result-item');
//                         resultContainer.appendChild(imgElement);
//                     } else {
//                         // alert('No image available for this character.');
//                     }
//                 });
//             }
//         });
//     });
// }

// function copyImageLink(link) {
//     navigator.clipboard.writeText(link).then(() => {
//         alert('Image link copied to clipboard!');
//     }).catch(err => {
//         console.error('Unable to copy image link', err);
//     });
// }







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







// function search() {
//     const genderFilter = document.getElementById('fill_gender').value;
//     const landFilter = document.getElementById('fill_land').value;
//     const resultContainer = document.getElementById('main_rander');
//     resultContainer.innerHTML = '';

//     linkImgGenshinImpact.forEach(land => {
//         if ((landFilter === 'all_land' || landFilter === land.land.toLowerCase()) &&
//             (genderFilter === 'all_gender' || land.male.some(character => character.name.length > 0) && genderFilter === 'male' || land.female.some(character => character.name.length > 0) && genderFilter === 'female')) {
//             [land.male, land.female].flat().forEach(character => {
//                 const characterNames = character.name.map(name => name.toLowerCase());
//                 character.images.forEach(image => {
//                     if (image) {
//                         const imgElement = document.createElement('img');
//                         imgElement.src = image;
//                         imgElement.alt = characterNames.join(', ');
//                         imgElement.classList.add('result-item');
//                         imgElement.addEventListener('click', () => copyImageLink(image));
//                         resultContainer.appendChild(imgElement);
//                     } else {
//                         // alert('No image available for this character.');
//                     }
//                 });
//             });
//         }
//     });
// }


// function renderCharacters(genderFilter, landFilter) {
//     const resultContainer = document.getElementById('main_rander');
//     resultContainer.innerHTML = '';

//     linkImgGenshinImpact.forEach(land => {
//         if (landFilter === 'all_land' || landFilter === land.land.toLowerCase()) {
//             const charactersToRender = genderFilter === 'male' ? land.male : genderFilter === 'female' ? land.female : [...land.male, ...land.female];
//             charactersToRender.forEach(character => {
//                 const characterNames = character.name.map(name => name.toLowerCase());
//                 character.images.forEach(image => {
//                     if (image) {
//                         const imgElement = document.createElement('img');
//                         imgElement.src = image;
//                         imgElement.alt = characterNames.join(', ');
//                         imgElement.classList.add('result-item');
//                         imgElement.addEventListener('click', () => copyImageLink(image));
//                         resultContainer.appendChild(imgElement);
//                     } else {
//                         // alert('No image available for this character.');
//                     }
//                 });
//             });
//         }
//     });
// }