import { useState } from "react";
import { AnimatePresence } from "framer-motion"; // Импортируем AnimatePresence
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import ShowForm from "./components/NewCost/ShowForm";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2025, 2, 17),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2024, 7, 27),
    description: "MacBook",
    amount: 1299.99,
  },
  {
    id: "c3",
    date: new Date(2025, 8, 11),
    description: "IMac",
    amount: 2999.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const [formVisible, setFormVisible] = useState(false);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => [cost, ...prevCosts]);
    setFormVisible(false);
  };

  const showFormHandler = () => {
    setFormVisible(true);
  };

  const hideFormHandler = () => {
    setFormVisible(false);
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {!formVisible && <ShowForm key="show" onShowForm={showFormHandler} />}
        {formVisible && (
          <NewCost
            key="form"
            onAddCost={addCostHandler}
            onCancel={hideFormHandler}
          />
        )}
      </AnimatePresence>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
