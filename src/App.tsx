import { lazy, Suspense, useState } from "react";
import "./App.css";
import { FiTerminal } from "react-icons/fi";
import Terminal from "./components/Terminal";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
      
      {/* Developer Terminal */}
      <button 
        className="terminal-toggle-btn" 
        onClick={() => setIsTerminalOpen(true)}
        title="Open Developer Terminal"
        data-cursor="pointer"
      >
        <FiTerminal />
      </button>
      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  );
};

export default App;
