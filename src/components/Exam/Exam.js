import React, { useState } from 'react';
import Question from './Question';
import { examQuestionsWithAnswers } from './QuestionsArray'

const Exam = () => {
   const [questionIsAnswered, setQuestionIsAnswered] = useState(false);

   function goToNextQuestion(isAnswered) {
      setQuestionIsAnswered(isAnswered)
   }
   return (
      <div>
         {examQuestionsWithAnswers.map((q, key) => (
            <Question
               questionAndAnswer={q}
               key={key + q}
               questionsArrayLength={examQuestionsWithAnswers.length}
               goToNextQuestion={goToNextQuestion}
            />
         ))}
      </div>
   );


}

export default Exam;