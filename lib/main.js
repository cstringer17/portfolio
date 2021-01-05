'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});

$("#console-input").on('keyup', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    if ($("#console-input").val() !== '') {
      var command = $("#console-input").val();
      $("#console-output").append("guest@portfolio> " + $("#console-input").val() + "&#13;&#10;");
      $("#console-output").append(parseCommand(command) + "&#13;&#10;");
      $("#console-input").val("");
    }
  }
  var psconsole = $('#console-output');
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
  var psconsole = $('#console-output');
  if (psconsole.length) psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
  return reply;
};