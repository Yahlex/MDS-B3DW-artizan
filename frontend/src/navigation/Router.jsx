import {
    Route,
    BrowserRouter,
    Routes 
} from 'react-router-dom'

import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import App from '../App'

function Router (){
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router