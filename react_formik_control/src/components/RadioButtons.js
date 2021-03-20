import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function RadioButtons(props) {
    const {label,name,options,...rest}=props
    return (
        <div className="form-control">
             <label>{label}</label>
              <Field name={name} {...rest}>
                {
                    ({field})=>{
                         //console.log('field',field)
                       return options.map(option=>{
                         //console.log('option val',option.value)
                           return (
                             <React.Fragment key={option.key}>
                               <input
                                 type="radio"
                                 id={option.value}
                                 {...field}
                                 value={option.value}
                                 checked={field.value===option.value}
                               />
                               <label htmlFor={option.value}>{option.key}</label>
                             </React.Fragment>
                           );
                       })
                    }
                }
              </Field>   
              <ErrorMessage name={name} component={TextError}/>     
        </div>
    )
}

export default RadioButtons
