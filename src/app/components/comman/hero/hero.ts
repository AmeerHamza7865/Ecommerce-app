// import { Component, input } from '@angular/core';
import { Component, Input } from '@angular/core';
export interface HeroButton {
  text: string;
  link: string;
  variant: 'primary' | 'secondary' | 'outline';
}

export interface HeroPromo {
  text: string;
  badge?: string;
}

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})


export class Hero {
  @Input() title: string = 'Summer Collection 2024';
  @Input() subtitle: string = 'Discover the latest trends in fashion with our exclusive collection';
  @Input() description: string = 'Up to 50% off on selected items. Limited time offer. Free shipping on orders over $50.';
  @Input() imageUrl: string = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80';
  @Input() buttons: HeroButton[] = [
    { text: 'Shop Now', link: '/shop', variant: 'primary' },
    { text: 'Learn More', link: '/about', variant: 'secondary' }
  ];
  @Input() promo: HeroPromo = { 
    text: 'Free Shipping', 
    badge: 'NEW' 
  };
  @Input() showPromo: boolean = true;
  @Input() overlayOpacity: number = 40;
  @Input() textAlign: 'left' | 'center' | 'right' = 'left';
  @Input() height: string = '600px';


  getButtonClasses(variant: 'primary' | 'secondary' | 'outline'): string {
  const baseClasses = 'px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 focus:ring-pink-500',
    secondary: 'bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-400',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:ring-white'
  };

  return `${baseClasses} ${variants[variant]}`;
}
}
