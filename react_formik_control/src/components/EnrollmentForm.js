import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function EnrollmentForm() {

    //select 
const dropDownValues=[
     {key:'Select your course',value:''},
     {key:'React',value:'react'},
     {key:'Angular',value:'angular'},
     {key:'Vue',value:'vue'}
]

//skillset :checkbox
const checkboxOptions=[
     {key:'HTML',value:'html'},
     {key:'CSS',value:'css'},
     {key:'JAVASCRIPT',value:'javascript'},
]

    const initialValues={
        email:'',
        name:'',
        course:'',
        skills:[],
        courseDate:null
    }
    const validateSchema=Yup.object({
        email:Yup.string().email('Invaild email format').required('Required..!'),
        name:Yup.string().required('Required..!'),
        course:Yup.string().required('Required..!'),
        skills:Yup.array().min(1,'Required.....!'),
        courseDate:Yup.date().required('required').nullable()
    })

    const onSubmit=values=>{
        console.log('Form data :',values)
    }

    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={onSubmit}>
          {
             (formik)=>{
                  return <Form>
                      <FormikControl 
                        control='input'
                        label="Name"
                        type='text'
                        name='name'
                      />
                      <FormikControl 
                        control='input'
                        label="Email"
                        type='email'
                        name='email'
                      />
                      <FormikControl
                         control='select'
                         label='Course'
                         name='course'
                         options={dropDownValues}
                      />
                       <FormikControl
                         control='checkbox'
                         label='Skills'
                         name='skills'
                         options={checkboxOptions}
                      />
                      
                      <FormikControl
                         control='date'
                         label='CourseDate'
                         name='courseDate'                       
                      />
                      <button type="submit" disabled={!formik.isValid}>Submit</button>
                  </Form>
             }
          }
       </Formik>
    )
}

export default EnrollmentForm
