import StickyNote from "./StickyNote";
import paperclip from "../assets/paperclip.png"
import {motion} from "motion/react"

export default function AboutSection() {
     return (
          <section className="flex gap-10 mb-10">
          
               <StickyNote className="scalloped-box rounded-xl flex-1 bg-[#c4e1ff] text-xl" rotate={0} title={"Anna"}>
                    <p className="leading-relaxed text-lg">Computer Science student interested in frontend, systems,
                    and machine learning. blah blah blah </p>
               </StickyNote>

               {/* picture of me */}
               <motion.div
                    whileHover={{ y: -2, rotate: 0.5 }}
                    transition={{ type: "spring", stiffness: 300 }}>
                    <StickyNote className=" w-60 h-60 rounded-none bg-[#7a5538] -translate-y-4 text-white" rotate={3}>
                         <img
                              src={paperclip}
                              alt="paperclip"
                              className="absolute w-25 h-25 -translate-y-23 translate-x-12 rotate-3"
                         />  
                    </StickyNote>
                    
               </motion.div>
             
          </section>
     );
}
