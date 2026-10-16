// iPhone status bar for the phone mockups, in the app's background colour
export default function PhoneStatusBar() {
  return (
    <div
      className="relative flex items-center justify-between h-9 px-6 text-[11px] font-bold"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
      aria-hidden="true"
    >
      <span>9:41</span>
      <div className="absolute left-1/2 top-2 -translate-x-1/2 w-16 h-[18px] rounded-full" style={{ background: "#0d0d1a" }} />
      <div className="flex items-center gap-1">
        <svg width="15" height="10" viewBox="0 0 15 10" fill="currentColor">
          <rect x="0" y="7" width="3" height="3" rx="0.7" />
          <rect x="4" y="5" width="3" height="5" rx="0.7" />
          <rect x="8" y="2.5" width="3" height="7.5" rx="0.7" />
          <rect x="12" y="0" width="3" height="10" rx="0.7" />
        </svg>
        <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor">
          <path d="M6.5 2.2c1.8 0 3.4.7 4.6 1.8l1-1A8 8 0 0 0 6.5.8 8 8 0 0 0 .9 3l1 1a6.6 6.6 0 0 1 4.6-1.8Z" />
          <path d="M6.5 5c1 0 2 .4 2.6 1l1-1a5 5 0 0 0-3.6-1.5A5 5 0 0 0 2.9 5l1 1c.7-.6 1.6-1 2.6-1Z" />
          <path d="M6.5 7.6c.4 0 .8.2 1 .4L6.5 9.3 5.5 8c.2-.2.6-.4 1-.4Z" />
        </svg>
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
          <rect x="0.5" y="0.5" width="18" height="9" rx="2.5" stroke="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="15" height="6" rx="1.4" fill="currentColor" />
          <path d="M20 3.5v3c.6-.2 1-.8 1-1.5s-.4-1.3-1-1.5Z" fill="currentColor" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}
