//Assignment No1.
//installation Comleted

// Assinment No2
// let personName="Erick";
// console.log(`Hello ${personName},would you like to learn some python today?`);

// Assignment No3.
// let PersonName="Muhammad Ahsan";
// // in lowercase.
// console.log("lowercase:", PersonName.toLowerCase());
// // in Uppercase.
// console.log("Uppercase:", PersonName.toUpperCase());
// // in titlecase.
// console.log("titlecase:", PersonName.replace(/\b\w/g,c=> c.toUpperCase()));

// // Assingment No4.
// let quote="A person who never made a mistake never tried anything new.";
// let author="Albert Einstein";
// console.log(`${author} once said, "${quote}"`);

// // Assignment No5.
// let famous_person="Albert Einstein";
// let message=`${famous_person} once said, "${quote}"`;
// console.log(message);

// // Assignment No6.
// let personName="\t\nMuhammad Ahsan\n\t";
// console.log("Orignal:", personName);
// console.log("Stripping:", personName.trim());

// // Assignment No 7 & 8.
// console.log(5+3);
// console.log(11-3);
// console.log(2*4);
// console.log(16/2);

// // Assignment No9.
// let FavNmber=10;
//reaveling My Fav Number in a Message Format.
// console.log(`My Fav Number is ${FavNmber}.`);

// Assignment No10.
//date:[Saturaday , Febuary 24 , 2024]
//author:[Muhammad Ahsan]
//task 9:Printing My Fav Number.

// //Assignment No11.
// let names :string[]=["Ahsan","Ali","Ahmed","Usman","Zain"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);

// // Assignment No12
// let names :string[]=["Ahsan","Ali","Ahmed","Usman","Zain"];
// let message:string="What's is your Fav Food?";
// console.log(names[0]+" "+message)
// console.log(names[1]+" "+message)
// console.log(names[2]+" "+message)
// console.log(names[3]+" "+message)
// console.log(names[4]+" "+message)

// // Assignment No13.
// let tranportation :string[]=["Yahma Motercycle","Rx8 Car","Toyota Supra"]
// tranportation.map((items) => console.log(`I would like to own a ${items}`));

// //Assignment No14.
// let guestArr :string[]=["Ahsan","Ali","Ahmed"];
// guestArr.map((items) =>(console.log(`Dear ${items}, You Are invented To The Dinner.`)))

// //Assignment No15.
// let guestArr:string[]=["Ahsan","Ahram","Saad","Haseeb"]
// let canNotattend:string="Ahsan"
// //console.log(canNotattend+" "+"Can Not Attend The Dinner.");
// let newGuest : string ="Farhan";
// guestArr [guestArr.indexOf(canNotattend)]=newGuest;
// //console.log(guestArr);
// guestArr.map((items)=>
//     console.log(`Dear ${items}, You are invited to the dinner.`)
// // )

// //Assignment No16.
// let guestArr:string[]=["Farhan","Ahram","Saad","Haseeb"]
// let canNotattend :string="Haseeb"
// let newGuest:string="Ali"
// guestArr[guestArr.indexOf(canNotattend)]=newGuest;
// // console.log(guestArr);
// // guestArr.map((items)=>
// // console.log(`Dear ${items}, I Found The Bigger Table So I am invited more peoples.`)
// // );
// //Part No2 Began.
// let guestBeg:string="Sohail"
// guestArr.unshift(guestBeg);
// // console.log(guestArr);
// //Part No3 Middle.
// let middleGuest : string="Asad"
// let middleIndex = guestArr.length/3
// guestArr.splice(middleIndex,3,middleGuest)
// // console.log(guestArr);
// //Part No4 Appended.
// guestArr.push("Zesshan");
// // console.log(guestArr);
// //Part No5.
// guestArr.map((items) =>
// // console.log(`Dear ${items}, your are invited in the more people list on dinner.`));

