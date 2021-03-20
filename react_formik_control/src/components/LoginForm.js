import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function LoginForm() {

    const initialValues={
        email:'',
        password:''
    }
    const validateSchema=Yup.object({
        email:Yup.string().email('Invaild email format').required('Required..!'),
        password:Yup.string().required('Required..!')
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
                         label="Email"
                         type='email'
                         name='email'
                       />
                       <FormikControl 
                         control='input'
                         label="Password"
                         type='password'
                         name='password'
                       />
                       <button type="submit" disabled={!formik.isValid}>Submit</button>
                   </Form>
              }
           }
        </Formik>
    )
}

export default LoginForm
