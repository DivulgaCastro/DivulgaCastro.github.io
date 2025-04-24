// Array com os anúncios (alguns preenchidos e outros vazios)
const ads = [
    {
        id: 1,
        filled: true,
        dataUltimoPagamento_insercao: "23-04-2025",
        diasParaVencer: 30,
        title: "NoBreak",
        description: "Potencialize Seu Carro com as melhores baterias do mercado!!",
        image: "./propagandas/NoBreak.jpeg",
        imageFit: "contain", // Controla object-fit geral
        mobileModalImageContainerHeight: "600px", // Definir altura do CONTAINER da imagem no mobile modal
        mobileModalMaxWidth: "300%",   // Limitar largura da IMAGEM no mobile modal
        contactNumber: "5542984023985",
        addressLink: "https://www.google.com/maps/dir/-24.8102667,-49.9952477/No+break+com%C3%A9rcio+de+baterias,+Tv.+Rio+de+Janeiro,+1713+-+Jd+das+arauc%C3%A1rias+2,+Castro+-+PR,+84174-070/@-24.8101474,-49.9978748,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94c29de0f556b0e3:0x8b97800079570872!2m2!1d-49.9952744!2d-24.8100281?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 2,
        filled: true,
        dataUltimoPagamento_insercao: "23-04-2025",
        diasParaVencer: 30,
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
        dataUltimoPagamento_insercao: "23-04-2025",
        diasParaVencer: 30,
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
        dataUltimoPagamento_insercao: "",
        diasParaVencer: 0,
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
        dataUltimoPagamento_insercao: "23-04-2025",
        diasParaVencer: 45,
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
        dataUltimoPagamento_insercao: "23-04-2025",
        diasParaVencer: 45,
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
        dataUltimoPagamento_insercao: "23-04-2025",
        diasParaVencer: 30,
        title: "Eduardo da Latinha", // Adicionei um título para ficar mais claro
        description: "Compra de latinhas e outros recicláveis.", // Adicionei descrição
        image: "./propagandas/EduardoLatinha.jpeg",
        imageFit: "contain", // Controla object-fit geral
        mobileModalImageContainerHeight: "600px", // Definir altura do CONTAINER da imagem no mobile modal
        mobileModalMaxWidth: "300%",   // Limitar largura da IMAGEM no mobile modal
        contactNumber: "5542984023985", // Havia um número duplicado aqui, mantive um
        addressLink: "https://www.google.com/maps/dir/-24.8102667,-49.9952477/No+break+com%C3%A9rcio+de+baterias,+Tv.+Rio+de+Janeiro,+1713+-+Jd+das+arauc%C3%A1rias+2,+Castro+-+PR,+84174-070/@-24.8101474,-49.9978748,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94c29de0f556b0e3:0x8b97800079570872!2m2!1d-49.9952744!2d-24.8100281?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 8,
        filled: true,
        dataUltimoPagamento_insercao: "23-04-2025",
        diasParaVencer: 30,
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
        dataUltimoPagamento_insercao: "23-04-2025",
        diasParaVencer: 40,
        title: "Driver Elite",
        description: "Baixe o app e economize nas suas corridas",
        image: "propagandas/DriverElite.jpeg",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "", // Número de contato VAZIO para testar
        addressLink: ""
    },
    {
        id: 10,
        filled: true,
        dataUltimoPagamento_insercao: "24-04-2025",
        diasParaVencer: 30,
        title: "Ferro Velho e Reciclagem - Nossa Senhora Aparecida",
        description: "Compra e Venda",
        image: "propagandas/Ferro Velho e Reciclagem - Nossa Senhora Aparecida.png",
        imageFit: "contain",
        mobileModalImageContainerHeight: "50vh",
        mobileModalMaxWidth: "100%",
        contactNumber: "5542998172760",
        addressLink: "https://www.google.com/maps/dir//Av.+Vicente+fiorillo+3a,+castro+PR"
    },
    {
        id: 11,
        filled: true,
        dataUltimoPagamento_insercao: "24-04-2025",
        diasParaVencer: 40,
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
        filled: false,
        contactNumber: "5542984023985"
    },
    {
        id: 13,
        filled: false,
        contactNumber: "5542984023985"
    },
    {
        id: 14,
        filled: false,
        contactNumber: "5542984023985"
    },
    {
        id: 15,
        filled: false,
        contactNumber: "5542984023985"
    },
    {
        id: 16,
        filled: false,
        contactNumber: "5542984023985"
    },
    {
        id: 17,
        filled: false,
        contactNumber: "5542984023985"
    },
    {
        id: 18,
        filled: false,
        contactNumber: "5542984023985"
    }
];

