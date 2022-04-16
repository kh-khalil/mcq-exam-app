import React from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";

const Question = ({
   questionAndAnswer,
   goToNextQuestion,
   getValue,
}) => (

   <Formik
      initialValues={{ questionAnswer: "" }}

      onSubmit={(values, { setSubmitting, resetForm }) => {
         console.log("values:", values);
         getValue(values)
         setSubmitting(false);
         goToNextQuestion(true);
         resetForm({});
      }}
      validationSchema={Yup.object().shape({
         questionAnswer: Yup.string()
            .required("Please select an answer.")
      })}
   >
      {props => {
         const {
            values,
            touched,
            errors,
            isSubmitting,
            handleSubmit,
            handleChange
         } = props;
         return (
            <form className='form pa4 br3 shadow-5 w-70 center' onSubmit={handleSubmit}>
               <fieldset id="favorite_movies" className="bn">
                  <legend className="fw7 mb2">{questionAndAnswer.question}</legend>
                  <div className="flex items-center mb2 custom-control">
                     {questionAndAnswer.answers.map((answer, key) => (
                        <label key={key} className="lh-copy mr3 custom-control-label">
                           <input
                              className="mr2"
                              type="radio"
                              name="questionAnswer"
                              value={answer}
                              onChange={handleChange}
                           // defaultChecked={values.questionAnswer === answer}
                           />
                           {answer}
                        </label>
                     ))}
                  </div>
                  {errors.questionAnswer && touched.questionAnswer && (
                     <div className="input-feedback">{errors.questionAnswer}</div>
                  )}
               </fieldset>
               <button className="center db" type="submit" disabled={isSubmitting}>
                  Next
               </button>
            </form>
         );
      }}
   </Formik>

)

export default Question;

// import React from 'react';
// import { Formik } from 'formik';
// import * as Yup from "yup";

// const Question = ({ questionAndAnswer, questionsArrayLength, onSelectingAnswer }) => {

//    return (
//       <div className='form pa4 br3 shadow-5 w-70 center'>
//          <fieldset id="favorite_movies" className="bn">
//             <legend className="fw7 mb2">{questionAndAnswer.question}</legend>
//             <div className="flex items-center mb2 custom-control">
//                {questionAndAnswer.answers.map((answer, key) => (
//                   <label key={key} className="lh-copy mr3 custom-control-label">
//                      <input
//                         className="mr2"
//                         type="radio"
//                         name="questionAnswer"
//                         value={answer}
//                         onChange={onSelectingAnswer}
//                      />
//                      {answer}
//                   </label>
//                ))}
//             </div>
//          </fieldset>
//       </div>
//    );
// }

// export default Question;