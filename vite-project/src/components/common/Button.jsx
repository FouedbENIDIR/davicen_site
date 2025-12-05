export default function Button({ 
  children, 
  href = null, 
  variant = "primary",
  className = "",
  onClick = null,
  ...props 
}) {
  const baseClasses = "px-8 py-3 rounded-lg font-semibold text-base transition-all duration-500 inline-block cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#6C86FF] to-[#ff9ff2] text-white border-2 border-transparent hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-white text-black border-2 border-[#6C86FF] hover:border-[#ff9ff2] hover:shadow-lg hover:-translate-y-0.5 hover:bg-gray-50",
    accent: "bg-[#004AD] text-white border-2 border-[#004AD] hover:shadow-lg hover:-translate-y-0.5 hover:bg-blue-900"
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={classes}
      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      {...props}
    >
      {children}
    </button>
  );
}