import axios from "axios";

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      "https://blogpoststomn321.azurewebsites.net/api/posts"
    );
    return [
      {
        path: "/",
        component: "src/containers/Home"
      },
      {
        path: "/about",
        component: "src/containers/About"
      },
      {
        path: "/blog",
        component: "src/containers/Blog",
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: "src/containers/Post",
          getData: () => ({
            post
          })
        }))
      },
      {
        path: "/contact",
        component: "src/containers/Contact"
      },
      {
        path: "/resume",
        component: "src/containers/Resume"
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  }
};
