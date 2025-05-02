const Modal = ({ isOpen }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Modal;