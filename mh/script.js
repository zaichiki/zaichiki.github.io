document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const doors = document.querySelectorAll('.door');
    const message = document.getElementById('message');
    const resetBtn = document.getElementById('reset-btn');
    const stayBtn = document.getElementById('stay-btn');
    const switchBtn = document.getElementById('switch-btn');
    const autoRunBtn = document.getElementById('auto-run-btn');
    const stopAutoBtn = document.getElementById('stop-auto-btn');
    const resetStatsBtn = document.getElementById('reset-stats-btn');
    
    // Statistics elements
    const stayWinsEl = document.getElementById('stay-wins');
    const stayLossesEl = document.getElementById('stay-losses');
    const stayPercentageEl = document.getElementById('stay-percentage');
    const switchWinsEl = document.getElementById('switch-wins');
    const switchLossesEl = document.getElementById('switch-losses');
    const switchPercentageEl = document.getElementById('switch-percentage');
    
    // Game state
    let gameState = {
        carDoor: null,
        selectedDoor: null,
        revealedDoor: null,
        gameStage: 'selection', // 'selection', 'decision', 'result'
    };
    
    // Statistics
    let stats = {
        stayWins: 0,
        stayLosses: 0,
        switchWins: 0,
        switchLosses: 0
    };
    
    // Auto-run state
    let autoRunning = false;
    let gamesRemaining = 0;
    let autoStrategy = null;
    
    // Initialize game
    initGame();
    
    // Event listeners
    resetBtn.addEventListener('click', resetGame);
    stayBtn.addEventListener('click', () => makeDecision('stay'));
    switchBtn.addEventListener('click', () => makeDecision('switch'));
    autoRunBtn.addEventListener('click', startAutoRun);
    stopAutoBtn.addEventListener('click', stopAutoRun);
    resetStatsBtn.addEventListener('click', resetStats);
    
    doors.forEach(door => {
        door.addEventListener('click', () => {
            const doorNumber = parseInt(door.id.replace('door', ''));
            
            // Initial door selection
            if (gameState.gameStage === 'selection' && !autoRunning) {
                selectDoor(doorNumber);
            }
            // Stay/Switch decision by clicking on doors
            else if (gameState.gameStage === 'decision' && !autoRunning) {
                // If clicking the originally selected door - STAY
                if (doorNumber === gameState.selectedDoor) {
                    makeDecision('stay');
                }
                // If clicking the remaining unopened door - SWITCH
                else if (doorNumber !== gameState.revealedDoor) {
                    makeDecision('switch');
                }
                // Clicking on the revealed door does nothing
            }
        });
    });
    
    // Functions
    function initGame() {
        // Place the car behind a random door (1, 2, or 3)
        gameState.carDoor = Math.floor(Math.random() * 3) + 1;
        gameState.selectedDoor = null;
        gameState.revealedDoor = null;
        gameState.gameStage = 'selection';
        
        // Reset door appearances
        doors.forEach(door => {
            door.classList.remove('selected', 'opened');
            const doorBack = door.querySelector('.door-back');
            doorBack.innerHTML = '';
        });
        
        // Update UI
        message.textContent = 'Choose a door!';
        stayBtn.disabled = true;
        switchBtn.disabled = true;
    }
    
    function resetGame() {
        initGame();
    }
    
    function selectDoor(doorNumber) {
        if (gameState.gameStage !== 'selection') return;
        
        gameState.selectedDoor = doorNumber;
        gameState.gameStage = 'decision';
        
        // Highlight selected door
        doors.forEach(door => door.classList.remove('selected'));
        document.getElementById(`door${doorNumber}`).classList.add('selected');
        
        // Host reveals a door with a goat
        revealGoatDoor();
        
        // Update UI
        message.textContent = 'The host has revealed a goat! Click on your door to STAY or the other closed door to SWITCH. You can also use the buttons below.';
        stayBtn.disabled = false;
        switchBtn.disabled = false;
    }
    
    function revealGoatDoor() {
        // Host must: 
        // 1. Not open the door with the car
        // 2. Not open the door the player selected
        // 3. Open a door with a goat
        
        let availableDoors = [1, 2, 3].filter(door => 
            door !== gameState.selectedDoor && door !== gameState.carDoor
        );
        
        // If player selected the car door, there are two goat doors to choose from
        gameState.revealedDoor = availableDoors.length > 1 
            ? availableDoors[Math.floor(Math.random() * availableDoors.length)] 
            : availableDoors[0];
        
        // Open the door to reveal a goat
        const doorEl = document.getElementById(`door${gameState.revealedDoor}`);
        doorEl.classList.add('opened');
        
        // Add goat image to the revealed door
        const doorBack = doorEl.querySelector('.door-back');
        doorBack.innerHTML = '🐐';
        doorBack.style.fontSize = '80px';
    }
    
    function makeDecision(decision) {
        if (gameState.gameStage !== 'decision') return;
        
        gameState.gameStage = 'result';
        let finalDoor;
        
        if (decision === 'stay') {
            finalDoor = gameState.selectedDoor;
            // Update stats
            if (finalDoor === gameState.carDoor) {
                stats.stayWins++;
            } else {
                stats.stayLosses++;
            }
        } else { // switch
            // The remaining door is the one that's not selected and not revealed
            finalDoor = [1, 2, 3].find(door => 
                door !== gameState.selectedDoor && door !== gameState.revealedDoor
            );
            
            // Update selected door highlight
            doors.forEach(door => door.classList.remove('selected'));
            document.getElementById(`door${finalDoor}`).classList.add('selected');
            
            // Update stats
            if (finalDoor === gameState.carDoor) {
                stats.switchWins++;
            } else {
                stats.switchLosses++;
            }
        }
        
        // Reveal all doors
        revealAllDoors();
        
        // Update UI
        updateStats();
        
        if (finalDoor === gameState.carDoor) {
            message.textContent = `You won! The car was behind door ${gameState.carDoor}.`;
        } else {
            message.textContent = `You lost! The car was behind door ${gameState.carDoor}.`;
        }
        
        stayBtn.disabled = true;
        switchBtn.disabled = true;
        
        // If auto-running, continue to next game
        if (autoRunning) {
            continueAutoRun();
        }
    }
    
    function revealAllDoors() {
        for (let i = 1; i <= 3; i++) {
            const doorEl = document.getElementById(`door${i}`);
            const doorBack = doorEl.querySelector('.door-back');
            
            if (i !== gameState.revealedDoor) { // Don't modify already revealed door
                doorEl.classList.add('opened');
                
                if (i === gameState.carDoor) {
                    // Add car emoji
                    doorBack.innerHTML = '🚗';
                    doorBack.style.fontSize = '80px';
                } else {
                    // Add goat emoji
                    doorBack.innerHTML = '🐐';
                    doorBack.style.fontSize = '80px';
                }
            }
        }
    }
    
    function updateStats() {
        // Update display
        stayWinsEl.textContent = stats.stayWins;
        stayLossesEl.textContent = stats.stayLosses;
        switchWinsEl.textContent = stats.switchWins;
        switchLossesEl.textContent = stats.switchLosses;
        
        // Calculate percentages
        const stayTotal = stats.stayWins + stats.stayLosses;
        const switchTotal = stats.switchWins + stats.switchLosses;
        
        const stayPercentage = stayTotal > 0 ? Math.round((stats.stayWins / stayTotal) * 100) : 0;
        const switchPercentage = switchTotal > 0 ? Math.round((stats.switchWins / switchTotal) * 100) : 0;
        
        stayPercentageEl.textContent = `${stayPercentage}%`;
        switchPercentageEl.textContent = `${switchPercentage}%`;
    }
    
    function resetStats() {
        stats = {
            stayWins: 0,
            stayLosses: 0,
            switchWins: 0,
            switchLosses: 0
        };
        updateStats();
    }
    
    function startAutoRun() {
        if (autoRunning) return;
        
        autoRunning = true;
        gamesRemaining = 100;
        
        // Randomly choose stay or switch for this batch
        autoStrategy = Math.random() < 0.5 ? 'stay' : 'switch';
        
        message.textContent = `Auto-running 100 games with ${autoStrategy} strategy...`;
        autoRunBtn.disabled = true;
        stopAutoBtn.disabled = false;
        
        // Start the auto-run process
        runNextAutoGame();
    }
    
    function runNextAutoGame() {
        if (!autoRunning || gamesRemaining <= 0) {
            stopAutoRun();
            return;
        }
        
        // Reset the game
        initGame();
        
        // Randomly select a door
        const randomDoor = Math.floor(Math.random() * 3) + 1;
        selectDoor(randomDoor);
        
        // Add a small delay to make the animation visible
        setTimeout(() => {
            makeDecision(autoStrategy);
        }, 100);
    }
    
    function continueAutoRun() {
        gamesRemaining--;
        
        if (gamesRemaining > 0) {
            // Update message with remaining games
            message.textContent = `Auto-running with ${autoStrategy} strategy. ${gamesRemaining} games remaining...`;
            
            // Add a small delay between games
            setTimeout(runNextAutoGame, 50);
        } else {
            stopAutoRun();
            message.textContent = `Auto-run complete! Check the statistics.`;
        }
    }
    
    function stopAutoRun() {
        autoRunning = false;
        gamesRemaining = 0;
        autoRunBtn.disabled = false;
        stopAutoBtn.disabled = true;
        
        if (gameState.gameStage === 'result') {
            message.textContent = `Auto-run stopped. The car was behind door ${gameState.carDoor}.`;
        } else {
            initGame();
            message.textContent = 'Auto-run stopped. Choose a door to play manually!';
        }
    }
});
