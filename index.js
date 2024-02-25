const express = require('express')
// import express from 'express' // ES6--- both syntax are same

require('dotenv').config()

const app = express()
const port = 3000

const github_bio = {

    "login": "NothingAvailable",
    "id": 58807588,
    "node_id": "MDQ6VXNlcjU4ODA3NTg4",
    "avatar_url": "https://avatars.githubusercontent.com/u/58807588?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/NothingAvailable",
    "html_url": "https://github.com/NothingAvailable",
    "followers_url": "https://api.github.com/users/NothingAvailable/followers",
    "following_url": "https://api.github.com/users/NothingAvailable/following{/other_user}",
    "gists_url": "https://api.github.com/users/NothingAvailable/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/NothingAvailable/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/NothingAvailable/subscriptions",
    "organizations_url": "https://api.github.com/users/NothingAvailable/orgs",
    "repos_url": "https://api.github.com/users/NothingAvailable/repos",
    "events_url": "https://api.github.com/users/NothingAvailable/events{/privacy}",
    "received_events_url": "https://api.github.com/users/NothingAvailable/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2019-12-12T08:47:09Z",
    "updated_at": "2021-02-11T08:29:25Z"

}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/andar', (req, res) => {
    res.send('Andar se aya hua')
})

app.get('/bahar', (req, res) => {
    res.send('<h1> bahar jana h</h1>')
});

app.get('/github_bio', (req, res) => {
    res.json(github_bio)
})  

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})