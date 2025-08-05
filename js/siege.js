const pickupLines = {
    operators: [
        "Are you Thermite? Because you just breached my heart.",
        "Are you Caveira? Because you've been silently stealing my heart.",
        "Are you Dokkaebi? Because you're ringing all the right bells.",
        "Are you Jäger? Because I want you to protect my heart.",
        "Are you Sledge? Because you just smashed through my defenses.",
        "Are you Ash? Because you're fast and explosive.",
        "Are you Bandit? Because you're shocking my system.",
        "Are you Pulse? Because I can feel my heart rate rising around you.",
        "Are you Valkyrie? Because I want you to keep an eye on me.",
        "Are you Echo? Because you've left me stunned."
    ],
    maps: [
        "Are you Club House? Because I want to spend all night exploring you.",
        "Are you Oregon? Because you're my favorite destination.",
        "Are you Coastline? Because you're hot and I want to dive in.",
        "Are you Border? Because I can't get past how amazing you are.",
        "Are you Bank? Because I want to make a deposit in your heart.",
        "Are you Villa? Because you're classy and full of surprises.",
        "Are you Theme Park? Because you're a thrilling ride.",
        "Are you Kafe Dostoyevsky? Because you're making me weak in the knees.",
        "Are you Outback? Because you're wild and untamed.",
        "Are you Consulate? Because you're diplomatic and gorgeous.",
        "Are you Chalet? because you make my fireplace burn"
    ],
    gadgets: [
        "Are you a breach charge? Because you just blew me away.",
        "Are you a deployable shield? Because I want you to protect my heart.",
        "Are you barbed wire? Because I'm caught up in you.",
        "Are you a nitro cell? Because you're explosive and dangerous.",
        "Are you a drone? Because I can't take my eyes off you.",
        "Are you a claymore? Because you're one step away from making my heart explode.",
        "Are you a bulletproof camera? Because I can't stop watching you.",
        "Are you a proximity alarm? Because you've got me on high alert.",
        "Are you a hard breach charge? Because you're breaking down my walls.",
        "Are you a stim pistol? Because you've got me feeling revived.",
        "Are you wamai? because you’re like a MAG-NET to my eyes"
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