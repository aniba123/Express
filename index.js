// import express from 'express';
// import Users from './Routes/users.js'
// const app = express();
// const port = 4000;


// app.use('/users',Users)
// app.use(express.json());

// let data = [];
// let nextdata = 1;

// Add a new coffee
// app.post('/coffee', (req, res) => {
//     const { Name, price } = req.body; // Destructure Name and price
//     if (!Name || !price) {
//         return res.status(400).send({ message: 'Name and price are required!' });
//     }
//     const newcoffee = {
//         id: nextdata++, // Increment ID
//         Name,
//         price,
//     };
//     data.push(newcoffee);
//     res.status(201).send(newcoffee);
// });

// Retrieve coffee by ID
// app.get('/coffee/:id', (req, res) => {
//     const latte = data.find(c => c.id === parseInt(req.params.id));
//     if (!latte) {
//         return res.status(404).send('Page not Found');
//     }
//     res.status(200).send(latte);
// });

// Update coffee details
// app.put('/coffee/:id', (req, res) => {
//     const latte = data.find(c => c.id === parseInt(req.params.id));
//     if (!latte) {
//         return res.status(404).send('Page not Found');
//     }
//     const { Name, price } = req.body;
//     if (Name) latte.Name = Name;
//     if (price) latte.price = price;
//     res.status(200).send(latte);
// });

// // Delete a coffee
// app.delete('/coffee/:id', (req, res) => {
//     const index = data.findIndex(c => c.id === parseInt(req.params.id));
//     if (index === -1) {
//         return res.status(404).send('Page not found!');
//     }
//     data.splice(index, 1);
//     res.status(204).send(); // 204 No Content
// });

// app.listen(port, () => {
//     console.log(`Your server is listening at: http://localhost:${port}`);
// });





import express from 'express';
import bodyParser from 'body-parser';
import logger from "./logger.js";
import morgan from "morgan";
const app = express();
import userRoutes from './Routes/users.js'


const morganFormat = ":method :url :status :response-time ms";

const PORT = 5000;


app.use(
    morgan(morganFormat, {
      stream: {
        write: (message) => {
          const logObject = {
            method: message.split(" ")[0],
            url: message.split(" ")[1],
            status: message.split(" ")[2],
            responseTime: message.split(" ")[3],
          };
          logger.info(JSON.stringify(logObject));
        },
      },
    })
  );
app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('HELLO FROM HOMEPAGE'))
 
logger.info(`A request is send to make a new logger request`)
logger.warn(`A request is send to make a new logger request`)

// app.get('/', (req, res));

app.listen(PORT, () => 
    console.log(`Server running on port: http://localhost:${PORT}`));