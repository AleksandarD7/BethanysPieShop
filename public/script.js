function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show-menu");
}


function loadSeasonalPies() {
    fetch('jsons/SeasonalPies.json')  
        .then(response => response.json()) 
        .then(seasonalPies => {
            const seasonalPieTableBody = document.getElementById("seasonalPieTableBody");

            if (!seasonalPieTableBody) {
                console.error("Table body with ID 'seasonalPieTableBody' not found.");
                return;
            }

            
            seasonalPieTableBody.innerHTML = "";

            seasonalPies.forEach(pie => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td><img src="${pie.image}" alt="${pie.name}" width="100"></td>
                    <td>${pie.name}</td>
                    <td>${pie.description}</td>
                    <td>${pie.price}</td>
                    <td><button onclick="alert('${pie.details}')">${pie.details}</button></td>
                `;

                seasonalPieTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading the JSON data:', error));
}

document.addEventListener("DOMContentLoaded", loadSeasonalPies);



function loadCheesecakes() {
    fetch('jsons/cheeseCakes.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("cheesecakeTableBody");
            tableBody.innerHTML = "";

            data.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><img src="${item.image}" alt="${item.name}" width="100"></td>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>${item.price}</td>
                    <td><button onclick="alert('${item.details}')">${item.details}</button></td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading the Cheesecakes data:', error));
}

document.addEventListener("DOMContentLoaded", loadCheesecakes);



function loadFruitPies() {
    fetch('jsons/fruitPies.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("fruitPieTableBody");
            tableBody.innerHTML = "";

            data.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><img src="${item.image}" alt="${item.name}" width="100"></td>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>${item.price}</td>
                    <td><button onclick="alert('${item.details}')">${item.details}</button></td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading the Fruit Pies data:', error));
}

document.addEventListener("DOMContentLoaded", loadFruitPies);




function loadAllPies() {
    fetch('jsons/allPies.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("productTableBody");
            tableBody.innerHTML = "";

            data.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><img src="${item.image}" alt="${item.name}" width="100"></td>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>${item.price}</td>
                    <td><a href="${item.details}">More Info</a></td>                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading the All Pies data:', error));
}

document.addEventListener("DOMContentLoaded", loadAllPies);