import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import PageShell from "./components/PageShell";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact"
import {motion, AnimatePresence} from "motion/react"



export default function App() {
    
    return(
        <BrowserRouter>
            <Inner/>
        </BrowserRouter>
    );
}

function Inner(){
    const location = useLocation();
    return(
        <PageShell>
            <AnimatePresence mode="wait"> 
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ 
                        type: "tween", 
                        stiffness: 220,
                        duration: 0.3, 
                        ease: "easeOut" }}
                >
                    
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </motion.div>
            </AnimatePresence>
        </PageShell> 
    );
}
