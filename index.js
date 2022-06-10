// //Arrow functions work well in iterator methods
// //iterator methods allow for dealing w data 1 and a time

// const nums = [1,2,3]
// const squares = nums.map(x => x ** 2)

// // const nums = [1,2,3];
// // const squares = nums.map(x => x ** 2);

// console.log(squares)
// console.log(nums)


// const overdueTodoItems = {eat, sleep}

// finishedItems = overdueTodoItems.map( done => done.className  = "complete");
// header.innerText = `you did it' ${finishedItems.length} items!`;

// finishedItems = overdueTodoItems.map( item => item.className = "complete" );
// header.innerText = `You finished ${finishedItems.length} items!`;

// console.log(finishedItems)

// const lapsedUserAccounts = [jim, ally]

// lapsedUserAccounts.map( u => sendBillTo(u.address) );

// console.log(lapsedUserAccounts)


// let num = a
// let num2 = b
// const square = num.map(x => x * x)
// function divide = num / num
const square = (a => a ** 2);


function divide(a,b) {
    let divide = a / b;
    return divide;
} 

const add = (a, b) => {
    return(a+b)
}