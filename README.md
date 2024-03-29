# Zomato order pagination API 
Zomato Orders Pagination
Welcome to the Zomato Orders project! This Node.js server provides an endpoint to retrieve Zomato order records with optional parameters for pagination. The API is designed to be simple and easy to use.

**Getting Started**
# Prerequisites
> Node.js installed on machine
> MySQL Server installed and running
Installation

Clone the repository to your local machine.
Navigate to the project directory in your terminal.
Run the following command to install dependencies:
npm install
# Database Setup
Update the database parameters in connector.js with your MySQL Server details.
Run the following command to create the database and sample data:

node createDatabase.js

# Usage
Endpoint
Endpoint URL: http://localhost:8080/api/orders
Method: GET

# Optional Parameters
offset: Positive integer representing the starting point of records (Default: 0)
limit: Positive integer representing the number of records to retrieve (Default: 10)

# Running the Server
Run the following command to start the sever Node.js server:

node index.js

The server will be accessible at http://localhost:8080.


Example request: http://localhost:8080/api/orders?limit=6&offset=1

# Response

Status Code: 200
Body: An array of records from the orders table
For invalid values of parameters (limit and offset), the API will respond by using default values for both.

## Developed-By (Aakash Dayma)
1. [Linkedin](https://www.linkedin.com/in/aakash-dayma-9990/).
2. [Youtube](https://www.youtube.com/channel/UCByAARH9-KcXp2cejPw4ljg)‣潚慭潴牏敤獲