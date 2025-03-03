
    // Multiple letter sets with corresponding dictionaries
    const letterSets = [
      {
        letters: "AELPST",
        words: ["ale", "ales", "ape", "apes", "apt", "east", "eat", "eats", "lap", "laps", "last", "late", "lea", "leap", "leas", "let", "lets", "pale", "pales", "pal", "pals", "pas", "past", "pat", "pats", "pea", "peal", "peals", "peas", "pelt", "pelts", "pest", "pet", "pets", "plat", "plate", "plates", "plats", "plea", "pleas", "sale", "salep", "salt", "sat", "sea", "seal", "sepal", "slap", "slat", "slate", "slates", "sleep", "slept", "spade", "spate", "speal", "spelt", "staple", "tale", "tales", "tap", "tape", "tapes", "taps", "tea", "teal", "teals", "teas", "steal"]
      },
      {
        letters: "CEHORT",
        words: ["ceo", "cert", "chore", "chores", "cot", "cote", "cotes", "cots", "echo", "echos", "etc", "etch", "ethos", "hector", "hectored", "hectores", "hectors", "hero", "heroes", "hoe", "hoes", "hoer", "hoers", "hot", "hotel", "hotels", "hothouse", "ore", "ores", "other", "others", "rec", "recto", "rectos", "retch", "retches", "retching", "roe", "roes", "rot", "rote", "rotes", "rots", "tech", "techno", "technos", "tho", "throe", "throes", "toe", "toecap", "toecaps", "toed", "toer", "toers", "toes", "tor", "torch", "torches", "tore", "tores", "tors", "torso", "torsos"]
      },
      {
        letters: "ACDEIP",
        words: ["ace", "aced", "aces", "acid", "acedia", "acedias", "acidic", "acidify", "acidity", "acidly", "acids", "aid", "aide", "aided", "aider", "aiders", "aides", "aiding", "aids", "aped", "aper", "apers", "apes", "aping", "cad", "cade", "cades", "cadi", "cadis", "cads", "cafe", "cafes", "cage", "caged", "cages", "cap", "cape", "caped", "caper", "capered", "capering", "capers", "capes", "capias", "capiases", "capping", "caps", "dace", "daces", "dap", "dapped", "dapping", "daps", "dice", "diced", "dicer", "dicers", "dices", "dicing", "die", "died", "dieing", "dies", "dip", "dips", "edict", "edicts", "epic", "epica", "epics", "ice", "iced", "ices", "icing", "icings", "idea", "ideal", "ideals", "ideas", "ideate", "ideated", "ideates", "ideating", "pace", "paced", "pacer", "pacers", "paces", "pacing", "paid", "pair", "paired", "pairing", "pairings", "pairs", "pap", "pape", "paper", "papered", "papering", "papers", "paps", "pea", "peas", "pedal", "pedaled", "pedaling", "pedals", "pedicab", "pedicabs", "pep", "pepped", "pepping", "peps", "pica", "picas", "pice", "picador", "picadors", "picaria", "picarian", "picarias", "picaro", "picaros", "picayune", "picayunes", "pic", "pics", "pie", "pied", "pieing", "pies", "pied", "pierce", "pierced", "pierces", "piercing", "rap", "raps", "recap", "recaps", "recipe", "recipes", "rep", "repad", "repaid", "repair", "repaired", "repairing", "repairs", "repaper", "repapered", "repapering", "repapers", "repin", "repined", "repining", "repins", "reps"]
      },
      {
        letters: "ADENRT",
        words: ["and", "ane", "ant", "ante", "anted", "antre", "are", "arena", "arent", "art", "dear", "den", "dent", "ear", "earn", "earned", "eat", "eaten", "end", "ended", "ender", "era", "nae", "near", "neat", "ned", "nerd", "net", "rad", "rade", "ran", "rand", "rat", "rate", "rated", "read", "red", "rend", "rent", "rented", "ret", "tad", "tan", "tare", "tarn", "tarned", "tea", "tear", "teared", "ted", "ten", "tend", "tended", "tern", "terned", "trad", "trade", "traded", "tread", "treaded", "trend", "trended"]
      },
      {
        letters: "GILNOS",
        words: ["gil", "gin", "gins", "gis", "go", "goer", "goers", "goes", "going", "gone", "goner", "goners", "gos", "gospel", "gospels", "in", "ins", "ion", "ions", "lin", "ling", "lings", "lingo", "lingos", "lino", "linos", "lins", "lion", "lions", "lis", "log", "login", "logins", "logo", "logos", "logs", "long", "longs", "nil", "nils", "no", "noes", "nog", "nogs", "noise", "noises", "noising", "nosing", "nos", "oils", "on", "one", "ones", "ons", "os", "sign", "signal", "signaler", "signalers", "signals", "signed", "signer", "signers", "signin", "signins", "signing", "signings", "signior", "signiors", "signor", "signori", "signors", "signs", "sin", "sing", "singe", "singed", "singer", "singers", "singes", "singing", "singings", "single", "singled", "singles", "singling", "sings", "sinning", "sins", "sling", "slinger", "slingers", "slinging", "slings", "slog", "slogan", "slogans", "slogging", "slogs", "snail", "snailing", "snails", "snig", "snigged", "snigging", "snigs", "snip", "sniped", "sniper", "snipers", "sniping", "snips", "soil", "soiled", "soiling", "soilage", "soilages", "soils", "soling", "son", "song", "songing", "songs", "sonic", "sonics", "sons"]
      }
    ];
    
    // Game state variables
    let currentSetIndex;
    let gameLetters = [];
    let currentLetters = [];
    let score = 0;
    let timer = 120;
    let timerInterval;
    let foundWords = [];
    let possibleWords = [];
    let originalLetters = []; // Store the original set of letters
    let letterPositions = []; // Store the positions of letters in the UI
    
    // DOM elements
    const letterContainer = document.getElementById('letter-container');
    const wordContainer = document.getElementById('word-container');
    const submitButton = document.getElementById('submit');
    const shuffleButton = document.getElementById('shuffle');
    const clearButton = document.getElementById('clear');
    const newGameButton = document.getElementById('new-game');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');
    const threeLetterWordsList = document.getElementById('three-letter-words');
    const fourLetterWordsList = document.getElementById('four-letter-words');
    const fiveLetterWordsList = document.getElementById('five-letter-words');
    const sixLetterWordsList = document.getElementById('six-letter-words');
    const gameOverModal = document.getElementById('game-over-modal');
    const finalScoreElement = document.getElementById('final-score');
    const wordsFoundElement = document.getElementById('words-found');
    const totalWordsElement = document.getElementById('total-words');
    const playAgainButton = document.getElementById('play-again');
    const messageElement = document.getElementById('message');
    
    // Helper functions
    function selectRandomLetterSet() {
      currentSetIndex = Math.floor(Math.random() * letterSets.length);
      return letterSets[currentSetIndex].letters.split('');
    }
    
    function shuffleArray(array) {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    }
    
    function updateLetters() {
      // Clear the letter container
      letterContainer.innerHTML = '';
      
      // Reset letter positions
      letterPositions = [];
      
      // Add current letters
      gameLetters.forEach((letter, index) => {
        const letterElement = document.createElement('span');
        letterElement.textContent = letter;
        letterElement.style.margin = '0 5px';
        letterElement.style.padding = '5px 10px';
        letterElement.style.border = '1px solid black';
        letterElement.style.cursor = 'pointer';
        letterElement.setAttribute('data-index', index);
        
        letterElement.addEventListener('click', handleLetterClick);
        
        letterContainer.appendChild(letterElement);
        
        // Track the position of each letter
        letterPositions.push({
          letter: letter,
          element: letterElement
        });
      });
    }
    
    function updateWordContainer() {
      // Clear the word container
      wordContainer.innerHTML = '';
      
      // Add current word letters
      currentLetters.forEach((letter, index) => {
        const letterElement = document.createElement('span');
        letterElement.textContent = letter.letter;
        letterElement.style.margin = '0 5px';
        letterElement.style.padding = '5px 10px';
        letterElement.style.border = '1px solid black';
        letterElement.style.cursor = 'pointer';
        
        letterElement.addEventListener('click', () => {
          // Return the letter to the original container
          returnLetterToOriginalContainer(index);
        });
        
        wordContainer.appendChild(letterElement);
      });
    }
    
    function returnLetterToOriginalContainer(index) {
      const letterObj = currentLetters[index];
      
      // Add the letter back to the game letters
      gameLetters.push(letterObj.letter);
      
      // Remove from current letters
      currentLetters.splice(index, 1);
      
      // Update UI
      updateLetters();
      updateWordContainer();
    }
    
    function getCurrentWord() {
      return currentLetters.map(letterObj => letterObj.letter).join('');
    }
    
    function isValidWord(word) {
      return letterSets[currentSetIndex].words.includes(word.toLowerCase());
    }
    
    function updateScore(word) {
      // Award points based on word length
      const wordLength = word.length;
      let points = 0;
      
      switch (wordLength) {
        case 3:
          points = 100;
          break;
        case 4:
          points = 200;
          break;
        case 5:
          points = 400;
          break;
        case 6:
          points = 800;
          break;
      }
      
      score += points;
      scoreElement.textContent = score;
    }
    
    function addWordToResults(word) {
      const wordLength = word.length;
      const listItem = document.createElement('li');
      listItem.textContent = word;
      listItem.style.color = 'green';
      
      switch (wordLength) {
        case 3:
          threeLetterWordsList.appendChild(listItem);
          break;
        case 4:
          fourLetterWordsList.appendChild(listItem);
          break;
        case 5:
          fiveLetterWordsList.appendChild(listItem);
          break;
        case 6:
          sixLetterWordsList.appendChild(listItem);
          break;
      }
    }
    
    function showMessage(text, type) {
      // Set message text
      messageElement.textContent = text;
      
      // Set appropriate class
      messageElement.className = 'message';
      messageElement.classList.add(type);
      
      // Show message
      messageElement.style.display = 'block';
      
      // Hide message after 3 seconds
      setTimeout(() => {
        messageElement.style.display = 'none';
      }, 3000);
    }
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        
        if (timer <= 0) {
          endGame();
        }
      }, 1000);
    }
    
    function endGame() {
      clearInterval(timerInterval);
      finalScoreElement.textContent = score;
      wordsFoundElement.textContent = foundWords.length;
      totalWordsElement.textContent = letterSets[currentSetIndex].words.length;
      gameOverModal.style.display = 'block';
    }
    
    function resetGame() {
      // Reset game state
      originalLetters = selectRandomLetterSet();
      gameLetters = [...originalLetters];
      currentLetters = [];
      foundWords = [];
      score = 0;
      timer = 120;
      
      // Update UI
      scoreElement.textContent = score;
      timerElement.textContent = timer;
      threeLetterWordsList.innerHTML = '';
      fourLetterWordsList.innerHTML = '';
      fiveLetterWordsList.innerHTML = '';
      sixLetterWordsList.innerHTML = '';
      gameOverModal.style.display = 'none';
      messageElement.style.display = 'none';
      
      // Update letters
      updateLetters();
      updateWordContainer();
      
      // Start timer
      clearInterval(timerInterval);
      startTimer();
    }
    
    // Event handlers
    function handleLetterClick() {
      const index = parseInt(this.getAttribute('data-index'));
      const letter = gameLetters[index];
      
      // Add letter to current word
      currentLetters.push({
        letter: letter,
        originalIndex: index
      });
      
      // Remove letter from game letters
      gameLetters.splice(index, 1);
      
      // Update UI
      updateLetters();
      updateWordContainer();
    }
    
    // Button event listeners
    submitButton.addEventListener('click', () => {
      const word = getCurrentWord();
      
      if (word.length < 3) {
        showMessage('Word must be at least 3 letters long!', 'warning');
        return;
      }
      
      if (foundWords.includes(word.toLowerCase())) {
        showMessage('You already found this word!', 'warning');
        return;
      }
      
      if (isValidWord(word)) {
        // Add word to found words
        foundWords.push(word.toLowerCase());
        
        // Update score
        updateScore(word);
        
        // Add word to results
        addWordToResults(word);
        
        // Show success message
        showMessage(`Great! "${word}" found (+${word.length >= 6 ? 800 : word.length >= 5 ? 400 : word.length >= 4 ? 200 : 100} points)`, 'success');
        
        // Return letters to the letter container
        currentLetters.forEach(letterObj => {
          gameLetters.push(letterObj.letter);
        });
        
        // Clear current word
        currentLetters = [];
        
        // Update UI
        updateLetters();
        updateWordContainer();
      } else {
        showMessage(`"${word}" is not a valid word!`, 'error');
        
        // Return letters to the letter container
        currentLetters.forEach(letterObj => {
          gameLetters.push(letterObj.letter);
        });
        
        // Clear current word
        currentLetters = [];
        
        // Update UI
        updateLetters();
        updateWordContainer();
      }
    });
    
    shuffleButton.addEventListener('click', () => {
      gameLetters = shuffleArray(gameLetters);
      updateLetters();
      showMessage('Letters shuffled!', 'success');
    });
    
    clearButton.addEventListener('click', () => {
      // Return all letters to the original container
      currentLetters.forEach(letterObj => {
        gameLetters.push(letterObj.letter);
      });
      
      currentLetters = [];
      
      // Update UI
      updateLetters();
      updateWordContainer();
      showMessage('Word cleared!', 'warning');
    });
    
    newGameButton.addEventListener('click', resetGame);
    playAgainButton.addEventListener('click', resetGame);
    
    // Initialize game
    resetGame();