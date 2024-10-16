export const getData = async (url: string) => {
  const res = await fetch(url, {
    //cache: "force-cache", //secara default nextjs akan membuat cache data,
    cache: "no-store", //tidak membuat cache data
    //next: {
    //tags: ["products"], ///tag untuk menandai data yang di cache
    //revalidate: 30 //cache data akan di refresh setiap 30 detik
    //},
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
