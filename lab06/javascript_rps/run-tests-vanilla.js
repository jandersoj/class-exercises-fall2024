import { helloWorld, rps } from "./your-task.js";
import { assertPrint, runAllTests } from "./helpers.js";

function testHelloWorld() {
    return assertPrint(
        helloWorld() === "Hello world!",
        'it returns "Hello world!"',
    );
}

function testPaperBeatsRock() {
    return assertPrint(
        rps("rock", "paper") === "Paper wins!",
        "paper beats rock",
    );
}

function testPaperBeatsRockCommutes() {
    return assertPrint(
        rps("paper", "rock") === "Paper wins!",
        "paper beats rock (flipped)",
    );
}

// add more test functions here to exhaustively test your rps function...

//yes ma'am will do

function testRocksBeatsScissors() {
    return assertPrint(
        rps("rock", "scissors") === "Rock wins!",
        "rock beats scissors",
    );
}

function testRocksBeatsScissorsCommutes() {
    return assertPrint(
        rps("scissors", "rock") === "Rock wins!",
        "rock beats scissors (flipped)",
    );
}

function testScissorsBeatPaper() {
    return assertPrint(
        rps("scissors", "paper") === "Scissors wins!",
        "scissors beat paper",
    );
}

function testScissorsBeatPaperCommutes() {
    return assertPrint(
        rps("paper", "scissors") === "Scissors wins!",
        "scissors beats paper (flipped)",
    );
}

function testTie() {
    return assertPrint(
        rps("paper", "paper") === "Tie!" &&
            rps("scissors", "scissors") === "Tie!" &&
            rps("rock", "rock") === "Tie!",
        "all possible ties work!",
    );
}

function testValid() {
    return assertPrint(
        rps("paper", "NOTpaper") === "Invalid" &&
            rps("NOTscissors", "scissors") === "Invalid",
        "the validity checks work!",
    );
}
// Once you have defined each test function, don't forget to
// add the function definition to the test harness:
runAllTests([
    testHelloWorld,
    testPaperBeatsRock,
    testPaperBeatsRockCommutes,
    testRocksBeatsScissors,
    testRocksBeatsScissorsCommutes,
    testScissorsBeatPaper,
    testScissorsBeatPaperCommutes,
    testTie,
    testValid,
]);
