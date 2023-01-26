import Navbar from "@/components/Navbar/Navbar"
import { BrowserRouter } from "react-router-dom"
import SystemRoutes from "@/router/Routes"
import Hide from "@/components/HideCompo/Hide"
import { Toaster } from "react-hot-toast"
import { BookProvider } from "@/context/BooksContext"

function App() {

  return (
    <div className="text-2xl h-full">
      <BrowserRouter>
        <Toaster />
        <BookProvider>
          <Hide children={<Navbar />} routes={['/login', '/signup']} />
          <SystemRoutes />
        </BookProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
