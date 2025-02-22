document.addEventListener("DOMContentLoaded", function () {
    // Title animation
    const title = document.querySelector(".title");
    setTimeout(() => {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
        title.style.transition = "all 1s ease-out";
    }, 500);

    // Feature card show more/less functionality
    document.querySelectorAll(".show-more").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const card = this.closest('.feature-card');
            const paragraph = card.querySelector('p');
            const fullText = paragraph.getAttribute('data-full-text') || paragraph.textContent;
            
            if (this.textContent === "Learn More") {
                paragraph.setAttribute('data-full-text', fullText);
                paragraph.style.maxHeight = "none";
                this.textContent = "Show Less";
            } else {
                paragraph.style.maxHeight = "3em";
                this.textContent = "Learn More";
            }
        });
    });

    // Learn More button animation
    const learnBtn = document.querySelector(".learn-btn");
    learnBtn.addEventListener("click", function() {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 200);
    });
});
