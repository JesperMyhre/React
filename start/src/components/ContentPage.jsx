import Title from './Title'
import { products } from '../assets/legodudes'
import ProductCard from './ProductCard'



export default function ContentPage({ amount, setAmount, category }) {
    return (
        <main id="main">
            <Title category={category}/>
            {products.map(product => 
            <ProductCard 
            key={product.prodid} 
            category={product.category} 
            img={product.imagefile} 
            title={product.title} 
            price={product.price} 
            amount={amount} 
            setAmount={setAmount}
            />)}
        </main>
    )
}