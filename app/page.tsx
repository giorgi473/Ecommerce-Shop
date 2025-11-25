import Slider from "@/components/modules/Slider";
import Container from "@/components/modules/Container";
import ShoppingCategoriesRow from "@/components/modules/ShoppingCategoriesRow";
import PopularProductsCard from "@/components/PopularProductsCard";
import HeroCarouselWithSidebarAds from "@/components/modules/HeroCarouselWithSidebarAds";
import TrandingCarusel from "@/components/TrendingCarousel";
import PromoGrid from "@/components/modules/PromoGrid";
import BlogCardGrid from "@/components/modules/BlogCardGrid";

function page() {
  return (
    <div className="space-y-10">
      <section className="bg-gray-200 pt-32 lg:pt-5">
        <Slider />
        <Container>
          <div>
            <ShoppingCategoriesRow />
          </div>
        </Container>
      </section>
      <section>
        <div>
          <PopularProductsCard />
        </div>
      </section>
      <section>
        <div>
          <HeroCarouselWithSidebarAds />
        </div>
      </section>
      <section>
        <div>
          <TrandingCarusel title="Latest Products" />
        </div>
      </section>
      <section>
        <div>
          <TrandingCarusel title="Featured Products" />
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4">
          <PromoGrid />
        </div>
      </section>
      <section>
        <TrandingCarusel title="Groceries" />
      </section>
      <section>
        <TrandingCarusel title="Wellness" />
      </section>
      <section>
        <div className="container mx-auto px-4">
          <PromoGrid />
        </div>
      </section>
      <section>
        <TrandingCarusel title="Wellness" />
      </section>
      <section>
        <BlogCardGrid />
      </section>
    </div>
  );
}

export default page;
