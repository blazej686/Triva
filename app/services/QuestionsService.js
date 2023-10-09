import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";

class QuestionsService {

    async getQuestions() {

        // @ts-ignore
        const response = await axios.get('https://opentdb.com/api.php?amount=30&type=boolean')
        console.log('data from API', response.data.results);
        const newQuestions = response.data.results.map(questionPOJO => new Question(questionPOJO))
        AppState.questions = newQuestions
        console.log('appstate questions', AppState.questions)
    }

    setActiveQuestion() {
        const questions = AppState.questions
        const randomIndex = Math.floor(Math.random() * questions.length)
        const randomQuestion = questions[randomIndex]
        AppState.questions = randomQuestion


    }
}

export const questionsService = new QuestionsService()