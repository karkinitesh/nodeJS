 var name = "nitesh";
 console.log(name);


 let promise = new promise((resolve, reject) => {
      let a = 1+1; 
      if (a==2)
      {
          resolve("success");
      }
      else{
          reject("failed");
      }
 } )

 promise.then((message) => {
     console.log("its a" + messgae)
 }).catch((message) => {
     console.log("its a" + message)
 })