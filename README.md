# Emi-Calculator

EMI Calculator Module

## 📌 Project Introduction
This project is built using a multi-module architecture, where each module is designed to be independent, scalable, and reusable. The overall structure follows an MVC-based approach implemented in React Native with TypeScript, ensuring clear separation of concerns and maintainability.
Due to time constraints, the current implementation focuses on delivering core functionality with a modular foundation. The following key modules and features are included:

- `Login Module` – Implements a basic/dummy authentication flow.
- `Home Module` – Provides a simple landing screen post-login.
- `EMI Calculator Module` – Core feature to calculate EMI based on user input.
- `Networking Module` – A placeholder/dummy layer for handling API interactions.
- `Test Module` – Contains sample test cases to support QA/testing teams.
- `ThemeUI Wrapper` – Centralized design system for managing themes, colors, typography, and spacing (useful for UI/UX designers).
- `Global Components` – Reusable UI components for consistency across the app.
- `Utility Module` – Common helper functions and shared logic (both custom and third-party integrations).

This modular approach makes the application extensible and production-ready, allowing teams (developers, designers, testers) to work independently on different parts of the system.

---

## 🔮 Future Improvements / TODO
Given more time, the following enhancements are planned:

🚀 Publish Independent Modules
Each module (e.g., EMI Calculator, ThemeUI, Global Components) will be extracted and published as separate reusable packages (via Git or private registry).

📦 Dependency-Based Architecture
Modules will be consumed as dependencies via package.json, enabling reuse across multiple projects.

🔐 Real Authentication Integration
Replace dummy login with secure authentication (Firebase/Auth API).

🌐 Production-Ready Networking Layer
Implement real API integrations with error handling, retries, and caching.

---

### 📸 Screenshots

🌞 Light Theme

<img src="https://github.com/rahulsinghfaujdar/EmiCalculator/blob/main/screenshots/light_1.jpg" width="20%"></img> | <img src="https://github.com/rahulsinghfaujdar/EmiCalculator/blob/main/screenshots/light_2.jpg" width="20%"></img> | <img src="https://github.com/rahulsinghfaujdar/EmiCalculator/blob/main/screenshots/error_light_1.jpg" width="20%"></img> | <img src="https://github.com/rahulsinghfaujdar/EmiCalculator/blob/main/screenshots/error_light_2.jpg" width="20%"></img>

🌙 Dark Theme

<img src="https://github.com/rahulsinghfaujdar/EmiCalculator/blob/main/screenshots/dark_1.jpg" width="20%"></img> | <img src="https://github.com/rahulsinghfaujdar/EmiCalculator/blob/main/screenshots/dark_2.jpg" width="20%"></img> | <img src="https://github.com/rahulsinghfaujdar/EmiCalculator/blob/main/screenshots/error_dark_1.jpg" width="20%"></img> | <img src="https://github.com/rahulsinghfaujdar/EmiCalculator/blob/main/screenshots/error_dark_2.jpg" width="20%"></img>

---

## 💻 Local Environment Versions
This project has been set up and tested with the following local versions in VS Code / your PC:

- NPM version: `10.8.2`
- Node version: `20.20.2`
- NVM version: `0.40.4`
- React version: `19.2.3`
- React Native version: `0.85.0`
- JavaScript runtime / V8 version: `11.3.244.8-node.38`
- TypeScript version: `^6.0.2`
- JDK version: `17.0.18`
- VS Code version: `1.114.0`

---

## 🧠 Architecture (High-Level)
```bash
                ┌──────────────────────┐
                │     App Entry        │
                └─────────┬────────────┘
                          │
                ┌─────────▼────────────┐
                │   Navigation Layer   │
                └─────────┬────────────┘
                          │
     ┌────────────────────┼────────────────────┐
     │                    │                    │
┌────▼────┐        ┌──────▼─────┐       ┌──────▼─────┐
│ Login   │        │ Home       │       │ EMI Calc   │
│ Module  │        │ Module     │       │ Module     │
└────┬────┘        └──────┬─────┘       └──────┬─────┘
     │                    │                    │
     └────────────┬───────┴────────────┬───────┘
                  │                    │
         ┌────────▼────────┐   ┌───────▼────────┐
         │ Global UI       │   │ Theme System   │
         │ Components      │   │ (Design Tokens)│
         └────────┬────────┘   └───────┬────────┘
                  │                    │
           ┌──────▼────────┐   ┌───────▼────────┐
           │ Utilities     │   │ Networking     │
           │ (Helpers)     │   │ Layer          │
           └───────────────┘   └────────────────┘
```

---

## 📁 Project Structure

```bash
src/
 ├── modules/
 │   ├── LoginStack/
 │   ├── HomeStack/
 │   ├── EMICalculatorStack/
 │   ├── ThemeUIWrapper/
 │   ├── GlobalComponents/
 │   ├── Networking/
 │   └── Utility/
 ├── App.tsx
 
android/  → Native Android setup
ios/      → Native iOS setup
```


---

## 📲 APK Download

👉 https://github.com/rahulsinghfaujdar/EmiCalculator/actions/runs/24302714047

---


## 🔑 Test Credentials

Mobile: 1234567890

Password: 12345678

---

## ☁️ Firebase Integration
Remote Config for feature flags
Crashlytics (ready for integration)
Environment-based configuration (Dev/Prod)

