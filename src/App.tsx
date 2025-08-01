import {Header} from "./components/Header"; 
import {Sidebar} from "./components/Sidebar"; 
import {Footer} from "./components/Footer"; 
import {TaskInput} from "./components/TaskInput";
import { Task } from "./components/Task";


function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>
      <div className="d-flex flex-grow-1">

        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Radissara" type= "admin"></Sidebar>

        {/* Main content*/}
        <div className="container text-center">
          <main className="flex-grow-1 p-4"> 
          <div className="col-12 mb-2 p-0">
            {/* input ด้านบน*/}
            <TaskInput/>
               <Task id={1} title="Read a book" description="Vite + React + Bootstrap + TS" isDone={false} />
              <Task id={2} title="Write code" description="Finish project for class" isDone={false} />
              <Task id={3} title="Deploy app" description="Push project to GitHub Pages" isDone={false} />
            </div>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2026" fullName="Radissara Thananukul" studentId="670612198"></Footer>      
    </div>
  );
}

export default App;
