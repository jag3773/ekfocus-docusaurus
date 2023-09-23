import React from 'react';
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <> Biblical Languages</>,
    imageUrl: 'img/aleph.svg',
    description: (
      <>
        Helpful resources for studying <a href="/docs/hebrew">biblical languages</a>.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/disciples.svg',
    description: (
      <>
        How might we <a href="/docs/make-disciples">make disciples</a> who make disciples in the context of healthy churches?
      </>
    ),
  },
  {
    title: <>Open By Design</>,
    imageUrl: 'img/unlocked.svg',
    description: (
      <>
        Not seeking my own benefit but that of the many, so that they might be saved.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
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
      title={`Eternal Kingdom Focus`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src="img/ekfocus_wordmark.png" />
        </div>
      </header>
      <main>
        {features && features.length && (
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
