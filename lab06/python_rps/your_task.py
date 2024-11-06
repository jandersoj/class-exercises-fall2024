def hello_world():
    return "Hello world!"


def rps(hand1, hand2):
    # finish this code:

    if (hand1 == "rock" and hand2 == "paper") or (hand1 == "paper" and hand2 == "rock"):
        return "Paper wins!"
    if (hand1 == "rock" and hand2 == "scissors") or (
        hand1 == "scissors" and hand2 == "rock"
    ):
        return "Rock wins!"
    if (hand1 == "scissors" and hand2 == "paper") or (
        hand1 == "paper" and hand2 == "scissors"
    ):
        return "Scissors wins!"
    if (hand1 == "scissors" and hand2 == "scissors") or (
        hand1 == "paper" and hand2 == "paper") or (
        hand1 == "rock" and hand2 == "rock"
    ):
        return "Tie!"
    else:
        return "Invalid"
