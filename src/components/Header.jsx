import './Header.css'

function Header() {

  return (
    <header className='header'>
      <img className='header-logo' src='./images/trollface.png' width='31' height='26' alt='Meme logo' />
      <h2 className='header-title'>Meme generator</h2>
      <h3 className='header-subtitle'>React Course - Project 3</h3>
    </header>
  )
}

export default Header