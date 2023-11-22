import { Setup } from "@/components/setup";
import { Metrics } from "./components/metrics";
import { RealityCheck } from "./components/reality-check";

function App() {
  const birthday = localStorage.getItem("birthday");
  if (!birthday) {
    return <Setup />;
  }
  return (
    <>
      <Metrics birthday={new Date(birthday)} />
      <RealityCheck />
    </>
  );
}

export default App;
