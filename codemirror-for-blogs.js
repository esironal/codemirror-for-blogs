(function(CM) {

  if (!CM) { return; }
  
  var codeElements = document.getElementsByTagName('code'),
      tempTextArea = document.createElement('textarea'),
      newTextArea, editor, mode, theme;

  CM.modeURL = '/codemirror/mode/%N/%N.js';

  // codeElements is a NodeList, so its length
  // will decrement automatically as its
  // contents are replaced with textareas
  while (codeElements.length) {
    newTextArea = tempTextArea.cloneNode();
    newTextArea.value = codeElements[0].innerText;

    mode = codeElements[0].getAttribute('data-lang') || 'clike';
    theme = codeElements[0].getAttribute('data-theme') || 'default';

    codeElements[0].parentNode.replaceChild(newTextArea, codeElements[0]);

    editor = CM.fromTextArea(newTextArea, { lineNumbers: true });
    editor.setOption('theme', theme);
    editor.setOption('mode', mode);

    CM.autoLoadMode(editor, mode)
  }
})(CodeMirror);
