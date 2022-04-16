import { Formik } from 'formik';
import * as Yup from "yup";
import React from 'react';
import './Signin.css'

const Signin = ({ onRouteChange }) => (
   <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
            console.log("Logging in", values);
            setSubmitting(false);
            onRouteChange('home')
         }, 750);
      }}
      validationSchema={Yup.object().shape({
         name: Yup.string()
            .min(3, "Name should be at least 3 charachters!")
            .required("This field is required!"),
         email: Yup.string()
            .email()
            .required("This field is required!"),
         password: Yup.string()
            .required("This field is required!")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/(?=.*[0-9])/, "Password must contain a number.")
      })}
   >
      {props => {
         const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
         } = props;
         return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m shadow-5 mw6 center">
               <main className="pa4 black-80">
                  <form className="measure" onSubmit={handleSubmit}>
                     <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <div className="mv2">
                           <label
                              className="db fw6 lh-copy f6"
                              htmlFor="name">
                              Name
                           </label>
                           <input
                              className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
                              name="name"
                              type="text"
                              placeholder="Enter your Name"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           {errors.name && touched.name && (
                              <div className="input-feedback">{errors.name}</div>
                           )}
                        </div>

                        <div className="mv2">
                           <label
                              className="db fw6 lh-copy f6"
                              htmlFor="email">
                              Email
                           </label>
                           <input
                              className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
                              name="email"
                              type="text"
                              placeholder="Enter your email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}

                           />
                           {errors.email && touched.email && (
                              <div className="input-feedback">{errors.email}</div>
                           )}
                        </div>

                        <div className="mv2">
                           <label
                              className="db fw6 lh-copy f6"
                              htmlFor="password">
                              Password
                           </label>
                           <input
                              className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
                              name="password"
                              type="password"
                              placeholder="Enter your password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           {errors.password && touched.password && (
                              <div className="input-feedback">{errors.password}</div>
                           )}
                        </div>

                        <button className="center db" type="submit" disabled={isSubmitting}>
                           Login
                        </button>
                     </fieldset>
                  </form>
               </main>
            </article>
         );
      }}
   </Formik>

)

export default Signin;