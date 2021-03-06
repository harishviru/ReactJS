import React,{useState} from 'react'
//import {useFormik} from 'formik'
import {Formik,Form,Field,ErrorMessage, FieldArray,FastField} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

//#03 ::Refactoring with Formik components 
 //like Formik,Form ,Field, ErrorMessage

//01:(Formik) .useFormik({initialValues,validationSchema,OnSubmit..etc}) is replaced with <Formik initialValues,validationSchema,OnSubmit..etc>
//02 :(Form)  Html form replace with React Form component and remove onSubmit function on form [Formik Form component automically hook onSubmit function]
//03 :(Field) Html form Field element replace with formik Field component and remove  {...formik.getFieldProps('name')} in form input element  [Formik Field component automically add formik.getFieldProps('filedname')]
//04 :(ErrorMessage) Remove formik.errors  and add <ErrorMessage name="propertyname"/>

//--------------------------------------
//05 : In Field we can use 'as' or 'component' props [ex :description] .Actually Formik Field comp without type props acts like type='text'
//06 : Render props pattern (address)
//07 : ErrorMessage Formik component just display render text message but not wrap with div like <div> error message </div>,
 //   so that we can  component='div' props in ErrorMessage or we can write our own component like TextError
// 08 : Nested objects [social]
// 09 : Array  [phoneNumbers like primary and seconday..]
// 10 :FieldArray for list manipulation  (dynamic)
// 11 :FastField (address) component is internally implemented shouldComponentUpdate lifecycle method,Actually it is used for  optimizated version of Field

// 12 # When does validation run
// • any onChange event            [if you want to stop validation on onChange event, then you can use  validateOnChange={false} on Formik component ]
// • any onBlur event              [if you want to stop validation on onBlur event, then you can use  validateOnBlur={false} on Formik component ]  
// • when attempt made on submit form

// 13 .Field level validationn
//    • define validation for field,then add validation props on that Field component  like validate={validationDescription}

//=================************************************====================
//14 # Manually trigering validation
// By using validateField,validateForm ,setFieldTouched,setTouched 

//15 .Disabling the submit form
//  • Validity of the form state
//  • Form submission in progress

//  • Validity of the form state
// on submit button ,we can use disabled={!isValid} [isValid property is false when errors are not empty ]
//  validateOnMount on Formik component, whenever form mount on dom ,it will runs validations on each field and populate errors
    //or 
// dirty boolean property by default false,whenever one of form field is changed since initiazation then dirty =true
// But main drawback when initialValues changes ,ex name="Harish viru",still submit submit is disable mode only

//  • Form submission in progress
// By default isSubmitting is false,whenever an attempt made to submit form isSubmitting became true
// and also after submission completed change value on onSubmit like  onSubmitProps.setSubmitting(false)

// =============================********************==================================
//Loading the saved data
// • Use useState to set formvalues
// •   initialValues={formValues || initialValues} on Formik component
// •  enableReinitialize on Formik component

// =============================********************==================================
// Resetig Form data
//  By Using <button type="reset">Reset </button> 
            //or 
// By Using   onSubmitProps.resetForm()  


//initialValues       
const initialValues={
    name:'Harish',
    email:'',
    location:'',
    description:'',
    address:'',
    social:{
        youtube:'',
        twitter :''
    },
    phoneNumbers:['',''],
    phNumbers:['']
}
// savedValues
const savedValues={
    name:'Harish',
    email:'har@gmail.com',
    location:'India',
    description:'Hi....!',
    address:'Hyderabad',
    social:{
        youtube:'',
        twitter :''
    },
    phoneNumbers:['',''],
    phNumbers:['']
}
//onSubmit
const onSubmit=(values,onSubmitProps)=>{
    console.log('Form data :',values)
    console.log('onSubmitProps',onSubmitProps)
    onSubmitProps.setSubmitting(false) //to enable submit button 
    onSubmitProps.resetForm()           // to reset form after submission
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
    location:Yup.string().required('Required!') , 
    // description:Yup.string().required('Required !'),
    address:Yup.string().required('Required')
})

const validateDescription=value=>{
  let error
   if(!value){
   error ='Required...!'
   }
   return error
}


