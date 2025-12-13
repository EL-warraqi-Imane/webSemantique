// Configuration de la présentation
const PRESENTATION_CONFIG = {
    totalSlides: 13,
    transitionSpeed: 500,
    isFullscreen: false
};

// État de la présentation
let currentSlide = 0;
let slides = [];
let dots = [];

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initializePresentation();
    setupEventListeners();
    createSlideDots();
    updateSlideCounter();
    updateNavigationButtons();
});

// Initialiser la présentation
function initializePresentation() {
    // Récupérer toutes les slides
    slides = document.querySelectorAll('.slide');
    
    // Vérifier que nous avons le bon nombre de slides
    if (slides.length !== PRESENTATION_CONFIG.totalSlides) {
        console.warn(`Nombre de slides incorrect: ${slides.length} au lieu de ${PRESENTATION_CONFIG.totalSlides}`);
    }
    
    // Afficher la première slide
    showSlide(0);
    
    // Ajouter une animation d'entrée
    setTimeout(() => {
        document.querySelector('.slides-container').style.opacity = '1';
        document.querySelector('.slides-container').style.transform = 'translateY(0)';
    }, 100);
}

// Configurer les événements
function setupEventListeners() {
    // Boutons de navigation
    document.getElementById('prevBtn').addEventListener('click', () => navigate(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigate(1));
    
    // Bouton plein écran
    document.getElementById('presentBtn').addEventListener('click', toggleFullscreen);
    
    // Navigation au clavier
    document.addEventListener('keydown', handleKeydown);
    
    // Navigation tactile (swipe)
    setupSwipeNavigation();
    
    // Clic sur les slides pour avancer
    document.querySelector('.slides-container').addEventListener('click', (e) => {
        if (e.target.closest('.nav-btn') || e.target.closest('.present-btn')) return;
        if (e.clientX > window.innerWidth / 2) {
            navigate(1);
        } else {
            navigate(-1);
        }
    });
}

// Créer les points de navigation
function createSlideDots() {
    const dotsContainer = document.getElementById('slideDots');
    
    for (let i = 0; i < PRESENTATION_CONFIG.totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.dataset.slide = i;
        dot.addEventListener('click', () => goToSlide(i));
        
        dotsContainer.appendChild(dot);
        dots.push(dot);
    }
    
    updateDots();
}

// Naviguer entre les slides
function navigate(direction) {
    let newIndex = currentSlide + direction;
    
    // Vérifier les limites
    if (newIndex < 0) {
        newIndex = 0;
    } else if (newIndex >= PRESENTATION_CONFIG.totalSlides) {
        newIndex = PRESENTATION_CONFIG.totalSlides - 1;
    }
    
    if (newIndex !== currentSlide) {
        showSlide(newIndex);
    }
}

// Aller à une slide spécifique
function goToSlide(slideIndex) {
    if (slideIndex >= 0 && slideIndex < PRESENTATION_CONFIG.totalSlides) {
        showSlide(slideIndex);
    }
}

// Afficher une slide
function showSlide(slideIndex) {
    // Cacher la slide actuelle
    if (slides[currentSlide]) {
        slides[currentSlide].classList.remove('active');
    }
    
    // Mettre à jour l'index
    currentSlide = slideIndex;
    
    // Afficher la nouvelle slide
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
        
        // Animation d'entrée
        slides[currentSlide].style.opacity = '0';
        slides[currentSlide].style.transform = 'translateX(30px)';
        
        setTimeout(() => {
            slides[currentSlide].style.transition = `opacity ${PRESENTATION_CONFIG.transitionSpeed}ms ease, transform ${PRESENTATION_CONFIG.transitionSpeed}ms ease`;
            slides[currentSlide].style.opacity = '1';
            slides[currentSlide].style.transform = 'translateX(0)';
        }, 50);
    }
    
    // Mettre à jour l'interface
    updateSlideCounter();
    updateNavigationButtons();
    updateDots();
    
    // Défilement vers le haut
    document.querySelector('.slides-container').scrollTop = 0;
    
    // Historique du navigateur
    updateURL();
}

// Mettre à jour le compteur
function updateSlideCounter() {
    const currentSlideElement = document.getElementById('currentSlide');
    const totalSlidesElement = document.getElementById('totalSlides');
    
    if (currentSlideElement) {
        currentSlideElement.textContent = currentSlide + 1;
    }
    
    if (totalSlidesElement) {
        totalSlidesElement.textContent = PRESENTATION_CONFIG.totalSlides;
    }
}

// Mettre à jour les boutons de navigation
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentSlide === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentSlide === PRESENTATION_CONFIG.totalSlides - 1;
    }
}

