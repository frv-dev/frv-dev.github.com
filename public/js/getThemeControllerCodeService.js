/**
 * @param {string} id
 */
function getThemeControllerCodeService(id) {
  fetch('./../js/themeController.js')
    .then(content => content.text())
    .then(content => document.getElementById(id).innerText = content)
}
