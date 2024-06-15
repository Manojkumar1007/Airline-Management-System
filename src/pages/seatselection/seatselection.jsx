// import React, { useState } from "react";
// import "./seatselection.css";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { Info } from "../../Helper/helper";

// const Seat = ({ seatLabel, isSelected, onSeatClick }) => {
//   return (
//     <button
//       className={`seat ${isSelected ? "selected" : ""}`}
//       onClick={() => onSeatClick(seatLabel)}
//     >
//       {seatLabel}
//     </button>
//   );
// };

// const Seatselection = () => {
//   const {allInf,setAllInf} = useContext(Info);
//     const {seat} = allInf;
//   const navigate = useNavigate();
//   const [selectedSeat, setSelectedSeat] = useState(null);

//   const handleSeatClick = (seatLabel) => {
//     setSelectedSeat(seatLabel);
//   };

//   const handleConfirmClick = () => {
//     if (selectedSeat) {
//       seat:seatLabel,
//       navigate('/finalconfirmation');
//     } else {
//       alert("Please select a seat before confirming.");
//     }
//   };

//   const rows = 28;
//   const seatLetters = ["A", "B", "C", "D", "E", "F"];

//   return (
//     <div className="seats">
//       <h1>Flight Seat Booking</h1>
//       <div className="seating-chart">
//         {Array.from({ length: rows }).map((_, rowIndex) => (
//           <div className="seat-row" key={`row-${rowIndex + 1}`}>
//             {seatLetters.map((letter, colIndex) => (
//               <div
//                 className={`seat-column ${colIndex == 3 ? "gap-c-d" : ""}`}
//                 key={`row-${rowIndex + 1}-${letter}`}
//               >
//                 <Seat
//                   key={`row-${rowIndex + 1}-${letter}`}
//                   seatLabel={`${rowIndex + 1}${letter}`}
//                   isSelected={selectedSeat === `${rowIndex + 1}${letter}`}
//                   onSeatClick={handleSeatClick}
//                 />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <button className="confirm-button" onClick={handleConfirmClick}>Confirm</button>
//     </div>
//   );
// };

// export default Seatselection;

import React, { useState, useContext } from "react";
import "./seatselection.css";
import { useNavigate } from "react-router-dom";
import { Info } from "../../Helper/helper";

const Seat = ({ seatLabel, isSelected, onSeatClick }) => {
  return (
    <button
      className={`seat ${isSelected ? "selected" : ""}`}
      onClick={() => onSeatClick(seatLabel)}
    >
      {seatLabel}
    </button>
  );
};

const Seatselection = () => {
  const { allInf, setAllInf } = useContext(Info);
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatClick = (seatLabel) => {
    setSelectedSeat(seatLabel);
  };

  const handleConfirmClick = () => {
    if (selectedSeat) {
      setAllInf({ ...allInf, seat: selectedSeat });
      navigate('/finalconfirmation');
    } else {
      alert("Please select a seat before confirming.");
    }
  };

  const rows = 28;
  const seatLetters = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="seats">
      <h1>Flight Seat Booking</h1>
      <div className="seating-chart">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div className="seat-row" key={`row-${rowIndex + 1}`}>
            {seatLetters.map((letter, colIndex) => (
              <div
                className={`seat-column ${colIndex === 3 ? "gap-c-d" : ""}`}
                key={`row-${rowIndex + 1}-${letter}`}
              >
                <Seat
                  key={`row-${rowIndex + 1}-${letter}`}
                  seatLabel={`${rowIndex + 1}${letter}`}
                  isSelected={selectedSeat === `${rowIndex + 1}${letter}`}
                  onSeatClick={handleSeatClick}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="confirm-button" onClick={handleConfirmClick}>
        Confirm
      </button>
    </div>
  );
};

export default Seatselection;
