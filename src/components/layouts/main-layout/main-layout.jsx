import { Container } from "../container"
import { Footer } from "./footer"
import { Header } from "./header"

export const MainLayout=({children})=>{
    return(
        <>
            <Header/>
            <Container>{children}</Container>
            <Footer/>
        </>
    )
}