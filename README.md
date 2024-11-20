# cyber-battlefield-simulation
This project simulates a cybersecurity battlefield using an interactive map. It visualizes cyber incidents, such as attacks and security breaches, in real-time. The incidents are represented by markres on a world map. Built with Flask for the backend and Lealet.js for the map visualization.

# Features 
- Interactive world map showing cybersecurity incidect global system.ents in real-time.
- Incidents are represented by markers with popus containing details like **type** and **impact**
- Rondomized incidents appear in different countries, simulating real-world cybersecurity events

---

## Technologies used
- **Bakend**: Flask (Python)
- **Frontend**: HTML, CSS, Javascript
- **Map Visualization**: Leaflet.js
- **Data Visualization**: D3.js
- **Web Server**: Python
cyber-battlefield-simulation 
---

## Installation

To run the project locally, follow these steps:

1. Clone the repository
   ```bash
   git clone https://github.com/Marclos155/cyber-battlefield-simulation.git
   ```
2. Navigate to the project directory
   ```bash
   cd cyber-battlefield-simulation
   ```
3. Install the required Python packages:
   ```bash
   pip install -r requeriments.txt
   ```
4. Run the Flask app:
   ```bash
   python app.py
   ```
5. Open your browse and go to
   ```arduino
   http://127.0.0.1:5000
   ```
---
## How It Works

1. The backend serves the application and provides the cyber incidents data trough an API
2. The frontend fetches data from the backend and displays it on an interactive map using Leaflet.js
3. The map update in real-time with random incidents simulated in different countries.
