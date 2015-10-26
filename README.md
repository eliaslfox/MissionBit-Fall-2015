# Get Me Food

An app for finding restaurants.

## Setup

Install dependencies

```shell
npm install
bower install
grunt build
```

Create a config.js file in the project route

```javascript
module.exports = {
    yelp: {
        Consumer_Key: "Your Data Here",
        Consumer_Secret: "Your Data Here",
        Token: "Your Data Here",
        Token_Secret: "Your Data Here"
    },
    insta: {
            client_id: 'Your Data Here',
            client_secret: 'Your Data Here'
    }
};
```

## Usage

```
grunt
```

## Issues
Please leave bugs on the github issues page.