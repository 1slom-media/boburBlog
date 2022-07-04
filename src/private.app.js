import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./components"
import { Posts,Error,PostSingle } from "./module/private"

export const Private =()=>{
    return(
        <>
         <MainLayout>
            <Routes>
                <Route path="/" element={<Posts/>}/>
                <Route path='/posts/:postId' element={<PostSingle/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
         </MainLayout>
        </>
    )
}