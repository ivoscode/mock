import { Calendar } from "../components/calendar";
import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Dashboard>
        <Calendar />
      </Dashboard>
    </div>
  );
}
