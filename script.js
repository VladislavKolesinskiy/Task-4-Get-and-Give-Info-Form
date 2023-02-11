const id = document.querySelector('input.id').value
const age = document.querySelector('input.age').value
const gender = document.querySelector('input.gender').value
const buttonImp = document.querySelector('.importBtn')
const buttonExp = document.querySelector('.exportBtn')
const dataUsers = document.querySelector('.data')
const url = "http://localhost:3000/USERS"

const getData = async (url) => {
    const res = await fetch(url)
    const data = res.json()
    return data
}
const postData = async (url, object) => {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(object),
        headers: { 'Content-type': 'application/json; charset=UTF-8'},
    })
    return res.json()
}
buttonExp.addEventListener('click', async (i) => {
    i.preventDefault();
    const name = document.querySelector('input.name').value
    const id = document.querySelector('input.id').value
    const age = document.querySelector('input.age').value
    const gender = document.querySelector('input.gender').value
    let object = {
        "id": id,
        "name": name,
        "age": age,
        "gender": gender
    }
await postData(url, object)
})

buttonImp.addEventListener('click', async (i) => {
    i.preventDefault();
    const data = await getData(url)
    data.forEach((el) => {
    dataUsers.insertAdjacentHTML(`beforeend`, `
            <div class="userInfo">
                <p class="id">ID: ${el.id}</p>
                <p class="name">Name: ${el.name}</p>
                <p class="age">Age: ${el.age}</p>
                <p class="gender">Gender: ${el.gender}</p>
            </div>
        `)
    })
})