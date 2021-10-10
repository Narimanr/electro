import rowStyle from './ProductRow.module.scss';

import Card, {iCard, Banner} from '@/element/Card/Card';

interface Props {
    title: string,
    items: iCard[]
}

export default function ProductRow(props: Props) {
    return (
        <section className={rowStyle.productRow}>
            <h2>
                {props.title}
            </h2>

            <div className={rowStyle.rowDisplay}>
                {props.items.map(item => {
                    return (
                        <Card key={item.id} id={item.id} title={item.title} category={item.category} price={item.price} off={item.off} image={item.image} banner={Banner.Off}  />
                    );
                })}
            </div>
        </section>
    )
 }