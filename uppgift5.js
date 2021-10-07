/*
Med den kunskap ni fått från föregående 9 uppgifter, skapa spelet sten/sax/påse som kan spelas mot datorn. 
Spela det verkliga spelet med en vän för att se hur processen går till. 
Översätt sedan detta till pseudokod eller en flowchart innan ni börjar programmera. 
Kom ihåg att bryta ner problemet i flera moduler och få dessa att funka separat.

Parprogrammering uppmuntras. Använd er av tekniker från tidigare uppgifter för att lösa denna uppgift.
*/

/* let gameChoices = ['sten', 'sax', 'påse'];

let randomChoice = gameChoices[2];

console.log(randomChoice);
console.log(gameChoices.length);

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];*/

function spel() {
    let counter = 0;
    
    let pointsComputer = 0,
    pointsPlayer = 0;
    
    var nummer = Math.random();
    console.log(nummer);
    
    var nummer2 = Math.random();
    console.log(nummer2);
    
    var nummer3 = Math.random();
    console.log(nummer3);
    
    do {
    
        counter++;
    
        if (counter == 1) {
            nummer = nummer;
        } else if (counter == 2) {
            nummer = nummer2;
        } else {
            nummer = nummer3;
        }

    
        if (nummer >= 0 && nummer < 0.333) {
            nummer = 'sten';
        } else if (nummer >= 0.333 && nummer < 0.666) {
            nummer = 'sax';
        } else {
            nummer = 'påse';
        }

        
        console.log(nummer);
    
        let usersChoice;
        

        do {

            if (counter == 1) {
                usersChoice = prompt(`Vågar du anta utmaningen? Sten, sax eller påse mot datorn, där bäst av tre vinner :) Välj sten, sax eller påse.`).toLowerCase();    

            } else if (counter == 2) {
                usersChoice = prompt(`Omgång 2, Ding ding!! Välj sten, sax eller påse.
                
            
        Poängställning: ${pointsComputer} (dator) / ${pointsPlayer} (du).`).toLowerCase();

            } else if (counter == 3) {
                usersChoice = prompt(`Final Round! Spänningen är olidlig!! Välj sten, sax eller påse.
                
        Poängställning: ${pointsComputer} (dator) / ${pointsPlayer} (du).`).toLowerCase();
            }
                
            if (nummer == usersChoice) {
                    pointsComputer++;
                    pointsPlayer++;
                    alert(`Oavgjort, båda valde ${usersChoice}! Ni får ett poäng var :)`);

            } else if ((nummer == 'sten' && usersChoice == 'sax') 
            || (nummer == 'sax' && usersChoice == 'påse') 
            || (nummer == 'påse' && usersChoice == 'sten')) {
                pointsComputer++;
                alert(`Åh nej!! Datorn valde ${nummer} och du valde ${usersChoice} :(( En poäng till datorn.`);

            } else if ((nummer == 'sten' && usersChoice == 'påse') 
            || (nummer == 'sax' && usersChoice == 'sten') 
            || (nummer == 'påse' &&  usersChoice == 'sax')) {
                pointsPlayer++;
                alert(`Bra jobbat!! Datorn valde ${nummer} och du valde ${usersChoice} :)`);

            } else {
                if (usersChoice == null || usersChoice == '') {
                    return;
                 } else {
                     alert(`Du kan inte spela spelet med ${usersChoice}. Endast sten, sax, eller påse är tillåtet. Försök igen :)`);
                 }  
            }
        } while (usersChoice != 'sten' && usersChoice != 'sax' && usersChoice != 'påse');


    console.log('Omgång' + counter);
    console.log('your points' + pointsPlayer);
    console.log('computer points' + pointsComputer);

        
    } while (counter < 3);

    
    if (pointsPlayer == pointsComputer) {
        alert(`Matchen slutade oavgjort!! Du fick ${pointsPlayer} poäng och datorn fick ${pointsComputer} poäng :) Spela en gång till vetja :D `)

    } else if (pointsPlayer > pointsComputer) {
        alert(`Whooopwhoooop, grattis du vann matchen!! Det blev ${pointsPlayer} / ${pointsComputer} till dig :) Kan du klå datorn igen? Spela en gång till vetja :D`);

    } else if (pointsPlayer < pointsComputer) {
        alert(`Åh nej!! Det blev ${pointsComputer} / ${pointsPlayer} till datorn :( Sugen på revansch? Spela en gång till vetja :D`);
    }
}


