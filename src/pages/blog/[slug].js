import React from 'react'
import { client, urlFor } from '../../../lib/client'
import { jsx, Image, Box, Heading, Text, Flex, Link , Grid} from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../../contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import CoreFeature from '../../sections/core-feature';
import Footer from 'components/footer/footer';
import BlogSection from 'sections/blog-section';

const Blogdetails = ({ blogs, blog }) => {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <br /><br />

                <CoreFeature data={blog} />

                <Box sx={styles.contentBox}>

                    <Grid sx={styles.grid}>
                        
                            <Box sx={styles.card} key={blog.id}>
                                <Box sx={styles.wrapper}>
                                    <Heading sx={styles.wrapper.title}>{blog.title}</Heading>
                                    <Text sx={styles.wrapper.subTitle}>{blog.content}</Text>
                                </Box>
                            </Box>
                        
                    </Grid>
                </Box>
<br/><br/>
                <BlogSection blog={blogs} />
                <Footer />
            </StickyProvider>
        </ThemeProvider>
    );
}


export const getServerSideProps = async ({ params: { slug } }) => {
    const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
    const blogsQuery = '*[_type == "blog"]'

    const blog = await client.fetch(query);
    const blogs = await client.fetch(blogsQuery);

    console.log(blog);

    return {
        props: { blogs, blog }
    }
}

export default Blogdetails

const styles = {
  
    contentBox: {
      width:'70%',
      flexShrink: 0,
      mb: [7, null, 60, 0],
      textAlign: 'center',
    justifyContent:'center',
    margin:'auto'
    },
    grid: {
     
      mx: 'auto',
      width: 'auto',
      gridTemplateColumns: ['repeat(1,1fr)'],
    },
 
    wrapper: {
        margin:'auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      
      title: {
        fontSize: 10,
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        
      },
  
      subTitle: {
        fontSize: [1, null, null, '14px', 1],
        fontWeight: 400,
        lineHeight: 1.9,
      },
    },
 
  };
  