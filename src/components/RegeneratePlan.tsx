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
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";

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
  // State for date input, radio selection, and weather checkbox
  const [dateValue, setDateValue] = React.useState<Dayjs | null>(dayjs("2024-11-22"));
  const [radioValue, setRadioValue] = React.useState<string>("now");
  const [isWeatherChecked, setIsWeatherChecked] =
    React.useState<boolean>(false);

  // Handle date change for DateTimePicker
  const handleDateChange = (newValue: Dayjs | null) => {
    setDateValue(newValue); // Update the date value
  };

  // Handle radio button change
  const handleRadioChange = (event: CustomEvent) => {
    setRadioValue(event.detail.value);
  };

  const handleCheckboxChange = (event: CustomEvent) => {
    setIsWeatherChecked(event.detail.checked); // Get the "checked" value from event.detail
  };

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
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Regenerate:
        </Typography>

        <div
          style={{
            margin: "20px 0",
            marginBottom: "40px",
            color: "var(--ion-color-primary)",
          }}
        >
          <IonRadioGroup value={radioValue} onIonChange={handleRadioChange}>
            <IonRadio value="now" labelPlacement="end">
              from now
            </IonRadio>
            <br />

            <div style={{display:'flex', alignContent:'center'}}>
              <IonRadio value="from" labelPlacement="end">from:</IonRadio>
              {/* Date input */}
              
              <span style={{marginLeft:'10px'}}></span>
              

            </div>
            <br />
          </IonRadioGroup>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <MobileDateTimePicker
                  label="Specify the time"
                  openTo="day"
                  value={dateValue}
                  format="DD-MM-YYYY hh:mm"
                  onChange={(newValue) => {
                    console.log('Date changed:', newValue);  // Debugging
                    handleDateChange(newValue);
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
        </div>

        <IonCheckbox
          labelPlacement="end"
          checked={isWeatherChecked}
          onIonChange={handleCheckboxChange} // Corrected event handler
        >
          Consider weather
        </IonCheckbox>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <IonButton fill="outline" style={{ margin: "0 10px" }} onClick={onClose}>
            Save
          </IonButton>
          <IonButton style={{ margin: "0 10px" }} onClick={() => {alert("Not implemented")}}>Regenerate</IonButton>
        </div>
      </Box>
    </Modal>
  );
};

export default RegeneratePlan;
