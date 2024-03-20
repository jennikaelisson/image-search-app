const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const fs = require("fs").promises;
const { saveSchema } = require("./schemas/favorites.schema") 

app.use(express.json());
app.use(cors());

const readUser = async () => {
  try {
      const data = await fs.readFile("./favorites.json", "utf-8");
      if (!data) {
          return [];
      }
      return JSON.parse(data);
  } catch (error) {
      if (error.code === 'ENOENT') {
          console.log("Favorites file does not exist. Returning empty array.");
          return [];
      } else {
          console.error("Error reading data:", error);
          return [];
      }
  }
};

  
  const saveUser = async (newImage) => {
    try {
      const existingData = await readUser();
      
      const existingUserIndex = existingData.findIndex(item => item.userEmail === newImage.userEmail);
  
      if (existingUserIndex !== -1) {
        existingData[existingUserIndex].imageUrls.push({ imageUrl: newImage.imageUrl, imageTitle: newImage.imageTitle });
      } else {
        const newUser = {
          userEmail: newImage.userEmail,
          imageUrls: [ { 
            imageUrl: newImage.imageUrl, 
            imageTitle: newImage.imageTitle 
          }]
        };
        existingData.push(newUser);
      }
      await fs.writeFile("./favorites.json", JSON.stringify(existingData, null, 2));
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

app.get("/favorites/:emailUser", async (req, res) => {
    const images = await readUser();
    const image = images.find(i => i.userEmail == req.params.emailUser)
    res.status(200).json(image)
})

app.post("/favorites", async (req, res) => {
    const newImage = req.body;
    const { error } = saveSchema.validate(newImage, { abortEarly: false })

    if (error) {
        return res.status(400).json(error)
    }

    await saveUser(newImage);

    res.status(201).json(newImage);
});

app.listen(port, () => console.log(`Server is running on port ${port}`))
