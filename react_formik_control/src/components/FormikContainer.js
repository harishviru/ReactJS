import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

//FormikContainer component
function FormikContainer() {

 const dropDownValues=[
      {key:'Select an Option',value:''},
      {key:'Option 1',value:'option1'},
      {key:'Option 2',value:'option2'},
      {key:'Option 3',value:'option3'},
 ]
 const radioOptionValues=[
    {key:'ROption 1',value:'roption1'},
    {key:'ROption 2',value:'roption2'},
    {key:'ROption 3',value:'roption3'},
]
const checkboxOptionValues=[
    {key:'ChkOption 1',value:'coption1'},
    {key:'ChkOption 2',value:'coption2'},
    {key:'ChkOption 3',value:'coption3'},
]


   const initialValues={
        email:'',
        description:'',
         selectOption:'',
         radioOption:'',
         checkboxOption: [],
         birthDate:''
    }
    const validationSchema =Yup.object({
        email:Yup.string().required('Required..!'),
        description:Yup.string().required('Required..!'),
        selectOption:Yup.string().required('Required..!'),
        radioOption:Yup.string().required('Required..!'),
        checkboxOption: Yup.array().min(1,'Required.....!'),
        birthDate:Yup.date().required('Required..!').nullable()
    })
    const onSubmit =values=>console.log('Form data :',values)
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) =>     
        ( 
          <Form>           
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl 
             control='textarea'
             label='Description'
             name='description'            
            />
          <FormikControl 
             control='select'
             label='Select a topic'
             name='selectOption'
             options={dropDownValues}            
            />
            <FormikControl 
             control='radio'
             label='Pick one Radio Option'
             name='radioOption'
             options={radioOptionValues}
            />
          <FormikControl 
             control='checkbox'
             label='Pick options'
             name='checkboxOption'
             options={checkboxOptionValues}
            />
             <FormikControl 
               control='date'
               label='Pick a date'
               name='birthDate'               
             />

            <button type="submit"> submit</button>
          </Form>
        )}
      </Formik>
    );
}

export default FormikContainer

// # Resuable Formik Controls
// •  FormikContainer component
// •  FormikControl component
// • Input
// • TextArea
// • Select
// • RadioButtons
// • Checkboxes
// • Datepicked
//    .....etc 

