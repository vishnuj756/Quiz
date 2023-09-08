let countdownInterval;

        function startQuiz() {
            document.getElementById("on").style.display = "block";
            countdownInterval = setInterval(timer, 1000);
        }

        function timer() {
            const countElement2 = document.getElementById("time");
            let count2 = parseInt(countElement2.textContent);

            if (count2 === 0) {
                clearInterval(countdownInterval);
                // Handle what happens when the timer reaches 0 (e.g., end the quiz).
                window.location.href='index.html';
            } else {
                count2--;
                countElement2.textContent = count2;
            }
        }