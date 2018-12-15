# easy-signup

**Version**: 1.0 first release of the easy-signup application built using React & Redux.
***

## Table of Contents
* [Contributor](#contributor)
* [Overview](#overview)
* [Problem Domain](#problem-domain)
* [Feature List](#feature-list)
* [Future improvements](#future-improvements)
* [Technologies Used](#technologies-used)
* [How to run application](#How-to-run-application)
* [Tests](#tests)
* [Contact](#Contact)

## Contributor
* Madhu Rebbana https://github.com/mrebb 
***

## Overview
This application is a simple step by step UI for signing up the new user. 
***

## Problem Domain
Build an application that provides interface for new user to signup and guides through step by step.

## Feature List

- [x] User signup
- [x] Email: 
    - Check for duplicate email
    - Check for email format  
    - maximum length of 50
- [x] Password: 
    - Check for password matching with confirm password field
    - Encode the password before saving to local storage
    - maximum length of 50
- [x] Phone number: 
    - Check for 10 digit format
    - Check for errors
    - On the fly feedback on error correction
    - maximum length of 10
- [x] Accounting Setup: 
    - Check for credit card number length & number type
    - Check for credit card cvc code length (16 digits) & number type
    - Check for expiry date length and type
    - Check cvc code length(3 digits) & type
    - error message feedback just below the fields
    - change in payment method clears the form and shows the new payment method form 
    - input type validations
    - All remaining fields validated for length
    - Routing & account number fields max length (20 digits) vaidation
- [x] Optional Email guest list: 
    - Check for email type
- [x] Final screen: 
    - Message with Contact Sales button
- [x] Responsive layout 
***
## Future improvements
- [] Accounting Setup: 
    - Clear bank account information fields when bank name is changed by user so that user won't get forget to fill fields for newly selected bank.
    - Currently from payment method window, if user goes back with previous click and comes back on to payment screen, warning messages are reset. User won't see warning messages untill user touches any of those fields.
    - Add disclaimer text on Accounting setup screen
- [] Refactoring: 
    - Move state management for error flags to redux instead of local state. 
    - Reuse the components or methods across application and move them to utils.
- [] User Experience: 
    - Mobile version dropdown to have native select drop downs rather than web based select dropdowns.
    - better resizing of fields
***
### Technologies Used
* Javascript
* React.js
* Redux
* React Router
* Redux thunk
* HTML, CSS3
* Node.js
* Material UI
* Github pages
* Babel
***

## How to run application

### Run on development environment:
* Open terminal window and run below commands
```sh
$ git clone https://github.com/mrebb/easy-signup.git

$ cd easy-signup
 
$ npm install
(Wait for npm packages installation)
$ npm run 
(Wait untill it builds and opens a browser window)

```
* Browser opens up and runs with URL : `http://localhost:3000`
* Fill the forms and submit on the "All done!' screen
* Open browser developer tools and see `Local Storage` under application tab
* you should see `users.json` file with list of users that you submitted
* password is encoded with `base64` for now. This should be changed to secure password hashing with private key. 
 ***  

## Tests
* Postponed for future.
***
## Contact
* Please don't hesitate to reach out to madhurebbana@gmail.com if you have any questions or issues while running this application. 
