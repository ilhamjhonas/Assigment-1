// console.log(text1)
// console.log(text2)
// const celciusDegree = prompt('Masukkan suhu dalam celcius')

let text1 = 'hey text1'
var text2 = 'hey text2'

var textNama = document.getElementById('text-nama')
var textUsia = document.getElementById('text-usia')
var textLokasi = document.getElementById('text-lokasi')
var textRole = document.getElementById('text-role')
var textAvailability = document.getElementById('text-availability')
var textExperience = document.getElementById('text-experience')
var textEmail = document.getElementById('text-email')
document.getElementById('input-name').value = textNama.innerText
document.getElementById('input-usia').value = textUsia.innerText
document.getElementById('input-lokasi').value = textLokasi.innerText
document.getElementById('input-role').value = textRole.innerText
document.getElementById('input-availability').value = textAvailability.innerText
document.getElementById('input-experience').value = textExperience.innerText
document.getElementById('input-email').value = textEmail.innerText

function handleSubmit(event) {
    event.preventDefault()
    var inputNama = document.getElementById('input-name')
    var inputUsia = document.getElementById('input-usia')
    var inputLokasi = document.getElementById('input-lokasi')
    var inputRole = document.getElementById('input-role')
    var inputAvailability = document.getElementById('input-availability')
    var inputExperience = document.getElementById('input-experience')
    var inputEmail = document.getElementById('input-email')

    document.getElementById('text-nama').innerText = inputNama.value
    document.getElementById('text-usia').innerText = inputUsia.value
    document.getElementById('text-lokasi').innerText = inputLokasi.value
    document.getElementById('text-role').innerText = inputRole.value
    document.getElementById('text-availability').innerText = inputAvailability.value
    document.getElementById('text-experience').innerText = inputExperience.value
    document.getElementById('text-email').innerText = inputEmail.value
    const text1 = document.getElementById('form-nama')
    const display = text1.style.display
    if (display == 'block') {
        text1.style.display = 'none'
    } else {
        text1.style.display = 'block'
    }
}

// console.log(textNama.innerText, 'ini text nama')

const buttonEdit = document.getElementById('edit-button')
buttonEdit.addEventListener('click', function () {
    const text1 = document.getElementById('form-nama')
    const display = text1.style.display
    if (display == 'block') {
        text1.style.display = 'none'
    } else {
        text1.style.display = 'block'
    }

})

