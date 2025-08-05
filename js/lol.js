const pickupLines = {
    champions: [
        "Are you Ahri? Because you've charmed me completely.",
        "Are you Ezreal? Because you've struck a true shot to my heart.",
        "Are you Lux? Because you light up my world.",
        "Are you Yasuo? Because you've blown me away.",
        "Are you Jinx? Because you're driving me crazy (in a good way).",
        "Are you Braum? Because you've got my heart shielded.",
        "Are you Teemo? Because you're the devil but I can't resist you.",
        "Are you Miss Fortune? Because you're making me double up in love.",
        "Are you Darius? Because you've dunked on my heart.",
        "Are you Soraka? Because you've healed my lonely heart."
    ],
    items: [
        "Are you Rabadon's Deathcap? Because you're amplifying my feelings.",
        "Are you Infinity Edge? Because you're critically important to me.",
        "Are you Zhonya's Hourglass? Because time stops when I see you.",
        "Are you Guardian Angel? Because you've brought my heart back to life.",
        "Are you Luden's Tempest? Because you've sparked something in me.",
        "Are you Blade of the Ruined King? Because you've stolen my heart.",
        "Are you Redemption? Because you've saved me from loneliness.",
        "Are you Youmuu's Ghostblade? Because you've haunted my thoughts.",
        "Are you Runaan's Hurricane? Because my love for you spreads in all directions.",
        "Are you Warmog's Armor? Because my heart grows stronger for you."
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