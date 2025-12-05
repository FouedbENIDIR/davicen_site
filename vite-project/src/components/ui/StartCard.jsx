export default function StartCard({ number = "10+", label = "Années d'expérience" }) {
    return (
      <div className="group bg-white p-6 rounded-lg border-2 border-gray-200 text-center transition-all duration-500 hover:border-[#6C86FF] hover:shadow-lg hover:-translate-y-1">
        <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text" style={{ fontFamily: "'Nunito Sans', sans-serif", backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2)' }}>
          {number}
        </div>
        <div className="text-gray-600 font-medium text-sm uppercase tracking-wide group-hover:text-gray-900 transition-colors duration-500" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          {label}
        </div>
      </div>
    );
  }