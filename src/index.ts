// const express = require('express')
import express from 'express';

export const app = express();
const port = 3000;

export const HTTP_STATUSES = {
  OK_200: 200,
  CREATED_201: 201,
  NO_CONTENT_204: 204,

  BAD_REQUEST_400: 400,
  NOT_FOUND_404: 404,

}

const jsonBody = express.json();
app.use(jsonBody)

app.get('/', (req, res) => {
  // res.send({message: 'Hello world'})
  // res.json({message: 'Hello world'}) // better use method json
  // res.json(1500) // better use method json
  res.sendStatus(500) // better use method json
})

let cities = [
  {id: 1, title: 'Moscow'},
  {id: 2, title: 'London'},
  {id: 3, title: 'New York'},
  {id: 4, title: 'Astana'},
]


app.get('/address', (req, res) => {
  if (req.query.title) {
    const foundCity = cities.filter(city => city.title === req.query.title)
    console.log(foundCity)
    if (!foundCity || foundCity.length === 0) {
      res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
    }
    else {
      res.json(foundCity)
    }
  }
  else {
    res.status(HTTP_STATUSES.OK_200).json(cities)
  }

})

app.post('/address', (req,res) => {
  if (!req.body.title) {
    // res.json('title is required')
    res.status(HTTP_STATUSES.NOT_FOUND_404).json('title is required')
    return;
  }
  else {
    const newCity = {
      id: +(new Date()),
      title: req.body.title,
    }
    cities.push(newCity)
    res.json(cities);
  }
  })

app.get('/address/:id', (req, res) => {
  const findCity = cities.find(city => city.id === +req.params.id)

  if(findCity) {
    res.json(findCity)
    return;
  }
  else {
    res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
  }
})

app.put('/address/:id', (req, res) => {
  const findCity = cities.find(city => city.id === +req.params.id)

  if(findCity) {
    console.log(findCity)
    console.log(req.body.title)
    findCity.title = req.body.title
    res.json(findCity)
    return;
  }
  else {
    res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
  }
})

app.delete('/address/:id', (req, res) => {
  const findCity = cities.filter(city => city.id !== +req.params.id)

  if(findCity) {
    res.status(HTTP_STATUSES.OK_200).json(findCity)
    return;
  }
  else {
    res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
  }
})

app.delete('/__test__/data', (req, res) => {
  cities = []
  res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
})


app.listen(port, () => {
  console.log(`Example app listening ${port}`)
})
