export default function AnimatedCard({ title, description, children, className = "" }) {
  return (
    <div className={`group bg-white p-8 rounded-lg border-2 border-gray-200 transition-all duration-500 hover:border-[#6C86FF] hover:shadow-lg hover:-translate-y-1 ${className}`}>
      {children}
      {title && <h3 className="text-xl font-bold mb-3 text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-500" style={{ fontFamily: "'Nunito Sans', sans-serif", backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2)' }}>{title}</h3>}
      {description && <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-500" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{description}</p>}
    </div>
  );
}
