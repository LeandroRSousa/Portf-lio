AOS.init();

const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.querySelector('.theme-label');

// Aplicar a preferência do tema ao carregar a página
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        themeToggle.checked = true; // Marcar o switch como ativado
        themeLabel.textContent = 'Modo Escuro'; // Atualiza o texto para "Modo Escuro"
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        themeToggle.checked = false; // Marcar o switch como desativado
        themeLabel.textContent = 'Modo Claro'; // Atualiza o texto para "Modo Claro"
    }
});

// Event listener para o toggle do tema
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeLabel.textContent = 'Modo Escuro'; // Muda o texto para "Modo Escuro"
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeLabel.textContent = 'Modo Claro'; // Muda o texto para "Modo Claro"
    }

    // Salvar a preferência do usuário
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});




const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Gestão de Risco',
                'Resposta a Incidentes',
                'Monitoramento',
                'Análise de Vulnerabilidades',
                'Segurança da Informação'
            ],
            datasets: [{
                label: 'Nível de Habilidade',
                data: [65, 75, 80, 75, 75], // Exemplo de dados
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Cor de fundo
                borderColor: 'rgba(255, 99, 132, 1)', // Cor da borda
                borderWidth: 2,
                pointBackgroundColor: '#ffffff', // Cor dos pontos
                pointBorderColor: 'rgba(255, 99, 132, 1)' // Cor da borda dos pontos
            }]
        },
        options: {
            scales: {
                r: {
                    ticks: {
                   		display: false,
                        color: '#ffffff' // Cor dos ticks
                    },
                    grid: {
                        color: '#444444' // Cor da grade
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.1 // Tensão da linha
                }
            }
        }
    });

