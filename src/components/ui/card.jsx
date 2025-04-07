export function Card({ children, className }) {
    return (
      <div className={`rounded-2xl shadow-md ${className}`}>
        {children}
      </div>
    );
  }
  