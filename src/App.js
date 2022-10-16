import './App.css';
import Characters from './components/Characters';
import {QueryClientProvider,QueryClient} from "react-query"
function App() {
 const queryclient=new QueryClient()
  return (
    <div className="App">
      <div className='container'>
        <h1>Rick and Mori</h1>
        <QueryClientProvider client={queryclient}>
        <Characters/>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
