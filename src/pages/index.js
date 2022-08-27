import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';
import { client } from '../../lib/client';

export default function IndexPage({blogsData,reviewsData,teamData}) {
  return (
   
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 005" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <Feature />
          <WorkFlow />
          <Package />
          <TeamSection team={teamData}/>
          <TestimonialCard testimonials={reviewsData} />
          <BlogSection blog={blogsData}/>
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
export const getServerSideProps = async()=>{
  const blogquery='*[_type=="blog"]';
  const blogsData=await client.fetch(blogquery);

  const reviewsquery='*[_type=="testimonials"]';
  const reviewsData=await client.fetch(reviewsquery);

  const teamquery='*[_type=="team"]';
  const teamData=await client.fetch(teamquery);

  return {
    props:{blogsData,reviewsData,teamData}
  }
}
