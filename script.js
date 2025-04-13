function getRecommendations() {
    const soilType = document.getElementById('soilType').value;
    const climate = document.getElementById('climate').value;
    const waterAvailability = document.getElementById('waterAvailability').value;

    const recommendationResult = document.getElementById('recommendationResult');

    // Simple logic for demonstration purposes
    let recommendation = `Based on the soil type "${soilType}", climate "${climate}", and water availability of ${waterAvailability} liters per hectare, we recommend:`;

    if (soilType === 'sandy' && climate === 'dry') {
        recommendation += ' drought-resistant crops like millet and sorghum.';
    } else if (soilType === 'clay' && climate === 'wet') {
        recommendation += ' water-intensive crops like rice and sugarcane.';
    } else {
        recommendation += ' versatile crops like wheat and maize.';
    }

    recommendationResult.textContent = recommendation;
}

// Add contact form submission handling (mock)
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});