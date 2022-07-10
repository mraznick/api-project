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
    }
  image: String,
  bio: String,

})

_________
