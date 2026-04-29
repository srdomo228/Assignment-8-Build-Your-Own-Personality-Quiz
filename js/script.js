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