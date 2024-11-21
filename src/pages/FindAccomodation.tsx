import { IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSelectOption, IonSelect, IonText, IonCard, IonList, IonCardHeader, IonCardTitle, IonInput, IonButtons, IonBackButton } from '@ionic/react';
import '../styles/FindAccomodation.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const FindAccomodation: React.FC = () => {
    const history = useHistory();

    // Mock data for recommendations
    const recommendations = [
        { id: 1, name: "Luxury Hotel", type: "Hotel", price: 500, rating: 5, image: "/assets/accomodation/LuxuryHotel.jpg" },
        { id: 2, name: "City Hostel", type: "Hostel", price: 50, rating: 3, image: "/assets/accomodation/CityHostel.png" },
        { id: 3, name: "Beach House", type: "House", price: 450, rating: 4, image: "/assets/accomodation/BeachHouse.png" },
        { id: 4, name: "Budget Hotel", type: "Hotel", price: 150, rating: 3, image: "/assets/accomodation/BudgetHotel.png" }
    ];

    const [type, setType] = useState<string | undefined>('All');
    const [budget, setBudget] = useState<number>(500);

    // Filter recommendations based on selected type and budget
    const filteredRecommendations = recommendations.filter(
        (rec) => (type === 'All' || rec.type === type) && rec.price <= budget
    );

    return (
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/createtrip" />
                    </IonButtons>
                    <IonTitle>Find Accommodation</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="fixed">Type</IonLabel>
                    <IonSelect
                        className="right-aligned"
                        value={type}
                        placeholder="Select Type"
                        onIonChange={(e) => setType(e.detail.value)}
                    >
                        <IonSelectOption value="All">All</IonSelectOption>
                        <IonSelectOption value="Hotel">Hotel</IonSelectOption>
                        <IonSelectOption value="Hostel">Hostel</IonSelectOption>
                        <IonSelectOption value="House">House</IonSelectOption>
                    </IonSelect>
                </IonItem>

                <IonItem>
                    <IonLabel position="fixed">Budget (€)</IonLabel>
                    <IonInput
                        className="right-aligned"
                        type="number"
                        value={budget}
                        placeholder="Enter your budget"
                        onIonChange={(e) => setBudget(parseFloat(e.detail.value!) || 0)}
                    />
                </IonItem>

                <IonText color="medium">
                    <h2>Recommendations</h2>
                </IonText>

                <IonList>
                    {filteredRecommendations.map((rec) => (
                        <IonCard key={rec.id}>
                            <div className="aspect-ratio-16-9">
                                <IonImg src={rec.image} className="image" />
                                <div className="price-overlay">{rec.price}€</div>
                            </div>
                            <IonCardHeader>
                                <div className="title-rating">
                                    <IonCardTitle>{rec.name}</IonCardTitle>
                                    <p className="rating">{"★".repeat(rec.rating)}{"☆".repeat(5 - rec.rating)}</p>
                                </div>
                            </IonCardHeader>
                        </IonCard>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default FindAccomodation;
