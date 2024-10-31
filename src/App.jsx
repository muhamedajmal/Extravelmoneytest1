import { useState } from 'react'
import './App.css'
import bg from './assets/bg.jpeg'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import people from './assets/people.png'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="row w-100">
      <div className="col-md-8 d-none d-md-block">
        <img src={bg} alt="" className='w=100'/>
      </div>
      <div className="col-md-4 p-4">
        <div className="container p-3">
          <div className="row w-100">
            <div className="col-12  d-flex order-last order-md-first justify-content-center align-items-center d-md-block ">
              <div className='d-flex'><img src="https://s3-alpha-sig.figma.com/img/6d75/a707/42b431df4d2e7424df1d501beabb799a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LI-6Y6vYX0T4NCz0dKMhGHFcu~8K0dwV-e0jDA9ncWnENTesZluL4YGj8nKXcyHZywlvkTqcFrRiJSpPt8uS0GbjCGj2aHAuIsUFcQ4vUHX9lIrD5ZE6NYn~v66R~vCJbrjRv32gTC88bJyu~nXEWNP7wUVk1fsHede-X4MG0VspIeeu1QifglEetflpVJCKFgEJXnM95QSTsEQhy-U4WvXiH36QrjqTckeUU53rma3MkFIvQYu-5IJLgjL-LdeHbaa6yQ55Y~Rs6A86wnqEe0W-RQIPSmDaxndrpktqq~By3Z6GQhnceahCY5UMV-p1LSMDCx8frxNP5poS58N-4w__" alt="" className='me-2' style={{width:'48px',height:'48px'}}/>
              <h1 style={{color:'#6940FF'}}>LOGO</h1></div>
              
              </div>
              <div className="form mt-5 ">
                <div>
                  <h3 className='mb-3' style={{fontSize:'20px'}}> <b>Nice to see you again</b> </h3>
                </div>
                <div className='mb-3'>
                  <label className='ms-2'>Email</label>
                  <input type="text" placeholder='Email or phone number' className='form-contol w-100 rounded p-2' style={{border:"none",backgroundColor:'#dee3e0'}}/>
                </div>
                <div className='mb-3'>
                <label className='ms-2'>Password</label>
                  <input type="text" placeholder='Enter password' className='form-contol w-100 rounded p-2' style={{border:"none",backgroundColor:'#dee3e0'}}/>
                </div>
                <div className='mb-3 d-flex flex-row justify-content-between align-items-center'>
                <div>
                <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Remember me" />
               </FormGroup>
                </div>
                <div className='me-0'>
                <a style={{textDecoration:'none'}} href="">Forgot password?</a>
                </div>
                </div>
                <div className='mb-5'>
                  <button className='btn btn-primary w-100 p-2'><b>Sign In</b></button>
                </div>
                <hr />
            </div>
            <div className='mt-4'>
              <button className='btn btn-dark w-100 p-2' > <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" style={{width:'30px', height:'30px'}} alt="" /> Or sign in with Google</button>
            </div>

            <div className=' mt-3 d-flex justify-content-center'>
              <p>Don't have an account?</p>
              <a className='ms-3' style={{textDecoration:'none'}} href="">Sign up now</a>
            </div>

           
          </div    >
           <div className='mt-5 d-flex justify-content-between align-items-center w-100'>
              <div className='d-flex'>
                <img src={people} style={{width:'90px',height:'30px'}} alt="" />
                <p>1000+ users</p>
              </div>

              <div>
                <p> &#169; perfect Login 2021</p>
              </div>
            </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
