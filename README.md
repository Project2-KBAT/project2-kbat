# KBAT Entertainment Finder

Have you ever had trouble finding a TV show or movie to watch or just don't have the time to go through the reviews for everything? Here lies our repository dedicated to helping you find something right now :)

Check it out the App on Heroku:
[![Heroku Link](https://thawing-plains-43721.herokuapp.com/)]  
<br>

# Tech Stacks Used In Our Application
-ReactJS (Front End)  
-HTML,CSS, and Javascript (Front End)  
-Bootstrap (Front End)  
-Flask (Backend)  
-SQLAlchemy (Backend)  

# Libraries Imported for Project
-os
-json
-sys
-flask
-requests
-flask_login
-werkzeug.security
-flask_sqlalchemy
-dotenv




# Mockups

![Welcome Page Mockup](https://raw.githubusercontent.com/adansinghani1/Entertainment-Finder/master/imgs/welcome-page.png)
![Main Page Mockup](https://raw.githubusercontent.com/adansinghani1/Entertainment-Finder/master/imgs/main-page.png)

# Website Overview
![Welcome Page](https://raw.githubusercontent.com/csc4350-f21-KBAT/project2/Kash/imgs/Welcome%20Page.png)  
![Login Page](https://raw.githubusercontent.com/csc4350-f21-KBAT/project2/Kash/imgs/Sign%20In.png)  
![Wrong Combonation Error](https://raw.githubusercontent.com/csc4350-f21-KBAT/project2/Kash/imgs/wrong_combo_error.gif)  
![Sign Up Page](https://raw.githubusercontent.com/csc4350-f21-KBAT/project2/Kash/imgs/Sign%20Up.png)  
![404 Error](https://raw.githubusercontent.com/csc4350-f21-KBAT/project2/Kash/imgs/404_error.gif)
![Main Page](https://raw.githubusercontent.com/csc4350-f21-KBAT/project2/Kash/imgs/mainpage.jpg)  
![Popular Movies Page](https://raw.githubusercontent.com/csc4350-f21-KBAT/project2/Kash/imgs/mainpage.jpg)  
![Top Rated Movies Page](https://raw.githubusercontent.com/csc4350-f21-KBAT/project2/Kash/imgs/Top%20Rated%20Movies.png)  
![Movie Overview Page](https://raw.githubusercontent.com/csc4350-f21-KBAT/project2/Kash/imgs/movie_overview.png)  
![Search No Results Page](https://raw.githubusercontent.com/csc4350-f21-KBAT/project2/Kash/imgs/query_mismatch.png)  
![Search Movies Page](https://raw.githubusercontent.com/csc4350-f21-KBAT/project2/Kash/imgs/search_movies.png)   

# Navigating through MovieDB API

Handle API Requests using the following:
```https://api.themoviedb.org/3/movie/550?api_key=<API_KEY>```  
Use the API_KEY as a environment variable so you are able to access the API's functions and abilities to gather information from it.  
To generate an API you need to:  
```
1. Create an account from https://www.themoviedb.org/
2. Once you verify your account you should be able to login to your account
3. Go into Settings >> API
4. There should lie your API Key which you can store in the .env file
```

# Instructions

Create a .env file and have the following:
```
API_KEY = <API_KEY>
API_TOKEN = <API_TOKEN>
DATABASE_URL = <Insert Database URL starting with "postgres://">
```

A once Flask developed app has gone rogue and reuped into a React App :) . We had to convert the code from HTML to JSX functions. The issue was the functions that we embedded into the app from our python files had to be made in our JavaScript file. This was done with the help of the Professors code, but we had to add a few tingz. Those are:

# Features

<li>Welcome Screen</li>  
<li>Login and Sign Up feature with Email</li>  
<li>Search Function To Look Up Movies</li>  
<li>Popular Movies</li>  
<li>Top Rated Movies</li>  
<li>Comment Feature</li>  
<li>Rating Feature</li>  

# Features still in development

<li>User Profile</li>  
<li>User Database of Favorite Movies</li>
<li>Backdrop Background</li>
<li>Setting for User</li>

Project 2 Checklist:  
[X] - Branching: Gon be working on "<user>" branch and may work by using each spec as teh branch name. Final is pushed to main branch    

[X] - Linting: Download Lint and format my code with Black. Also download ESLint and used AirBNB settings for React formatting. Used the following link to install it: https://marcobelo.medium.com/setting-up-python-black-on-visual-studio-code-5318eba4cd00 and it is now up and running in the settings of the remote server. Even though I used the command to install Black, I ended up having to use "python -m pip install -U black" instead of just "pip install black" or "pip install -U black"  

[X] - User Input: User Should Give User Input and find the artist  

[X] - Personalization: Had two members working on front end (Binh Le and Akash Dansinghani) and two members working on backend of application (Kenny Wu and Taariq Glean). We worked together to make sure every thing seemed seemless and the format of our backend and frontend alligned.  

[X] - Login Screen: Username and Password for my site which will be passed into the data base and check if user's account exists. If not, they will have to create an account.  

[X] - API: We used TheMovieDB API for our requests  

## Running Locally

Make sure you have Python 3.8.5 [installed locally](https://docs.python-guide.org/starting/installation/). To push to Heroku, you'll need to install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), as well as [Postgres](https://devcenter.heroku.com/articles/heroku-postgresql#local-setup).

```sh
$ git clone https://github.com/csc4350-f21-KBAT/project2
$ cd project2

$ pip install -r requirements.txt

$ createdb User
$ createdb Rating
$ createdb Cimmnet

$ python app.py migrate
$ python app.py collectstatic

$ heroku local
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Establish Virtual Environment (if applicable)

```sh
$ cd /<any_folder>/project2/bin
$ sudo pip install virtualenv
$ source catalog_venv/bin/activate
```

## Deploying to Heroku

```sh
1. Create a Heroku app: `heroku create --buildpack heroku/python`
2. Add nodejs buildpack: `heroku buildpacks:add --index 1 heroku/nodejs`
3. Push to Heroku: `git push heroku main`

$ heroku run python app.py migrate
$ heroku open
```

or

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Logging in for Testing (Or Create an Account)

username: user@gmail.com
password: test

## Documentation

For more information about using Python on Heroku, see these Dev Center articles:

- [Python on Heroku](https://devcenter.heroku.com/categories/python)

## Prolems with the Program :/

1.Since there are more than one way to skin a cat, the same thing applies to React. I was working on the front end along with my peer and I had to restructure my code because I ended up creating components for everything including the login page and sign up page which you can see in my components which I ultimately

2.I was working with different branches in Heroku (I had a origin, remote, and Heroku branch) but that was more of a Git issue and I have a bad habit of using whatever push command I remember so it created different types of repos in one app (I'm still a Git noob). I solved this by using the command git remote rm <app-name>.

3.I think just learning React more and dealing with componenets and communicating with the database and flask was something I had to figure out. Once I got the hang of the API I was using, it was not to difficult to work with it.

Error Logs:

```
spotipy 2.19.0 requires urllib3>=1.26.0, but you'll have urllib3 1.24.1 which is incompatible.
error code=H10 desc="App crashed" method=GET path="/" host
```

I used "heroku logs --dyno=web --app=project2" and this is where I had to either redo and trouble shoot everything on my requirements.txt or Procfile file :(

Solved by using this website: https://dev.to/lawrence_eagles/causes-of-heroku-h10-app-crashed-error-and-how-to-solve-them-3jnl

Not proficent with databases but will reup on the next project :(

# Flask and `create-react-app`

## Requirements
1. `npm install`
2. `pip install -r requirements.txt`

## Run Application
*** Make sure you added env variables otherwise, you will not be able to connect the database
1. Run command in terminal (in your project directory): `npm run build`. This will update anything related to your `App.js` file (so `public/index.html`, any CSS you're pulling in, etc).
2. Run command in terminal (in your project directory): `python3 app.py`
3. Preview web page in browser 'localhost:8080/' (or whichever port you're using)

