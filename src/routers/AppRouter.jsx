import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ProfilePage } from "../pages/ProfilePage"
import { Template } from "../templates/Template"

export const AppRouter = () => {
  return (
    <>
    <Template>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>    
    </Template>
    </>
  )
}
