import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Routes"

function App() {

  return (
    <div className="max-w-[1360px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
