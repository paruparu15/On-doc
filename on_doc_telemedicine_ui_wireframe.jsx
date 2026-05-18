export default function OnDocWireframe() {
  const screens = [
    {
      title: 'Login / Sign Up',
      subtitle: 'Welcome to ON-DOC',
      icon: '🔐',
      category: 'Authentication',
      content: (
        <div className="space-y-3">
          <input
            className="w-full border border-green-300 rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Email Address"
          />
          <input
            className="w-full border border-green-300 rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Password"
            type="password"
          />
          <button className="w-full bg-green-700 text-white rounded-full p-3 font-semibold hover:bg-green-800 transition">
            Login
          </button>
          <button className="w-full border-2 border-yellow-500 text-yellow-700 rounded-full p-3 font-semibold hover:bg-yellow-50 transition">
            Create Account
          </button>
        </div>
      ),
    },
    {
      title: 'Home Dashboard',
      subtitle: 'Quick Healthcare Access',
      icon: '🏠',
      category: 'Dashboard',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-700 rounded-lg p-3">
            <p className="text-xs text-green-700 font-semibold">👋 Welcome back, Patient</p>
            <p className="text-xs text-green-600 mt-1">Your next appointment: Tomorrow at 2 PM</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: 'Consult Doctor', emoji: '👨‍⚕️', color: 'green' },
              { name: 'Book Appointment', emoji: '📅', color: 'yellow' },
              { name: 'Medical Records', emoji: '📋', color: 'green' },
              { name: 'Health Tips', emoji: '❤️', color: 'yellow' },
            ].map((item) => (
              <button
                key={item.name}
                className={`rounded-2xl p-3 text-center font-semibold shadow-sm transition hover:shadow-md ${
                  item.color === 'green'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                <div className="text-lg mb-1">{item.emoji}</div>
                <div className="text-xs">{item.name}</div>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Doctor Consultation',
      subtitle: 'Video Consultation',
      icon: '📹',
      category: 'Consultation',
      content: (
        <div className="space-y-3">
          <div className="bg-gray-100 rounded-2xl h-40 flex items-center justify-center text-gray-500 border border-gray-200">
            <div className="text-center">
              <div className="text-3xl mb-2">📹</div>
              <p className="text-xs">Dr. Maria Santos</p>
              <p className="text-xs text-gray-400">Connected</p>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <button className="flex-1 bg-green-600 text-white rounded-xl p-2 text-xs font-semibold hover:bg-green-700 transition">
              🔇 Mute
            </button>
            <button className="flex-1 bg-red-500 text-white rounded-xl p-2 text-xs font-semibold hover:bg-red-600 transition">
              ❌ End
            </button>
          </div>
          <input
            className="w-full border border-green-300 rounded-xl p-2 text-xs focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Send message..."
          />
        </div>
      ),
    },
    {
      title: 'Appointment Booking',
      subtitle: 'Schedule Consultation',
      icon: '📅',
      category: 'Booking',
      content: (
        <div className="space-y-3">
          <div className="bg-green-50 rounded-lg p-2 border border-green-200">
            <label className="text-xs font-semibold text-green-700 block mb-2">Hospital</label>
            <select className="w-full border border-green-300 rounded-lg p-2 text-xs focus:outline-none focus:ring-2 focus:ring-green-600">
              <option>Select Hospital</option>
              <option>Bacolod Medical Center</option>
              <option>City Health Hospital</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1">Date</label>
              <input type="date" className="w-full border border-green-300 rounded-lg p-2 text-xs focus:outline-none focus:ring-2 focus:ring-green-600" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1">Time</label>
              <input type="time" className="w-full border border-green-300 rounded-lg p-2 text-xs focus:outline-none focus:ring-2 focus:ring-green-600" />
            </div>
          </div>

          <button className="w-full bg-green-700 text-white rounded-full p-2 font-semibold text-xs hover:bg-green-800 transition">
            Confirm Appointment
          </button>
        </div>
      ),
    },
    {
      title: 'Follow-Up & Records',
      subtitle: 'Track Your Health',
      icon: '📊',
      category: 'Records',
      content: (
        <div className="space-y-3">
          <div className="bg-green-50 rounded-2xl p-3 border border-green-200 shadow-sm">
            <h3 className="font-semibold text-xs text-green-700">Latest Consultation</h3>
            <p className="text-xs text-green-600 mt-1">✓ Follow-up checkup scheduled</p>
            <p className="text-xs text-green-500 mt-1">May 20, 2026</p>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-3 border border-yellow-200 shadow-sm">
            <h3 className="font-semibold text-xs text-yellow-700">Doctor Recommendations</h3>
            <p className="text-xs text-yellow-600 mt-1">Continue medication and rest</p>
          </div>

          <button className="w-full bg-green-700 text-white rounded-full p-2 font-semibold text-xs hover:bg-green-800 transition">
            📥 Download Record
          </button>
        </div>
      ),
    },
    {
      title: 'Online Pharmacy',
      subtitle: 'Order Medications',
      icon: '💊',
      category: 'Pharmacy',
      content: (
        <div className="space-y-3">
          <input
            className="w-full border border-green-300 rounded-xl p-2 text-xs focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Search medications..."
          />
          <div className="space-y-2">
            {['Aspirin 500mg', 'Vitamin C 1000mg', 'Amoxicillin 500mg'].map((med) => (
              <div key={med} className="bg-green-50 border border-green-200 rounded-lg p-2 flex justify-between items-center">
                <div>
                  <p className="text-xs font-semibold text-gray-800">{med}</p>
                  <p className="text-xs text-gray-500">₱150.00</p>
                </div>
                <button className="bg-yellow-500 text-xs px-2 py-1 rounded-lg text-dark font-semibold hover:bg-yellow-600">
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-green-200 shadow-sm z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">
            ON-<span className="text-yellow-500">DOC</span>
          </h1>
          <div className="flex gap-4">
            <button className="text-xs px-4 py-2 rounded-lg text-gray-600 hover:text-green-700 transition font-semibold">
              Features
            </button>
            <button className="text-xs px-4 py-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-xs font-semibold mb-4 border border-yellow-300">
          ● Telemedicine App UI Preview
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="text-green-700">Connect</span> with Licensed Doctors <span className="italic text-green-700">Instantly</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Experience seamless healthcare from your phone. Video consultations, appointments, medical records, and online pharmacy all in one platform.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition">
            Explore Screens
          </button>
          <button className="border-2 border-yellow-500 text-yellow-600 px-8 py-3 rounded-full font-semibold hover:bg-yellow-50 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Screens Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">App Screens</h2>
          <p className="text-gray-600">Explore all key user interfaces</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {screens.map((screen, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-green-100 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-green-700 to-green-600 text-white p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-4xl opacity-20 transform translate-x-4 -translate-y-4">
                  {screen.icon}
                </div>
                <div className="relative z-10">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full mb-3">
                    {screen.category}
                  </span>
                  <h2 className="text-2xl font-bold mb-1">{screen.title}</h2>
                  <p className="text-sm opacity-90">{screen.subtitle}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">{screen.content}</div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-green-100">
                <button className="w-full bg-green-100 text-green-700 hover:bg-green-200 transition rounded-lg p-2 text-xs font-semibold">
                  ▶ View Full Flow
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Highlight */}
      <section className="bg-green-700 text-white py-12 my-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: '24/7', label: 'Available' },
              { num: '500+', label: 'Doctors' },
              { num: '100%', label: 'Secure' },
              { num: '98%', label: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold mb-2">{stat.num}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 mb-0">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to start your <span className="text-yellow-400">health journey?</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Download ON-DOC today and get connected with licensed doctors in minutes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
              Download Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-50 border-t border-green-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              ON-<span className="text-yellow-500">DOC</span>
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Telemedicine Healthcare Platform — Connect with licensed doctors via video call
            </p>
            <div className="flex justify-center gap-6 mb-6 flex-wrap">
              <a href="#" className="text-sm text-gray-600 hover:text-green-700 transition">
                About
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-green-700 transition">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-green-700 transition">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-green-700 transition">
                Contact
              </a>
            </div>
            <p className="text-xs text-gray-500">
              © 2026 ON-DOC. All rights reserved. Available in the Philippines.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}