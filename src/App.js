import './App.css';

function App() {
  let countDownDate = new Date("Apr 20, 2023 23:59:59").getTime();

  let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;
