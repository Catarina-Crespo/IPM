import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  IonRadioGroup,
  IonRadio,
  IonCheckbox,
  IonButton,
  IonIcon,
  IonRange,
} from "@ionic/react";
import { close } from "ionicons/icons";

import "../styles/Filters.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
  pt: 3,
};

interface FiltersProps {
  open: boolean;
  onClose: () => void;
}

const Filters: React.FC<FiltersProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <button style={{ background: "none" }} onClick={onClose}>
            <IonIcon icon={close} size="large"></IonIcon>
          </button>
        </div>
        <h2 id="parent-modal-title">Choose your filters</h2>

        <p>Price range (€)</p>
        <IonRange
          aria-label="Dual Knobs Range"
          dualKnobs={true}
          max={200}
          value={{
            lower: 0,
            upper: 10,
          }}
          pin={true}
          pinFormatter={(value: number) => `${value}`}
        ></IonRange>

        <p>Activity type</p>
        <div>
          <IonCheckbox labelPlacement="end">Indoors</IonCheckbox>
          <br />
          <IonCheckbox labelPlacement="end">Outdoors</IonCheckbox>
          <br /><br/>
          <IonCheckbox labelPlacement="end">Museums</IonCheckbox>
          <br />
          <IonCheckbox labelPlacement="end">Sports</IonCheckbox>
          <br />
          <IonCheckbox labelPlacement="end">Monuments</IonCheckbox>
          <br />
          <IonCheckbox labelPlacement="end">Food</IonCheckbox>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <IonButton style={{ margin: "0 10px" }}>Apply</IonButton>
        </div>
      </Box>
    </Modal>
  );
};

export default Filters;
