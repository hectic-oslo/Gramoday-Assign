# Gramoday-Assign-Api

# Usage
- clone
- install packages

# Made with:
- Node.js
- MongoDB and Mongoose
- Express

# Documentation

Base-Url-http://localhost:3100/

| account | Method | How to Use|Description |
| --- | --- | --- |--- |
| /users | `post` | Accepts the Username ,Email,<br>Password of User | Registers the user |
| /users/login | `post` | Accepts Username and Password | User Login |

##

| user routes | Method | How to Use |Description |
| --- | --- | --- |--- |
| `/cmdty` | `post` | Accept the commodity name|
| `/market` | `post` |Accept the market name and market type|
| `/combPrice?mID=marketId&pId=cmdtyId` | `post` | Call the API with required bearer JWT token | add the price details in db.Accept market name,market type,convFctr,price,priceUnit|
| `/combPrice/:id` | `get` |Call the API with JWT toke in header | gives average price,users and other details|

