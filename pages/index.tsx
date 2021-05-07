import Head from 'next/head';
import Layout from '@/components/Layout'
import Paraphraser from '@/components/paraphraser'

export const GA_TRACKING_ID = "G-S9S2YMCHRG";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paraphrasing Tool & Article Rewriter to paraphrase sentences.</title>
        <meta name="description" content="Paraphrasing tool accurately rewrites the essays and articles using advanced AI. Use the completely free article rewriter tool, to help avoid plagiarism and increase creativity by rewording phrases. No signup required." />
        <link rel="icon" href="/paraphrasing-tool/favicon.png" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <Layout>
        <Paraphraser />
      </Layout>
    </div>
  );
}