// --- Variáveis Globais ---
let currentModalIndex = -1; // Índice do anúncio atual no modal
let filledAdsForModal = []; // Array apenas com anúncios preenchidos para navegação modal

// --- Funções ---

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
    adsContainer.innerHTML = ''; // Limpa o container

    const filledAds = ads.filter(ad => ad.filled);
    const emptyAds = ads.filter(ad => !ad.filled);
    const shuffledFilledAds = shuffleArray(filledAds);

    filledAdsForModal = [...shuffledFilledAds]; // Guarda os anúncios preenchidos e embaralhados para o modal
    const combinedAds = [...shuffledFilledAds, ...emptyAds];

    combinedAds.forEach(ad => {
        const adCard = document.createElement('div');
        adCard.dataset.id = ad.id; // Adiciona data-id para identificar o card

        if (ad.filled) {
            adCard.className = 'ad-card filled';
            // Inclui o estilo inline object-fit baseado na propriedade imageFit
            adCard.innerHTML = `
                <div class="ad-card-image" role="button" aria-label="Ver detalhes do anúncio ${ad.title}">
                    <img src="${ad.image}" alt="${ad.title}" loading="lazy" style="object-fit: ${ad.imageFit || 'contain'};">
                </div>
                <div class="ad-card-content">
                    <h3 class="ad-card-title">${ad.title}</h3>
                    <div class="ad-card-contact">
                        ${ad.contactNumber ? // <-- MODIFICAÇÃO AQUI: Condicional para o botão de contato
                            `<a href="https://wa.me/${ad.contactNumber}?text=Olá,%20vi%20seu%20anúncio%20no%20Divulga%20Castro%20e%20gostaria%20de%20mais%20informações." target="_blank" class="btn btn-primary">
                                <i class="fab fa-whatsapp"></i> Contato
                            </a>`
                        : '' // Se não houver contactNumber, não renderiza nada
                        }
                        ${ad.addressLink ? // Condicional para o botão de rotas (já existia)
                        `<a href="${ad.addressLink}" target="_blank" class="btn btn-address">
                            <i class="fas fa-map-marker-alt"></i> Rotas
                        </a>` : ''}
                    </div>
                </div>
            `;
             // Adiciona o event listener para abrir o modal ao clicar na IMAGEM
            const imageContainer = adCard.querySelector('.ad-card-image');
            if (imageContainer) {
                imageContainer.addEventListener('click', () => {
                     // Encontra o índice deste anúncio no array 'filledAdsForModal'
                    const indexInFilled = filledAdsForModal.findIndex(filledAd => filledAd.id === ad.id);
                    if (indexInFilled > -1) {
                        openModal(indexInFilled);
                    }
                });
            }

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


// --- Lógica do Menu Hamburger ---
function setupHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('main-nav');
    const icon = hamburgerBtn.querySelector('i');

    if (hamburgerBtn && navMenu && icon) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            hamburgerBtn.setAttribute('aria-expanded', isOpen);
            if (isOpen) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                hamburgerBtn.setAttribute('aria-label', 'Fechar menu');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                hamburgerBtn.setAttribute('aria-label', 'Abrir menu');
            }
        });
    } else {
        console.error("Hamburger button or navigation menu not found.");
    }
}

