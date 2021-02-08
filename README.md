# K Group Developer Trainee assignment: front-end for product rating micro service

This project is part of a home assignment for K Group's Developer Trainee program application. It is a single-page React application that fetches the data from 2 microservice REST API's.

## What does it do?

This project is the front-end for a micro service that lists user's rated products. The user may view their own rated products (tab "Home") and also all products (tab "Products").

The front-end fetches data from the following REST API's:

- Product-catalog-service: a list of user's rated products and their ratings
- Product-info-service: a list of all products (product name and manufacturer)

The products and their data are shown in product cards. In development phase, the product images are replaced by placeholder images from the [Unsplash Random](https://source.unsplash.com/) image service.

## How does it work?

Project repo may be downloaded and copied to local environment. Before use, libraries must be installed with `npm install` command in the project directory.

Project has been deployed to Heroku and may be found here: [https://product-rating-client.herokuapp.com/](https://product-rating-client.herokuapp.com/).
At this point, the deployed version does not work without running the backend in local environment.

The back-end repositories for the micro service are found as follows:

- Discovery server: [https://github.com/ullataponen/discovery-server](https://github.com/ullataponen/discovery-server)
- Product catalog service: [https://github.com/ullataponen/product-catalog-service](https://github.com/ullataponen/product-catalog-service)
- Product info service: [https://github.com/ullataponen/product-info-service](https://github.com/ullataponen/product-info-service)
- Ratings data service: [https://github.com/ullataponen/ratings-data-service](https://github.com/ullataponen/ratings-data-service)

In order to run the front-end, all 4 back-end services must be copied to local environment and their Spring Boot Application files be run in a code editor/IDE.

## Who will use this project?

The project is a home assignment for K Group's Developer Trainee 2021 program application and it may be used by K Group for evaluation purposes. The creator and repository owner may use the skills learned during this project in future projects.

## What is the goal of this project?

This project's purpose is to show the skill level of the creator and the ability to create a micro service.

## Used technologies (front-end only)

- React
- JavaScript
- HTML (JSX)
- CSS (Material UI)
