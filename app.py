from flask import Flask, jsonify, render_template
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# Coordenadas aproximadas de algunos países
COUNTRIES = [
    {"name": "USA", "lat": 37.7749, "lon": -122.4194},
    {"name": "Brazil", "lat": -14.2350, "lon": -51.9253},
    {"name": "India", "lat": 20.5937, "lon": 78.9629},
    {"name": "Russia", "lat": 61.5240, "lon": 105.3188},
    {"name": "China", "lat": 35.8617, "lon": 104.1954},
    {"name": "Germany", "lat": 51.1657, "lon": 10.4515},
    {"name": "Australia", "lat": -25.2744, "lon": 133.7751},
    {"name": "South Africa", "lat": -30.5595, "lon": 22.9375}
]

# Tipos de incidentes
INCIDENT_TYPES = ["DDoS", "Phishing", "Ransomware", "Malware"]

# Ruta principal que devuelve el frontend
@app.route("/")
def index():
    return render_template("index.html")

# Ruta para devolver incidentes simulados
@app.route("/api/incidents")
def get_incidents():
    # Genera eventos aleatorios
    incidents = []
    for _ in range(random.randint(5, 10)):  # Entre 5 y 10 eventos
        country = random.choice(COUNTRIES)
        incident = {
            "id": random.randint(1, 1000),
            "lat": country["lat"],
            "lon": country["lon"],
            "type": random.choice(INCIDENT_TYPES),
            "impact": random.choice(["Low", "Medium", "High"]),
            "country": country["name"]
        }
        incidents.append(incident)

    return jsonify(incidents)

if __name__ == "__main__":
    app.run(debug=True)
