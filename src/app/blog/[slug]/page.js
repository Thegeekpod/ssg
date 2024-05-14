import NotFound from "@/app/not-found";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  try {
    const posts = await fetch('http://localhost:3000/demo.json').then((res) => res.json());
    console.log("Fetched posts:", posts);
    
    return posts.products.map((post) => ({
      slug: post.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array if data is not found
  }
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }) {
  const { slug } = params;

  // Check if slug exists
  if (!slug) {
    // Return a "not-found" page component
    return <NotFound />;
  }

  return (
    <>{slug}</>
  );
}

