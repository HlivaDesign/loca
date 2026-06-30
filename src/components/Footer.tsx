import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-white/80 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div className="flex flex-col gap-4">
            {/* The invert and mix-blend-screen classes will make the black text transparent against the dark background. 
                We also use brightness(2) to ensure it stays white enough. */}
            <Image
              src="/images/logo.png"
              alt="Loca.hu"
              width={120}
              height={40}
              className="h-9 w-auto object-contain self-start invert mix-blend-screen opacity-90"
              style={{ filter: "invert(1) brightness(2) contrast(1.2)" }}
            />
            <p className="text-sm text-white/50 leading-relaxed">
              Loca.hu — curated, focused, purposeful. One product at a time,
              always the best of its kind.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider font-serif">
              Contact
            </h4>
            <p className="text-sm text-white/50">support@loca.hu</p>
            <p className="text-sm text-white/50">Mon–Fri, 9:00–17:00</p>
            <p className="text-sm text-white/50">Budapest, Hungary</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider font-serif">
              Legal
            </h4>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Terms &amp; Conditions</a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Imprint / Company Info</a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Loca.hu — All rights reserved.</p>
          <p>Designed for fast, focused shopping.</p>
        </div>
      </div>
    </footer>
  );
}