function FacebookForm5() {
    const [formValues, setFormValues] = useState(null)
//#initialValues property names must match names in form elements

  //  const formik=useFormik({
  //       initialValues,
  //       onSubmit,
  //       validationSchema
  //       // validate
  //  })

//console.log('form visited fields :',formik.touched)

    return (
      <Formik 
              //initialValues={initialValues}
              initialValues={formValues || initialValues} //for loading saved data
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              // validateOnChange={false}
              // validateOnBlur={false}
             // validateOnMount
              enableReinitialize
              >
                  {
                      (formik)=> {
                          console.log('formik ...',formik)
                        return (
                            <Form>
                            <div className="form-control">
                              <label htmlFor="name">Name</label>
                              <Field
                                type="text"
                                id="name"
                                name="name"
                              />
                             <ErrorMessage name="name" /* component="div" className="error" */ component={TextError} />
                            </div>
                  
                            <div className="form-control">
                              <label htmlFor="email">E-mail</label>
                              <Field
                                type="email"
                                id="email"
                                name="email"
                              />
                               <ErrorMessage name="email" component={TextError}/>
                            </div>
                  
                            <div className="form-control">
                              <label htmlFor="location">Location</label>
                              <Field
                                type="text"
                                id="location"
                                name="location"
                              />
                              {/* 'Render props pattern' */}
                               <ErrorMessage name="location">
                                {
                                   (errorMsg)=>{
                                     //console.log('Render props (errorMsg) :',errorMsg)
                                      return <div className="error">{errorMsg}</div>
                                   }
                                }
                               </ErrorMessage>
                            </div>
                            
                            <div className='form-control'>
                                <label htmlFor="description" >Description</label>
                                <Field as='textarea' /*component="textarea"*/ id="description" name="description" validate={validateDescription}/>
                                <ErrorMessage name="description" component={TextError}/>
                            </div>
                          
                             {/* Render props pattern  */}
                            <div className="form-control">
                                 <label htmlFor="address">Address</label>
                                  <FastField name="address">
                                      {
                                        (props)=>{
                                          const {field,form,meta}=props                        
                                          console.log('Render props in address ',props)
                                           return(
                                             <div>
                                                   <input type="text" id="address" {...field}/>
                                                    {meta.touched && meta.error ? <div className="error">{meta.error}</div> :null}
                                            </div> 
                                           )
                                        }
                                      }
                                  </FastField>
                            </div>
                  
                            {/* <div className='form-control'>
                                <label htmlFor='address'>Address</label>
                                <FastField name='address'>
                                  {({ field, form, meta }) => {
                                     console.log('Field render',fi)
                                    return (
                                      <div>
                                        <input type='text' {...field} />
                                        {meta.touched && meta.error ? (
                                          <div>{meta.error}</div>) : null}
                                      </div>
                                    )
                                  }}
                                </FastField>
                              </div> */}
                  
                  
                             <div className="form-control">
                                   <label htmlFor="youtube">Youtube Channel</label>
                                   <Field type="text" id="youtube" name="social.youtube" />
                             </div> 
                             <div className="form-control">
                                   <label htmlFor="twitter">Twitter </label>
                                   <Field type="text" id="twitter" name="social.twitter" />
                             </div>     
                  
                             <div className="form-control">
                                   <label htmlFor="primaryPh">Primary Phone Number</label>
                                   <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
                             </div> 
                             <div className="form-control">
                                   <label htmlFor="secondaryPh">Secondary Phone Number</label>
                                   <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
                             </div> 
                  
                             <div className="form-control"> 
                                   <label>List of phNumbers</label>     
                                   <FieldArray name="phNumbers">
                                     {
                                       (fieldArrayprops)=>{
                                         const {push,remove,form}=fieldArrayprops
                                         const {values}          =form
                                         const {phNumbers}       =values
                                        // console.log('fieldArrayprops :',fieldArrayprops)
                                        console.log('form errors :',form.errors)
                                         return (
                                          <div>
                                          {phNumbers.map((phNumber,index)=>(
                                               <div key={index}>
                                                 <Field name={`phNumbers[${index}]`}/>
                                                 {
                                                   index>0 && (
                                                     <button type="button" onClick={()=>remove(index)}>-</button>
                                                   )
                                                 }
                                                 <button type="button" onClick={()=>push('')}>+</button>
                                               </div>
                                          ))}
                                        </div>
                                         )
                                       }
                                     }
                                   </FieldArray>    
                              </div>      
                             {/* <button type="button" onClick={()=>formik.validateField('description')}> validate description</button>    <br/> 
                            <button type="button" onClick={()=>formik.validateForm()}>validate all</button> <br/> 
                            <button type="button" onClick={()=>formik.setFieldTouched('description')}> visit description</button>    <br/> 
                            <button type="button" onClick={()=>formik.setTouched({
                                name:true,
                                email:true,
                                location:true,
                                address:true
                            })}>visit all</button> <br/>  */}
                          
                            {/* <button type="submit" disabled={!(formik.dirty && formik.isValid)}>submit</button> */}
                          
                            {/* <button type="submit" disabled={(formik.isSubmitting)}>submit</button> */}
                            <button type="reset">Reset </button> 
                            <button type="button" onClick={()=>setFormValues(savedValues)}>Load saved data</button>
                            <button type="submit" disabled={(!formik.isValid || formik.isSubmitting)}>submit</button>

                          </Form>
                          )
                      }                   
                  }
      </Formik>
    );
}

export default FacebookForm5

// # Main concepts like
// •   Manage the form state  [ initialValues in useFormik hook,onChange={formik.handleChange} value={formik.values.name}]
// •   Handle form submission [onSubmit={formik.handleSubmit}  , onSubmit in useFormik hook  ]
// •  Form validation         [ validate in useFormik hook ]


//==================Summary (FacebookForm 0 1,2)========================================================
// • Simple Form with three Fields
// • useFormik hook
// • Managing form state ,handling form submission and form validation
// • initialValues   + formik.handleChange
// • onSubmit method + formik.handleSubmit
// • validate function
// • validationSchema object by Yup library
// • formik.errors and formik.touched
// • Formik components   -Formik ,Form,Field,ErrorMessage 
