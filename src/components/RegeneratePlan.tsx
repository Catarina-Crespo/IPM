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
} from "@ionic/react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { close } from "ionicons/icons";

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

interface RegeneratePlanProps {
  open: boolean;
  onClose: () => void;
}

const RegeneratePlan: React.FC<RegeneratePlanProps> = ({ open, onClose }) => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <button style={{background:'none'}} onClick={onClose}>
            <IonIcon icon={close} size="large"></IonIcon>
          </button>
        </div>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Regenerate from:
        </Typography>

        <div style={{ margin: "20px 0", marginBottom: "40px" }}>
          <IonRadioGroup value="now">
            <IonRadio value="now" labelPlacement="end">
              Now
            </IonRadio>
            <br />
            <IonRadio value="from" labelPlacement="end">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en-gb"
              >
                <DemoContainer components={["TimePicker"]}>
                  <TimePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    format="hh:mm"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </IonRadio>

            <br />
          </IonRadioGroup>
        </div>

        <IonCheckbox labelPlacement="end">Consider weather</IonCheckbox>

        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop:'30px'}}>
          <IonButton fill="outline" style={{margin:'0 10px'}}>Save</IonButton>
          <IonButton style={{margin:'0 10px'}}>Regenerate</IonButton>
        </div>
      </Box>
    </Modal>
  );
};

export default RegeneratePlan;
