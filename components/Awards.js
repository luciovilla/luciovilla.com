import React from 'react'

export default function Awards() {
  return (
    <>
      <section className="relative pb-20 w-full" id="awards">
        <div className="text-center w-full mb-10 uppercase text-gray-600">
          Awards & Honors
          <span className="inline-block w-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="w-full md:w-4/5 container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 w-full mb-8">
                <div className="px-4 flex-auto">
                  <h6 className="text-xl font-semibold -ml-4">2019</h6>
                  <ul className="list-outside list-disc mt-4 text-lg text-gray-600">
                    <li>
                      ONA:{' '}
                      <a
                        className="underline"
                        rel="noreferrer"
                        href="https://awards.journalists.org/entries/camp-fire-californias-deadliest-wildfire/"
                        target="_blank"
                      >
                        Breaking News
                      </a>
                    </li>
                    <li className="award">
                      Editor &amp; Pubblisher:{' '}
                      <a
                        className="underline"
                        rel="noreferrer"
                        href="https://www.editorandpublisher.com/feature/eps-25-under-35-2019-the-next-generation-of-newspaper-leaders-wants-to-keep-the-industry-moving/"
                        target="_blank"
                      >
                        25 Under 35
                      </a>
                    </li>
                    <li className="award">
                      Fullstack Academy:{' '}
                      <a
                        className="underline"
                        rel="noreferrer"
                        href="https://www.fullstackacademy.com/blog/developers-that-work-in-media"
                        target="_blank"
                      >
                        15 Developers to Follow If You Want to Work in Media
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 w-full mb-8">
                <div className="px-4 flex-auto">
                  <h6 className="text-xl font-semibold -ml-4">2018</h6>
                  <ul className="list-outside list-disc mt-4 text-lg text-gray-600">
                    <li className="award">
                      POY:{' '}
                      <a
                        rel="noreferrer"
                        className="underline"
                        href="https://www.poy.org/76/24/"
                        target="_blank"
                      >
                        1st Place for Online Visual Editing
                      </a>
                    </li>

                    <li className="award">
                      CNPA:{' '}
                      <a
                        className="underline"
                        rel="noreferrer"
                        href="http://cnpa.com/cja2018/digital/gallery/Enterprise_News_Story_or_Series_06_Enterprise_News_Story_or_Series_(MA).html#heading5"
                        target="_blank"
                      >
                        1st Place for Digital Enterprise Story
                      </a>
                    </li>

                    <li className="award">
                      CNPA:{' '}
                      <a
                        className="underline"
                        rel="noreferrer"
                        href="http://cnpa.com/cja2018/digital/gallery/Feature_Story_11_Feature_Story_(MA).html#heading7"
                        target="_blank"
                      >
                        1st Place for Digital Feature
                      </a>
                    </li>

                    <li className="award">
                      CNPA:{' '}
                      <a
                        className="underline"
                        rel="noreferrer"
                        href="http://cnpa.com/cja2018/digital/gallery/Breaking_News_07_Breaking_News_(MA).html#heading1"
                        target="_blank"
                      >
                        Breaking News Coverage
                      </a>
                    </li>

                    <li className="award">
                      CNPA:{' '}
                      <a
                        className="underline"
                        rel="noreferrer"
                        href="http://cnpa.com/cja2018/digital/gallery/General_Excellence_01_General_Excellence_(MA).html#heading8"
                        target="_blank"
                      >
                        General Excellence
                      </a>
                    </li>

                    <li className="award">
                      CNPA:{' '}
                      <a
                        className="underline"
                        rel="noreferrer"
                        href="http://cnpa.com/cja2018/digital/gallery/In-Depth_Reporting_03_In-Depth_Reporting_(MA).html#heading10"
                        target="_blank"
                      >
                        1st Place for In-Depth Reporting
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 w-full mb-8">
                <div className="px-4 flex-auto">
                  <h6 className="text-xl font-semibold -ml-4">2017</h6>
                  <ul className="list-outside list-disc mt-4 text-lg text-gray-600">
                    <li className="award">
                      SND:{' '}
                      <a
                        className="underline"
                        rel="noreferrer"
                        href="https://www.snd.org/bodd/2019/01/09/2017-results/"
                        target="_blank"
                      >
                        Award of Excellence
                      </a>
                    </li>

                    <li className="award">
                      SND:{' '}
                      <a
                        className="underline"
                        rel="noreferrer"
                        href="https://www.snd.org/competitions/database/?d=1&amp;contest=&amp;ID=29400"
                        target="_blank"
                      >
                        Award of Excellence
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
