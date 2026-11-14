
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

function Heatmap() {
  const [months, setMonths] = useState(4);

  const monochromeTheme = {
    dark: [
      "#171717",
      "#404040",
      "#737373",
      "#a3a3a3",
      "#ffffff",
    ],
  };

  // Responsive month count
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateMonths = () => {
      setMonths(mediaQuery.matches ? 8 : 4);
    };

    updateMonths();

    mediaQuery.addEventListener("change", updateMonths);

    return () => {
      mediaQuery.removeEventListener("change", updateMonths);
    };
  }, []);

  // Filter contributions
  const showRecentMonths = (contributions) => {
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - months);

    return contributions.filter(({ date }) => {
      return new Date(`${date}T00:00:00`) >= cutoff;
    });
  };

  return (
    <section className="pt-12">
      <div className="p-6 text-white bg-neutral-900/50 border border-neutral-800 rounded-xl">
        <div className="flex justify-center w-full">
          <GitHubCalendar
            username="heyvishit"
            colorScheme="dark"
            theme={monochromeTheme}
            transformData={showRecentMonths}
            blockSize={12}
            blockMargin={4}
          />
        </div>
      </div>
    </section>
  );
}

export default Heatmap;
