export const paths = {
  home: () => `/`,
  topics: (slug: string) => `/topics/${slug}`,
  posts: {
    create: (slug: string) => `/topics/${slug}/posts/new`,
    show: (slug: string, postId: string) => `/topics/${slug}/posts/${postId}`
  }
}