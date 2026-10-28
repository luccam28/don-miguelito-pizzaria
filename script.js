/* Don Miguelito Pizzaria — cardápio digital | Desenvolvido por REDESIGNER PPM | v1.0.0 */
(() => {
  'use strict';

  /* ---------- Configuração ---------- */
  const WA_NUMERO = '5511964219625';
  const CHAVE_CONSENTIMENTO = 'dm_consent_v1';
  const GA_ID = '[INSERIR ID REAL]'; // Ex.: G-XXXXXXXXXX. Enquanto for este texto, nada de analytics é carregado.
  const MSG_PEDIDO = 'Olá! Vim pelo cardápio digital da Don Miguelito e gostaria de fazer um pedido.';
  const MSG_DUVIDA = 'Olá! Vim pelo cardápio digital da Don Miguelito e tenho uma dúvida.';

  const HORARIOS = (() => {
    const ter_qui = [[11, 0, 15, 0], [17, 0, 23, 30]];
    const sex_sab = [[11, 0, 15, 0], [17, 0, 24, 0]];
    return { 0: [[11, 0, 15, 0], [17, 0, 23, 45]], 2: ter_qui, 3: ter_qui, 4: ter_qui, 5: sex_sab, 6: sex_sab };
  })();

  const $ = (seletor, raiz = document) => raiz.querySelector(seletor);
  const $$ = (seletor, raiz = document) => Array.from(raiz.querySelectorAll(seletor));
  const criar = (tag, classe, texto) => {
    const el = document.createElement(tag);
    if (classe) el.className = classe;
    if (texto != null) el.textContent = texto;
    return el;
  };
  const urlWhatsApp = (texto) => `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent(texto)}`;
  const reduzMovimento = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const temDialog = typeof HTMLDialogElement === 'function';

  /* ---------- Ícone oficial do WhatsApp (Simple Icons, CC0) ---------- */
  document.body.insertAdjacentHTML('afterbegin',
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="i-wa" viewBox="0 0 24 24">' +
    '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>' +
    '</symbol></svg>');

  /* ---------- Consentimento (LGPD) ---------- */
  let analiticoCarregado = false;

  const lerConsentimento = () => {
    try {
      const v = JSON.parse(localStorage.getItem(CHAVE_CONSENTIMENTO));
      return v && typeof v === 'object' ? v : null;
    } catch (e) { return null; }
  };

  const carregarAnalitico = () => {
    if (analiticoCarregado || !/^G-[A-Z0-9]+$/.test(GA_ID)) return;
    analiticoCarregado = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.append(s);
  };

  const aplicarConsentimento = () => {
    const c = lerConsentimento();
    if (c && c.estatisticas) carregarAnalitico();
  };

  const salvarConsentimento = (estatisticas, marketing) => {
    const antes = lerConsentimento();
    try {
      localStorage.setItem(CHAVE_CONSENTIMENTO, JSON.stringify({ v: 1, estatisticas: !!estatisticas, marketing: !!marketing }));
    } catch (e) { /* armazenamento indisponível */ }
    if (analiticoCarregado && antes && antes.estatisticas && !estatisticas) { location.reload(); return; }
    aplicarConsentimento();
    removerBanner();
  };

  const registrar = (evento, dados) => {
    const c = lerConsentimento();
    if (c && c.estatisticas && window.dataLayer) window.dataLayer.push(Object.assign({ event: evento }, dados));
  };

  /* ---------- Diálogos acessíveis ---------- */
  const criarDialog = (id, rotuloId, html) => {
    const d = document.createElement('dialog');
    d.id = id;
    d.setAttribute('aria-labelledby', rotuloId);
    d.innerHTML = '<button class="dlg-fechar" type="button" data-fechar aria-label="Fechar">&times;</button>' + html;
    d.addEventListener('click', (e) => {
      if (e.target === d || e.target.closest('[data-fechar]')) d.close();
    });
    d.addEventListener('close', () => {
      const g = d._gatilho;
      const alvo = g && g.isConnected && g.offsetParent !== null ? g : $('.fab');
      if (alvo) alvo.focus();
    });
    document.body.append(d);
    return d;
  };
  const abrirDialog = (d, gatilho) => { d._gatilho = gatilho; d.showModal(); };

  /* ---------- WhatsApp: botão flutuante e modal ---------- */
  let dialogWA;
  const abrirWhatsApp = (gatilho) => {
    if (!dialogWA) {
      dialogWA = criarDialog('dlg-wa', 'dlg-wa-t',
        '<h2 id="dlg-wa-t">Falar com a Don Miguelito no WhatsApp</h2>' +
        '<p>Ao continuar, a conversa abre no WhatsApp com o número (11) 96421-9625. O WhatsApp pode tratar seus dados conforme a política dele. Nada é enviado até você tocar em uma das opções.</p>' +
        '<div class="dlg-acoes">' +
        `<a class="btn btn--wa" href="${urlWhatsApp(MSG_PEDIDO)}" target="_blank" rel="noopener noreferrer" data-evento="whatsapp_pedido">Fazer um pedido</a>` +
        `<a class="btn btn--ghost" href="${urlWhatsApp(MSG_DUVIDA)}" target="_blank" rel="noopener noreferrer" data-evento="whatsapp_duvida">Tirar uma dúvida</a>` +
        '<button class="btn btn--ghost" type="button" data-fechar>Agora não</button></div>');
      dialogWA.addEventListener('click', (e) => { if (e.target.closest('.dlg-acoes a')) setTimeout(() => dialogWA.close(), 0); });
    }
    abrirDialog(dialogWA, gatilho);
  };

  if (temDialog) {
    const fab = criar('button', 'fab');
    fab.type = 'button';
    fab.setAttribute('aria-label', 'Falar com a Don Miguelito no WhatsApp');
    fab.setAttribute('aria-haspopup', 'dialog');
    fab.dataset.evento = 'whatsapp_flutuante';
    fab.innerHTML = '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor"><use href="#i-wa"></use></svg>';
    fab.addEventListener('click', () => abrirWhatsApp(fab));
    document.body.append(fab);
  }

  /* ---------- Cookies: aviso e preferências ---------- */
  let dialogCookies;
  const abrirPreferencias = (gatilho) => {
    if (!temDialog) return;
    if (!dialogCookies) {
      dialogCookies = criarDialog('dlg-cookies', 'dlg-ck-t',
        '<h2 id="dlg-ck-t">Preferências de cookies</h2>' +
        '<p>Escolha o que pode ser ativado. Você muda isso quando quiser, pelo botão “Preferências de cookies” no rodapé. Mais detalhes na <a href="politica-de-cookies.html">Política de Cookies</a>.</p>' +
        '<div class="pref"><input type="checkbox" id="ck-nec" checked disabled><label for="ck-nec">Necessários</label><span>Guardam sua escolha de privacidade neste navegador. Estão sempre ativos.</span></div>' +
        '<div class="pref"><input type="checkbox" id="ck-est"><label for="ck-est">Estatísticas</label><span>Medem visitas e cliques para melhorar o site. Só funcionam se você permitir.</span></div>' +
        '<div class="pref"><input type="checkbox" id="ck-mkt"><label for="ck-mkt">Marketing</label><span>Ajudam a medir anúncios e a mostrar ofertas. Só funcionam se você permitir.</span></div>' +
        '<div class="dlg-acoes">' +
        '<button class="btn btn--wa" type="button" data-ck="salvar">Salvar preferências</button>' +
        '<button class="btn btn--ghost" type="button" data-ck="rejeitar">Rejeitar não essenciais</button>' +
        '<button class="btn btn--ghost" type="button" data-ck="aceitar">Aceitar todos</button></div>');
      dialogCookies.addEventListener('click', (e) => {
        const b = e.target.closest('[data-ck]');
        if (!b) return;
        const acao = b.dataset.ck;
        if (acao === 'salvar') salvarConsentimento($('#ck-est').checked, $('#ck-mkt').checked);
        else salvarConsentimento(acao === 'aceitar', acao === 'aceitar');
        dialogCookies.close();
      });
    }
    const atual = lerConsentimento() || {};
    $('#ck-est').checked = !!atual.estatisticas;
    $('#ck-mkt').checked = !!atual.marketing;
    abrirDialog(dialogCookies, gatilho);
  };

  const ajustarAlturaBanner = () => {
    const b = $('.banner');
    document.documentElement.style.setProperty('--banner-h', b ? `${b.offsetHeight}px` : '0px');
  };
  function removerBanner() {
    const b = $('.banner');
    if (b) b.remove();
    ajustarAlturaBanner();
  }
  const mostrarBanner = () => {
    const b = criar('section', 'banner');
    b.setAttribute('aria-labelledby', 'banner-t');
    b.innerHTML =
      '<div class="banner__in"><div><h2 id="banner-t">Sua privacidade</h2>' +
      '<p>Este site guarda no seu navegador apenas a sua escolha de privacidade. Ferramentas de estatística ou marketing, se forem usadas, só rodam com a sua permissão. Veja a <a href="politica-de-cookies.html">Política de Cookies</a>.</p></div>' +
      '<div class="banner__acoes">' +
      '<button class="btn btn--ghost" type="button" data-ck="rejeitar">Rejeitar não essenciais</button>' +
      '<button class="btn btn--ghost" type="button" data-ck="aceitar">Aceitar</button>' +
      '<button class="btn btn--ghost" type="button" data-ck="personalizar">Personalizar</button></div></div>';
    b.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-ck]');
      if (!btn) return;
      if (btn.dataset.ck === 'personalizar') abrirPreferencias(btn);
      else salvarConsentimento(btn.dataset.ck === 'aceitar', btn.dataset.ck === 'aceitar');
    });
    document.body.append(b);
    ajustarAlturaBanner();
    if ('ResizeObserver' in window) new ResizeObserver(ajustarAlturaBanner).observe(b);
    else addEventListener('resize', ajustarAlturaBanner);
  };

  aplicarConsentimento();
  if (!lerConsentimento() && temDialog) mostrarBanner();

  /* ---------- Cliques delegados ---------- */
  document.addEventListener('click', (e) => {
    const wa = e.target.closest('a.js-wa');
    if (wa && temDialog && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      abrirWhatsApp(wa);
    }
    const ck = e.target.closest('[data-abrir-cookies]');
    if (ck) abrirPreferencias(ck);
    const ev = e.target.closest('[data-evento]');
    if (ev) registrar(ev.dataset.evento);
  });

  /* ---------- Menu mobile ---------- */
  const botaoMenu = $('.nav-toggle');
  const menu = $('#menu-principal');
  if (botaoMenu && menu) {
    const definir = (aberto, devolverFoco) => {
      menu.classList.toggle('is-open', aberto);
      botaoMenu.setAttribute('aria-expanded', String(aberto));
      botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
      if (!aberto && devolverFoco) botaoMenu.focus();
    };
    botaoMenu.addEventListener('click', () => definir(botaoMenu.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) definir(false); });
    document.addEventListener('click', (e) => {
      if (menu.classList.contains('is-open') && !menu.contains(e.target) && !botaoMenu.contains(e.target)) definir(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) definir(false, true);
    });
    matchMedia('(min-width: 56rem)').addEventListener('change', (e) => { if (e.matches) definir(false); });
  }

  /* ---------- Aberto agora / fechado ---------- */
  const DIAS = { dom: 0, seg: 1, ter: 2, qua: 3, qui: 4, sex: 5, sab: 6, 'sáb': 6 };
  const horaSaoPaulo = () => {
    try {
      const partes = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
      }).formatToParts(new Date());
      const valor = (tipo) => partes.find((p) => p.type === tipo).value;
      const dia = DIAS[valor('weekday').toLowerCase().replace('.', '')];
      return dia === undefined ? null : { dia, min: Number(valor('hour')) * 60 + Number(valor('minute')) };
    } catch (e) { return null; }
  };
  const formatarHora = (min) => {
    if (min >= 1440) return 'meia-noite';
    const h = Math.floor(min / 60), m = min % 60;
    return m ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`;
  };
  const atualizarStatus = () => {
    const alvos = $$('[data-status]');
    const agora = horaSaoPaulo();
    if (!alvos.length || !agora) return;
    let texto, estado = 'neutro';
    const hoje = HORARIOS[agora.dia];
    if (!hoje) {
      texto = 'Segunda: confirme pelo WhatsApp';
    } else {
      const faixas = hoje.map((f) => [f[0] * 60 + f[1], f[2] * 60 + f[3]]);
      const atual = faixas.find(([ini, fim]) => agora.min >= ini && agora.min < fim);
      if (atual) {
        texto = `Aberto agora, até ${formatarHora(atual[1])}`;
        estado = 'aberto';
      } else {
        estado = 'fechado';
        const proxima = faixas.find(([ini]) => ini > agora.min);
        const amanha = HORARIOS[(agora.dia + 1) % 7];
        if (proxima) texto = `Fechado agora, abre às ${formatarHora(proxima[0])}`;
        else if (amanha) texto = `Fechado agora, abre amanhã às ${formatarHora(amanha[0][0] * 60 + amanha[0][1])}`;
        else texto = 'Fechado agora';
      }
    }
    alvos.forEach((el) => {
      if (el.textContent !== texto) el.textContent = texto;
      el.dataset.estado = estado;
    });
  };
  atualizarStatus();
  setInterval(atualizarStatus, 60000);

  /* ---------- Cardápio digital ---------- */
  const lista = $('#cardapio-lista');
  if (lista && Array.isArray(window.CARDAPIO)) {
    const normalizar = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const formatarPreco = (v) => /^[\d.,]+$/.test(v)
      ? 'R$ ' + Number(v.replace(',', '.')).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      : v;

    const montarGrupo = (grupo, categoria) => {
      const bloco = criar('div', 'grupo');
      if (grupo.titulo) bloco.append(criar('h4', 'grupo__tit', grupo.titulo));
      if (grupo.nota) bloco.append(criar('p', 'grupo__nota', grupo.nota));
      
      // O container ul agora possui a classe .itens, que no CSS suporta o grid de 2 colunas.
      const ul = criar('ul', 'itens');
      
      grupo.dados.trim().split('\n').forEach((linha) => {
        const [nome, desc = '', ...precos] = linha.split('|').map((s) => s.trim());
        const li = criar('li', 'item');
        li.dataset.busca = normalizar(`${nome} ${desc} ${grupo.titulo || ''} ${categoria.titulo}`);
        li.append(criar('p', 'item__nome', nome));
        if (desc) li.append(criar('p', 'item__desc', desc));
        const caixa = criar('div', 'item__precos');
        precos.forEach((valor, i) => {
          if (!valor && grupo.colunas.length === 1) return; // Tamanho que não existe para itens de coluna única
          const preco = criar('span', 'preco');
          if (grupo.colunas.length > 1) preco.append(criar('small', null, grupo.colunas[i]));
          preco.append(criar('b', null, valor ? formatarPreco(valor) : '—'));
          caixa.append(preco);
        });
        li.append(caixa);
        ul.append(li);
      });
      bloco.append(ul);
      return bloco;
    };

    const chips = $('#chips ul');
    const fragmento = document.createDocumentFragment();
    window.CARDAPIO.forEach((cat) => {
      const sec = criar('section', 'cat');
      sec.id = cat.id;
      sec.setAttribute('aria-labelledby', `${cat.id}-t`);
      const titulo = criar('h3', 'titulo', cat.titulo);
      titulo.id = `${cat.id}-t`;
      const fio = criar('span', 'fio');
      fio.setAttribute('aria-hidden', 'true');
      sec.append(titulo, fio);
      if (cat.intro) sec.append(criar('p', 'cat__intro', cat.intro));
      cat.grupos.forEach((g) => sec.append(montarGrupo(g, cat)));
      if (cat.grupos.some((g) => g.alcool)) {
        sec.append(criar('p', 'aviso-alcool', 'Bebida alcoólica: venda e consumo proibidos para menores de 18 anos. Beba com moderação.'));
      }
      fragmento.append(sec);

      const li = criar('li');
      li.dataset.cat = cat.id;
      const a = criar('a', null, cat.curto);
      a.href = `#${cat.id}`;
      a.dataset.evento = 'clique_categoria';
      li.append(a);
      chips.append(li);
    });
    lista.append(fragmento);

    const pdf = criar('p', 'nota-pequena');
    pdf.style.marginTop = '2.5rem';
    pdf.style.gridColumn = '1 / -1'; // Garante que o texto do PDF ocupe a largura toda
    const linkPdf = criar('a', null, 'Prefere o cardápio em PDF? Baixe aqui.');
    linkPdf.href = 'don-miguelito-cardapio.pdf';
    linkPdf.setAttribute('download', '');
    linkPdf.dataset.evento = 'download_pdf';
    pdf.append(linkPdf);
    lista.append(pdf);

    // Busca
    const campo = $('#busca');
    const info = $('#busca-info');
    const filtrar = () => {
      const termos = normalizar(campo.value.trim()).split(/\s+/).filter(Boolean);
      let total = 0;
      $$('.cat', lista).forEach((sec) => {
        let nSec = 0;
        $$('.grupo', sec).forEach((gr) => {
          let nGr = 0;
          $$('.item', gr).forEach((li) => {
            const ok = termos.every((t) => li.dataset.busca.includes(t));
            li.hidden = !ok;
            if (ok) nGr++;
          });
          gr.hidden = nGr === 0;
          nSec += nGr;
        });
        sec.hidden = nSec === 0;
        const chip = $(`[data-cat="${sec.id}"]`, chips);
        if (chip) chip.hidden = nSec === 0;
        total += nSec;
      });
      if (!termos.length) info.textContent = '';
      else info.textContent = total
        ? `${total} ${total === 1 ? 'item encontrado' : 'itens encontrados'}.`
        : 'Nenhum item encontrado. Tente outro nome ou ingrediente.';
    };
    campo.addEventListener('input', filtrar);
    campo.addEventListener('change', () => registrar('busca_cardapio'));

    // Categoria ativa no menu de chips
    if ('IntersectionObserver' in window) {
      const links = $$('a', chips);
      const porId = new Map(links.map((a) => [a.hash.slice(1), a]));
      const marcar = (a) => {
        if (!a) return;
        links.forEach((l) => l.removeAttribute('aria-current'));
        a.setAttribute('aria-current', 'true');
        const barra = chips;
        barra.scrollTo({ left: a.offsetLeft - (barra.clientWidth - a.offsetWidth) / 2, behavior: reduzMovimento ? 'auto' : 'smooth' });
      };
      const io = new IntersectionObserver((entradas) => {
        entradas.forEach((en) => { if (en.isIntersecting) marcar(porId.get(en.target.id)); });
      }, { rootMargin: '-35% 0px -60% 0px' });
      $$('.cat', lista).forEach((sec) => io.observe(sec));
    }
  }

  /* ---------- Microconversões de visualização (só com consentimento) ---------- */
  if ('IntersectionObserver' in window) {
    const vistos = new Set();
    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach((en) => {
        if (en.isIntersecting && !vistos.has(en.target.id)) {
          vistos.add(en.target.id);
          registrar(en.target.id === 'cardapio' ? 'ver_cardapio_digital' : 'ver_horarios_endereco');
        }
      });
    }, { threshold: 0.15 });
    ['cardapio', 'info'].forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
  }
})();