// let Event=require('events');
// const { eventNames } = require('process');
// // initlize event instance
// let myEvent=new Event();


// // event count

// let EventCount={
//     'login':0,
//     'sale':0,
//     'sale out':0,
//     'purchase':0
// }
// // listening an event
// myEvent.on('login',(username)=>{
//     EventCount["login"]++
//     console.log(`${username} has been Log in `);
    
// })

// myEvent.on('sale',(username)=>{
//     EventCount["login"]++
//     console.log(`${username} has been Log in `);
    
// })

// myEvent.on('purchase',(username,field)=>{
//     EventCount["purchase"]++

//     console.log(`${username} has been purchase the ${field} `);
    
// })

// myEvent.on('sale out',(item)=>{
//     EventCount["sale"]++

//     console.log(`${item} has been sold out`);
    
// })

// myEvent.on('summary',function(){
//     console.log(EventCount);
    
// }
// )
// // emit event
// myEvent.emit('login','Aniba')
// myEvent.emit('sale','Aniba')
// myEvent.emit('purchase','Aniba','shoes')
// myEvent.emit('sale out','laptop')

// myEvent.emit('summary')





let Event = require('events');
// initialize event instance
let myEvent = new Event();

// event count
let EventCount = {
    'login': 0,
    'sale': 0,
    'sale out': 0,
    'purchase': 0,
    'summary': 0  // Add a counter for the 'summary' event
};

// listening an event
myEvent.on('login', (username) => {
    EventCount["login"]++;
    console.log(`${username} has been Logged in`);
});

myEvent.on('sale', (username) => {
    EventCount["sale"]++;  // Corrected the event name from "login" to "sale"
    console.log(`${username} has made a sale`);
});

myEvent.on('purchase', (username, field) => {
    EventCount["purchase"]++;
    console.log(`${username} has purchased the ${field}`);
});

myEvent.on('sale out', (item) => {
    EventCount["sale out"]++;  // Corrected the event name from "sale" to "sale out"
    console.log(`${item} has been sold out`);
});

myEvent.on('summary', function () {
    EventCount["summary"]++;  // Increment the summary counter
    console.log(EventCount);
});

// emit event
myEvent.emit('login', 'Aniba');
myEvent.emit('sale', 'Aniba');
myEvent.emit('purchase', 'Aniba', 'shoes');
myEvent.emit('sale out', 'laptop');

myEvent.emit('summary');