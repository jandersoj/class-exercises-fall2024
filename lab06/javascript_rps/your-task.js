export function helloWorld() {
    return "Hello world!";
}

/*
Implement the following logic and return the corresponding message (exactly as it is shown below):
* If one hand is rock and the other is paper, return the string "Paper wins!"
* If one hand is paper and the other is scissors, return the string "Scissors wins!"
* If one hand is scissors and the other is rock, return the string "Rock wins!"
* If both hands are the same (and have valid arguments), return "Tie!"
* If anything other than rock, paper, or scissors are passed in, return "Invalid"
*/
export function rps(hand1, hand2) {
    if (validity(hand1) == false || validity(hand2) == false) return "Invalid";

    if (
        (hand1 === "rock" && hand2 === "paper") ||
        (hand1 === "paper" && hand2 === "rock")
    )
        return "Paper wins!";
    if (
        (hand1 === "rock" && hand2 === "scissors") ||
        (hand1 === "scissors" && hand2 === "rock")
    )
        return "Rock wins!";
    if (
        (hand1 === "scissors" && hand2 === "paper") ||
        (hand1 === "paper" && hand2 === "scissors")
    )
        return "Scissors wins!";
    if (
        (hand1 === "scissors" && hand2 === "scissors") ||
        (hand1 === "paper" && hand2 === "paper") ||
        (hand1 === "rock" && hand2 === "rock")
    )
        return "Tie!";
}

//in case future josie takes on like. a giant rps project or something.
function validity(input) {
    if (input === "rock" || input === "scissors" || input === "paper") {
        return true;
    } else {
        return false;
    }
}