// Mettre à jour les points
function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Gérer la navigation clavier
function handleKeydown(event) {
    switch (event.key) {
        case 'ArrowLeft':
        case 'PageUp':
            event.preventDefault();
            navigate(-1);
            break;
            
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
            event.preventDefault();
            navigate(1);
            break;
            
        case 'Home':
            event.preventDefault();
            goToSlide(0);
            break;
            
        case 'End':
            event.preventDefault();
            goToSlide(PRESENTATION_CONFIG.totalSlides - 1);
            break;
            
        case 'f':
        case 'F':
            if (event.ctrlKey || event.metaKey) {
                event.preventDefault();
                toggleFullscreen();
            }
            break;
            
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (event.key <= PRESENTATION_CONFIG.totalSlides) {
                event.preventDefault();
                goToSlide(parseInt(event.key) - 1);
            }
            break;
    }
}

// Configurer la navigation par swipe
function setupSwipeNavigation() {
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const diff = touchEndX - touchStartX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe vers la droite
                navigate(-1);
            } else {
                // Swipe vers la gauche
                navigate(1);
            }
        }
    }
}

// Basculer le mode plein écran
function toggleFullscreen() {
    const container = document.querySelector('.slides-container');
    
    if (!PRESENTATION_CONFIG.isFullscreen) {
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) {
            container.msRequestFullscreen();
        }
        
        document.querySelector('.navigation').style.display = 'none';
        document.querySelector('.slide-dots').style.display = 'none';
        PRESENTATION_CONFIG.isFullscreen = true;
        
        document.getElementById('presentBtn').innerHTML = '<i class="fas fa-compress"></i> Sortir';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        
        document.querySelector('.navigation').style.display = 'flex';
        document.querySelector('.slide-dots').style.display = 'flex';
        PRESENTATION_CONFIG.isFullscreen = false;
        
        document.getElementById('presentBtn').innerHTML = '<i class="fas fa-expand"></i> Présentation';
    }
}

// Mettre à jour l'URL
function updateURL() {
    const url = new URL(window.location);
    url.searchParams.set('slide', currentSlide + 1);
    window.history.replaceState({}, '', url);
}

// Restaurer la slide depuis l'URL
function restoreFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const slideParam = urlParams.get('slide');
    
    if (slideParam) {
        const slideIndex = parseInt(slideParam) - 1;
        if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < PRESENTATION_CONFIG.totalSlides) {
            showSlide(slideIndex);
        }
    }
}

// Gérer le changement de plein écran
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('msfullscreenchange', handleFullscreenChange);

function handleFullscreenChange() {
    const isFullscreenNow = !!(document.fullscreenElement || 
                              document.webkitFullscreenElement || 
                              document.msFullscreenElement);
    
    if (!isFullscreenNow && PRESENTATION_CONFIG.isFullscreen) {
        document.querySelector('.navigation').style.display = 'flex';
        document.querySelector('.slide-dots').style.display = 'flex';
        PRESENTATION_CONFIG.isFullscreen = false;
        
        document.getElementById('presentBtn').innerHTML = '<i class="fas fa-expand"></i> Présentation';
    }
}

// Animation d'entrée initiale
setTimeout(() => {
    const slidesContainer = document.querySelector('.slides-container');
    slidesContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    slidesContainer.style.opacity = '1';
    slidesContainer.style.transform = 'translateY(0)';
    
    // Restaurer depuis l'URL
    restoreFromURL();
}, 100);

// Fonction pour démarrer une présentation automatique
function startAutoPresentation(interval = 10000) {
    let autoPlay = setInterval(() => {
        if (currentSlide < PRESENTATION_CONFIG.totalSlides - 1) {
            navigate(1);
        } else {
            clearInterval(autoPlay);
        }
    }, interval);
    
    return autoPlay;
}

// Exporter les fonctions utiles pour la console
window.presentation = {
    next: () => navigate(1),
    prev: () => navigate(-1),
    goTo: goToSlide,
    current: () => currentSlide + 1,
    total: PRESENTATION_CONFIG.totalSlides,
    startAuto: startAutoPresentation,
    toggleFullscreen: toggleFullscreen
};

// Message de bienvenue dans la console
console.log('%c🎯 Présentation Web Sémantique', 'color: #667eea; font-size: 18px; font-weight: bold;');
console.log('%cUtilisez les flèches, espace, ou cliquez pour naviguer', 'color: #764ba2;');
console.log('%cCommande disponible: presentation.next(), presentation.prev(), presentation.goTo(slide)', 'color: #666;');