import React, { useEffect, useState } from 'react';
import Result from '../Result/Result';
import Question from './Question';
import { examQuestionsWithAnswers } from '../Data/QuestionsArray'

const Exam = () => {
   const [questionNumber, setQuestionNumber] = useState(0)
   const [question, setQuestion] = useState(examQuestionsWithAnswers[questionNumber])
   const [questionIsAnswered, setQuestionIsAnswered] = useState(false)
   const [showResult, setShowResult] = useState(false)

   const [score, setScore] = useState(0);

   function goToNextQuestion(isAnswered) {

      console.log("questionNumber:", questionNumber)
      console.log("question:", question)

      if (isAnswered) {
         setQuestionIsAnswered(true)
      }
   }

   function getValue(values) {
      if (
         questionNumber < examQuestionsWithAnswers.length &&
         values.questionAnswer === examQuestionsWithAnswers[questionNumber].correctAnswer
      ) {
         setScore(score + 1);
      }
   }

   useEffect(() => {
      if (questionIsAnswered) {
         console.log('question # before:', questionNumber)
         console.log("question before:", question)
         if (questionNumber < examQuestionsWithAnswers.length) {
            setQuestionNumber(questionNumber + 1)
            setQuestion(examQuestionsWithAnswers[questionNumber])
            console.log('question # after:', questionNumber)
            console.log("question after:", question)
         } else {
            setShowResult(true)
         }
      }
      setQuestionIsAnswered(false);
   }, [question, questionNumber, showResult, questionIsAnswered])

   return (
      <div>
         {showResult
            ? <Result score={score} questionsArrayLength={examQuestionsWithAnswers.length} />
            : <Question
               questionAndAnswer={question}
               // questionsArrayLength={examQuestionsWithAnswers.length}
               goToNextQuestion={goToNextQuestion}
               getValue={getValue}
            />
         }
      </div>
   );


}

export default Exam;

// import React, { useEffect, useState } from 'react';
// import Result from '../Result/Result';
// import Question from './Question';
// import { examQuestionsWithAnswers } from './QuestionsArray'

// const Exam = () => {
//    const [questionNumber, setQuestionNumber] = useState(0)
//    const [question, setQuestion] = useState(examQuestionsWithAnswers[questionNumber])
//    const [questionIsAnswered, setQuestionIsAnswered] = useState(false)
//    const [showResult, setShowResult] = useState(false)

//    const onSelectingAnswer = (event) => {
//       // setSearchfield(event.target.value)
//       setQuestionIsAnswered(true)
//    }

//    const nextQuestion = () => {
//       if (questionNumber < examQuestionsWithAnswers.length) {
//          setQuestionNumber(questionNumber + 1);
//       }
//    }

//    useEffect(() => {
//       if (questionIsAnswered) {
//          console.log('question # before:', questionNumber)
//          console.log("question before:", question)
//          if (questionNumber < examQuestionsWithAnswers.length) {
//             setQuestionNumber(questionNumber + 1)
//             setQuestion(examQuestionsWithAnswers[questionNumber])
//             console.log('question # after:', questionNumber)
//             console.log("question after:", question)
//          } else {
//             setShowResult(true)
//          }
//       }
//    }, [question, questionNumber, showResult, questionIsAnswered])

//    return (
//       <div>
//          {showResult
//             ? <Result />
//             :
//             <div>
//                <Question
//                   questionAndAnswer={question}
//                   key={question}
//                   questionsArrayLength={examQuestionsWithAnswers.length}
//                   onSelectingAnswer={onSelectingAnswer}
//                />
//                {
//                   questionIsAnswered ?
//                      <button onClick={nextQuestion}>Next Question</button>
//                      : <p>Please answer the question</p>
//                }
//             </div>
//          }
//       </div>
//    );


// }

// export default Exam;