/**
 * 
 * exit from a Node.js program
 * 
 * ctrl-C
 * process.exit()
 * 
 */

process.exit(1)



/**
 * and when the program will later end, Node.js will return that exit code.

A program will gracefully exit when all the processing is done.
 * 
 */

process.exitCode = 1


/**
 * 
 * SIGKILL is the signal that tells a process to immediately terminate, and would ideally act like process.exit().

SIGTERM is the signal that tells a process to gracefully terminate. It is the signal that's sent from process managers like upstart or supervisord and many others
 * 
 */

process.kill(process.pid, 'SIGTERM')


/**
 * 
 * How to read environment variables from Node.js
 * 
 * Here is an example that accesses the NODE_ENV environment variable, which is set to development by default.
 */

process.env.NODE_ENV // "development"


/**
 * 
 * How to use the Node.js REPL
 *
 * If we omit the filename, we use it in REPL mode: node 
 * 
 * [1, 2, 3].forEach(num => {
and you press enter, the REPL will go to a new line that starts with 3 dots, indicating you can now continue to work on that block.

... console.log(num)
... })
If you type .break at the end of a line, the multiline mode will stop and the statement will not be executed.
 */


/**
 * Node.js, accept arguments from the command line
 * 
 * You can pass any number of arguments when invoking a Node.js application using

node app.js
Arguments can be standalone or have a key and a value.

For example:
*/
//node app.js joe
//you can access it using
//const args = process.argv.slice(2)
//args[0]
//node app.js name=joe
//node app.js --name=joe


/**
 * 
 * Output to the command line using Node.js
 * 
 * Basic output using the console module
 */

//We can also format pretty phrases by passing variables and a format specifier.

//For example:

console.log('My %s has %d years', 'cat', 2)
//%s format a variable as a string
//%d format a variable as a number
//%i format a variable as its integer part only
//%o format a variable as an object


// Create a progress bar


const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)



/**
 * Accept input from the command line in Node.js
 * 
 * 
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })


/**
 * Expose functionality from a Node.js file using exports
 * 
 * 
 */
// car.js
const car = {
    brand: 'Ford',
    model: 'Fiesta'
  }
  
  module.exports = car

  // index.js
const car = require('./car')

const car = {
    brand: 'Ford',
    model: 'Fiesta'
  }
  
  exports.car = car

  //or directly 
  exports.car = {
    brand: 'Ford',
    model: 'Fiesta'
  }



  /**
   * 
   * An introduction to the npm package manager
   * 
   * Downloads
npm manages downloads of dependencies of your project.

npm install

npm install <package-name>

   * 
Updating packages
Updating is also made easy, by running

npm update
npm will check all packages for a newer version that satisfies your versioning constraints.

You can specify a single package to update as well:

npm update <package-name>

Updating packages
Updating is also made easy, by running

npm update
npm will check all packages for a newer version that satisfies your versioning constraints.

You can specify a single package to update as well:

npm update <package-name>

Running Tasks
The package.json file supports a format for specifying command line tasks that can be run by using

npm run <task-name>
   */


/**
 * 
 * Where does npm install the packages?
 * 
 * 
 * 
 */
//the package is installed in the current file tree, under the node_modules subfolder.

npm install lodash

// When this happens, npm won't install the package under the local folder, but instead, it will use a global location.
npm install -g lodash

/**
 * 
 * 
 * How to use or execute a package installed using npm
 * 
 * 
 * To use it in your code, you just need to import it into your program using require:
 */

const _ = require('lodash')


//npx cowsay

// and npx will find the package location.


/**
 * 
 * The package.json guide
 * 
 * The package.json file is kind of a manifest for your project. It can do a lot of things, completely unrelated. It's a central repository of configuration for tools, for example. It's also where npm and yarn store the names and versions for all the installed packages.
 * Properties breakdown
 * name
 * author
 * contributors
 * bugs
 * homepage
 * version
 * licese
 * keywords
 * description
 * repository
 * main
 * private
 * scripts
 * dependencies
 * devdependencies
 * engines
 * browserlist
 * 
 * 
 * 
 * 
 */



/**
 * 
 * The package-lock.json file
 * 
 * The goal of package-lock.json file is to keep track of the exact version of every package that is installed so that a product is 100% reproducible in the same way even if packages are updated by their maintainers.
 * 
 * if you write ~0.13.0, you want to only update patch releases: 0.13.1 is ok, but 0.14.0 is not.
if you write ^0.13.0, you want to update patch and minor releases: 0.13.1, 0.14.0 and so on.
if you write 0.13.0, that is the exact version that will be used, always
 * 
 * 
 */


