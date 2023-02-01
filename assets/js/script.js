const IDProfile = document.getElementById('profile-id')
const elementHome = document.getElementById('home')
const elementAbout = document.getElementById('about')
const elementContact = document.getElementById('contact')
const footerYear = document.getElementById('footer-year')

footerYear.innerHTML = new Date().getFullYear()
IDProfile.innerHTML = "Taufik Hidayat"

function home() {
  elementHome.style.display = 'block'
  elementHome.style.visibility = 'visible'
  elementAbout.style.visibility = 'hidden'
  elementContact.style.visibility = 'hidden'
  elementAbout.style.display = 'none'
  elementContact.style.display = 'none'
}

function about() {
  elementHome.style.visibility = 'hidden'
  elementAbout.style.visibility = 'visible'
  elementContact.style.visibility = 'hidden'
  elementHome.style.display = 'none'
  elementAbout.style.display = 'block'
  elementContact.style.display = 'none'
}

function contact() {
  elementHome.style.visibility = 'hidden'
  elementAbout.style.visibility = 'hidden'
  elementContact.style.visibility = 'visible'
  elementHome.style.display = 'none'
  elementAbout.style.display = 'none'
  elementContact.style.display = 'block'
}

function darkMode(v) {
  if (v === 'dark') {
    document.body.style.color = '#fff'
    document.body.style.backgroundColor = '#000'
  } else {
    document.body.style.color = 'rgb(93,93,93)'
    document.body.style.backgroundColor = '#fff'
  }
}

home()