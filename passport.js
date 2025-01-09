const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const app = express();

// Hardcoded user data (this is where you'd usually interact with a database)
const users = [
  { id: 1, username: 'testuser', password: 'testuser' },
  { id: 2, username: 'test', password: 'pass' }
];

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse form data
app.use(session({
  secret: 'your-secret-key', // Secret key for session
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport.js setup
passport.use(new LocalStrategy(
  function(username, password, done) {
    // Find the user in our "database" (in-memory for this example)
    const user = users.find(u => u.username === username && u.password === password);    
    if (user) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Incorrect credentials.' });
    }
  }
));

// Serialize user data into session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// Deserialize user data from session
passport.deserializeUser(function(id, done) {
  const user = users.find(u => u.id === id);
  done(null, user);
});

// Routes
app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`<h1>Welcome, ${req.user.username}!</h1><a href='/logout'>Logout</a>`);
  } else {
    res.send(`<h1>Home</h1><a href='/login'>Login</a>`);
  }
});

app.get('/login', (req, res) => {
  res.send('<h1>Login</h1><form action="/login" method="post"><label>Username:</label><input type="text" name="username"><br><label>Password:</label><input type="password" name="password"><br><button type="submit">Login</button></form>');
});

app.post('/login', 
  passport.authenticate('local', { 
    successRedirect: '/', 
    failureRedirect: '/login' 
  })
);

// app.post("/login",
//     passport.authenticate("local"),
//     function(req,res){
//         res.json(req.user)
//     }
// )

app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect('/');
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
