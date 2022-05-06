import React from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/call-to-action-one";
import Footer from "@/components/footer";
import ServiceHomeTwo from "@/components/service-home-two";
import ClientCarouselOne from "@/components/client-carousel-one";
import FunfactOne from "@/components/funfact-one-kaizn";
import TrustedClient from "@/components/trusted-client";
import PortfolioHome from "@/components/portfolio-home";
import FeatureTwo from "@/components/feature-two";
import ServiceTwo from "@/components/service-two";
import AboutTwo from "@/components/about-two";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import SliderOne from "@/components/slider-one";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="KAIZN UV LIGHTING - Home">
          <HeaderOne />
          <SliderOne />
          <ServiceTwo />
          <AboutTwo />
          <ServiceHomeTwo />
          <FeatureTwo />
          <PortfolioHome />
          <FunfactOne />
          <TrustedClient />
          <ClientCarouselOne />
          <CallToActionOne extraClassName="ready"/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
