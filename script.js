//About Me Event Handlers
let aboutMeEd = document.getElementById('educationLink')
let aboutMeSkz = document.getElementById('skillsLink')
let aboutMeEx = document.getElementById('experienceLink')
let aboutLinks = document.getElementsByClassName('aboutLinks')
let tabContents = document.getElementsByClassName('tabContent')
//let tabName = document.getElementById('tabName')

//About Me Functions
function openTab() {
    for (aboutLink of aboutLinks) {
        aboutLink.classList.remove('activateLink')
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('activateTab')
    }
    event.currentTarget.classList.add('activateLink')
    //document.getElementById('tabName').classList.add('activateTab')
    /*if (tabName === education) {
        classList.add('activateTab')
    }*/
}


//About Me Event Targets
aboutMeEd.addEventListener('click', () => {
    openTab()
    document.getElementById('educationTab').classList.add('activateTab')
})

aboutMeSkz.addEventListener('click', () => {
    openTab()
    document.getElementById('skillsTab').classList.add('activateTab')
})

aboutMeEx.addEventListener('click', () => {
    openTab()
    document.getElementById('experienceTab').classList.add('activateTab')
})

/*aboutLinks.addEventListener('click', () => {

})*/

//Media Query Event Handlers
let closeMenu = document.getElementById('closeMenu')
let openMenu = document.getElementById('openMenu')
let headerMenu = document.getElementById('headerMenu')


//Media Query Event Targets
closeMenu.addEventListener('click', () => {
    headerMenu.style.right = '-230px'
})

openMenu.addEventListener('click', () => {
    headerMenu.style.right = '0'
})

//Contact Form Event Handlers
const form = document.forms['submit-to-google-sheet']
const contactMessage = document.getElementById('contactMessage')

//Contact Form Event Targets
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            contactMessage.innerHTML = "Message sent successfully"
            setTimeout(() => {
                contactMessage.innerHTML = ""
            }, 5000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
