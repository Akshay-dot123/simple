# Passport js Working:-

Ans:- There is function named isAuthenticated() in passport library that checks user is authenticate or not. It uses strategy like local for local authentication(password+username),fb or google strategy for authentication.
Serialization: is used to convert the user object into a unique identifier (e.g., user ID). This identifier is stored in the session (typically as req.session.passport.user).
Deserialization: is used to retrieve the full user object from the unique identifier when needed (e.g., to populate req.user).

# Web Sockets (WS) Working:-
In Non WS connection closes after every request and response. But in WS we dont close connection unless we specify.