/**
 * 
 * Find the installed version of an npm package
 * 
 * 
 * To see the version of all installed npm packages, including their dependencies:
 * npm list
 * 
 * To get only your top-level packages (basically, the ones you told npm to install and you listed in the package.json), run npm list --depth=0:
 * ❯ npm list --depth=0
/Users/joe/dev/node/cowsay
└── cowsay@1.3.1
 * 
 * You can get the version of a specific package by specifying its name:
 * npm list cowsay (version )
 */




 /**
  * Install an older version of an npm package
  * You can install an old version of an npm package using the @ syntax:

npm install <package>@<version>
Example:

npm install cowsay
installs version 1.3.1 (at the time of writing).

Install version 1.2.0 with:

npm install cowsay@1.2.0
The same can be done with global packages:

npm install -g webpack@4.16.4
  * 
  * 
  */


/**
 * Update all the Node.js dependencies to their latest version
 * To update all packages to a new major version, install the npm-check-updates package globally:

npm install -g npm-check-updates
then run it:

ncu -u
this will upgrade all the version hints in the package.json file, to dependencies and devDependencies, so npm can install the new major version.

You are now ready to run the update:

npm update
If you just downloaded the project without the node_modules dependencies and you want to install the shiny new versions first, just run

npm install
 */

/**
 * 
 * 
 * 
 * 
 * Semantic Versioning using npm
 * 
 * it's that they all agreed on using Semantic Versioning for their version numbering.
 * The Semantic Versioning concept is simple: all versions have 3 digits: x.y.z.
 * the first digit is the major version
the second digit is the minor version
the third digit is the patch version
 * 
you up the major version when you make incompatible API changes
you up the minor version when you add functionality in a backward-compatible manner
you up the patch version when you make backward-compatible bug fixes

The rules use those symbols:

^
~
>

 */



 /**
  * 
  * 
  * 
  * 
  * 
  * Uninstalling npm packages
  * 
  * npm uninstall <package-name>
from the project root folder (the folder that contains the node_modules folder).

Using the -S flag, or --save, this operation will also remove the reference in the package.json file.

If the package was a development dependency, listed in the devDependencies of the package.json file, you must use the -D / --save-dev flag to remove it from the file:

npm uninstall -S <package-name>
npm uninstall -D <package-name>
  * 
  * 
  * 
  * 
  */



  /**
   * 
   * 
   * 
   * 
   * npm global or local packages
The main difference between local and global packages is this:

local packages are installed in the directory where you run npm install <package-name>, and they are put in the node_modules folder under this directory
global packages are all put in a single place in your system (exactly where depends on your setup), regardless of where you run npm install -g <package-name>

You probably have some packages installed globally already on your system. You can see them by running

npm list -g --depth 0

   * 
   */

/**
 * 
 * 
 * 
 * npm dependencies and devDependencies
 * 
 * 
 * The package is automatically listed in the package.json file, under the dependencies list (as of npm 5: before you had to manually specify --save).

When you add the -D flag, or --save-dev, you are installing it as a development dependency, which adds it to the devDependencies li
 * 
 * 
 */



 /**
  * 
  * The npx Node.js Package Runner
  * npx is a very powerful command that's been available in npm starting version 5.2, released in July 2017.
  * Easily run local commands
  * Installation-less command execution
  * Run some code using a different Node.js version
  * Run arbitrary code snippets directly from a URL

  * 
  */



  /**
   * 
   * The Node.js Event Loop
   * 
   *Why is this so important? Because it explains how Node.js can be asynchronous and have non-blocking I/O, and so it explains basically the "killer app" of Node.js, the thing that made it this successful.

The Node.js JavaScript code runs on a single thread. There is just one thing happening at a time.

Blocking the event loop
When this code runs, first foo() is called. Inside foo() we first call bar(), then we call baz().

At this point the call stack looks like this:



   */

  const bar = () => console.log('bar')

  const baz = () => console.log('baz')
  
  const foo = () => {
    console.log('foo')
    bar()
    baz()
  }
  
  foo()


// Queuing function execution

  const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}

foo()

//ES6 Job Queue

const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()







/**
 * 
 * Understanding process.nextTick()

 * As you try to understand the Node.js event loop, one important part of it is process.nextTick().

Every time the event loop takes a full trip, we call it a tick.

When we pass a function to process.nextTick(), we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts:
 * 
 */

process.nextTick(() => {
    //do something
  })


/**
 * Discover JavaScript Timers
 * 
 * setTimeout()
 * 
 */
const id = setTimeout(() => {
    // should run after 2 seconds
  }, 2000)
  
  // I changed my mind
  clearTimeout(id)

//Zero delay


setTimeout(() => {
    console.log('after ')
  }, 0)
  
  console.log(' before ')


  //setInterval()
  setInterval(() => {
    // runs every 2 seconds
  }, 2000)

