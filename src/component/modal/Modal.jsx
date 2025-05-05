import YouTube from 'react-youtube';
import './Modal.css';

const Modal = ({ isOpen , children}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <YouTube />
            </div>
        </div>
    )
}

export default Modal; 




// import YouTube from 'react-youtube';
// import './Modal.css';

// const Modal = ({ isOpen, videoId, onClose }) => {
//   if (!isOpen) return null;

//   const opts = {
//     height: '390',
//     width: '640',
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <button className="close-button" onClick={onClose}>X</button>
//         <YouTube videoId={videoId} opts={opts} />
//       </div>
//     </div>
//   );
// };

// export default Modal;
