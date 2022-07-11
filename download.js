import axios from "axios"
import mongoose from "mongoose"
import connection from "./db/connection.js"
import Astronaut from "./models/astronaut.js"


const getAstro = async () => {

  try {

    const response = await axios.get('https://ll.thespacedevs.com/2.2.0/astronaut/?format=json&limit=100&offset=100')
    console.log(response.data.results)

    // store a variable astroData with filtered response;
    // map through response;
    // return an object that has info for my model

    let astroData = response.data.results.map(element => {

      return {
        name: element.name,
        nationality: element.nationality,
        agency: {
          agencyName: element.agency.name,
          spacecraft: element.agency.spacecraft,
          spacecraftImage: element.agency.image_url,
        },
        image: element.profile_image,
        bio: element.bio,
      }

    })
    console.log(astroData)
    await Astronaut.deleteMany({})
    await Astronaut.insertMany({ astroData })
    mongoose.disconnect()

  } catch (error) {
    console.log(error.message);
  }

}
getAstro();


