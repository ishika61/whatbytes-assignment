function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );<footer className="mt-auto bg-[#0f1f4d] px-6 py-10 text-white"></footer>
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.8.1c.5 1.6 2 2.8 3.8 2.8A8.3 8.3 0 0 1 2 18.6a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2.1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto bg-blue-950 px-6 py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <h4 className="mb-3 font-semibold">Filters</h4>
        <ul className="space-y-1 text-sm text-gray-300">
  <li>All</li>
  <li>Electronics</li>
  <li>Clothing</li>
  <li>Home</li>
</ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">About Us</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Follow Us</h4>
          <div className="flex gap-3">
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800">
              <FacebookIcon />
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800">
              <TwitterIcon />
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-xs text-gray-400">
        © 2024 ShopEase. All rights reserved.
      </p>
    </footer>
  );
}