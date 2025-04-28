// --- START OF FILE script.js ---

// !!! IMPORTANT: Replace with your actual Deployed API URL when deploying !!!
// For local testing, ensure your API is running on port 3001.
const API_BASE_URL = 'divulga-castro-api-production.up.railway.app'; // <-- Keep this for local testing, REPLACE for deployment

// Array com os anúncios
const ads = [
    // Ensure IDs are unique and match database expectations
    {
        id: 1,
        filled: true,
        title: "NoBreak",
        description: "Potencialize Seu Carro com as melhores baterias do mercado!!",
        image: "./propagandas/NoBreak.jpeg",
        imageFit: "contain",
        mobileModalImageContainerHeight: "600px",
        mobileModalMaxWidth: "300%",
        contactNumber: "5542984023985",
        addressLink: "https://www.google.com/maps/dir/-24.8102667,-49.9952477/No+break+com%C3%A9rcio+de+baterias,+Tv.+Rio+de+Janeiro,+1713+-+Jd+das+arauc%C3%A1rias+2,+Castro+-+PR,+84174-070/@-24.8101474,-49.9978748,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94c29de0f556b0e3:0x8b97800079570872!2m2!1d-49.9952744!2d-24.8100281?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 2,
        filled: true,
        title: "Escape Room PG",
        description: "Salas temáticas com enigmas e desafios para seu grupo desvendar. Você é capaz de escapar em 60 minutos?",
        image: "./propagandas/EscapeRoomPG.jpeg",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542999621558",
        addressLink: "https://www.google.com/maps/dir//R.+Dr.+Sizenando+Bourguignon,+581+-+Vila+Santa+Cruz,+Castro+-+PR,+84168-030"
    },
    {
        id: 3,
        filled: true,
        title: "Restaurante Casantiga",
        description: "Restaurante buffet e a la carte no centro de Castro",
        image: "./propagandas/Casantiga.jpeg",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542999272035",
        addressLink: "https://www.google.com/maps/dir//R.+Maj.+Otávio+Novaes,+467+-+Centro,+Castro+-+PR,+84165-230"
    },
    {
        id: 4,
        filled: true,
        title: "Monteiro Construção Civil",
        description: "- Reformas\n- Pinturas\n- Serviços residencias\n- Arte em Porcelanato\n- Entre Outros\n Castro - Carambeí e Piraí",
        image: "propagandas/MonteiroConstrucaoCivil.png",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542999365788",
        addressLink: ""
    },
    {
        id: 5,
        filled: true,
        title: "Borracharia Butture",
        description: "Pneus Remold a partir de R$ 195,00",
        image: "propagandas/BorrachariaButture.png",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542998163036",
        addressLink: "https://www.google.com/maps/dir//Tv.+Rio+de+Janeiro,+1421+-+Jardim+das+Araucarias,+Castro+-+PR,+84174-070"
    },
    {
        id: 6,
        filled: true,
        title: "Piettro Gás",
        description: "Disk Entregas: Gás, Água e Carvão",
        image: "propagandas/PiettroGas.png",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542998156125",
        addressLink: "https://www.google.com/maps/dir//Rua+Cruz+Machado+1983,+Castro+PR"
    },
    {
        id: 7,
        filled: true,
        title: "Eduardo da Latinha",
        description: "Compra de latinhas e outros recicláveis.",
        image: "./propagandas/EduardoLatinha.jpeg",
        imageFit: "contain",
        mobileModalImageContainerHeight: "600px",
        mobileModalMaxWidth: "300%",
        contactNumber: "5542984023985",
        addressLink: "https://www.google.com/maps/dir/-24.8102667,-49.9952477/No+break+com%C3%A9rcio+de+baterias,+Tv.+Rio+de+Janeiro,+1713+-+Jd+das+arauc%C3%A1rias+2,+Castro+-+PR,+84174-070/@-24.8101474,-49.9978748,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94c29de0f556b0e3:0x8b97800079570872!2m2!1d-49.9952744!2d-24.8100281?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 8,
        filled: true,
        title: "LF - Pinturas e Reformas",
        description: "Graffiato, Massa Corrida, Massa Acrílica, Textura e Efeitos",
        image: "propagandas/LFPinturasReformas.png",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542999705728",
        addressLink: ""
    },
    {
        id: 9,
        filled: true,
        title: "Driver Elite",
        description: "Baixe o app e economize nas suas corridas",
        image: "propagandas/DriverElite.jpeg",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "",
        addressLink: ""
    },
    {
        id: 10,
        filled: false,
        title: "Ferro Velho e Reciclagem - Nossa Senhora Aparecida",
        description: "Compra e Venda",
        image: "propagandas/Ferro Velho e Reciclagem - Nossa Senhora Aparecida.png",
        contactNumber: "5542998172760",
        addressLink: "https://www.google.com/maps/dir//Av.+Vicente+fiorillo+3a,+castro+PR"
    },
     {
        id: 11,
        filled: true,
        title: "TecnoBombasIapó",
        description: "Perfuração, manutenção e poços artesianos",
        image: "propagandas/TecnoBombasIapo.png",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542999728086",
        addressLink: ""
    },
    {
        id: 12,
        filled: true,
        title: "Dias Negão Panfletagem",
        description: "Atendo Castro, Piraí do Sul, Carambeí e Ponta Grossa",
        image: "propagandas/DiasNegao.jpeg",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542998644451",
        addressLink: ""
    },
    {
        id: 13,
        filled: true,
        title: "Casa a venda em PG",
        description: "",
        image: "propagandas/ComandanteCondominio.jpeg",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542999127510",
        addressLink: "https://www.google.com/maps/dir//Rua+Engenheiro+Rebouças+246,+Uvaranas,+Ponta+Grossa+-+PR"
    },
    {
        id: 14,
        filled: true,
        title: "NoBreak 2",
        description: "Potencialize Seu Carro com as melhores baterias do mercado!!",
        image: "./propagandas/NoBreak2.jpeg",
        imageFit: "contain",
        mobileModalImageContainerHeight: "600px",
        mobileModalMaxWidth: "300%",
        contactNumber: "5542984023985",
        addressLink: "https://www.google.com/maps/dir/-24.8102667,-49.9952477/No+break+com%C3%A9rcio+de+baterias,+Tv.+Rio+de+Janeiro,+1713+-+Jd+das+arauc%C3%A1rias+2,+Castro+-+PR,+84174-070/@-24.8101474,-49.9978748,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94c29de0f556b0e3:0x8b97800079570872!2m2!1d-49.9952744!2d-24.8100281?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 15,
        filled: true,
        title: "Guincho Camargo",
        description: "Socorro 24h com rapidez e segurança",
        image: "propagandas/GuinchoCamargo.png",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542999079239",
        addressLink: ""
    },
    {
        id: 16,
        filled: true,
        title: "MangPress",
        description: "Prensagem de mangueiras",
        image: "propagandas/MangPress.png",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542999715054",
        addressLink: "https://www.google.com/maps/dir//Rua+Dr+Otavio+Novaes+Junior,+825+-+Jardim+Social+Arapongas,+Castro+-+PR,+84174-270"
    },
    {
        id: 17,
        filled: true,
        title: "Mini-Mercado Guga",
        description: "Oportunidade em Castro-PR, Mini-Mercado à venda",
        image: "propagandas/MiniMercadoGuga.png",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542988866391",
        addressLink: "https://www.google.com/maps/dir//Rua+Antônio+José+Gomes,+1026+-+Vila+Rio+Branco,+Castro+-+PR"
    },
    {
        id: 18,
        filled: true,
        title: "Eli Ferragens",
        description: "Ferro e aço",
        image: "propagandas/EliFerragens.png",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542988261078",
        addressLink: "https://www.google.com/maps/dir//Av.+Rio+de+Janeiro,+1702+-+Castro+-+PR"
    },
    {
        id: 19,
        filled: true,
        title: "Compro Latinha",
        description: "",
        image: "propagandas/Francisval.jpeg",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542999380387",
        addressLink: ""
    },
    {
        id: 20,
        filled: true,
        title: "Compro Sucata De Eletrônicos",
        description: "Celulares, memórias, processadores, placas ,baterias, eletrônicos e não ferrosos em geral",
        image: "propagandas/CassianoSucataEletronicos.png",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542999711787",
        addressLink: "https://www.google.com/maps/dir//R.+Dr.+Sizenando+Bourguignon,+581+-+Vila+Santa+Cruz,+Castro+-+PR,+84168-030"
    },
    {
        id: 21,
        filled: true,
        title: "Cama, mesa, banho e proodutos importados",
        description: "Aceitamos encomendas",
        image: "propagandas/Freski.png",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542998234477",
        addressLink: "https://www.google.com/maps/dir//Rua+Carlos+Edson+Martins+de+Oliveira+52,+Castro+-+PR"
    },
    {
        id: 22,
        filled: true,
        title: "W. R. Martelinho de Ouro",
        description: "",
        image: "propagandas/WRMartelinhoDeOuro.png",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542999144466",
        addressLink: "https://www.google.com/maps/dir//Av.+Rio+de+Janeiro,+1436,+Castro+-+PR"
    },
    { id: 23, filled: false, contactNumber: "5542984023985" },
    { id: 24, filled: false, contactNumber: "5542984023985" },
    { id: 25, filled: false, contactNumber: "5542984023985" },
    { id: 26, filled: false, contactNumber: "5542984023985" },
    { id: 27, filled: false, contactNumber: "5542984023985" },
    { id: 28, filled: false, contactNumber: "5542984023985" },
    { id: 29, filled: false, contactNumber: "5542984023985" },
    { id: 30, filled: false, contactNumber: "5542984023985" }
];

