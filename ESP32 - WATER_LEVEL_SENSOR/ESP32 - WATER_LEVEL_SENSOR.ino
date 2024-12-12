#include <Firebase_ESP_Client.h>
#include <WiFi.h>

#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <Wire.h>
#include <DHT.h>

#include <addons/TokenHelper.h>
#include <addons/RTDBHelper.h>

//PINS
//RGB LIGHTS
#define R 13
#define G 12
#define B 14
#define BUZZER_PIN 26

// OLED DISPLAY CONFIG
#define SCREEN_WIDTH 128 
#define SCREEN_HEIGHT 64 
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

// WATER LEVEL SENSOR
#define POWER_PIN  18
#define SIGNAL_PIN 34 //sensor pin
int value = 0;
int percentage = 0;
const int SENSOR_MAX_VALUE = 2500; 

//DHT11 CONFIG
#define DHT_PIN 27
#define DHT_TYPE DHT11
DHT dht (DHT_PIN, DHT_TYPE);

// CONNECT TO WIFI
#define WIFI_SSID "aye"
#define WIFI_PASSWORD "okay12345678"

//FIREBASE CONFIGURATION
#define USER_EMAIL "iamesp32@gmail.com";   
#define USER_PASSWORD "passwordaye321";  
#define API_KEY "AIzaSyCSxMoC0UmEprBwHPV42uWXF5E03WcPVzo"
#define DATABASE_URL "https://waterlevelderictory-default-rtdb.firebaseio.com/" 
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
String uid;
unsigned long sendDataPrevMillis = 0;

void WifiConnection(){
  pinMode(R, OUTPUT);
  pinMode(G, OUTPUT);
  pinMode(B, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);

  //CONNECT TO WIFI
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
}

void LoginFirebaseSetup(){
  //FIREBASE CONFIGURATION
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
  Firebase.reconnectWiFi(true); 
  fbdo.setResponseSize(4096);
  config.token_status_callback = tokenStatusCallback;
  config.max_token_generation_retry = 5;
  config.timeout.serverResponse = 10 * 1000;
  Firebase.begin(&config, &auth);
  Serial.println("Getting User UID");
  while ((auth.token.uid) == "") {
    Serial.print('.');
    delay(1000);
  }
  uid = auth.token.uid.c_str();
  Serial.print("User UID: ");
  Serial.print(uid);
  Firebase.setDoubleDigits(5);
}

void setup() {
  Serial.begin(9600);
  WifiConnection(); //Wifi Function
  LoginFirebaseSetup(); //Firebase Function

  // WATER LEVEL SENSOR
  analogSetAttenuation(ADC_11db);
  pinMode(POWER_PIN, OUTPUT);   
  digitalWrite(POWER_PIN, LOW); 

  // OLED DISPLAY
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { 
    Serial.println(F("SSD1306 allocation failed"));
    for (;;); 
  }
  delay(1000);
  display.clearDisplay();
  display.setTextColor(WHITE);
  
  dht.begin();//DHT11
}

void loop() {
  //Read Water Level
  digitalWrite(POWER_PIN, HIGH);  
  delay(10);                     
  value = analogRead(SIGNAL_PIN); 
  digitalWrite(POWER_PIN, LOW);

  percentage = map(value, 0, SENSOR_MAX_VALUE, 0, 100);
  if (percentage > 100) {
    percentage = 100; // Ensure it never exceeds 100%
  }

  if (percentage > 75) {
    digitalWrite(BUZZER_PIN, HIGH); 
  } else {
    digitalWrite(BUZZER_PIN, LOW);
  }

  updateRGBLights(percentage);

  //DHT11
  float humid = dht.readHumidity();
  float temp = dht.readTemperature();

  //FIREBASE
  if (Firebase.isTokenExpired()){
    Firebase.refreshToken(&config);
    Serial.println("Refresh token");
  }

  if (Firebase.ready() && (millis() - sendDataPrevMillis > 1000 || sendDataPrevMillis == 0)) {
    sendDataPrevMillis = millis();
    Serial.printf("Water Level : %s\n", Firebase.RTDB.setInt(&fbdo, F("/WaterLevel/height"), percentage) ? "ok" : fbdo.errorReason().c_str());
    Serial.printf("Water Level : %s\n", Firebase.RTDB.setInt(&fbdo, F("/DHT/humidity"), humid) ? "ok" : fbdo.errorReason().c_str());
    Serial.printf("Water Level : %s\n", Firebase.RTDB.setInt(&fbdo, F("/DHT/temperature"), temp) ? "ok" : fbdo.errorReason().c_str());
  }

  Serial.print("The water sensor value: ");
  Serial.println(value);
  Serial.print("Water Level: ");
  Serial.print(percentage);
  Serial.println("%");
  Serial.print("Temperature: ");
  Serial.println(temp);
  Serial.print("Humidity: ");
  Serial.println(humid);

  // Display on OLED
  display.clearDisplay();
  display.setTextSize(1); 
  display.setCursor(0, 0);
  display.println("Water Level Sensor"); 
  display.setTextSize(1); 
  display.setCursor(0, 20); 
  display.print("Level: ");
  display.print(percentage); 
  display.println("%");

  //DHT11 display
  display.setTextSize(1);
  display.setCursor(0, 30);
  display.print("Humidity: ");
  display.print(humid);
  display.print("%");

  display.setCursor(0, 40);
  display.print("Temp: ");
  display.print(temp);
  display.print("C");

  display.display();  
  delay(1000);
}


void updateRGBLights(int percentage) {
  if (percentage <= 25) { // Level 1 - Green
    analogWrite(R, 0);   
    analogWrite(G, 255); 
    analogWrite(B, 0);   
  } else if (percentage <= 50) { // Level 2 - Yellow
    analogWrite(R, 255); 
    analogWrite(G, 239); 
    analogWrite(B, 0);   
  } else if (percentage <= 75) { // Level 3 - Orange
    analogWrite(R, 255);
    analogWrite(G, 75); 
    analogWrite(B, 0);   
  } else { // Level 4 - Red
    analogWrite(R, 255); 
    analogWrite(G, 0);   
    analogWrite(B, 0); 
  }
}