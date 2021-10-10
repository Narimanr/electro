import Image from 'next/image';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.footerGrid}>
                <div className={styles.logo}>
                    <Image src="/images/electro-logo.png" alt="electro Logo" width={200} height={150} objectFit="contain" />
                </div>
                <div className={styles.links}>
                    <ul>
                        <li>خانه</li>
                        <li>ارتباط با ما</li>
                        <li>درباره ما</li>
                    </ul>
                </div>
                <div className={styles.description}>
                    <p>ارايه دهنده بروزترین محصولات مدرن دنیای دیجیتال از سال ۱۴۰۰.  هر آنچه که می‌خواهید با شما فقط یک کلیک فاصله دارد. به همراه خدمات پشتیبانی ۲۴ ساعنه در سول روز. انتخاب هوشمند، انتحاب همیشگی.</p>
                        <div className={styles.socials}>
                            <i className='bx bxl-google bx-md'></i>
                            <i className='bx bxl-telegram bx-md'></i>
                            <i className='bx bxl-youtube bx-md'></i>
                            <i className='bx bxl-instagram bx-md'></i>
                        </div>
                        <div className={styles.payments}>
                            <i className='bx bxl-visa bx-md'></i>
                            <i className='bx bxl-mastercard bx-md'></i>
                            <i className='bx bxl-paypal bx-md'></i>
                        </div>
                </div>
            </div>
        </footer>
        <div className={styles.copyright}>
                <p>تمامی حقوق مادی و معنوی این وبسایت برای الکترو می‌باشد - ۱۴۰۰</p>
            </div>
        </>
    );
}