import {useState} from "react";
import {motion} from "motion/react"


const jobs = [
   { 
    id: 1, 
    title: "Barista",
    company: "Papa Tea",
    start: "Nov 2022",
    end: "Jun 2023",
    details: "dkfjksafh khdfksjf ksfk djhfksh kshfks dhfk hfkshfks sdfah eoawr oiqjof hzsiufhwuhewdb e brqouh2dkfj"
    },

    {
    id: 2,
    title: "Family Business Assistant",
    company: "Avallone Discount Wine and Spirits",
    start: "Jun 2023",
    end: null,
    details: "sdjfakhfkewjhfksd", 
    },

    {
    id: 3,
    title: "Information Technology Assistant",
    company: "University of Connecticut (ITS)",
    start: "August 2025",
    end: null,
    details: "Managed and configured devices using JAMF (macOS) and Microsoft Intune (Windows), ensuring compliance with organizational security policies. Provided technical support to end-users by diagnosing and resolving hardware, software, and network issues.", 
    }

];
function formatRange(start, end) {
    return `${start} - ${end ?? "Present"}`;
}

export default function WorkTimeline() {
    const [openId, setOpenId] = useState(null);

    return (
        <section className="relative mt-10">
            {/* MOBILE: vertical line */}
            <div className="md:hidden absolute -translate-x-6.5 left-6 top-0 bottom-0 w-px bg-black/30" />

            {/* DESKTOP: horizontal line */}
            <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-black/30" />

            {/* MOBILE layout */}
            <div className="md:hidden space-y-12 ">
                {jobs.map((job) => {
                    const isOpen = openId === job.id;

                    return (
                        <div key={job.id} className="flex translate-x-1 items-start gap-6">
                            <button
                                onClick={() => setOpenId(isOpen ? null : job.id)}
                                className={`relative z-10 pin transition rotate-90 
                                    ${isOpen ? "scale-110 brightness-90" : "hover:scale-105"}
                                `}
                                aria-expanded={isOpen}
                                >
                                <span className="sr-only">Toggle details for {job.title}</span>
                            </button>

                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                    <h3 className="text-lg font-bold">{job.title}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-black/5 border border-black/10">
                                        {formatRange(job.start, job.end)}
                                    </span>
                                </div>

                                <p className="text-sm text-black/60">{job.place}</p>

                                {isOpen && (
                                    <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                    duration: 0.3,
                                    type: "tween",
                                    ease: "easeInOut"}}
                                    className="mt-3 bg-white rounded-xl p-4 shadow-md border border-black/10">
                                        <p className="text-sm leading-relaxed">{job.details}</p>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* DESKTOP layout */}
            <div className="hidden md:grid grid-cols-3 gap-10 pt-14">
                {jobs.map((job) => {
                    const isOpen = openId === job.id;

                    return (
                        <div key={job.id} className="relative -top-12">
                            {/* pin sits on the horizontal line */}
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                                <button
                                    onClick={() => setOpenId(isOpen ? null : job.id)}
                                    className={`pin transition
                                        ${isOpen ? "scale-110 brightness-90" : "hover:scale-105"}
                                    `}
                                    aria-expanded={isOpen}
                                >
                                    <span className="sr-only">Toggle details for {job.title}</span>
                                </button>
                            </div>

                            {/* content below */}
                            <div className="mt-10">
                                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                                    <h3 className="text-lg font-bold ">{job.title}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-black/5 border border-black/10">
                                        {formatRange(job.start, job.end)}
                                    </span>
                                </div>

                                <p className="text-sm text-black/60">{job.place}</p>

                                {isOpen && (
                                    <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                    duration: 0.3,
                                    type: "tween",
                                    ease: "easeInOut"}}

                                    className="mt-3 bg-white rounded-xl p-4 shadow-md border border-black/10">
                                        <p className="text-sm leading-relaxed">{job.details}</p>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>    
    );
}