// --- Variáveis Globais ---
let currentModalIndex = -1;
let filledAdsForModal = []; // Array dos anúncios preenchidos atualmente exibidos

// --- Funções ---

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
    if (!adsContainer) { console.error("Element ID 'ads-container' not found."); return; }
    adsContainer.innerHTML = '';

    const filledAds = ads.filter(ad => ad.filled && ad.id != null);
    const emptyAds = ads.filter(ad => !ad.filled);
    const shuffledFilledAds = shuffleArray(filledAds);

    // Armazena a lista atual de anúncios exibidos para usar no incremento em massa
    filledAdsForModal = [...shuffledFilledAds];
    const combinedAds = [...shuffledFilledAds, ...emptyAds];

    combinedAds.forEach(ad => {
        const adCard = document.createElement('div');
        if (ad.id) adCard.dataset.id = ad.id;

        if (ad.filled) {
            adCard.className = 'ad-card filled';
            adCard.innerHTML = `
                <div class="ad-card-image" role="button" aria-label="Ver detalhes do anúncio ${ad.title}">
                    <img src="${ad.image}" alt="${ad.title || 'Anúncio'}" loading="lazy" style="object-fit: ${ad.imageFit || 'contain'};">
                </div>
                <div class="ad-card-content">
                    <h3 class="ad-card-title">${ad.title || 'Anúncio'}</h3>
                    <div class="ad-card-view-stats" data-ad-id="${ad.id}">
                        <span class="total-views-container">
                            <i class="fas fa-eye"></i> Total: <span class="count ad-card-views-total">...</span>
                        </span>
                    </div>
                    <div class="ad-card-contact">
                        ${ad.contactNumber ? `<a href="https://wa.me/${ad.contactNumber}?text=Olá,%20vi%20seu%20anúncio%20no%20Divulga%20Castro..." target="_blank" class="btn btn-primary"><i class="fab fa-whatsapp"></i> Contato</a>` : ''}
                        ${ad.addressLink ? `<a href="${ad.addressLink}" target="_blank" class="btn btn-address"><i class="fas fa-map-marker-alt"></i> Rotas</a>` : ''}
                    </div>
                </div>
            `;
            const imageContainer = adCard.querySelector('.ad-card-image');
            if (imageContainer) {
                imageContainer.addEventListener('click', () => {
                    const indexInFilled = filledAdsForModal.findIndex(filledAd => filledAd.id === ad.id);
                    if (indexInFilled > -1) openModal(indexInFilled); // Abre o modal, mas não incrementa aqui
                    else console.warn(`Ad ID ${ad.id} clicked but not found in filledAdsForModal.`);
                });
            }
        } else {
            adCard.className = 'ad-card empty';
            const contactNum = ad.contactNumber || "554284023985";
            adCard.innerHTML = `
                <i class="fas fa-ad"></i>
                <h3>Espaço Disponível</h3>
                <p>${ad.title ? `Espaço reservado para ${ad.title}` : 'Anuncie aqui!'}</p>
                <a href="https://wa.me/${contactNum}?text=Olá,%20gostaria%20de%20saber%20como%20anunciar..." target="_blank" class="btn btn-secondary"><i class="fab fa-whatsapp"></i> Reservar</a>
            `;
        }
        adsContainer.appendChild(adCard);
    });

    // *** REMOVED call to fetchAndDisplayAllAdViews() from here. It's now called in initPage AFTER increments. ***
}

