# Purpose of this repo

Although I did build a simple fetch-weather website using [this api](https://weatherstack.com/) and following [this youtube tutorial](https://youtu.be/m2Dr4L_Ab14), _the main aim of this repo was to learn how to hide api keys with netlify functions_. Mission success!

# Lessons learned

- I DO NOT need to install dotenv, even when I use a .env file and use `process.env.API_SECRET` in my netlify function.
- I must **remember to restart my netlify server** via `netlify dev` whenever I make certain changes to my code, like switching out the hard coded api secret for `process.env.API_SECRET`

# Final thoughts

## I want to learn Netlify better

In the past, I've used Heroku, but I really dislike how LONG it takes to load up a website deployed via HEROKU!
So far, Netlify is proving to be much more user friendly and fast!
