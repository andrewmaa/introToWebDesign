// Function to set the theme and update the toggle button
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const toggleBtn = document.getElementById('theme-toggle');
    
    // Update the image source based on theme
    if (toggleBtn) {
        if (theme === 'dark') {
            toggleBtn.src = "https://super.so/icon/light/moon.svg";
        } else {
            toggleBtn.src = "https://super.so/icon/dark/sun.svg";
        }
    }
}

// Function to toggle between light and dark themes
function toggleTheme() {
    // Get the current theme from the document, defaulting to 'light' if not set
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme;
    
    // Determine the new theme based on current theme
    if (currentTheme === 'light' || !currentTheme) {
        newTheme = 'dark';
    } else {
        newTheme = 'light';
    }
    // Apply the new theme
    setTheme(newTheme);
}

// Function to set daily song recommendation
function setDailySong() {
    const day = new Date().getDay();
    const songs = [
        { // Sunday
            title: "Aquamarine",
            artist: "Addison Rae",
            link: "https://open.spotify.com/track/3TPKsQTu9jZyzQJiax5rLA?si=a7854f2c15e04f3f",
            description: "\uD83E\uDEE7",
            albumArt: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02019545799595b4e964541c5a"
        },
        { // Monday
            title: "Apple",
            artist: "Charli XCX",
            link: "https://open.spotify.com/track/19RybK6XDbAVpcdxSbZL1o?si=30e789bfdeeb4008",
            description: "\uD83C\uDF4F",
            albumArt: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0288e3822cccfb8f2832c70c2e"
        },
        { // Tuesday
            title: "Impossible",
            artist: "Clairo",
            link: "https://open.spotify.com/track/71WT6kvVYlGba71B65JrH4?si=54e7dde2e8ec4842",
            description: "\uD83E\uDE75",
            albumArt: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0233ccb60f9b2785ef691b2fbc"
        },
        { // Wednesday
            title: "Spring is Coming With a Strawberry in the Mouth",
            artist: "Caroline Polachek",
            link: "https://open.spotify.com/track/0I49aN2b9qfw1UWtctmNtr?si=8ce793201a664d8e",
            description: "\uD83C\uDF38",
            albumArt: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0287858817af31c6329252c8c4"
        },
        { // Thursday
            title: "Image",
            artist: "Magdalena Bay",
            link: "https://open.spotify.com/track/0QW0KPBXXv67haGjbtkRRB?si=4ed2a97be45f4989",
            description: "\uD83D\uDCBF",
            albumArt: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025a2ff617de4e51a9a214b56a"
        },
        { // Friday
            title: "Kill V. Maim",
            artist: "Grimes",
            link: "https://open.spotify.com/track/3WXhshrs1fzwF3rQE399Gq?si=9f3ff02279b94b1d",
            description: "\uD83D\uDD2A",
            albumArt: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020f751d4123932ee82e78aae1"

        },
        { // Saturday
            title: "Cherry",
            artist: "Rina Sawayama",
            link: "https://open.spotify.com/track/36RGU7buus2UUtrPZ78hkR?si=3297ad9d09224017",
            description: "\uD83C\uDF52",
            albumArt: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c0e2c6a9afa145b6ab6ca6d9"
        }
    ];
    // set constants
    const songOfDay = songs[day];
    const songSection = document.getElementById('daily-song');
    const titleEl = songSection.querySelector('h3');
    const artistEl = document.getElementById('song-artist');
    const descriptionEl = document.getElementById('song-description');
    const linkEl = document.getElementById('spotify-link');
    const albumArtEl = document.getElementById('album-art');

    titleEl.textContent = songOfDay.title;
    artistEl.textContent = `by ${songOfDay.artist}`;
    descriptionEl.textContent = songOfDay.description;
    linkEl.href = songOfDay.link;
    albumArtEl.src = songOfDay.albumArt;
}

// Initialize theme on page load and add event listener to theme toggle button
document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme to light
    setTheme('light');
    
    // Get reference to theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    
    // Add click handler to toggle theme if button exists
    themeToggle?.addEventListener('click', toggleTheme);

    // Navigation toggle functionality
    const navToggle = document.getElementById('nav-toggle');
    const navContent = document.querySelector('.nav-content');

    navToggle?.addEventListener('click', () => {
        navContent.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = navToggle.getElementsByTagName('span');
        for (const span of spans) {
            span.classList.toggle('active');
        }
    });
    // Set daily song
    setDailySong();
});
