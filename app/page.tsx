import Slider from "@/components/modules/Slider";
import Container from "@/components/modules/Container";
import ShoppingCategoriesRow from "@/components/modules/ShoppingCategoriesRow";
import PopularProductsCard from "@/components/PopularProductsCard";
import TrandingCarusel from "@/components/TrendingCarousel";

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
          <TrandingCarusel />
        </div>
      </section>
    </div>
  );
}

export default page;
