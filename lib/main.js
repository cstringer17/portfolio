'use strict';

var newLine = String.fromCharCode(13, 10);

document.querySelector('#console-input').addEventListener('keyup', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    if (document.querySelector('#console-input').value !== '') {
      var command = document.querySelector('#console-input').value;
      document.querySelector('#console-output').append("guest@portfolio> " + document.querySelector('#console-input').value + newLine);
      document.querySelector('#console-output').append(parseCommand(command) + newLine);
      document.querySelector('#console-input').value = "";
    }
  }
  var psconsole = document.querySelector('#console-output');
  if (psconsole.length) psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
});

function parseCommand(command) {
  console.log(command);
  var reply = "Command not found :( try -help or -list";

  var parameters = command.split(" ")[1];
  command = command.split(" ")[0];

  console.log("Command: " + command);
  switch (command) {
    case "-help":
      getCommands();
      reply = "";
      break;
    case "-list":
      reply = list(parameters);
      break;
    default:
      break;
  }
  var psconsole = document.querySelector('#console-output');
  if (psconsole.length) psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
  return reply;
};

fetch('https://api.github.com/users/cstringer17').then(function (response) {
  return response.json();
}).then(function (data) {
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