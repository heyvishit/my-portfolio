function CC() {
    return (
        <section className="pt-12 pb-4">
        <div className="flex flex-col items-center text-center gap-2">
            <p className="manrope font-thin text-sm text-white">
                made with curiosity & caffeine ☕
            </p>

            <p className="manrope font-thin text-xs text-white">
                © {new Date().getFullYear()} Vishit Bari. All rights reserved.
            </p>
        </div>
        </section>
    )
}

export default CC;