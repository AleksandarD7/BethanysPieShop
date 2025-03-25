function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show-menu");
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("./jsons/allPies.json")
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data:", data);

            if (!Array.isArray(data)) {
                throw new Error("Invalid JSON structure: Expected an array");
            }

            const pieList = document.getElementById("pie-list");
            pieList.innerHTML = "";

            data.forEach(pie => { 
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><img src="${pie.image}" width="100"/></td>
                    <td>${pie.name}</td>
                    <td>${pie.description}</td>
                    <td>${pie.price}</td>
                    <td><a href="${pie.details}">View details</a></td>
                `;
                pieList.appendChild(row);
            });
        })
        .catch(error => console.error("Error loading pie data:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("./jsons/cheeseCakes.json")
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data:", data);

            if (!Array.isArray(data)) {
                throw new Error("Invalid JSON structure: Expected an array");
            }

            const pieList = document.getElementById("cheesecake-list");
            pieList.innerHTML = "";

            data.forEach(pie => { 
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><img src="${pie.image}" width="100"/></td>
                    <td>${pie.name}</td>
                    <td>${pie.description}</td>
                    <td>${pie.price}</td>
                    <td><a href="${pie.details}">View details</a></td>
                `;
                pieList.appendChild(row);
            });
        })
        .catch(error => console.error("Error loading pie data:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("./jsons/fruitPies.json")
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data:", data);

            if (!Array.isArray(data)) {
                throw new Error("Invalid JSON structure: Expected an array");
            }

            const pieList = document.getElementById("fruitpies-list");
            pieList.innerHTML = "";

            data.forEach(pie => { 
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><img src="${pie.image}" width="100"/></td>
                    <td>${pie.name}</td>
                    <td>${pie.description}</td>
                    <td>${pie.price}</td>
                    <td><a href="${pie.details}">View details</a></td>
                `;
                pieList.appendChild(row);
            });
        })
        .catch(error => console.error("Error loading pie data:", error));
});
document.addEventListener("DOMContentLoaded", function () {
    fetch("./jsons/seasonalpies.json")
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data:", data);

            if (!Array.isArray(data)) {
                throw new Error("Invalid JSON structure: Expected an array");
            }

            const pieList = document.getElementById("seasonalpies-list");
            pieList.innerHTML = "";

            data.forEach(pie => { 
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><img src="${pie.image}" width="100"/></td>
                    <td>${pie.name}</td>
                    <td>${pie.description}</td>
                    <td>${pie.price}</td>
                    <td><a href="${pie.details}">View details</a></td>
                `;
                pieList.appendChild(row);
            });
        })
        .catch(error => console.error("Error loading pie data:", error));
});


