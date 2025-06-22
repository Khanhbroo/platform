import SearchForm from "@/components/search-form";
import StartupCard from "@/components/startup-card";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Khanhbroo",
      },
      _id: 1,
      description: "This is the description.",
      image:
        "https://i.pinimg.com/736x/9f/81/55/9f815510af556d8d0af1850aa02681f2.jpg",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Khanhbroo",
      },
      _id: 2,
      description: "This is the description.",
      image:
        "https://i.pinimg.com/736x/9f/81/55/9f815510af556d8d0af1850aa02681f2.jpg",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Khanhbroo",
      },
      _id: 3,
      description: "This is the description.",
      image:
        "https://i.pinimg.com/736x/9f/81/55/9f815510af556d8d0af1850aa02681f2.jpg",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Khanhbroo",
      },
      _id: 4,
      description: "This is the description.",
      image:
        "https://i.pinimg.com/736x/9f/81/55/9f815510af556d8d0af1850aa02681f2.jpg",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Khanhbroo",
      },
      _id: 5,
      description: "This is the description.",
      image:
        "https://i.pinimg.com/736x/9f/81/55/9f815510af556d8d0af1850aa02681f2.jpg",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Khanhbroo",
      },
      _id: 6,
      description: "This is the description.",
      image:
        "https://i.pinimg.com/736x/9f/81/55/9f815510af556d8d0af1850aa02681f2.jpg",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Khanhbroo",
      },
      _id: 7,
      description: "This is the description.",
      image:
        "https://i.pinimg.com/736x/9f/81/55/9f815510af556d8d0af1850aa02681f2.jpg",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Khanhbroo",
      },
      _id: 8,
      description: "This is the description.",
      image:
        "https://i.pinimg.com/736x/9f/81/55/9f815510af556d8d0af1850aa02681f2.jpg",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Khanhbroo",
      },
      _id: 9,
      description: "This is the description.",
      image:
        "https://i.pinimg.com/736x/9f/81/55/9f815510af556d8d0af1850aa02681f2.jpg",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Khanhbroo",
      },
      _id: 10,
      description: "This is the description.",
      image:
        "https://i.pinimg.com/736x/9f/81/55/9f815510af556d8d0af1850aa02681f2.jpg",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Khanhbroo",
      },
      _id: 11,
      description: "This is the description.",
      image:
        "https://i.pinimg.com/736x/9f/81/55/9f815510af556d8d0af1850aa02681f2.jpg",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startup, <br />
          Connect With Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
