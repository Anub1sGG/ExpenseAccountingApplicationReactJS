import React, { useState } from "react";
import "../CSS/CostForm.css";

const CostForm = ({ onSaveCostData, onCancel }) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    onSaveCostData(costData);

    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };
  return (
    <form onSubmit={submitHandler} className="new-cost__controls">
      <div className="new-cost__control">
        <label>Название</label>
        <input type="text" value={inputName} onChange={nameChangeHandler} />
      </div>
      <div className="new-cost__control">
        <label>Сумма</label>
        <input
          value={inputAmount}
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-cost__control">
        <label>Дата</label>
        <input
          value={inputDate}
          type="date"
          min="2019-01-01"
          step="2025-12-31"
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-cost__actions">
        <button type="submit">Добавить расходы</button>
        <button type="button" onClick={onCancel}>
          Отмена
        </button>
      </div>
    </form>
  );
};

export default CostForm;

// import { useState } from "react";
// import "../CSS/CostForm.css";

// const CostForm = ({ onSaveCostData, onCancel }) => {
//   const [inputName, setInputName] = useState("");
//   const [inputAmount, setInputAmount] = useState("");
//   const [inputDate, setInputDate] = useState("");

//   const nameChangeHandler = (event) => setInputName(event.target.value);
//   const amountChangeHandler = (event) => setInputAmount(event.target.value);
//   const dateChangeHandler = (event) => setInputDate(event.target.value);

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const costData = {
//       description: inputName,
//       amount: +inputAmount,
//       date: new Date(inputDate),
//     };

//     onSaveCostData(costData);

//     setInputName("");
//     setInputAmount("");
//     setInputDate("");
//   };

//   return (
//     <form onSubmit={submitHandler} className="new-cost__controls">
//       <div className="new-cost__control">
//         <label>Название</label>
//         <input type="text" value={inputName} onChange={nameChangeHandler} />
//       </div>
//       <div className="new-cost__control">
//         <label>Сумма</label>
//         <input
//           type="number"
//           value={inputAmount}
//           min="0.01"
//           step="0.01"
//           onChange={amountChangeHandler}
//         />
//       </div>
//       <div className="new-cost__control">
//         <label>Дата</label>
//         <input
//           type="date"
//           value={inputDate}
//           min="2019-01-01"
//           max="2025-12-31"
//           onChange={dateChangeHandler}
//         />
//       </div>
//       <div className="new-cost__actions">
//         <button type="submit">Добавить расходы</button>
//         <button type="button" onClick={onCancel}>
//           Отмена
//         </button>
//       </div>
//     </form>
//   );
// };

// export default CostForm;
