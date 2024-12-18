import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import {
  chevronForward,
  closeOutline,
  earthOutline,
  home,
  search,
  walletOutline,
} from "ionicons/icons";
import "../styles/Tab1.css";
import "../styles/CreateTrip.css";
import CountryCitySelect from "../components/CountryCitySelect";
import { useEffect, useState } from "react";
import Select from "react-select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useHistory } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";

const CreateTripPage: React.FC = () => {
  const history = useHistory(); // useHistory hook for navigation

  // State for each input field value
  const [food, setFood] = useState<number>(0);
  const [accommodation, setAccommodation] = useState<number>(0);
  const [attractions, setAttractions] = useState<number>(0);
  const [transportation, setTransportation] = useState<number>(0);
  const [dailyBudget, setDailyBudget] = useState<number>(0);
  const [totalBudget, setTotalBudget] = useState<number>(0);
  const [selectedBudgetOption, setBudgetSelect] = useState<any | null>(null);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);

  const budgetOptions = [
    { value: "daily", label: "Daily" },
    { value: "total", label: "Total" },
  ];

  // Function to calculate the daily and total budgets
  useEffect(() => {
    if (
      selectedBudgetOption != null &&
      selectedBudgetOption.value === "daily"
    ) {
      const total = food + accommodation + attractions + transportation;
      setDailyBudget(total);
      setTotalBudget(total * 7);
    } else {
      const total = food + accommodation + attractions + transportation;
      //const roundedDaily = Number((Number(total)/7).toFixed(2));
      setDailyBudget(total);
      setTotalBudget(total);
    }
  }, [food, accommodation, attractions, transportation]); // Recalculate whenever any of the inputs change

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          {/* ----------------- Discard button ----------------- */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
            }}
          >
            <IonButton
              fill="clear"
              size="default"
              color="danger"
              onClick={() => history.push("/homepage")}
            >
              <IonIcon slot="start" icon={closeOutline}></IonIcon>Discard Trip
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="form_container">
          {/* ----------------- General Information Section ----------------- */}
          <h2 className="section_title">
            <IonIcon
              aria-hidden="true"
              icon={earthOutline}
              className="section_title_icon"
            />{" "}
            General Information
          </h2>

          <IonInput
            label="Trip Name"
            labelPlacement="floating"
            fill="outline"
            placeholder="e.g. Amazing Trip to Astana"
            clearInput={true}
            className="mod_input"
          ></IonInput>

          <CountryCitySelect />

          <div>
            {/* Trip Start Date */}
            <div style={{ marginBottom: "10px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker
                    label="Trip Start Date"
                    views={["year", "month", "day"]}
                    format="DD/MM/YYYY"
                    openTo="day"
                    minDate={dayjs().startOf("day")} // minimum date for trip start date is today
                    value={startDate}
                    onChange={(newValue) => setStartDate(newValue)} // store the selected start date
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            {/* Trip End Date */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  label="Trip End Date"
                  views={["year", "month", "day"]}
                  format="DD/MM/YYYY"
                  openTo="day"
                  minDate={startDate ? startDate : dayjs().startOf("day")} // use trip start date or today's date as minimum
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          {/* ----------------- Budget Information Section ----------------- */}
          <h2 className="section_title" style={{ marginTop: "50px" }}>
            <IonIcon
              aria-hidden="true"
              icon={walletOutline}
              className="section_title_icon"
            />{" "}
            Budget
          </h2>

          <div className="select_container">
            {selectedBudgetOption && (
              <label className="select_label">Budget Type</label>
            )}
            <Select
              options={budgetOptions}
              value={selectedBudgetOption}
              placeholder="Select a budget type"
              onChange={(e: any) => setBudgetSelect(e)}
              className="custom_select"
            />
          </div>

          {/* -------- Numeric fields -------- */}
          <IonInput
            label="Food"
            labelPlacement="floating"
            fill="outline"
            type="number"
            value={food}
            onIonChange={(e: any) => setFood(Number(e.target.value) || 0)}
            clearInput={true}
            className="mod_input"
          ></IonInput>

          <IonInput
            label="Accommodation"
            labelPlacement="floating"
            fill="outline"
            type="number"
            value={accommodation}
            onIonChange={(e: any) =>
              setAccommodation(Number(e.target.value) || 0)
            }
            clearInput={true}
            className="mod_input"
          ></IonInput>

          <IonInput
            label="Attractions"
            labelPlacement="floating"
            fill="outline"
            type="number"
            value={attractions}
            onIonChange={(e: any) =>
              setAttractions(Number(e.target.value) || 0)
            }
            clearInput={true}
            className="mod_input"
          ></IonInput>

          <IonInput
            label="Transportation"
            labelPlacement="floating"
            fill="outline"
            type="number"
            value={transportation}
            onIonChange={(e: any) =>
              setTransportation(Number(e.target.value) || 0)
            }
            clearInput={true}
            className="mod_input"
          ></IonInput>

          {/* -------- Autosum fields -------- */}
          <div className="auto_sum_container">
            <span className="auto_sum_title">Daily Budget:</span>
            <span className="auto_sum_value">{dailyBudget} €</span>
          </div>

          <div className="auto_sum_container" style={{ marginBottom: "50px" }}>
            <span className="auto_sum_title">Total Budget:</span>
            <span className="auto_sum_value">{totalBudget} €</span>
          </div>

          {/* ----------------- Accomodation Section ----------------- */}

          <h2 className="section_title">
            <IonIcon
              aria-hidden="true"
              icon={home}
              className="section_title_icon"
            />{" "}
            Accomodation
          </h2>

          {/* -------- Accomodation search button -------- */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: "15px",
            }}
          >
            <IonButton
              fill="outline"
              onClick={() => {
                history.push("/findaccomodation");
              }}
            >
              <IonIcon slot="start" icon={search}></IonIcon>
              Search Accomodation
            </IonButton>
          </div>

          {/* -------- Next button -------- */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              borderTop: "solid 1px var(--ion-color-dark)",
              marginTop: "30px",
            }}
          >
            <IonButton
              style={{ marginTop: "20px" }}
              onClick={() => {
                history.push("/createplan");
              }}
            >
              Next
              <IonIcon slot="end" icon={chevronForward}></IonIcon>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CreateTripPage;
