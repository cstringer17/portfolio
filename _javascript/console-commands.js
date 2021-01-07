
var newLine = String.fromCharCode(13, 10);

function getCommands() {
    var commands = {
        "-list": "Lists something like repos",
        "-help": "Lists all commands"
    };

    document.querySelector('#console-output').append("These are the available commands" + newLine);
    for (const [key, value] of Object.entries(commands)) {
        document.querySelector('#console-output').append(`${key}: ${value}` + newLine);
    }
    return
}

function list(parameters) {
    var reply = "Wrong parameter"

    switch (parameters) {
        case "repos":
            reply = getRepos();
            break;
        default:
            break;
    }

    return reply
}

function getRepos() {
    var reply = "Repos that I have made:"
    
    fetch('https://api.github.com/users/cstringer17/repos')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            console.log(element.name);
            document.querySelector('#console-output').append(element.name + newLine);
        });
    });
    return reply
}