// //Assignment No 17.
// let guests : string[]=["Ali","Haider","Bilal","Hamza","Dawood"]
// // console.log("Due to limited space,two people can be invited for dinner")
// while(guests.length > 2) {
//     const removedGuest = guests.pop();
//     console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
// }
// guests.forEach((guest)=>{
//     console.log(`Dear ${guest}, youre still invited to dinner.`);
// })
// guests.pop();
// guests.pop();
// console.log("Final guest list:",guests);

// //Assignment No18.
// let placeToVisit:string[]=["Tokyo","Pakistan","NewZeland","SouthAfrica","Austerlia"]
// console.log("Original order:",placeToVisit);
// console.log("Alphabetical order:", [...placeToVisit].sort());
// console.log("Original order after sorting:", placeToVisit);
// console.log("Reverse Alphabetrical order:", [...placeToVisit].sort().reverse());
// console.log("Original order after Reverse Sorting", placeToVisit);
// placeToVisit.reverse();
// console.log("Reversed order:", placeToVisit);
// placeToVisit.reverse();
// console.log("Back to Original order:", placeToVisit);
// placeToVisit.sort();
// console.log("Sorted in Alphaberical order:",placeToVisit);
// placeToVisit.sort((a,b) => b.localeCompare(a))
// // console.log("Sorted in Alphabetrical order:", placeToVisit);

// //Assignment No19.
// let invitations:string[]=["Ail","Haider"];
// let count_invitations:number=invitations.length
// console.log(`${count_invitations} People will come to the dinner.`);

// //Assignment No20.
// let country :string[]=["Pakisatn","India","Canada","America","Russia"]
// console.log("List Of Country:");
// console.log(country);

// //Assignemnt No21.
// let person:{name:string ,fname:string ,age:number}={name:"Muhammad Ahsan" ,fname:"Ahsan Ali" ,age:15}
// console.log(person);

// //Assignment No22.
// const days:string[]=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturaday"];
// // console.log(days{7});
// console.log(days[6]);

// //Assignment No23.
// let car ="subaru";
// console.log("is car == 'subaru'? predict true");
// console.log(car=='subaru');
// console.log("is car != 'hoda civik'? predict true"); 
// console.log(car != 'honda civik');
// console.log("is car == 'Subaru'?predict false");
// console.log(car == 'Subaru');
// console.log("is car == 'SUBARU'?predict false");
//  console.log(car == 'SUBARU');
// console.log("is car.length==3? predict false");
// console.log(car.length == 3);
// console.log("is car.length !=7? predict true");
// console.log(car.length != 7);
// console.log("is 66 > 16 ? predict true");
// console.log(66> 16);
// console.log("is 7 <= 4 ? predict false");
// console.log(7 <= 4);
// console.log("is 73 >= 93 ? predict false");
// console.log(73 >= 93);
// console.log("is car == 'subaru' && car.length == 6? predict true");
// console.log(car == 'subaru' && car.length == 6);

//Assignment No24.
//let name_1:string="Ahsan"
// let name_2:string="Muhammad Ahsan"
// let name_3:string="Muhammad Ahsan Hussain"
// if(name_1 == name_3){
//     console.log("name are equal");
// }else{
//     console.log("name are not equal");
// }
// if(name_1 != name_2){
//     console.log("names are equal");
// } 
// if(name_1 != name_3){
//     console.log("names are equal");
// } 
    //  let age_1:number=18
    //  let age_2:number=22
    // if (age_1 == 18){
    //     console.log("eligible for vote");
    // }
    // if (age_1 != 22){
    //          console.log("eligible for vote in older category");
    //      }
    // if (age_1 <= age_2){
    //     console.log("younger");  
    // }
    // if (age_2 >= age_1){
    //     console.log("older");  
    // }
    //  if (age_1 == 18 && age_2 == 22){
    //     console.log("person is eligible for vote");
    //  }
     //if (age_1 == 18 || age_2 != 22){
       // console.log("person is eligible is not for vote");
    // }
  //let country:string[]= ["Pakistan","India","China","Japan"]
//  if (country.includes("Pakistan")){
//     console.log("Pakistan is an country list");
//  }
//  if (!country.includes("America")){
//     console.log("America is not include in an array");
// }

