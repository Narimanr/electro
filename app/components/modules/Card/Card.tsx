import Image from 'next/image'
import cardStyle from './Card.module.scss';

export interface iCard {
    id: string, 
    category: string,
    title: string,
    price: string,
    image: string,
    banner?: string
};

export const enum Banner  {
    Off = 'off',
    Special = 'special',
    Popular = 'popular'
};



export default function Card(product: iCard) {
  var bannerElement;
      switch (product.banner) {
        case Banner.Off:
          bannerElement = (
            <div className={cardStyle.bannerOff}>
              <span>تخفیف خورده</span>
            </div>
          );
           break;
        case Banner.Special:
          bannerElement = (
            <div className={cardStyle.bannerSpecial}>
              <span>ویژه</span>
            </div>
          );
          break;
        case Banner.Popular:
          bannerElement = (
            <div className={cardStyle.bannerPopular}>
              <span>محبوب</span>
            </div>
          );
          break;
        default:
          bannerElement = null;
    };
    return (
       <div className={cardStyle.card}>
          <div className={cardStyle.cardHeader}>
          {bannerElement}
          </div>
          <div className={cardStyle.cardBody}>
            <div className={cardStyle.imageBox}>
                  <Image src={product.image} alt="product image" layout="fill" objectFit="contain"/>
            </div>
            <span className={cardStyle.category}>
              {product.category}
            </span>
            <span className={cardStyle.title}>
              {product.title}
            </span>
          </div>
          <div className={cardStyle.cardFooter}>
            <button className={cardStyle.cartButton}></button>
            <div className={cardStyle.price}>
                <span className={cardStyle.number}>
                    {product.price}    
                </span>
              <span className={cardStyle.currency}>تومان</span>
            </div>
        </div>
              
              
            </div>
    );
}