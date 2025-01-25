import slugify from "@sindresorhus/slugify";
import markdown from "markdown-it";
import markdownItRules from "@paulrobertlloyd/markdown-it-rules";
import markdownItAbbr from "markdown-it-abbr";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttribution from "markdown-it-attribution";
import markdownItAttrs from "markdown-it-attrs";
import markdownItBracketedSpans from "markdown-it-bracketed-spans";
import markdownItDeflist from "markdown-it-deflist";
import markdownItFootnote from "markdown-it-footnote";
import markdownItHandle from "markdown-it-handle";
import markdownItImageFigures from "markdown-it-image-figures";

export const markdownParser = (() => {
  const options = {
    html: true,
    breaks: true,
    typographer: true,
  };

  const plugins = [
    markdownItRules,
    markdownItAbbr,
    [
      markdownItAnchor,
      {
        permalink: false,
        tabIndex: false,
        slugify: (string) => slugify(string, { separator: "_" }),
      },
    ],
    [
      markdownItAttribution,
      {
        classNameContainer: false,
        classNameAttribution: false,
      },
    ],
    markdownItAttrs,
    markdownItBracketedSpans,
    markdownItDeflist,
    markdownItFootnote,
    markdownItHandle,
    [
      markdownItImageFigures,
      {
        figcaption: true,
      },
    ],
  ];

  const parser = markdown(options);

  if (plugins) {
    for (const plugin of plugins) {
      if (Array.isArray(plugin)) {
        // Allow array of options to be passed.
        parser.use(...plugin);
      } else {
        parser.use(plugin);
      }
    }
  }

  parser.renderer.rules.footnote_caption = (tokens, index) => {
    let n = Number(tokens[index].meta.id + 1).toString();

    if (tokens[index].meta.subId > 0) {
      n += ":" + tokens[index].meta.subId;
    }

    return n;
  };

  parser.renderer.rules.footnote_block_open = () =>
    '<section id="footnotes" aria-label="footnotes">\n<ol class="footnotes">\n';

  parser.renderer.rules.footnote_block_close = () => "</ol>\n</section>\n";

  return parser;
})();
