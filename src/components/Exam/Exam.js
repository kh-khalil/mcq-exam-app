import React from 'react';
import Question from './Question';
import { examQuestionsWithAnswers } from './QuestionsArray'

const Exam = () => {
   return (
      <div>
         {examQuestionsWithAnswers.map((q, key) => (
            <Question questionAndAnswer={q} key={key + q} />
         ))}
      </div>
   );


}

export default Exam;