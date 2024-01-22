// Sử dụng GitHub API để lấy avatar
const usernameNino = "tokisakininovn";
const apiUrl = `https://api.github.com/users/${usernameNino}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const avatarUrl = data.avatar_url;
        const avatarElement = document.querySelector(".avt_github_nino");
        avatarElement.src = avatarUrl;
    })
    .catch(error => {
        console.error('>> Error: ', error);
    });
setInterval(fetch, 30000);
const usernameMizu = "MiyagawaMizu";
const apiUrl_ = `https://api.github.com/users/${usernameMizu}`;

fetch(apiUrl_)
    .then(response => response.json())
    .then(data => {
        const avatarUrl = data.avatar_url;
        const avatarElement = document.querySelector(".avt_github_mizu");
        avatarElement.src = avatarUrl;
    })
    .catch(error => {
        console.error('>> Error: ', error);
    });
setInterval(fetch, 30000);