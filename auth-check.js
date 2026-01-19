// auth-check.js - For reuse in mycourses.html, certificates.html, etc.
(function() {
    // Firebase Config
    const firebaseConfig = {
        apiKey: "AIzaSyDJ87n0P3DOd5QsDYfjaGoO0hbaAZr_Mc8",
        authDomain: "bio-37ae0.firebaseapp.com",
        projectId: "bio-37ae0",
        storageBucket: "bio-37ae0.appspot.com",
        messagingSenderId: "72501818145",
        appId: "1:72501818145:web:fc466e47e697b7c31e8460"
    };
    
    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const auth = firebase.auth();
    
    // Check authentication
    auth.onAuthStateChanged((user) => {
        const currentPage = window.location.pathname.split('/').pop();
        const protectedPages = ['lms.html', 'mycourses.html', 'certificates.html'];
        
        if (protectedPages.includes(currentPage)) {
            if (!user) {
                // Not logged in, redirect to login
                window.location.href = 'login.html';
            } else {
                // User is logged in - you can add user-specific logic here
                console.log(`User ${user.email} accessed ${currentPage}`);
                
                // Update localStorage
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', user.email);
                
                // Add logout button if not present
                addLogoutButton(user);
            }
        }
    });
    
    function addLogoutButton(user) {
        // Only add if not already present
        if (!document.getElementById('global-logout-btn')) {
            const logoutBtn = document.createElement('button');
            logoutBtn.id = 'global-logout-btn';
            logoutBtn.textContent = `Logout (${user.email.split('@')[0]})`;
            logoutBtn.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                padding: 8px 16px;
                background: #ff4444;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                z-index: 9999;
                font-family: sans-serif;
                font-size: 14px;
            `;
            
            logoutBtn.addEventListener('click', async () => {
                try {
                    await auth.signOut();
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('userEmail');
                    window.location.href = 'index.html';
                } catch (error) {
                    console.error('Logout error:', error);
                }
            });
            
            document.body.appendChild(logoutBtn);
        }
    }
    
    // Quick redirect if localStorage says not logged in
    window.addEventListener('DOMContentLoaded', () => {
        const currentPage = window.location.pathname.split('/').pop();
        const protectedPages = ['lms.html', 'mycourses.html', 'certificates.html'];
        
        if (protectedPages.includes(currentPage) && localStorage.getItem('isLoggedIn') !== 'true') {
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 500);
        }
    });
})();