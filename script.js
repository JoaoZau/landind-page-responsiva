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
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.querySelector('.form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Previne o envio padrão do formulário

            // Simulação de envio
            formStatus.textContent = 'Enviando mensagem...';
            formStatus.style.color = 'orange';

            // Simula uma resposta após um tempo
            setTimeout(() => {
                // Aqui você integraria com um serviço de envio de email (backend ou serviço como Formspree/Netlify Forms)
                console.log('Form submitted (simulated)');
                formStatus.textContent = 'Mensagem enviada com sucesso!';
                formStatus.style.color = 'green';
                contactForm.reset(); // Limpa o formulário

                // Limpa a mensagem de status após alguns segundos
                setTimeout(() => {
                    formStatus.textContent = '';
                }, 5000);

            }, 1500); // Simula 1.5 segundos de espera
        });
    }

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
