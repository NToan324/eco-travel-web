import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black border-t py-6 mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Eco Travel. All rights reserved.</p>
      </div>
    </footer>
  );
}
