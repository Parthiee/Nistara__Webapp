const dbClient  = require("./db-connectivity")


function main()
{

const db  = new dbClient();



// console.log("Posts")
// let res2 =  db.getPosts().then(res2 => console.log(res2));
// // console.log(res2)

console.log("Requests")
let res3 =  db.getRequestSearchPosts().then(res3 => console.log(res3));
// console.log(res3)

// console.log("Donations")
// let res4 =  db.getDonationPosts().then(res4 => console.log(res4));
// // console.log(res4)


// console.log("Information")
// let res5 =  db.getInformationPosts().then(res5 => console.log(res5));
// // console.log(res5)
}

main();