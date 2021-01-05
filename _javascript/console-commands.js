
function getCommands() {
    var commands = {
        "-list": "Lists something like repos",
        "-help": "Lists all commands"
    };
    $("#console-output").append("These are the available commands" + "&#13;&#10;");

    for (const [key, value] of Object.entries(commands)) {

        $("#console-output").append(`${key}: ${value}` + "&#13;&#10;");
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

    $(document).ready(function () {
        $.ajax({
            url: "https://api.github.com/users/cstringer17/repos"
        }).then(function (data) {
            console.log(data);
            data.forEach(element => {
                console.log(element.name);
                $("#console-output").append(element.name + "&#13;&#10;");
            });
        });
    });
    return reply
}