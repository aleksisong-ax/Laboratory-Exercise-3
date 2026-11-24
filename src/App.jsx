import { useState } from 'react';
import { ArrowDownRight, ShoppingBag, Sparkles } from 'lucide-react';
import cvsuLogo from './assets/cvsu-logo.png';
import ProductCard from './components/ProductCard.jsx';
import products from './data/products.js';
import './App.css';

function App() {
  // The parent owns cart state and shares its add-to-cart callback with each card.
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');

  function handleAddToCart(title) {
    setCartCount((count) => count + 1);
    setLastAdded(title);
  }

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CvSU Mini Store home">
          <img className="brand__logo" src={cvsuLogo} alt="Cavite State University emblem" />
          <span>CvSU <b>MINI STORE</b></span>
        </a>
        <a className="header-link" href="#catalog">Explore the catalog <ArrowDownRight size={16} /></a>
      </header>
      <section className="hero" id="top">
        <div className="hero__copy">
          <div className="eyebrow"><Sparkles size={14} /> THE CAMPUS ESSENTIALS EDIT</div>
          <h1>Good finds.<br /><em>Good days.</em></h1>
          <p>Thoughtful little essentials for studying, making, and everything in between.</p>
          <a className="hero__cta" href="#catalog">Shop the collection <span>↓</span></a>
        </div>
        <div className="hero__art" aria-label="Illustration of a curated assortment of school and desk essentials" role="img">
          <div className="sun-orb" /><div className="hero-sticker">MADE FOR<br />YOUR NEXT<br /><strong>BIG IDEA</strong></div>
          <div className="hero-product hero-product--book"><span>IDEAS<br />IN<br />MOTION</span></div>
          <div className="hero-product hero-product--bottle"><i /></div><div className="hero-product hero-product--headphones"><i /></div>
          <div className="hero-product hero-product--pencil"><i /></div><div className="hero-spark hero-spark--one">✳</div><div className="hero-spark hero-spark--two">✦</div>
        </div>
      </section>
      <section className="catalog" id="catalog">
        <div className="section-heading">
          <div><span className="eyebrow">A LITTLE SOMETHING FOR EVERY DAY</span><h2>Find your next favorite.</h2></div>
          <div className="cart-note" aria-live="polite"><span className="cart-note__icon"><ShoppingBag size={17} /></span>
            {cartCount === 0 ? <span>Your cart is empty.</span> : <span>Items added to cart: <strong>{cartCount}</strong><small>Last added: {lastAdded}</small></span>}
          </div>
        </div>
        <div className="results-line"><span>THE FULL COLLECTION · {products.length} FINDS</span><span>CURATED FOR CAMPUS LIFE</span></div>
        <div className="product-grid">
          {/* Render each product with a unique key and optional badge content. */}
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCart={handleAddToCart}>
              {product.id === 1 && <span className="badge badge--new">New</span>}
              {product.id === 5 && <span className="badge badge--favorite">Student fave</span>}
              {product.id === 8 && <span className="badge badge--sale">Popular</span>}
            </ProductCard>
          ))}
        </div>
      </section>
      <footer className="site-footer"><span>CVSU MINI STORE</span><span>Little things for big days. <b>♡</b></span><span>MADE FOR THE MAKERS</span></footer>
    </main>
  );
}

export default App;
