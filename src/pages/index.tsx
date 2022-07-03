import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { Container, Grid} from "@material-ui/core"

import Slider from "../components/home/Slider"
import Introductions from "../components/home/Introductions"
import PageTemplate from "../components/layouts/PageTemplate"
import theme from "../components/utils/theme"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem"
  }
}))

interface Item {
  name: string
  description: string
  color: string
}

interface Introduction {
  title: string
  description: string
  action: string
  href: string
}

const Home: React.FC = () => {
  const classes = useStyles()

  const items: Item[] = [
    {
      name: "安心安全なXXX....",
      description: "人にも温かく優しい生活環境を常に考え、新しい発想に株式会社フジコウは挑みます。",
      color: "#64ACC8"
    },
    {
      name: "豊富なラインナップ",
      description: "さまざまなラインナップを揃えております。包装・梱包資材ならおまかせください",
      color: "#7D85B1"
    },
    {
      name: "Slide3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "#CE7E78"
    }
  ]

  const introductions: Introduction[] = [
    {
      title: "私たちについて",
      description: "フジコウはXXより、包装、梱包資材を制作しつづけています。<br>今後もお客様のXXのために、",
      action: "About Us >",
      href: "/recruit"
    },
    {
      title: "製品ラインナップ",
      description: "豊富なラインナップを揃えております。XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。",
      action: "About Product >",
      href: "/service"
    },
    {
      title: "会社概要",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      action: "About Company >",
      href: "/company"
    }
  ]

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageTemplate title="Home | Corporate Site Sample">
          <>
            <Slider
              items={items}
            />
            { introductions.map((introduction, index) => (
              <Container key={index} maxWidth="lg" className={classes.container}>
                <Grid container justify={index % 2 == 0 ? "flex-start" : "flex-end"}>
                  
                  <Grid item lg={6} md={6}>
                    <Introductions
                      index={index}
                      title={introduction.title}
                      description={introduction.description}
                      action={introduction.action}
                      href={introduction.href}
                    />
                  </Grid>
                </Grid>
              </Container>
              ))
            }
              {/* <Container key={1} maxWidth="lg" className={classes.container}>
                <Grid container justify={"flex-start"}>
                  <Grid item lg={6} md={6}>
                    <Introductions
                      index={1}
                      title={"私たちについて"}
                      description={"フジコウはXXより、包装、梱包資材を制作しつづけています。<br>今後もお客様のXXのために、"}
                      action={"About Us >"}
                      href={"/recruit"}
                    />
                  </Grid>
                </Grid>
              </Container> */}
          </>
        </PageTemplate>
      </ThemeProvider>
    </>
  )
}

export default Home