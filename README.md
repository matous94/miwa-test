# This document talks about:

- How to run the app
- The differences between the assignment and the solution
- The trade offs and decisions I made with the given time estimate of 2 hours in mind, for the assignment, which I exceeded anyway
- The next steps and possible improvements I would make in real project

## To run the app

```
yarn install
yarn start
```

## The differences

1. The API doesn't provide "characters" endpoint, "people" endpoint is used instead.
2. The Person entity doesn't have an "age" property, only a "birthYear" which uses Star Wars calendar and I'm not really sure how to convert it to age, since I would have to pick some point in time as reference. Also most characters has "birthYear" value "unknown", so it wouldn't be much fun to sort characters by age, so I decided to sort them by name.
3. Vehicles doesn't have "weight" property, so I used "cargoCapacity".

## Project setup

I decided to go with the _electron-react-boilerplate_ which I haven't used before but is popular among the electron community. I always prefer to use some kind of boilerplate or project builder as _create-react-app_ and then just tweak and customize the configuration to meet my and project expectations as it grows.

### Next steps would be

I have already made few modifications to _eslint_ and _prettier_ configuration, I would continue by customizing it to my liking.

I would also simplify the _package.json_ file by extracting some of the configuration to separate files (jest, electron-builder...).

## GraphQL

As I mentioned in the introduction email, I don't have any practical experience with GraphQL. I decided not to use any GraphQL client as Apollo instead I just send a post request with the given query.

It certainly wouldn't be any problem to learn more about it in the next week or two.

## Pagination

I am not sure if the pagination should have happened already on the server and therefore send new request for each page. It would certainly make sense to avoid requesting too much data. I took the easier way and I fetch all items for given entity at once.

One of the reasons I've chosen this method is that the list should be displayed sorted but it seems to me that the GraphQL API doesn't support sorting or at least I couldn't figure out how.

## Testing

I added few behavioral tests to demonstrate my current skill level of using _Jest_ + _testing-library_ for testing and _msw_ for mocking API responses. I am currently learning and enjoying those tools and testing in general.

### Next steps would be

Implement custom render method which would wrap the tested component with our global providers (router, store). It would allow me to test components in isolation while having access to those providers if needed.

## Typescript

Typescript is another tool I am currently learning and enjoying. So I decided to demonstrate it in this example as well.

## Styling

I haven't really spent much time thinking about styling. I like to use _CSS-in-JS_ libraries and frameworks, so I just abused the _style_ prop for this example.

## Store

I have implemented simple data store based on the React _context_ API. In a real project I would choose some state management library depending on the requirements. Lately I like to use _easy-peasy_ library which uses Redux under the hood, or Redux itself.
