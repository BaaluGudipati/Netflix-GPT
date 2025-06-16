import logo from '../utils/logo.png'
const Header=()=>{
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black'>
            <img src={logo} className='w-40 h-18'
            alt="Netflix -logo" />
        </div>

    )
}
export default Header