// Initialize Lucide Icons
lucide.createIcons();

// Toast logic
window.addEventListener('load', () => {
    // Show the popup 800ms after the page loads
    setTimeout(() => {
        const toast = document.getElementById('speed-toast');
        if (toast) {
            toast.classList.add('show');
        }
    }, 800);
});

// Function to close the toast manually
function closeToast() {
    const toast = document.getElementById('speed-toast');
    if (toast) {
        toast.classList.remove('show');
    }
}