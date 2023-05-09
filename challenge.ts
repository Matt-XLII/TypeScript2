const prettyPrintWilder = (users:Person[]) => {
    users.map((user : Person) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  
  interface Person{
    name:string,
    age:number
  }
  
  const wilders = [];
  const user1 = { name: "Pierre", age: 23 };
  const user2 = { name: "Paul", age:33 };
  const user3 = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);