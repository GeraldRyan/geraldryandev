import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

export default function PortfolioPieces() {
  const [openModal, setOpenModal] = React.useState(false);
  const handleClick = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);
  return (
    <div>
      <Button onClick={handleClick}>
        Open Modal
      </Button>
        <Dialog open={openModal} onClose={closeModal}>It is dangerous to go alone. Take this</Dialog>
    </div>
  );
}