// --- ADDED: Function to increment views for ALL currently displayed filled ads ---
async function incrementAllDisplayedAdViews() {
    if (!filledAdsForModal.length) return; // Nenhum anúncio preenchido para incrementar

    console.log(`Requesting view increment for ${filledAdsForModal.length} displayed ads...`);

    // Cria um array de promessas de fetch (POST)
    const incrementPromises = filledAdsForModal.map(ad => {
        if (!ad.id) return Promise.resolve(); // Pula anúncios sem ID

        return fetch(`${API_BASE_URL}/api/views/ad/${ad.id}`, { method: 'POST' })
            .then(response => {
                if (!response.ok) {
                    // Logar erro mas não parar as outras requisições
                    console.error(`Error incrementing ad ${ad.id} view (page load): ${response.status}`);
                }
                // Não precisamos do corpo da resposta aqui
            })
            .catch(error => {
                // Logar erro de rede mas não parar as outras
                console.error(`Network error incrementing ad ${ad.id} view (page load):`, error);
            });
    });

    // Espera todas as requisições de incremento terminarem (com sucesso ou falha)
    try {
        await Promise.allSettled(incrementPromises);
        console.log("Finished requesting increments for all displayed ads.");
    } catch(e) {
        // Isso não deve acontecer com Promise.allSettled, mas por segurança
        console.error("Unexpected error during Promise.allSettled for ad increments:", e);
    }
}
// --- END ADDED ---


