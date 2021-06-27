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
              <h1>How to paraphrase sources</h1>
              <h2>What is paraphrasing?</h2>
              <p>Paraphrasing is the process of rephrasing a piece, whether verbal or written. As you'll see in the samples below, writers frequently restate statements and paragraphs to communicate ideas more concisely. When paraphrasing, it is critical to maintaining the actual intent so that the facts are not lost. In essence, you are composing something in your terminology that still conveys the original concept.</p>
              <p>Paraphrasing is the process of putting somebody else's viewpoints into your language. You must paraphrase a source by rewriting a paragraph without altering the sense of the actual message. When documenting a report or a research paper, it is usual to paraphrase. It enables you to convey core concepts in your tone while focusing on the material most relevant to your viewpoint. Even if you paraphrase someone else's views, you must credit the origin of your content. It acknowledges the primary author's thoughts.</p>
              <p>Paraphrasing is a form of quoting in which you duplicate anyone else's precise words and place them in quotation marks. </p>
              <p>It is typically preferable to rephrase rather than quote in academic writing since it demonstrates that you have comprehended the material and helps your content appear more distinctive.</p>
              <p>It is critical to credit the source whenever you paraphrase. You should also avoid using terminology that is too similar to the actual material, as that's plagiarism.</p>
              <p>Paraphrasing is not the same as summarising. When you summarise a text, you only repeat the core concept in your phrases. But, paraphrasing seeks to give the majority of facts in a somewhat shortened version. Summaries are shorter than the actual paragraph, whereas paraphrase might be shorter, longer, or the exact length as the source.</p>
              <p>Here are some helpful tips to know how to rephrase;</p>
              <ul>
                <li>To properly grasp the significance of the paragraph, read it multiple times.</li>
                <li>Make a list of essential topics.</li>
                <li>Make your variation of the text without consulting the source.</li>
                <li>Check your paraphrased version of the actual article and make slight changes to any sentences that are identical.</li>
                <li>Share the source from where you got that information.</li>
              </ul>
              <h2>Pointers for Paraphrasing</h2>
              <p>The tips stated before may appear simple, yet expressing a different concept from the original version might be challenging. Here are some strategies you may use to assist you in doing so.</p>
              <ul>
                <li>Begin your opening phrase at a distinct point from the primary material.</li>
                <li>Make use of synonyms. </li>
                <li>Alter the sentence form from active to passive sentence.</li>
                <li>Put the content into different sentences.</li>
              </ul>
              <p>What is the proper way to reference a paraphrase?</p>
              <p>When you have paraphrased content, make sure to give credit to the source. Always exactly rephrase regardless of what citation style you employ. The sole difference is the in-text attribution.</p>
              <p>APA Citation format</p>
              <p>When citing in-text in APA style, use the write-date approach. It implies that the author's surname and the publication year for the source. For instance, (Thomas. 1988) should be in the content, and a full citation should occur in the reference section at the end of the report.</p>
              <p>If you are pointing to a concept from another source but are not explicitly citing the content or referring to a complete textbook, journal, or other work, provide the author and year of release in your in-text citation. All materials referenced in the text must be present in the reference section at the end of the article.</p>
              <p>MLA Style format</p>
              <p>MLA Style dictates how to structure and format documents and how to cite studies in writing. MLA Style also offers a mechanism for citing references in papers and Works Referenced pages via parenthesis attribution.</p>
              <p>Writers that use MLA correctly increase their reputation by displaying accountability to their original content. Most significantly, using MLA style helps shield writers against allegations of plagiarism, which is the intentional or unintentional copying of reference material created by other writers without attribution.</p>
              <p>Chicago Style format</p>
              <p>Chicago Manual Of Style reference provides authors with two options for citing sources;</p>
              <ul>
                <li>The writer-date method employs parenthesis references in the content to relate to the source's writer's surname and the publication release year.</li>
                <li>The notes-Bibliography approach uses numbered annotations in the article to lead the viewer to a shorter attribution at the end of the article. &nbsp;It refers to a more detailed citation on the report's final Bibliography page. Though the basic concepts of reference remain the same, the credits themselves are slightly different in writing style than in Author-Date format.</li>
              </ul>
              <p>If you're utilizing CMOS for college or work, be sure to employ your institution or organization's approved citation style.</p>
              <h2>What is the difference between paraphrasing and quoting?</h2>
              <p>If you perform a thorough investigation and make notes on the resources you read, you will wind up describing the bulk of the information you uncover rather than using actual quotes. It is best to keep the number of direct quotations in your work to a minimum because;</p>
              <ul>
                <li>Paraphrasing demonstrates that you fully comprehend the main idea of the material.</li>
                <li>Your unique voice will be present throughout your article.</li>
                <li>Quotes make your content less readable.</li>
              </ul>
              <p>Quotes are applicable in the following situations;</p>
              <ul>
                <li>Providing a specific description</li>
                <li>Giving an opinion regarding the writer's language or style</li>
                <li>Providing proof to back up a claim</li>
                <li>Examining or questioning a particular assertion</li>
              </ul>
              <p>Academic writing frequently entails incorporating material from printed resources into your paper to provide authenticity and authorization. This step is critical to study and the introduction of new ideas.</p>
              <h2>The distinction between summarising and paraphrasing</h2>
              <p>The paraphrasing is a redraft of a particular section from another text that is roughly the same extent as the document's original wording.</p>
              <p>A summary is when you totally or partially convey the findings of a more significant section of the study. Both paraphrasing and summarising are referred to as paraphrases in a generic context at many institutions.</p>
              <h2>How to avoid plagiarism</h2>
              <p>You must be cautious while using <Link href="/">paraphrasing tool</Link> to prevent unintentional plagiarism.</p>
              <p>It can occur if the paraphrasing is too identical to the actual content, with equivalent words or entire lines, and they must be in quotation marks. It can also appear if you are unable to credit the paraphrase origin. You might perform a plagiarism assessment before sending your work to ensure that you've correctly paraphrased and referenced all of your references.</p>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
