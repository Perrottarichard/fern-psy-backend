# AskFern

This project is an anonymous forum for people to post questions and comments about sensitive social/psychological topics. Registration is required in order to post and comment, but anyone can view the forum.

This project serves the companion Android and web apps.

The live web app is hosted here: https://askfern.app

View the Android repository here: https://github.com/Perrottarichard/FernPsyMobile

## Core Technologies

| Technology    | For                  |
| ------------- | -------------------- |
| Express       | serve data           |
| Mongoose      | object data modeling |
| MongoDB Atlas | cloud data storage   |

## Server Features

- Run by Google Cloud Platform's App Engine
- Token authentication
- Password encryption
- User/Admin authentication
- Daily cron job to prevent gaps in user data records
