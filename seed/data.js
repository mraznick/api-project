import db from "../db/connection.js";
import Astronaut from "../models/astronaut.js";
import axios from "axios";

const insertData = async () => {
  try {

    await db.dropDatabase();

    const response = await axios.get('https://ll.thespacedevs.com/2.2.0/astronaut/?format=json&limit=100&offset=100')

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
    // console.log(astroData)
    await Astronaut.insertMany(astroData)

    db.close();
  } catch (error) {
    console.log(error)
  }

}

insertData();