//Recursive setTimeout


const myFunction = () => {
    // do something
  
    setTimeout(myFunction, 1000)
  }
  
  setTimeout(myFunction, 1000)


/**
 * JavaScript Asynchronous Programming and Callbacks
 * 
 * 
 * Callbacks
You can't know when a user is going to click a button. So, you define an event handler for the click event. This event handler accepts a function, which will be called when the event is triggered:


 */

const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    xhr.status === 200 ? console.log(xhr.responseText) : console.error('error')
  }
}
xhr.open('GET', 'https://yoursite.com')
xhr.send()

/**
 * 
 * Understanding JavaScript Promises
 * 
 */


let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}

checkIfItsDone()

/*
Consuming a promise
In the last section, we introduced how a promise is created.

Now let's see how the promise can be consumed or used.
*/
const isItDoneYet = new Promise(/* ... as above ... */)
//...

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}



/**
 * 
 * Modern Asynchronous JavaScript with Async and Await
 * Introduction
JavaScript evolved in a very short time from callbacks to promises (ES2015), and since ES2017 asynchronous JavaScript is even simpler with the async/await syntax.

Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises. Let me repeat: async/await is built on promises.

A quick example
This is a simple example of async/await used to run a function asynchronously
 */

onst doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
  const doSomething = async () => {
    console.log(await doSomethingAsync())
  }
  
  console.log('Before')
  doSomething()
  console.log('After')

/**
 * 
 * The Node.js Event emitter
 * f you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

On the backend side, Node.js offers us the option to build a similar system using the events module.

This module, in particular, offers the EventEmitter class, which we'll use to handle our events.

You initialize that using
 */

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()



/**
 * 
 * Build an HTTP Server
 * 
 */

onst http = require('http')

const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, World!</h1>')
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})



/**
 * 
 * Making HTTP requests with Node.js
 * Perform a GET Request
 */
const https = require('https')
const options = {
  hostname: 'whatever.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()

// Perform a POST Request


const https = require('https')

const data = JSON.stringify({
  todo: 'Buy the milk'
})

const options = {
  hostname: 'whatever.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()


/**
 * 
 * Make an HTTP POST request using Node.js
There are many ways to perform an HTTP POST request in Node.js, depending on the abstraction level you want to use.

The simplest way to perform an HTTP request using Node.js is to use the Axios library:
 * 
 */
const axios = require('axios')

axios
  .post('https://whatever.com/todos', {
    todo: 'Buy the milk'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })


/**
 * Get HTTP request body data using Node.js
 * 
 * Here is how you can extract the data that was sent as JSON in the request body.

If you are using Express, that's quite simple: use the body-parser Node.js module.

For example, to get the body of this request:
 */


const express = require('express')
const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.post('/todos', (req, res) => {
  console.log(req.body.todo)
})


/**
 * Working with file descriptors in Node.js
 * Before you're able to interact with a file that sits in your filesystem, you must get a file descriptor.

A file descriptor is what's returned by opening the file using the open() method offered by the fs module:
 * 
 */
const fs = require('fs')

fs.open('/Users/joe/test.txt', 'r', (err, fd) => {
  //fd is our file descriptor
})

/**
 * 
 * Node.js file stats
Every file comes with a set of details that we can inspect using Node.js.

In particular, using the stat() method provided by the fs module.

You call it passing a file path, and once Node.js gets the file details it will call the callback function you pass, with 2 parameters: an error message, and the file stats:
 * 
 */

const fs = require('fs')
fs.stat('/Users/joe/test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  //we have access to the file stats in `stats`
})

/**
 * Node.js File Paths
 * Every file in the system has a path.

On Linux and macOS, a path might look like:

/users/joe/file.txt

while Windows computers are different, and have a structure such as:

C:\users\joe\file.txt

You need to pay attention when using paths in your applications, as this difference must be taken into account.

You include this module in your files using
 * 
 */


/**
 * Reading files with Node.js
The simplest way to read a file in Node.js is to use the fs.readFile() method, passing it the file path, encoding and a callback function that will be called with the file data (and the error):

 * 
 * 
 */

const fs = require('fs')

fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

/**
 * Writing files with Node.js
 * The easiest way to write to files in Node.js is to use the fs.writeFile() API.

Example:

 * 
 */
const fs = require('fs')

const content = 'Some content!'

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

/**
 * 
 * Working with folders in Node.js
TABLE OF CONTENTS
The Node.js fs core module provides many handy methods you can use to work with folders.

Check if a folder exists
Use fs.access() to check if the folder exists and Node.js can access it with its permissions.

Create a new folder
Use fs.mkdir() or fs.mkdirSync() to create a new folder.
 * 
 */

const fs = require('fs')

const folderName = '/Users/joe/test'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}


