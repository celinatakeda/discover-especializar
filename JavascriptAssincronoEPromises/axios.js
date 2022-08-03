import axios from "axios";
/*
axios.get('https://api.github.com/users/celinatakeda')
  .then(res => {
    console.log(res.data);
  });
  */

  axios
    .get('https://api.github.com/users/celinatakeda')
    .then(response => axios.get(response.data.repos_url))
    .then( repos => console.log(repos.data))
    .catch(error => console.log(error))

    // Executando Promessas em Paralelo com Promise all

    Promise.all([
      axios.get('https://api.github.com/users/celinatakeda'),
      axios.get('https://api.github.com/users/celinatakeda/repos')
    ])
    .then( responses => {
      console.log(responses[0].data.login)
      console.log(responses[1].data.length)
    })
    .catch( err => console.log(err.message))
