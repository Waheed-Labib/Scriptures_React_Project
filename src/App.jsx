import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Routes"
import { useContext } from "react"
import { MsgContext } from "./contexts/MsgProvider"
import SuccessAlert from "./components/success-alert/SuccessAlert";
import ErrorAlert from "./components/error-alert/ErrorAlert";

function App() {

  const { successMsg,
    setSuccessMsg,
    setErrorMsg,
    errorMsg } = useContext(MsgContext);

  return (
    <div className="max-w-[1360px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      {
        successMsg && <SuccessAlert
          success={successMsg}
          setSuccess={setSuccessMsg}
        ></SuccessAlert>
      }
      {
        errorMsg && <ErrorAlert
          error={errorMsg}
          setError={setErrorMsg}
        ></ErrorAlert>
      }
    </div>
  )
}

export default App
