import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'aos/dist/aos.css'
import AOS from 'aos'
import './style.css'

// Inicializa AOS
AOS.init({
    duration: 800,
    once: true
})

// Theme Switcher
const themeToggle = document.querySelector('.theme-toggle')
const html = document.documentElement

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-bs-theme')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    html.setAttribute('data-bs-theme', newTheme)
    localStorage.setItem('theme', newTheme)
})

// Recupera tema salvo
const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
    html.setAttribute('data-bs-theme', savedTheme)
}

// Handlers para os botões
document.querySelector('.download-btn').addEventListener('click', async () => {
    try {
        // Aqui você conectará com seu PHP para validar e fornecer o download
        console.log('Iniciando download do e-book...')
        // Simula download
        await new Promise(resolve => setTimeout(resolve, 1500))
        alert('Download iniciado!')
    } catch (error) {
        console.error('Erro ao baixar:', error)
    }
})

document.querySelector('.watch-btn').addEventListener('click', () => {
    // Aqui você conectará com seu PHP para validar e redirecionar para o vídeo
    console.log('Redirecionando para vídeo aula...')
    // Simula redirecionamento
    alert('Redirecionando para a área de vídeo...')
})

document.querySelector('[data-type="bonus"]').addEventListener('click', () => {
    // Aqui você conectará com seu PHP para validar e liberar o bônus
    console.log('Acessando área de bônus...')
    // Simula acesso
    alert('Acessando área de bônus...')
})