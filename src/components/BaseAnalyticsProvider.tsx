import { analytics } from "@yext/analytics";

export const baseAnalyticsProvider = analytics({
    key: YEXT_PUBLIC_API_KEY,
    env: "SANDBOX"
  }).with({
    action: "WEBSITE",
    destinationUrl: "https://www.turtleheadtacos.com",
    locale: "en",
    sites: {
      siteUid: 157344,
      template: "turtlehead-tacos"
    }
    }
  )