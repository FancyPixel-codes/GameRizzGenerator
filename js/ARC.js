const pickupLines = {
    characters: [
        "Are you a Raider? Because you've just plundered my heart.",
        "Are you an ARC operative? Because you're mission critical to my happiness.",
        "Are you the last survivor? Because I want to be stranded with you.",
        "Are you the team leader? Because I'd follow you anywhere.",
        "Are you a scavenger? Because you've found all the best parts of me.",
        "Are you the pilot? Because you're taking my heart to new heights.",
        "Are you the mechanic? Because you've fixed my broken heart.",
        "Are you the strategist? Because you've perfectly calculated your way into my heart.",
        "Are you the scout? Because you've discovered something precious.",
        "Are you the medic? Because you've healed all my wounds."
    ],
    locations: [
        "Are you the shattered city? Because I'm falling for your ruins.",
        "Are you the ARC installation? Because you're full of hidden treasures.",
        "Are you the coastline? Because you've washed away all my defenses.",
        "Are you the abandoned facility? Because I want to explore every part of you.",
        "Are you the radio tower? Because you're sending signals straight to my heart.",
        "Are you the mountain pass? Because you're taking my breath away.",
        "Are you the underground bunker? Because you've got me digging deeper.",
        "Are you the ruined skyscraper? Because you've elevated my feelings.",
        "Are you the research outpost? Because I want to study you forever.",
        "Are you the supply depot? Because you've got everything I need."
    ],
    weapons: [
        "Are you an ARC rifle? Because you're hitting all the right targets.",
        "Are you a pulse cannon? Because you're electrifying my world.",
        "Are you a graviton launcher? Because you're pulling me toward you.",
        "Are you a shield generator? Because you've got me completely protected.",
        "Are you a cloaking device? Because you've disappeared with my heart.",
        "Are you a mobility pack? Because you've boosted me to new heights.",
        "Are you a tactical scanner? Because you see right through to my soul.",
        "Are you a repair tool? Because you're fixing all my broken parts.",
        "Are you an energy blade? Because you've cut through my defenses.",
        "Are you a drone companion? Because I never want to be without you."
    ],
    enemies: [
        "Are you a Stalker? Because you've been following me in my dreams.",
        "Are you a Colossus? Because you've captured my attention completely.",
        "Are you a Seeker? Because you've found what you're looking for.",
        "Are you an ARC construct? Because you're perfectly engineered for my heart.",
        "Are you a patrol drone? Because you're always on my mind.",
        "Are you a turret? Because you're defending my heart from others.",
        "Are you a glitch? Because you're disrupting my systems in the best way.",
        "Are you an overseer? Because I want you watching over me.",
        "Are you a swarm unit? Because you've overwhelmed my defenses.",
        "Are you the final boss? Because you're the ultimate challenge for my heart."
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
