type Props = {
  handleCloseModal: () => void,
};

export const Modal: React.FC<Props> = ({ handleCloseModal }) => {
  return (
    <form className="modal">
      <div className="modal__inputs">
        <input type="text" className="modal__input" />
        <input type="text" className="modal__input" />
        <input type="text" className="modal__input" />
      </div>
      <div className="modal__buttons">
        <button className="modal__button" onClick={() => handleCloseModal()}>Cancel</button>
        <button className="modal__button">Add</button>
      </div>
    </form>
  );
};