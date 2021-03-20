import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

//#02 ::Refactoring : using formik.getFieldProps(propertyName) instead of onChange,onBlur,value

 //initialValues       
const initialValues={
    name:'Harish',
    email:'',
    location:''
}
//onSubmit
const onSubmit=values=>{
    console.log('Form data :',values)
}
//validation 
const validate=values=>{
    //values.name, values.email, values.location
    //errors.name, errors.email, errors.location 
    let errors={}
    if(!values.name){
        errors.name='Required'
    }
   if(!values.email){
      errors.email='Required'
   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email='Invalid email format'
   }
   if(!values.location){
       errors.location='Required'
   }
    return errors
}
//Validation by Yup Library
const validationSchema=Yup.object({
    name:Yup.string().required('Required!'),
    email:Yup.string().email('Invalid email format').required('Required!'),
    location:Yup.string().required('Required!')  
})


function FacebookForm1() {
//#initialValues property names must match names in form elements

   const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
   })
//   console.log('form object :',formik)
//   console.log('form values',formik.values)
//   console.log('form errors',formik.errors)
console.log('form visited fields :',formik.touched)

    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-control">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              {...formik.getFieldProps('location')}
            />
            {formik.touched.location && formik.errors.location ? (
              <div className="error">{formik.errors.location}</div>
            ) : null}
          </div>

          <button type="submit">submit</button>
        </form>
      </div>
    );
}

export default FacebookForm1

// # Main concepts like
// •   Manage the form state  [ initialValues in useFormik hook,onChange={formik.handleChange} value={formik.values.name}]
// •   Handle form submission [onSubmit={formik.handleSubmit}  , onSubmit in useFormik hook  ]
// •  Form validation         [ validate in useFormik hook ]

//Note :formik.getFieldProps(propertyName)

// onChange={formik.handleChange}
// onBlur={formik.handleBlur}
// value={formik.values.name}
// The above three statements are equal to formik.getFieldProps(name)






