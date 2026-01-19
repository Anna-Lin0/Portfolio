export default function ContactSection() {
    return(
        <div className="flex-1 justify-center">
            <form action="https://formsubmit.co/annalin.cs05@gmail.com" method="POST"> 
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-center-safe">
                        <div className="flex gap-2 w-full ">
                            <input name="fullname" className="flex-1 border border-gray-300 rounded px-2 py-1 text-lg " placeholder="Full Name" required/>
                            <input name="email" className="flex-1 border border-gray-300 rounded px-2 py-1 text-lg " placeholder="Email Address" required/>
                        </div>
                    </div>
                    
                    <div className="flex justify-center w-full">
                        <textarea placeholder="Your Message" className=" flex-1 min-h-64 border border-gray-300 rounded px-2 py-1" name="message" required></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
            </form>
        </div>
    );
}