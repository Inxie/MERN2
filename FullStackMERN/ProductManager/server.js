const express = require("express");
const app = express();
const cors = require("cors");
    
    
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());
    
const AllProductsRoutes = require("./server/routes/products.routes.js");
AllProductsRoutes(app);

require("./server/config/mongoose.config.js");
require('./server/routes/products.routes');
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));