
function Projects() {
  return (
    <section className="pt-12">

      <h2 className="space-mono text-3xl text-white">
        PROJECTS
      </h2>

      <p className="manrope mt-2 text-sm text-gray-400">
        A selection of things I've built and worked on.
      </p>

      {/* PROJECT GRID */}
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">

        {/* PROJECT CARD 1 */}
        <div className="overflow-hidden rounded-sm border border-dashed border-gray-400">

          {/* PROJECT IMAGE */}
          <img
            src="/projects/project-one.png"
            alt="Project One preview"
            className="h-44 w-full object-cover"
          />

          {/* PROJECT DETAILS */}
          <div className="p-5">

            <h3 className="manrope text-lg font-bold text-white">
              5 Cards Design
            </h3>

            <p className="inter mt-2 text-sm leading-relaxed text-gray-400">
              Clean, modern and minimal cards design for your Professional Website.
            </p>

            {/* TECHNOLOGIES */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-sm border border-dashed border-gray-400 bg-[#2d2d2e] px-3 py-1 text-xs text-gray-300">
                React
              </span>

              <span className="rounded-sm border border-dashed border-gray-400 bg-[#2d2d2e] px-3 py-1 text-xs text-gray-300">
                Tailwind
              </span>
            </div>

            {/* LINKS */}
            <div className="mt-5 flex justify-between gap-4">
              <a
                href="https://cards-kit.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative manrope text-sm font-semibold text-white
        hover:text-white transition-colors duration-300
        after:absolute after:left-0 after:-bottom-1
        after:h-[1px] after:w-full after:origin-left
        after:scale-x-0 after:bg-stone-300
        after:transition-transform after:duration-300
        after:ease-out hover:after:scale-x-100"
              >
                Live Demo ↗
              </a>

              {/*
    <a
        href="https://github.com/heyvishit"
        target="_blank"
        rel="noopener noreferrer"
        className="manrope text-sm font-semibold text-gray-400 hover:text-white"
    >
        GitHub ↗
    </a>
    */}
            </div>

          </div>
        </div>

        {/*Project end div*/}

        {/* PROJECT CARD 1 */}
        <div className="overflow-hidden rounded-sm border border-dashed border-gray-400">

          {/* PROJECT IMAGE */}
          <img
            src="/projects/project-one.png"
            alt="Project One preview"
            className="h-44 w-full object-cover"
          />

          {/* PROJECT DETAILS */}
          <div className="p-5">

            <h3 className="manrope text-lg font-bold text-white">
              Expense Tracker
            </h3>

            <p className="inter mt-2 text-sm leading-relaxed text-gray-400">
              Track income and expenses with a clean UI and real-time updates.
            </p>

            {/* TECHNOLOGIES */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-sm border border-dashed border-gray-400 bg-[#2d2d2e] px-3 py-1 text-xs text-gray-300">
                React
              </span>

              <span className="rounded-sm border border-dashed border-gray-400 bg-[#2d2d2e] px-3 py-1 text-xs text-gray-300">
                Firebase
              </span>
            </div>

            {/* LINKS */}
            <div className="mt-5 flex justify-between gap-4">
              <a
                href="https://expense-tracker-822.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative manrope text-sm font-semibold text-white
        hover:text-white transition-colors duration-300
        after:absolute after:left-0 after:-bottom-1
        after:h-[1px] after:w-full after:origin-left
        after:scale-x-0 after:bg-stone-300
        after:transition-transform after:duration-300
        after:ease-out hover:after:scale-x-100"
              >
                Live Demo ↗
              </a>

              {/*
    <a
        href="https://github.com/heyvishit"
        target="_blank"
        rel="noopener noreferrer"
        className="manrope text-sm font-semibold text-gray-400 hover:text-white"
    >
        GitHub ↗
    </a>
    */}
            </div>

          </div>
        </div>

        {/*Project end div*/}
      </div>
    </section>
  );
}

export default Projects;
