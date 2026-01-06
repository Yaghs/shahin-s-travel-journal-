import Header from "./components/Header.js"
import Entry from "./components/Entry.js"
import {data} from "./data.js"
function App() {
  const JournalEntry = data.map((entry)=>{
    return(
      <Entry 
        key = {entry.id}
        {...entry}
      />
    )
  })
  return (
    <>
      <Header/>
      <main className="container">
        {JournalEntry}
      </main>
      
    </>
  );
}

export default App;
