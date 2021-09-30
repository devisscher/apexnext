import { NextApiResponse, NextApiRequest } from 'next';

require('isomorphic-fetch');
// https://www.instagram.com/graphql/query/?query_hash=8c2a529969ee035a5063f2fc8602a0fd&variables=%7B%22id%22%3A%2241628390609%22%2C%22first%22%3A12%2C%22after%22%3A%22QVFEVTZhS2c4YU1wRkJRRF9aOWFtbHRLOTFkN0xMem44Nlh1dXh4aHlmTzlCU0NvZ29POHVhRmxlYjZHeElfVmY0VWs3UkxWV2ZJbG1fSWtwZVNsNW85ZA%3D%3D%22%7D
const url = `https://www.instagram.com/graphql/query/?query_hash=8c2a529969ee035a5063f2fc8602a0fd&variables={"id":"41628390609","first":8}`;

const cache = {
  lastFetch: 0,
  posts: [],
};

function slimUpPosts(response: NextApiResponse) {
  // @ts-ignore
  return response.data.user.edge_owner_to_timeline_media.edges.map((edge) => ({
    biggie: edge.node.thumbnail_src,
    thumbnail: edge.node.thumbnail_resources[2].src,
    url: `https://instagram.com/p/${edge.node.shortcode}`,
    caption:
      edge.node.edge_media_to_caption.edges.length > 0
        ? edge.node.edge_media_to_caption.edges[0].node.text
        : null,
    id: edge.node.id,
  }));
}

async function getPosts() {
  // first see if we have a cache in 30 mins
  const timeSinceLastFetch = Date.now() - cache.lastFetch;
  if (timeSinceLastFetch <= 1800000) {
    return cache.posts;
  }
  const data = await fetch(url).then((res) => res.json());
  const posts = slimUpPosts(data);
  // const posts = data;
  cache.lastFetch = Date.now();
  cache.posts = posts;
  return posts;
}

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const posts = await getPosts();
  res.status(200).json({ body: JSON.stringify(posts) });
}
