export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "611a85d52b1c6800902dae21",
                  title: "Sanity Studio",
                  name: "ex-blog-sanity-gatsby-studio",
                  apiId: "5f9bbf85-770e-48c9-90af-e51706b8c63d",
                },
                {
                  buildHookId: "611a85d560696300caa84f01",
                  title: "Blog Website",
                  name: "ex-blog-sanity-gatsby",
                  apiId: "79cd5912-c62a-4127-9e90-789360899c06",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/pjhpoi66/ex-blog-sanity-gatsby",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://ex-blog-sanity-gatsby.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
