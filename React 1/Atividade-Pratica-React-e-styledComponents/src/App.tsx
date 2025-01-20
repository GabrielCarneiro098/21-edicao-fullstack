import BannerSection from "./components/BannerSection";
import SectionLogo from "./components/SectionLogo";
import ArticleComponent from "./components/ArticleComponent";
import FooterSection from "./components/FooterSection";
import background from "./images/red-and-blue-pillars-wallpaper-abstract-background-free-image.jpeg";
import image1 from "./images/MainAfter.webp";
import image2 from "./images/cat-one.webp";
import image3 from "./images/cat-2.jpg";

function App() {
  return (
    <>
      <BannerSection
        text="Minha primeira página com React"
        image={background}
        height="35vh"
      />
      <SectionLogo />
      <ArticleComponent
        reverse={true}
        image={image1}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti velit sequi voluptatibus. Eaque voluptate itaque consequuntur fuga quisquam, quae ea amet quo accusantium, harum temporibus, magni quasi minus tenetur unde!"
      />
      <ArticleComponent
        reverse={false}
        image={image2}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti velit sequi voluptatibus. Eaque voluptate itaque consequuntur fuga quisquam, quae ea amet quo accusantium, harum temporibus, magni quasi minus tenetur unde!"
      />
      <ArticleComponent
        reverse={true}
        image={image3}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti velit sequi voluptatibus. Eaque voluptate itaque consequuntur fuga quisquam, quae ea amet quo accusantium, harum temporibus, magni quasi minus tenetur unde!"
      />
      <BannerSection text="Contato" image={background} height="20vh" />
      <FooterSection />
    </>
  );
}

export default App;
