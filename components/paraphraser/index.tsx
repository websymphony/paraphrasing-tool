import React, { useCallback, useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import copy from 'copy-to-clipboard'

import HideShow from '@/components/HideShow';

export default function Paraphraser(props) {
  const [paraphraseMode, setParaphraseMode] = useState("standard");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [paraphraseLoading, setParaphraseLoading] = useState(false);
  const inputTextRef = useRef(null);


  const handleInputTextChange = (e) => {
    setInputText(e.target.value)
  }

  const handleParaphraseSubmission = () => {
    (async () => {
      setParaphraseLoading(true);
      const loadingToast = toast.loading('Paraphrasing...');

      const rawResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/paraphrase`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText, mode: paraphraseMode })
      }).catch((_err) => { toast.error('We ran into an issue when trying to paraphrase. Please try again later.'); });
      if (rawResponse && rawResponse.ok) {
        const content = await rawResponse.json();
        setOutputText(content.data.join(' '));
        toast.success("Successfully paraphrased. Enjoy!");
      } else {
        toast.error('We ran into an issue when trying to paraphrase. Please try again later.');
      }
      toast.dismiss(loadingToast);
      setParaphraseLoading(false);
    })();
  }

  const handleCopyResult = () => {
    copy(outputText);
    toast.success('Copied result in your clipboard. Enjoy!');
  }

  const handleClear = () => {
    setInputText("");
    setOutputText("");
    toast.success('Successfully cleared content.');
  }

  useEffect(() => {
    inputTextRef && inputTextRef.current.focus();
  }, [])

  return (
    <>
      <Toaster
        toastOptions={{
          className: 'bg-gray-50 shadow-sm font-medium'
        }}
      />
      <header className="bg-white">
        <section className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-blue-800">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <span className="relative inline-flex rounded-md shadow-sm">
                  <a href="https://hipcv.com?utm_source=paraphrasing-tool" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50">
                    Create free resume
                  </a>
                  <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold leading-tight text-gray-900 text-center">
            Paraphrasing Tool
          </h1>
        </div>
      </header>
      <main>
        <section className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-4 shadow-sm rounded-lg border border-gray-100">
          <div className="flex items-center justify-center">
            <button className={`inline-block rounded-lg font-medium leading-none py-2 px-3 focus:outline-none text-gray-500 hover:text-blue-600 focus:text-blue-600 ${paraphraseMode === 'standard' ? 'bg-blue-50 text-blue-700' : ''}`} onClick={() => setParaphraseMode("standard")}>Standard Mode</button>
            <button className={`inline-block rounded-lg font-medium leading-none py-2 px-3 focus:outline-none text-gray-500 hover:text-green-600 focus:text-green-600 ${paraphraseMode === 'fluency' ? 'bg-green-50 text-green-700' : ''}`} onClick={() => setParaphraseMode("fluency")}>Fluent Mode</button>
            <button className={`inline-block rounded-lg font-medium leading-none py-2 px-3 focus:outline-none text-gray-500 hover:text-amber-600 focus:text-amber-600 ${paraphraseMode === 'creative' ? 'bg-amber-50 text-amber-700' : ''}`} onClick={() => setParaphraseMode("creative")}>Creative Mode</button>
          </div>
          <HideShow show={paraphraseMode === 'standard'}>
            <div className="text-center rounded-lg mt-2 p-2 bg-blue-50 text-blue-700 font-semibold">
              Most conservative mode while rephrasing. The rephrased sentences will be very close to the original.
            </div>
          </HideShow>
          <HideShow show={paraphraseMode === 'fluency'}>
            <div className="text-center rounded-lg mt-2 p-2 bg-green-50 text-green-700 font-semibold">
              Happy middle ground between 'Standard' and 'Creative'. Tries to change the sentence while trying to keep the meaning intact.
            </div>
          </HideShow>
          <HideShow show={paraphraseMode === 'creative'}>
            <div className="text-center rounded-lg mt-2 p-2 bg-amber-50 text-amber-700 font-semibold">
              Tries to change the sentence most but quite likely to have errors.
            </div>
          </HideShow>
          <div className="p-4 sm:px-0">
            <div className="grid grid-cols-2 gap-x-1">
              <label htmlFor="inputText">
                <span className="block pb-2 text-center text-gray-600 md:hidden">
                  Text to paraphrase
                </span>
                <span className="hidden md:block pb-2 text-center text-gray-600">
                  Enter the text you want to paraphrase
                </span>
                <textarea name="inputText" className="border-2 border-gray-200 h-96 disabled:opacity-60 block w-full sm:text-sm rounded-lg p-4 md:text-lg focus:outline-none focus:ring focus:border-blue-600 resize-none" placeholder="Enter the text you want to paraphrase. You can select any of the modes above for different levels of paraphrasing. After writing or pasting your text, use the Paraphrase button below." value={inputText} onChange={handleInputTextChange} disabled={paraphraseLoading} ref={inputTextRef}></textarea>
              </label>
              <label htmlFor="outputText">
                <span className="block pb-2 text-center text-gray-600">
                  Paraphrased text
                </span>
                <textarea name="outputText" className="border-2 border-gray-200 h-96 disabled:opacity-60 block w-full sm:text-sm rounded-lg p-4 md:text-lg focus:outline-none focus:ring focus:border-blue-600 resize-none" placeholder="You will get the resulting text here after the paraphrasing tool has finished rephrasing." value={outputText} disabled={paraphraseLoading} readOnly></textarea>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center relative">
            <div className="absolute left-0">
              <span className={`font-medium ${[...inputText].length > 500 ? 'text-red-600' : 'text-green-600'}`}>{[...inputText].length}</span><span className="text-gray-500">/500 Characters</span>
              <span className={` block font-medium ${[...inputText].length > 500 ? 'text-blue-500' : 'hidden'}`}><a href="mailto:amitgaur.web@gmail.com">Contact us to get more than 500 characters.</a></span>
            </div>
            <button type="button" className="disabled:opacity-60 max-w-md flex items-center justify-center px-7 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-lg md:px-10" onClick={handleParaphraseSubmission} disabled={[...inputText].length <= 10 || [...inputText].length > 500 || paraphraseLoading}>
              {paraphraseLoading ? (<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>) : (<svg className="-ml-1 mr-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>)}
              {paraphraseLoading ? 'Paraphrasing...' : 'Paraphrase'}
            </button>
            <div className="absolute right-0 flex align-middle justify-center">
              <HideShow show={[...inputText].length > 10 && [...inputText].length < 500}>
                <button type="button" className="max-w-md flex items-center justify-center px-4 py-2 mx-2 border border-transparent font-medium rounded-md text-red-500 hover:text-red-600 focus:text-red-600 bg-red-50" onClick={handleClear}>
                  <svg className="-ml-1 mr-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Clear all</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                Clear all
              </button>
              </HideShow>
              <HideShow show={[...outputText].length > 0}>
                <button type="button" className="max-w-md flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-gray-500 hover:text-blue-600 focus:text-blue-600 bg-gray-50" onClick={handleCopyResult}>
                  <svg className="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <title>Copy result</title>
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                  </svg>
                Copy result
              </button>
              </HideShow>
            </div>
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Best Article Rewriter & Paraphrasing Tool</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                For all writing tasks at hand, use our completely free paraphrasing tool
              </p>
              <p className="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
                When trying to avoid plagiarism while writing articles, essays, or even emails, using our Paraphrasing tool will help you rewrite the sentences that are identical in meaning to the original text.
              </p>
            </div>
            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="flex bg-gray-50 p-6 rounded-lg prose lg:prose-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">
                      Free to use
                    </div>
                    <div className="mt-2 text-gray-500">
                      Our article rewriter is entirely free of cost to use. We don't need your credit card or any payment information to help you generate the rephrased article or essay.
                    </div>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-6 rounded-lg prose lg:prose-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">
                      No signup required
                    </div>
                    <div className="mt-2 text-gray-500">
                      Our software does not require any signup, login, or registration. Just provide the text you need to be rewritten and click the <code>Paraphrase</code> button. Nothing else needed.
                    </div>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-6 rounded-lg prose lg:prose-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">
                      How do you use a paraphrasing tool?
                    </div>
                    <div className="mt-2 text-gray-500">
                      <p className="pb-2">
                        Our article rewriter is one of the easiest software on the internet for rephrasing phrases or articles. To use our tool, you need to either write or paste your input article into the first box.
                      </p>
                      <p className="pb-2">
                        After that, click the <code>Paraphrase</code> button. Once you submit the information, our AI will start analyzing and rewriting the article while keeping the original intent identical.
                      </p>
                      <p>
                        When the AI has finished processing, you'll be able to see the results in the second box. Also, you can copy results by clicking on the <code>Copy Result</code> button.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-6 rounded-lg prose lg:prose-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">
                      Which is the best paraphrasing tool?
                    </div>
                    <div className="mt-2 text-gray-500">
                      <p className="pb-2">Our tool is amongst the best online software out there for paraphrasing and article & essay rewriting.</p>
                      <p className="pb-2">You can find lots of different paraphrasing tools online. Almost all of them are either very poor in the level of quality and accuracy of the sentences they generate. Either ask for money or need signup before continuing. They are ad-ridden most of the time and do not have a good usability experience while using.</p>
                      <p className="pb-2">Most of these online tools rely on simple text synonym replacement, hence their low quality. They don't understand the meaning behind the sentences entirely.</p>
                      <p className="pb-2">On the other hand, our software uses advanced artificial intelligence models that excel at paraphrasing. Our AI models have spent countless hours analyzing English phrases. These models understand the semantics behind the sentences, due to which they can perform a much better job of rewriting.</p>
                    </div>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-6 rounded-lg prose lg:prose-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" /></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">
                      How do you paraphrase quickly?
                    </div>
                    <div className="mt-2 text-gray-500">
                      <p className="pb-2">
                        The easiest way to paraphrase is by using our software.
                      </p>
                      <p>
                        But, if you want to do it yourself, one neat trick is to internalize the meaning of the sentence you are trying to paraphrase. Then, try to convey the same thought in your own words.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-6 rounded-lg prose lg:prose-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">
                      What is an article spinner?
                    </div>
                    <div className="mt-2 text-gray-500">
                      <p className="pb-2">
                        Article spinners are low-quality article rewriting software tools that generate new sentences from existing by replacing the words with their synonyms. The output text generated usually isn't that great and looks very spammy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-6 rounded-lg prose lg:prose-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">
                      Is the paraphrasing tool plagiarizing?
                    </div>
                    <div className="mt-2 text-gray-500">
                      <p className="pb-2">
                        One of the most common causes of plagiarism is paraphrasing and not giving any citations.
                      </p>
                      <p className="pb-2">
                        So, when you rephrase the article and keep the key points as is. One way to avoid plagiarism would be to cite the sources appropriately.
                      </p>
                      <p>
                        By following the best practices set by your organization, you should be able to avoid plagiarism.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-6 rounded-lg prose lg:prose-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">
                      How can you paraphrase without plagiarizing?
                    </div>
                    <div className="mt-2 text-gray-500">
                      <p className="pb-2">
                        If you copy the information from a source, a good rule of thumb is to cite that source. By doing that, you are not trying to take credit for someone else's original work.
                      </p>
                      <p>
                        If the person or organization receiving the article or essay has provided the criteria regarding paraphrasing. It will be a good idea to follow that.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}