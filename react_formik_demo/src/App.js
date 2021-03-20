import './App.css';
//import FacebookForm4 from './components/FacebookForm4';
import FacebookForm5 from './components/FacebookForm5';
// import FacebookForm from './components/FacebookForm';
//import FacebookForm1 from './components/FacebookForm1';
//import FacebookForm2 from './components/FacebookForm2';
//import FacebookForm3 from './components/FacebookForm3';


function App() {
  return (
    <div className="App">
               {/* Basic Form */}
               {/* <FacebookForm/> */}
               {/* Refactoring : using formik.getFieldProps(propertyName) */}
               {/* <FacebookForm1/> */}
               {/* Refactoring with Formik components like Formik,Form ,Field, ErrorMessage...etc */}
                {/* <FacebookForm2/> */}
                {/* Manually trigering validation,Disabling submit button */}
                {/* <FacebookForm3/> */}
               {/* How to load saved data */}
               {/* <FacebookForm4/> */}
                {/* Reseting form data */}
                <FacebookForm5/>

               
    </div>
  );
}

export default App;
