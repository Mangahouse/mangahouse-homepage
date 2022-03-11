import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            {/* Realizing Manga 3.0 */}
            MANGA  HOUSE build MANGA 3.0
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Manga 3.0 is a vision of what manga culture should be, leveraging blockchain technology.
            Our goal is to provide a culture of transparency that allows people involved in comics to own their data and rights equally.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Marketplace</Button>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">MangaHouse Value</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Decentralized Manga Marketplace</p>
              <p className="mt-4">
                In the same way that we guarantee revenue sharing in all P2P transactions, we guarantee revenue sharing to artists in perpetuity.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Manga NFT</p>
              <p className="mt-4">
                Manga NFT brings a unique value to each one and allows for secondary sales like paper manga.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Brand New Publishing Destination</p>
              <p className="mt-4">
                A new publishing destinaion  for manga artists which is also a new revenue point for Manga artists.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">One-stop Manga Experience on a platform</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Artists can use the marketplace to publish their work as Manga NFT, and
            Users can subscribe, collect, and resell Manga NFTs.Through Manga House, users can buy, read, and sell manga in one stop.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Examples of activities to strengthen content
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            ・Discovering Artists<br/>
            ・Crowdfunding for artists will be implemented<br/>
            Dear Managa Artist Please contact us anytime!!
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Blockchain information
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            ・Blockchain : Aster Network<br/>
            ・NFT standard : ERC...<br/>
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        {/* <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div> */}
        <p>TOKEN COMING SOON</p>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Roadmap</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          <div className="flex-1 px-3">
            <div
              className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
              style={{
                boxShadow: '0 10px 28px rgba(0,0,0,.08)'
              }}
            >
              <p className="text-xl font-semibold">Phase 1</p>
              <p className="mt-6 text-sm">
                ■Announcement<br/>
                ■Concept Deck Release<br/>
                ■Web Site Launch<br/>
                ■Marketing<br/>
                ■Mangaka Scouting<br/>
              </p>
            </div>
          </div>
          <div className="flex-1 px-3">
            <div
              className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
              style={{
                boxShadow: '0 10px 28px rgba(0,0,0,.08)'
              }}
            >
              <p className="text-xl font-semibold">Phase 2</p>
              <p className="mt-6 text-sm">
                ■Token launch<br/>
                ■CEX/DEX Launch<br/>
              </p>
            </div>
          </div>
          <div className="flex-1 px-3">
            <div
              className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
              style={{
                boxShadow: '0 10px 28px rgba(0,0,0,.08)'
              }}
            >
              <p className="text-xl font-semibold">Phase 3</p>
              <p className="mt-6 text-sm">
                ■Marketplace launch<br/>
                ■Web leader launch<br/>
                ■Mangaka Debut<br/>
                ■NFT Manga Release<br/>
                ■Participation in Comic-Con<br/>
                ■Partnerships<br/>
                ■Donations<br/>
              </p>
            </div>
          </div>
          <div className="flex-1 px-3">
            <div
              className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
              style={{
                boxShadow: '0 10px 28px rgba(0,0,0,.08)'
              }}
            >
              <p className="text-xl font-semibold">Phase 4</p>
              <p className="mt-6 text-sm">
                ■Collab with other decentralized projects<br/>
                ■Collab with famous Manga-lover influencers from Japan<br/>
                ■Manga events in Metaverse<br/>
                ■Wallet app launch?<br/>
                ■Library launch?<br/>
                ■Reader launch?<br/>
                ■Manga NFT Serialization<br/>
                ■Crowdfunding<br/>
              </p>
            </div>
          </div>
          <div className="flex-1 px-3">
            <div
              className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
              style={{
                boxShadow: '0 10px 28px rgba(0,0,0,.08)'
              }}
            >
              <p className="text-xl font-semibold">Long-Term</p>
              <p className="mt-6 text-sm">
                ■DAO Launch<br/>
                ■Manga NFT Release with artists from well-known publishers in Japan<br/>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div> */}
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Join the Manga House ecosystem</h3>
      {/* <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p> */}
      <div className="flex -mx-2">
        <div className="w-1/3 px-2 mt-8">
          {/* <div class="bg-gray-400 h-12"></div> */}
          <Button size="xl">Get Started Now</Button>
        </div>
        <div className="w-1/3 px-2 mt-8">
          {/* <div class="bg-gray-400 h-12"></div> */}
          <Button size="xl">Artist Collaboration</Button>
        </div>
        <div className="w-1/3 px-2 mt-8">
          {/* <div class="bg-gray-400 h-12"></div> */}
          <Button size="xl">Maho Token</Button>
        </div>
      </div>
      {/* <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p> */}
      {/* <p className="mt-8">
        <Button size="xl">Artist Collaboration</Button>
      </p>
      <p className="mt-8">
        <Button size="xl">Maho Token</Button>
      </p> */}
    </section>
  </Layout>
);

export default Index;
