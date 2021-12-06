import { localhost } from "../localhost";

export const fetchQuestionsAsync = () => {
    return fetch(`${localhost}/api/quizzes`)
        .then(response => response.json())
        .then(json => json.data)
        .then(data => data[0].attributes.questions);
}