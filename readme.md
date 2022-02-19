# Purpose of this repo

Although I did build a simple fetch-weather website by following a [youtube tutorial](https://youtu.be/m2Dr4L_Ab14), **the main aim of this repo was to learn how to hide api keys with netlify functions**. Mission success!

# Resources

- [weatherstack API](https://weatherstack.com/)

# Lessons learned

- I DO NOT need to install dotenv when I hide my api secret.
- I must **remember to restart my netlify server** via `netlify dev` whenever I make certain changes to my code, like switching out the hard coded api secret for `process.env.API_SECRET`

# Final thoughts

## I want to learn Netlify better

In the past, I've used Heroku, but I really dislike how LONG it takes to load up a website deployed via HEROKU!
So far, Netlify is proving to be much more user friendly and fast!
