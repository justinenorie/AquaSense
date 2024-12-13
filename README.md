# AquaSense - Water Level Monitoring System

AquaSense is an IoT-based solution for monitoring water levels in real-time using the ESP32 microcontroller and a React Native mobile application. It allows users to track water levels, receive warnings, and view graphical data through Firebase integration.

---

## Features
- **Real-time Monitoring**: Get up-to-date water level information from the ESP32 microcontroller via Wi-Fi.
- **Warning Levels**: View categorized water levels with warnings.
- **Cross-Platform Support**: Compatible with Android, iOS, and web platforms using Expo.
- **Interactive UI**: Intuitive and responsive design for seamless user experience.
---

# Getting Started
### Prerequisites

- React Native and ESP32 development environment.

- Firebase project setup with Realtime Database enabled.

**React Native**
- [Node.js](https://nodejs.org/) installed (version 14 or higher recommended).
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager.
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed globally (optional, for additional tools).

**ESP 32**
- ESP32 microcontroller.
- Water level sensor.
- RGB LEDs and buzzer for alerts.
- OLED display (optional for local data display).

## Installation Guide and connecting the ESP32 to AquaSense

### Clone the Repository

```bash
git clone https://github.com/justinenorie/AquaSense.git
cd AquaSense
```

---

### Step 1: Install the required packages in React Native App by running:

```bash
npm install
# or
yarn install
```

#### Setup Firebase Configuration

1. Locate the configuration file named `configuration.env` in the project directory.
2. Rename the file to `.env`.
3. Update the `.env` file with your Firebase configuration values. The file should look like this:

```env
API_KEY="<YOUR_API_KEY>"
AUTH_DOMAIN="<YOUR_AUTH_DOMAIN>"
DATABASE_URL="<YOUR_DATABASE_URL>"
PROJECT_ID="<YOUR_PROJECT_ID>"
STORAGE_BUCKET="<YOUR_STORAGE_BUCKET>"
MESSAGING_SENDER_ID="<YOUR_MESSAGING_SENDER_ID>"
APP_ID="<YOUR_APP_ID>"
MEASUREMENT_ID="<YOUR_MEASUREMENT_ID>"
```

Replace `<YOUR_API_KEY>`, `<YOUR_AUTH_DOMAIN>`, and other placeholders with your actual Firebase project credentials.

---

### Step 2: Configure the ESP32 Microcontroller

1. **Connect to Wi-Fi**
   - Update the `WIFI_SSID` and `WIFI_PASSWORD` constants in the ESP32 code with your Wi-Fi credentials.
   - The ESP32 connects to the network and retrieves its IP address. Ensure the network allows local device communication.

2. **Setup Firebase on ESP32**
   - Update the Firebase credentials in the ESP32 code (`API_KEY`, `USER_EMAIL`, `USER_PASSWORD`, and `DATABASE_URL`).
   - Use the [Firebase ESP32 SDK](https://github.com/mobizt/Firebase-ESP-Client) to integrate Firebase Realtime Database.

3. **Configure Sensors and Outputs**
   - Connect the water level sensor to the `SIGNAL_PIN` and `POWER_PIN` as defined in the ESP32 code.
   - Set up RGB LEDs and a buzzer for visual and audio warnings.
   - Attach the OLED display to display real-time data locally.

4. **Program the ESP32**
   - Use the Arduino IDE to upload the configured code to the ESP32.
   - Ensure all libraries are correctly installed to avoid compilation errors.

---

## How to Start the Project

### Using Expo

Expo provides a simple way to start the project. Choose one of the following commands based on your requirements:

#### Start in Default Mode

```bash
npx expo start
```

This will start the development server and provide a QR code to scan with the Expo Go app on your mobile device.

#### Start with Tunnel Mode (Recommended for Network Issues)

```bash
npx expo start --tunnel
```

This mode uses a tunnel to bypass network restrictions, making it easier to connect the app with the development server.

---

# Contributing
Contributions are welcome! Please fork the repository and create a pull request with detailed information about the changes.

---

# License
This project is licensed under the MIT License. See the `LICENSE` file for details.
