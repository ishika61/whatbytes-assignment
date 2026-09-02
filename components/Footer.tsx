import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-blue-950 px-6 py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <h4 className="mb-3 font-semibold">Filters</h4>
          <p className="text-sm text-gray-300">All &nbsp; Electronics</p>
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
            
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800"
            >
              <Facebook size={16} />
            </a>
            
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800"
            >
              <Twitter size={16} />
            </a>
            
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800"
            >
              <Instagram size={16} />
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