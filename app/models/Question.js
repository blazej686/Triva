export class Question {

    constructor(data) {
        this.category = data.category
        this.difficulty = data.difficulty
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswer = data.incorrect_answers
    }

    get QuestionCardTemplate() {
        return `
<div class="col-12 card p-5 my-3 text-danger text-center">${this.question}
</div>
<div onclick="app.QuestionsController.checkAnswer()" class="col-4 card p-5 my-3 text-center bg-success">True
</div>
<div onclick="app.QuestionsController.checkAnswer()" class="col-4 card p-5 my-3 text-center bg-danger">False
</div>
</section>
</div>
`

    }


}












