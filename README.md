# Emi-Calculator

EMI Calculator Module

---

## 🚀 Project Initialization Guide

Follow the steps below to set up and run the project:

### 1. Initialize React Native Project

```bash
npx @react-native-community/cli init EmiCalculator
```

---

### 2. Clone Repository

```bash
git clone https://github.com/rahulsinghfaujdar/EmiCalculator.git
cd EmiCalculator
```

---

### 3. Sync Latest Code

```bash
git fetch --all
git pull origin main
```

---

### 4. Create Working Branch

```bash
git checkout -b EmiCalculator_ver_0.0.1
git branch
```

---

### 5. Reinitialize Project (if required)

```bash
npx @react-native-community/cli init EmiCalculator
```

---

### 6. Install ESLint Compatible Version

```bash
npm install eslint@^9 --save-dev
```

---

### 7. Update package.json

Add the following:

```json
"overrides": {
  "glob": "^13.0.6"
}
```

---

### 8. Update Gradle Configuration

Add this in `android/gradle.properties`:

```properties
org.gradle.warning.mode=none
```

---

### 9. Install Dependencies

```bash
npm install
```

---

### 10. Install Firebase Package

```bash
npm install --save @react-native-firebase/app
```

---

### 11. Firebase Setup (Android)

* Create project in Firebase
* Use package name: `com.emicalculator`
* Download `google-services.json`
* Place it inside:

```
android/app/
```

---

### 12. Push Code to Branch

```bash
git push origin EmiCalculator_ver_0.0.1
```

---

## ✅ You're ready to go!
Run the Development Server

```bash
npx react-native start
```

Run the app:

```bash
npx react-native run-android
```
