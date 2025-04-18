document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth Scrolling para links internos (opcional, já que CSS scroll-behavior faz isso)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if(targetElement) {
    //             targetElement.scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //              // Fecha o menu mobile se estiver aberto após clicar num link
    //             if (navLinks.classList.contains('active')) {
    //                 navLinks.classList.remove('active');
    //             }
    //         }
    //     });
    // });

    // Contact Form Submission (Placeholder)
 // Previne o envio padrão do formulário

            // Simulação de envio
            // Simula uma resposta após um tempo
            setTimeout(() => {
                // Aqui você integraria com um serviço de envio de email (backend ou serviço como Formspree/Netlify Forms)
   // Limpa o formulário

                // Limpa a mensagem de status após alguns segundos
     // Active Nav Link Highlighting on Scroll
     const sections = document.querySelectorAll('main section[id]');
     const navLi = document.querySelectorAll('header nav ul li a');

     window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
             // Ajuste para ativar um pouco antes de chegar exatamente no topo
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
         // Se estiver no topo, nenhum link fica ativo (ou pode definir um padrão)
         if(pageYOffset < sections[0].offsetTop - 100) {
             navLi.forEach(a => a.classList.remove('active'));
         }
     });

});
