import Feature from "../components/Feature";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Obtine credit" />
      <Layout>
        <Hero />
        <Feature />
        <Services />
      </Layout>
    </>
  );
}
