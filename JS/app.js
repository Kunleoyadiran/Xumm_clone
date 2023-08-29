const canSmokeAge = prompt(`Enter your age`);

if(canSmokeAge < 18){
    console.log(`You are ${canSmokeAge}, so come back when you are 18!`);
}

else if(canSmokeAge == 18){
    console.log(`You just clocked ${canSmokeAge}! welcome to adulthood`);
}

else{
    console.log(`You are above 18 and note smokers are liable to die young`);
}

for(let i= 0; i<=10; i++){
    console.log(i);


}

let li = document.getElementById('nav_link')
li.setAttribute('nav_link','h1')

