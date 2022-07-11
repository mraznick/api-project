# api-project
_________

API source:
_________

https://ll.thespacedevs.com/2.2.0/astronaut/

_________

New Model:
_________

let Astronaut = new mongoose.Astronaut({

  name: String,
  nationality: String,
  agency: {
      name: String,
      spacecraft: String,
      spacecraftImage: String
    },
  image: String,
  bio: String,

})

_________

CRUD functions (in controllers folder):

_________

* Create function:
createAstronaut = add new astronaut to API


* Read functions:
getAstronauts = get request to find all astronauts

getAstronaut = get request to find single astronaut by ID


* Update function:
updateAstronaut = update data for single astronaut by ID


* Delete function:
deleteAstronaut = remove single astronaut from API

