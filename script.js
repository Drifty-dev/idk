function fetchIPs() {
    const ipList = document.getElementById('ip-list');
    ipList.innerHTML = '';

    // Obtener las IPs de localStorage
    const connectedIPs = JSON.parse(localStorage.getItem('connectedIPs')) || [];

    connectedIPs.forEach(ip => {
        const li = document.createElement('li');
        li.textContent = ip;

        // Crear botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function() {
            deleteIP(ip);
        };

        li.appendChild(deleteButton);
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

// Llama a fetchIPs cada 2 segundos para actualizar la lista
setInterval(fetchIPs, 2000);
fetchIPs(); // Llama a la función al cargar la página
