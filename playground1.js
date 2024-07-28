#!/usr/bin/env node
import MarkdownIt from "markdown-it";

const md = new MarkdownIt()
console.log(
    md.render(`

# Hello

Paragraph [[Foobar]].

[[Test 1]].

`)
);
