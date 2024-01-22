// // Sử dụng GitHub API để lấy avatar
// const usernameNino = "tokisakininovn";
// const apiUrl = `https://api.github.com/users/${usernameNino}`;
// const usernameMizu = "MiyagawaMizu";
// const apiUrl_ = `https://api.github.com/users/${usernameMizu}`;

// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         const avatarUrl = data.avatar_url;
//         const avatarElement = document.querySelector(".avt_github_nino");
//         avatarElement.src = avatarUrl;
//     })
//     .catch(error => {
//         console.error('>> Error: ', error);
//     });
// setInterval(fetch, 30000);

// fetch(apiUrl_)
//     .then(response => response.json())
//     .then(data => {
//         const avatarUrl = data.avatar_url;
//         const avatarElement = document.querySelector(".avt_github_mizu");
//         avatarElement.src = avatarUrl;
//     })
//     .catch(error => {
//         console.error('>> Error: ', error);
//     });
// setInterval(fetch, 30000);






function fetchAndSetAvatar(username, avatarElementClass) {
    const apiUrl = `https://api.github.com/users/${username}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const avatarUrl = data.avatar_url;
            const avatarElement = document.querySelector(avatarElementClass);
            avatarElement.src = avatarUrl;
        })
        .catch(error => {
            console.error(`>> Error fetching avatar for ${username}:`, error);
        });
}

const usernameNino = "tokisakininovn";
const usernameMizu = "MiyagawaMizu";

// Lấy và cập nhật avatar cho Nino
fetchAndSetAvatar(usernameNino, ".avt_github_nino");

// Lấy và cập nhật avatar cho Mizu
fetchAndSetAvatar(usernameMizu, ".avt_github_mizu");

// Tự động làm lại sau mỗi 30 giây
setInterval(() => {
    fetchAndSetAvatar(usernameNino, ".avt_github_nino");
    fetchAndSetAvatar(usernameMizu, ".avt_github_mizu");
}, 30000);
