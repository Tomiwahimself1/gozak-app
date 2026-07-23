import React from "react";
import { ShoppingBasket, Package, Sparkles, ShoppingBag, HeartPulse, Percent, ArrowRight } from "lucide-react";
import { BRAND } from "../lib/brand";
import { Reveal } from "../components/Reveal";
import { Btn } from "../components/Btn";
import { PageHero, SectionHead, ProductCard, CategoryTile } from "../components/Shared";

export default function SupermarketPage() {
  const cats = [
    { Icon: ShoppingBasket, label: "Groceries", count: "500+ items" },
    { Icon: Package, label: "Beverages", count: "180+ items" },
    { Icon: Sparkles, label: "Cleaning Supplies", count: "220+ items" },
    { Icon: Package, label: "Frozen Foods", count: "90+ items" },
    { Icon: ShoppingBag, label: "Snacks", count: "260+ items" },
    { Icon: HeartPulse, label: "Beauty Products", count: "150+ items" },
  ];

  const products = [
    { name: "Basmati Rice 5kg", cat: "Groceries", price: "₦8,500", rating: 5, Icon: ShoppingBasket, tag: "Popular" },
    { name: "Assorted Fruit Juice Pack", cat: "Beverages", price: "₦4,200", rating: 4, Icon: Package },
    { name: "All-Purpose Cleaner", cat: "Cleaning Supplies", price: "₦2,100", rating: 4, Icon: Sparkles, tag: "New" },
    { name: "Frozen Chicken 1kg", cat: "Frozen Foods", price: "₦3,800", oldPrice: "₦4,300", rating: 5, Icon: Package },
  ];

  return (
    <>
      <PageHero eyebrow="Supermarket" title="Your weekly shopping, sorted." desc="Fresh groceries, household essentials and everyday goods — all at fair prices." Icon={ShoppingBasket} />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="rounded-3xl p-9 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: `linear-gradient(120deg, ${BRAND.gold}, ${BRAND.goldLight})` }}>
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-white/40 mb-3" style={{ color: BRAND.dark }}>
                  <Percent size={13} /> This Week
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: BRAND.dark, fontFamily: "Manrope, sans-serif" }}>Buy 2 get 1 free on selected beverages</h3>
              </div>
              <Btn variant="dark" icon={ArrowRight}>View Deals</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Browse" title="Supermarket categories" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {cats.map((c, i) => <CategoryTile key={i} {...c} delay={i * 60} />)}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "rgba(244,161,0,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Featured" title="Best-selling groceries" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((p, i) => <ProductCard key={i} {...p} delay={i * 80} />)}
          </div>
        </div>
      </section>
    </>
  );
}
