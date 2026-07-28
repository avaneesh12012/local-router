/*
Copyright 2026 Avaneesh Shahi

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://apache.org

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
