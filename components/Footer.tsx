// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#f9f5f0] text-gray-700 py-6 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        <p className="mb-2">© {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.</p>
        <p>
          <a href="/privacy" className="hover:text-[#c2996b]">Privacy Policy</a> |{" "}
          <a href="/contact" className="hover:text-[#c2996b]">Contact</a>
        </p>
      </div>
    </footer>
  );
}
