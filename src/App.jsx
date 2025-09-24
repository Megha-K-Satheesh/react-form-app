import { useState } from 'react';
import './App.css';

function App() {
   const [values,setValue] = useState({
      firstname :'',
      lastname:'',
      email:'',
      gender:'',
      contact:'',
      subject:'',
      resume:'',
      url:'',
      about:'',
   })

   const handleChanges = (e)=>{
  setValue({...values,[e.target.name]:[e.target.value]})
   }

   const handleSubmit= (e)=>{
    e.preventDefault()
    console.log(values)
   }

   const ResetFun = ()=>{
       setValue({
        firstname :'',
      lastname:'',
      email:'',
      gender:'',
      contact:'',
      subject:'',
      resume:'',
      url:'',
      about:'',
      })
   }
  return (
    <>
    <div  className = "container">
      <h1>Form In React</h1>
      <form  onSubmit={handleSubmit}>
        
        <label htmlFor="firstname">First Name</label>
        <input type="text" placeholder='Enter First Name' name="firstname"  
         onChange={(e)=>handleChanges(e)} required  value={values.firstname}
        />

        <label htmlFor="lastname">Last Name</label>
        <input type="text" placeholder='Enter Last Name' name="lastname"
         onChange={(e)=>handleChanges(e)}   required value={values.lastname}
        />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter Your Email' name="email"  
        onChange={(e)=>handleChanges(e)}   required value={values.email}
        />

        <label htmlFor="contact">Contact*</label>
        <input type="text" placeholder='Enter Phone #' name='contact'  
        onChange={(e)=>handleChanges(e)}   required />

        <label htmlFor="gender">Gender</label>
        <input type="radio" name='gender'   onChange={(e)=>handleChanges(e)}/> Male
        <input type="radio" name='gender'  onChange={(e)=>handleChanges(e)} /> Female
        <input type="radio" name='gender'   onChange={(e)=>handleChanges(e)}/> Other
        
        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject"   onChange={(e)=>handleChanges(e)}>

           <option value="math">Maths</option>
           <option value="physic">Physics</option>
           <option value="English">English</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input type="file"  placeholder='Select Resume' name="resume" 
         onChange={(e)=>handleChanges(e)}/>

        <label htmlFor="url">URL</label>
        <input type="text" name="url"  placeholder='Enter Image URL'
         onChange={(e)=>handleChanges(e)} />

        <label htmlFor="about">About</label>
        <textarea name="about" id="about" cols= "30" rows="10" placeholder='Enter description'   onChange={(e)=>handleChanges(e)}></textarea>

        <button type='button' onClick={ResetFun} >Reset</button>
        <button type='submit'>Submit</button>
      </form>

    </div>
    </>
  )
}
export default App;

