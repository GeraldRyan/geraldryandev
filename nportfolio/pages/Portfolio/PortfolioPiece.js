import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import styles from "../../styles/Home.module.css";

export default function PortfolioPiece({ folio, index }) {
  const [openModal, setOpenModal] = React.useState(false);
  const handleClick = () => {
    setOpenModal(true);
    console.log("opening modal");
  };
  const closeModal = () => setOpenModal(false);
  return (
    <div key={index}>
      <Button onClick={handleClick}>
        <img className={styles.card} src={folio.image} alt={folio.alt} />
      </Button>

      <Dialog open={openModal} onClose={closeModal}>
        <div>
          <h2>{folio.name}</h2>
          <p>{folio.description}</p>
          <a href={folio.site}>
            <button>Visit Website</button>
          </a>
        </div>
      </Dialog>
    </div>
  );
}
