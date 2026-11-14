import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

function Navbar() {
  return (
    <nav className="h-12 flex items-center justify-between">
      <span className="font-mono text-sm sm:text-base text-white/50">
        ~/web
      </span>

      <div className="flex items-center gap-5">

        <a
          href="https://x.com/heyvishit"
          target="_blank"
          rel="noreferrer"
          aria-label="X"
          className="text-white/60 hover:text-white transition-colors"
        >
          <SiX size={17} />
        </a>

        <a
          href="https://github.com/heyvishit"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-white/60 hover:text-white transition-colors"
        >
          <SiGithub size={17} />
        </a>

      </div>
    </nav>
  );
}

export default Navbar;