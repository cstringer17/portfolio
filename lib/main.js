'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});

$("#console-input").on('keyup', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    $("#console-output").append($("#console-input").val() + "&#13;&#10;");
    $("#console-input").val("src&#92;portfolio>");

    var psconsole = $('#console-output');
    if (psconsole.length) psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
  }
});