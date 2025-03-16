(function autoClick() {
    const btn = document.querySelector("._variant-primary_1a2p7_52");
    const interval = 10000

    const prompTextArea = document.querySelector(".baseInput")

    const subjects = [
        'a futuristic cityscape', 'a medieval castle', 'a cyberpunk hacker', 'ancient ruins in the jungle',
        'a haunted mansion', 'a post-apocalyptic survivor', 'a spaceship exploring deep space',
        'a mythical dragon in the sky', 'a steampunk airship floating above a city',
        'a samurai warrior in the rain', 'an enchanted forest with glowing mushrooms'
    ];

    const styles = [
        'realistic digital painting', 'anime-style illustration', 'cyberpunk aesthetic',
        'dark fantasy concept art', 'steampunk-inspired artwork', 'pixel art', 'sci-fi 3D render',
        'watercolor painting', 'vintage noir illustration', 'highly detailed oil painting'
    ];

    const atmospheres = [
        'eerie and mysterious', 'dark and dystopian', 'bright and whimsical', 'magical and enchanting',
        'peaceful and serene', 'chaotic and action-packed', 'cold and desolate', 'romantic and dreamy',
        'gloomy and foggy', 'futuristic and high-tech'
    ];

    const perspectives = [
        'birds-eye view, looking down from above', 'first-person perspective, as if you are there',
        'a dramatic close-up shot', 'a wide-angle cinematic shot', 'a low-angle perspective, looking up',
        'a Dutch angle for a dynamic effect', 'an isometric view, like a strategy game'
    ];

    function generateRandomPrompt() {
        const randomSubject = getRandomElement(subjects);
        const randomStyle = getRandomElement(styles);
        const randomAtmosphere = getRandomElement(atmospheres);
        const randomPerspective = getRandomElement(perspectives);

        return `A ${randomAtmosphere} scene of ${randomSubject}, illustrated in a ${randomStyle}, captured from ${randomPerspective}.`;
    }

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    function start() {
        const delay = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;

        if (btn.disabled) {
            console.log("waiting for button to be ready")
        } else {
            setTimeout(() => {
                const a = document.querySelector("._container_1dr62_1 > textarea")
                a.value = `${generateRandomPrompt()}`

                console.log("button is ready! clicking....")

                setTimeout(() => {
                    btn.click()
                }, 5000)

                console.log(`waited ${delay + 5000}ms before clicking the button..`)
                console.log(`prompt: ${a.value}`)
            }, delay)
        }
    }

    setInterval(start, interval)
})()