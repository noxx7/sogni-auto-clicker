(function autoClick() {
    const btn = document.querySelector("._field_1uhfe_67 > ._variant-primary_1a2p7_52");
    const a = document.querySelector("._container_1dr62_1 > textarea")
    const sidebarBtn = document.querySelector("._sidebarToggle_1uhfe_38")
    const sidebarActive = "_sidebarToggleActive_1uhfe_55"
    const sidebarCreatorBtn = document.querySelector("._navBarBtn_lnd69_77")
    const interval = 10000

    const url = "https://app.sogni.ai/creator"

    const subjects = [
        'a futuristic cityscape', 'a medieval castle', 'a cyberpunk hacker', 'ancient ruins in the jungle',
        'a haunted mansion', 'a post-apocalyptic survivor', 'a spaceship exploring deep space',
        'a mythical dragon in the sky', 'a steampunk airship floating above a city',
        'a samurai warrior in the rain', 'an enchanted forest with glowing mushrooms',
        'a bustling alien marketplace', 'a serene mountain village', 'a pirate ship on stormy seas',
        'a futuristic robot in a neon-lit alley', 'a mystical temple hidden in the clouds',
        'a group of adventurers in a dark dungeon', 'a futuristic racing car on a high-speed track',
        'a magical library with endless bookshelves', 'a time traveler in a historical setting',
        'a futuristic underwater city', 'a giant mech battling in a ruined city',
        'a wizard casting spells in a mystical forest', 'a futuristic train speeding through a desert',
        'a hidden village in the mountains', 'a spaceship docking at a space station',
        'a knight in shining armor in a grand hall', 'a futuristic city with flying cars',
        'a mysterious island with ancient ruins', 'a futuristic laboratory with advanced technology',
        'a group of explorers in a dense jungle', 'a futuristic sports arena with holographic displays',
        'a magical portal opening in a forest', 'a futuristic city under a dome',
        'a group of rebels fighting in a dystopian city', 'a futuristic amusement park with advanced rides',
        'a mystical creature in a hidden cave', 'a futuristic battlefield with advanced weaponry',
        'a serene beach with crystal-clear water', 'a futuristic shopping mall with robotic assistants'
    ];

    const styles = [
        'realistic digital painting', 'anime-style illustration', 'cyberpunk aesthetic',
        'dark fantasy concept art', 'steampunk-inspired artwork', 'pixel art', 'sci-fi 3D render',
        'watercolor painting', 'vintage noir illustration', 'highly detailed oil painting',
        'minimalist line art', 'surrealist artwork', 'impressionist painting', 'cartoonish 3D render',
        'hyper-realistic CGI', 'abstract expressionism', 'comic book style', 'chalk pastel drawing',
        'graffiti street art', 'fantasy map illustration', 'low-poly 3D art', 'vector art',
        'mixed media collage', 'digital charcoal sketch', 'fantasy illustration', 'concept art',
        'character design', 'environmental art', 'storyboard art', 'matte painting',
        'digital sculpting', 'photorealistic rendering', 'stylized 3D art', 'hand-drawn animation',
        'digital ink illustration', 'fantasy landscape painting', 'sci-fi concept art',
        'character portrait', 'environmental concept art', 'story-driven illustration'
    ];

    const atmospheres = [
        'eerie and mysterious', 'dark and dystopian', 'bright and whimsical', 'magical and enchanting',
        'peaceful and serene', 'chaotic and action-packed', 'cold and desolate', 'romantic and dreamy',
        'gloomy and foggy', 'futuristic and high-tech', 'vibrant and lively', 'ominous and foreboding',
        'nostalgic and vintage', 'ethereal and otherworldly', 'intense and dramatic', 'calm and tranquil',
        'mystical and surreal', 'dynamic and energetic', 'haunting and melancholic', 'luminous and radiant',
        'warm and inviting', 'cold and industrial', 'mysterious and enigmatic', 'festive and celebratory',
        'tense and suspenseful', 'relaxed and carefree', 'epic and grandiose', 'intimate and personal',
        'alien and unfamiliar', 'familiar and comforting', 'dangerous and unpredictable',
        'safe and secure', 'chaotic and unpredictable', 'orderly and structured', 'wild and untamed',
        'controlled and precise', 'spontaneous and free-flowing', 'dreamlike and surreal',
        'realistic and grounded', 'fantastical and imaginative'
    ];

    const perspectives = [
        'birds-eye view, looking down from above', 'first-person perspective, as if you are there',
        'a dramatic close-up shot', 'a wide-angle cinematic shot', 'a low-angle perspective, looking up',
        'a Dutch angle for a dynamic effect', 'an isometric view, like a strategy game',
        'a macro shot focusing on intricate details', 'a panoramic view capturing the vast landscape',
        'a tilted perspective for a sense of unease', 'a worm’s-eye view from ground level',
        'a split-screen view showing multiple angles', 'a fisheye lens for a distorted effect',
        'a top-down view like a classic RPG game', 'a side-scrolling view like a platformer game',
        'a 360-degree view for an immersive experience', 'a zoomed-out view showing the entire scene',
        'a cinematic over-the-shoulder shot', 'a dynamic action shot with motion blur',
        'a reflective view through a mirror or water surface', 'a high-angle shot for a sense of vulnerability',
        'a low-angle shot for a sense of power', 'a point-of-view shot from a character’s eyes',
        'a wide shot to establish the scene', 'a medium shot to focus on the subject',
        'a close-up shot to capture emotions', 'an extreme close-up for dramatic effect',
        'a tracking shot following the action', 'a static shot for a sense of stability',
        'a handheld shot for a sense of realism', 'a crane shot for a grand reveal',
        'a drone shot for an aerial perspective', 'a time-lapse shot to show the passage of time',
        'a slow-motion shot to emphasize details', 'a fast-motion shot to show speed',
        'a tilt-shift shot for a miniature effect', 'a long exposure shot for a dreamy effect',
        'a black-and-white shot for a classic look', 'a color-graded shot for a specific mood'
    ];

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    function generateRandomPrompt() {
        const randomSubject = getRandomElement(subjects);
        const randomStyle = getRandomElement(styles);
        const randomAtmosphere = getRandomElement(atmospheres);
        const randomPerspective = getRandomElement(perspectives);

        const promptVariations = [
            `Imagine a ${randomAtmosphere} scene of ${randomSubject}, depicted in a ${randomStyle}, viewed from ${randomPerspective}.`,
            `A ${randomAtmosphere} depiction of ${randomSubject}, rendered in a ${randomStyle}, captured from ${randomPerspective}.`,
            `Visualize a ${randomAtmosphere} setting of ${randomSubject}, illustrated in a ${randomStyle}, seen from ${randomPerspective}.`,
            `Picture a ${randomAtmosphere} moment of ${randomSubject}, created in a ${randomStyle}, framed from ${randomPerspective}.`,
            `Envision a ${randomAtmosphere} world of ${randomSubject}, portrayed in a ${randomStyle}, observed from ${randomPerspective}.`,
            `Create a ${randomAtmosphere} vision of ${randomSubject}, designed in a ${randomStyle}, captured from ${randomPerspective}.`,
            `Craft a ${randomAtmosphere} image of ${randomSubject}, painted in a ${randomStyle}, viewed from ${randomPerspective}.`,
            `Design a ${randomAtmosphere} concept of ${randomSubject}, illustrated in a ${randomStyle}, seen from ${randomPerspective}.`,
            `Render a ${randomAtmosphere} scene of ${randomSubject}, styled in a ${randomStyle}, framed from ${randomPerspective}.`,
            `Illustrate a ${randomAtmosphere} moment of ${randomSubject}, created in a ${randomStyle}, captured from ${randomPerspective}.`,
            `Think of a ${randomAtmosphere} scenario featuring ${randomSubject}, expressed through a ${randomStyle}, from the perspective of ${randomPerspective}.`,
            `Conjure up a ${randomAtmosphere} image of ${randomSubject}, realized in a ${randomStyle}, as seen from ${randomPerspective}.`,
            `Dream up a ${randomAtmosphere} vision of ${randomSubject}, brought to life in a ${randomStyle}, viewed from ${randomPerspective}.`,
            `Sketch out a ${randomAtmosphere} scene of ${randomSubject}, imagined in a ${randomStyle}, captured from ${randomPerspective}.`,
            `Fantasize about a ${randomAtmosphere} world of ${randomSubject}, depicted in a ${randomStyle}, observed from ${randomPerspective}.`,
            `Visualize a ${randomAtmosphere} moment of ${randomSubject}, crafted in a ${randomStyle}, framed from ${randomPerspective}.`,
            `Picture yourself in a ${randomAtmosphere} setting of ${randomSubject}, illustrated in a ${randomStyle}, seen from ${randomPerspective}.`,
            `Imagine walking into a ${randomAtmosphere} scene of ${randomSubject}, rendered in a ${randomStyle}, viewed from ${randomPerspective}.`,
            `Envision yourself exploring a ${randomAtmosphere} world of ${randomSubject}, portrayed in a ${randomStyle}, captured from ${randomPerspective}.`,
            `Think about a ${randomAtmosphere} scenario where ${randomSubject} is the focus, expressed through a ${randomStyle}, from the perspective of ${randomPerspective}.`,
            `Consider a ${randomAtmosphere} depiction of ${randomSubject}, created in a ${randomStyle}, framed from ${randomPerspective}.`,
            `Reflect on a ${randomAtmosphere} moment of ${randomSubject}, illustrated in a ${randomStyle}, seen from ${randomPerspective}.`,
            `Dream of a ${randomAtmosphere} scene of ${randomSubject}, designed in a ${randomStyle}, viewed from ${randomPerspective}.`,
            `Imagine a ${randomAtmosphere} world where ${randomSubject} comes to life, depicted in a ${randomStyle}, captured from ${randomPerspective}.`,
            `Visualize a ${randomAtmosphere} setting where ${randomSubject} is the centerpiece, rendered in a ${randomStyle}, observed from ${randomPerspective}.`,
            `Picture a ${randomAtmosphere} moment where ${randomSubject} takes the spotlight, created in a ${randomStyle}, framed from ${randomPerspective}.`,
            `Envision a ${randomAtmosphere} scenario featuring ${randomSubject}, portrayed in a ${randomStyle}, seen from ${randomPerspective}.`,
            `Think of a ${randomAtmosphere} image of ${randomSubject}, expressed through a ${randomStyle}, viewed from ${randomPerspective}.`,
            `Conjure up a ${randomAtmosphere} vision of ${randomSubject}, realized in a ${randomStyle}, captured from ${randomPerspective}.`,
            `Dream up a ${randomAtmosphere} scene of ${randomSubject}, brought to life in a ${randomStyle}, observed from ${randomPerspective}.`,
            `Sketch out a ${randomAtmosphere} moment of ${randomSubject}, imagined in a ${randomStyle}, framed from ${randomPerspective}.`,
            `Fantasize about a ${randomAtmosphere} world where ${randomSubject} is the focus, depicted in a ${randomStyle}, viewed from ${randomPerspective}.`,
            `Visualize a ${randomAtmosphere} scenario of ${randomSubject}, crafted in a ${randomStyle}, seen from ${randomPerspective}.`,
            `Picture yourself in a ${randomAtmosphere} setting of ${randomSubject}, illustrated in a ${randomStyle}, captured from ${randomPerspective}.`,
            `Imagine walking into a ${randomAtmosphere} scene of ${randomSubject}, rendered in a ${randomStyle}, observed from ${randomPerspective}.`,
            `Envision yourself exploring a ${randomAtmosphere} world of ${randomSubject}, portrayed in a ${randomStyle}, framed from ${randomPerspective}.`,
            `Think about a ${randomAtmosphere} scenario where ${randomSubject} is the centerpiece, expressed through a ${randomStyle}, viewed from ${randomPerspective}.`,
            `Consider a ${randomAtmosphere} depiction of ${randomSubject}, created in a ${randomStyle}, seen from ${randomPerspective}.`,
            `Reflect on a ${randomAtmosphere} moment of ${randomSubject}, illustrated in a ${randomStyle}, captured from ${randomPerspective}.`,
            `Dream of a ${randomAtmosphere} scene of ${randomSubject}, designed in a ${randomStyle}, observed from ${randomPerspective}.`,
            `Imagine a ${randomAtmosphere} world where ${randomSubject} comes to life, depicted in a ${randomStyle}, framed from ${randomPerspective}.`,
            `Visualize a ${randomAtmosphere} setting where ${randomSubject} is the focus, rendered in a ${randomStyle}, viewed from ${randomPerspective}.`,
            `Picture a ${randomAtmosphere} moment where ${randomSubject} takes the spotlight, created in a ${randomStyle}, captured from ${randomPerspective}.`,
            `Envision a ${randomAtmosphere} scenario featuring ${randomSubject}, portrayed in a ${randomStyle}, seen from ${randomPerspective}.`,
            `Think of a ${randomAtmosphere} image of ${randomSubject}, expressed through a ${randomStyle}, observed from ${randomPerspective}.`,
            `Conjure up a ${randomAtmosphere} vision of ${randomSubject}, realized in a ${randomStyle}, framed from ${randomPerspective}.`,
            `Dream up a ${randomAtmosphere} scene of ${randomSubject}, brought to life in a ${randomStyle}, viewed from ${randomPerspective}.`,
            `Sketch out a ${randomAtmosphere} moment of ${randomSubject}, imagined in a ${randomStyle}, captured from ${randomPerspective}.`,
            `Fantasize about a ${randomAtmosphere} world where ${randomSubject} is the centerpiece, depicted in a ${randomStyle}, seen from ${randomPerspective}.`
        ];

        return getRandomElement(promptVariations)
    }

    const emulateClickingText = () => {
        return {
            x: Math.floor(Math.random() * (270 - 70 + 1)) + 70,
            y: Math.floor(Math.random() * (64 - 53 + 1)) + 53
        }
    }

    function simulateMouse(x, y) {
        console.log(`simulating mouse movement to x: ${x}, y: ${y}`)
        const element = document.elementFromPoint(x, y)

        const move = new MouseEvent('mousemove', {
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y
        })

        const click = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y
        })

        if (element) {
            element.dispatchEvent(move)
            console.log(element)
            if (window.location.href === url) {
                if (btn && !btn.disabled || a || sidebarBtn.classList[1] === sidebarActive) {
                    element.dispatchEvent(click)
                }
            } else {
                if (sidebarCreatorBtn) {
                    element.dispatchEvent(click)
                }
            }
            console.log(`clicked ${element} at x: ${x}, y: ${y}`)
        }
    }


    function start() {
        const delay = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;

        if (window.location.href === url) {
            if (sidebarBtn.classList[1] === sidebarActive) {
                const sideBarRect = sidebarBtn.getBoundingClientRect()
                const sideBarX = sideBarRect.left + sideBarRect.width / 2
                const sideBarY = sideBarRect.top + sideBarRect.height / 2

                simulateMouse(sideBarX, sideBarY)
            } else {
                if (btn.disabled) {
                    console.log("waiting for button to be ready")
                } else {
                    if (a.textContent.length > 0) {
                        console.log("[deleting previous prompt]")
                        a.textContent = ""
                        a.dispatchEvent(new Event("input", { bubbles: true }))
                    } else {
                        setTimeout(() => {
                            console.log("[creating new prompt]")
                            const getTextCord = emulateClickingText()

                            console.log(`moving to x:${getTextCord.x}, y:${getTextCord.y}`)
                            simulateMouse(getTextCord.x, getTextCord.y)
                            a.textContent = `${generateRandomPrompt()}`
                            a.dispatchEvent(new Event("input", { bubbles: true }))
                            console.log(`prompt: ${a.textContent}`)

                            console.log("button is ready! clicking....")
                            setTimeout(() => {
                                const generateBtnRect = btn.getBoundingClientRect();
                                const generateBtnX = generateBtnRect.left + generateBtnRect.width / 2
                                const generateBtnY = generateBtnRect.top + generateBtnRect.height / 2

                                simulateMouse(generateBtnX, generateBtnY)
                                console.log(`waited ${delay + 2000}ms before clicking the button..`)
                            }, 2000)
                        }, delay)
                    }
                }
            }
        } else {
            console.log(`moving to ${url} so the script can run`)
            const sidebarCreatorBtnRect = sidebarCreatorBtn.getBoundingClientRect()
            const creatorBtnX = sidebarCreatorBtnRect.left + sidebarCreatorBtnRect.width / 2
            const creatorBtnY = sidebarCreatorBtnRect.top + sidebarCreatorBtnRect.height / 2

            simulateMouse(creatorBtnX, creatorBtnY)
        }
    }

    setInterval(start, interval)
})()