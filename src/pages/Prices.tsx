import { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import { restaurant, bus, map, cart } from "ionicons/icons";
import "../styles/Prices.css";


import supermarketImg from "../img/supermarket.jpg"; // Image for sunny weather
import trainImg from "../img/train.jpeg"; // Image for cloudy weather (updated to correct path)
import restaurantImg from "../img/restaurant.jpg";
import museumImg from "../img/museum.jpg";

const Prices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/checkplan" />
          </IonButtons>
          <IonTitle>Prices</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Prices</IonTitle>
          </IonToolbar>
        </IonHeader>

        {!selectedCategory ? (
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <IonCard button onClick={() => handleCategoryChange("Food")}>
                  <img
                    src={restaurantImg}
                    alt="Food"
                    className="hover-image"
                  />
                  <IonCardHeader>
                    <IonCardTitle>Food</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard
                  button
                  onClick={() => handleCategoryChange("Transport")}
                >
                  <img
                    src={trainImg}
                    alt="Transport"
                    className="hover-image"
                  />
                  <IonCardHeader>
                    <IonCardTitle>Transport</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonCard
                  button
                  onClick={() => handleCategoryChange("Attractions")}
                >
                  <img
                    src={museumImg}
                    alt="Attractions"
                    className="hover-image"
                  />
                  <IonCardHeader>
                    <IonCardTitle>Attractions</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard
                  button
                  onClick={() => handleCategoryChange("Supermarket")}
                >
                  <img
                    src={supermarketImg}
                    alt="Supermarket"
                    className="hover-image"
                  />
                  <IonCardHeader>
                    <IonCardTitle>Supermarket</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        ) : (
          <>
            <IonList className="prices-list">
              <IonItem>
                <IonLabel className="category-title">
                  {selectedCategory} Prices
                </IonLabel>
              </IonItem>
              {selectedCategory === "Food" && (
                <ul className="price-list">
                  <li>
                    <IonItem className="price-item">
                      <IonLabel>Restaurant Meal: 15€</IonLabel>
                    </IonItem>
                  </li>
                  <li>
                    <IonItem className="price-item">
                      <IonLabel>Fast Food: 8€</IonLabel>
                    </IonItem>
                  </li>
                </ul>
              )}
              {selectedCategory === "Transport" && (
                <ul className="price-list">
                  <li>
                    <IonItem className="price-item">
                      <IonLabel>Bus Ticket: 2€</IonLabel>
                    </IonItem>
                  </li>
                  <li>
                    <IonItem className="price-item">
                      <IonLabel>Taxi (per km): 1.5€</IonLabel>
                    </IonItem>
                  </li>
                </ul>
              )}
              {selectedCategory === "Attractions" && (
                <ul className="price-list">
                  <li>
                    <IonItem className="price-item">
                      <IonLabel className="attraction-title">
                        Colosseum
                      </IonLabel>
                    </IonItem>
                    <ul>
                      <li>
                        <IonItem className="price-without-tour">
                          <IonLabel>Without Tour: 12€</IonLabel>
                        </IonItem>
                      </li>
                      <li>
                        <IonItem className="price-with-tour">
                          <IonLabel>With Tour: 20€</IonLabel>
                        </IonItem>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <IonItem className="price-item">
                      <IonLabel className="attraction-title">Museum</IonLabel>
                    </IonItem>
                    <ul>
                      <li>
                        <IonItem className="price-without-tour">
                          <IonLabel>Without Tour: 10€</IonLabel>
                        </IonItem>
                      </li>
                      <li>
                        <IonItem className="price-with-tour">
                          <IonLabel>With Tour: 18€</IonLabel>
                        </IonItem>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
              {selectedCategory === "Supermarket" && (
                <ul className="price-list">
                  <li>
                    <IonItem className="price-item">
                      <IonLabel>Milk (1L): 1€</IonLabel>
                    </IonItem>
                  </li>
                  <li>
                    <IonItem className="price-item">
                      <IonLabel>Bread (500g): 1.5€</IonLabel>
                    </IonItem>
                  </li>
                </ul>
              )}
            </IonList>
            <IonButton
              expand="block"
              color="primary"
              onClick={() => setSelectedCategory(null)}
            >
              Back to Selection
            </IonButton>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Prices;
