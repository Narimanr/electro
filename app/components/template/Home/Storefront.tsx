import styles from './Storefront.module.scss';

// Interfaces
import { Slide } from '@/components/element/Carousel/Carousel';
import  { iCard } from '@/element/Card/Card';
import { iSpecialCard} from '@/element/SpecialCard/SpecialCard';

// Layouts
import Navbar from '@/components/layout/Navbar/Navbar';
import Hero from '@/layout/Hero/Hero';
import ProductRow from '@/layout/ProductRow/ProductRow';
import SpecialRow from '@/layout/SpecialRow/SpecialRow';
import ProductGrid from '@/layout/ProductGrid/ProductGrid';
import ProductCarousel from '@/layout/ProductCarousel/ProductCarousel';
import Footer from '@/layout/Footer/Footer';


interface PageProps {
  slides: Slide[],
  items: iCard[],
  specialItems: iSpecialCard[],
  specialItemsAgain: iSpecialCard[]
};

export default function Storefront(props: PageProps) {

    return (
      <main className={styles.StorefrontGrid}>
        
        <Navbar />

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
                <li>
                  <i className='bx bxs-check-shield'></i>
                  <span>تضیمن قیمت</span>
                </li>
                <li>
                  <i className='bx bxs-check-shield'></i>
                  <span>تضیمن کیفیت</span>
                </li>
                <li>
                  <i className='bx bxs-check-shield'></i>
                  <span>تضیمن سلامت</span>
                </li>
                <li>
                  <i className='bx bxs-check-shield'></i>
                  <span>تضیمن ارسال</span>
                </li>
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
      
        <div className={styles.footer}>
          <Footer />
        </div>
      </main>
    );

}