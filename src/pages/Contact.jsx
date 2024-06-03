import ContactForm from "../component/ContactForm.jsx";

export default function Contact() {
    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold text-center mt-10">Contact Us</h1>
                <p className="text-center mt-5">You can contact us via email at:</p>
            </div>
          <ContactForm />
        </>
    )
}