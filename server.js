const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5500;

app.use(cors()); // add this line to enable CORS
app.use(bodyParser.json());

app.post('/appendData', (req, res) => {
  const data = req.body;

  fs.readFile(path.join(__dirname, './zelda-timeline.json'), (err, fileData) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else {
      const existingData = JSON.parse(fileData);
      const newDataIndex = existingData.length;

      existingData[newDataIndex] = data;

      fs.writeFile(path.join(__dirname, './zelda-timeline.json'), JSON.stringify(existingData), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal server error');
        } else {
          res.status(200).json(existingData);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
