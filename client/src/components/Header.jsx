import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className='bg-slate-900'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
                <h1 className='text-white text-3xl font-bold'>SnapLock</h1>
            </Link>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='text-white'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='text-white'>About</li>
                </Link>
                <Link to='/sign-in'>
                    <li className='text-white'>Sign In</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}
