document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();

        const avatar = document.getElementById('useravatar');
        const name = document.getElementById('username');
        const profile = document.getElementById('userprofile');
        const repos = document.getElementById('qtd-repos');
        const followers = document.getElementById('qtd-followers');
        const following = document.getElementById('qtd-following');
        const link = document.getElementById('userlink');

        const username = document.getElementById('search').value;
        const endpoint = `https://api.github.com/users/${username}`;
        document.getElementById('search').value = "";

        fetch(endpoint)
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json) {
            const exists = json.message;
            const userAvatar = json.avatar_url;
            const userName = json.name;
            const userProfile = json.login;
            const userRepositorios = json.public_repos;
            const userFollowers = json.followers;
            const userFollowing = json.following;
            const userLink = json.html_url;

            if (exists == "Not Found") {
                throw new Error ("Usuário não encontrado");
            }

            avatar.src = userAvatar;
            name.innerHTML = userName;
            profile.innerHTML = `@${userProfile}`;
            repos.innerHTML = userRepositorios;
            followers.innerHTML = userFollowers;
            following.innerHTML = userFollowing;
            link.href = userLink;
        })
        .catch(function(erro) {
            alert("Usuário não encontrado. Verifique e tente novamente.");
        })

    })

})