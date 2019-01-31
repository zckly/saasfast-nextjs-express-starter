*********************
Welcome to saasfast 🚀
*********************

Thank you for using saasfast! This file will help you get set up and running in a few minutes.


# Requirements

This application requires a MLab MongoDB environment. It's free and easy to create one! 

1. Go to www.mlab.com
2. Create an account
3. Create a sandbox (free) database
4. Click the database you created and go to the `Users` panel
5. Create a new user for the DB. Don't check the `Make Read-Only` box. Remember the username and password!
6. Look for the section that shows your DB url. Should look something like this: `mongodb://<dbuser>:<dbpassword>@ds23123.mlab.com:23123/saasfast`
7. Copy and paste your DB url into the index.js file.

You're done!


# Starting saasfast locally

Please download and install the latest version of Node if you don't have it already (https://nodejs.org/en/download/)

Open up a new terminal window and navigate to the saasfast folder
you downloaded and run:

`npm install`

This will install all the node packages for the application. You will now be able to run the application with:

`npm run dev`

Open up a new browser window and go to http://localhost:3000. Hurray we have an app!

If you have any problems installing saasfast, please read the documentation:

https://usegravity.app/docs or contact us: support@usegravity.app
