import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../styles/CheckPlan.css";
import {
  close,
  locationSharp,
  settings,
  sunny,
} from "ionicons/icons";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Icon } from "@iconify/react";

import image from "../img/sunny.jpg";
import RegeneratePlan from "../components/RegeneratePlan";

import eventsData from '../data/events.json';

// Helper function to convert duration string like "2h", "30min" into minutes
const convertDurationToMinutes = (duration: string) => {
  const timeParts = duration.split(" ");
  let minutes = 0;

  timeParts.forEach((part) => {
    if (part.includes("h")) {
      minutes += parseInt(part) * 60; // Convert hours to minutes
    } else if (part.includes("min")) {
      minutes += parseInt(part); // Add minutes directly
    }
  });

  return minutes;
};

// Function to format time in "HH:mm"
const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}:${mins < 10 ? "0" + mins : mins}`;
};

const CheckPlanPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<string>('');
  const [filteredEvents, setFilteredEvents] = React.useState<any[]>([]);

  // Handle date change
  const handleDateChange = (e: any) => {
    const date = e.detail.value;
    setSelectedDate(date);

    // Filter events based on the selected date
    const eventsForSelectedDate = eventsData.filter(event => event.date === date);
    setFilteredEvents(eventsForSelectedDate);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Variable to keep track of the accumulated time (in minutes)
  let accumulatedMinutes = 9 * 60; // Starting time is 9:00 (in minutes)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <IonTitle>Plan Details </IonTitle>
            <IonButton fill="clear">
              <IonIcon icon={close} size="large"></IonIcon>
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="weather_div">
          <div>
            <img src={image} />
          </div>
          <h1>
            Rome <IonIcon icon={sunny} className="title_icon"></IonIcon>
          </h1>
        </div>

        <IonList>
          <IonItem>
            <IonSelect
              aria-label="Day"
              interface="popover"
              placeholder="Select a date"
              onIonChange={handleDateChange}
            >
              <IonSelectOption value="7 Sept">7 Sept</IonSelectOption>
              <IonSelectOption value="8 Sept">8 Sept</IonSelectOption>
              <IonSelectOption value="9 Sept">9 Sept</IonSelectOption>
              <IonSelectOption value="10 Sept">10 Sept</IonSelectOption>
              <IonSelectOption value="11 Sept">11 Sept</IonSelectOption>
              <IonSelectOption value="12 Sept">12 Sept</IonSelectOption>
              <IonSelectOption value="13 Sept">13 Sept</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          {filteredEvents.length === 0 ? (
            <TimelineItem>
              <TimelineContent>No events for this date</TimelineContent>
            </TimelineItem>
          ) : (
            filteredEvents.map((event, index) => {
              // Calculate the start time for each event
              const eventDurationInMinutes = convertDurationToMinutes(event.duration);
              const startTime = formatTime(accumulatedMinutes);
              
              // Update the accumulated time for the next event
              accumulatedMinutes += eventDurationInMinutes;

              return (
                <TimelineItem key={index}>
                  <TimelineOppositeContent color="textSecondary">
                    {startTime}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    {index !== filteredEvents.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="timeline_content">
                      <div className="titem_info">
                        <span className="titem_activity">{event.name}</span>
                        <span className="titem_location">
                          <IonIcon icon={locationSharp} /> {event.location}
                        </span>
                      </div>
                      <a>
                        <Icon icon="ic:baseline-directions" />
                      </a>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              );
            })
          )}
        </Timeline>

        <RegeneratePlan open={open} onClose={handleClose} />

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton onClick={handleOpen}>
            <IonIcon icon={settings}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default CheckPlanPage;
