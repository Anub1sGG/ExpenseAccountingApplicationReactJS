const ShowForm = ({ onShowForm }) => {
  return (
    <div className="new-cost">
      <button onClick={onShowForm}>Добавить новый расход</button>
    </div>
  );
};

export default ShowForm;
