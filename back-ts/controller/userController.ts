'use strict'

var url = 'https://jsonplaceholder.typicode.com';

function getUsers(req, res){
    /*const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if(res.ok) {
        const data = await res.json();
        console.log(data);
        return res.status(200).send({
            users: data
        })
    }*/
    
    return fetch(`${url}/users`)
        .then(response => response.json())
        .then(users => res.status(200).send({users})); 
}

function getUser(req, res){
    var user_id = 0;
    if(req.params.user) {
        user_id = req.params.user;
        return fetch(`${url}/users/${user_id}`)
          .then(response => response.json())
          .then(user => res.status(200).send({user}));
    } else {
        return res.status(404).send({
            error: 'Not Found'
        })
    }
}

function getUsersPaginated(req, res)  {
    const page = parseInt(req.params.page);
    const limit = parseInt(req.params.limit);
  
    if(page && limit) {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
    
      return fetch(`${url}/users`)
        .then(response => response.json()) 
        .then(pagination => pagination.slice(startIndex, endIndex))
        .then(usuarios => res.status(200).send({usuarios}));
    } else {
      return res.status(404).send({
          error: 'Not found'
      })
    }
}

module.exports = {
    getUsers,
    getUser,
    getUsersPaginated
}