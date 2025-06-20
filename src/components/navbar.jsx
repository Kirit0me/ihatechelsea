import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full bg-black flex items-center justify-between px-8 py-3 border-b border-gray-800">
      {/* Left: Logo and links */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <img src="/src/images/chelsea-logo.png" alt="Chelsea FC" className="w-16 h-16 rounded-full bg-white" />
        {/* Links */}
        <ul className="flex gap-6 text-sm font-semibold uppercase tracking-wide">
          <li>Venue</li>
          <li>Chelsea Foundation</li>
          <li><Link to="/lgbtq-flag"><b>Yes to Hate</b></Link></li>
        </ul>
      </div>
      {/* Center: Main Nav */}
      <ul className="flex gap-8 text-sm font-semibold uppercase tracking-wide">
        <li>Lately shit</li>
        <li>Watch boring</li>
        <li><Link to="/hate-comments">Men's Team</Link></li>
        <li>Kitchen workers</li>
        <li>Tickets & Hospital mein players</li>
        <li>Shop fpr depression</li>
        <li>
          <button className="bg-blue-900 px-3 py-1 rounded">More sadness</button>
        </li>
      </ul>
      {/* Right: Auth and Sponsors */}
      <div className="flex items-center gap-4">
        <button className="text-gray-300">Login</button>
        <span>|</span>
        <button className="text-gray-300">Register</button>
        {/* Sponsors (Nike, BingX, etc.) */}
        <img src="/src/images/nike-logo.png" alt="Nike" className="w-6 h-6 mx-2" />
        <img src="/src/images/bingx-logo.png" alt="BingX" className="w-10 h-4 mx-2" />
        <span className="text-red-500 font-bold">LIVE</span>
      </div>
    </nav>
  )
}

export default Navbar
