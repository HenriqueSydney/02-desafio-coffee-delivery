import { CoffeeCard } from '../../Components/CoffeeCard'
import { HomeBanner } from '../../Components/HomeBanner'
import { CoffeeList, Container } from './styles'
import { products } from '../../data/coffeeProducts'

export function Home() {
  return (
    <div>
      <HomeBanner />
      <Container>
        <h1>Nossos cafés</h1>

        <CoffeeList>
          {products.map((coffee) => (
            <CoffeeCard key={coffee.name} data={coffee} />
          ))}
        </CoffeeList>
      </Container>
    </div>
  )
}
