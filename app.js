const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (_req, res) => {
//     res.send('Hello World!');
// }
// );

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/templates/views"));
hbs.registerPartials(path.join(__dirname, "/templates/partials"));

app.get("/", (req, res) => {  
    res.render("index", {    
        title: "Home",    
        name: "Simon Owusu",  
    });
});
app.get("/about", (req, res) => {  
    res.render("about", {    
        title: "About",    
        name: "Simon Owusu",  
    });
});

app.listen(3010, () => {
  console.log('Server is running on port 3010');
});

