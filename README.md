# WiKi API (RESTFULL API)

## Example document

```
{
    "_id" : ObjectId("5c139771d79ac8eac11e754a"),
    "title" : "API",
    "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
}


{
    "_id" : ObjectId("5c1398aad79ac8eac11e7561"),
    "title" : "Bootstrap",
    "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
}


{
    "_id" : ObjectId("5c1398ecd79ac8eac11e7567"),
    "title" : "DOM",
    "content" : "The Document Object Model is like an API for interacting with our HTML"
}
```

## to run server

```
node app.js
```

- This Wiki-API hosted in heroku with mondoDB

## Use this Wiki-API

- GET all Article
    - https://kavishkamk-wiki-api.herokuapp.com/article
- GET spesific Article
    - https://kavishkamk-wiki-api.herokuapp.com/article/title
    - 'title' shoud be article title
- POST new Article
    - https://kavishkamk-wiki-api.herokuapp.com/article
    - should contain following paramiters with POST request
        - title=""
        - content=""
- PUT Article
    - https://kavishkamk-wiki-api.herokuapp.com/article
    - should contain following paramiters with PUT request
        - title=""
        - content=""
- PATCH Article
    - https://kavishkamk-wiki-api.herokuapp.com/article/title
    - have to contain following paramiters if they want to update with PUT request
        - title=""
        - content=""
- DELETE all Article
    - https://kavishkamk-wiki-api.herokuapp.com/article
- DELETE spesific Article
    - https://kavishkamk-wiki-api.herokuapp.com/article/title
    - 'title' mean the artical title that we want to delete
