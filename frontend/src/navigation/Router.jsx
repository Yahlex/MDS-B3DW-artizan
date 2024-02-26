import {
    Route,
    BrowserRouter,
    Routes 
} from 'react-router-dom'

import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Artisans from '../pages/Artisans'
import Home from '../pages/Home'    
import Artisan from '../pages/Artisan'
import Auth from '../pages/Auth'

function Router (){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="artisans">
                <Route index element={<Artisans />} />
                <Route path=":artisanSlug" element={<Artisan />} />
            </Route>
            <Route path=":artisanSlug" element={<Artisan />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path='authentication' element={<Auth />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router