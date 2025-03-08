async function fetchIPs() {
    const response = await fetch('/ips.html');
    const ips = await response.json();
    const ipList = document.getElementById('ip-list');
    ipList.innerHTML = '';

    ips.forEach(ip => {
        const li = document.createElement('li');
        li.textContent = ip;
        ipList.appendChild(li);
    });
}

setInterval(fetchIPs, 2000); // Actualiza la lista cada 2 segundos
