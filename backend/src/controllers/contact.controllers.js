import { Contact } from "../models/contact.model.js";

const storeContact = async (req, res) => {
    try {
        const { fullname, email} = req.body; // requesting fullname and email

        // basic check that everything is put in
        if (!fullname || !email) {
            return res.status(400).json({message: "Please fill out both name and email!"}) // tells the user that all the fields are required. 
        }

        //checks if the contact exists already 
        const existing  = await Contact.findOne({ email: email.toLowerCase() });
        if (existing) {
            return res.status(400).json({message: "This email has already contacted me!"})
        }

        //create contact (Contact = model but contact = one contact)
        const contact = await Contact.create({
            fullname, 
            email: email.toLowerCase()
        });

        res.status(201).json({
            message: "Email has been noted!",
            contact:  { id: contact._id, email: contact.email}
        });

    } catch (error) {
        res.status(500).json({ message: "Internal server error:", error: error.message})
    }
};

export {
    storeContact
}