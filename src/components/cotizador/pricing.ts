export const PRODUCT_NAMES: Record<string, string> = {
  techos: 'Techo para Estacionamiento',
  pergolas: 'Pérgola',
  portones: 'Portón',
  puertas: 'Puerta de Seguridad',
};

export const BASE_AREA = 7.5;
export const AREA_RATE = 0.08;

export interface CotizadorState {
  step: number;
  product: string | null;
  productName: string;
  basePrice: number;
  ancho: number;
  alto: number;
  cantidad: number;
}

export function createState(): CotizadorState {
  return {
    step: 1,
    product: null,
    productName: '',
    basePrice: 0,
    ancho: 3,
    alto: 2.5,
    cantidad: 1,
  };
}

export function calcAreaSurcharge(basePrice: number, ancho: number, alto: number): number {
  const area = ancho * alto;
  if (area <= BASE_AREA) return 0;
  return Math.round((area - BASE_AREA) * basePrice * AREA_RATE);
}

export function calcTotal(
  state: CotizadorState,
  extrasCost: number,
): number {
  const surcharge = calcAreaSurcharge(state.basePrice, state.ancho, state.alto);
  return Math.round((state.basePrice + surcharge + extrasCost) * state.cantidad);
}

export function buildWhatsAppUrl(
  wa: string,
  state: CotizadorState,
  extras: string[],
  total: number,
): string {
  const lines = [
    `Hola, acabo de usar el cotizador y me interesa:`,
    ``,
    `• Producto: ${state.productName}`,
    `• Medidas: ${state.ancho}m × ${state.alto}m`,
    `• Cantidad: ${state.cantidad}`,
  ];

  if (extras.length) {
    lines.push(`• Extras: ${extras.join(', ')}`);
  }

  lines.push(`• Precio estimado: $${total.toLocaleString()}`);
  lines.push(``);
  lines.push(`¿Podemos coordinar una visita?`);

  return `https://wa.me/${wa}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function needsHeight(product: string | null): boolean {
  return product === 'portones' || product === 'puertas';
}

export function showCerradura(product: string | null): boolean {
  return product === 'portones' || product === 'puertas';
}

export function showAutomatizacion(product: string | null): boolean {
  return product === 'portones';
}
