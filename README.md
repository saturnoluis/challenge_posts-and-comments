# Challenge: Posts & Comments

## Description

This coding challenge made in react.js consist in a web application that fetches from a public API that provides posts and comments.

The application presents a list of posts and when any of the items is clicked it shows the list of comments that are associated with that specific post.

It also allows to make a new comment, and change the color theme to a dark or light scheme.

> __A comment about comments:__ When submitting a new comment in a post, an actual API call is made to persist the information but it's not really updated on the server, refreshing the page removes the new comments since they only exist in the redux store.

## Installation

In order to install just clone the repo, cd into the project directory, and run:

### `npm install`
### `npm start`

## Tech-stack

* __create-react-app__ - _Boilerplate._
* __react-router-dom__ - _There's a route for the single post view._
* __react-redux__ - _State management._
* Styles are done using vanilla CSS with lightly following the BEM naming convention.

## API endpoints and resources used

* https://jsonplaceholder.typicode.com/posts - _Posts._
* https://jsonplaceholder.typicode.com/posts/1/comments - _Comments in a single post._
* https://picsum.photos/ - _Used to display a random hero image in the posts._
* Google fonts

### Visual design decisions

I wanted to keep it simple so a vertical design was appropriate to display all posts, displaying only the title and body of each post in individual cards (I was thinking in the old reddit design).

The selection of colors for both dark and light themes was kind of arbitrary but I wanted the site to feel elegant and neat, I think the color pallette help to accomplish that goal, same for the selection of fonts.

I also added a hero image in the view that displays a single post. I think it helps make the challenge a bit more "complete" and less dull.

### Implementation decisions

Exploring the source files will be the best approach to explain the implementation, so below I briefly describe the most important files or folders in order to help you understand the gist of it (only what's inside the `src/` folder is worth mentioning here).

* `App.js` - Main wrapper and container for the application, it has the definition of the routes to navigate the app and also handles the theme switcher in it's inner state.

* `App.css` - This file's most important role is to provide the app with the color variables used in each theme.

* `store/` - This folder contains the definition of the redux store and the different slices of it. Also each slice file defines the reducer, actions, and selectors related with that portion of the store.

* `service/` - Exports several functions that act as wrappers for the fetch API witch was used to reach the service endpoints.

* `pages/`- This folder contains the react components that are used exclusively to render the full view of a page. That is Home (for the home view), and Single (for the post and comments view). These components are the ones used in the router definition inside App.js

* `components/` - Any other react component that can be reused in the application to build the UI.