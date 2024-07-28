#!/usr/bin/env node
import MarkdownIt from "markdown-it";
import WikiLinkPlugin from "./wikilink.js";

const md = new MarkdownIt()
md.use(WikiLinkPlugin())
console.log(
    md.render(`

# Hello

Paragraph [[Foobar]].

[[Test 1]].

[[Test 1|With label]].
`)
);
