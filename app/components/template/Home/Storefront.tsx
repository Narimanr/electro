import styles from './Storefront.module.scss';

// Layouts and Components
import  { iCard } from '@/element/Card/Card';
import { iSpecialCard} from '@/element/SpecialCard/SpecialCard';

import Hero from '@/layout/Hero/Hero';
import ProductRow from '@/layout/ProductRow/ProductRow';
import SpecialRow from '@/layout/SpecialRow/SpecialRow';
import ProductGrid from '@/layout/ProductGrid/ProductGrid';
import ProductCarousel from '@/layout/ProductCarousel/ProductCarousel';
import { Slide } from '@/components/element/Carousel/Carousel';

interface PageProps {
  slides: Slide[],
  items: iCard[],
  specialItems: iSpecialCard[],
  specialItemsAgain: iSpecialCard[]
};

export default function Storefront(props: PageProps) {

    return (
    <main className={styles.StorefrontGrid}>
        <div className={styles.hero}>
          <Hero items={props.slides} />
        </div>
      
        <div className={styles.sale}>
          <ProductRow title="تخفیفات هیجان انگیز" items={props.items} />
        </div>

        <div className={styles.special}>
          <SpecialRow items={props.specialItems} />
        </div>

        <div className={styles.browse}>
          <ProductGrid title="برترین‌ها" items={props.items} />
        </div>

        <div className={styles.why}>
          <div className={styles.whyBackground}>
            <div className={styles.whyText}>
              <p>بیش از ۱۵۰۰ نفر در ۱۵ سال به ما اعتماد کردند</p>
              <span>دلیل این انتخاب چه بوده؟</span>
              <ul>
                <li>تضیمن قیمت</li>
                <li>تضیمن کیفیت</li>
                <li>تضیمن ارسال</li>
                <li>تضیمن سلامت</li>
              </ul>
            </div>
          </div>
          <div className={styles.whyOverlay}>
          </div>
        </div>

        <div className={styles.recommended}>
          <ProductRow title="پیشنهاد شده برای شما" items={props.items} />
        </div>

        <div className={styles.specialAgain}>
          <SpecialRow items={props.specialItemsAgain} />
        </div>

        <div className={styles.scroll}>
          <ProductCarousel title="بهترین‌های ماه" items={props.items}  />
        </div>
      
      </main>
    );

}