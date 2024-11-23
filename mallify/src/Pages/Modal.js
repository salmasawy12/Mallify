import React from "react";

const Modal = ({ isModalOpen, toggleModal }) => {
  if (!isModalOpen) {
    return null; // Do not render the modal if it's not open
  }

  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      style={{
        display: "block",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a dimming effect
      }}
      onClick={toggleModal} // Close modal on outside click
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">User Profile</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={toggleModal} // Close modal on button click
            ></button>
          </div>
          <div className="modal-body">
            <p>This is a modal for user profile actions or information.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={toggleModal} // Close modal
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
