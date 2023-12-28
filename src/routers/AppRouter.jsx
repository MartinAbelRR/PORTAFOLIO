import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ProfilePage } from "../pages/ProfilePage"
import { Template } from "../templates/Template"

export const AppRouter = () => {
  return (
    <>
    <Template>
      <Routes>
        <Route path="/PORTAFOLIO" element={<HomePage />}/>
        <Route path="/PORTAFOLIO/profile" element={<ProfilePage/>} />
      </Routes>    
    </Template>
    </>
  )
}
