function getTheme() {
    const actualHour = (new Date()).getHours()

    return localStorage.getItem('theme') ?? ((actualHour < 6 || actualHour > 18) ? 'dark' : 'light')
}

function changeStorageTheme() {
    localStorage.setItem('theme', getTheme() === 'dark' ? 'light' : 'dark')
}

function setTheme() {
    var htmlTag = document.getElementsByTagName('html')[0]

    if (getTheme() === 'light') {
        htmlTag.classList.remove('dark')
    } else {
        htmlTag.classList.add('dark')
    }
}

function switchTheme(needChangeThemeButton = false) {
    changeStorageTheme()
    setTheme()

    if (needChangeThemeButton) {
        changeThemeButton()
    }
}

function changeThemeButton() {
    var themeButton = document.getElementById('themeButton')

    if (getTheme() === 'light') {
        themeButton.classList.remove('fa-moon')
        themeButton.classList.add('fa-sun')
    } else {
        themeButton.classList.remove('fa-sun')
        themeButton.classList.add('fa-moon')
    }
}

(function () {
    setTheme()
    changeThemeButton()
})()
