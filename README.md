# REST API to for self evaluation

- /user [POST]
    - returns user id if exists
    - otherwise creates user 
- /user/:id/evaluation [GET]
    - returns evaluation details if they exist
    - returns empty evaluation form otherwise
- /user/:id/evaluation [POST]
    - sets evaluation details for the user with the specified id
- /user/scales/ [GET]
    - gets possible scale values for the different evaluation