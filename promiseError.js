
new Promise((resolve,reject) =>{
        throw new Error('error')
}).then(console.log)
//I'm not entirely sure what you mean by "fix". What was this snippet supposed to do exactly?
//Nevertheless, here's my attempt to "fix" the code. Invoking reject instead of throwing an error, and replacing the
//.then with a .catch

new Promise((resolve,reject) =>{
    reject()
}).catch(console.log)

new Promise((resolve,reject) =>{
    throw new Error('error')
}).catch(console.log())