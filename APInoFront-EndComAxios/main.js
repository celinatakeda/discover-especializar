const url = "http://localhost:5500/api"

// GET
function getUsers() {
  axios.get(url)
    .then(response => {
      //console.log(response.data)
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))

}

// POST
function addNewUser(newUser) {
  axios.post(url, newUser )
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error(error))
}

// GET com parâmetros
function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(response => {
      userName.textContent = response.data.name
      userCity.textContent =response.data.city
      userID.textContent =response.data.id
      userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

// PUT
function updateUser(id, userUpdated) {
  axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

// DELETE
function deleteUser(id) {
  axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

//deleteUser(2)

const userUpdated = {
  name: "Marcelo Calvis",
  avatar: "https://picsum.photos/200/300",
  city: "Recife"
}
//updateUser(3, userUpdated)

getUsers()
getUser(1)

const newUser = {
  name: "Olivia Zars",
  avatar: "https://picsum.photos/200/300",
  city: "Rio de Janeiro"
}
//addNewUser(newUser)