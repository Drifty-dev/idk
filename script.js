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

// Llama a fetchIPs cada 2 segundos para actualizar la lista
setInterval(fetchIPs, 2000);
fetchIPs(); // Llama a la función al cargar la página
