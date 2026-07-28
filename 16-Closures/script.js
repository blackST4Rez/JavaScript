function createToaster(config) {
    return function (str) {
        // Create a new notification element
        let div = document.createElement("div");

        // Set the notification message
        div.textContent = str;

        // Add Tailwind CSS classes
        div.className = `
            p-4
            rounded-lg
            shadow-lg
            ${
                config.theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-black"
            }
        `;

        // Add the notification to the parent container
        document.querySelector(".parent").appendChild(div);

        // Set the notification position
        if (
            config.positionX !== "left" ||
            config.positionY !== "top"
        ) {
            document.querySelector(".parent").className += `
                ${config.positionX === "right" ? "right-5" : "left-5"}
                ${config.positionY === "top" ? "top-5" : "bottom-5"}
            `;
        }

        // Remove the notification after the specified duration
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    };
}

const toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "light",
    duration: 3,
});

// Show the first notification immediately
toaster("Download Done");

// Show the second notification after 1.5 seconds
setTimeout(() => {
    toaster("Rupesh sent you a message");
}, 1500);

// Show the third notification after 2 seconds
setTimeout(() => {
    toaster("Harsh accepted your request");
}, 2000);