import React from 'react';

const Question = ({ questionAndAnswer }) => {
   console.log('question', questionAndAnswer)
   return (
      <form className='form pa4 br3 shadow-5 w-70 center'>
         <fieldset id="favorite_movies" className="bn">
            <legend className="fw7 mb2">{questionAndAnswer.question}</legend>
            <div className="flex items-center mb2">
               {questionAndAnswer.answers.map((answer, key) => (
                  <label htmlFor={key + answer} key={key} className="lh-copy mr3">
                     <input className="mr2" type="radio" name="answers" id={key + answer} value={key + answer} />
                     {answer}
                  </label>
               ))}
            </div>
         </fieldset>
      </form>
   );
}

export default Question;