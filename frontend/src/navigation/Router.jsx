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

function Router (){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="artisans">
                <Route index element={<Artisans />} />
                <Route path=":artisanId" element={<Artisan />} />
            </Route>
            <Route path=":artisanId" element={<Artisan />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router