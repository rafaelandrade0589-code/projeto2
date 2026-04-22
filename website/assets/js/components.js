/* ===================================================
   WORKNET EVENTOS — Shared HTML Components
   =================================================== */

const WHATSAPP_LINK = 'https://wa.me/5511967792549';
const EMAIL = 'eventos@workneteventos.com.br';
const PHONE = '(11) 96779-2549';
const INSTAGRAM = 'https://www.instagram.com/worknet_eventos/';

const SERVICES = [
  { href: 'feiras.html', name: 'Feiras e Exposições',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>` },
  { href: 'credenciamento.html', name: 'Credenciamento',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M15 8h2M15 12h2M7 16h10"/></svg>` },
  { href: 'sistema-inscricao.html', name: 'Sistema de Inscrição',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="12" y2="17"/></svg>` },
  { href: 'venda-online.html', name: 'Venda Online',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>` },
  { href: 'manual-expositor.html', name: 'Manual do Expositor',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>` },
  { href: 'caex.html', name: 'CAEX',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>` },
  { href: 'biometria-facial.html', name: 'Biometria Facial',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4"/><path d="M15 3h4a2 2 0 0 1 2 2v4"/><path d="M9 21H5a2 2 0 0 1-2-2v-4"/><path d="M15 21h4a2 2 0 0 0 2-2v-4"/><circle cx="12" cy="12" r="3"/></svg>` },
  { href: 'controle-acesso.html', name: 'Controle de Acesso',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>` },
  { href: 'controle-salas.html', name: 'Controle de Salas',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>` },
  { href: 'coletor-leads.html', name: 'Coletor de Leads',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>` },
  { href: 'certificado.html', name: 'Certificado Digital',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>` },
  { href: 'aplicativos-eventos.html', name: 'Aplicativos para Eventos',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>` },
  { href: 'totem-autoatendimento.html', name: 'Totem de Autoatendimento',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>` },
  { href: 'locacao-equipamentos.html', name: 'Locação de Equipamentos',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>` },
  { href: 'catracas-eventos.html', name: 'Catracas para Eventos',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>` },
  { href: 'detector-metal.html', name: 'Detector de Metal',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>` },
];

function renderNavbar(activePage = '') {
  const megaItems = SERVICES.map(s => `
    <li><a href="${s.href}">
      <span class="menu-icon">${s.icon}</span>
      ${s.name}
    </a></li>
  `).join('');

  const base = document.body.dataset.base || '';
  const isFeiras = document.body.classList.contains('feiras-page');
  const logoSrc = `${base}assets/logo.png`;

  document.getElementById('navbar-placeholder').innerHTML = `
  <div class="topbar">
    <div class="container">
      <div class="topbar-left">
        <a href="mailto:${EMAIL}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
          ${EMAIL}
        </a>
      </div>
      <div class="topbar-right">
        <a href="${WHATSAPP_LINK}" target="_blank" rel="noopener">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.84L.057 23.452a.5.5 0 0 0 .599.578l5.782-1.456A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.685-.51-5.22-1.396l-.374-.22-3.877.977.997-3.778-.243-.388A9.948 9.948 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
          ${PHONE}
        </a>
        <a href="${INSTAGRAM}" target="_blank" rel="noopener">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          @worknet_eventos
        </a>
      </div>
    </div>
  </div>
  <nav class="navbar">
    <div class="container">
      <a class="navbar-logo" href="index.html">
        <img src="${logoSrc}" alt="Worknet Eventos" />
      </a>
      <button class="navbar-toggle" id="navToggle" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="navbar-nav" id="navList">
        <li><a href="index.html">Home</a></li>
        <li><a href="quem-somos.html">Quem Somos</a></li>
        <li>
          <a href="#">Serviços <span class="arrow"></span></a>
          <div class="mega-menu">
            <ul class="mega-menu-grid">${megaItems}</ul>
          </div>
        </li>
        <li><a href="portifolio.html">Portfólio</a></li>
        <li><a href="depoimentos.html">Depoimentos</a></li>
        <li><a href="contato.html">Contato</a></li>
        <li><a href="${WHATSAPP_LINK}" class="btn-nav-cta" style="background:#25D366!important;color:#fff!important" target="_blank" rel="noopener">Orçamento em até 02 horas</a></li>
      </ul>
    </div>
  </nav>`;
}

function renderFooter() {
  const serviceLinks = SERVICES.map(s =>
    `<li><a href="${s.href}">${s.name}</a></li>`
  ).join('');

  const isFeiras = document.body.classList.contains('feiras-page');
  const footerLogoSrc = 'assets/logo.png';

  document.getElementById('footer-placeholder').innerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <img src="${footerLogoSrc}" alt="Worknet Eventos" class="footer-logo" />
          <p class="footer-desc">Há mais de 20 anos conectando pessoas a eventos inesquecíveis com tecnologia, eficiência e inovação. Atendemos todo o Brasil.</p>
          <div class="footer-social">
            <a href="${INSTAGRAM}" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="${WHATSAPP_LINK}" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.84L.057 23.452a.5.5 0 0 0 .599.578l5.782-1.456A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.685-.51-5.22-1.396l-.374-.22-3.877.977.997-3.778-.243-.388A9.948 9.948 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Serviços</h4>
          <ul>${SERVICES.slice(0, 7).map(s => `<li><a href="${s.href}">${s.name}</a></li>`).join('')}</ul>
        </div>
        <div class="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="quem-somos.html">Quem Somos</a></li>
            <li><a href="portifolio.html">Portfólio</a></li>
            <li><a href="depoimentos.html">Depoimentos</a></li>
            <li><a href="contato.html">Contato</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contato para Orçamento</h4>
          <div class="footer-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="min-width:16px;color:var(--blue-light)"><path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <a href="mailto:${EMAIL}">${EMAIL}</a>
          </div>
          <div class="footer-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="min-width:16px;color:var(--blue-light)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.84L.057 23.452a.5.5 0 0 0 .599.578l5.782-1.456A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.685-.51-5.22-1.396l-.374-.22-3.877.977.997-3.778-.243-.388A9.948 9.948 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            <a href="${WHATSAPP_LINK}" target="_blank" rel="noopener">${PHONE}</a>
          </div>
          <div class="footer-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="min-width:16px;color:var(--blue-light)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>Atendemos todo o Brasil</span>
          </div>
          <div style="margin-top:16px">
            <a href="${WHATSAPP_LINK}" class="btn btn-primary btn-sm" target="_blank" rel="noopener">Fale via WhatsApp</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} Worknet Sistemas e Locações LTDA — CNPJ 17.964.274/0001-01. Todos os direitos reservados.</p>
        <p style="color:var(--blue-light)">+ de 20 anos credenciando o Brasil 🇧🇷</p>
      </div>
    </div>
  </footer>
  <a href="${WHATSAPP_LINK}" class="whatsapp-float" target="_blank" rel="noopener" aria-label="WhatsApp">
    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.84L.057 23.452a.5.5 0 0 0 .599.578l5.782-1.456A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.685-.51-5.22-1.396l-.374-.22-3.877.977.997-3.778-.243-.388A9.948 9.948 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
  </a>`;
}

// Auto-render on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const base = document.body.dataset.base || '';
  if (document.getElementById('navbar-placeholder')) renderNavbar();
  if (document.getElementById('footer-placeholder')) renderFooter();
});
