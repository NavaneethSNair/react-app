import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Note title="Title1" details="This is Note1" />
        <Note title="Title2" details="This is Note2" />
        <Note title="Title3" details="This is Note3" />
        <Note title="Title4" details="This is Note4" />
        <Note title="Title5" details="This is Note5" />
        <Note title="Title6" details="This is Note6" />
      </div>
      <Footer />
    </div>
  );
}
