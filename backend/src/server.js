const app = require("./app");

const dotenv = require("dotenv")

const PORT = process.dotenv.PORT || 3333;

dotenv.config();

app.listen(PORT, () => console.log(`server running on port ${PORT}`));