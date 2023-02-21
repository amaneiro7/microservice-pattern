const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
// const cors = require('cors');

logErrors

const app = express();
const port = 3001;

app.use(express.json());

// const whitelist = ["http://localhost:8080", "https://myapp.co"];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin) || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('no permitido'))
//     };
//   }
// };
// app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port);

// how to create a function to fetch a api?
