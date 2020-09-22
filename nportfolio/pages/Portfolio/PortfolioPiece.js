import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from "../../styles/Home.module.css";

export default function PortfolioPiece({ folio, index }) {
  const [open, setopen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const handleClickOpen = (scrollType) => () => {
    setopen(true);
    console.log("opening modal");
    setScroll(scrollType);
  };
  const handleClose = () => setopen(false);

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
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" style={{ color: "darkred" }}>
          {folio.name}
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <img className={styles.card} src={folio.image} alt={folio.alt} />
            <br />
            <h3 style={{color:"darkgreen"}}>Description</h3>
            <>{folio.description}</>
            {/* {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")} */}
            <h3 style={{color:"darkgreen"}}>Technologies used</h3>
            {Object.keys(folio.tech_used).map((key) => (
              <div>
                <span style={{fontWeight:'bold'}}>{key[0].toUpperCase() + key.slice(1)}: </span>
                 {folio.tech_used[key]}
              </div>
            ))}
          </DialogContentText>
          <DialogActions>
            <a href={folio.github}>
              <Button onClick={handleClose} color="primary">
                Github
              </Button>
            </a>
            <a href={folio.site}>
              <Button onClick={handleClose} color="primary">
                Website
              </Button>
            </a>
          </DialogActions>
        </DialogContent>
        <div>
          {/* {[...new Array(50)].map(() => (
            <p>
              `Cras mattis consectetur purus sit amet fermentum. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et.`
            </p>
          ))} */}
        </div>
      </Dialog>
    </div>
  );
}
