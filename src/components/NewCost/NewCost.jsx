import { motion } from "framer-motion"; // Импортируем motion
import CostForm from "./CostForm";
import "../CSS/NewCost.css";

const NewCost = ({ onAddCost, onCancel }) => {
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    onAddCost(costData);
  };

  return (
    <motion.div
      className="new-cost"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <CostForm onSaveCostData={saveCostDataHandler} onCancel={onCancel} />
    </motion.div>
  );
};

export default NewCost;
