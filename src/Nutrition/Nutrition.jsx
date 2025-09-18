const Nutrition = ({ label, quantity, unit }) => {
    return (
      <div className="list">
        <p><b>{label}</b> - {quantity} {unit}</p>
      </div>
    );
  };
  
  export default Nutrition;
  