import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Mock database
let users = [
  {
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com',
  },
  {
    first_name: 'Alice',
    last_name: 'Smith',
    email: 'alicesmith@example.com',
  },
  {
    first_name: 'Alice',
    last_name: 'Smith',
    email: 'alicesmith@example.com',
  },
];

// Getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users);
})


// Adding users to our mock database

router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`${user.first_name} has been added to the Database`);
})



router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id)

  res.send(foundUser)
});

// delete
router.delete('/:id', (req, res) => {
  let { id } = req.params;

  users = users.filter((user) => user.id !== id)

  res.send(`${id} deleted successfully from database`);
});


// update

router.patch('/:id', (req, res) => {
  const { id } = req.params;

  const { first_name, last_name, email} = req.body;

  const user = users.find((user) => user.id === id)

  if(first_name) user.first_name = first_name;
  if(last_name) user.last_name = last_name;
  if(email) user.email = email;

  res.send(`User with the ${id} has been updated`)

});
export default router