function About() {
    return (
        <section className="pt-12">
            <h2 className="space-mono text-3xl text-white">ABOUT</h2>

            <div className="flex flex-col gap-4 mt-6">
                <p className="manrope text-gray-400">
                    Somehow ended up in web development because I got curious about how websites work. One Google search led to another, and now here we are!
                </p>
                <p className="manrope text-gray-400">
                    Always up for learning something new, improving myself, and having random conversations that turn into interesting ideas.
                </p>
                <p className="manrope text-gray-400">
                    Coffee? Absolutely. It's basically my unofficial operating system. ☕
                </p>
                <p className="manrope text-gray-400">
                    Still learning, still experimenting, still breaking things (and occasionally fixing them).
                </p>
                <div className="flex items-center gap-3 mt-6">
                    <p className="manrope text-gray-400">
                        Feel like connecting?
                    </p>

                    <a
                        href="https://x.com/heyvishit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative manrope text-sm font-semibold text-white/80
        hover:text-white transition-colors duration-300
        after:absolute after:left-0 after:-bottom-1
        after:h-[1px] after:w-full after:origin-left
        after:scale-x-0 after:bg-stone-300
        after:transition-transform after:duration-300
        after:ease-out hover:after:scale-x-100"
                    >
                        Say Hello ↗
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;