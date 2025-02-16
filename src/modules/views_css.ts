const newly_added_css = `
.sidebar-answer h1:hover .anchor .octicon-link:before,.sidebar-answer h2:hover .anchor .octicon-link:before,.sidebar-answer h3:hover .anchor .octicon-link:before,.sidebar-answer h4:hover .anchor .octicon-link:before,.sidebar-answer h5:hover .anchor .octicon-link:before,.sidebar-answer h6:hover .anchor .octicon-link:before {
    width: 16px;
    height: 16px;
    content: " ";
    display: inline-block;
    background-color: currentColor;
    -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
    mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>")
}

.sidebar-answer details,.sidebar-answer figcaption,.sidebar-answer figure {
    display: block
}

.sidebar-answer summary {
    display: list-item
}

.sidebar-answer [hidden] {
    display: none!important
}

.sidebar-answer a {
    background-color: transparent;
    color: var(--color-accent-fg);
    text-decoration: none
}

.sidebar-answer abbr[title] {
    border-bottom: none;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted
}

.sidebar-answer b,.sidebar-answer strong {
    font-weight: var(--base-text-weight-semibold,600)
}

.sidebar-answer dfn {
    font-style: italic
}

.sidebar-answer h1 {
    margin: .67em 0;
    font-weight: var(--base-text-weight-semibold,600);
    padding-bottom: .3em;
    font-size: 2em;
    border-bottom: 1px solid var(--color-border-muted)
}

.sidebar-answer mark {
    background-color: var(--color-attention-subtle);
    color: var(--color-fg-default)
}

.sidebar-answer small {
    font-size: 90%
}

.sidebar-answer sub,.sidebar-answer sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

.sidebar-answer sub {
    bottom: -.25em
}

.sidebar-answer sup {
    top: -.5em
}

.sidebar-answer img {
    border-style: none;
    max-width: 100%;
    box-sizing: content-box;
    background-color: var(--color-canvas-default)
}

.sidebar-answer code,.sidebar-answer kbd,.sidebar-answer pre,.sidebar-answer samp {
    font-family: monospace;
    font-size: 1em
}

.sidebar-answer figure {
    margin: 1em 40px
}

.sidebar-answer hr {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    height: .25em;
    padding: 0;
    margin: 24px 0;
    background-color: var(--color-border-default);
    border: 0
}

.sidebar-answer input {
    font: inherit;
    margin: 0;
    overflow: visible;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit
}

.sidebar-answer [type=button],.sidebar-answer [type=reset],.sidebar-answer [type=submit] {
    -webkit-appearance: button
}

.sidebar-answer [type=checkbox],.sidebar-answer [type=radio] {
    box-sizing: border-box;
    padding: 0
}

.sidebar-answer [type=number]::-webkit-inner-spin-button,.sidebar-answer [type=number]::-webkit-outer-spin-button {
    height: auto
}

.sidebar-answer [type=search]::-webkit-search-cancel-button,.sidebar-answer [type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

.sidebar-answer ::-webkit-input-placeholder {
    color: inherit;
    opacity: .54
}

.sidebar-answer ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

.sidebar-answer a:hover {
    text-decoration: underline
}

.sidebar-answer ::placeholder {
    color: var(--color-fg-subtle);
    opacity: 1
}

.sidebar-answer hr:after,.sidebar-answer hr:before {
    display: table;
    content: ""
}

.sidebar-answer hr:after {
    clear: both
}

.sidebar-answer table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto
}

.sidebar-answer td,.sidebar-answer th {
    padding: 0
}

.sidebar-answer details summary {
    cursor: pointer
}

.sidebar-answer details:not([open])>:not(summary) {
    display: none!important
}

.sidebar-answer [role=button]:focus,.sidebar-answer a:focus,.sidebar-answer input[type=checkbox]:focus,.sidebar-answer input[type=radio]:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none
}

.sidebar-answer [role=button]:focus:not(:focus-visible),.sidebar-answer a:focus:not(:focus-visible),.sidebar-answer input[type=checkbox]:focus:not(:focus-visible),.sidebar-answer input[type=radio]:focus:not(:focus-visible) {
    outline: 1px solid transparent
}

.sidebar-answer [role=button]:focus-visible,.sidebar-answer a:focus-visible,.sidebar-answer input[type=checkbox]:focus-visible,.sidebar-answer input[type=radio]:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none
}

.sidebar-answer a:not([class]):focus,.sidebar-answer a:not([class]):focus-visible,.sidebar-answer input[type=checkbox]:focus,.sidebar-answer input[type=checkbox]:focus-visible,.sidebar-answer input[type=radio]:focus,.sidebar-answer input[type=radio]:focus-visible {
    outline-offset: 0
}

.sidebar-answer kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
    line-height: 10px;
    color: var(--color-fg-default);
    vertical-align: middle;
    background-color: var(--color-canvas-subtle);
    border-bottom-color: var(--color-neutral-muted);
    border: 1px solid var(--color-neutral-muted);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 var(--color-neutral-muted)
}

.sidebar-answer h1,.sidebar-answer h2,.sidebar-answer h3,.sidebar-answer h4,.sidebar-answer h5,.sidebar-answer h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: var(--base-text-weight-semibold,600);
    line-height: 1.25
}

.sidebar-answer h2 {
    padding-bottom: .3em;
    font-size: 1.5em;
    border-bottom: 1px solid var(--color-border-muted)
}

.sidebar-answer h2,.sidebar-answer h3 {
    font-weight: var(--base-text-weight-semibold,600)
}

.sidebar-answer h3 {
    font-size: 1.25em
}

.sidebar-answer h4 {
    font-size: 1em
}

.sidebar-answer h4,.sidebar-answer h5 {
    font-weight: var(--base-text-weight-semibold,600)
}

.sidebar-answer h5 {
    font-size: .875em
}

.sidebar-answer h6 {
    font-weight: var(--base-text-weight-semibold,600);
    font-size: .85em;
    color: var(--color-fg-muted)
}

.sidebar-answer p {
    margin-top: 0;
    margin-bottom: 10px
}

.sidebar-answer blockquote {
    margin: 0;
    padding: 0 1em;
    color: var(--color-fg-muted);
    border-left: .25em solid var(--color-border-default)
}

.sidebar-answer ol,.sidebar-answer ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em
}

.sidebar-answer ol ol,.sidebar-answer ul ol {
    list-style-type: lower-roman
}

.sidebar-answer ol ol ol,.sidebar-answer ol ul ol,.sidebar-answer ul ol ol,.sidebar-answer ul ul ol {
    list-style-type: lower-alpha
}

.sidebar-answer dd {
    margin-left: 0
}

.sidebar-answer code,.sidebar-answer pre,.sidebar-answer samp,.sidebar-answer tt {
    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
    font-size: 12px
}

.sidebar-answer pre {
    margin-top: 0;
    margin-bottom: 0;
    word-wrap: normal
}

.sidebar-answer .octicon {
    display: inline-block;
    overflow: visible!important;
    vertical-align: text-bottom;
    fill: currentColor
}

.sidebar-answer input::-webkit-inner-spin-button,.sidebar-answer input::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none
}

.sidebar-answer:after,.sidebar-answer:before {
    display: table;
    content: ""
}

.sidebar-answer:after {
    clear: both
}

.sidebar-answer>:first-child {
    margin-top: 0!important
}

.sidebar-answer>:last-child {
    margin-bottom: 0!important
}

.sidebar-answer a:not([href]) {
    color: inherit;
    text-decoration: none
}

.sidebar-answer .absent {
    color: var(--color-danger-fg)
}

.sidebar-answer .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1
}

.sidebar-answer .anchor:focus {
    outline: none
}

.sidebar-answer blockquote,.sidebar-answer details,.sidebar-answer dl,.sidebar-answer ol,.sidebar-answer p,.sidebar-answer pre,.sidebar-answer table,.sidebar-answer ul {
    margin-top: 0;
    margin-bottom: 16px
}

.sidebar-answer blockquote>:first-child {
    margin-top: 0
}

.sidebar-answer blockquote>:last-child {
    margin-bottom: 0
}

.sidebar-answer h1 .octicon-link,.sidebar-answer h2 .octicon-link,.sidebar-answer h3 .octicon-link,.sidebar-answer h4 .octicon-link,.sidebar-answer h5 .octicon-link,.sidebar-answer h6 .octicon-link {
    color: var(--color-fg-default);
    vertical-align: middle;
    visibility: hidden
}

.sidebar-answer h1:hover .anchor,.sidebar-answer h2:hover .anchor,.sidebar-answer h3:hover .anchor,.sidebar-answer h4:hover .anchor,.sidebar-answer h5:hover .anchor,.sidebar-answer h6:hover .anchor {
    text-decoration: none
}

.sidebar-answer h1:hover .anchor .octicon-link,.sidebar-answer h2:hover .anchor .octicon-link,.sidebar-answer h3:hover .anchor .octicon-link,.sidebar-answer h4:hover .anchor .octicon-link,.sidebar-answer h5:hover .anchor .octicon-link,.sidebar-answer h6:hover .anchor .octicon-link {
    visibility: visible
}

.sidebar-answer h1 code,.sidebar-answer h1 tt,.sidebar-answer h2 code,.sidebar-answer h2 tt,.sidebar-answer h3 code,.sidebar-answer h3 tt,.sidebar-answer h4 code,.sidebar-answer h4 tt,.sidebar-answer h5 code,.sidebar-answer h5 tt,.sidebar-answer h6 code,.sidebar-answer h6 tt {
    padding: 0 .2em;
    font-size: inherit
}

.sidebar-answer summary h1,.sidebar-answer summary h2,.sidebar-answer summary h3,.sidebar-answer summary h4,.sidebar-answer summary h5,.sidebar-answer summary h6 {
    display: inline-block
}

.sidebar-answer summary h1 .anchor,.sidebar-answer summary h2 .anchor,.sidebar-answer summary h3 .anchor,.sidebar-answer summary h4 .anchor,.sidebar-answer summary h5 .anchor,.sidebar-answer summary h6 .anchor {
    margin-left: -40px
}

.sidebar-answer summary h1,.sidebar-answer summary h2 {
    padding-bottom: 0;
    border-bottom: 0
}

.sidebar-answer ol.no-list,.sidebar-answer ul.no-list {
    padding: 0;
    list-style-type: none
}

.sidebar-answer ol[type=a] {
    list-style-type: lower-alpha
}

.sidebar-answer ol[type=A] {
    list-style-type: upper-alpha
}

.sidebar-answer ol[type=i] {
    list-style-type: lower-roman
}

.sidebar-answer ol[type=I] {
    list-style-type: upper-roman
}

.sidebar-answer div>ol:not([type]),.sidebar-answer ol[type="1"] {
    list-style-type: decimal
}

.sidebar-answer ol ol,.sidebar-answer ol ul,.sidebar-answer ul ol,.sidebar-answer ul ul {
    margin-top: 0;
    margin-bottom: 0
}

.sidebar-answer li>p {
    margin-top: 16px
}

.sidebar-answer li+li {
    margin-top: .25em
}

.sidebar-answer dl {
    padding: 0
}

.sidebar-answer dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: var(--base-text-weight-semibold,600)
}

.sidebar-answer dl dd {
    padding: 0 16px;
    margin-bottom: 16px
}

.sidebar-answer table th {
    font-weight: var(--base-text-weight-semibold,600)
}

.sidebar-answer table td,.sidebar-answer table th {
    padding: 6px 13px;
    border: 1px solid var(--color-border-default)
}

.sidebar-answer table tr {
    background-color: var(--color-canvas-default);
    border-top: 1px solid var(--color-border-muted)
}

.sidebar-answer table tr:nth-child(2n) {
    background-color: var(--color-canvas-subtle)
}

.sidebar-answer table img {
    background-color: transparent
}

.sidebar-answer img[align=right] {
    padding-left: 20px
}

.sidebar-answer img[align=left] {
    padding-right: 20px
}

.sidebar-answer .emoji {
    max-width: none;
    vertical-align: text-top;
    background-color: transparent
}

.sidebar-answer span.frame {
    display: block;
    overflow: hidden
}

.sidebar-answer span.frame>span {
    display: block;
    float: left;
    width: auto;
    padding: 7px;
    margin: 13px 0 0;
    overflow: hidden;
    border: 1px solid var(--color-border-default)
}

.sidebar-answer span.frame span img {
    display: block;
    float: left
}

.sidebar-answer span.frame span span {
    display: block;
    padding: 5px 0 0;
    clear: both;
    color: var(--color-fg-default)
}

.sidebar-answer span.align-center {
    display: block;
    overflow: hidden;
    clear: both
}

.sidebar-answer span.align-center>span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: center
}

.sidebar-answer span.align-center span img {
    margin: 0 auto;
    text-align: center
}

.sidebar-answer span.align-right {
    display: block;
    overflow: hidden;
    clear: both
}

.sidebar-answer span.align-right>span {
    display: block;
    margin: 13px 0 0;
    overflow: hidden;
    text-align: right
}

.sidebar-answer span.align-right span img {
    margin: 0;
    text-align: right
}

.sidebar-answer span.float-left {
    display: block;
    float: left;
    margin-right: 13px;
    overflow: hidden
}

.sidebar-answer span.float-left span {
    margin: 13px 0 0
}

.sidebar-answer span.float-right {
    display: block;
    float: right;
    margin-left: 13px;
    overflow: hidden
}

.sidebar-answer span.float-right>span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: right
}

.sidebar-answer code,.sidebar-answer tt {
    padding: .2em .4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    background-color: var(--color-neutral-muted);
    border-radius: 6px
}

.sidebar-answer code br,.sidebar-answer tt br {
    display: none
}

.sidebar-answer del code {
    text-decoration: inherit
}

.sidebar-answer samp {
    font-size: 85%
}

.sidebar-answer pre code {
    font-size: 100%
}

.sidebar-answer pre>code {
    padding: 0;
    margin: 0;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0
}

.sidebar-answer .highlight {
    margin-bottom: 16px
}

.sidebar-answer .highlight pre {
    margin-bottom: 0;
    word-break: normal
}

.sidebar-answer .highlight pre,.sidebar-answer pre {
    padding: 16px 16px 8px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 6px;
    direction: ltr
}

.sidebar-answer pre code,.sidebar-answer pre tt {
    display: inline-block;
    max-width: 100%;
    padding: 0;
    margin: 0;
    overflow-x: scroll;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0
}

.sidebar-answer .csv-data td,.sidebar-answer .csv-data th {
    padding: 5px;
    overflow: hidden;
    font-size: 12px;
    line-height: 1;
    text-align: left;
    white-space: nowrap
}

.sidebar-answer .csv-data .blob-num {
    padding: 10px 8px 9px;
    text-align: right;
    background: var(--color-canvas-default);
    border: 0
}

.sidebar-answer .csv-data tr {
    border-top: 0
}

.sidebar-answer .csv-data th {
    font-weight: var(--base-text-weight-semibold,600);
    background: var(--color-canvas-subtle);
    border-top: 0
}

.sidebar-answer [data-footnote-ref]:before {
    content: "["
}

.sidebar-answer [data-footnote-ref]:after {
    content: "]"
}

.sidebar-answer .footnotes {
    font-size: 12px;
    color: var(--color-fg-muted);
    border-top: 1px solid var(--color-border-default)
}

.sidebar-answer .footnotes ol {
    padding-left: 16px
}

.sidebar-answer .footnotes ol ul {
    display: inline-block;
    padding-left: 16px;
    margin-top: 16px
}

.sidebar-answer .footnotes li {
    position: relative
}

.sidebar-answer .footnotes li:target:before {
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -24px;
    pointer-events: none;
    content: "";
    border: 2px solid var(--color-accent-emphasis);
    border-radius: 6px
}

.sidebar-answer .footnotes li:target {
    color: var(--color-fg-default)
}

.sidebar-answer .footnotes .data-footnote-backref g-emoji {
    font-family: monospace
}

.sidebar-answer .pl-c {
    color: var(--color-prettylights-syntax-comment)
}

.sidebar-answer .pl-c1,.sidebar-answer .pl-s .pl-v {
    color: var(--color-prettylights-syntax-constant)
}

.sidebar-answer .pl-e,.sidebar-answer .pl-en {
    color: var(--color-prettylights-syntax-entity)
}

.sidebar-answer .pl-s .pl-s1,.sidebar-answer .pl-smi {
    color: var(--color-prettylights-syntax-storage-modifier-import)
}

.sidebar-answer .pl-ent {
    color: var(--color-prettylights-syntax-entity-tag)
}

.sidebar-answer .pl-k {
    color: var(--color-prettylights-syntax-keyword)
}

.sidebar-answer .pl-pds,.sidebar-answer .pl-s,.sidebar-answer .pl-s .pl-pse .pl-s1,.sidebar-answer .pl-sr,.sidebar-answer .pl-sr .pl-cce,.sidebar-answer .pl-sr .pl-sra,.sidebar-answer .pl-sr .pl-sre {
    color: var(--color-prettylights-syntax-string)
}

.sidebar-answer .pl-smw,.sidebar-answer .pl-v {
    color: var(--color-prettylights-syntax-variable)
}

.sidebar-answer .pl-bu {
    color: var(--color-prettylights-syntax-brackethighlighter-unmatched)
}

.sidebar-answer .pl-ii {
    color: var(--color-prettylights-syntax-invalid-illegal-text);
    background-color: var(--color-prettylights-syntax-invalid-illegal-bg)
}

.sidebar-answer .pl-c2 {
    color: var(--color-prettylights-syntax-carriage-return-text);
    background-color: var(--color-prettylights-syntax-carriage-return-bg)
}

.sidebar-answer .pl-sr .pl-cce {
    font-weight: 700;
    color: var(--color-prettylights-syntax-string-regexp)
}

.sidebar-answer .pl-ml {
    color: var(--color-prettylights-syntax-markup-list)
}

.sidebar-answer .pl-mh,.sidebar-answer .pl-mh .pl-en,.sidebar-answer .pl-ms {
    font-weight: 700;
    color: var(--color-prettylights-syntax-markup-heading)
}

.sidebar-answer .pl-mi {
    font-style: italic;
    color: var(--color-prettylights-syntax-markup-italic)
}

.sidebar-answer .pl-mb {
    font-weight: 700;
    color: var(--color-prettylights-syntax-markup-bold)
}

.sidebar-answer .pl-md {
    color: var(--color-prettylights-syntax-markup-deleted-text);
    background-color: var(--color-prettylights-syntax-markup-deleted-bg)
}

.sidebar-answer .pl-mi1 {
    color: var(--color-prettylights-syntax-markup-inserted-text);
    background-color: var(--color-prettylights-syntax-markup-inserted-bg)
}

.sidebar-answer .pl-mc {
    color: var(--color-prettylights-syntax-markup-changed-text);
    background-color: var(--color-prettylights-syntax-markup-changed-bg)
}

.sidebar-answer .pl-mi2 {
    color: var(--color-prettylights-syntax-markup-ignored-text);
    background-color: var(--color-prettylights-syntax-markup-ignored-bg)
}

.sidebar-answer .pl-mdr {
    font-weight: 700;
    color: var(--color-prettylights-syntax-meta-diff-range)
}

.sidebar-answer .pl-ba {
    color: var(--color-prettylights-syntax-brackethighlighter-angle)
}

.sidebar-answer .pl-sg {
    color: var(--color-prettylights-syntax-sublimelinter-gutter-mark)
}

.sidebar-answer .pl-corl {
    text-decoration: underline;
    color: var(--color-prettylights-syntax-constant-other-reference-link)
}

.sidebar-answer g-emoji {
    display: inline-block;
    min-width: 1ch;
    font-family: Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-size: 1em;
    font-style: normal!important;
    font-weight: var(--base-text-weight-normal,400);
    line-height: 1;
    vertical-align: -.075em
}

.sidebar-answer g-emoji img {
    width: 1em;
    height: 1em
}

.sidebar-answer .task-list-item {
    list-style-type: none
}

.sidebar-answer .task-list-item label {
    font-weight: var(--base-text-weight-normal,400)
}

.sidebar-answer .task-list-item.enabled label {
    cursor: pointer
}

.sidebar-answer .task-list-item+.task-list-item {
    margin-top: 4px
}

.sidebar-answer .task-list-item .handle {
    display: none
}

.sidebar-answer .task-list-item-checkbox {
    margin: 0 .2em .25em -1.4em;
    vertical-align: middle
}

.sidebar-answer .contains-task-list:dir(rtl) .task-list-item-checkbox {
    margin: 0 -1.6em .25em .2em
}

.sidebar-answer .contains-task-list {
    position: relative
}

.sidebar-answer .contains-task-list:focus-within .task-list-item-convert-container,.sidebar-answer .contains-task-list:hover .task-list-item-convert-container {
    display: block;
    width: auto;
    height: 24px;
    overflow: visible;
    clip: auto
}

.sidebar-answer ::-webkit-calendar-picker-indicator {
    filter: invert(50%)
}

.sidebar-answer .mermaid {
    border: var(--border-in-light);
    margin-bottom: 10px;
    border-radius: 4px;
    padding: 10px;
    background-color: var(--white)
}

#dmermaid {
    display: none
}

.sidebar-answer {
    /*!
  Theme: Tokyo-night-Dark
  origin: https://github.com/enkia/tokyo-night-vscode-theme
  Description: Original highlight.js style
  Author: (c) Henri Vandersleyen <hvandersleyen@gmail.com>
  License: see project LICENSE
  Touched: 2022
*/
}

.sidebar-answer pre {
    padding: 0
}

.sidebar-answer code,.sidebar-answer pre {
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace
}

.sidebar-answer pre code {
    display: block;
    overflow-x: auto;
    padding: 1em
}

.sidebar-answer code {
    padding: 3px 5px
}

.sidebar-answer .hljs,.sidebar-answer pre {
    background: #1a1b26;
    color: #cbd2ea
}

.sidebar-answer .hljs-comment,.sidebar-answer .hljs-meta {
    color: #565f89
}

.sidebar-answer .hljs-deletion,.sidebar-answer .hljs-doctag,.sidebar-answer .hljs-regexp,.sidebar-answer .hljs-selector-attr,.sidebar-answer .hljs-selector-class,.sidebar-answer .hljs-selector-id,.sidebar-answer .hljs-selector-pseudo,.sidebar-answer .hljs-tag,.sidebar-answer .hljs-template-tag,.sidebar-answer .hljs-variable.language_ {
    color: #f7768e
}

.sidebar-answer .hljs-link,.sidebar-answer .hljs-literal,.sidebar-answer .hljs-number,.sidebar-answer .hljs-params,.sidebar-answer .hljs-template-variable,.sidebar-answer .hljs-type,.sidebar-answer .hljs-variable {
    color: #ff9e64
}

.sidebar-answer .hljs-attribute,.sidebar-answer .hljs-built_in {
    color: #e0af68
}

.sidebar-answer .hljs-keyword,.sidebar-answer .hljs-property,.sidebar-answer .hljs-subst,.sidebar-answer .hljs-title,.sidebar-answer .hljs-title.class_,.sidebar-answer .hljs-title.class_.inherited__,.sidebar-answer .hljs-title.function_ {
    color: #7dcfff
}

.sidebar-answer .hljs-selector-tag {
    color: #73daca
}

.sidebar-answer .hljs-addition,.sidebar-answer .hljs-bullet,.sidebar-answer .hljs-quote,.sidebar-answer .hljs-string,.sidebar-answer .hljs-symbol {
    color: #9ece6a
}

.sidebar-answer .hljs-code,.sidebar-answer .hljs-formula,.sidebar-answer .hljs-section {
    color: #7aa2f7
}

.sidebar-answer .hljs-attr,.sidebar-answer .hljs-char.escape_,.sidebar-answer .hljs-keyword,.sidebar-answer .hljs-name,.sidebar-answer .hljs-operator {
    color: #bb9af7
}

.sidebar-answer .hljs-punctuation {
    color: #c0caf5
}

.sidebar-answer .hljs-emphasis {
    font-style: italic
}

.sidebar-answer .hljs-strong {
    font-weight: 700
}

.sidebar-answer {
    font-family: Noto Sans,SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif;
    box-sizing: border-box;
    width: 95%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .05);
    padding: 10px;
    font-size: 14px;
    line-height: 175%;
    -webkit-user-select: text;
    -moz-user-select: text;
    user-select: text;
    word-break: break-word;
    border: 1px solid #dedede;
    position: relative;
    transition: all .3s ease;
    flex: 1 1;
    overflow: auto;
}
.input-panel {
    position: relative;
    width: 100%;
    padding: 10px 20px 20px;
    box-sizing: border-box;
    border-top: 1px solid #dedede;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .05);
}
.chat-input-panel-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1 1;
    border-radius: 10px;
    border: 1px solid #dedede;
}
.chat-input {
    cursor: text;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #000;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, .03);
    background-color: #fff;
    color: #000;
    font-family: inherit;
    padding: 0.5rem;
    resize: none;
    outline: none;
    box-sizing: border-box;
    min-height: 68px;
}
.chat-input-buttoner {
    cursor: pointer;
    height: 1.5rem;
    padding: 0.3rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    border-radius: 10px;
    background-color: #1d93ab;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
    
@font-face{font-family:KaTeX_AMS;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_AMS-Regular.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_AMS-Regular.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_AMS-Regular.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_AMS-Regular.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_AMS-Regular.ttf") format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Caligraphic-Bold.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Caligraphic-Bold.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Caligraphic-Bold.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Caligraphic-Bold.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Caligraphic-Bold.ttf") format("truetype");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Caligraphic-Regular.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Caligraphic-Regular.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Caligraphic-Regular.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Caligraphic-Regular.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Caligraphic-Regular.ttf") format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Fraktur-Bold.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Fraktur-Bold.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Fraktur-Bold.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Fraktur-Bold.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Fraktur-Bold.ttf") format("truetype");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Fraktur-Regular.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Fraktur-Regular.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Fraktur-Regular.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Fraktur-Regular.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Fraktur-Regular.ttf") format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Main;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Bold.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Bold.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Bold.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Bold.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Bold.ttf") format("truetype");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Main;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Italic.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Italic.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Italic.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Italic.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Italic.ttf") format("truetype");font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Main;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Regular.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Regular.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Regular.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Regular.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Main-Regular.ttf") format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Math;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Math-Italic.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Math-Italic.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Math-Italic.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Math-Italic.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Math-Italic.ttf") format("truetype");font-weight:400;font-style:italic}@font-face{font-family:KaTeX_SansSerif;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_SansSerif-Regular.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_SansSerif-Regular.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_SansSerif-Regular.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_SansSerif-Regular.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_SansSerif-Regular.ttf") format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Script;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Script-Regular.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Script-Regular.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Script-Regular.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Script-Regular.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Script-Regular.ttf") format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size1;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size1-Regular.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size1-Regular.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size1-Regular.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size1-Regular.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size1-Regular.ttf") format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size2;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size2-Regular.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size2-Regular.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size2-Regular.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size2-Regular.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size2-Regular.ttf") format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size3;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size3-Regular.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size3-Regular.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size3-Regular.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size3-Regular.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size3-Regular.ttf") format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size4;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size4-Regular.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size4-Regular.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size4-Regular.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size4-Regular.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Size4-Regular.ttf") format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Typewriter;src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Typewriter-Regular.eot");src:url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Typewriter-Regular.eot#iefix") format("embedded-opentype"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Typewriter-Regular.woff2") format("woff2"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Typewriter-Regular.woff") format("woff"),url("https://cdn.jsdelivr.net/katex/latest/fonts/KaTeX_Typewriter-Regular.ttf") format("truetype");font-weight:400;font-style:normal}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:inline-block;text-align:initial}.katex{font:normal 1.21em KaTeX_Main,Times New Roman,serif;line-height:1.2;white-space:nowrap;text-indent:0;text-rendering:auto}.katex *{-ms-high-contrast-adjust:none!important}.katex .katex-html{display:inline-block}.katex .katex-mathml{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.katex .base{position:relative}.katex .base,.katex .strut{display:inline-block}.katex .mathrm{font-style:normal}.katex .mathit,.katex .textit{font-style:italic}.katex .mathit{font-family:KaTeX_Math}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .amsrm,.katex .mathbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak{font-family:KaTeX_Fraktur}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr{font-family:KaTeX_Script}.katex .mathsf{font-family:KaTeX_SansSerif}.katex .mainit{font-family:KaTeX_Main;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .mord+.mop{margin-left:.16667em}.katex .mord+.mbin{margin-left:.22222em}.katex .mord+.mrel{margin-left:.27778em}.katex .mop+.mop,.katex .mop+.mord,.katex .mord+.minner{margin-left:.16667em}.katex .mop+.mrel{margin-left:.27778em}.katex .mop+.minner{margin-left:.16667em}.katex .mbin+.minner,.katex .mbin+.mop,.katex .mbin+.mopen,.katex .mbin+.mord{margin-left:.22222em}.katex .mrel+.minner,.katex .mrel+.mop,.katex .mrel+.mopen,.katex .mrel+.mord{margin-left:.27778em}.katex .mclose+.mop{margin-left:.16667em}.katex .mclose+.mbin{margin-left:.22222em}.katex .mclose+.mrel{margin-left:.27778em}.katex .mclose+.minner,.katex .minner+.mop,.katex .minner+.mord,.katex .mpunct+.mclose,.katex .mpunct+.minner,.katex .mpunct+.mop,.katex .mpunct+.mopen,.katex .mpunct+.mord,.katex .mpunct+.mpunct,.katex .mpunct+.mrel{margin-left:.16667em}.katex .minner+.mbin{margin-left:.22222em}.katex .minner+.mrel{margin-left:.27778em}.katex .minner+.minner,.katex .minner+.mopen,.katex .minner+.mpunct{margin-left:.16667em}.katex .mbin.mtight,.katex .mclose.mtight,.katex .minner.mtight,.katex .mop.mtight,.katex .mopen.mtight,.katex .mord.mtight,.katex .mpunct.mtight,.katex .mrel.mtight{margin-left:0}.katex .mclose+.mop.mtight,.katex .minner+.mop.mtight,.katex .mop+.mop.mtight,.katex .mop+.mord.mtight,.katex .mord+.mop.mtight{margin-left:.16667em}.katex .vlist-t{display:inline-table;table-layout:fixed}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;vertical-align:bottom;position:relative}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;vertical-align:bottom;font-size:1px;width:2px}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{display:inline-block;width:100%}@media screen{.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .underline .underline-line{min-height:1px}}@media screen and (-webkit-min-device-pixel-ratio:2),screen and (min-resolution:192dpi){.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .underline .underline-line{min-height:.5px}}.katex .mspace{display:inline-block}.katex .mspace.negativethinspace{margin-left:-.16667em}.katex .mspace.thinspace{width:.16667em}.katex .mspace.negativemediumspace{margin-left:-.22222em}.katex .mspace.mediumspace{width:.22222em}.katex .mspace.thickspace{width:.27778em}.katex .mspace.sixmuspace{width:.333333em}.katex .mspace.eightmuspace{width:.444444em}.katex .mspace.enspace{width:.5em}.katex .mspace.twelvemuspace{width:.666667em}.katex .mspace.quad{width:1em}.katex .mspace.qquad{width:2em}.katex .clap,.katex .llap,.katex .rlap{width:0;position:relative}.katex .clap>.inner,.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .clap>.fix,.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .clap>.inner,.katex .rlap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .katex-logo .a{font-size:.75em;margin-left:-.32em;position:relative;top:-.2em}.katex .katex-logo .t{margin-left:-.23em}.katex .katex-logo .e{margin-left:-.1667em;position:relative;top:.2155em}.katex .katex-logo .x{margin-left:-.125em}.katex .rule{display:inline-block;border:0 solid;position:relative}.katex .overline .overline-line,.katex .underline .underline-line{display:inline-block;width:100%}.katex .sqrt>.root{margin-left:.27777778em;margin-right:-.55555556em}.katex .fontsize-ensurer,.katex .sizing{display:inline-block}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.2em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:3.456em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.148em}.katex .fontsize-ensurer.reset-size1.size11,.katex .sizing.reset-size1.size11{font-size:4.976em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.83333333em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.16666667em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.5em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.66666667em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.4em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.88em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.45666667em}.katex .fontsize-ensurer.reset-size2.size11,.katex .sizing.reset-size2.size11{font-size:4.14666667em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.71428571em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.85714286em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.14285714em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.28571429em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.42857143em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.71428571em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.05714286em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.46857143em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:2.96285714em}.katex .fontsize-ensurer.reset-size3.size11,.katex .sizing.reset-size3.size11{font-size:3.55428571em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.75em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.875em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.125em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.25em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.5em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.8em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.16em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.5925em}.katex .fontsize-ensurer.reset-size4.size11,.katex .sizing.reset-size4.size11{font-size:3.11em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.55555556em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.66666667em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.77777778em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.88888889em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.11111111em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.6em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:1.92em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.30444444em}.katex .fontsize-ensurer.reset-size5.size11,.katex .sizing.reset-size5.size11{font-size:2.76444444em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.6em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.7em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.8em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.9em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.728em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.074em}.katex .fontsize-ensurer.reset-size6.size11,.katex .sizing.reset-size6.size11{font-size:2.488em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.41666667em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.5em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.58333333em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.66666667em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.75em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.83333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.2em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.44em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.72833333em}.katex .fontsize-ensurer.reset-size7.size11,.katex .sizing.reset-size7.size11{font-size:2.07333333em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.34722222em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.41666667em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.48611111em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.55555556em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.625em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.69444444em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.83333333em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.2em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.44027778em}.katex .fontsize-ensurer.reset-size8.size11,.katex .sizing.reset-size8.size11{font-size:1.72777778em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.28935185em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.34722222em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.40509259em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.46296296em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.52083333em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.5787037em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.69444444em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.83333333em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.20023148em}.katex .fontsize-ensurer.reset-size9.size11,.katex .sizing.reset-size9.size11{font-size:1.43981481em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.24108004em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.28929605em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.33751205em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.38572806em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.43394407em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.48216008em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.57859209em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.69431051em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.83317261em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .fontsize-ensurer.reset-size10.size11,.katex .sizing.reset-size10.size11{font-size:1.19961427em}.katex .fontsize-ensurer.reset-size11.size1,.katex .sizing.reset-size11.size1{font-size:.20096463em}.katex .fontsize-ensurer.reset-size11.size2,.katex .sizing.reset-size11.size2{font-size:.24115756em}.katex .fontsize-ensurer.reset-size11.size3,.katex .sizing.reset-size11.size3{font-size:.28135048em}.katex .fontsize-ensurer.reset-size11.size4,.katex .sizing.reset-size11.size4{font-size:.32154341em}.katex .fontsize-ensurer.reset-size11.size5,.katex .sizing.reset-size11.size5{font-size:.36173633em}.katex .fontsize-ensurer.reset-size11.size6,.katex .sizing.reset-size11.size6{font-size:.40192926em}.katex .fontsize-ensurer.reset-size11.size7,.katex .sizing.reset-size11.size7{font-size:.48231511em}.katex .fontsize-ensurer.reset-size11.size8,.katex .sizing.reset-size11.size8{font-size:.57877814em}.katex .fontsize-ensurer.reset-size11.size9,.katex .sizing.reset-size11.size9{font-size:.69453376em}.katex .fontsize-ensurer.reset-size11.size10,.katex .sizing.reset-size11.size10{font-size:.83360129em}.katex .fontsize-ensurer.reset-size11.size11,.katex .sizing.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .delimcenter,.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .accent>.vlist-t,.katex .op-limits>.vlist-t{text-align:center}.katex .accent .accent-body>span{width:0}.katex .accent .accent-body.accent-vec>span{position:relative;left:.326em}.katex .accent .accent-body.accent-hungarian>span{position:relative;left:.25em}.katex .mtable .vertical-separator{display:inline-block;margin:0 -.025em;width:.05em}@media screen{.katex .mtable .vertical-separator{min-width:1px}}@media screen and (-webkit-min-device-pixel-ratio:2),screen and (min-resolution:192dpi){.katex .mtable .vertical-separator{min-width:.5px}}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{display:block;position:absolute;width:100%}.katex svg path{fill:currentColor}.katex svg line{stroke:currentColor}.katex .stretchy{width:100%;display:block}.katex .stretchy:after,.katex .stretchy:before{content:""}.katex .hide-tail{width:100%;position:relative;overflow:hidden}.katex .halfarrow-left{position:absolute;left:0;width:50.1%;overflow:hidden}.katex .halfarrow-right{position:absolute;right:0;width:50%;overflow:hidden}.katex .brace-left{position:absolute;left:0;width:25.1%;overflow:hidden}.katex .brace-center{position:absolute;left:25%;width:50%;overflow:hidden}.katex .brace-right{position:absolute;right:0;width:25.1%;overflow:hidden}.katex .x-arrow-pad{padding:0 .5em}.katex .mover,.katex .munder,.katex .x-arrow{text-align:center}.katex .boxpad{padding:0 .3em}.katex .fbox{box-sizing:border-box;border:.04em solid #000}.katex .fcolorbox{box-sizing:border-box;border:.04em solid}.katex .cancel-pad{padding:0 .2em}.katex .cancel-lap+.mbin,.katex .cancel-lap+.mord,.katex .cancel-lap+.msupsub,.katex .mbin+.cancel-lap,.katex .mord+.cancel-lap{margin-left:-.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:.08em}

`;


export { newly_added_css };