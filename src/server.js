// const { PORT = 5000 } = process.env;
require('dotenv').config();
const app = require("./app");

const port = process.env.PORT || 5000;

// const listener = () => console.log(`Listening on Port ${PORT}!`);
// app.listen(PORT, listener);
const listener = () => console.log(`Listening on Port http://localhost:${port}!`);
app.listen(port, listener);
