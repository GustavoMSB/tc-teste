import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Delivieres } from './components/Delivieres'
import { Header } from './components/Header'
import GlobalStyle from './styles/Global'

function App() {
  const [visualizationType, setVisualizationType] = useState("table");

  function handleChangeVisualizationTypeToList(){
    setVisualizationType("list")
  }

  function handleChangeVisualizationTypeToTable(){
    setVisualizationType("table")
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header
        changeToList={handleChangeVisualizationTypeToList}
        changeToTable={handleChangeVisualizationTypeToTable}
        status={visualizationType}
      />
      <Delivieres />
      <Dashboard visualizationType={visualizationType} />
    </div>
  )
}

export default App
