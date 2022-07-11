# api-project
_________

## API source:
_________

[The Space Devs Astronaut List](https://ll.thespacedevs.com/2.2.0/astronaut/)

_____
## New/Chosen Filters:
___

Ordered Parameters:   
- 'name', 'status', 'nationality', 'agency.name', 'agency.spacecracft', 'agency.spacecraftImage', 'image', 'bio'  
___
## New Model:  
_________
```javascript
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
```
_________

## CRUD functions (in controllers folder):

_________

- Create function:
  - _createAstronaut_ = add new astronaut to API
  
  
- Read functions:
  - _getAstronauts_ = get request to find all astronauts

  - _getAstronaut_ = get request to find single astronaut by ID


- Update function:
  - _updateAstronaut_ = update data for single astronaut by ID  
  

- Delete function:
  - _deleteAstronaut_ = remove single astronaut from API

_______

## Routes:

_______
- index.js:
```javascript
import { Router } from "express";

import astronautsRoutes from "./astronauts.js"

const router = Router();

router.get('/', (req, res) => {
  res.send("Working");
})

router.use("/", astronautsRoutes)

export default router;
```
- astronauts.js:  
```javascript
import { Router } from "express";
import * as controllers from "../controllers/astronauts.js"

const router = Router();

router.get("/astronauts", controllers.getAstronauts)
router.get("/astronauts/:id", controllers.getAstronaut)
router.post("/astronauts", controllers.createAstronaut)
router.put("/astronauts/:id", controllers.updateAstronaut)
router.delete("/astronauts/:id", controllers.deleteAstronaut)

export default router;
```
_____
## Dependencies:
___
- Axios
- Chalk
- Cors
- Express
- Mongoose
- Morgan
- NPM
- json filetype: "module"
___  
  
_Built by Mitch Raznick, GA-NYC SEI Fellow July 2022_
____
