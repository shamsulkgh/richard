# Purpose of this repo

Although I did build a simple [fetch-weather website](https://eloquent-darwin-c9b4aa.netlify.app/) (using [this api](https://weatherstack.com/)) by following [this youtube tutorial](https://youtu.be/m2Dr4L_Ab14), _the main aim of this repo was to learn how to hide api keys with netlify functions_. Mission success!

# Dependencies

- axios (used inside the netlify function to make a weather api request)

# Run-through of main coding steps

- create a `netlify.toml` file. In the build context, specify a functions directory (otherwise you cannot create a netlify function...it won't know where to put it!). In the same context, specify a publish directory (otherwise you cannot run your html page on the netlify server)
  - in my case, my `netlify.toml` file looked like this:

```
[build]
    functions = "functions"
    publish = "src"
```

- Create an index.html file in a 'src' folder. (This is where we will later write javascript to make fetch calls to our netlify function)
- Create a netlify function via: `netlify function-create --name <my-function-name>` (to use this command you should already have the netlify-cli installed via `npm i -g netlify-cli`)
  - During the function-creation process, feel free to choose a template, like the 'hello world' template!
  - Afterwards, a directory to hold functions will be created. Inside, there will be your netlify function! In my case, it is called `fetch-weather.js` because I ran `netlify function-create --name fetch-weather`
  - to test your netlify function:
    - run the netlify dev server via `netlify dev`
    - in the frontend javascript, make a fetch request to the netlify function. The endpoint will have the following pattern: `/.netlify/functions/<my-function-name>`. If you chose the hello world template, then your fetch call should respond with a 'hello world' message!
- Edit the netlify function code so that it uses axios to make a call to the weather api and returns that data. Now, your netlify function behaves like the weather api!
- In preparation you hide your api key, make sure to gitignore unnecessary or sensitive files!
  - .gitignore:

```
node_modules/
.env
```

- Hide the api key!
  - Create a .env file and store the api secret like this `API_SECRET=probablyABunchOfNumbersAndLetters`
  - In fetch-weather.js, provide `process.env.API_SECRET` to the axios call
- Create a simple frontend so that users can play with your deployed site by entering a location and getting back weather data!
- Deploy the site with Netlify!  The default settings will work, but at one point, don't forget to click 'advanced' so that you can enter the environment variable!

# Lessons learned

- I DO NOT need to install dotenv, even when I use a .env file and use `process.env.API_SECRET` in my netlify function. Netlify apparently takes care of that for me!
- I must _remember to restart my netlify server_ via `netlify dev` whenever I make certain changes to my code, like switching out the hard coded api secret for `process.env.API_SECRET`

# Accomplishments
- clean code
  - I like how my frontend javascript is broken down into many functions, each with their own clear purpose. This makes the code very easy to read.

# Final thoughts

- I want to learn Netlify better
  - In the past, I've used Heroku, but I really dislike how LONG it takes to load up a website deployed via HEROKU!
    So far, Netlify is proving to be much more user friendly and fast!
- I'm glad I finally learned how to hide api keys....this was long overdue!

# Next steps
- move to javascript and css into separate files
- learn how to use Netlify to deploy full-stack projects
