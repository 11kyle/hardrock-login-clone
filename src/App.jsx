import { useEffect, useState } from 'react'
import logo from './assets/logo.png'
import './App.css'
import Form from './components/Form'
import Input from './components/input'
import Button from './components/button'
import Label from './components/label'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordStrength, setPasswordStrength] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Submit the form here
  }

  function containsNumber(str) {
    return /\d/.test(str)
  }

  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    return specialChars.test(str)
  }

  function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

  useEffect(() => {
    let newPasswordStrength = 0

    if (containsNumber(password)) {
      console.log('password contains a number')
      newPasswordStrength = newPasswordStrength + 25
    }
    if (containsSpecialChars(password)) {
      console.log('password contains special character')
      newPasswordStrength = newPasswordStrength + 25
    }
    if (containsUppercase(password)) {
      console.log('password contains uppercase')
      newPasswordStrength = newPasswordStrength + 25
    }
    if (password.length > 7) {
      newPasswordStrength = newPasswordStrength + 25
    }

    setPasswordStrength(newPasswordStrength)
  
  }, [password.length])

  return (
    <div className="App">
      <div className="px-4">
        <img src={logo} alt="Hard Rock logo" className="w-20 mx-auto my-6" />
        <h1 className="text-2xl my-8">Create Account</h1>
        <Form onSubmit={handleSubmit}>
          <div className="relative my-4">
            <Input 
              id="email"
              type="email"
              name="email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full h-12 border-2 rounded focus:outline-none focus:border-primary px-4"
            />
            <Label htmlFor="email" className="absolute top-1/2 -translate-y-1/2 left-4 bg-white text-[#7D7D87] px-2  transition-all duration-500 ease-out label-animation">Email</Label>
          </div>
          <div className="relative my-4">
            <Input 
              id="password"
              type="password"
              name="password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full h-12 border-2 rounded focus:outline-none focus:border-primary px-4"
            />
            <Label htmlFor="password" className="absolute top-1/2 -translate-y-1/2 left-4 bg-white text-[#7D7D87] px-2 transition-all duration-500 ease-out label-animation">Password</Label>
          </div>
          <div>
            <p className="text-xs text-[#5E5E70]">Password Strength</p>

            <div className="w-full h-1 bg-[#EDEDF2] my-1">
              <div className="h-1 bg-green-400" style={{ width: `${passwordStrength}%` }}></div>
            </div>

            <div className="flex gap-2 text-[10px] text-[#5E5E70]">
              <span className={`${containsSpecialChars(password) ? "text-green-400" : "text-[#5E5E70]"}`}>1 Special</span>
              <span className={`${containsNumber(password) ? "text-green-400" : "text-[#5E5E70]"}`}>1 Number</span>
              <span className={`${containsUppercase(password) ? "text-green-400" : "text-[#5E5E70]"}`}>1 Capital</span>
              <span className={`${password.length > 7 ? "text-green-400" : "text-[#5E5E70]"}`}>8 Characters</span>
            </div>
          </div>
          
          <Button type="submit" disabled={email.length < 1 || password.length < 1} className="w-full bg-primary text-[#FCFCFC] disabled:bg-[#EDEDF2] disabled:text-[#A8A8B0] rounded p-4 my-4">Sign up</Button>
          <p className="text-xs text-[#5E5E70]">Already have an account? <a href="#" className="text-primary">Login here</a></p>
        </Form>
        <footer className="text-center mt-7">
          <p className="text-xs text-[#5E5E70]">By creating an account you are agreeing to<br/>
          <span className="text-primary font-bold">Hard Rock Sportsbook's Terms of Use</span> and <span className="text-primary font-bold">Privacy Policy.</span></p>
          <p className="text-xs text-[#5E5E70] mt-7">Gambling Problem? Call 1-800-NEXT-STEP or text NEXTSTEP to 53342</p>
        </footer>
      </div>
    </div>
  )
}

export default App
