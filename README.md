#  Employee Management Dashboard

A React-based Employee Dashboard that allows users to view employee details, capture photos using the device camera, visualize salary data using bar graphs, and display employee office locations on a map.

---

## 🚀 Live Demo

🔗 Deployed Link: https://jotish-omega.vercel.app/

🎥 Loom Walkthrough:
https://www.loom.com/share/7dd5d2cd4d19460c85a92cece8dc7ace

---

## 📌 Features Implemented

### ✅ Employee List Page

* Displays employee data in a structured list format
* Includes:

  * Name
  * Position
  * Office
  * Salary
  * Start Date
  * Status
* Navigation to Details Page
* Button to view Bar Graph
* Button to view Map

---

### ✅ Employee Details Page

* Displays selected employee information
* Allows user to:

  * Open Camera
  * Capture Photo
* Automatically turns **OFF the camera after photo capture**
* Captured image is sent to Photo Result Page

---

### ✅ Photo Result Page

* Displays the captured photo
* Camera stream is stopped when navigating to this page

---

### ✅ Bar Graph Page

* Displays salary of **first 10 employees**
* Salaries plotted using Bar Graph
* Custom bar colors for better UI visibility

---

### ✅ Map Page

* Displays employee office locations on Map
* Supported Cities:

  * Tokyo
  * Edinburgh
  * San Francisco
  * New York
  * London
  * Singapore
* Markers added using Latitude & Longitude coordinates

---

## 🛠️ Tech Stack Used

* React.js
* React Router DOM
* Tailwind CSS
* Chart.js
* React-Leaflet
* Leaflet Maps
* HTML5 Camera API
* Vite
* Vercel (Deployment)

---

## 📍 Leaflet Marker Fix (For Deployment)

If markers are not visible after deployment, add the following code at the **top of MapPage.jsx**:

```js
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone <your-repo-link>
```

Navigate to project folder:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

This project is deployed as a **Static Site on Vercel**.

---

## 📷 Camera Functionality

* Uses browser media devices API
* Captures employee image
* Stops camera stream after capture to prevent background usage

---

## 📊 Data Visualization

* Salary comparison using Bar Graph
* Employee city mapping using interactive Map

---

## 👨‍💻 Author

Muskan Sikka

---

## 📄 License

This project is for assessment/demo purposes only.
