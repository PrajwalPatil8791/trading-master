// Sample market data
const marketData = [
    { symbol: "NIFTY 50", price: "19,425.35", change: "+0.78%", changeClass: "positive" },
    { symbol: "BTC/USD", price: "29,856.00", change: "+2.34%", changeClass: "positive" },
    { symbol: "RELIANCE", price: "2,456.90", change: "-1.23%", changeClass: "negative" },
    { symbol: "TATASTEEL", price: "115.75", change: "+3.45%", changeClass: "positive" }
];

// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const marketTable = document.getElementById('marketTable');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadMarketData();
});

// Load market data
function loadMarketData() {
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
    `;

    marketData.forEach(item => {
        tableHTML += `
            <tr>
                <td>${item.symbol}</td>
                <td>${item.price}</td>
                <td class="${item.changeClass}">${item.change}</td>
            </tr>
        `;
    });

    tableHTML += `</tbody></table>`;
    marketTable.innerHTML = tableHTML;
}

// Modal functionality
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

signupBtn.addEventListener('click', () => {
    alert('Signup functionality would go here');
});

closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        alert(`Login successful for ${email}`);
        loginModal.style.display = 'none';
        loginForm.reset();
    } else {
        alert('Please fill in all fields');
    }
});
