"""
Run these tests from the CLI (from within the python_rps directory)
as follows:

    python3 run_tests_vanilla.py

"""

from helpers import assert_print, run_all_tests
from your_task import hello_world, rps


def test_hello_world():
    return assert_print(hello_world() == "Hello world!", 'It returns "Hello world!"')


def test_paper_beats_rock():
    return assert_print(
        rps("rock", "paper") == "Paper wins!",  # condition to check
        "Paper beats rock",  # output message
    )


def test_paper_beats_rock_flipped():
    return assert_print(
        rps("paper", "rock") == "Paper wins!",  # condition to check
        "Paper beats rock (flipped)",  # output message
    )


def test_rocks_beats_scissors():
    return assert_print(
        rps("rock", "scissors") == "Rock wins!",
        "rock beats scissors",
    )


def test_rocks_beats_scissors_flipped():
    return assert_print(
        rps("scissors", "rock") == "Rock wins!",
        "rock beats scissors (flipped)",
    )


def test_scissors_beat_paper():
    return assert_print(
        rps("scissors", "paper") == "Scissors wins!",
        "scissors beat paper",
    )


def test_scissors_beat_paper_flipped():
    return assert_print(
        rps("paper", "scissors") == "Scissors wins!",
        "scissors beats paper (flipped)",
    )


def test_tie():
    return assert_print(rps("paper", "paper") == "Tie!" and rps(
        "scissors", "scissors") == "Tie!" and rps("rock", "rock") == "Tie!",
        "all possible ties work!",
    )


def test_valid():
    return assert_print(rps("paper", "NOTpaper") == "Invalid" and rps(
        "NOTscissors", "scissors") == "Invalid",
        "the validity checks work!",
    )


# Once you have defined each test function, don't forget to
# add the function definition to the test harness:
run_all_tests(
    [
        test_hello_world,
        test_paper_beats_rock,
        test_paper_beats_rock_flipped,
        test_rocks_beats_scissors,
        test_rocks_beats_scissors_flipped,
        test_scissors_beat_paper,
        test_scissors_beat_paper_flipped,
        test_tie,
        test_valid,
    ]
)
