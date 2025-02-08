import rd from 'readline';
import chalk from 'chalk'


// create an interface to take the user input in cmd
let rl=rd.createInterface({
    input:process.stdin,
    output:process.stdout
})
 let Todo=[]
// create functions to show the questions

 let showQuestion=()=>{
        console.log(chalk.bgMagenta.bold`Here is the Todo List:`);
        console.log(`1: Enter the Task:`);
        console.log(`2: Show All the Task:`);
        console.log(`3: Exit from Todo:`);
        rl.question(chalk.redBright.bold`Choose an Option from the given options: `,takeInput);
        
}

let takeInput=(option)=>{

    if (option=='1') {
        rl.question(`1.Enter The task:`,(task)=>{
            Todo.push(task);
            console.log(chalk.bgCyan.bold`The Task has been Added : `,task);
            showQuestion()
        })
    }
    else if(option=='2'){
        rl.question(`2.Show All the Task: `);
        if (Todo=="") {
            console.log(chalk.bgGreenBright.bold`Your Todo List is Empty `);
            console.log(`Enter the Task`);
        
            showQuestion()
        }
        else{
            Todo.forEach((task,index)=>{
                console.log(`${index+1},${task}`);
                
            })
            showQuestion()
        }
       
    }
    else if(option=='3'){
        console.log(`GoodBye!`);
        rl.close()
    }
    else{
        console.log(`Invalid Option! Try Again `);
        showQuestion()
    }
      
}



showQuestion()