// Fetch and Display Views for ALL Ads on Cards
async function fetchAndDisplayAllAdViews() {
    const filledCardStats = document.querySelectorAll('.ad-card.filled .ad-card-view-stats');
    if (!filledCardStats.length) return;
    console.log(`Fetching display counts for ${filledCardStats.length} ad cards...`);

    const fetchPromises = Array.from(filledCardStats).map(statsContainer => {
        const adId = statsContainer.dataset.adId;
        if (!adId) return Promise.resolve(null); // Skip if no ad-id

        return fetch(`${API_BASE_URL}/api/views/ad/${adId}`)
             // Chain .then() to handle JSON parsing and potential errors
            .then(response => {
                if (!response.ok) {
                    // Throw an error object to be caught by .catch()
                    return Promise.reject({ ad_id: adId, status: response.status });
                }
                return response.json(); // Parse JSON if response is OK
            })
            .then(data => ({ ad_id: adId, ...data })) // Combine adId with fetched data
            .catch(error => {
                // Handle both network errors and the rejected promise from !response.ok
                const status = error.status || 'Network Error'; // Get status if available
                console.error(`Error fetching views for ad ${adId} (card display): ${status}`, error);
                return { ad_id: adId, error: true }; // Mark as error
            });
    });

    const results = await Promise.allSettled(fetchPromises);

    results.forEach(result => {
        if (result.status === 'fulfilled' && result.value && !result.value.error) {
            const data = result.value;
            const adId = data.ad_id;
            const statsContainer = document.querySelector(`.ad-card-view-stats[data-ad-id="${adId}"]`);
            if (statsContainer) {
                const totalViewsEl = statsContainer.querySelector('.ad-card-views-total');
                if (totalViewsEl) {
                    totalViewsEl.textContent = (typeof data.total_views_adjusted === 'number')
                        ? data.total_views_adjusted.toLocaleString('pt-BR') : '0';
                }
            }
        } else if (result.status === 'fulfilled' && result.value && result.value.error) {
            // Handle cases marked as error during fetch/parse
            const adId = result.value.ad_id;
            const statsContainer = document.querySelector(`.ad-card-view-stats[data-ad-id="${adId}"]`);
            if (statsContainer) {
                const totalViewsEl = statsContainer.querySelector('.ad-card-views-total');
                if (totalViewsEl) totalViewsEl.textContent = 'Erro';
            }
        } else if (result.status === 'rejected') {
            // Handle promises rejected for other reasons (should be less common now)
            console.error("A promise for fetching ad views was rejected:", result.reason);
             // Optionally try to find which ad failed if possible, otherwise log general error
             // You might need more complex error tracking if you need to update the specific card to 'Erro' here
        }
    });
    console.log("Finished updating ad card view counts for display.");
}

