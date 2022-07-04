import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './components';
import { Home,} from './module/public';

export const Public=()=>{
    return(
        <>
            <MainLayout>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </MainLayout>
        </>
    )
}