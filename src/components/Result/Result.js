import React from 'react';

const Result = ({ score, questionsArrayLength }) => {
   return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m shadow-5 mw6 center">
         <main className="pa4 black-80">
            {
               ((score / questionsArrayLength) * 100) > 50 ?
                  <h1>Congratulations!</h1> :
                  <h1>Hard Luck!</h1>
            }
            <h4>Your score is {(score / questionsArrayLength) * 100}%</h4>
         </main>
      </article>
   )

}

export default Result;