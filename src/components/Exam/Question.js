// import React from 'react';
// import { Formik } from 'formik';
// import * as Yup from "yup";

// const Question = ({ questionAndAnswer, onRouteChange, questionsArrayLength, goToNextQuestion }) => (
//    <Formik
//       initialValues={{ questionAnswer: "" }}
//       onSubmit={(values, { setSubmitting }) => {
//          console.log("go to next????", values);
//          setSubmitting(false);
//          goToNextQuestion(true)
//       }}
//       validationSchema={Yup.object().shape({
//          questionAnswer: Yup.string()
//             .required("This field is required!")
//       })}
//    >
//       {props => {
//          const {
//             values,
//             touched,
//             errors,
//             isSubmitting,
//             handleChange,
//             handleBlur,
//             handleSubmit
//          } = props;
//          return (
//             <form className='form pa4 br3 shadow-5 w-70 center'>
//                <fieldset id="favorite_movies" className="bn">
//                   <legend className="fw7 mb2">{questionAndAnswer.question}</legend>
//                   <div className="flex items-center mb2">
//                      {questionAndAnswer.answers.map((answer, key) => (
//                         <label htmlFor={key + answer} key={key} className="lh-copy mr3">
//                            <input
//                               className="mr2"
//                               type="radio"
//                               name="questionAnswer"
//                               id={key + answer}
//                               value={values.questionAnswer}
//                               onChange={handleChange}
//                               onBlur={handleBlur}
//                            />
//                            {answer}
//                         </label>
//                      ))}
//                   </div>
//                   {errors.questionAnswer && touched.questionAnswer && (
//                      <div className="input-feedback">{errors.questionAnswer}</div>
//                   )}
//                </fieldset>
//                <button className="center db" type="submit" disabled={isSubmitting || values.questionAnswer === ""}>
//                   Next
//                </button>
//             </form>
//          );
//       }}
//    </Formik>

// )

// export default Question;



import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";

const Question = ({ questionAndAnswer, questionsArrayLength, goToNextQuestion }) => (
   <Formik
      initialValues={{ questionAnswer: "" }}

      onSubmit={(values, { setSubmitting }) => {
         console.log("values:", values);
         setSubmitting(false);
         goToNextQuestion(true)
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
            <Form className='form pa4 br3 shadow-5 w-70 center' onSubmit={handleSubmit}>
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
                              defaultChecked={values.questionAnswer === answer}
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
            </Form>
         );
      }}
   </Formik>

)

export default Question;