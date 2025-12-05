function Card({ icon, title, description }) {
  return (
    <article className="group bg-white rounded-lg p-8 border-2 border-gray-200 transition-all duration-500 hover:border-[#6C86FF] hover:shadow-lg hover:-translate-y-1">
      {icon && (
        <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#6C86FF]/10 to-[#ff9ff2]/10 text-transparent bg-clip-text px-3 py-1.5 rounded-lg text-xs font-semibold mb-3" style={{ backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2)' }}>
          {icon}
        </div>
      )}
      <h3 className="m-0 mb-3 text-xl font-bold text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-500" style={{ fontFamily: "'Nunito Sans', sans-serif", backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2)' }}>{title}</h3>
      <p className="m-0 text-gray-600 group-hover:text-gray-900 transition-colors duration-500" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{description}</p>
    </article>
  );
}

export default Card;
