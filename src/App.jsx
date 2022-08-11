import './App.css'

function App() {

  return (
    <div className='app'>
      <header>
        <div className='logo'> <img src="logo-desktop.svg" alt="" /></div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Recompensas</a>
          <a href="#">Gift Cards</a>
          <a href="#">Lojas</a>
        </nav>
        <button>Pegar meu café</button>
      </header>

      <div className='text'>
        <h1>Great Coffee</h1>
        <h1> &lt; Great Code / &gt; </h1>
      </div>
      <div className='coffe'> <img src="./rocket-coffee.png" alt="" /></div>
      <div className='blur_1'></div>
      <div className='blur_2'></div>
    </div>

  )
}

export default App