// --- Lógica do Modal ---
function setupModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContainer = document.getElementById('modal-container');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('modal-close-btn');
    const prevBtn = document.getElementById('modal-prev-btn');
    const nextBtn = document.getElementById('modal-next-btn');

    if (!modalOverlay || !modalContainer || !modalContent || !closeBtn || !prevBtn || !nextBtn) {
        console.error("Modal elements not found.");
        return;
    }

    // Função para abrir o modal
    window.openModal = (index) => { // Expor globalmente para ser chamada pelo event listener do card
        if (index < 0 || index >= filledAdsForModal.length) return;

        currentModalIndex = index;
        const ad = filledAdsForModal[currentModalIndex];

        // Monta o conteúdo do modal (similar ao card, mas dentro do modal)
        modalContent.innerHTML = `
            <div class="ad-card-image modal-image">
                 <img src="${ad.image}" alt="${ad.title}">
            </div>
            <div class="ad-card-content modal-details">
                <h3 class="ad-card-title">${ad.title}</h3>
                <p class="ad-card-description">${ad.description.replace(/\n/g, '<br>')}</p> <!-- Replace newline with <br> for modal -->
                <div class="ad-card-contact">
                    ${ad.contactNumber ? // <-- MODIFICAÇÃO AQUI: Condicional para o botão de contato no MODAL
                        `<a href="https://wa.me/${ad.contactNumber}?text=Olá,%20vi%20seu%20anúncio%20no%20Divulga%20Castro%20e%20gostaria%20de%20mais%20informações." target="_blank" class="btn btn-primary">
                            <i class="fab fa-whatsapp"></i> Contato
                        </a>`
                    : '' // Se não houver contactNumber, não renderiza nada
                    }
                    ${ad.addressLink ?
                    `<a href="${ad.addressLink}" target="_blank" class="btn btn-address">
                        <i class="fas fa-map-marker-alt"></i> Endereço
                    </a>` : ''}
                </div>
            </div>
        `;

        // --- START: Set Custom Properties ---
        const imgContainerElement = modalContent.querySelector('.modal-image');
        const imgElement = modalContent.querySelector('.modal-image img');

        if (imgContainerElement) {
             // Set NEW custom property for mobile modal CONTAINER height
            imgContainerElement.style.setProperty('--mobile-modal-image-container-height', ad.mobileModalImageContainerHeight || '40vh'); // Default fallback
        }

        if (imgElement) {
            // Set object-fit for the image
            imgElement.style.setProperty('--modal-img-object-fit', ad.imageFit || 'contain');

            // Set custom property for mobile modal IMAGE max-width
            imgElement.style.setProperty('--mobile-modal-max-width', ad.mobileModalMaxWidth || '150%'); // Default fallback
        }
        // --- END: Set Custom Properties ---

        // Atualiza visibilidade dos botões de navegação
        prevBtn.disabled = currentModalIndex === 0;
        nextBtn.disabled = currentModalIndex === filledAdsForModal.length - 1;

        // Exibe o modal
        modalOverlay.classList.add('active');
        modalContainer.classList.add('active');
        document.body.classList.add('modal-open'); // Impede scroll do fundo
    };

    // Função para fechar o modal
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        modalContainer.classList.remove('active');
        document.body.classList.remove('modal-open');
        currentModalIndex = -1; // Reseta o índice
    };

    // Função para mostrar anúncio anterior
    const showPrevAd = () => {
        if (currentModalIndex > 0) {
            openModal(currentModalIndex - 1);
        }
    };

    // Função para mostrar próximo anúncio
    const showNextAd = () => {
        if (currentModalIndex < filledAdsForModal.length - 1) {
            openModal(currentModalIndex + 1);
        }
    };

    // Event listeners do modal
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal); // Fechar ao clicar fora
    prevBtn.addEventListener('click', showPrevAd);
    nextBtn.addEventListener('click', showNextAd);

     // Previne que clique dentro do modal feche o modal
    modalContainer.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Navegação pelo teclado
    document.addEventListener('keydown', (event) => {
        if (modalContainer.classList.contains('active')) { // Só funciona se modal estiver ativo
            if (event.key === 'Escape') {
                closeModal();
            } else if (event.key === 'ArrowLeft') {
                showPrevAd();
            } else if (event.key === 'ArrowRight') {
                showNextAd();
            }
        }
    });
}


// Função para inicializar a página
function initPage() {
    createAdCards(); // Cria os cards primeiro
    setupHamburgerMenu(); // Inicializa o menu hamburger
    setupModal(); // Inicializa a lógica do modal
    console.log("Contador de visualização carregado via imagem de badge no HTML.");
    // Os listeners para abrir o modal são adicionados dentro de createAdCards agora
}

document.addEventListener('DOMContentLoaded', initPage);