const pickupLines = {
    characters: [
        "Are you Jett? Because you've taken my breath away.",
        "Are you Phoenix? Because you've set my heart on fire.",
        "Are you Sage? Because you've revived my love for you.",
        "Are you Sova? Because you've revealed my feelings for you.",
        "Are you Reyna? Because you've devoured my heart.",
        "Are you Killjoy? Because you've locked down my affection.",
        "Are you Omen? Because you've shadow-stepped into my heart.",
        "Are you Raze? Because you've blown me away.",
        "Are you Viper? Because you've poisoned my thoughts with you.",
        "Are you Brimstone? Because you've called in an airstrike on my heart."
    ],
    maps: [
        "Are you Bind? Because I want to teleport straight to your heart.",
        "Are you Haven? Because you've got three places in my heart.",
        "Are you Split? Because I'm falling for you from every angle.",
        "Are you Ascent? Because our love is rising to new heights.",
        "Are you Icebox? Because you're cool but still melt my heart.",
        "Are you Breeze? Because you're refreshing and exciting.",
        "Are you Fracture? Because you've broken down all my defenses.",
        "Are you Pearl? Because you're deep and beautiful.",
        "Are you Lotus? Because you're mysterious and enchanting.",
        "Are you Sunset? Because you're the perfect way to end my day."
    ]
};

const categorySelect = document.getElementById('category');
const rizzButton = document.getElementById('rizz-button');
const pickupLineElement = document.getElementById('pickup-line');

rizzButton.addEventListener('click', function() {
    const selectedCategory = categorySelect.value;
    const lines = pickupLines[selectedCategory];
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    
    pickupLineElement.textContent = randomLine;
});