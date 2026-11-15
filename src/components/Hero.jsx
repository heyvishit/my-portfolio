import { useState, useEffect } from "react";
import { Copy, Check, Music } from "lucide-react";

function Hero() {
  const [copied, setCopied] = useState(false);
  const [track, setTrack] = useState(null);

  const DISCORD_ID = "1571537589201019087";

  const handleCopy = async () => {
    await navigator.clipboard.writeText("heyvishit@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch(
          `https://api.lanyard.rest/v1/users/${DISCORD_ID}`
        );

        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }

        const json = await res.json();

        if (!json.success) {
          throw new Error("Lanyard API request failed");
        }

        const spotify = json.data?.spotify;

        if (spotify) {
          setTrack({
            isPlaying: true,
            title: spotify.song,
            artist: spotify.artist.replaceAll("; ", ", "),
            albumImageUrl: spotify.album_art_url,
            songUrl: `https://open.spotify.com/track/${spotify.track_id}`,
          });
        } else {
          setTrack(null);
        }
      } catch (err) {
        console.error("Lanyard fetch error:", err);
      }
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 15000); // Refresh every 15s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col justify-start gap-3 pt-12">
      {/* Profile Image + Name */}
      <div className="flex items-center gap-4">
        <img
          src="/profile.jpg"
          alt="Vishit Bari"
          className="h-20 w-20 rounded-sm border border-dashed border-gray-400 object-cover"
        />

        <div>
          <h1 className="jetbrains-mono text-3xl leading-tight tracking-[-0.08em] text-white">
            VISHIT BARI
          </h1>

          <div className="major-mono flex flex-wrap gap-2 text-[10px] font-bold tracking-[-0.05em] text-gray-400 sm:text-sm sm:tracking-[-0.10em]">
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
              behavior: "smooth",
            })
          }
          className="manrope rounded-sm border border-gray-400 px-3 py-1.5 text-sm text-white transition-colors duration-200 hover:bg-white hover:text-black"
        >
          Contact Me
        </button>
      </div>

      {/* Spotify Status Bar */}

      {/* Spotify Status Bar */}
      <div className="mt-3 max-w-sm">
        {track ? (
          <a
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-sm border border-dashed border-gray-600 p-2 transition-colors duration-200 hover:border-white"
          >
            <img
              src={track.albumImageUrl}
              alt={track.title}
              className="h-9 w-9 rounded-sm object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            />

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                <span className="jetbrains-mono text-[10px] uppercase tracking-wider text-gray-400">
                  Now Playing
                </span>
              </div>

              <p className="manrope truncate text-xs font-medium text-white">
                {track.title}
                <span className="font-normal text-gray-400">
                  {" · "}{track.artist}
                </span>
              </p>
            </div>
          </a>
        ) : (
          <div className="flex items-center gap-2 rounded-sm border border-dashed border-gray-800 p-2 text-gray-500">
            <Music size={14} />
            <span className="jetbrains-mono text-[10px]">
              Not playing anything on Spotify
            </span>
          </div>
        )}
      </div>

    </section>
  );
}

export default Hero;
