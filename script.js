function fetchIPs() {
    const ipList = document.getElementById('ip-list');
    ipList.innerHTML = '';

    // Obtener las IPs de localStorage
    const connectedIPs = JSON.parse(localStorage.getItem('connectedIPs')) || [];

    connectedIPs.forEach(ip => {
        const li = document.createElement('li');
        li.textContent = ip;
        ipList.appendChild(li);
    });
}

// Función para eliminar una IP
function deleteIP(ip) {
    let connectedIPs = JSON.parse(localStorage.getItem('connectedIPs')) || [];
    connectedIPs = connectedIPs.filter(item => item !== ip);
    localStorage.setItem('connectedIPs', JSON.stringify(connectedIPs));
    fetchIPs(); // Actualizar la lista después de eliminar
}

// Función para borrar todas las IPs
function clearAllIPs() {
    localStorage.removeItem('connectedIPs'); // Eliminar el item de localStorage
    fetchIPs(); // Actualizar la lista
}

// Llama a fetchIPs cada 2 segundos para actualizar la lista
setInterval(fetchIPs, 2000);
fetchIPs(); // Llama a la función al cargar la página

// Vincular el botón a la función clearAllIPs
document.getElementById('clear-button').addEventListener('click', clearAllIPs);
