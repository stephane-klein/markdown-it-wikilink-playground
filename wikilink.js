import  Plugin from "markdown-it-regexp";

export default () => {
    return Plugin(
        /\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\]/,

        function(match) {
            let label;
            let pagePath;
            if (match[3]) {
                label = match[3];
                pagePath = match[1];
            }
            else {
                label = match[1];
                pagePath = match[1];
            }
            return `<a href="/${pagePath}/">${label}</a>`
        }
    )
}
