import Head from "next/head";

import { dark } from "@sergiodxa/palette";
import { A, P } from "@sergiodxa/ui/lib/text";

import { LinkedHeader } from "../components/header";
import Icon from "../components/icon";
import Layout from "../layouts/main";

function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Sergio Xalambrí</title>
      </Head>

      <LinkedHeader />

      <section id="about">
        <section id="bio" className="h-card">
          <article>
            <p className="p-note">
              I'm <strong className="p-name">Sergio Xalambrí</strong> and I'm{" "}
              <em className="p-job-title">Software Engineer</em>
            </p>
          </article>
        </section>

        <section id="social">
          <ul>
            <li>
              <a
                href="https://sdx.im/twitter"
                rel="me"
                title="Twitter"
                className="u-url"
              >
                <Icon name="Twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://sdx.im/medium"
                rel="me"
                title="Medium"
                className="u-url"
              >
                <Icon name="Medium" />
              </a>
            </li>
            <li>
              <a
                href="https://sdx.im/gh"
                rel="me"
                title="GitHub"
                className="u-url"
              >
                <Icon name="GitHub" />
              </a>
            </li>
            <li>
              <a
                href="https://sdx.im/npm"
                rel="me"
                title="npm"
                className="u-url"
              >
                <Icon name="npm" />
              </a>
            </li>
            <li>
              <a
                href="https://sdx.im/cv"
                rel="me"
                title="LinkedIn"
                className="u-url"
              >
                <Icon name="LinkedIn" />
              </a>
            </li>
            <li>
              <a
                href="https://sdx.im/instagram"
                rel="me"
                title="Instagram"
                className="u-url"
              >
                <Icon name="Instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://sdx.im/steam"
                rel="me"
                title="Steam"
                className="u-url"
              >
                <Icon name="Steam" />
              </a>
            </li>
            <li>
              <a
                href="https://sdx.im/yt"
                rel="me"
                title="YouTube"
                className="u-url"
              >
                <Icon name="YouTube" />
              </a>
            </li>
            <li>
              <a
                href="https://sdx.im/meetup"
                rel="me"
                title="Meetup"
                className="u-url"
              >
                <Icon name="Meetup" />
              </a>
            </li>
            <li>
              <a
                href="https://sdx.im/codepen"
                rel="me"
                title="Codepen"
                className="u-url"
              >
                <Icon name="codepen" />
              </a>
            </li>
            <li>
              <a
                href="https://sdx.im/devto"
                rel="me"
                title="DevTo"
                className="u-url"
              >
                <Icon name="dev" />
              </a>
            </li>
            <li>
              <a href="/atom" rel="me" title="Feed RSS" className="u-url">
                <Icon name="RSS" />
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@sergiodxa.com"
                rel="me"
                title="Email"
                className="u-email"
              >
                <Icon name="Email" />
              </a>
            </li>
            <li>
              <a href="/static/gpg.asc" rel="me" title="GPG" className="u-gpg">
                GPG
              </a>
            </li>
          </ul>
        </section>

        <section id="paypal">
          <P>
            Do you like my content?{" "}
            <A
              href="https://sdx.im/patreon"
              color={dark}
              decoration="underline"
            >
              Become a Patreon and get some benefits!
            </A>{" "}
          </P>
          <P>
            Or just help me{" "}
            <A
              href="https://paypal.me/sergiodxa/5"
              color={dark}
              decoration="underline"
            >
              buy a coffee
            </A>
          </P>
        </section>
      </section>

      <style jsx>{`
        section {
          margin: 0 auto;
          max-width: 800px;
        }

        p {
          margin: 0.5em;
        }

        #bio {
          margin: 0 auto;
          font-size: 2em;
          text-align: center;
        }

        #bio > p {
          margin: 0;
        }

        #social > ul {
          display: flex;
          list-style-type: none;
          padding-left: 0;
          font-size: 1.5em;
          justify-content: center;
          flex-wrap: wrap;
        }

        #social > ul > li > a {
          color: ${dark};
          text-decoration: none;
          margin: 0.5em;
          display: block;
        }

        #about {
          min-height: calc(100vh - 72px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        #paypal {
          margin: 0 1em;
          text-align: center;
        }

        @media (min-width: 720px) {
          #bio {
            font-size: 3em;
          }
        }
      `}</style>
    </Layout>
  );
}

export default AboutPage;