// //Assignment No25.
// // let alien_color="red";
// // if (alien_color =="red")
// // console.log("you earn 5 points");
// let alien_color : string = "yellow"
// if (alien_color == "red")
// console.log("No Output");

//Assignment No26.
//   let alien_color  = "yellow"
//   if (alien_color == "yellow"){
//   console.log("Player just earned  5 points for shooting the alien ");
//   }else { 
//     console.log("player just earned 10 points.");
//   }
//   let alien_color  = "green"
//   if (alien_color == "yellow"){
//   console.log("Player just earned  5 points for shooting the alien ");
//   }else { 
//     console.log("player just earned 10 points.");
//   }

// //Assignment No27.
// let alien_color:string="red"
// if (alien_color == "green"){
//     console.log("the player earned 5 points.");
// }else if (alien_color == "yellow"){
//     console.log(" the player earned 10 points.");   
// }else {
//     console.log("the player earned 15 points.");
// }

// //Assignment No28.
// let age:number=58
// if (age < 2){
//     console.log("the person is a baby.");
// }else if (age < 4){
//     console.log("the person is a toddler");
// }else if (age < 13){
//     console.log("the person is a kid");   
// }else if(age < 20){
//     console.log("that the person is a teenager.");
// }else if (age < 65){
//     console.log("the person is an adult.");
// }else{
//     console.log(" the person is an elder.");
// }

// //Assignment No29.
// let favourite_fruite:string[]=["Mango","Orange","Apples","peach","berry"]
// if (favourite_fruite.includes("Mango")){
//     console.log("Mango");
// }
// if (favourite_fruite.includes("Orange")){
//     console.log("Orange");
// }
// if (favourite_fruite.includes("Apples")){
//     console.log("Apples");
// }
// if (favourite_fruite.includes("peach")){
//     console.log("You Realy Like Bananas");
// } 
// if (favourite_fruite.includes("berry")){
//     console.log("You Really Like Bananas");
// }

// //Assignment No30.
// let users : string[]= ["erick","haseeb","ali","fatima","admin"]
// for(let user of users){
//     if (user === "admin"){
//         console.log("Hello admin, would you like to see a status report?");
//     }else {
//         console.log(`Hello ${user}, thank you for logging in again`);       
//     }
// }

// //Assignment No31.
// let users : string[]= ["erick","haseeb","ali","fatima","admin"]
// if (users.length === 0){
//     console.log("We need to find the some users!");
// }else {
//     for (let user of users){
//         if (user === "admin"){
//         console.log("Hello admin, would you like to see a status report?");
//         }else {
//             console.log(`Hello ${user}, thank you for logging in again`);
//         }
//     }
// }
// users = []
// if (users.length === 0){
//     console.log("We need to find some users!");
// }

// //Assignment No32.
// let current_users : string[]=["admin","Erick","Ali","Hamza","fatima"]
// let new_users :string[]=["admin","fatima","Aliza","Haseeb","Noor"]
// let  current_users_lower: string[] = current_users.map(user => user.toLowerCase())
// for (let new_user of new_users){
//     if (current_users_lower.includes(new_user.toLowerCase())){
//         console.log(`Sorry ${new_users}, that name is taken`);
//     }else {
//         console.log(`Yes ${new_user}, is still in available list`);
//     }
// }

// //Assignment No33.
// let numbers :number[]= [1,2,3,4,5,6,7,8,9]
// for (let number of numbers){
// if (number === 1){
//     console.log(`${number}st`);
// }else if (number === 2) {
//     console.log(`${number}nd`);
// }else if (number === 3) {
//     console.log(`${number}rd`);
// }else if (number === 4) {
//     console.log(`${number}th`);
// }else {
//     console.log(`${number}th`);
// }
// }

// //Assignment No34.
// let favourite_pizza:string[]=["Pepperoni","Chicken","Veg"]
// for (let pizza of favourite_pizza){
//     console.log(pizza);
// }
// console.log("\n");
// for(let pizza of favourite_pizza){
//     console.log(`I Really Like ${pizza} Pizza!.`);
// }
// console.log("I Really Love Pizza");