## ☁️ Remote Config Documentation
This project includes Firebase support for Android via `google-services.json`.

If you want to use Firebase Remote Config:
1. Enable Remote Config in the Firebase console for your project.
2. Install the package:
```bash
npm install --save @react-native-firebase/remote-config
```
3. Add native Firebase Remote Config setup for Android and iOS following React Native Firebase docs.
4. Use the Remote Config API to fetch values and control feature flags or app behavior remotely.

---

## 🔄 Data Flow
Redux Toolkit for state management
Redux Persist for local storage
AsyncStorage for persistence

Flow:
User Action → Redux Action → Reducer → Store Update → UI Re-render

---

## 🧪 Testing
npm test -- --runInBand

---

## 🚀 CI/CD Pipeline
GitHub Actions
Automated APK generation
Supports:
dev / prod builds
debug / release variants

---

## 🧰 Setup Project in VS Code
1. Open the repository folder in VS Code by using git clone <repositary>.
```bash
git clone https://github.com/rahulsinghfaujdar/EmiCalculator.git
cd EmiCalculator
```
3. Run `npm install` from the built-in terminal.
4. Use VS Code tasks or integrated terminal to launch Metro and run the app.

---

## ▶️ Run Project
1. Install dependencies:
```bash
npm install
```

2. Start Metro:
```bash
npx react-native start
```

3. Build and run Android:
```bash
npx react-native run-android
```

4. Use build variants if needed:
```bash
npx react-native run-android --variant=devDebug
npx react-native run-android --variant=prodDebug
```

---

## 🏗️ Project Architecture
The project is organized into:
- `src/` - App entrypoint and app initialization.
- `modules/` - Feature modules and shared UI wrappers.
  - `LoginStack/` - Login screen and login state store.
  - `EMICalculatorStack/` - EMI calculator screen and calculator Redux store.
  - `HomeStack/` - Home screen flow.
  - `ThemeUIWrapper/` - Central theme tokens, colors, fonts, and spacing.
  - `GlobalComponents/` - Shared UI components that can be reused across screens.
  - `Networking/` - API and network-related helpers used by the app.
  - `Utility/` - Utility functions and helpers used by multiple modules.
- `android/` and `ios/` - Native platform projects and build configuration.

---

## 🔄 Project Data Flow and Persistence
- Redux Toolkit manages global app state.
- `modules/EMICalculatorStack/src/store/index.ts` combines and persists reducers.
- `redux-persist` with `AsyncStorage` keeps `login` and `emiCalculator` state across restarts.
- `AppContent` reads `isLoggedIn` and chooses which screen to show:
  - `LoginScreen` when the user is not logged in.
  - `EMICalculatorScreen` when login is complete and the calculator feature is enabled.
  - `HomeScreen` otherwise.
- Login state and EMI state are saved locally so users remain logged in after app restart.

---

## 🧪 Project Test Cases Documentation
- Tests are written using Jest.
- Example tests are located under `modules/Test/`, such as `useLogin.test.ts` & `useEMICalculator.test.ts`.
- Run tests with:
```bash
npm test -- --runInBand
```

---

## 🚀 Project CI/CD Operations
- CI workflow is defined in `.github/workflows/android-debug-apk.yml`.
- The workflow runs test cases first, then builds the Android APK.
- You can select build input variables via workflow dispatch:
  - `build_env`: `dev` or `prod`
  - `build_type`: `debug` or `release`
- The build job assembles the corresponding Gradle variant and uploads the APK artifact.

---

## 🚀 Project Initialization Guide
Follow the steps below to set up and run the project:

### 1. Initialize React Native Project
```bash
npx @react-native-community/cli init EmiCalculator
```

### 2. Clone Repository
```bash
git clone https://github.com/rahulsinghfaujdar/EmiCalculator.git
cd EmiCalculator
```

### 3. Sync Latest Code
```bash
git fetch --all
git pull origin main
```

### 4. Create Working Branch
```bash
git checkout -b EmiCalculator_ver_0.0.1
git branch
```

### 5. Reinitialize Project (if required)
```bash
npx @react-native-community/cli init EmiCalculator
```

### 6. Install ESLint Compatible Version
```bash
npm install eslint@^9 --save-dev
```

### 7. Update package.json
Add the following:
```json
"overrides": {
  "glob": "^13.0.6"
}
```

### 8. Update Gradle Configuration
Add this in `android/gradle.properties`:
```properties
org.gradle.warning.mode=none
```

### 9. Install Dependencies
```bash
npm install
```

### 10. Install Firebase Package
```bash
npm install --save @react-native-firebase/app
```

### 11. Firebase Setup (Android)
* Create project in Firebase
* Use package name: `com.emicalculator` & `com.emicalculator.dev`
* Download `google-services.json`
* Place it inside:
```
android/app/
```

### 12. Push Code to Branch
```bash
git push origin EmiCalculator_ver_0.0.1
```

## ✅ You're ready to go!
Run the Development Server
```bash
npx react-native start
```
Run the DevTool logs
```bash
npx react-native log-android
```
Run the app:
```bash
npx react-native run-android --mode devDebug
```

---


⭐ If you like this project


Give it a ⭐ on GitHub and feel free to contribute!


---
