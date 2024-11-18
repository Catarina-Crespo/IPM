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
import ExploreContainer from "../components/ExploreContainer";
import "../styles/CheckPlan.css";
import {
  add,
  caretBack,
  chevronBack,
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
import Filters from "../components/Filters";

const CheckPlanPage: React.FC = () => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            >
              <IonSelectOption value="7">7 Sept</IonSelectOption>
              <IonSelectOption value="8">8 Sept</IonSelectOption>
              <IonSelectOption value="9">9 Sept</IonSelectOption>
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
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              09:30
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="timeline_content">
                <div className="titem_info">
                  <span className="titem_activity">Eat</span>
                  <span className="titem_location">
                    <IonIcon icon={locationSharp} /> Florbela
                  </span>
                </div>
                <a>
                  <Icon icon="ic:baseline-directions" />
                </a>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              10:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="timeline_content">
                <div className="titem_info">
                  <span className="titem_activity">Visit Coloseum</span>
                  <span className="titem_location">
                    <IonIcon icon={locationSharp} /> Coloseum
                  </span>
                </div>
                <a>
                  <Icon icon="ic:baseline-directions" />
                </a>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              11:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="timeline_content">
                <div className="titem_info">
                  <span className="titem_activity">Code</span>
                  <span className="titem_location">
                    <IonIcon icon={locationSharp} /> Florbela
                  </span>
                </div>
                <a>
                  <Icon icon="ic:baseline-directions" />
                </a>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              13:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <div className="timeline_content">
                <div className="titem_info">
                  <span className="titem_activity">Lunch</span>
                  <span className="titem_location">
                    <IonIcon icon={locationSharp} /> Pizzaria La Rua
                  </span>
                </div>
                <a>
                  <Icon icon="ic:baseline-directions" />
                </a>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <Filters open={open} onClose={handleClose} />

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
