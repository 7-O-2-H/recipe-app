export default function QuantityDropdown({ onSelect, selectedOption }) {
  
  const quantities = [
    {
      id: 1,
      quantity: '1/6',
      value: 0.167
    },
    {
      id: 2,
      quantity: '1/4',
      value: 0.25
    },
    {
      id: 3,
      quantity: '1/3',
      value: 0.33
    },
    {
      id: 4,
      quantity: '1/2',
      value: 0.5
    },
    {
      id: 5,
      quantity: '2/3',
      value: 0.66
    },
    {
      id: 6,
      quantity: '3/4',
      value: 0.75
    },
    {
      id: 7,
      quantity: '5/6',
      value: 0.833
    },
  ];

  // template
  return (
    <div className="quantity-dropdown">
      <select onChange={(e) => onSelect(e.target.value)} value={selectedOption || ''}>
        {quantities.map((quantity) => (
          <option key={quantity.id} value={quantity.value || ''}>
            {quantity.quantity}
          </option>
        ))}
      </select>   
    </div>
  );
};