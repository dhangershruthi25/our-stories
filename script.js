// =========================================
// GET ELEMENTS
// =========================================

const startButton =
    document.getElementById("start-button");

const openingScreen =
    document.getElementById("opening-screen");

const dateScreen =
    document.getElementById("date-screen");

const timeButton =
    document.getElementById("time-button");

const timeScreen =
    document.getElementById("time-screen");

const storyButton =
    document.getElementById("story-button");

const storyScreen =
    document.getElementById("story-screen");

const finalScreen =
    document.getElementById("final-screen");


// =========================================
// PAGE 1 → PAGE 2
// =========================================

startButton.addEventListener(
    "click",
    function () {

        openingScreen.classList.add("hide");

        setTimeout(function () {

            dateScreen.classList.add("show");

        }, 700);

    }
);


// =========================================
// LIVE COUNTER
// =========================================

const startDate =
    new Date(2026, 8, 16, 0, 0, 0);


const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


function updateCounter() {

    const now =
        new Date();

    const difference =
        now - startDate;

    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    daysElement.textContent =
        days;

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}


updateCounter();

setInterval(
    updateCounter,
    1000
);


// =========================================
// PAGE 2 → PAGE 3
// =========================================

timeButton.addEventListener(
    "click",
    function () {

        dateScreen.classList.remove("show");

        setTimeout(function () {

            timeScreen.classList.add("show");

        }, 600);

    }
);


// =========================================
// PAGE 3 → PAGE 4
// =========================================

storyButton.addEventListener(
    "click",
    function () {

        timeScreen.classList.remove("show");

        setTimeout(function () {

            storyScreen.classList.add("show");

        }, 600);

    }
);


// =========================================
// STORY CHAPTERS
// =========================================

const storyScenes =
    document.querySelectorAll(".story-scene");

const nextButtons =
    document.querySelectorAll(".next-story");

const secretScene =
    document.querySelector(".secret-scene");

let currentScene = 0;


nextButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            storyScenes[currentScene]
                .classList.remove("active");

            currentScene++;


            if (
                currentScene >=
                storyScenes.length
            ) {

                secretScene.classList.add("show");

                return;
            }


            storyScenes[currentScene]
                .classList.add("active");

        }
    );

});


// =========================================
// SECRET UNLOCK
// =========================================

const unlockButton =
    document.getElementById("unlock-button");

const secretInput =
    document.getElementById("secret-input");

const secretMessage =
    document.getElementById("secret-message");


unlockButton.addEventListener(
    "click",
    function () {

        const answer =
            secretInput.value
                .trim()
                .toLowerCase();


        if (answer === "shannu") {

            secretMessage.textContent =
                "Unlocked ✦";


            setTimeout(function () {

                storyScreen.classList.remove("show");

                setTimeout(function () {

                    finalScreen.classList.add("show");

                }, 600);

            }, 1000);

        }

        else {

            secretMessage.textContent =
                "Not quite... try again.";

            secretInput.value = "";

        }

    }
);


// =========================================
// ENTER KEY
// =========================================

secretInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            unlockButton.click();

        }

    }
);


// =========================================
// CURSOR GLOW
// =========================================

const cursorGlow =
    document.querySelector(".cursor-glow");


document.addEventListener(
    "mousemove",
    function (event) {

        if (!cursorGlow) {
            return;
        }

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);


// =========================================
// MUSIC BUTTON
// =========================================

const musicButton =
    document.getElementById("music-button");


musicButton.addEventListener(
    "click",
    function () {

        musicButton.classList.toggle("playing");

        if (
            musicButton.classList.contains("playing")
        ) {

            musicButton.textContent = "♫";

        }

        else {

            musicButton.textContent = "♪";

        }

    }
);

// =========================================
// MEMORY CARD CLICK
// =========================================

const memoryCards =
    document.querySelectorAll(".memory-card");


memoryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        // Close other cards
        memoryCards.forEach(function (otherCard) {

            if (otherCard !== card) {
                otherCard.classList.remove("expanded");
            }

        });

        // Open / close clicked card
        card.classList.toggle("expanded");

    });

});

// =========================================
// MEMORY PHOTO PREVIEW
// =========================================

const memoryPreview =
    document.getElementById("memory-preview");

const closeMemory =
    document.getElementById("close-memory");

const previewPlaceholder =
    document.querySelector(".preview-placeholder");

const previewTitle =
    document.getElementById("preview-title");

const previewCaption =
    document.getElementById("preview-caption");


memoryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const image =
            card.querySelector("img");

        const title =
            card.querySelector(".memory-caption");

        if (!image) {
            return;
        }


        // Put the clicked photo into preview

        previewPlaceholder.innerHTML = "";

        const previewImage =
            document.createElement("img");

        previewImage.src =
            image.src;

        previewImage.alt =
            image.alt;

        previewPlaceholder.appendChild(
            previewImage
        );


        // Add caption

        previewTitle.textContent =
            image.alt;

        previewCaption.textContent =
            title.textContent;


        // Show preview

        memoryPreview.classList.add("show");

    });

});


// Close preview

closeMemory.addEventListener(
    "click",
    function () {

        memoryPreview.classList.remove("show");

    }
);