import Hero from "../../../testit/src/component/Hero.jsx";
import ContentService from "../Functions/ContentService.jsx";

export default function Home () {
    return (
        <div>
            <Hero />
          <ContentService />
        </div>
    )
}