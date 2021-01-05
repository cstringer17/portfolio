"use strict";

var github_profile_data;

var github_profile = document.getElementById('github-profile');

$(document).ready(function () {
    $.ajax({
        url: "https://api.github.com/users/cstringer17"
    }).then(function (data) {
        console.log(data);
        document.getElementById("github-profile-icon").src = data.avatar_url;
        document.getElementById("github-profile-icon").style.height = "200px";
        document.getElementById("github-profile-icon").style.width = "200px";
        document.getElementById("github-profile-name").innerHTML = data.name;
        document.getElementById("github-profile-username").innerHTML = "@" + data.login;
        document.getElementById("github-profile-description").innerHTML = data.bio;
        document.getElementById("github-profile-company").innerHTML = data.company;
        document.getElementById("github-profile-location").innerHTML = data.location;
        document.getElementById("github-profile-repos").innerHTML = "Public Repos: " + data.public_repos;
    });
});