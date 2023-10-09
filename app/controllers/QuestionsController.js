import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawQuestion() {
    const activeQuestion = AppState.activeQuestion
    setHTML('HTML', activeQuestion.QuestionCardTemplate())

}

export class QuestionsController {
    constructor() {
        console.log('questions controller');
        this.getQuestions()
    }


    async getQuestions() {
        try {
            await questionsService.getQuestions()

        } catch (error) {
            Pop.error(error)
            console.error(error)

        }

    }
    checkAnswer() {


    }

    startGame() {
        _drawQuestion()


    }
    setActiveQuestion() {
        questionsService.setActiveQuestion()
    }

}
