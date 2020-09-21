import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from "../../styles/Home.module.css";

export default function PortfolioPiece({ folio, index }) {
  const [openModal, setOpenModal] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const handleClickOpen = (scrollType) => () => {
    setOpenModal(true);
    console.log("opening modal");
    setScroll(scrollType);
  };
  const closeModal = () => setOpenModal(false);

// Material UI Boilerplate code
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
// End

  return (
    <div key={index}>
      <Button onClick={handleClickOpen("paper")}>
        <img className={styles.card} src={folio.image} alt={folio.alt} />
      </Button>

      <Dialog open={openModal} onClose={closeModal}>
        <div>
          <h2>{folio.name}</h2>
          <img className={styles.card} src={folio.image} alt={folio.alt} />

          <p>{folio.description}</p>
          {[...new Array(50)].map(
            () => 
          <p>`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`</p>
          )}
          <a href={folio.site}>
            <button>Visit Website</button>
          </a>
        </div>
      </Dialog>
    </div>
  );
}
