// Botão voltar ao topo
document.addEventListener('DOMContentLoaded', function() {
    const btnTopo = document.getElementById('btnTopo');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btnTopo.style.display = 'block';
        } else {
            btnTopo.style.display = 'none';
        }
    });
    
    btnTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

//EMERGÊNCIAS MÉDICAS
const EmerMedTabList = document.querySelectorAll('#emergencyTabs button')
EmerMedTabList.forEach(triggerEl => {
    const EmerMedTabList = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
        event.preventDefault()
        EmerMedTabList.show()
    })
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileEmerMedButtons = document.querySelectorAll('[id^="mobile-"]');
    const desktopEmerMedButtons = document.querySelectorAll('#emergencyTabs .nav-link');
    
    mobileEmerMedButtons.forEach(mobileBtn => {
        mobileBtn.addEventListener('click', function() {
            // Remover active de todos os botões mobile
            mobileEmerMedButtons.forEach(btn => btn.classList.remove('active'));
            // Adicionar active ao clicado
            this.classList.add('active');
            
            // Sincronizar com desktop
            const targetId = this.getAttribute('data-bs-target');
            const desktopEmerMedTab = document.querySelector(`#emergencyTabs .nav-link[data-bs-target="${targetId}"]`);
            if (desktopTab) {
                const tab = new bootstrap.Tab(desktopTab);
                tab.show();
            }
        });
    });
    
    // Sincronizar desktop -> mobile
    desktopEmerMedButtons.forEach(desktopBtn => {
        desktopBtn.addEventListener('shown.bs.tab', function(event) {
            const targetId = event.target.getAttribute('data-bs-target');
            const mobileBtn = document.querySelector(`[id^="mobile-"][data-bs-target="${targetId}"]`);
            if (mobileBtn) {
                mobileEmerMedButtons.forEach(btn => btn.classList.remove('active'));
                mobileBtn.classList.add('active');
            }
        });
    });
});


//REANIMAÇÃO
const ReaTabList = document.querySelectorAll('#ReanimationTabs button')
ReaTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
    })
});

document.addEventListener('DOMContentLoaded', function() {
const mobileReaButtons = document.querySelectorAll('[id^="mobile-"]');
const desktopReaButtons = document.querySelectorAll('#ReanimationTabs .nav-link');

    mobileReaButtons.forEach(mobileBtn => {
        mobileBtn.addEventListener('click', function() {
            // Remover active de todos os botões mobile
            mobileReaButtons.forEach(btn => btn.classList.remove('active'));
            // Adicionar active ao clicado
            this.classList.add('active');
            
            // Sincronizar com desktop
            const targetId = this.getAttribute('data-bs-target');
            const desktopTab = document.querySelector(`#ReanimationTabs .nav-link[data-bs-target="${targetId}"]`);
            if (desktopTab) {
                const tab = new bootstrap.Tab(desktopTab);
                tab.show();
            }
        });
    });
    
    // Sincronizar desktop -> mobile
    desktopReaButtons.forEach(desktopBtn => {
        desktopBtn.addEventListener('shown.bs.tab', function(event) {
            const targetId = event.target.getAttribute('data-bs-target');
            const mobileBtn = document.querySelector(`[id^="mobile-"][data-bs-target="${targetId}"]`);
            if (mobileBtn) {
                mobileReaButtons.forEach(btn => btn.classList.remove('active'));
                mobileBtn.classList.add('active');
            }
        });
    });
});