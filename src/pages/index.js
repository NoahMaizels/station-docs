import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';

const features = [

  {
    title: 'Get the best price',
    imageUrl: 'img/bot.png',
    description: (
      <>
        Before every transaction, we scan the blockchain to find where your options order can be filled for the lowest overall price. We consider platform fees as well as total smart contract gas costs in order to ensure you pay as little as possible.  
      </>
    ),
  },
  {
    title: 'Unbeatable Liquidity',
    imageUrl: 'img/btc.png',
    description: (
      <>
        Our smart order router allows you to purchase options across multiple platforms in order to meet your needs all in a single transaction (from the user's point of view).
      </>
    ),
  },
  {
    title: 'Save Time',
    imageUrl: 'img/thumb.png',
    description: (
      <>
        Definet will scan half a dozen (and more are added all the time!) defi options platforms to find you the best price, saving you minutes for every transaction, and adding up to hours and hours for defi power users.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Royale Documentation"
      >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img className="home_crown" src="img/logo.png"></img>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('defi_options')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className="main-features">
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
