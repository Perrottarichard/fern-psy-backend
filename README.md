# Fern's Counseling Forum Demo (client)

This demo project is meant to be an anonymous forum for people to post questions and comments about sensitive social/psychological topics.  Registration is required in order to post and comment, but anyone can view the forum. 

This project is the server side of a demo, MERN stack web app.

The complete project is hosted at:
https://fern-counseling.herokuapp.com

View the client repository here: https://github.com/Perrottarichard/fern-psy

Translation to Thai language credit Nilubon Sukawanich.

## Core Technologies
| Technology  | For |
| ------------| -------|
| React | UI building|
| Redux | state management |
| React Redux | React bindings for Redux |
| React Router | routing |
| Axios | data fetching/sending | 
| Reactstrap/fontAwesome | styling/icons |

## Client Features
### User
* Token authentication / local storage caching
* Post to forum anonymously, or send private message to the counselor
* comment on posts
* view only your posts
* flag inappropriate commments for admin review
* "heart" anonymous posts to show support

### Admin
* view all users' contact information
* approve and respond to forum posts
* respond to private messages
* edit previously posted forum responses
* delete flagged comments
