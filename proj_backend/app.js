require("dotenv").config(); // It load the .env file and load any ENV variable in that file
// If we are going to host this to Global Server (Hosting) and run there we'd require ENV
// vriable to connect it with Global Server instead of running over localhost also ////developes don't show their port to us instead they just provide us the variable. So, if they ever need to change the port, they can do so without interrupting the process.
const mongoose = require("mongoose");
const express = require("express"); // 'express' is responsible for listening
const app = express(); // now we can use express using 'app' variable anywhere we want

// Following are the most common Middlewares - When a request from client is made, Middleware (is a function) handles it by excecuting its body over it, and if it succeeds then it passes the response or passes to the next Middleware
const bodyParser = require("body-parser"); // 'body-parser' is responsible for parsing the body of the request body into a string and returning it as a string. It gets the data from the frontend and then we can use it using parser.email, parser.password, etc.
const cookieParser = require("cookie-parser"); // 'cookie-parser' is responsible for parsing the cookie and returning it as a string, so that we can set/get something in/from the cookie.
const cors = require("cors"); // 'cors' is responsible for cross-origin resource sharing; As our frontend & backend are two different codebases to allow them work together we have to enable 'cors' in our server that is in our backend. That will allow our frontend to make requests to the backend

// My Routes (Importing)
const authRoutes = require("./routes/auth.routes");
const studentRoutes = require("./routes/student.routes");
const manuscriptRoutes = require("./routes/manuscript.routes");
const supervisorRoutes = require("./routes/supervisor.routes");
const ideaRoutes = require("./routes/ideas.routes");
const requestRoutes = require("./routes/request.routes");
const adminRoutes = require("./routes/admin.routes");
const categoryRoutes = require("./routes/category.routes");

// DB Connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    // In 'process.env.PORT', At 'process' it attach all the env avriables,
    // '.env' is the file, and 'DATABASE' is the name of the string
    console.log("CONNECTED TO MongoDB!");
  })
  .catch(() => {
    console.log("ERROR CONNECTING TO MongoDB!");
    process.exit();
  });

// const MONGODB_URI =
//   "mongodb+srv://bilal:123@cluster0.erpmtps.mongodb.net/VouchPenmanship?retryWrites=true&w=majority";
// // if (mongoose.connection.readyState !== 1) {
// //   // Create a new connection
// //   mongoose
// //     .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => {
// //       console.log("Connected to MongoDB");
// //     });
// // }

// mongoose.disconnect(function () {
//   // Connection closed, now establish a new connection
//   // Create a new connection
//   mongoose
//     .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//       console.log("Connected to MongoDB");
//     });
// });

// Middlewares
app.use(bodyParser.json()); // using bodyParser Middleware
app.use(cookieParser()); // using cookieParser Middleware
app.use(cors()); // using cors Middleware

// My Routes
app.use("/api", authRoutes); // This is how we use Middlewares; 1st parameter is the prefix to the API endpoint, and 2nd parameter is the path to the controller route
app.use("/api", studentRoutes);
app.use("/api", manuscriptRoutes);
app.use("/api", supervisorRoutes);
app.use("/api", ideaRoutes);
app.use("/api", requestRoutes);
app.use("/api", categoryRoutes);
app.use("/api", adminRoutes);

// Port
const port = process.env.PORT || 8000; // to not expose their database connection string & port, we use 'process.env.PORT'

// Starting a Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log("Press Ctrl+C to quit.");
});
