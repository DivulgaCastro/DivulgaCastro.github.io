// Array com os anúncios (alguns preenchidos e outros vazios)
const ads = [
    {
        id: 1,
        filled: true,
        title: "Restaurante Sabor da Terra",
        description: "O melhor da culinária caseira em Castro. Venha nos visitar!",
        image: "https://via.placeholder.com/400x200.png?text=Restaurante+Sabor+da+Terra",
        contactNumber: "5542999991111"
    },
    {
        id: 2,
        filled: true,
        title: "Auto Mecânica Silva",
        description: "Serviços de mecânica em geral com o melhor preço da cidade.",
        image: "https://via.placeholder.com/400x200.png?text=Auto+Mecânica+Silva",
        contactNumber: "5542999992222"
    },
    {
        id: 3,
        filled: true,
        title: "Farmácia Popular",
        description: "Medicamentos e produtos de higiene com entrega gratuita.",
        image: "https://via.placeholder.com/400x200.png?text=Farmácia+Popular",
        contactNumber: "5542999993333"
    },
    {
        id: 4,
        filled: true,
        title: "Supermercado Economia",
        description: "Preços baixos todos os dias. Confira nossas ofertas!",
        image: "https://via.placeholder.com/400x200.png?text=Supermercado+Economia",
        contactNumber: "5542999994444"
    },
    {
        id: 5,
        filled: false,
        contactNumber: "5542999999999"
    },
    {
        id: 6,
        filled: false,
        contactNumber: "5542999999999"
    },
    {
        id: 7,
        filled: false,
        contactNumber: "5542999999999"
    },
    {
        id: 8,
        filled: false,
        contactNumber: "5542999999999"
    }
];

// Função para embaralhar array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    // Cria uma cópia do array para não modificar o original
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
    adsContainer.innerHTML = '';
    
    // Separa os anúncios preenchidos dos vazios
    const filledAds = ads.filter(ad => ad.filled);
    const emptyAds = ads.filter(ad => !ad.filled);
    
    // Embaralha os anúncios preenchidos
    const shuffledFilledAds = shuffleArray(filledAds);
    
    // Combina os anúncios embaralhados preenchidos com os vazios
    const combinedAds = [...shuffledFilledAds, ...emptyAds];
    
    // Cria os cartões de anúncios
    combinedAds.forEach(ad => {
        if (ad.filled) {
            // Cria cartão de anúncio preenchido
            const adCard = document.createElement('div');
            adCard.className = 'ad-card filled';
            adCard.dataset.id = ad.id;
            
            adCard.innerHTML = `
                <div class="ad-card-image">
                    <img src="${ad.image}" alt="${ad.title}">
                </div>
                <div class="ad-card-content">
                    <h3 class="ad-card-title">${ad.title}</h3>
                    <p class="ad-card-description">${ad.description}</p>
                    <div class="ad-card-contact">
                        <a href="https://wa.me/${ad.contactNumber}" class="btn btn-primary">
                            <i class="fab fa-whatsapp"></i> Contato
                        </a>
                    </div>
                </div>
            `;
            
            adsContainer.appendChild(adCard);
        } else {
            // Cria cartão de anúncio vazio
            const emptyAdCard = document.createElement('div');
            emptyAdCard.className = 'ad-card empty';
            emptyAdCard.dataset.id = ad.id;
            
            emptyAdCard.innerHTML = `
                <i class="fas fa-ad"></i>
                <h3>Espaço Disponível</h3>
                <p>Anuncie seu negócio aqui e alcance milhares de pessoas!</p>
                <a href="https://wa.me/${ad.contactNumber}" class="btn btn-secondary">
                    <i class="fab fa-whatsapp"></i> Reservar este espaço
                </a>
            `;
            
            adsContainer.appendChild(emptyAdCard);
        }
    });
}

// Função para buscar as visualizações a partir da API
async function fetchViewCount() {
    try {
        const response = await fetch('https://hitscounter.dev/api/hit?url=https%3A%2F%2Fdivulgacastro.github.io%2F&label=Visualiza%C3%A7%C3%B5es&icon=person-fill&color=%23198754&output=json');
        
        if (!response.ok) {
            throw new Error('Erro ao buscar contagem de visualizações');
        }
        
        const data = await response.json();
        
        // Atualiza os contadores na página
        document.getElementById('total-views').textContent = data.hits.toLocaleString('pt-BR');
        
        // Valor diário (como exemplo, usaremos 10% do total)
        // Em uma implementação real você buscaria isso da API
        const dailyViews = Math.round(data.hits * 0.1);
        document.getElementById('daily-views').textContent = dailyViews.toLocaleString('pt-BR');
        
    } catch (error) {
        console.error('Erro ao buscar dados de visualização:', error);
        // Define valores padrão em caso de erro
        document.getElementById('total-views').textContent = '0';
        document.getElementById('daily-views').textContent = '0';
    }
}

// Função para inicializar a página
function initPage() {
    // Cria os cartões de anúncios
    createAdCards();
    
    // Busca e exibe a contagem de visualizações
    fetchViewCount();
}

// Inicializa a página quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initPage);