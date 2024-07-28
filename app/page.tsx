import Article from "@/components/Article";
import HeroSection from "@/components/HeroSection";
import { defineOneEntry } from "oneentry";


export default async function Home() {

  
  const { Pages } = defineOneEntry(process.env.API_URL!,{token:process.env.API_TOKEN, langCode:"en_US"});

  const pages = await Pages.getPages("en_US")
  console.log("Hello")
  console.log(pages)
  return (

   <div>
      <HeroSection pages={pages}/>
      <Article/>
   </div>
  );
}
