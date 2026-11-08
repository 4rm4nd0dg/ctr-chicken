export interface ItemOption {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  number?: number;
  name: string;
  description: string;
  composition: string;
  price: number;
  spicy: boolean;
  popular?: boolean;
  servings?: string;
  hasOptions?: boolean;
  options?: ItemOption[];
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  filter: 'all' | 'spicy' | 'burgers' | 'poulet' | 'sharing' | 'desserts-boissons';
  description: string;
}

export interface RestaurantLocation {
  id: string;
  name: string;
  badge: string;
  address: string;
  notice?: string;
  city: string;
  hours: string;
  phones: string[];
  whatsapp: string;
  mapsUrl: string;
  isFlagship?: boolean;
}

export interface RestaurantInfo {
  name: string;
  brand: string;
  slogan: string;
  tagline: string;
  country: string;
  city: string;
  schedule: string;
  is24_7: boolean;
  phonePrimary: string;
  phoneSecondary: string;
  whatsappNumber: string;
  social: {
    facebook: string;
    instagram: string;
    tiktok: string;
    handle: string;
  };
  locations: RestaurantLocation[];
}

export interface MenuData {
  restaurant: RestaurantInfo;
  categories: MenuCategory[];
  items: MenuItem[];
}

export interface CartItem {
  id: string; // unique cart line id: `${item.id}-${selectedOption?.name || 'base'}`
  itemId: string;
  name: string;
  price: number;
  quantity: number;
  spicy: boolean;
  selectedOption?: string;
  image?: string;
}

export interface OrderCustomerInfo {
  name: string;
  phone: string;
  deliveryType: 'livraison' | 'sur-place';
  address?: string;
  restaurantLocation?: string;
  notes?: string;
}

