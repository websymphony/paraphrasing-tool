import Head from 'next/head';
import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react';

export const GA_TRACKING_ID = "G-S9S2YMCHRG";

export default function Home() {
  return (
    <div>
      <Head>
        <title>How to paraphrase sources</title>
        <meta name="description" content="How to paraphrase sources using advanced AI." />
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
        <header className="bg-white">
          <section className="bg-blue-600">
            <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center flex-1 w-0">
                  <span className="flex p-2 bg-blue-800 rounded-lg">
                    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </span>
                  <p className="ml-3 font-medium text-white truncate">
                    <a href="https://hipcv.com?utm_source=paraphrasing-tool" className="block p-2">
                      <span className="md:hidden">
                        Use our app hipCV to create free professional resumes in minutes.
                      </span>
                      <span className="hidden md:inline">
                        Looking for a job or need a professional resume? Use our app hipCV to create free resumes and cover letters!
                      </span>
                    </a>
                  </p>
                </div>
                <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
                  <span className="relative inline-flex rounded-md shadow-sm">
                    <a href="https://hipcv.com?utm_source=paraphrasing-tool" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-blue-50">
                      Create free resume
                    </a>
                    <span className="absolute top-0 right-0 flex w-3 h-3 -mt-1 -mr-1">
                      <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
                      <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold leading-tight text-center text-blue-600">
              <Link href="/">Paraphrasing tool</Link>
            </h1>
          </div>
        </header>
        <main className="bg-gray-50">
          <section className="py-10 mx-auto prose sm:prose-lg">
            <div className="py-8 bg-white rounded-md sm:px-10">
              <h1>Quillbot Alternative</h1>
              <p>QuillBot is a market-available rewriting tool that uses cutting-edge artificial intelligence to rephrase any piece of information. The tool's primary objective is to restructure the material by modifying the pattern of phrases and substituting terms with synonyms while retaining the essence of the initial text. They also include a tool for summarising and grammatical verification. Quillbot also contains a word flipper, which is essentially liable for the number of terms in the paraphrased material substituted by their equivalents. Also, you may use the slider to change the position of the word flipper to shift more terms or few characters in your text. The text quality can be affected by a higher word flipper level.</p>

              <h2>Paraphrasing tool</h2>
              <p>The paraphrasing tool is easy to use with user-friendly navigation and is perfect for both students and seasoned professionals. The tool is developed so that anyone can access it and begin paraphrasing the content right away. Also, it has a unique word generator that may instantly rewrite your content to help you create better articles for your website or blog. The paraphrasing tool is an article rewriter software that may be employed to rewrite, rephrase, and rearrange content. The paraphrasing tool and the rewriting tool are offered at no cost.</p>

              <h2>FAQs</h2>

              <h3>Q1. Does QuillBot offer any free service?</h3>
              <p>QuillBot Basic Plan</p>
              <p>QuillBot provides an unlimited free account that grants access to the following features with certain restrictions.</p>
              <ul>
                <li>3 Quill-modes are available for use (Standard, Fluency, & Creative)</li>
                <li>You may enter up to 400 characters at once.</li>
                <li>There are three-word flipper alternatives.</li>
                <li>The character restriction of 5000 for Summarizer.</li>
                <li>Google Chrome and Google Docs extensions are available for free.</li>
                <li>The tool evaluates two sentences at the same time.</li>
              </ul>

              <h3>Q2. What is the cost of the Quillbot paraphrasing tool?</h3>
              <p>QuillBot Pro Subscriptions</p>
              <ul>
                <li>Monthly subscription - $14.95 per month.</li>
                <li>Semi-Annual Subscription -  $59.95 for six months ($9.99/month).</li>
                <li>Yearly subscription - $79.95 each year ($6.67/ month).</li>
              </ul>

              <h3>Q3. Is it advantageous to use the QuillBot paraphrasing tool?</h3>
              <p>Quillbot is all-in-one software. But as a user, you may not need to access every functionality, so check out our <Link href="/">free paraphrasing tool</Link> with an intuitive user interface.</p>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
