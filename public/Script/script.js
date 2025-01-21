document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".portfolio-tabs span");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs
            tabs.forEach((t) => t.classList.remove("active"));
            // Hide all tab contents
            contents.forEach((content) => {
                content.classList.remove("active");
            });

            // Add active class to clicked tab
            tab.classList.add("active");
            // Show corresponding content
            const targetId = tab.getAttribute("data-tab");
            document.getElementById(targetId).classList.add("active");
        });
    });
});




