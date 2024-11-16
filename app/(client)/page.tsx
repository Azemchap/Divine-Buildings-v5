import PlanItem from "@/components/PlanItem";
import Title from "@/components/Title";
import { client } from "@/sanity/lib/client";
import { PlanInterface } from '@/utils/interface';
import Hero from "../../components/Hero";
import Showcase from "../../components/Showcase";
import VideoItem from "../../components/VideoItem";


async function getPlans() {
  const query =
    ` *[_type == "plan"] {
            name,
            slug,
            description,
            category[]->{
            _id,
            slug,
            name
            },
            price,
            rating,
            numReview,
            createdAt,
            images,
            body,
        }`

  const data = await client.fetch(query)
  return data
}

export const revalidate = 60;


export default async function Homepage() {
  const plans: PlanInterface[] = await getPlans()
  // const { videos } = video;


  return (
    <main className="">
      <section className="container mx-auto p-4">
        <Hero />
        <Showcase />

        {/* <div className="container p-4 m-auto my-24">
          <h2 className="text-3xl mb-16 font-extrabold text-gray-800 text-center">Recent Renderings</h2>
          <div className="my-6 grid lg:grid-cols-2 2xl:grid-cols-3  gap-4">
            {videos.slice(-3).map((video, index) => (
              <VideoItem key={index} video={video} />
            ))}
          </div>
        </div> */}


        <Title title="Top House plans" />
        <section className="grid gap-y-12 sm:grid-cols-2 xl:grid-cols-4  sm:gap-x-6 ">
          {plans?.length > 0 && plans.map((plan, index) => (
            <div key={index}>
              <PlanItem plan={plan} />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
