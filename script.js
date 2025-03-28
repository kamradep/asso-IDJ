document.addEventListener("DOMContentLoaded", function () {
    
    // Animation d'apparition des éléments avec IntersectionObserver
    const animatedItems = document.querySelectorAll('.animated');
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationClass = element.getAttribute('data-animation');
                element.classList.add(animationClass);
                element.classList.remove('hidden');
            }
        });
    }, { threshold: 0.1 });

    animatedItems.forEach(function (item) {
        item.classList.add('hidden');
        observer.observe(item);
    });

    // Vérifie si le paramètre `error=1` est dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('error')) {
        // Affiche le message d'erreur
        const errorMsg = document.getElementById("erreur");
        if (errorMsg) {
            errorMsg.style.display = "block";
        }
        // Supprime `?error=1` de l'URL sans recharger la page
        history.replaceState({}, document.title, "login");
    }

    const imageRotate = document.querySelector('.rotate');
    if (imageRotate) {
        imageRotate.addEventListener('click', function () {
            this.classList.toggle('clicked');
        });
    }

    const dropdownMenu = document.querySelector('.menulinks');
    imageRotate.addEventListener('click', function () {
        dropdownMenu.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        if (!imageRotate.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 800) {
            dropdownMenu.classList.remove('active');
        }
    });
});

let scrollPosition = 0;

function scrollGallery(direction) {
    const container = document.querySelector('.EP');
    const photos = document.querySelector('.organigrame');
    const scrollAmount = container.offsetWidth; // Largeur visible du conteneur

    // Calculer la largeur totale défilable
    const maxScroll = photos.scrollWidth - container.offsetWidth;

    // Mettre à jour la position
    scrollPosition += direction * scrollAmount;

    // Bloquer aux limites
    if (scrollPosition < 0) scrollPosition = 0;
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;

    // Appliquer la position avec transform
    photos.style.transform = `translateX(-${scrollPosition}px)`;

    // Activer l'indicateur correspondant
    const indicators = document.querySelectorAll('.dot');
    const activeIndex = Math.round((scrollPosition / maxScroll) * (indicators.length - 1));

    indicators.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

