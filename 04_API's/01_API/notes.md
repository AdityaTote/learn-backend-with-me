## What is an API? 

let me explain API in simple, layman's terms first:

An API (Application Programming Interface) is like a waiter at a restaurant.It acts as the middleman that takes your order (request for data or service) and communicates it to the kitchen (the software system providing the data or functionality). The kitchen then prepares the order and gives it to the waiter, who brings it back to you (the API returns the requested data or result).

#### Now Lets understand by technical language:

* An API, short for Application Programming Interface, is a set of rules, protocols, and tools that allows different software applications to communicate with each other.
* It defines the methods and data formats that applications can use to request and exchange information.
* APIs enable the interaction between different software systems by providing a way for them to access each other's functionality and data. 
* They act as intermediaries, allowing applications to make requests and receive responses, facilitating seamless integration and interoperability.

## Types of APIs

* **RESTful APIs:** Representational State Transfer (REST) is an architectural style for designing networked applications. RESTful APIs adhere to REST principles and use HTTP methods to perform CRUD (Create, Read, Update, Delete) operations on resources.

* **SOAP APIs:** Simple Object Access Protocol (SOAP) is a protocol for exchanging structured information in the implementation of web services. SOAP APIs use XML for message formatting and rely on a set of standards for communication.

* **GraphQL APIs:** GraphQL is a query language for APIs and a runtime for executing those queries. It provides a more flexible and efficient alternative to REST APIs by allowing clients to request only the data they need in a single request.

**We Will use {REST:API}, it is friendly for web dev**

## HTTP Protocols
* GET
* POST
* PUT
* PATCH 
* DELETE

##  Key Components of APIs:

**Endpoints:**
    APIs expose specific endpoints or URLs that applications can access to perform various actions or retrieve specific data. Each endpoint typically represents a specific function or resource offered by the API.
    FORMATE :
                BASEURL/Endpoint
    EXAMPLE :
                https://xyz.com/random
                HERE,
                BASEURL = https://xyz.com
                Endpoint = random

**PARAMETER:**
    APIs often accept parameters as part of the request to specify additional details or filters for the requested data. Parameters can be included in the URL query string for GET requests or in the request body for POST requests.
    There are two type of parameter :

### 1. OUERY PARAMETER:
    Here, simple query is passed while fetching the data of api. 
    single query at a time:
        BASEURL/endpoint?query=value
    multiple query at a time:
        BASEURL/endpoint?query=value&query=value

### 2.PATH PARAMETER:
    It is used to fetch a data for more specific data. 
    In the api url in path-parameter we have to specific resorce like id ,key , username,etc.
    BASEURL/endpoint/{path-parameter}

    


