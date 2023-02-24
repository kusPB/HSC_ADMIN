import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const client_path = __dirname + '/clientbuild/';

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

var corsOptions = {
    origin: "http://localhost:5000"
};

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req,res) {
  res.sendFile(client_path + "index.html");
});


app.use(cookieParser());
app.use(express.json());
app.use(router);


app.use(express.static('storage'));
app.use('/storage', express.static('storage'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './clientbuild', 'index.html'));
});

https.createServer(
    {
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("cert.pem"),
    }
    ,app).listen(5000, () => console.log('Server running at port 5000'));


// app.listen(5000, ()=> console.log('Server running at port 5000'));