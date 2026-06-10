import {
  createState,
  calcAreaSurcharge,
  calcTotal,
  buildWhatsAppUrl,
  needsHeight,
  showCerradura,
  showAutomatizacion,
  PRODUCT_NAMES,
  type CotizadorState,
} from './pricing';

const $ = <T extends HTMLElement>(s: string) => document.querySelector<T>(s)!;
const $$ = <T extends HTMLElement>(s: string) => document.querySelectorAll<T>(s);

export function initCotizador(wa: string) {
  const state = createState();

  const progressBar = $('#cotProgress');
  const nextBtn = $<HTMLButtonElement>('#cotNext');
  const navWrap = $('#cotNav');

  function goToStep(n: number) {
    state.step = n;

    $$('.cot-step').forEach(s => {
      s.classList.toggle('active', parseInt(s.dataset.step!) === n);
    });

    progressBar.style.width = `${(n / 4) * 100}%`;
    nextBtn.disabled = n === 1 && !state.product;
    navWrap.style.display = n === 4 ? 'none' : '';

    if (n === 2) syncDimensions(state);
    if (n === 3) syncExtras(state);
    if (n === 4) syncSummary(state, wa);
  }

  bindProducts(state, nextBtn);
  bindSliders(state);
  bindCounter(state);
  bindNavigation(goToStep, nextBtn, state);

  goToStep(1);
}

function bindProducts(state: CotizadorState, nextBtn: HTMLButtonElement) {
  $$<HTMLButtonElement>('.cot-product').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.cot-product').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.product = btn.dataset.product!;
      state.productName = PRODUCT_NAMES[state.product];
      state.basePrice = parseInt(btn.dataset.base!);
      nextBtn.disabled = false;
    });
  });
}

function bindSliders(state: CotizadorState) {
  (['cotAncho', 'cotAlto'] as const).forEach(id => {
    const el = $<HTMLInputElement>(`#${id}`);
    el.addEventListener('input', () => {
      $(`#${id}Val`).textContent = parseFloat(el.value).toFixed(1);
      state.ancho = parseFloat($<HTMLInputElement>('#cotAncho').value);
      state.alto = parseFloat($<HTMLInputElement>('#cotAlto').value);
      updateArea(state);
    });
  });
}

function bindCounter(state: CotizadorState) {
  $$<HTMLButtonElement>('.counter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.action === 'inc' && state.cantidad < 10) state.cantidad++;
      if (btn.dataset.action === 'dec' && state.cantidad > 1) state.cantidad--;
      $('#cotCantVal').textContent = String(state.cantidad);
    });
  });
}

function bindNavigation(
  goToStep: (n: number) => void,
  nextBtn: HTMLButtonElement,
  state: CotizadorState,
) {
  nextBtn.addEventListener('click', () => {
    if (state.step < 4) goToStep(state.step + 1);
  });

  $$<HTMLButtonElement>('.cot-back').forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(parseInt(btn.dataset.goto!));
    });
  });
}

function updateArea(state: CotizadorState) {
  const area = (state.ancho * state.alto).toFixed(1);
  $('#cotArea').textContent = `${area} m²`;
}

function syncDimensions(state: CotizadorState) {
  const altoField = $<HTMLInputElement>('#cotAlto').closest<HTMLElement>('.dim-field')!;
  const showAlto = needsHeight(state.product);
  altoField.style.display = showAlto ? '' : 'none';

  if (!showAlto) {
    altoField.querySelector('label')!.textContent = 'Largo';
  }

  updateArea(state);
}

function syncExtras(state: CotizadorState) {
  $<HTMLElement>('#extraCerradura').style.display = showCerradura(state.product) ? '' : 'none';
  $<HTMLElement>('#extraAutomatizacion').style.display = showAutomatizacion(state.product) ? '' : 'none';
}

function getCheckedExtras(): { cost: number; names: string[] } {
  let cost = 0;
  const names: string[] = [];

  $$<HTMLInputElement>('input[name="extra"]:checked').forEach(cb => {
    const parent = cb.closest<HTMLElement>('.extra-option')!;
    if (parent.style.display === 'none') return;
    cost += parseInt(cb.dataset.cost!) || 0;
    names.push(parent.querySelector<HTMLElement>('.extra-name')!.textContent!);
  });

  return { cost, names };
}

function syncSummary(state: CotizadorState, wa: string) {
  $('#sumProduct').textContent = state.productName;
  $('#sumDims').textContent = `${state.ancho}m × ${state.alto}m`;
  $('#sumQty').textContent = String(state.cantidad);

  const breakdown = $('#sumBreakdown');
  breakdown.innerHTML = '';

  const addLine = (label: string, amount: number) => {
    const row = document.createElement('div');
    row.className = 'breakdown-row';
    row.innerHTML = `<span>${label}</span><span>${amount ? '$' + amount.toLocaleString() : ''}</span>`;
    breakdown.appendChild(row);
  };

  addLine(`${state.productName} (base)`, state.basePrice);

  const surcharge = calcAreaSurcharge(state.basePrice, state.ancho, state.alto);
  if (surcharge > 0) {
    const area = (state.ancho * state.alto).toFixed(1);
    addLine(`Ajuste por medida (${area} m²)`, surcharge);
  }

  const { cost: extrasCost, names: extrasNames } = getCheckedExtras();

  $$<HTMLInputElement>('input[name="extra"]:checked').forEach(cb => {
    const parent = cb.closest<HTMLElement>('.extra-option')!;
    if (parent.style.display === 'none') return;
    const c = parseInt(cb.dataset.cost!) || 0;
    if (c > 0) {
      addLine(parent.querySelector<HTMLElement>('.extra-name')!.textContent!, c);
    }
  });

  if (state.cantidad > 1) {
    addLine(`× ${state.cantidad} unidades`, 0);
  }

  const total = calcTotal(state, extrasCost);
  $('#sumTotal').textContent = total.toLocaleString();
  $<HTMLAnchorElement>('#cotWhatsapp').href = buildWhatsAppUrl(wa, state, extrasNames, total);
}
