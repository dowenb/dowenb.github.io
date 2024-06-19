// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var clientId = process.env.TINA_PUBLIC_CLIENT_ID || null;
var token = process.env.TINA_TOKEN || null;
var config_default = defineConfig({
  branch,
  token,
  // generated on app.tina.io,
  clientId,
  // generated on app.tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "./"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "./"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `_draft_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}-${values?.title?.toLowerCase().replace(/ /g, "-")}`;
            }
          }
        },
        fields: [
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
            options: [
              {
                value: "post",
                label: "Post"
              }
            ]
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date"
          },
          {
            name: "draft",
            label: "Draft",
            type: "boolean",
            required: true,
            description: "If this is checked the post will not be published"
          },
          {
            type: "image",
            name: "image",
            label: "Hero Image"
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            options: [
              {
                value: "About ben",
                label: "About Ben"
              },
              {
                value: "Announcement",
                label: "Announcement"
              },
              {
                value: "Community",
                label: "Community"
              },
              {
                value: "Conferences",
                label: "Conferences"
              },
              {
                value: "How to",
                label: "How to"
              },
              {
                value: "Quality",
                label: "Quality"
              },
              {
                value: "Tester of The Day",
                label: "Tester of The Day"
              },
              {
                value: "Testing",
                label: "Testing"
              },
              {
                value: "Testing for Developers",
                label: "Testing for Developers"
              }
            ]
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
