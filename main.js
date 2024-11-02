import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import './style.css'

// Inicializa as animações AOS
AOS.init({
  duration: 800,
  once: true
})

// Theme Switcher com ícone dinâmico
const themeToggle = document.querySelector('.theme-toggle')
const themeIcon = themeToggle.querySelector('i')
const html = document.documentElement

function updateThemeIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill'
}

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-bs-theme')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  html.setAttribute('data-bs-theme', newTheme)
  localStorage.setItem('theme', newTheme)
  updateThemeIcon(newTheme)
})

// Recupera e aplica tema salvo
const savedTheme = localStorage.getItem('theme') || 'dark'
html.setAttribute('data-bs-theme', savedTheme)
updateThemeIcon(savedTheme)

// Resto do código permanece igual...
const leadForm = document.getElementById('leadForm')
leadForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const formData = new FormData(leadForm)
  const data = Object.fromEntries(formData)
  
  // Aqui você conectará com seu PHP posteriormente
  console.log('Dados do formulário:', data)
  
  // Simula sucesso e redireciona
  window.location.href = '/download.html'
})

// Função para carregar casos de sucesso
function loadCasos() {
  const container = document.getElementById('casos-container')
  // Aqui você conectará com seu PHP para buscar os casos
  const casos = [
    { titulo: 'Caso 1', descricao: 'Descrição do caso 1' },
    { titulo: 'Caso 2', descricao: 'Descrição do caso 2' },
    { titulo: 'Caso 3', descricao: 'Descrição do caso 3' }
  ]
  
  casos.forEach(caso => {
    const element = document.createElement('div')
    element.className = 'col-md-4 mb-4'
    element.innerHTML = `
      <div class="card h-100" data-aos="fade-up">
        <div class="card-body">
          <h3>${caso.titulo}</h3>
          <p>${caso.descricao}</p>
        </div>
      </div>
    `
    container.appendChild(element)
  })
}

// Função para carregar preços
function loadPrecos() {
  const container = document.getElementById('precos-container')
  // Aqui você conectará com seu PHP para buscar os preços
  const precos = [
    { plano: 'Básico', preco: 'R$ 99', recursos: ['Recurso 1', 'Recurso 2'] },
    { plano: 'Pro', preco: 'R$ 199', recursos: ['Recurso 1', 'Recurso 2', 'Recurso 3'] },
    { plano: 'Enterprise', preco: 'R$ 299', recursos: ['Todos os recursos'] }
  ]
  
  precos.forEach(plano => {
    const element = document.createElement('div')
    element.className = 'col-md-4'
    element.innerHTML = `
      <div class="card h-100" data-aos="fade-up">
        <div class="card-body">
          <h3>${plano.plano}</h3>
          <h4 class="my-3">${plano.preco}</h4>
          <ul class="list-unstyled">
            ${plano.recursos.map(recurso => `<li>${recurso}</li>`).join('')}
          </ul>
        </div>
      </div>
    `
    container.appendChild(element)
  })
}

// Função para carregar FAQ
function loadFAQ() {
  const container = document.getElementById('faqAccordion')
  // Aqui você conectará com seu PHP para buscar as FAQs
  const faqs = [
    { pergunta: 'Pergunta 1', resposta: 'Resposta 1' },
    { pergunta: 'Pergunta 2', resposta: 'Resposta 2' },
    { pergunta: 'Pergunta 3', resposta: 'Resposta 3' }
  ]
  
  faqs.forEach((faq, index) => {
    const element = document.createElement('div')
    element.className = 'accordion-item'
    element.innerHTML = `
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq${index}">
          ${faq.pergunta}
        </button>
      </h2>
      <div id="faq${index}" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          ${faq.resposta}
        </div>
      </div>
    `
    container.appendChild(element)
  })
}

// Carrega os dados dinâmicos
document.addEventListener('DOMContentLoaded', () => {
  loadCasos()
  loadPrecos()
  loadFAQ()
})