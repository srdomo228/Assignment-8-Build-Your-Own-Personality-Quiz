console.log("script.js connected!");

let userAnswers = {};

const questionBlocks = document.querySelectorAll('.question-block');

questionBlocks.forEach(block => {
    const buttons = block.querySelectorAll('.answer-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove selected from all buttons in this question
            buttons.forEach(btn => {
                btn.classList.remove('selected', 'btn-primary');
            });
            
            // Add selected style to clicked button
            button.classList.add('selected', 'btn-primary');
            
            // Save the answer
            const questionNum = block.dataset.question;
            userAnswers[questionNum] = parseInt(button.dataset.value);
        });
    });
});
// Result data
const results = {
    1: { title: "You're Lo-Fi / Chill 🌿", description: "Relaxed, creative, and love chill beats.", image: "https://source.unsplash.com/random/600x400/?lofi" },
    2: { title: "You're Indie Rock 🎸", description: "Artistic and emotional. You love indie bands.", image: "https://source.unsplash.com/random/600x400/?indie" },
    3: { title: "You're Hip-Hop 🔥", description: "Confident and lyrical. You love rap and storytelling.", image: "https://source.unsplash.com/random/600x400/?hiphop" },
    4: { title: "You're Electronic / EDM 🎧", description: "High energy and love the drop!", image: "https://source.unsplash.com/random/600x400/?edm" }
};

function displayResult() {
    const resultContainer = document.getElementById('result-container');
    
    if (Object.keys(userAnswers).length < 4) {
        resultContainer.innerHTML = `<div class="alert alert-warning">Please answer all 4 questions!</div>`;
        return;
    }

    let totalScore = Object.values(userAnswers).reduce((sum, val) => sum + val, 0);
    
    let category = totalScore <= 8 ? 1 : totalScore <= 12 ? 2 : totalScore <= 16 ? 3 : 4;
    
    const result = results[category];

    resultContainer.innerHTML = `
        <div class="text-center">
            <img src="${result.image}" class="img-fluid rounded mb-4" style="max-height: 300px;">
            <h2 class="display-5 fw-bold">${result.title}</h2>
            <p class="lead">${result.description}</p>
            <button onclick="location.reload()" class="btn btn-outline-secondary mt-3">Take Quiz Again</button>
        </div>
    `;
    
    resultContainer.scrollIntoView({ behavior: "smooth" });
}

// Connect the result button
document.getElementById('result-button').addEventListener('click', displayResult);