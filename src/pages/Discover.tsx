import React, { useState, useEffect } from 'react';
import '../styles/Discover.css'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/react';
import axios from 'axios';

// Define TypeScript interfaces for the expected data structure
interface Event {
  title: string;
  country: string;
  category: string; 
  start_local: string;
  phq_attendance: string;
}

interface ApiResponse {
  count: number;
  overflow: boolean;
  next: string | null;
  previous: string | null;
  results: Event[];
}

const Discovery = () => {
   // State to store events
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [country, setCountry] = useState<string>(''); // State for the country
  const [queryCountry, setQueryCountry] = useState<string>('');

  // List of allowed categories
  const allowedCategories = [
    'concerts', 'conferences', 'expos', 'festivals', 'politics', 'sports'
  ];

  // Fetch event data when the component mounts
  useEffect(() => {
    // Define the function to fetch event data
    const fetchEventData = async () => {
      try {
        const API_URL = 'https://api.predicthq.com/v1/events'; // Replace with your actual API URL
        const API_KEY = 'NW25G_qFyjsUXORO2G7EdokTupW_Eg9yF-I7aBHE'; // Replace with your actual API key
        // Get the current date and time in ISO format
        const currentDate = new Date().toISOString().slice(0, 10)

        const response = await axios.get<ApiResponse>(API_URL, {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
          },
          params: {
            'start_around.origin' : currentDate,
            category: allowedCategories.join(','),
            country: queryCountry || undefined, // Include country if provided
          }
        });

        // Update state with the sorted events
        setEvents(response.data.results);

      } catch (err) {
        // Handle error and update state
        setError('Failed to fetch events.');
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchEventData();
  }, [queryCountry]);

  // Group events by category
  const groupedEvents = events.reduce((acc: { [key: string]: Event[] }, event) => {
    if (!acc[event.category]) {
      acc[event.category] = [];
    }
    acc[event.category].push(event);
    return acc;
  }, {});

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>Discover</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* All Categories Section */}
        <section>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Search by Country</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="input-container">
                <IonInput
                  value={country}
                  placeholder="Enter country (e.g., US, GB)"
                  onIonChange={(e) => setCountry(e.detail.value!)}
                />
                <IonButton onClick={() => setQueryCountry(country.trim())}>
                  Search
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </section>
        <section>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>All Categories</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="scroll-container">
                {events.map((event, index) => (
                  <div key={index} className="event-card">
                    <IonLabel className="event-label">
                      <h2>{event.title}</h2>
                      <hr className="title-divider" />
                      <div className="event-details">
                        <p><strong>Category:</strong> {event.category}</p>
                        <p><strong>Country:</strong> {event.country}</p>
                        <p><strong>Day:</strong> {event.start_local.slice(0, 10)}</p>
                        <p><strong>Expected Attendance:</strong> {event.phq_attendance || 'Not available'}</p>
                      </div>
                    </IonLabel>
                    <IonButton
                        className="add-button"
                        onClick={() => alert("Added to plan!")}
                      >
                        Add to Plan +
                    </IonButton>
                  </div>
                ))}
              </div>
            </IonCardContent>
          </IonCard>
        </section>

        {/* Category-specific Sections */}
        {allowedCategories.map((category) => {
          const categoryEvents = groupedEvents[category];
          if (categoryEvents && categoryEvents.length > 0) {
            return (
              <section key={category}>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{category.charAt(0).toUpperCase() + category.slice(1)}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div className="scroll-container">
                      {categoryEvents.map((event, index) => (
                        <div key={index} className="event-card">
                        <IonLabel className="event-label">
                      <h2>{event.title}</h2>
                      <hr className="title-divider" />
                      <div className="event-details">
                        <p><strong>Category:</strong> {event.category}</p>
                        <p><strong>Country:</strong> {event.country}</p>
                        <p><strong>Day:</strong> {event.start_local.slice(0, 10)}</p>
                        <p><strong>Expected Attendance:</strong> {event.phq_attendance || 'Not available'}</p>
                      </div>
                      </IonLabel>
                      <IonButton
                          className="add-button"
                          onClick={() => alert("Added to plan!")}
                        >
                          Add to Plan +
                      </IonButton>
                      </div>
                      ))}
                    </div>
                  </IonCardContent>
                </IonCard>
              </section>
            );
          }
          return null;
        })}
      </IonContent>
    </IonPage>
  );
};

export default Discovery;
