import Link from 'next/link';
import Image from 'next/image';
import book from '../../public/images/black.jpg';
import boyah from '../../public/images/profile.jpg';
import abaadi from '../../public/images/school.jpg';

export default function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex justify-center items-center h-64">
              <div
                data-aos="fade-down"
                data-aos-delay="0"
                className="rounded-lg overflow-hidden object-cover"
              >
                <Image alt="content" src={boyah} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div
                data-aos="fade-down"
                data-aos-delay="0"
                className="sm:w-1/3 text-center sm:pr-8 sm:py-8"
              >
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Boyah J Farah
                  </h2>

                  <div className="w-12 h-1 bg-neutral rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    War had circumcised my boyhood self, but I am now all about
                    peace & writing & uplifting humans. My memoir America Made
                    Me a Black Man 9/06/22 from HarperCollins America Made Me A
                    Black Man is NAACP Image Award Nominee · Winner of Black
                    Authors Matter TV Awards · NPR's Best Book and many more.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
              >
                <p className="leading-relaxed text-center text-base mb-4">
                  Boyah J. Farah’s writing has been featured in The Guardian,
                  Harvard Transition, Scheer Intelligence at KCRW, Grub Daily
                  and Truthdig. He is the winner of Salon‘s best essay of 2017.
                  His essays have also appeared in Harvard’s Kennedy School
                  Review, Pangyrus magazine, and The Huffington Post. A Judy
                  Layzer Fellow, he took the Memoir Incubator at GrubStreet
                  Creative Writing. He has appeared on NPR, KCRW, WGBH and at
                  Boston College, Belmont Hill school, the Museum of Fine Arts,
                  the Boston Book Festival, the Boston Poetry Festival, Umass
                  Boston, Facing History and Ourselves and many other
                  institutions and organizations. Boyah has a master degree and
                  he, in fact, is a publicist’s dream.
                </p>

                <div
                  data-aos="fade-right"
                  data-aos-delay="600"
                  className="flex flex-col sm:flex-row sm:items-start max-w-2xl mx-auto p-4"
                >
                  <Image
                    src={abaadi}
                    alt="Placeholder image"
                    width={80}
                    height={80}
                    className="w-full sm:w-1/3 h-auto mb-4 sm:mb-0 sm:mr-4 rounded-lg"
                  />
                  <p className="text-base text-pretty leading-tight italic">
                    Recently, he founded the Abaadi School in Garowe, Somalia,
                    which offers instruction in English, Math and Science to
                    boys and girls ages 13-24. The school is expanding rapidly
                    and has attracted some interest locally.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section
            data-aos="fade-down"
            data-aos-delay="800"
            className="text-gray-600 body-font overflow-hidden"
          >
            <div className="container px-5 py-10 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <Image
                  src={book}
                  alt="Book America Made me a black man"
                  width={400}
                  height={400}
                  className="lg:w-1/2 w-full lg:h-auto h-64 md:object-cover object-contain object-center rounded"
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest mb-3">
                    NAACP Image Award Nominee · NPR Best Book of 2022
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">
                    America Made Me a Black Man
                  </h1>
                  <span className="italic font-semibold">
                    A searing memoir of American racism from a Somalian-American
                    who survived hardships in his birth country only to
                    experience firsthand the dehumanization of Blacks in his
                    adopted land, the United States.
                  </span>
                  <p className="leading-relaxed mt-3">
                    “No one told me about America.” Born in Somalia and raised
                    in a valley among nomads, Boyah Farah grew up with a code of
                    male bravado that helped him survive deprivation, disease,
                    and civil war. Arriving in America, he believed that the
                    code that had saved him would help him succeed in this new
                    country. But instead of safety and freedom, Boyah found
                    systemic racism, police brutality, and intense prejudice in
                    all areas of life, including the workplace. He learned
                    firsthand not only what it meant to be an African in
                    America, but what it means to be African American. The code
                    of masculinity that shaped generations of men in his family
                    could not prepare Farah for the painful realities of life in
                    the United States. Lyrical yet unsparing, America Made Me a
                    Black Man is the first book-length examination of American
                    racism from an African outsider’s perspective. With a
                    singular poetic voice brimming with imagery, Boyah Farah
                    challenges us to face difficult truths about the destructive
                    forces that threaten Black lives. By affirming that there is
                    a “melancholy redemption in possessing a Black body in
                    America,” he also attempts to heal a fracture in Black men’s
                    identity in this unforgettable book.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <Link
            href="/writings"
            className="mt-7 text-neutral font-semibold underline inline-flex items-center justify-center"
          >
            Writings
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
