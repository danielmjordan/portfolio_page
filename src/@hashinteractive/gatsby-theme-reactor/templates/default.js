/** @jsx jsx */
import { jsx, Container, Flex, Box, Styled } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Layout from '../components/layout';
import Subnav from '../components/subnav';
import Profile from '../components/profile';
import Separator from '../components/separator';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';

const Default = () => {
  const {
    bio: { description, title, skills },
  } = useStaticQuery(graphql`
    query {
      bio {
        description
        title
        name
        skills
      }
    }
  `);
  return (
    <Layout>
      <Subnav />
      <Container p={3}>
        <Flex
          sx={{
            flexDirection: 'column',
          }}
        >
          <Flex
            id="about"
            sx={{
              flexWrap: 'wrap',
            }}
          >
            <Box
              sx={{
                width: ['full', '1/2'],
              }}
            >
              <Profile />
            </Box>
            <Box
              sx={{
                width: ['full', '5/12'],
                ml: [0, '8.29999%'],
              }}
            >
              <Flex
                sx={{
                  height: 'full',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box>
                  <Styled.h1
                    sx={{
                      mt: 0,
                      color: 'primary',
                    }}
                  >
                    About Me
                  </Styled.h1>
                  <Styled.h6
                    sx={{
                      mb: 0,
                      color: 'primary',
                    }}
                  >
                    <span
                      sx={{
                        bg: (theme) => theme.colors.orange[3],
                        ml: 0,
                        width: 20,
                        height: 1,
                        display: 'inline-block',
                        verticalAlign: 'middle',
                      }}
                    ></span>
                  </Styled.h6>
                </Box>
                <Box>
                  <p sx={{ color: 'primary' }}>{description}</p>
                </Box>
                <Box
                  sx={{
                    mt: 24,
                    display: 'flex',
                    alignItems: 'center',
                    width: 'full',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    width="28"
                    height="28"
                    fill="currentcolor"
                  >
                    <circle
                      r={12}
                      cx={13}
                      cy={13}
                      fill="none"
                      stroke="#dddddd"
                      strokeWidth={2}
                    />
                  </svg>
                  <span
                    sx={{
                      bg: (theme) => theme.colors.orange[3],
                      ml: '-14px',
                      mr: 4,
                      width: 10,
                      height: '3px',
                      display: 'inline-block',
                      verticalAlign: 'middle',
                    }}
                  ></span>
                  <AnchorLink
                    sx={{
                      color: 'primary',
                      textTransform: 'uppercase',
                      fontSize: 0,
                      fontWeight: 'extrabold',
                      textDecoration: 'none',
                      pb: 1,
                      border: 0,
                      borderBottom: '3px',
                      borderStyle: 'solid',
                      borderColor: (theme) => theme.colors.orange[3],
                    }}
                    to="/#contact"
                    replace
                  >
                    Get In Touch
                  </AnchorLink>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Separator />
          <Flex
            id="skills"
            sx={{
              flexWrap: 'wrap',
            }}
          >
            <Box
              sx={{
                width: ['full', '1/2'],
              }}
            >
              <Flex
                sx={{
                  flexDirection: 'column',
                  height: 'full',
                }}
              >
                <Box sx={{ width: 'full' }}>
                  <Styled.h6
                    sx={{
                      mb: 0,
                      color: 'primary',
                      textTransform: 'uppercase',
                      fontWeight: 'extrabold',
                    }}
                  >
                    My Skills
                    <span
                      sx={{
                        bg: (theme) => theme.colors.orange[3],
                        ml: 3,
                        width: 10,
                        height: 1,
                        display: 'inline-block',
                        verticalAlign: 'middle',
                      }}
                    ></span>
                  </Styled.h6>
                  <Styled.h1
                    sx={{
                      color: 'primary',
                      mt: 0,
                    }}
                  >
                    What I Do
                  </Styled.h1>
                </Box>
                <Box
                  sx={{
                    mt: 4,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: 'full',
                  }}
                >
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      sx={{
                        mx: 1,
                        mb: 3,
                        backgroundColor: (theme) => theme.colors.gray[3],
                        fontSize: 0,
                        border: 0,
                        borderLeft: 2,
                        boxShadow: 'md',
                        borderColor: (theme) => theme.colors.gray[5],
                        borderStyle: 'solid',
                        p: 2,
                        px: 3,
                        '&:hover': {
                          backgroundColor: (theme) => theme.colors.gray[8],
                          color: 'white',
                        },
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </Box>
              </Flex>
            </Box>
            <Box
              sx={{
                width: ['full', '1/2'],
              }}
            >
              <h1
                sx={{
                  color: (theme) => theme.colors.gray[7],
                  fontSize: ['55px', '75px'],
                  textAlign: 'right',
                  lineHeight: 1.15,
                }}
              >
                <u
                  sx={{
                    textDecoration: 'none',
                    border: 0,
                    borderBottom: 5,
                    borderStyle: 'solid',
                    borderColor: (theme) => theme.colors.gray[3],
                  }}
                >
                  {title}
                </u>
              </h1>
            </Box>
          </Flex>
          <Separator />
          <Flex
            id="portfolio"
            sx={{
              flexDirection: 'column',
              mb: 5,
            }}
          >
            <Box
              sx={{
                width: 'full',
                mb: 5,
              }}
            >
              <Styled.h6
                sx={{
                  mb: 0,
                  color: 'primary',
                  textTransform: 'uppercase',
                  fontWeight: 'extrabold',
                }}
              >
                My Projects
                <span
                  sx={{
                    bg: (theme) => theme.colors.orange[3],
                    ml: 3,
                    width: 10,
                    height: 1,
                    display: 'inline-block',
                    verticalAlign: 'middle',
                  }}
                ></span>
              </Styled.h6>
              <Styled.h1
                sx={{
                  color: 'primary',
                  mt: 0,
                }}
              >
                Recent Work
              </Styled.h1>
            </Box>
            <Box
              sx={{
                width: 'full',
              }}
            >
              <Portfolio />
            </Box>
          </Flex>
        </Flex>
      </Container>
      <Contact />
    </Layout>
  );
};

export default Default;
