function Contact() {
    return (
        <section 
        id="contact"
        className="pt-12">
            <h2 className="mono-space text-3xl text-white">
                CONTACT
            </h2>
            <div className="mt-6 flex flex-wrap gap-4">
                <a
                    href="mailto:heyvishit@gmail.com"
                    className="manrope inline-block rounded-sm border border-white bg-gray-200 px-3 py-1.5 text-sm text-black transition-colors duration-100 hover:bg-transparent hover:text-white"
                >
                    E-mail
                </a>

                <a
                    href="https://github.com/heyvishit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="manrope inline-block rounded-sm border border-gray-400 px-3 py-1.5 text-sm text-white transition-colors duration-100 hover:bg-white hover:text-black"
                >
                    GitHub
                </a>

                <a
                    href="https://x.com/heyvishit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="manrope inline-block rounded-sm border border-white bg-gray-200 px-3 py-1.5 text-sm text-black transition-colors duration-100 hover:bg-transparent hover:text-white"
                >
                    X
                </a>

                <a
                    href="https://www.linkedin.com/in/vishitbari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="manrope inline-block rounded-sm border border-gray-400 px-3 py-1.5 text-sm text-white transition-colors duration-100 hover:bg-white hover:text-black"
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
}

export default Contact;