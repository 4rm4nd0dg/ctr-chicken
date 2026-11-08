import { CartItem, OrderCustomerInfo } from '../types/menu';

/**
 * Formats a number into West African CFA franc representation
 * Example: 5500 -> "5 500 FCFA"
 */
export function formatPrice(amount: number): string {
  const formatted = new Intl.NumberFormat('fr-FR', {
    useGrouping: true,
  }).format(amount);
  return `${formatted} FCFA`;
}

/**
 * Builds the WhatsApp order text message with clean formatting,
 * detailed breakdown, customer info, delivery address, and total.
 */
export function buildWhatsAppOrder(
  items: CartItem[],
  customer?: Partial<OrderCustomerInfo>
): string {
  if (items.length === 0) {
    return 'Bonjour Chitir Chicken, je souhaite passer une commande.';
  }

  const lines: string[] = [];
  lines.push('*COMMANDE CHITIR CHICKEN (CTR)*');
  lines.push('Chicken Taste Revolution - Ouagadougou');
  lines.push('--------------------------------');

  let totalAmount = 0;

  items.forEach((item, index) => {
    const lineTotal = item.price * item.quantity;
    totalAmount += lineTotal;

    const spicyTag = item.spicy ? ' [Pimenté]' : '';
    const optionTag = item.selectedOption ? ` (${item.selectedOption})` : '';

    lines.push(
      `${index + 1}. *${item.quantity}x* ${item.name}${optionTag}${spicyTag}`
    );
    lines.push(
      `   ${formatPrice(item.price)} x ${item.quantity} = *${formatPrice(lineTotal)}*`
    );
  });

  lines.push('--------------------------------');
  lines.push(`*TOTAL COMMANDE : ${formatPrice(totalAmount)}*`);
  lines.push('--------------------------------');

  if (customer?.name) {
    lines.push(`*Nom du client :* ${customer.name}`);
  }

  if (customer?.phone) {
    lines.push(`*Téléphone :* ${customer.phone}`);
  }

  const deliveryTypeLabel =
    customer?.deliveryType === 'sur-place'
      ? 'À emporter / Sur place'
      : 'Livraison à domicile / bureau';
  lines.push(`*Mode :* ${deliveryTypeLabel}`);

  if (customer?.deliveryType !== 'sur-place' && customer?.address) {
    lines.push(`*Adresse de livraison :* ${customer.address}`);
  } else if (customer?.deliveryType !== 'sur-place') {
    lines.push('*Adresse de livraison :* (à préciser svp)');
  }

  if (customer?.restaurantLocation) {
    lines.push(`*Point de vente souhaité :* ${customer.restaurantLocation}`);
  }

  if (customer?.notes) {
    lines.push(`*Instructions particulières :* ${customer.notes}`);
  }

  lines.push('');
  lines.push('Merci de confirmer ma commande et le délai de préparation !');

  return lines.join('\n');
}

/**
 * Builds the complete WhatsApp wa.me URL
 */
export function buildWhatsAppLink(
  items: CartItem[],
  customer?: Partial<OrderCustomerInfo>,
  whatsappPhone: string = '22656759191'
): string {
  const message = buildWhatsAppOrder(items, customer);
  const encoded = encodeURIComponent(message);
  // Remove non-numeric characters from phone
  const cleanPhone = whatsappPhone.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}
