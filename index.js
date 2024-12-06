/////////////////////////////////////////////////////////////////
///////////////////////////// BOOTCAMP //////////////////////////
////////////////////// REQUIRED PRACTICE EXAM ///////////////////
/////////////////////////////////////////////////////////////////

let subscriptions = [
    {  // 0
      name: "HBOMax",
      type: 'streaming',
      costPerMonth: 14.99,
      cancel: false,
      users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        }
      ]
    },
    { // 1
      name: 'Hulu',
      type: 'streaming',
      costPerMonth: 7.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 2
      name: 'Netflix',
      type: 'streaming',
      costPerMonth: 9.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        },
         {
           ip: '180.145.75.25',
           lastAccessed: '5/20/2023'
         }
      ]
    },
    { // 3
      name: 'Express VPN',
      type: 'software',
      costPerMonth: 12.95,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 4
      name: 'Adobe Premiere Pro',
      type: 'software',
      costPerMonth: 20.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
  ];
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #1 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  
  let cancelSubscriptions = function(array){
   for (let i = 0; i < array.length; i++){
      if (array[i].costPerMonth > 10)  {
        if (i % 2 === 0){
          array[i].cancel = true
        }
      }                      
   }
    
  };
  
  
  /*
  NOTE: If you test this function in the console, remember to comment 
  out the test because this function will DESTRUCTIVELY alter the subscriptions 
  array.
  */
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #2 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  
  let subscriptionList = function(array){
    return array.reduce(function(acc, current){
       return acc + current.name + " - " + current.costPerMonth + "\n"
    }, "");
  };
  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #3 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  let getSubscriptionObject = function(){


   
  };
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #4 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  
  
  let updateSubscription = function(object, updates){
    for(let i = 0; i < updates.length; i++){
        let[property, value] = updates[i];
        object[property] = value
    }

    return object;
  };
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #5 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  let getMultipleUsers = function(array){
     return array.filter(function(sub){
      return sub.users.length > 1;
     });
  }; 
  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #6 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  let getUsersArray = function(array){
    return array.map(function(sub){
        const object = {};
        object.name = sub.name;
        object.users = sub.users;
        return object;
    })



   
  };
  
  
