import rowStyle from './ProductRow.module.scss';

import Card, {iCard, Banner} from '@/components/modules/Card/Card';

interface Props {
    title: string,
    items: iCard[]
}

export default function ProductRow(props: Props) {
    return (
        <section className={rowStyle.ProductRow}>
            <h2>
                {props.title}
            </h2>

            <div className={rowStyle.RowDisplay}>
                {props.items.map(item => {
                    return (
                        <Card key={item.id} id={item.id} title={item.title} category={item.category} price={item.price} image={item.image} banner={Banner.Off}  />
                    );
                })}
            </div>
        </section>
    )
 }