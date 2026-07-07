import { useState, useEffect } from "react";
import "./index.css";
import Home from "./pages/Home";
import Loader from "./components/common/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      <div className={`transition-all duration-700 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <Home />
      </div>
    </>
  );
}

export default App;