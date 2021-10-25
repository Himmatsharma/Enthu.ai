import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function SecondEnd(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler(){
      setModalIsOpen(true);
    }

    function closeModelHandler(){
      setModalIsOpen(false);
    }
    
  return (
    <div>
      <h1>Himmat</h1>
      <div className="card">
          <span>{props.text}</span>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Click Here</button>
        </div>
        {modalIsOpen ? <Modal onCancel={closeModelHandler} onConfirm={closeModelHandler}/>: null}
        {modalIsOpen ? <Backdrop onCancel={closeModelHandler} />: null}
      </div>
    </div>
  );
}

export default SecondEnd;
