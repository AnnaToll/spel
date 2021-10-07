/*
Med den kunskap ni fått från föregående 9 uppgifter, skapa spelet sten/sax/påse som kan spelas mot datorn. 
Spela det verkliga spelet med en vän för att se hur processen går till. 
Översätt sedan detta till pseudokod eller en flowchart innan ni börjar programmera. 
Kom ihåg att bryta ner problemet i flera moduler och få dessa att funka separat.

Parprogrammering uppmuntras. Använd er av tekniker från tidigare uppgifter för att lösa denna uppgift.
*/


function spel() {
    
    let pointsComputer = 0,
    pointsPlayer = 0;

    let usersChoice,
    computerChoice;

    let options = ['sten', 'sax', 'påse'];
    
    
    for (let i = 1; i <= 3; i++) {

        computerChoice = options[Math.floor(options.length * Math.random())];

        do {

            if (i == 1) {
                usersChoice = prompt(`Vågar du anta utmaningen? Sten, sax eller påse mot datorn, där bäst av tre vinner :) Välj sten, sax eller påse.`).toLowerCase();    

            } else if (i == 2) {
                usersChoice = prompt(`Omgång 2, Ding ding!! Välj sten, sax eller påse.
                
            
        Poängställning: ${pointsComputer} (dator) / ${pointsPlayer} (du).`).toLowerCase();

            } else if (i == 3) {
                usersChoice = prompt(`Final Round! Spänningen är olidlig!! Välj sten, sax eller påse.
                
        Poängställning: ${pointsComputer} (dator) / ${pointsPlayer} (du).`).toLowerCase();
            }
                
            if (computerChoice == usersChoice) {
                    pointsComputer++;
                    pointsPlayer++;
                    alert(`Oavgjort, båda valde ${usersChoice}! Ni får ett poäng var :)`);
            } else if (
                (computerChoice == 'sten' && usersChoice == 'sax') 
            || (computerChoice == 'sax' && usersChoice == 'påse') 
            || (computerChoice == 'påse' && usersChoice == 'sten')
            ) {
                pointsComputer++;
                alert(`Åh nej!! Datorn valde ${computerChoice} och du valde ${usersChoice} :(( En poäng till datorn.`);
            } else if ((computerChoice == 'sten' && usersChoice == 'påse') 
            || (computerChoice == 'sax' && usersChoice == 'sten') 
            || (computerChoice == 'påse' &&  usersChoice == 'sax')) {
                pointsPlayer++;
                alert(`Bra jobbat!! Datorn valde ${computerChoice} och du valde ${usersChoice} :)`);
            } else {
                if (usersChoice == null || usersChoice == '') {
                    return;
                 } else {
                     alert(`Du kan inte spela spelet med ${usersChoice}. Endast sten, sax, eller påse är tillåtet. Försök igen :)`);
                 }  
            }
        } while (
            usersChoice != 'sten' 
            && usersChoice != 'sax' 
            && usersChoice != 'påse');

    console.log('Omgång' + i);
    console.log('your points' + pointsPlayer);
    console.log('computer points' + pointsComputer);
        
    }

    
    if (pointsPlayer == pointsComputer) {
        alert(`Matchen slutade oavgjort!! Du fick ${pointsPlayer} poäng och datorn fick ${pointsComputer} poäng :) Spela en gång till vetja :D `)
    } else if (pointsPlayer > pointsComputer) {
        alert(`Whooopwhoooop, grattis du vann matchen!! Det blev ${pointsPlayer} / ${pointsComputer} till dig :) Kan du klå datorn igen? Spela en gång till vetja :D`);
    } else if (pointsPlayer < pointsComputer) {
        alert(`Åh nej, du förlorade matchen!! Det blev ${pointsComputer} / ${pointsPlayer} till datorn :( Sugen på revansch? Spela en gång till vetja :D`);
    }
}


