function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 20, lng: 0},
      zoom: 3,
      disableDefaultUI: true, // This will disable UI elements
      gestureHandling: "none", // Disable user movement
      zoomControl: false, // Disable Zoom 
      mapId: "dc3fa7a543e2b310" // Google Map API Cloud ID
    });
  }
  
  window.initMap = initMap; // Ensure initMap is globally accessible