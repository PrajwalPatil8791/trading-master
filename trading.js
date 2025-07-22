// Sample market data
const marketData = [
    { symbol: "NIFTY 50", price: "19,425.35", change: "+0.78%", volume: "1.2B", rsi: "58.2" },
    { symbol: "BTC/USD", price: "29,856.00", change: "+2.34%", volume: "24.5B", rsi: "62.1" },
    { symbol: "RELIANCE", price: "2,456.90", change: "-1.23%", volume: "3.4M", rsi: "45.7" },
    { symbol: "TATASTEEL", price: "115.75", change: "+3.45%", volume: "12.8M", rsi: "67.3" },
    { symbol: "INFY", price: "1,467.30", change: "+0.89%", volume: "5.2M", rsi: "53.8" }
];

// DOM Elements
const marketDataTable = document.getElementById('marketDataTable');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadMarketData();
});

// Load market data into table
function loadMarketData() {
    let tableHTML = `
        <thead>
            <tr>
                <th>Symbol</th>
                <th>Price</th>
                <th>Change</th>
                <th>Volume</th>
                <th>RSI (14)</th>
            </tr>
        </thead>
        <tbody>
    `;

    marketData.forEach(item => {
        const changeClass = item.change.startsWith('+') ? 'positive' : 'negative';
        tableHTML += `
            <tr>
                <td>${item.symbol}</td>
                <td>${item.price}</td>
                <td class="${changeClass}">${item.change}</td>
                <td>${item.volume}</td>
                <td>${item.rsi}</td>
            </tr>
        `;
    });

    tableHTML += '</tbody>';
    marketDataTable.innerHTML = tableHTML;
}

// Navigation function
function navigateTo(page) {
    // In a real application, this would route to different pages
    console.log(`Navigating to ${page}`);
    alert(`In a complete application, this would take you to the ${page} page.`);
    
    // Close any open modals when navigating
    closeAllModals();
}

// Modal functions
function showLoginModal() {
    loginModal.style.display = 'block';
}

function showSignupModal() {
    signupModal.style.display = 'block';
}

function closeModal(modalElement) {
    modalElement.style.display = 'none';
}

function closeAllModals() {
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
}

// Form handling functions
function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        alert('Please enter both email and password');
        return;
    }
    
    console.log('Login attempt with:', { email, password });
    alert('Login successful (simulated)');
    closeModal(loginModal);
}

function handleSignup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    console.log('Signup attempt with:', { name, email, password });
    alert('Account created! (simulated)');
    closeModal(signupModal);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === loginModal) {
        closeModal(loginModal);
    }
    if (event.target === signupModal) {
        closeModal(signupModal);
    }
}

// Close modal with Escape key
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.key === "Escape") {
        closeAllModals();
    }
};