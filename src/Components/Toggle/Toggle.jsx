// import './switch.css';

// const Toggle = () => {
//     const value = e =>{
//             const man  = e.target.checked
//             console.log(man)
//     }
//     return (
//         <label onChange={value} className='switch'>
//             <input type="checkbox" name="checked" id="" />
//             <span className='slider'/>
//         </label>
//     );
// };

// export default Toggle;
import { useState } from "react";

const Toggle = () => {
  const [icon, setIcon] = useState(false);
  const value = (e) => {
    const man = e.target.checked;
    setIcon(man);
    console.log(man);
  };

  return (
    <label className="relative inline-block w-16 h-8" onChange={value}>
      <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
      <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-red-600 rounded-full transition duration-400 peer-checked:bg-green-500"></span>
      <span className="absolute left-0 top-0 w-8 h-8 bg-gray-200 rounded-full transition duration-400 peer-checked:translate-x-full peer-checked:left-0">
        {icon ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            id="light"
          >
            <path
              fill="#f6e17f"
              d="M26 12a10 10 0 1 0-17.67 6.41 10.85 10.85 0 0 1 2.67 7V26h10v-.65a10.44 10.44 0 0 1 2.56-6.82A9.92 9.92 0 0 0 26 12Z"
            ></path>
            <path
              fill="#68818c"
              d="M11 26h10a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4Z"
            ></path>
            <rect
              width="12"
              height="4"
              x="10"
              y="22"
              fill="#8f9da5"
              rx="1"
              ry="1"
            ></rect>
            <path
              fill="#00000"
              d="M14.74 1.07a11 11 0 0 0-7.17 18A10.77 10.77 0 0 1 9.3 22c-.43.7-.3 1.27-.3 3.05a2 2 0 0 0 1.08 1.76A5 5 0 0 0 15 31h2a5 5 0 0 0 4.92-4.24A2 2 0 0 0 23 25c0-1.75.13-2.37-.32-3.08a9.34 9.34 0 0 1 1.63-2.73 11 11 0 0 0-9.57-18.12ZM21 23v2H11v-2h10Zm-4 6h-2a3 3 0 0 1-2.82-2h7.65A3 3 0 0 1 17 29Zm3.88-8h-9.8a12.59 12.59 0 0 0-2-3.23 9 9 0 1 1 13.69.11 11.51 11.51 0 0 0-1.9 3.12Z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            id="light"
          >
            <path
              fill="#777901"
              d="M26 12a10 10 0 1 0-17.67 6.41 10.85 10.85 0 0 1 2.67 7V26h10v-.65a10.44 10.44 0 0 1 2.56-6.82A9.92 9.92 0 0 0 26 12Z"
            ></path>
            <path
              fill="#68818c"
              d="M11 26h10a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4Z"
            ></path>
            <rect
              width="12"
              height="4"
              x="10"
              y="22"
              fill="#8f9da5"
              rx="1"
              ry="1"
            ></rect>
            <path
              fill="#00000"
              d="M14.74 1.07a11 11 0 0 0-7.17 18A10.77 10.77 0 0 1 9.3 22c-.43.7-.3 1.27-.3 3.05a2 2 0 0 0 1.08 1.76A5 5 0 0 0 15 31h2a5 5 0 0 0 4.92-4.24A2 2 0 0 0 23 25c0-1.75.13-2.37-.32-3.08a9.34 9.34 0 0 1 1.63-2.73 11 11 0 0 0-9.57-18.12ZM21 23v2H11v-2h10Zm-4 6h-2a3 3 0 0 1-2.82-2h7.65A3 3 0 0 1 17 29Zm3.88-8h-9.8a12.59 12.59 0 0 0-2-3.23 9 9 0 1 1 13.69.11 11.51 11.51 0 0 0-1.9 3.12Z"
            ></path>
          </svg>
        )}
      </span>
    </label>
  );
};

export default Toggle;
