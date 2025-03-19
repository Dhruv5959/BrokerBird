document.addEventListener("DOMContentLoaded", () => {
    console.log("Dashboard Loaded");

    document.querySelector(".primary").addEventListener("click", () => {
        alert("Create New Ad Clicked!");
    });

    document.querySelector(".secondary").addEventListener("click", () => {
        alert("Request Collaboration Clicked!");
    });

    
    const ctx = document.getElementById("earningsChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Earnings ($)",
                data: [500, 800, 1200, 1500, 1100, 1800],
                backgroundColor: "#6b46c1",
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
