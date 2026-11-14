import { useState } from "react";
import { Copy, Check } from "lucide-react";

function Hero() {

  const [copied, setCopied] = useState(false);

const handleCopy = async () => {
  await navigator.clipboard.writeText("heyvishit@gmail.com");
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2500);
};

  return (
    <section className="flex flex-col justify-start gap-3 pt-12">

      {/* Profile Image + Name */}
      <div className="flex items-center gap-4">
        <img
          src="/profile.jpg"
          alt="Vishit Bari"
          className="rounded-sm w-20 h-20 rounded- object-cover border border-dashed border-gray-400"
        />

        <div>
          <h1 className="jetbrains-mono text-3xl tracking-[-0.08em] text-white leading-tight">
            VISHIT BARI
          </h1>

          <div className="major-mono flex flex-wrap gap-2 text-[10px] sm:text-sm font-bold text-gray-400 tracking-[-0.05em] sm:tracking-[-0.10em]">
            <span>Engineer</span>
            <span>·</span>
            <span>Dev</span>
            <span>·</span>
            <div className="flex items-center gap-2">
  <span>heyvishit</span>

  <button
    onClick={handleCopy}
    className="text-gray-400 transition-colors duration-200 hover:text-white"
    title={copied ? "Copied!" : "Copy"}
  >
    {copied ? <Check size={16} /> : <Copy size={16} />}
  </button>
</div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="manrope pt-4 text-gray-400">
        Passionate Web Developer, ready to turn your vision into a beautiful website your ideas deserve.
      </p>

      {/* Buttons */}
      <div className="mt-2 flex flex-wrap gap-4">
        <a
          href="/vishit-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="manrope inline-block rounded-sm border border-white bg-white px-3 py-1.5 text-sm text-black transition-colors duration-200 hover:bg-transparent hover:text-white"
        >
          Resume
        </a>

        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
            })
          }
          className="manrope rounded-sm border-1 border-gray-400 px-3 py-1.5 text-sm text-white transition-colors duration-200 hover:bg-white hover:text-black">
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Hero;