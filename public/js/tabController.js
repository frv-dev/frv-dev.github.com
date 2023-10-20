/**
 * @param {Array<string>} activeTabClasses
 * @param {Array<{id: string, buttonId: string}>} tabs
 */
function tabController(activeTabClasses, tabs) {
  tabs.map(function (tab) {
    const tabButton = document.getElementById(tab.buttonId)
    const tabContent = document.getElementById(tab.id)

    tabButton.addEventListener('click', function (event) {
      event.preventDefault()

      tabContent.classList.remove('hidden')

      activeTabClasses.map(function (activeTabClass) {
        if (!tabButton.classList.contains(activeTabClass)) {
          tabButton.classList.add(activeTabClass)
        }
      })

      tabs.filter(tabItem => tabItem.id != tab.id)
        .map(function (tabItem) {
          const tabItemButton = document.getElementById(tabItem.buttonId)
          const tabItemContent = document.getElementById(tabItem.id)

          if (!tabItemContent.classList.contains('hidden')) {
            tabItemContent.classList.add('hidden')

            activeTabClasses.map(function (activeTabClass) {
              tabItemButton.classList.remove(activeTabClass)
            })
          }
        })
    })
  })
}
