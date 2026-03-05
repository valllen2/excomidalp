// Efeito visual no botão de adicionar
document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', function() {
        const originalContent = this.innerHTML;
        this.innerHTML = "✓";
        this.style.background = "#2bff00";
        
        setTimeout(() => {
            this.innerHTML = originalContent;
            this.style.background = "var(--primary)";
        }, 1500);

        // Feedback tátil simples (animação)
        this.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.3)' },
            { transform: 'scale(1)' }
        ], { duration: 300 });
    });
});

// Scroll suave para o menu
document.querySelector('.btn-primary').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});
a