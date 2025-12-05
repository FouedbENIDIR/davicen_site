export default function ServiceCard({ icon, title, description }) {
    return (
      <div className="group bg-white p-8 rounded-lg border-2 border-gray-200 transition-all duration-500 hover:border-[#6C86FF] hover:shadow-lg hover:-translate-y-1">
        <div className="text-xs font-bold mb-4 uppercase tracking-wider text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2)' }}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-500" style={{ fontFamily: "'Nunito Sans', sans-serif", backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2)' }}>{title}</h3>
        <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-500" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{description}</p>
      </div>
    );
  }
  