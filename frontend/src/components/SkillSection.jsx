import { useRef } from "react";
import StickyNote from "./StickyNote";
import Rings from "./Rings";

export default function SkillSection() {
    const noteWrapRef = useRef(null);

    return (
        <section className="">
            <StickyNote className="bg-[#F5E5D1] text-2xl font-bold relative gap-6 items-center mb-8" title={"Skills"}>

                <div className="flex gap-6" >
                    <div className="relative flex-1 mb-6" ref={noteWrapRef}>
                        <Rings targetRef={noteWrapRef} className="absolute -top-7 left-1/2 -translate-x-1/2 -rotate-1 z-40" min={3} />
                        <StickyNote className="rounded-xl flex-1 bg-[#87a9cc] text-white text-lg z-20 " rotate={-1} title={"Programming Languages"}>
                            <ul className="list-disc ml-5"> 
                                <li>Python</li>
                                <li>C/C++</li>
                                <li>Java</li>
                                <li></li>
                            </ul>
                        </StickyNote>
                    </div>

                    <div className="relative flex-1 mb-6">
                        <Rings targetRef={noteWrapRef} className="absolute -top-7 left-1/2 -translate-x-1/2 rotate-1 z-40" min={3} />
                        <StickyNote className="rounded-xl flex-1 bg-[#7a5538] text-white text-lg z-20" rotate={1} title={"Other Skills"}>
                            <ul className="list-disc ml-5 text-lg"> 
                                <li>GitHub and Git</li>
                                <li>MongoDB</li>
                                <li>Express.js</li>
                                <li></li>
                            </ul>
                        </StickyNote>
                    </div>

                </div>

            </StickyNote>
        </section>
    );
}
