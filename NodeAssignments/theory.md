# 1.What is NodeJS?
  Node.js is an open-source development platform to run Javascript code on server side.It is built on CHROME v8 engine.
  Node.js can create,add, delete, modify data in your database.

# 2.What is V8 Engine?
It is an open-source javascript engine which compliles the javascript code to machine code before execution  to use it for server-side as well.It is written in C++ language.

# 3.What is Event Loop in NodeJS.
The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.This allows us to use callbacks and promises.It executes the tasks starting from the oldest first.This is used for asynchronous tasks.

For ex:
console.log("This is the first statement");
   
setTimeout(function(){
    console.log("This is the second statement");
}, 1000);
   
console.log("This is the third statement"); 
Output:

This is the first statement
This is the third statement
This is the second statement //it waited for call stack to run all tasks pending befor executing this one.

# 4.What is the use of tsconfig.json file?
The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.

# 5.What are the methods provided by `fs` module to manipulate files?
fs.readFile 
fs.appendFile()
fs.open()
fs.writeFile()
fs.unlink() 
fs.rename(),etc

# 6.What is API?
An API stans for application programming interface.In simpler words, API is a set of defined rules that explain how computers or applications communicate with one another. APIs sit between an application and the web server, acting as an intermediary layer that processes data transfer between systems.

Here’s how an API works:

A client application initiates an API call to retrieve information—also known as a request. This request is processed from an application to the web server via the API’s Uniform Resource Identifier (URI) and includes a headers, and sometimes, a request body.

After receiving a valid request, the API makes a call to the external program or web server.

The server sends a response to the API with the requested information.

The API transfers the data to the initial requesting application.

# 7.What is JSON format?
JSON stands for JavaScript Object Notation.It a lightweight format for storing and transporting data.JSON is often used when data is sent from a server to a web page.The JSON format is syntactically identical to the code for creating JavaScript objects.Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.

For ex:
{
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}

# 8.Why we use JSON format for API?
JavaScript Object Notation (JSON) is the data structure part of the JavaScript programming language. That means by its very definition, it is a perfect fit to represent JavaScript objects.But because most programming languages have similar models of how to represent structured data, JSON also is a good fit for the internal model of many other programming languages.This meant that JSON was a much more natural fit for developers to exchange structured data. It did not require the rather inconvenient “data binding” and “data serialization” steps that were notoriously difficult when using XML-based APIs.

# 9.What is a Framework?
Framework is like a template or foundation for any web software applications.Using frameworks saves time and reduces the risk of errors. You don't need to write everything from the ground up, so there's less chance of introducing errors. Plus, frameworks have already been tested, so there's less to worry about. Other advantages include:

More secure code
Simpler testing and debugging
Avoiding duplicate code
Clean and easily adaptable code
Able to focus on writing code specific to the project

# 10.How an HTTP Communication works.
When client looks something up on a internet, first domain name is mapped for IP address from DNS server ,then, an http request is made to web browser to look up for that IP address and then the browser sends back the HTTP response to the client's computer. 

# 11.What is Middleware in ExpressJS.
Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware in the stack.
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.