import Image from 'next/image';
import Link from 'next/link';
import essay from '../../public/images/essay.webp';
import somali from '../../public/images/somali.webp';
import refugee from '../../public/images/refugee.webp';
import home from '../../public/images/home.webp';
import independence from '../../public/images/independence.webp';
import npr from '../../public/images/npr.webp';
import poem from '../../public/images/poem.webp';

export default function Writings() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div
              data-aos="fade-right"
              data-aos-delay="0"
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
            >
              <div className="rounded-lg h-64 overflow-hidden relative">
                <Link
                  href="https://www.salon.com/2017/02/11/danger-in-my-belly-i-know-where-donald-trumps-tribal-rhetoric-can-lead/"
                  target="_blank"
                >
                  <Image
                    className="object-cover object-center rounded"
                    alt="Danger in my belly article photo"
                    src={essay}
                    width={1205}
                    height={505}
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Danger in my belly: I know where Donald Trump's tribal rhetoric
                can lead
              </h2>
              <p className="text-base leading-relaxed mt-2">
                I came to America as a refugee from Somalia. I know what happens
                when a group of people is labeled as a threat
              </p>
              <p className="inline-flex items-center mt-3">
                Published by{' '}
                <a
                  href="https://www.salon.com/2017/02/11/danger-in-my-belly-i-know-where-donald-trumps-tribal-rhetoric-can-lead/"
                  target="_blank"
                  className="underline text-blue-500 ml-1"
                >
                  SALON
                </a>
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
            >
              <div className="rounded-lg h-64 overflow-hidden relative">
                <Link
                  href="https://www.salon.com/2017/04/30/the-good-pirates-of-somalia/"
                  target="_blank"
                >
                  <Image
                    className="object-cover object-center rounded"
                    alt="Image from salon article"
                    src={somali}
                    width={1205}
                    height={505}
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                The "good pirates" of Somalia
              </h2>
              <p className="text-base leading-relaxed mt-2">
                My father's hometown of Eyl, Somalia, was once a pirate's haven.
                I sat down with an ex-pirate to learn why
              </p>
              <p className="inline-flex items-center mt-3">
                Published by{' '}
                <a
                  href="https://www.salon.com/2017/04/30/the-good-pirates-of-somalia/"
                  target="_blank"
                  className="underline text-blue-500 ml-1"
                >
                  SALON
                </a>
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
            >
              <div className="rounded-lg h-64 overflow-hidden relative">
                <Link
                  href="https://www.theguardian.com/commentisfree/2016/may/31/american-immigration-stories-kenya-utanga-refugee-camp"
                  target="_blank"
                >
                  <Image
                    className="object-cover object-center rounded"
                    alt="Image from guardian article of a refugee camp"
                    src={refugee}
                    width={1205}
                    height={505}
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                I used to be a number in a refugee camp. In America I became a
                person
              </h2>
              <p className="text-base leading-relaxed mt-2">
                I lived among 30,000 refugees in Kenya, surrounded by death and
                decay. When we had the chance to leave, we didn’t look back
              </p>
              <p className="inline-flex items-center mt-3">
                Published by{' '}
                <a
                  href="https://www.theguardian.com/commentisfree/2016/may/31/american-immigration-stories-kenya-utanga-refugee-camp"
                  target="_blank"
                  className="underline text-blue-500 ml-1"
                >
                  THE GUARDIAN
                </a>
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
            >
              <div className="rounded-lg h-64 overflow-hidden relative">
                <Link
                  href="https://studentreview.hks.harvard.edu/home-no-more/#0"
                  target="_blank"
                >
                  <Image
                    className="object-cover object-center rounded"
                    alt="Image from the harvard kennedy school article"
                    src={home}
                    width={1205}
                    height={505}
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Home No More
              </h2>
              <p className="text-base leading-relaxed mt-2">
                I was once one of those refugees fleeing the horrors of war.
                What the images couldn’t show—what I shall never forget, for as
                long as I breathe—is the colossal void that existed in our minds
                in the camp.
              </p>
              <p className="inline-flex items-center mt-3">
                Published by{' '}
                <a
                  href="https://studentreview.hks.harvard.edu/home-no-more/#0"
                  target="_blank"
                  className="underline text-blue-500 ml-1"
                >
                  HARVARD KENNEDY SCHOOL
                </a>
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="800"
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
            >
              <div className="rounded-lg h-64 overflow-hidden relative">
                <Link
                  href="https://www.truthdig.com/articles/somali-born-writer-boyah-farah-blasts-trump-ban-on-refugees-from-his-country-transcript/"
                  target="_blank"
                >
                  <Image
                    className="object-cover object-center rounded"
                    alt="Image from truth dig article of a young girl holding a somali flag"
                    src={independence}
                    width={1205}
                    height={505}
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Somali-Born Writer Boyah Farah Blasts Trump Ban on Refugees From
                His Country
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Truthdig Editor in Chief Robert Scheer talks about the
                president's "tribal rhetoric" with author Boyah Farah and
                discusses how Farah uses nonfiction to combat refugee
                stereotypes. Transcript added.
              </p>
              <p className="inline-flex items-center mt-3">
                Published by{' '}
                <a
                  href="https://www.truthdig.com/articles/somali-born-writer-boyah-farah-blasts-trump-ban-on-refugees-from-his-country-transcript/"
                  target="_blank"
                  className="underline text-blue-500 ml-1"
                >
                  TRUTH DIG
                </a>
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="1000"
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
            >
              <div className="rounded-lg h-64 overflow-hidden relative">
                <Link
                  href="https://www.npr.org/2022/09/16/1123112941/q-a-author-boyah-j-farah-reflects-on-being-black-in-america"
                  target="_blank"
                >
                  <Image
                    className="object-cover object-center rounded "
                    alt="Image from npr article of Boyah J Farah"
                    src={npr}
                    width={1205}
                    height={505}
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Q&A: Author Boyah J. Farah reflects on being Black in America
              </h2>
              <p className="text-base leading-relaxed mt-2">
                In his new memoir, America Made Me a Black Man, Farah tells the
                story of what American blackness has meant to him, from his
                childhood in Somalia to his adolescence and early adulthood in
                the Northeast, to the moment as an adult that he decided to
                return to Somalia after decades spent away.
              </p>
              <p className="inline-flex items-center mt-3">
                Published by{' '}
                <a
                  href="https://www.npr.org/2022/09/16/1123112941/q-a-author-boyah-j-farah-reflects-on-being-black-in-america"
                  target="_blank"
                  className="underline text-blue-500 ml-1"
                >
                  NPR
                </a>
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="1000"
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
            >
              <div className="rounded-lg h-64 overflow-hidden relative">
                <Link
                  href="https://www.thesomervilletimes.com/archives/72363"
                  target="_blank"
                >
                  <Image
                    className="object-cover object-center rounded"
                    alt="Image from npr article of Boyah J Farah"
                    src={poem}
                    width={1205}
                    height={505}
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Words Made You.
              </h2>
              <p className="text-base leading-relaxed mt-2">
                "I was introduced to Boyah J. Farah by Somerville poet Kirk
                Etherton at Bunker Hill Community College, where Boyah and I
                both teach. He had quite a story to tell, and I was lucky to
                have him share a poem with us for the LYRICAL. "
              </p>
              <p className="inline-flex items-center mt-3">
                Published by{' '}
                <a
                  href="https://www.thesomervilletimes.com/archives/72363"
                  target="_blank"
                  className="underline text-blue-500 ml-1"
                >
                  LYRICAL SOMERVILLE
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
