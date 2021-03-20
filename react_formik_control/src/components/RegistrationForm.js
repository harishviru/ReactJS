import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function RegistrationForm() {

    const options=[
        {key:'Email',value:'eamilmoc'},
        {key:'Telephone',value:'telephonemoc'}
    ]

    const initialValues={
        email:'',
        password:'',
        confirmPassword:'',
        modeOfContact:'',
        phone:''
    }
    const validateSchema=Yup.object({
        email:Yup.string().email('Invaild email format').required('Required..!'),
        password:Yup.string().required('Required..!'),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'),''],'password must match').required('Required'),
        modeOfContact:Yup.string().required('Required'),
        phone:Yup.string().when('modeOfContact',{
            is:'telephonemoc',
            then:Yup.string().required('Required')
        })
    })

    const onSubmit=values=>{
        console.log('Form data :',values)
    }
    return (
        <Formik
         initialValues={initialValues}
         validationSchema={validateSchema}
         onSubmit={onSubmit}
        >
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
                        <FormikControl 
                         control='input'
                         label="confirmPassword"
                         type='password'
                         name='confirmPassword'
                       />
                       <FormikControl 
                         control='radio'
                         label="Mode of contact"
                         name='modeOfContact'
                         options={options}
                       />
                       <FormikControl 
                         control='input'
                         type="text"
                         label="Phone number"
                         name='phone'
                       />
                       <button type="submit" disabled={!(formik.isValid)}>submit</button>
                     </Form>
                }
            }
            
        </Formik>
    )
}

export default RegistrationForm
