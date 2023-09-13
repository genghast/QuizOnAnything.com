// Assuming the chatbot response is stored in the 'chatbotResponse' variable
const chatbotResponse = `
asfsadfsad dksadlfsdd lkjsaklfjsdd fsfiosd  skjfsddiof ikfjsd

   {
      "id": 1,
      "question": "Which of the following is not a type of music notation?",
      "options": ["Standard notation", "Tab notation", "Morse code notation", "Graphics notation"],
      "answer": "Morse code notation}",
      "category": "music"
    },
    {
      "id": 2,
      "question": "What is the most common time signature in classical music?",
      "options": ["3/4", "4/4", "5/4", "6/8"],
      "answer": "4/4",
      "category": "music"
    },
    {
      "id": 3,
      "question": "Which of the following is not a type of instrument in a symphony orchestra?",
      "options": ["Violin", "Piano", "Harp", "Theremin"],
      "answer": "Theremin",
      "category": "music"
    },
    {
      "id": 4,
      "question": "What is the most common key in pop music?",
      "options": ["C Major", "G Major", "D Major", "A Major"],
      "answer": "C Major",
      "category": "music"
    },
    {
      "id": 5,
      "question": "Which of the following is not a type of chord?",
      "options": ["Major", "Minor", "Diminished", "Flat"],
      "answer": "Flat",
      "category": "music"
    },
    {
      "id": 6,
      "question": "Which of the following is not a type of music genre?",
      "options": ["Jazz", "Blues", "Rock", "Applesauce"],
      "answer": "Applesauce",
      "category": "music"
    },
    {
      "id": 7,
      "question": "Which of the following is not a type of music theory?",
      "options": ["Harmony", "Counterpoint", "Form", "Cooking"],
      "answer": "Cooking",
      "category": "music"
    },
    {
      "id": 8,
      "question": "What is the most common tempo marking in classical music?",
      "options": ["Allegro", "Andante", "Adagio", "Moderato"],
      "answer": "Allegro",
      "category": "music"
    },
    {
      "id": 9,
      "question": "Which of the following is not a type of musical form?",
      "options": ["Sonata", "Symphony", "Concerto", "Spaghetti"],
      "answer": "Spaghetti",
      "category": "music"
    },
    {
      "id": 10,
      "question": "Which of the following is not a type of music notation software?",
      "options": ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
      "answer": "Microsoft Word",
      "category": "music"
    }
   
  
  asdlkfj asdfkjs  aslkdfjsdwisd klsfjksriow4 sdfkj oeirs lksrfiwr sklfjsaeriusfklsadfjsaioej sadkfj `;
// Regular expression pattern to match a JSON object
const jsonPattern = /{(?:[^{}]|{[^{}]*})*}/;

// Find the JSON object within the response using the pattern
const match = chatbotResponse.match(jsonPattern);

if (match) {
    // Extract the JSON object from the matched substring
    const jsonObject = JSON.parse(match[0]);

    // Use the JSON object as needed
    console.log(jsonObject);
} else {
    console.error("No JSON object found in the response");
    // Handle the absence of a JSON object appropriately
}
