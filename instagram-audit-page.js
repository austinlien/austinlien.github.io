(function () {
  "use strict";

  var codeElement = document.getElementById("audit-code-preview");
  var copyButton = document.getElementById("copy-audit-code");
  var feedback = document.getElementById("copy-audit-feedback");
  var sourceUrl = "tools/instagram-following-audit.js";
  var sourceCode = "";

  if (!codeElement || !copyButton || !feedback) {
    return;
  }

  function setFeedback(message, isError) {
    feedback.textContent = message;
    feedback.classList.toggle("is-error", Boolean(isError));
  }

  function fallbackCopy(value) {
    var input = document.createElement("textarea");
    input.value = value;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    var copied = document.execCommand("copy");
    input.remove();
    return copied;
  }

  fetch(sourceUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Unable to load scanner source.");
      }
      return response.text();
    })
    .then(function (code) {
      sourceCode = code;
      codeElement.textContent = code;
    })
    .catch(function () {
      codeElement.textContent = "Source preview unavailable. Open the source link to view the script.";
      setFeedback("The scanner source could not be loaded.", true);
    });

  copyButton.addEventListener("click", function () {
    if (!sourceCode) {
      setFeedback("The scanner source has not loaded yet.", true);
      return;
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(sourceCode).then(
        function () {
          setFeedback("Scanner code copied. Paste it into the Instagram console.", false);
        },
        function () {
          setFeedback("Copy failed. Use View source and copy the script manually.", true);
        }
      );
      return;
    }

    if (fallbackCopy(sourceCode)) {
      setFeedback("Scanner code copied. Paste it into the Instagram console.", false);
      return;
    }

    setFeedback("Copy failed. Use View source and copy the script manually.", true);
  });
})();
