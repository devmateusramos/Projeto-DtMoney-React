import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Headers";
import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
