document.addEventListener('DOMContentLoaded', () => {
    // Translations
    const translations = {
        en: {
            'title': 'The Monty Hall Problem',
            'intro': 'The Monty Hall problem is a famous probability puzzle:',
            'step1': 'There are three doors, behind one is a car, behind the others are goats.',
            'step2': 'You pick a door, hoping to win the car.',
            'step3': 'The host, who knows what\'s behind each door, opens one of the other doors to reveal a goat.',
            'step4': 'The host then asks if you want to stick with your original choice or switch to the remaining door.',
            'step5': 'What should you do? Is it better to switch or stay?',
            'choose-door': 'Choose a door!',
            'revealed-goat': 'The host has revealed a goat! Click on your door to STAY or the other closed door to SWITCH. You can also use the buttons below.',
            'you-won': 'You won! The car was behind door {0}.',
            'you-lost': 'You lost! The car was behind door {0}.',
            'new-game': 'New Game',
            'stay': 'Stay',
            'switch': 'Switch',
            'auto-run': 'Auto Run 100 Games',
            'stop-auto': 'Stop',
            'auto-running': 'Auto-running 100 games with {0} strategy...',
            'auto-running-remaining': 'Auto-running with {0} strategy. {1} games remaining...',
            'auto-complete': 'Auto-run complete! Check the statistics.',
            'auto-stopped': 'Auto-run stopped. The car was behind door {0}.',
            'auto-stopped-manual': 'Auto-run stopped. Choose a door to play manually!',
            'stats-title': 'Statistics',
            'stay-strategy': 'Stay Strategy',
            'switch-strategy': 'Switch Strategy',
            'stay-option': 'Stay Strategy',
            'switch-option': 'Switch Strategy',
            'wins-label': 'Wins:',
            'losses-label': 'Losses:',
            'win-rate-label': 'Win Rate:',
            'reset-stats': 'Reset Statistics'
        },
        ru: {
            'title': 'Задача Монти Холла',
            'intro': 'Задача Монти Холла - известная вероятностная головоломка:',
            'step1': 'Есть три двери, за одной из них автомобиль, за остальными - козы.',
            'step2': 'Вы выбираете дверь, надеясь выиграть автомобиль.',
            'step3': 'Ведущий, который знает, что находится за каждой дверью, открывает одну из других дверей, чтобы показать козу.',
            'step4': 'Затем ведущий спрашивает, хотите ли вы остаться при своем первоначальном выборе или переключиться на оставшуюся дверь.',
            'step5': 'Что вам делать? Лучше переключиться или остаться?',
            'choose-door': 'Выберите дверь!',
            'revealed-goat': 'Ведущий показал козу! Нажмите на вашу дверь, чтобы ОСТАТЬСЯ, или на другую закрытую дверь, чтобы ПЕРЕКЛЮЧИТЬСЯ. Вы также можете использовать кнопки ниже.',
            'you-won': 'Вы выиграли! Автомобиль был за дверью {0}.',
            'you-lost': 'Вы проиграли! Автомобиль был за дверью {0}.',
            'new-game': 'Новая игра',
            'stay': 'Остаться',
            'switch': 'Переключиться',
            'auto-run': 'Авто-запуск 100 игр',
            'stop-auto': 'Стоп',
            'auto-running': 'Авто-запуск 100 игр со стратегией {0}...',
            'auto-running-remaining': 'Авто-запуск со стратегией {0}. Осталось игр: {1}...',
            'auto-complete': 'Авто-запуск завершен! Проверьте статистику.',
            'auto-stopped': 'Авто-запуск остановлен. Автомобиль был за дверью {0}.',
            'auto-stopped-manual': 'Авто-запуск остановлен. Выберите дверь, чтобы играть вручную!',
            'stats-title': 'Статистика',
            'stay-strategy': 'Стратегия "Остаться"',
            'switch-strategy': 'Стратегия "Переключиться"',
            'stay-option': 'Стратегия "Остаться"',
            'switch-option': 'Стратегия "Переключиться"',
            'wins-label': 'Победы:',
            'losses-label': 'Поражения:',
            'win-rate-label': 'Процент побед:',
            'reset-stats': 'Сбросить статистику'
        },
        ja: {
            'title': 'モンティ・ホール問題',
            'intro': 'モンティ・ホール問題は有名な確率パズルです：',
            'step1': '3つのドアがあり、1つの後ろには車が、他の後ろにはヤギがいます。',
            'step2': 'あなたは車を当てたいと思い、ドアを1つ選びます。',
            'step3': '司会者は各ドアの後ろに何があるかを知っていて、他のドアの1つを開けてヤギを見せます。',
            'step4': '司会者はあなたに、最初の選択を維持するか、残りのドアに変更するかを尋ねます。',
            'step5': 'どうするべきでしょうか？変更した方がいいですか、それとも維持した方がいいですか？',
            'choose-door': 'ドアを選んでください！',
            'revealed-goat': '司会者がヤギを見せました！あなたのドアをクリックして維持するか、他の閉じたドアをクリックして変更してください。下のボタンを使うこともできます。',
            'you-won': '勝ちました！車はドア{0}の後ろにありました。',
            'you-lost': '負けました！車はドア{0}の後ろにありました。',
            'new-game': '新しいゲーム',
            'stay': '維持する',
            'switch': '変更する',
            'auto-run': '100ゲーム自動実行',
            'stop-auto': '停止',
            'auto-running': '{0}戦略で100ゲームを自動実行中...',
            'auto-running-remaining': '{0}戦略で自動実行中。残り{1}ゲーム...',
            'auto-complete': '自動実行完了！統計を確認してください。',
            'auto-stopped': '自動実行が停止されました。車はドア{0}の後ろにありました。',
            'auto-stopped-manual': '自動実行が停止されました。手動でプレイするにはドアを選んでください！',
            'stats-title': '統計',
            'stay-strategy': '維持戦略',
            'switch-strategy': '変更戦略',
            'stay-option': '維持戦略',
            'switch-option': '変更戦略',
            'wins-label': '勝ち:',
            'losses-label': '負け:',
            'win-rate-label': '勝率:',
            'reset-stats': '統計をリセット'
        }
    };

    // Current language
    let currentLang = 'en';

    // DOM Elements
    const langButtons = document.querySelectorAll('.lang-btn');
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
    
    // Language switching function
    function switchLanguage(lang) {
        if (!translations[lang]) return;
        
        currentLang = lang;
        
        // Update active language button
        langButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update static text elements
        document.getElementById('title').textContent = translations[lang]['title'];
        document.getElementById('intro').textContent = translations[lang]['intro'];
        document.getElementById('step1').textContent = translations[lang]['step1'];
        document.getElementById('step2').textContent = translations[lang]['step2'];
        document.getElementById('step3').textContent = translations[lang]['step3'];
        document.getElementById('step4').textContent = translations[lang]['step4'];
        document.getElementById('step5').textContent = translations[lang]['step5'];
        
        document.getElementById('stats-title').textContent = translations[lang]['stats-title'];
        document.getElementById('stay-strategy').textContent = translations[lang]['stay-strategy'];
        document.getElementById('switch-strategy').textContent = translations[lang]['switch-strategy'];
        
        document.getElementById('wins-label-stay').textContent = translations[lang]['wins-label'] + ' ' + stayWinsEl.textContent;
        document.getElementById('losses-label-stay').textContent = translations[lang]['losses-label'] + ' ' + stayLossesEl.textContent;
        document.getElementById('win-rate-label-stay').textContent = translations[lang]['win-rate-label'] + ' ' + stayPercentageEl.textContent;
        
        document.getElementById('wins-label-switch').textContent = translations[lang]['wins-label'] + ' ' + switchWinsEl.textContent;
        document.getElementById('losses-label-switch').textContent = translations[lang]['losses-label'] + ' ' + switchLossesEl.textContent;
        document.getElementById('win-rate-label-switch').textContent = translations[lang]['win-rate-label'] + ' ' + switchPercentageEl.textContent;
        
        // Update button text
        resetBtn.textContent = translations[lang]['new-game'];
        stayBtn.textContent = translations[lang]['stay'];
        switchBtn.textContent = translations[lang]['switch'];
        autoRunBtn.textContent = translations[lang]['auto-run'];
        stopAutoBtn.textContent = translations[lang]['stop-auto'];
        resetStatsBtn.textContent = translations[lang]['reset-stats'];
        
        // Update dropdown options
        const stayOption = autoStrategySelect.querySelector('option[value="stay"]');
        const switchOption = autoStrategySelect.querySelector('option[value="switch"]');
        if (stayOption) stayOption.textContent = translations[lang]['stay-option'];
        if (switchOption) switchOption.textContent = translations[lang]['switch-option'];
        
        // Update dynamic message based on game state
        updateMessage();
    }
    
    // Helper function to format strings with placeholders
    function formatString(str, ...args) {
        return str.replace(/{(\d+)}/g, (match, index) => {
            return typeof args[index] !== 'undefined' ? args[index] : match;
        });
    }
    
    // Update message based on game state
    function updateMessage() {
        if (gameState.gameStage === 'selection') {
            message.textContent = translations[currentLang]['choose-door'];
        } else if (gameState.gameStage === 'decision') {
            message.textContent = translations[currentLang]['revealed-goat'];
        } else if (gameState.gameStage === 'result') {
            const isWin = gameState.selectedDoor === gameState.carDoor;
            if (isWin) {
                message.textContent = formatString(translations[currentLang]['you-won'], gameState.carDoor);
            } else {
                message.textContent = formatString(translations[currentLang]['you-lost'], gameState.carDoor);
            }
        }
        
        if (autoRunning) {
            if (gamesRemaining === 100) {
                message.textContent = formatString(translations[currentLang]['auto-running'], autoStrategy);
            } else if (gamesRemaining > 0) {
                message.textContent = formatString(translations[currentLang]['auto-running-remaining'], autoStrategy, gamesRemaining);
            } else {
                message.textContent = translations[currentLang]['auto-complete'];
            }
        }
    }
    
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
    const autoStrategySelect = document.getElementById('auto-strategy');
    const autoRunProgress = document.getElementById('auto-run-progress');
    const progressFill = document.getElementById('progress-fill');
    const fireworksContainer = document.getElementById('fireworks-container');
    const loseEffect = document.getElementById('lose-effect');
    
    // Initialize language
    function setupLanguageButtons() {
        langButtons.forEach(btn => {
            // Remove any existing event listeners
            btn.removeEventListener('click', handleLanguageClick);
            // Add new event listener
            btn.addEventListener('click', handleLanguageClick);
        });
    }
    
    function handleLanguageClick(event) {
        const lang = event.target.dataset.lang;
        console.log('Language button clicked:', lang);
        switchLanguage(lang);
    }
    
    // Set up language buttons
    setupLanguageButtons();
    
    // Set initial language and active button
    document.querySelector('.lang-btn[data-lang="en"]').classList.add('active');
    switchLanguage('en');
    
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
            door.classList.remove('selected', 'opened', 'win');
            const doorBack = door.querySelector('.door-back');
            doorBack.innerHTML = '';
        });
        
        // Update UI
        message.textContent = translations[currentLang]['choose-door'];
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
        message.textContent = translations[currentLang]['revealed-goat'];
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
        let isWin = false;
        
        if (decision === 'stay') {
            finalDoor = gameState.selectedDoor;
            // Update stats
            if (finalDoor === gameState.carDoor) {
                stats.stayWins++;
                isWin = true;
            } else {
                stats.stayLosses++;
            }
        } else { // switch
            // For the switch strategy, we choose the door that's neither the originally selected door nor the revealed door
            finalDoor = [1, 2, 3].find(door => 
                door !== gameState.selectedDoor && door !== gameState.revealedDoor
            );
            
            // Update selected door highlight
            doors.forEach(door => door.classList.remove('selected'));
            document.getElementById(`door${finalDoor}`).classList.add('selected');
            
            // Update stats
            if (finalDoor === gameState.carDoor) {
                stats.switchWins++;
                isWin = true;
            } else {
                stats.switchLosses++;
            }
        }
        
        // Reveal all doors
        revealAllDoors();
        
        // Update UI
        updateStats();
        updateMessage();
        
        stayBtn.disabled = true;
        switchBtn.disabled = true;
        
        // Show win/lose effects if not auto-running
        if (!autoRunning) {
            if (isWin) {
                createFireworks();
                // Add win effect to the car door
                document.getElementById(`door${gameState.carDoor}`).classList.add('win');
                setTimeout(() => {
                    document.getElementById(`door${gameState.carDoor}`).classList.remove('win');
                }, 3000);
            } else {
                showLoseEffect();
            }
        }
        
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
        
        // Update labels with current language
        document.getElementById('wins-label-stay').textContent = translations[currentLang]['wins-label'] + ' ' + stayWinsEl.textContent;
        document.getElementById('losses-label-stay').textContent = translations[currentLang]['losses-label'] + ' ' + stayLossesEl.textContent;
        document.getElementById('win-rate-label-stay').textContent = translations[currentLang]['win-rate-label'] + ' ' + stayPercentageEl.textContent;
        
        document.getElementById('wins-label-switch').textContent = translations[currentLang]['wins-label'] + ' ' + switchWinsEl.textContent;
        document.getElementById('losses-label-switch').textContent = translations[currentLang]['losses-label'] + ' ' + switchLossesEl.textContent;
        document.getElementById('win-rate-label-switch').textContent = translations[currentLang]['win-rate-label'] + ' ' + switchPercentageEl.textContent;
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
    
    // Create fireworks effect
    function createFireworks() {
        fireworksContainer.classList.remove('hidden');
        fireworksContainer.innerHTML = '';
        
        // Create multiple fireworks
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.classList.add('firework');
                
                // Random position
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                firework.style.left = `${x}px`;
                firework.style.top = `${y}px`;
                
                // Random color
                const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'];
                firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                // Random direction
                const tx = (Math.random() - 0.5) * 200;
                const ty = (Math.random() - 0.5) * 200;
                firework.style.setProperty('--tx', `${tx}px`);
                firework.style.setProperty('--ty', `${ty}px`);
                
                fireworksContainer.appendChild(firework);
                
                // Remove after animation
                setTimeout(() => {
                    firework.remove();
                }, 1000);
            }, i * 20);
        }
        
        // Hide container after all fireworks are done
        setTimeout(() => {
            fireworksContainer.classList.add('hidden');
        }, 2000);
    }
    
    // Show lose effect
    function showLoseEffect() {
        loseEffect.classList.remove('hidden');
        
        // Hide after animation
        setTimeout(() => {
            loseEffect.classList.add('hidden');
        }, 800);
    }
    
    function startAutoRun() {
        if (autoRunning) return;
        
        autoRunning = true;
        gamesRemaining = 100;
        
        // Use the selected strategy from the dropdown
        autoStrategy = autoStrategySelect.value;
        
        // Show progress bar
        autoRunProgress.classList.remove('hidden');
        progressFill.style.width = '0%';
        
        message.textContent = formatString(translations[currentLang]['auto-running'], autoStrategy);
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
        
        // Update progress bar
        const progress = 100 - gamesRemaining;
        progressFill.style.width = `${progress}%`;
        
        if (gamesRemaining > 0) {
            // Update message with remaining games
            message.textContent = formatString(translations[currentLang]['auto-running-remaining'], autoStrategy, gamesRemaining);
            
            // Add a small delay between games
            setTimeout(runNextAutoGame, 50);
        } else {
            stopAutoRun();
            message.textContent = translations[currentLang]['auto-complete'];
        }
    }
    
    function stopAutoRun() {
        autoRunning = false;
        gamesRemaining = 0;
        autoRunBtn.disabled = false;
        stopAutoBtn.disabled = true;
        
        // Hide progress bar
        autoRunProgress.classList.add('hidden');
        
        if (gameState.gameStage === 'result') {
            message.textContent = formatString(translations[currentLang]['auto-stopped'], gameState.carDoor);
        } else {
            initGame();
            message.textContent = translations[currentLang]['auto-stopped-manual'];
        }
    }
});
