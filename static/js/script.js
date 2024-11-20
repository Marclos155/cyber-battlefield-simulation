// Inicializa el mapa con coordenadas iniciales y nivel de zoom
const map = L.map('map').setView([20, 0], 2); // Centro global, zoom 2

// Agrega el mapa base de OpenStreetMap (o Mapbox si decides usarlo más tarde)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);

// Función para cargar incidentes desde el backend
async function loadIncidents() {
    try {
        // Realiza la solicitud al endpoint del backend
        const response = await fetch('/api/incidents');
        
        // Verifica si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`Error al cargar incidentes: ${response.statusText}`);
        }

        // Convierte la respuesta en formato JSON
        const incidents = await response.json();

        // Itera sobre cada incidente y los agrega al mapa
        incidents.forEach(incident => {
            // Crea un marcador en la posición del incidente
            const marker = L.marker([incident.lat, incident.lon]).addTo(map);
            
            // Agrega un popup con información sobre el incidente
            marker.bindPopup(`
                <b>Country:</b> ${incident.country} <br>
                <b>Type:</b> ${incident.type} <br>
                <b>Impact:</b> <span style="color: ${getImpactColor(incident.impact)};">
                    ${incident.impact}</span>
            `);
        });
    } catch (error) {
        console.error("Error al cargar los incidentes:", error);
    }
}

// Llama a la función para cargar los incidentes al iniciar el mapa
loadIncidents();

// Función para colorear el impacto según el nivel
function getImpactColor(impact) {
    if (impact === "High") return "red";
    if (impact === "Medium") return "orange";
    return "green";
}
