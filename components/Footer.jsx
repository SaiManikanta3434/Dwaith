import Logo from "@/components/Logo";


export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Logo size={160} />
            <p className="text-gray-400 text-sm">
              Delivering innovative digital solutions through technology,
              automation, and cloud excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Web Development</li>
              <li>Mobile Applications</li>
              <li>Cloud Solutions</li>
              <li>AI & Automation</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@dwaith.com</li>
              <li>Phone: +91 XXXXX XXXXX</li>
              <li>Location: India</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Dwaith InfoTech. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
