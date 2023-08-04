function updateTimer() {
            const timerElement = document.getElementById("timer");
            const now = new Date();

            const dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

            const dateStr = now.toLocaleDateString(undefined, dateOptions);
            const timeStr = now.toLocaleTimeString(undefined, timeOptions);

            timerElement.textContent = `${dateStr}, ${timeStr}`;
        }

        // Initial update
        updateTimer();

        // Update the timer every second (1000 milliseconds)
        setInterval(updateTimer, 1000);