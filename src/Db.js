const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Memories")
.then( ()=> console.log(`Server is Ok`))
.catch( (err)=> console.log(err,`Server is Out of Order`))