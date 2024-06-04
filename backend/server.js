const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const users = [
  {
    id: 1,
    username: 'johndoe',
    password: 'password123',
    profile: {
      photo: 'C:/Users/Likhith/Pictures/my img.jpg',
      name: 'John Doe',
      dateOfBirth: '1990-01-01',
      profession: 'Software Engineer',
    },
  },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, profile: user.profile });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
