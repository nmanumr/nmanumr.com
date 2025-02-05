import humanizeDuration from "humanize-duration";

export const df = new Intl.DateTimeFormat(undefined, {
  month: "short",
  year: "numeric",
});

export const shortEnglishHumanizer = humanizeDuration.humanizer({
  language: "shortEn",
  conjunction: "  ",
  languages: {
    shortEn: {
      y: () => "yr",
      mo: () => "mo",
      w: () => "w",
      d: () => "d",
      h: () => "h",
      m: () => "m",
      s: () => "s",
      ms: () => "ms",
    },
  },
});
