var cpu = 0;
var hum = 0;

do {

    var user = 0;
    var computer = 0;;

    do {


        var r = Math.floor(Math.random() * 10) + 1;
        
        computer = computer + r

        alert(`Computer got number ${r}\n\n New computer total is ${computer}`)
    } while (computer < 16)


    do {


        var n = Math.floor(Math.random() * 10) + 1;
        
        user = user + n

        var question = prompt(`user got number ${n}\n\n New user total is ${user}\n\n Would you like a new number? Press n to exit `)

        
    } while ((user < 20) && (question != "n"))

    if ((computer > user) && (computer < 21)) {
        cpu++
        alert('The computer wins!')

    } else if ((user > computer) && (user < 21)) {
        hum++
        alert('The user wins!')

    } else if ((computer > 20) && (user > 20)){
        alert('Nobody wins :(')

    } else if (computer == user){
        alert("It's a tie :(")
    }

    alert(`Final score. Computer: ${cpu}. Human: ${hum}.`)

    //question 
    
    var question2 = prompt("Would you like to play again? If so press 'y', if not press 'n' ")

} while (question2 == 'y')