// src/components/Footer.jsx
export default function Footer({ darkMode }) {
    return (
      <footer className={`py-6 mt-10 text-center ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`}>
        <p>Made with  by Ganesh Saini</p>
        <p>Email: ganeshsaini@5486gmail.com | GitHub: <a href=" https://github.com/ganeshsaini-official/" className="underline">ganeshsaini</a></p>
        <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} Ganesh Saini. All rights reserved.</p>
      </footer>
    );
  }
  