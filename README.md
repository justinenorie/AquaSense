# AquaSense

**IoT-Based Water Level Detection and Monitoring App**

AquaSense is a React Native mobile application designed to monitor water levels in real-time using an ESP32 microcontroller and IoT technology. The app provides users with precise water height measurements and categorized water level warnings (e.g., low, medium, high, critical), ensuring effective water management. AquaSense is compatible with Android, iOS, and web platforms.

---

## Features

- **Real-time Monitoring**: Get up-to-date water level information from the ESP32 microcontroller via Wi-Fi.
- **Warning Levels**: View categorized water levels with warnings for proactive decision-making.
- **Cross-Platform Support**: Compatible with Android, iOS, and web platforms using Expo.
- **Interactive UI**: Intuitive and responsive design for seamless user experience.

---

## Installation Guide

Follow these steps to set up and run AquaSense on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/) installed (version 14 or higher recommended).
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager.
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed globally (optional, for additional tools).

### Clone the Repository

```bash
git clone https://github.com/justinenorie/AquaSense.git
cd AquaSense
```

### Install Dependencies

Install the required packages by running:

```bash
npm install
# or
yarn install
```

### Setup Firebase Configuration

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

## Connecting the ESP32 to AquaSense

1. Configure the ESP32 microcontroller to log data into Firebase's Realtime Database. This involves:
   - Setting up Firebase in your ESP32 project.
   - Using the Firebase SDK for ESP32 to authenticate and push water level data to the Realtime Database.
2. In the AquaSense app, integrate Firebase by:
   - Installing the Firebase SDK for React Native.
   - Fetching real-time updates from the Firebase Realtime Database to display water levels dynamically in the app.
3. Ensure the Firebase configuration in both ESP32 and AquaSense matches your project settings for seamless integration.

---

## Development Notes

- Ensure both the ESP32 and AquaSense app are properly configured with Firebase credentials.
- For any issues during development, check the Expo documentation or refer to the app's error logs.

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Contribution

We welcome contributions to enhance AquaSense! Please submit a pull request or open an issue for discussions.

---

Enjoy using AquaSense to make water management smarter and more efficient!
