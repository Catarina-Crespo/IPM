import {
  IonImg,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/react";
import "../styles/Login.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory for navigation

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const history = useHistory(); // useHistory hook for navigation

  const handleRegister = () => {
    alert("Not implemented");
    history.push("/tab2");
  };

  const handleLogin = () => {
    // If login is successful, redirect to /discover
    history.push("/tab2");

    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    console.log("Logging in with", { email, password });
    // Navigate to Tab1 after successful login
    history.push("/tab1");
  };

  return (
    <IonPage>

      <IonContent>
        <div className="login-container">
          <IonImg
            src="/assets/IPM_Logo.png"
            alt="Loading Image"
            className="login-logo"
          />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <IonInput
              label="Email"
              labelPlacement="floating"
              fill="outline"
              clearInput={true}
              value={email}
              className="mod_input"
              onIonChange={(e) => setEmail(e.detail.value!)}
              required
            ></IonInput>

            <IonInput
                label="Password"
                labelPlacement="floating"
                fill="outline"
                clearInput={true}
                value={password}
                className="mod_input"
                onIonChange={(e) => setPassword(e.detail.value!)}
                type="password"
                required
            ></IonInput>

            {error && (
              <IonText color="danger">
                <p className="ion-padding-top">{error}</p>
              </IonText>
            )}

            <IonButton expand="block" type="submit" className="ion-margin-top">
              Login
            </IonButton>

            <IonButton expand="block" fill="clear" onClick={handleRegister}>
              Don't have an account? Register
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