// //Assignment No35.
// let animals :string[]= ["Lion","Cat","Dog"] 
// for (let animal of animals){
//     console.log(animal);
// } 
// console.log("\n");
// for(let animal of animals){
// console.log(`A ${animal} Has a Tail`);
// } 
// console.log("\n All of these are great pets! but i love Lion more ");

// //Assignment No36.
// function makeShirt(size:string, Text :string):void {
// console.log(`You order a ${size} shirt that says ${Text}`);
// }
// makeShirt('large','"I love typescript"')
// makeShirt('medium','"I need the big shirt"')

// //Assignment No37.
// function makeShirt (size:string = 'large', text:string = 'I love typescript'):void{
//     console.log(`You have order a ${size}, shirt that says ${text}`);
// }
// makeShirt();
// makeShirt('medium');
// makeShirt('small', 'I need the big shirt to wear')

// //Assignment No38.
// function describe_city(city:string,country:string='Pakistan'){
//     console.log(`${city} is in ${country}`);
// }
// describe_city('Karachi')
// describe_city('Farance','Europe')
// describe_city('Lahore' ,'punjab')

// //Assignment No39.
// function cityCountry(city:string, country:string):string{
//     return`${city},${country}`
// }
// let c1 = cityCountry('Lahore','Pakistan')
// let c2 = cityCountry('Tokyo','Japan')
// let c3 = cityCountry('Paris','Farance')
// console.log(c1);
// console.log(c2);
// console.log(c3);

// //Assignment No40.
// function makeAlbum (artist:string, title:string):{artist:string, title:string}{
//     const dictionaries = {
//         artist:artist.charAt(0).toUpperCase() + artist.slice(1),
//         title:title.charAt(0).toUpperCase() + title.slice(1)
//     }
//     return dictionaries;
// }
// let album = makeAlbum("ali","light")
// console.log(album);
// album = makeAlbum("hamza","blue")
// console.log(album);
// album = makeAlbum("sufiyan","green")
// console.log(album);

// //Assignment No41.
// function show_magicians(magicians:string[]): void {
//     for(const magician of magicians){
//         console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//     }
// }
// const magician :string[]=["ali","abbas","bilal"]
// show_magicians(magician)

// //Assignment No42.
// function make_great(magicians:string[]):void{
// for(let i = 0; i < magicians.length; i++){
//     magicians[i] = magicians[i] + ' the great'
// }
// } 
// const magicians2:string[]=["ali","abbas","bilal"]
// make_great(magicians2)
// show_magicians(magicians2);

// //Assignment No43.
// function make_great2(magicians:string[]):string[]{
//     const greatMagicians:string[]=[];
//     for (let i = 0; i < magicians.length; i++){
//         greatMagicians.push(magicians[i] + ' the great');
//     }
//     return greatMagicians;
// }
// const magicians3:string[]=["ali","abbas","bilal"]
// const greatMagicians2:string[]= make_great2(magicians3);
// show_magicians(magicians3);
// show_magicians(greatMagicians2);

// //Assignment No44.
// function sandwich(...items:string[]):void {
//     console.log("Sandwich Order:");
//     for (let i = 0; i < items.length; i++) {
//         console.log(`- ${items[i]}`);
//     }
// }
// console.log("Enjoy your sandwich Muhammad Ahsan");
// sandwich("Capcigum", "Tomato", "Chicken");
// sandwich("Beef", "Cheese");
// sandwich("Garlic Chicken", "Mayo Sauce");

// //Assignment No45.
// type car ={
//     manufacture :string
//     model:string
//     [key:string]:any;
// }
// function createCar(manufacture:string, model:string, optional:Record<string,any>){
//     return{
//         manufacture,
//         model,
//         ...optional
//     }
// }
// const myCar:car=createCar("Toyota","Corolla",{color:"silver",year:"2024"})
// console.log(myCar);
