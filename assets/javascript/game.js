<script type="text/javascript">

        var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var losses = 0; wins = 0; guessChoices = []; numGuesses = 9;


        document.onkeyup = function (event) {

            var userOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

            var userGuess = event.key; 
            var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

            if (userOptions.indexOf(userGuess) > -1) {

                if (userGuess != compGuess) {
                    numGuesses--;
                    guessChoices.push(userGuess);
                }

                if (userGuess === compGuess) {
                    wins++;
                    numGuesses = 9;
                    guessChoices = [];
                
                }
                if (numGuesses === 0) {

                    numGuesses = 9;
                    losses++;
                    guessChoices = [];

                }

                document.querySelector("#game").innerHTML =
                    "<h1> The Psychic Game </h1>" +
                    "<h3>Guess what letter I'm thinking of</h3>" +
                    "<h3>Wins: " + wins + "</h3>" +
                    "<h3>Losses: " + losses + "</h3>" +
                    "<h3>Guesses Left: " + numGuesses + "</h3>" +
                    "<h3>Your Guesses So Far: " + guessChoices.join(", ") + "</h3>";


            }
        };

    </script>