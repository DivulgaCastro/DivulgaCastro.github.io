// Array com os anúncios (alguns preenchidos e outros vazios)
const ads = [
    {
        id: 1,
        filled: true,
        title: "Restaurante Sabor da Terra",
        description: "O melhor da culinária caseira em Castro. Venha nos visitar!",
        image: "https://via.placeholder.com/400x300.png?text=Restaurante+Sabor+da+Terra",
        contactNumber: "5542999991111",
        addressLink: "https://goo.gl/maps/placeholder1" // Placeholder address link
    },
    {
        id: 2,
        filled: true,
        title: "Auto Mecânica Silva",
        description: "Serviços de mecânica em geral com o melhor preço da cidade.",
        image: "https://via.placeholder.com/400x300.png?text=Auto+Mecânica+Silva",
        contactNumber: "5542999992222",
        addressLink: "https://goo.gl/maps/placeholder2" // Placeholder address link
    },
    {
        id: 3,
        filled: true,
        title: "Farmácia Popular",
        description: "Medicamentos e produtos de higiene com entrega gratuita.",
        image: "https://via.placeholder.com/400x300.png?text=Farmácia+Popular",
        contactNumber: "5542999993333",
        addressLink: "https://goo.gl/maps/placeholder3" // Placeholder address link
    },
    {
        id: 4,
        filled: true,
        title: "Supermercado Economia",
        description: "Preços baixos todos os dias. Confira nossas ofertas!",
        image: "https://via.placeholder.com/400x300.png?text=Supermercado+Economia",
        contactNumber: "5542999994444",
        addressLink: "https://goo.gl/maps/placeholder4" // Placeholder address link
    },
    {
        id: 5,
        filled: false,
        contactNumber: "5542999999999" // Contact for empty slot CTA
    },
    {
        id: 6,
        filled: false,
        contactNumber: "5542999999999" // Contact for empty slot CTA
    },
    {
        id: 7,
        filled: false,
        contactNumber: "5542999999999" // Contact for empty slot CTA
    },
    {
        id: 8,
        filled: false,
        contactNumber: "5542999999999" // Contact for empty slot CTA
    }
];

// Função para embaralhar array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    const arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
}

// Função para criar os cartões de anúncios
function createAdCards() {
    const adsContainer = document.getElementById('ads-container');
    if (!adsContainer) {
        console.error("Element with ID 'ads-container' not found.");
        return;
    }
    adsContainer.innerHTML = '';

    const filledAds = ads.filter(ad => ad.filled);
    const emptyAds = ads.filter(ad => !ad.filled);
    const shuffledFilledAds = shuffleArray(filledAds);
    const combinedAds = [...shuffledFilledAds, ...emptyAds];

    combinedAds.forEach(ad => {
        const adCard = document.createElement('div');
        adCard.dataset.id = ad.id;

        if (ad.filled) {
            adCard.className = 'ad-card filled';

            // --- ADDED ADDRESS BUTTON ---
            adCard.innerHTML = `
                <div class="ad-card-image">
                    <img src="${ad.image}" alt="${ad.title}" loading="lazy">
                </div>
                <div class="ad-card-content">
                    <h3 class="ad-card-title">${ad.title}</h3>
                    <p class="ad-card-description">${ad.description}</p>
                    <div class="ad-card-contact">
                        <a href="https://wa.me/${ad.contactNumber}?text=Olá,%20vi%20seu%20anúncio%20no%20Divulga%20Castro%20e%20gostaria%20de%20mais%20informações." target="_blank" class="btn btn-primary">
                            <i class="fab fa-whatsapp"></i> Contato
                        </a>
                        ${ad.addressLink ? // Conditionally add address button if link exists
                        `<a href="${ad.addressLink}" target="_blank" class="btn btn-address">
                            <i class="fas fa-map-marker-alt"></i> Endereço
                        </a>` : ''}
                    </div>
                </div>
            `;
        } else {
            adCard.className = 'ad-card empty';
            adCard.innerHTML = `
                <i class="fas fa-ad"></i>
                <h3>Espaço Disponível</h3>
                <p>Anuncie seu negócio aqui e alcance milhares de pessoas!</p>
                <a href="https://wa.me/${ad.contactNumber}?text=Olá,%20gostaria%20de%20saber%20como%20anunciar%20neste%20espaço%20no%20Divulga%20Castro." target="_blank" class="btn btn-secondary">
                    <i class="fab fa-whatsapp"></i> Reservar este espaço
                </a>
            `;
        }
        adsContainer.appendChild(adCard);
    });
}

// Função para inicializar a página
function initPage() {
    createAdCards();
    console.log("Contador de visualização carregado via imagem de badge no HTML.");
}

document.addEventListener('DOMContentLoaded', initPage);