function Modal(props) {
  
  function cencalHandlar() {
    props.onCancel();
  }

  function confirmHandlar() {
    props.onConfirm();
  }

  return (
    <div>
      <div className="modal">
        <div>
          <p>This is model</p>
          <button className="btn btn --alt" onClick={cencalHandlar}>
            Cancel
          </button>
          <button className="btn btn-warning" onClick={confirmHandlar}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