/***
 * 
 * The Node.js fs module
The fs module provides a lot of very useful functionality to access and interact with the file system.

There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:
 * 
 * 
 */

const fs = require('fs')



/**
 * The Node.js path module
 * 
 * 
 * The path module provides a lot of very useful functionality to access and interact with the file system.

There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:


 */

const path = require('path')

/**
 * The Node.js os module
 * 
 * This module provides many functions that you can use to retrieve information from the underlying operating system and the computer the program runs on, and interact with it.
 * 
 */

const os = require('os')


/**
 * 
 * The Node.js events module
TABLE OF CONTENTS
The events module provides us the EventEmitter class, which is key to working with events in Node.js.
 * 
 * 
 */

const EventEmitter = require('events')
const door = new EventEmitter()

/**
 * 
 * The Node.js http module
 * 
 * The HTTP core module is a key module to Node.js networking.

It can be included using
 */

const http = require('http')

/**
 * 
 * Node.js Buffers
TABLE OF CONTENTS
What is a buffer?
A buffer is an area of memory. JavaScript developers are not familiar with this concept, much less than C, C++ or Go developers (or any programmer that uses a system programming language), which interact with memory every day.

It represents a fixed-size chunk of memory (can't be resized) allocated outside of the V8 JavaScript engine.

You can think of a buffer like an array of integers, which each represent a byte of data.

It is implemented by the Node.js Buffer
 * 
 */


const buf = Buffer.from('Hey!')


/**
 * 
 * Node.js Streams
TABLE OF CONTENTS
What are streams
Streams are one of the fundamental concepts that power Node.js applications.

They are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.

Streams are not a concept unique to Node.js. They were introduced in the Unix operating system decades ago, and programs can interact with each other passing streams through the pipe operator (|).

For example, in the traditional way, when you tell the program to read a file, the file is read into memory, from start to finish, and then you process it.
 * 
 * 
 */
const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
  fs.readFile(__dirname + '/data.txt', (err, data) => {
    res.end(data)
  })
})
server.listen(3000)



/**
 * 
 * Node.js, the difference between development and production
You can have different configurations for production and development environments.

Node.js assumes it's always running in a development environment. You can signal Node.js that you are running in production by setting the NODE_ENV=production environment variable.

This is usually done by executing the command

 * 
 */

//export NODE_ENV=production


/**
 * Error handling in Node.js
TABLE OF CONTENTS
Errors in Node.js are handled through exceptions.

Creating exceptions
An exception is created using the throw keyword:
 * 
 * 
 */

throw value


/**
 * 
 * 
 * How to log an object in Node.js
When you type console.log() into a JavaScript program that runs in the browser, that is going to create a nice entry in the Browser Console:

console log browser

Once you click the arrow, the log is expanded, and you can clearly see the object properties:

console log browser expanded

In Node.js, the same happens.

We don’t have such luxury when we log something to the console, because that’s going to output the object to the shell if you run the Node.js program manually, or to the log file. You get a string representation of the object.

Now, all is fine until a certain level of nesting. After two levels of nesting, Node.js gives up and prints [Object] as a placeholder:
 * 
 * const obj = {
  name: 'joe',
  age: 35,
  person1: {
    name: 'Tony',
    age: 50,
    person2: {
      name: 'Albert',
      age: 21,
      person3: {
        name: 'Peter',
        age: 23
      }
    }
  }
}
console.log(obj)


{
  name: 'joe',
  age: 35,
  person1: {
    name: 'Tony',
    age: 50,
    person2: {
      name: 'Albert',
      age: 21,
      person3: [Object]
    }
  }
}
 */



/**
 * Node.js with TypeScript
 * What is TypeScript
TypeScript is a very popular open-source language maintained and developed by Microsoft, it's loved and used by a lot of software developers around the world.

Basically, it's a superset of JavaScript that adds new capabilities to the language. Most notable addition are static type definitions, something that is not present in plain JavaScript. Thanks to types, it's possible, for example, to declare what kind of arguments we are expecting and what is returned exactly in our functions or what's the exact shape of the object that we are creating. TypeScript is a really powerful tool and opens new world of possibilities in JavaScript projects. It makes our code more secure and robust by preventing a lot of bugs before code is even shipped - it catches problems during writing the code and integrates wonderfully with code editors like Visual Studio Code.

We can talk about other TypeScript benefits later, let's see some examples now!

Examples
 * 
 
type User = {
    name: string;
    age: number;
  };
  
  function isAdult(user: User): boolean {
    return user.age >= 18;
  }
  
  const justine: User = {
    name: 'Justine',
    age: 23,
  };
  
  const isJustineAnAdult: boolean = isAdult(justine);
*/










