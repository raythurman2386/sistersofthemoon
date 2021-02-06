import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div
        className="container"
        style={{ minHeight: "50vh", textAlign: "center" }}
      >
        <h3 style={{ fontSize: "2.5rem", marginBottom: "3rem" }}>
          Hi! Welcome to Sisters by the Moon.
        </h3>

        <p>
          This shop is your go-to for Tarot and Rune readings, along with
          candles, bath salts, bath bombs and many more items to come!!
        </p>

        <h4 style={{ fontSize: "2.2rem", marginBottom: "3rem" }}>
          Let’s learn a little about the creators Mallory & Sheryl.
        </h4>

        <p>
          Mallory is a Gemini sun, Cancer moon, and Libra ascendant. She is very
          in tune with crystals and Tarot. She spends her free time with her
          kids and playing tennis.
        </p>
        <p>
          Sheryl is a Taurus sun, Capricorn moon, and Cancer ascendant. She is
          an Eclectic Pagan and is very in tune with Runes and Tarot as well.
          She spends her free time with her family and working out at the gym.
        </p>

        <p>
          We are both working moms from Indiana with a passion for other areas
          of the spiritual world. Though our name is Sisters by the Moon, we are
          not sisters but, sisters-in-law! We have talked about starting our own
          little business for years and it’s finally coming to life! As we grow
          you will notice so will our page. So please be patient with us! :)
          While we do offer things for your craft, feel happy knowing we cleanse
          anything that ships! We don’t want any negativity with your items and
          we always hope for the best outcome. We will have daily Rune and Tarot
          readings with their explanations, blogs about certain holidays and
          just some things in life we are doing! We hope you enjoy this page and
          the items we share!
        </p>

        <p>
          Beautiful Imagery by:{" "}
          <a
            href="https://instagram.com/aalexandriabishop"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alexandria Bishop
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
