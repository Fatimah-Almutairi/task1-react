
import './App.css'

function App() {
 
  let countDownDate = new Date (' Apr 20 , 2023 , 23:59:59 ').getTime();
  let counter = setInterval( () => {
    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor ((dateDiff % ( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / ( 1000 * 60));
    let seconds = Math.floor(( dateDiff % (1000 * 60)) / (1000 * 60 ));
  }, 1000);

  
  return (
    <div className="App">
      
    </div>
  )
}

export default App
