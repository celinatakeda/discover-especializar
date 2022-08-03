/** # Async/Await

- Maneira de escrever promises
- Syntactic Sugar
**/
/**
const promessa = new Promise( function (resolve, reject) {
  return reject('error')
})

async function start() {
  try {
    const result = await promessa
    console.log(result)
  } catch (e) {
    console.error(e)
  } finally {
    console.log('rodar sempre')
  }
}

start()
**/
/*
promessa
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
  .finally( function () {
    console.log('sempre irei executar')
  })
  */

  // Async / Await com Fetch
/**
  async function start() {
    try {
      const response = await fetch('https://api.github.com/users/celinatakeda');
      const user = await response.json();
      const reposResponse = await fetch(user.repos_url);
      const repos = await reposResponse.json();
      console.log(repos);
    } catch (e) {
      console.log(e)
    }
  }
**/
  // outra forma 
/**
  async function start() {
    const url = "https://api.github.com/users/celinatakeda";
    const user = await fetch(url).then( r => r.json())
    const userRepos = await fetch(user.repos_url).then( r => r.json())
    console.log(userRepos);
  }   

  start().catch(e => console.log(e))
**/
  // Async / Await com Axios

  import axios from 'axios'

  async function fetchRepos() {
    try {
      const user = await axios.get('https://api.github.com/users/celinatakeda')
      const repos = await axios.get(user.data.repos_url)
      console.log(repos.data);
    } catch(e) {
      console.log(e)
    }
  }

  fetchRepos()

  /**
  axios 
    .get('https://api.github.com/repos/celinatakeda')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch( error => console.log(error))
**/

