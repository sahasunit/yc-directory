import SearchForm from "@/components/SearchForm";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { Star } from "lucide-react";
import Image from "next/image";

//The searchParams are found in the URL, for example: /?query=react
export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }>}) {
  const query = (await searchParams).query; //this gets the query from URL
  const params =  {search: query || null}; // this is used to pass the query to the Sanity fetch function

  const { data: posts } = await sanityFetch({query: STARTUPS_QUERY, params}); //this fetches the startups from Sanity based on the query

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your Startup, <br/> Connect with Entrepreneurs</h1>

        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on pitches, and Get Noticed in Virtual Competitions.
        </p> 

        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">

          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
              <p className="no-results"> No Startups found</p>
            )
          }

        </ul>
      </section>
      <SanityLive /> //this is used to enable live updates for the startups whenever there are changes in the Sanity CMS (database)
    </>
  );
}