// Hamburger Menu Logic
function setupHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('main-nav');
    const icon = hamburgerBtn.querySelector('i');
    if (!hamburgerBtn || !navMenu || !icon) { console.error("Hamburger elements not found."); return; }
    hamburgerBtn.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
        hamburgerBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });
}

// Modal Logic (Increment POST Removed)
function setupModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContainer = document.getElementById('modal-container');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('modal-close-btn');
    const prevBtn = document.getElementById('modal-prev-btn');
    const nextBtn = document.getElementById('modal-next-btn');
    if (!modalOverlay || !modalContainer || !modalContent || !closeBtn || !prevBtn || !nextBtn) { console.error("Modal elements not found."); return; }

    window.openModal = async (index) => {
        if (index < 0 || index >= filledAdsForModal.length) return;
        if (!API_BASE_URL || API_BASE_URL === 'YOUR_RAILWAY_API_URL') {
            console.error("API_BASE_URL not set.");
            modalContent.innerHTML = `<p style="padding:30px; text-align:center; color:red;">Erro: API não configurada.</p>`;
            modalOverlay.classList.add('active'); modalContainer.classList.add('active'); document.body.classList.add('modal-open');
            prevBtn.style.display = 'none'; nextBtn.style.display = 'none';
            return;
        }

        currentModalIndex = index;
        const ad = filledAdsForModal[currentModalIndex];
        const adId = ad.id;
        if (!adId) { console.error("Ad without ID in modal:", ad); return; }

        // *** Increment POST removed from here ***

        // Fetch Ad View Data for Modal
        let adViewData = { total_views_adjusted: '...' };
        try {
            const response = await fetch(`${API_BASE_URL}/api/views/ad/${adId}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            adViewData.total_views_adjusted = (typeof data.total_views_adjusted === 'number')
                ? data.total_views_adjusted.toLocaleString('pt-BR') : '0';
        } catch (error) {
            console.error(`Error fetching views for ad ${adId} (modal):`, error);
            adViewData.total_views_adjusted = 'Erro';
        }

        // Build Modal Content
        modalContent.innerHTML = `
            <div class="ad-card-image modal-image">
                 <img src="${ad.image}" alt="${ad.title || 'Anúncio'}">
            </div>
            <div class="ad-card-content modal-details">
                <h3 class="ad-card-title">${ad.title || 'Anúncio'}</h3>
                <div class="ad-modal-views">
                    <span><i class="fas fa-eye"></i> Visualizações Totais: <span class="count">${adViewData.total_views_adjusted}</span></span>
                </div>
                <p class="ad-card-description">${ad.description ? ad.description.replace(/\n/g, '<br>') : ''}</p>
                <div class="ad-card-contact">
                    ${ad.contactNumber ? `<a href="https://wa.me/${ad.contactNumber}?text=Olá,%20vi%20seu%20anúncio..." target="_blank" class="btn btn-primary"><i class="fab fa-whatsapp"></i> Contato</a>` : ''}
                    ${ad.addressLink ? `<a href="${ad.addressLink}" target="_blank" class="btn btn-address"><i class="fas fa-map-marker-alt"></i> Endereço</a>` : ''}
                </div>
            </div>
        `;

        // Set Custom CSS Properties for image
        const imgContainerElement = modalContent.querySelector('.modal-image');
        const imgElement = modalContent.querySelector('.modal-image img');
         if (imgContainerElement) { imgContainerElement.style.setProperty('--mobile-modal-image-container-height', ad.mobileModalImageContainerHeight || '40vh'); }
         if (imgElement) {
             imgElement.style.setProperty('--modal-img-object-fit', ad.imageFit || 'contain');
             imgElement.style.setProperty('--mobile-modal-max-width', ad.mobileModalMaxWidth || '100%');
         }

        // Show Modal & Set Nav Buttons
        prevBtn.style.display = ''; nextBtn.style.display = '';
        prevBtn.disabled = currentModalIndex === 0;
        nextBtn.disabled = currentModalIndex === filledAdsForModal.length - 1;
        modalOverlay.classList.add('active'); modalContainer.classList.add('active'); document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        modalContainer.classList.remove('active');
        document.body.classList.remove('modal-open');
        currentModalIndex = -1;
        modalContent.innerHTML = ''; // Clear content on close
    };
    const showPrevAd = () => { if (currentModalIndex > 0) { openModal(currentModalIndex - 1); } };
    const showNextAd = () => { if (currentModalIndex < filledAdsForModal.length - 1) { openModal(currentModalIndex + 1); } };

    // Event listeners
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrevAd);
    nextBtn.addEventListener('click', showNextAd);
    modalContainer.addEventListener('click', (event) => event.stopPropagation());
    document.addEventListener('keydown', (event) => {
        if (modalContainer.classList.contains('active')) {
            if (event.key === 'Escape') { closeModal(); }
            else if (event.key === 'ArrowLeft' && !prevBtn.disabled) { showPrevAd(); }
            else if (event.key === 'ArrowRight' && !nextBtn.disabled) { showNextAd(); }
        }
    });
}

// --- Site View Counter Functions ---
function updateSiteViewDisplay(count) {
    const countElementHeader = document.getElementById('total-site-views-count');
    const displayCount = (typeof count === 'number') ? count.toLocaleString('pt-BR') : 'Erro';
    if (countElementHeader) { countElementHeader.textContent = displayCount; }
}

async function fetchInitialSiteViews() {
     if (!API_BASE_URL || API_BASE_URL === 'YOUR_RAILWAY_API_URL') {
         console.error("API_BASE_URL not set. Cannot fetch site views.");
         updateSiteViewDisplay(null); return;
     }
    try {
        const response = await fetch(`${API_BASE_URL}/api/views/site`);
        if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
        const data = await response.json();
        updateSiteViewDisplay(data.total_hits);
    } catch (error) {
        console.error("Error fetching initial site views:", error);
        updateSiteViewDisplay(null);
    }
}

// Increment site view
async function incrementSiteView() {
    if (!API_BASE_URL || API_BASE_URL === 'YOUR_RAILWAY_API_URL') {
        console.error("API_BASE_URL not set. Cannot increment site view."); return;
    }
    try {
        const response = await fetch(`${API_BASE_URL}/api/views/site`, { method: 'POST' });
        if (!response.ok) {
            console.error(`HTTP error incrementing site view! status: ${response.status}`);
            const errorData = await response.json().catch(() => ({}));
            console.error("Increment error details:", errorData); return;
        }
        console.log("Site view increment requested via API.");
    } catch (error) {
        console.error("Error incrementing site view:", error);
    }
}

// --- Initialize Page (MODIFIED Order) ---
async function initPage() { // Make initPage async
    // 1. Cria os cards (isso também define filledAdsForModal)
    createAdCards();

    // 2. Configura outros elementos
    setupHamburgerMenu();
    setupModal();

    // 3. Verifica se a API está configurada
    if (API_BASE_URL && API_BASE_URL !== 'YOUR_RAILWAY_API_URL') {
        // --- Executar incrementos primeiro (podem rodar em paralelo) ---
        console.log("Initiating page load increments...");
        const siteIncrementPromise = incrementSiteView();
        const adIncrementsPromise = incrementAllDisplayedAdViews();

        // --- Esperar que AMBOS os tipos de incremento terminem ---
        // Isso garante que os fetches seguintes peguem os dados mais recentes
        await Promise.all([siteIncrementPromise, adIncrementsPromise]);
        console.log("Finished all page load increments requests.");

        // --- Agora buscar e exibir os dados atualizados ---
        console.log("Fetching data for display...");
        const siteFetchPromise = fetchInitialSiteViews();
        const adFetchPromise = fetchAndDisplayAllAdViews(); // Busca dados para os cards

        // --- Esperar que AMBOS os fetches terminem ---
        await Promise.all([siteFetchPromise, adFetchPromise]);
        console.log("Finished fetching data for display.");

    } else {
        console.warn("API_BASE_URL not configured. View counting disabled.");
        updateSiteViewDisplay('N/A');
        const adViewPlaceholders = document.querySelectorAll('.ad-card-view-stats .count');
        adViewPlaceholders.forEach(el => el.textContent = 'N/A');
    }
    console.log("Finished page initialization sequence.");
}
// --- END MODIFIED ---

document.addEventListener('DOMContentLoaded', initPage);
// --- END OF FILE script.js ---