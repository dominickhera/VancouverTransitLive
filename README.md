Vancouver Transit Live

by Dominick Hera

live link: https://vancouvertransitlive.herokuapp.com

required:
web browser must have "DISABLE CROSS-ORIGINS RESTRICTIONS" option DISABLED for the website to properly display

restrictions:
- website doesnt update bus locations automatically, to do so will require refreshing the web page

frameworks used:
- creat-react-app - https://github.com/facebookincubator/create-react-app
- react-map-gl - https://github.com/uber/react-map-gl
- react-redux - https://github.com/reactjs/react-redux
- superagent - https://github.com/visionmedia/superagent

data retrieved from Translink

extra questions

1. what new technologies did you learn to complete this challenge?

  - the new technologies that i worked with to complete this challenge is the react-map-gl framework provided by Uber. I have previously used react and various versions of making rest api calls, but have not previously worked with maps in general so it was a bit of a struggle initially to get everything running but thankfully they heavily documented their code so it was easy to understand how to use it all.


2. was there anything you found specifically challenging or time consuming?

- I found it specifically challenging attempting to get the points on the map to update automatically and it wasn't a part that I was able to implement in the time that i had set for myself. I also just specifically found it challenging to set the markers upon the map to indicate each of the busses on the map. I struggled with misintrepeting the respective information needed and ended up wasting alot of time mixing up latitude and longitude values and such.