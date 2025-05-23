import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import login_banner from '../assets/login/login_banner.svg'
import show_pass from '../assets/login/eye-slash.svg'
import { NavLink } from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [input, setInput] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: input.email,
          password: input.password
        }),
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/dashboard')
      } else {
        setError(data.message || 'Login failed')
        navigate('/')
      }
    } catch (err) {
      setError('An error occurred')
    }
  }

  return (
    <section className='flex min-h-[100vh]'>
      <div className='my-container md:bg-[#FAFAFA] rounded-[24px] shadow-sm m-auto'>
        <div className='my-row'>
          <div className='my-col-2'>
            <div className="">
              <form onSubmit={handleLogin} className="bg-white p-4 sm:p-7 rounded-xl dashboard-card-shadow w-full max-w-[460px] mx-auto">
                <h2 className="text-center text-[28px] text-[#292929] font-semibold  mb-10">Login</h2>
                {error && <div className="text-red-500 mb-2">{error}</div>}
                <div className='mb-6'>
                  <label className='font-semibold text-[14px] text-[#414042] mb-2'>E-mail</label>
                  <input
                    type="text"
                    placeholder="Enter E-mail"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                    value={input.email}
                    onChange={e => setInput({ ...input, email: e.target.value })}
                    className="w-full p-[14px] mt-3 border rounded-lg bg-[#F7FAFC]"
                    required

                  />
                </div>
                <div className='mb-10'>
                  <label className='font-semibold text-[14px] text-[#414042]'>Password*</label>
                  <div className='flex '>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter Password"
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      value={input.password}
                      onChange={e => setInput({ ...input, password: e.target.value })}
                      className="w-full p-[14px] mt-3 border-t border-l border-b rounded-tl-lg rounded-bl-lg bg-[#F7FAFC]"
                      required
                    />
                    <img className='border-t border-r border-b rounded-tr-lg rounded-br-lg bg-[#F7FAFC] mt-3 p-[14px]' src={show_pass} alt="view" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }} />
                  </div>
                </div>
                <div className='mb-10 flex justify-between gap-1 sm:gap-2'>
                  <div className='flex gap-1 sm:gap-3 items-center'>
                    <label className='font-semibold text-[12px] sm:text-[14px] text-[#414042]'>Remember me</label>
                    <input type="checkbox" className='w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]' />
                  </div>
                  <div>

                    <NavLink to="/#" className='text-[#396F7E] text-[12px] sm:text-[14px] font-semibold'>Forgot your password?</NavLink>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#DFDFDF] text-[#8D8C8E] font-bold py-[14px] rounded-lg "
                >
                  Login
                </button>
              </form>
              <div className='flex justify-center gap-2 mt-10 mb-5'>

                <NavLink to="/#" className='text-[#396F7E] text-[14px] sm:text-[14px] font-semibold'>Create an account?</NavLink>
                <p className='text-[#292929] font-semibold text-[14px]'>Don't have an account?</p>
              </div>
            </div>

          </div>
          {/* col - 2 */}
          <div className='my-col-2 p-2 hidden lg:block'>
            <img src={login_banner} alt="banner" className='w-[95%] ml-auto' />
          </div>

        </div>


      </div>
    </section>

  )
}
