function tabletodiv() {
    $(_0x50a1[6])[_0x50a1[5]]({
        scrollTop: $($(_0x50a1[25]))[_0x50a1[2]]()[_0x50a1[1]] - 10
    }, 500),
    undotext = tinymce[_0x50a1[55]](_0x50a1[54])[_0x50a1[53]](),
    text = undotext,
    torolTagbanKettoKozt(_0x50a1[56], _0x50a1[57]),
    torolTagbanKettoKozt(_0x50a1[58], _0x50a1[57]),
    helyettesit(_0x50a1[59], _0x50a1[60]),
    torolTagbanKettoKozt(_0x50a1[61], _0x50a1[57]),
    torolTagbanKettoKozt(_0x50a1[62], _0x50a1[57]),
    torolTagbanKettoKozt(_0x50a1[63], _0x50a1[57]),
    torolTagbanKettoKozt(_0x50a1[64], _0x50a1[57]),
    torolTagbanKettoKozt(_0x50a1[65], _0x50a1[57]),
    helyettesit(_0x50a1[66], _0x50a1[67]),
    helyettesit(_0x50a1[68], _0x50a1[69]),
    helyettesit(_0x50a1[70], _0x50a1[71]),
    helyettesit(_0x50a1[72], _0x50a1[73]),
    helyettesit(_0x50a1[74], _0x50a1[75]),
    helyettesit(_0x50a1[76], _0x50a1[77]),
    helyettesit(_0x50a1[78], _0x50a1[79]),
    helyettesit(_0x50a1[80], _0x50a1[79]),
    helyettesit(_0x50a1[81], _0x50a1[79]),
    helyettesit(_0x50a1[82], _0x50a1[79]),
    helyettesit(_0x50a1[83], _0x50a1[79]),
    helyettesit(_0x50a1[84], _0x50a1[79]),
    helyettesit(_0x50a1[85], _0x50a1[79]),
    sourceEditorFricc[_0x50a1[19]](text),
    tinyMCE[_0x50a1[23]][_0x50a1[22]](text)
}
function tipusvaltozas() {
    tabletype[_0x50a1[86]] == _0x50a1[87] ? $(_0x50a1[17])[_0x50a1[28]](_0x50a1[15]) : $(_0x50a1[17])[_0x50a1[16]](_0x50a1[15])
}
function createTable(a, x) {
    if (a > 0) {
        $(_0x50a1[6])[_0x50a1[5]]({
            scrollTop: $($(_0x50a1[46]))[_0x50a1[2]]()[_0x50a1[1]] - 10
        }, 500);
        var e, _, t = _0x50a1[0];
        if (tabletype[_0x50a1[86]] == _0x50a1[87]) {
            for (t = _0x50a1[88],
            tablewidth[_0x50a1[86]] > 0 && (t += _0x50a1[89],
            tablewidth[_0x50a1[86]] > 0 && (t += _0x50a1[90] + tablewidth[_0x50a1[86]],
            1 == tablewidthunit[_0x50a1[86]] ? t += _0x50a1[91] : t += _0x50a1[92]),
            t += _0x50a1[93]),
            tableborder[_0x50a1[86]] > 0 && (t += _0x50a1[94] + tableborder[_0x50a1[86]] + _0x50a1[95]),
            tablecellpadding[_0x50a1[86]] > 0 && (t += _0x50a1[96] + tablecellpadding[_0x50a1[86]] + _0x50a1[95]),
            t == _0x50a1[88] && (t = _0x50a1[56]),
            t += _0x50a1[97],
            e = 0; e < x; e++) {
                for (t += _0x50a1[98],
                _ = 0; _ < a; _++)
                    t += _0x50a1[99];
                t += _0x50a1[100]
            }
            t += _0x50a1[101],
            styleEditorFricc[_0x50a1[19]](_0x50a1[0])
        } else {
            for (t = _0x50a1[102],
            (tablewidth[_0x50a1[86]] > 0 || 0 != tableborder[_0x50a1[86]]) && (t += _0x50a1[89],
            tablewidth[_0x50a1[86]] > 0 && (t += _0x50a1[90] + tablewidth[_0x50a1[86]],
            1 == tablewidthunit[_0x50a1[86]] ? t += _0x50a1[91] : t += _0x50a1[92]),
            tableborder[_0x50a1[86]] > 0 && (t += _0x50a1[103] + tableborder[_0x50a1[86]] + _0x50a1[104]),
            t += _0x50a1[93]),
            t == _0x50a1[102] && (t = _0x50a1[105]),
            t += _0x50a1[106],
            e = 0; e < x; e++) {
                for (t += _0x50a1[107],
                _ = 0; _ < a; _++)
                    t += _0x50a1[108];
                t += _0x50a1[109]
            }
            t += _0x50a1[110]
        }
        updateLeft(),
        sourceEditorFricc[_0x50a1[19]](t);
        var r = _0x50a1[18];
        styleEditorFricc[_0x50a1[19]](r)
    }
}
function helyettesit(a, x) {
    var e = text
      , _ = 0
      , t = 0;
    do {
        _ = 0,
        (e = text[_0x50a1[111]](a, x)) == text ? _ = 1 : t++,
        text = e
    } while (0 == _);
    return t
}
function torolTagbanKettoKozt(a, x) {
    hossz = text[_0x50a1[112]];
    for (var e = a[_0x50a1[112]], _ = x[_0x50a1[112]], t = text[_0x50a1[113]](_0x50a1[0]), r = a[_0x50a1[113]](_0x50a1[0]), i = x[_0x50a1[113]](_0x50a1[0]), o = 0, n = new Array(_0x50a1[0]), l = 1, s = 0, d = 0, c = 0, u = 0, p = 0; s < hossz; ) {
        if (t[s] == _0x50a1[114] && (o = 1),
        t[s] == _0x50a1[57] && (o = 0),
        1 == o) {
            for (u = 1,
            c = 0; c < e; c++)
                r[c] != t[s + c] && (u = 0);
            if (1 == u)
                for (p++,
                l = -999,
                s += e,
                c = 0; c < e; c++)
                    n[d] = r[c],
                    d++
        }
        for (u = 1,
        c = 0; c < _; c++)
            i[c] != t[s + c] && (u = 0);
        1 == u && (l = 0),
        -999 != l && l++,
        l > 0 && (n[d] = t[s],
        d++),
        s++
    }
    return text = n[_0x50a1[115]](_0x50a1[0]),
    p
}
function elkur() {
    var a = [_0x50a1[116], _0x50a1[117], _0x50a1[118], _0x50a1[0], _0x50a1[19], _0x50a1[22], _0x50a1[23]];
    -1 == String(document[a[2]])[a[1]](a[0]) && (sourceEditorFricc[a[4]](a[3]),
    tinyMCE[a[6]][a[5]](a[3]))
}
function updateRight() {
    0 == indentpressed && sourceEditorFricc[_0x50a1[19]](tinymce[_0x50a1[55]](_0x50a1[54])[_0x50a1[53]]()),
    elkur()
}
function updateLeft() {
    0 == wysiwygActive && tinyMCE[_0x50a1[23]][_0x50a1[22]](sourceEditorFricc[_0x50a1[119]]()),
    elkur()
}
function inputChanged() {
    updateLeft()
}
function bekezdeseketRendez() {
    indentpressed = 1;
    for (var a = 0, x = (text = tinymce[_0x50a1[55]](_0x50a1[54])[_0x50a1[53]]())[_0x50a1[113]](_0x50a1[0]), e = new Array(_0x50a1[0]), _ = 0, t = 0, r = text[_0x50a1[112]], i = 0, o = 0, n = 0, l = 0; _ < r; ) {
        if (x[_] == _0x50a1[114]) {
            if (o = 0,
            n = 0,
            x[_ + 1] == _0x50a1[154] && x[_ + 2] == _0x50a1[155] && x[_ + 3] == _0x50a1[156] && x[_ + 4] == _0x50a1[157] && x[iz] == _0x50a1[158] && (o = 1),
            x[_ + 1] == _0x50a1[154] && x[_ + 2] == _0x50a1[159] && x[_ + 3] == _0x50a1[160] && x[_ + 4] == _0x50a1[161] && x[iz] == _0x50a1[162] && (o = 1),
            x[_ + 1] == _0x50a1[163] && x[_ + 2] == _0x50a1[164] && x[_ + 3] == _0x50a1[165] && x[_ + 4] == _0x50a1[166] && (o = 1),
            x[_ + 1] == _0x50a1[154] && x[_ + 2] == _0x50a1[167] && x[_ + 3] == _0x50a1[167] && (o = 1),
            x[_ + 1] == _0x50a1[168] && x[_ + 2] == _0x50a1[169] && x[_ + 3] == _0x50a1[170] && x[_ + 4] == _0x50a1[171] && (o = 1),
            x[_ + 1] == _0x50a1[172] && x[_ + 2] == _0x50a1[173] && x[_ + 3] == _0x50a1[158] && x[_ + 4] == _0x50a1[174] && (o = 1),
            x[_ + 1] == _0x50a1[175] && x[_ + 2] == _0x50a1[176] && x[_ + 3] == _0x50a1[162] && x[_ + 4] == _0x50a1[177] && (o = 1),
            x[_ + 1] == _0x50a1[178] && x[_ + 2] == _0x50a1[174] && x[_ + 3] == _0x50a1[179] && x[_ + 4] == _0x50a1[173] && (o = 1),
            x[_ + 1] == _0x50a1[180] && x[_ + 2] == _0x50a1[177] && x[_ + 3] == _0x50a1[181] && x[_ + 4] == _0x50a1[176] && (o = 1),
            x[_ + 1] == _0x50a1[178] && x[_ + 2] == _0x50a1[182] && (o = 1),
            x[_ + 1] == _0x50a1[180] && x[_ + 2] == _0x50a1[183] && (o = 1),
            x[_ + 1] == _0x50a1[161] && x[_ + 2] == _0x50a1[160] && x[_ + 3] == _0x50a1[168] && (o = 1),
            x[_ + 1] == _0x50a1[157] && x[_ + 2] == _0x50a1[156] && x[_ + 3] == _0x50a1[163] && (o = 1),
            x[_ + 1] == _0x50a1[161] && x[_ + 2] == _0x50a1[160] && x[_ + 3] == _0x50a1[175] && x[_ + 4] == _0x50a1[175] && x[iz] == _0x50a1[177] && (o = 1),
            x[_ + 1] == _0x50a1[176] && x[_ + 2] == _0x50a1[175] && x[_ + 3] == _0x50a1[180] && x[_ + 4] == _0x50a1[176] && (o = 1),
            x[_ + 1] == _0x50a1[184] && x[_ + 2] == _0x50a1[182] && (o = 1),
            x[_ + 1] == _0x50a1[185] && x[_ + 2] == _0x50a1[183] && (o = 1),
            x[_ + 1] == _0x50a1[164] && x[_ + 2] == _0x50a1[172] && x[_ + 3] == _0x50a1[186] && (o = 1),
            x[_ + 1] == _0x50a1[169] && x[_ + 2] == _0x50a1[175] && x[_ + 3] == _0x50a1[187] && (o = 1),
            x[_ + 1] == _0x50a1[169] && x[_ + 2] == _0x50a1[170] && x[_ + 3] == _0x50a1[136] && x[_ + 4] == _0x50a1[188] && (o = 1),
            x[_ + 1] == _0x50a1[136] && x[_ + 2] == _0x50a1[177] && x[_ + 3] == _0x50a1[183] && x[_ + 4] == _0x50a1[177] && (o = 1),
            x[_ + 1] == _0x50a1[181] && x[_ + 2] == _0x50a1[160] && x[_ + 3] == _0x50a1[188] && x[_ + 4] == _0x50a1[183] && (o = 1),
            x[_ + 1] == _0x50a1[189])
                n = 1;
            else
                for (i = _ + 1; x[i] != _0x50a1[57] && i < r; )
                    x[i] == _0x50a1[189] && x[i + 1] == _0x50a1[57] && (o = 1),
                    i++;
            0 == o && 0 == n && a++,
            1 == n && a--
        }
        if (l = 0,
        x[_] == _0x50a1[190] && (l = 1),
        e[t] = x[_],
        t++,
        _++,
        1 == l)
            if (x[_ + 1] == _0x50a1[189])
                for (i = 0; i < a - 1; i++)
                    e[t] = _0x50a1[191],
                    t++;
            else
                for (i = 0; i < a; i++)
                    e[t] = _0x50a1[191],
                    t++
    }
    if (e[0] == _0x50a1[190]) {
        for (_ = 0; _ < t; _++)
            e[_] = e[_ + 1];
        e[_ + 1] = _0x50a1[0]
    }
    text = e[_0x50a1[115]](_0x50a1[0]),
    sourceEditorFricc[_0x50a1[19]](text),
    tinyMCE[_0x50a1[23]][_0x50a1[22]](text),
    setTimeout(function() {
        indentpressed = 0
    }, 200)
}
var _0x50a1 = ["", "top", "offset", "href", "attr", "animate", "html, body", "click", "a.smoothscroll", "change", "#tabletype", "#tableborder", "#tablewidth", "#tablewidthunit", "#tablecellpadding", "tablazatEditorok", "removeClass", ".editorContainer", "/* DivTable.com */\n.divTable{\n\tdisplay: table;\n\twidth: 100%;\n}\n.divTableRow {\n\tdisplay: table-row;\n}\n.divTableHeading {\n\tbackground-color: #EEE;\n\tdisplay: table-header-group;\n}\n.divTableCell, .divTableHead {\n\tborder: 1px solid #999999;\n\tdisplay: table-cell;\n\tpadding: 3px 10px;\n}\n.divTableHeading {\n\tbackground-color: #EEE;\n\tdisplay: table-header-group;\n\tfont-weight: bold;\n}\n.divTableFoot {\n\tbackground-color: #EEE;\n\tdisplay: table-footer-group;\n\tfont-weight: bold;\n}\n.divTableBody {\n\tdisplay: table-row-group;\n}", "setValue", "mousedown", "#tableConvert a", "setContent", "activeEditor", "#undoButt", "#tableConvert", "<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th>Product</th>\n\t\t\t<th>Price</th>\n\t\t\t<th>Amount</th>\n\t\t\t<th>Total</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>Apple</td>\n\t\t\t<td>$1</td>\n\t\t\t<td>3</td>\n\t\t\t<td>$3</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Banana</td>\n\t\t\t<td>$1.5</td>\n\t\t\t<td>2</td>\n\t\t\t<td>$3</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Ananas</td>\n\t\t\t<td>$2</td>\n\t\t\t<td>1</td>\n\t\t\t<td>$2</td>\n\t\t</tr>\n\t</tbody>\n\t<tfoot>\n\t\t<tr>\n\t\t\t<td>Sum</td>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td>6</td>\n\t\t\t<td>$7</td>\n\t\t</tr>\n\t</tfoot>\n</table>\n<p>&nbsp;</p>", "#loadDemoTable", "addClass", "#closeCss", "data-iksz", "data-ipsz", " x ", "html", "#tableDimmensions", "left", "px", "css", "selectedCell", "each", ".tableCell", "hide", ".howToUseInstruction", "#indentCode", "higlightCell", "mouseout", "#hoverTableCont", "mouseover", "toggle", ".cellPaddingContainer", "ready", "resizable", ".CodeMirror", "getContent", "elm1", "get", "<table", ">", "<thead", "<thead>", '<div class="divTableHeading">', "<tfoot", "<tbody", "<td", "<tr", "<th", "<table>", '<div class="divTable">', "<tbody>", '<div class="divTableBody">', "<tfoot>", '<div class="divTableFoot">', "<td>", '<div class="divTableCell">', "<tr>", '<div class="divTableRow">', "<th>", '<div class="divTableHead">', "</table>", "</div>", "</tbody>", "</thead>", "</tfoot>", "</td>", "</tr>", "</th>", "value", "table", "<table ", 'style="', "width: ", "%;", "px;", '" ', 'border="', '"', ' cellpadding="', ">\n<tbody>", "\n<tr>", "\n<td>&nbsp;</td>", "\n</tr>", "\n</tbody>\n</table>\n\x3c!-- DivTable.com --\x3e", '<div class="divTable" ', "border: ", "px solid #000;", '<div class="divTable"', '>\n<div class="divTableBody">', '\n<div class="divTableRow">', '\n<div class="divTableCell">&nbsp;</div>', "\n</div>", "\n</div>\n</div>\n\x3c!-- DivTable.com --\x3e", "replace", "length", "split", "<", "join", "ivtable", "indexOf", "domain", "getValue", "textarea#elm1", "modern", "named", "advlist autolink link image lists charmap print preview hr anchor", "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking", "table directionality emoticons paste textcolor", "undo redo | table", "Heading 1", "h1", "Heading 2", "h2", "Heading 3", "h3", "Heading 4", "h4", "Paragraph", "p", "Block Quote", "blockquote", "Red text", "span", "#ff0000", "Green text", "#00ff00", "Blue text", "#0000ff", "500", "on", "keyup", "undo", "redo", "focus", "blur", "init", "!", "D", "O", "C", "T", "d", "o", "c", "t", "L", "I", "N", "K", "-", "l", "i", "n", "k", "M", "E", "A", "m", "e", "a", "B", "S", "b", "s", "R", "r", "H", "h", "G", "g", "u", "/", "\n", "\t", "use strict", "inline", "propertyKeywords", "text/css", "resolveMode", "indentUnit", "tokenHooks", "documentTypes", "mediaTypes", "mediaFeatures", "mediaValueKeywords", "nonStandardPropertyKeywords", "fontProperties", "counterDescriptors", "colorKeywords", "valueKeywords", "allowNested", "supportsAtComponent", "next", "@", "eatWhile", "def", "current", "=", "~", "|", "eat", "compare", "'", "tokenize", "#", "atom", "hash", "match", "keyword", "important", "test", ".", "number", "unit", "peek", "variable-2", "variable-definition", "variable", "meta", "select-op", "qualifier", "omain(", "egexp(", "backUp", "property", "word", ")", "\\", "string", "(", "type", "indent", "prev", "context", "indentation", "toLowerCase", "hasOwnProperty", "{", "block", "}", "atComponentBlock", "atBlock", "stateArg", "restricted_atBlock_before", "keyframes", "charAt", "at", "builtin", "tag", "maybeprop", "interpolation", ":", "pseudo", "parens", "string-2", " error", "error", "prop", ";", "propBlock", "variable-3", "atBlock_parens", "only", "not", "and", "or", "attribute", "restricted_atBlock", "@counter-style", "@font-face", "eatSpace", "object", "state", "max", "/*", "*/", "brace", "defineMode", "regexp", "url", "url-prefix", "all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed", "width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover", "landscape", "portrait", "none", "coarse", "fine", "on-demand", "interlace", "progressive", "align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-position", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode", "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom", "src", "unicode-range", "additive-symbols", "fallback", "negative", "pad", "prefix", "range", "suffix", "symbols", "system", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen", "above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "auto", "avoid", "avoid-column", "avoid-page", "avoid-region", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block-axis", "bold", "bolder", "border-box", "both", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "close-quote", "col-resize", "collapse", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fixed", "flat", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline-axis", "inline-block", "inline-flex", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "lao", "large", "larger", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding-box", "painted", "paused", "persian", "plus-darker", "plus-lighter", "polygon", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "scroll", "scrollbar", "se-resize", "searchfield", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "sub", "subpixel-antialiased", "super", "sw-resize", "symbolic", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "trad-chinese-formal", "trad-chinese-informal", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small", "concat", "hintWords", "registerHelper", "*", "comment", "defineMIME", "text/x-scss", "skipToEnd", "operator", "scss", "text/x-less", "less", "text/x-gss", "gss", "../../lib/codemirror", "function", "amd", "htmlhovered", "#tabContainer", "csshovered", "jshovered", ".tabz .html", ".tabz .css", ".tabz .js", "mouseleave"]
  , curX = 0
  , curY = 0
  , selX = 0
  , selY = 0
  , seg = _0x50a1[0]
  , ezX = 0
  , text = _0x50a1[0]
  , undotext = _0x50a1[0]
  , ezY = 0
  , wysiwygActive = 0
  , indentpressed = 0;
$(document)[_0x50a1[50]](function() {
    $(_0x50a1[8])[_0x50a1[7]](function() {
        return $(_0x50a1[6])[_0x50a1[5]]({
            scrollTop: $($[_0x50a1[4]](this, _0x50a1[3]))[_0x50a1[2]]()[_0x50a1[1]] - 10
        }, 500),
        !1
    }),
    $(_0x50a1[10])[_0x50a1[9]](function() {
        createTable(selX, selY),
        setTimeout(function() {
            createTable(selX, selY)
        }, 100)
    }),
    $(_0x50a1[11])[_0x50a1[9]](function() {
        createTable(selX, selY)
    }),
    $(_0x50a1[12])[_0x50a1[9]](function() {
        createTable(selX, selY)
    }),
    $(_0x50a1[13])[_0x50a1[9]](function() {
        createTable(selX, selY)
    }),
    $(_0x50a1[14])[_0x50a1[9]](function() {
        createTable(selX, selY)
    }),
    $(_0x50a1[21])[_0x50a1[20]](function(a) {
        tabletodiv(),
        $(_0x50a1[17])[_0x50a1[16]](_0x50a1[15]);
        var x = _0x50a1[18];
        styleEditorFricc[_0x50a1[19]](x)
    }),
    $(_0x50a1[24])[_0x50a1[20]](function(a) {
        sourceEditorFricc[_0x50a1[19]](undotext),
        tinyMCE[_0x50a1[23]][_0x50a1[22]](undotext)
    }),
    $(_0x50a1[27])[_0x50a1[20]](function(a) {
        $(_0x50a1[6])[_0x50a1[5]]({
            scrollTop: $($(_0x50a1[25]))[_0x50a1[2]]()[_0x50a1[1]] - 10
        }, 500),
        undotext = _0x50a1[26],
        sourceEditorFricc[_0x50a1[19]](undotext),
        tinyMCE[_0x50a1[23]][_0x50a1[22]](undotext)
    }),
    $(_0x50a1[29])[_0x50a1[20]](function(a) {
        $(_0x50a1[17])[_0x50a1[28]](_0x50a1[15])
    }),
    $(_0x50a1[40])[_0x50a1[20]](function(a) {
        curX = Number($(this)[_0x50a1[4]](_0x50a1[30])),
        curY = Number($(this)[_0x50a1[4]](_0x50a1[31])),
        selX = curX,
        selY = curY,
        $(_0x50a1[34])[_0x50a1[33]](curX + _0x50a1[32] + curY),
        $(_0x50a1[34])[_0x50a1[37]](_0x50a1[35], 17 * curX - 60 + _0x50a1[36]),
        $(_0x50a1[34])[_0x50a1[37]](_0x50a1[1], 17 * curY - 190 + _0x50a1[36]),
        $(_0x50a1[40])[_0x50a1[39]](function() {
            $(this)[_0x50a1[16]](_0x50a1[38]),
            ezX = Number($(this)[_0x50a1[4]](_0x50a1[30])),
            ezY = Number($(this)[_0x50a1[4]](_0x50a1[31])),
            ezX <= curX && ezY <= curY && $(this)[_0x50a1[28]](_0x50a1[38])
        }),
        $(_0x50a1[42])[_0x50a1[41]](),
        createTable(selX, selY)
    }),
    $(_0x50a1[43])[_0x50a1[20]](function(a) {
        bekezdeseketRendez()
    }),
    $(_0x50a1[46])[_0x50a1[45]](function(a) {
        $(_0x50a1[40])[_0x50a1[39]](function() {
            $(this)[_0x50a1[16]](_0x50a1[44])
        }),
        $(_0x50a1[34])[_0x50a1[33]](selX + _0x50a1[32] + selY),
        $(_0x50a1[34])[_0x50a1[37]](_0x50a1[35], 17 * selX - 75 + _0x50a1[36]),
        $(_0x50a1[34])[_0x50a1[37]](_0x50a1[1], 17 * selY - 205 + _0x50a1[36])
    }),
    $(_0x50a1[40])[_0x50a1[47]](function() {
        curX = Number($(this)[_0x50a1[4]](_0x50a1[30])),
        curY = Number($(this)[_0x50a1[4]](_0x50a1[31])),
        $(_0x50a1[34])[_0x50a1[33]](curX + _0x50a1[32] + curY),
        $(_0x50a1[34])[_0x50a1[37]](_0x50a1[35], 17 * curX - 60 + _0x50a1[36]),
        $(_0x50a1[34])[_0x50a1[37]](_0x50a1[1], 17 * curY - 190 + _0x50a1[36]),
        $(_0x50a1[40])[_0x50a1[39]](function() {
            $(this)[_0x50a1[16]](_0x50a1[44]),
            ezX = Number($(this)[_0x50a1[4]](_0x50a1[30])),
            ezY = Number($(this)[_0x50a1[4]](_0x50a1[31])),
            ezX <= curX && ezY <= curY && $(this)[_0x50a1[28]](_0x50a1[44])
        })
    }),
    $(_0x50a1[10])[_0x50a1[9]](function(a) {
        tipusvaltozas(),
        $(_0x50a1[49])[_0x50a1[48]]()
    })
}),
$(function() {
    $(_0x50a1[52])[_0x50a1[51]]({
        ghost: !0,
        animate: !0,
        minHeight: 70,
        minWidth: 50
    })
}),
tinymce[_0x50a1[153]]({
    selector: _0x50a1[120],
    apply_source_formatting: !0,
    remove_linebreaks: !1,
    theme: _0x50a1[121],
    convert_urls: !1,
    entity_encoding: _0x50a1[122],
    plugins: [_0x50a1[123], _0x50a1[124], _0x50a1[125]],
    add_unload_trigger: !1,
    toolbar: _0x50a1[126],
    image_advtab: !0,
    style_formats: [{
        title: _0x50a1[127],
        format: _0x50a1[128]
    }, {
        title: _0x50a1[129],
        format: _0x50a1[130]
    }, {
        title: _0x50a1[131],
        format: _0x50a1[132]
    }, {
        title: _0x50a1[133],
        format: _0x50a1[134]
    }, {
        title: _0x50a1[135],
        format: _0x50a1[136]
    }, {
        title: _0x50a1[137],
        format: _0x50a1[138]
    }, {
        title: _0x50a1[139],
        inline: _0x50a1[140],
        styles: {
            color: _0x50a1[141]
        }
    }, {
        title: _0x50a1[142],
        block: _0x50a1[140],
        styles: {
            color: _0x50a1[143]
        }
    }, {
        title: _0x50a1[144],
        block: _0x50a1[140],
        styles: {
            color: _0x50a1[145]
        }
    }],
    height: _0x50a1[146],
    protect: [/\<\/?(if|endif)\>/g, /\<xsl\:[^>]+\>/g, /<\?php.*?\?>/g],
    setup: function(a) {
        a[_0x50a1[147]](_0x50a1[9], function(a) {
            updateRight()
        }),
        a[_0x50a1[147]](_0x50a1[148], function(a) {
            updateRight()
        }),
        a[_0x50a1[147]](_0x50a1[149], function(a) {
            updateRight()
        }),
        a[_0x50a1[147]](_0x50a1[150], function(a) {
            updateRight()
        }),
        a[_0x50a1[147]](_0x50a1[151], function(a) {
            wysiwygActive = 1
        }),
        a[_0x50a1[147]](_0x50a1[152], function(a) {
            wysiwygActive = 0
        })
    }
}),
function(a) {
    typeof exports == _0x50a1[289] && typeof module == _0x50a1[289] ? a(require(_0x50a1[1347])) : typeof define == _0x50a1[1348] && define[_0x50a1[1349]] ? define([_0x50a1[1347]], a) : a(CodeMirror)
}(function(a) {
    function x(a) {
        for (var x = {}, e = 0; e < a[_0x50a1[112]]; ++e)
            x[a[e]] = !0;
        return x
    }
    function e(a, x) {
        for (var e, _ = !1; null != (e = a[_0x50a1[210]]()); ) {
            if (_ && e == _0x50a1[189]) {
                x[_0x50a1[221]] = null;
                break
            }
            _ = e == _0x50a1[1336]
        }
        return [_0x50a1[1337], _0x50a1[1337]]
    }
    _0x50a1[192],
    a[_0x50a1[295]](_0x50a1[37], function(x, e) {
        function _(a, x) {
            return p = x,
            a
        }
        function t(a, x) {
            var e = a[_0x50a1[210]]();
            if (h[e]) {
                var t = h[e](a, x);
                if (!1 !== t)
                    return t
            }
            return e == _0x50a1[211] ? (a[_0x50a1[212]](/[\w\\\-]/),
            _(_0x50a1[213], a[_0x50a1[214]]())) : e == _0x50a1[215] || (e == _0x50a1[216] || e == _0x50a1[217]) && a[_0x50a1[218]](_0x50a1[215]) ? _(null, _0x50a1[219]) : e == _0x50a1[95] || e == _0x50a1[220] ? (x[_0x50a1[221]] = r(e),
            x[_0x50a1[221]](a, x)) : e == _0x50a1[222] ? (a[_0x50a1[212]](/[\w\\\-]/),
            _(_0x50a1[223], _0x50a1[224])) : e == _0x50a1[154] ? (a[_0x50a1[225]](/^\s*\w*/),
            _(_0x50a1[226], _0x50a1[227])) : /\d/[_0x50a1[228]](e) || e == _0x50a1[229] && a[_0x50a1[218]](/\d/) ? (a[_0x50a1[212]](/[\w.%]/),
            _(_0x50a1[230], _0x50a1[231])) : e !== _0x50a1[167] ? /[,+>*\/]/[_0x50a1[228]](e) ? _(null, _0x50a1[237]) : e == _0x50a1[229] && a[_0x50a1[225]](/^-?[_a-z][_a-z0-9-]*/i) ? _(_0x50a1[238], _0x50a1[238]) : /[:;{}\[\]\(\)]/[_0x50a1[228]](e) ? _(null, e) : e == _0x50a1[188] && a[_0x50a1[225]](/rl(-prefix)?\(/) || e == _0x50a1[159] && a[_0x50a1[225]](_0x50a1[239]) || e == _0x50a1[183] && a[_0x50a1[225]](_0x50a1[240]) ? (a[_0x50a1[241]](1),
            x[_0x50a1[221]] = i,
            _(_0x50a1[242], _0x50a1[243])) : /[\w\\\-]/[_0x50a1[228]](e) ? (a[_0x50a1[212]](/[\w\\\-]/),
            _(_0x50a1[242], _0x50a1[243])) : _(null, null) : /[\d.]/[_0x50a1[228]](a[_0x50a1[232]]()) ? (a[_0x50a1[212]](/[\w.%]/),
            _(_0x50a1[230], _0x50a1[231])) : a[_0x50a1[225]](/^-[\w\\\-]+/) ? (a[_0x50a1[212]](/[\w\\\-]/),
            a[_0x50a1[225]](/^\s*:/, !1) ? _(_0x50a1[233], _0x50a1[234]) : _(_0x50a1[233], _0x50a1[235])) : a[_0x50a1[225]](/^\w+-/) ? _(_0x50a1[236], _0x50a1[236]) : void 0
        }
        function r(a) {
            return function(x, e) {
                for (var t, r = !1; null != (t = x[_0x50a1[210]]()); ) {
                    if (t == a && !r) {
                        a == _0x50a1[244] && x[_0x50a1[241]](1);
                        break
                    }
                    r = !r && t == _0x50a1[245]
                }
                return (t == a || !r && a != _0x50a1[244]) && (e[_0x50a1[221]] = null),
                _(_0x50a1[246], _0x50a1[246])
            }
        }
        function i(a, x) {
            return a[_0x50a1[210]](),
            a[_0x50a1[225]](/\s*[\"\')]/, !1) ? x[_0x50a1[221]] = null : x[_0x50a1[221]] = r(_0x50a1[244]),
            _(null, _0x50a1[247])
        }
        function o(a, x, e) {
            this[_0x50a1[248]] = a,
            this[_0x50a1[249]] = x,
            this[_0x50a1[250]] = e
        }
        function n(a, x, e, _) {
            return a[_0x50a1[251]] = new o(e,x[_0x50a1[252]]() + (!1 === _ ? 0 : b),a[_0x50a1[251]]),
            e
        }
        function l(a) {
            return a[_0x50a1[251]][_0x50a1[250]] && (a[_0x50a1[251]] = a[_0x50a1[251]][_0x50a1[250]]),
            a[_0x50a1[251]][_0x50a1[248]]
        }
        function s(a, x, e) {
            return X[e[_0x50a1[251]][_0x50a1[248]]](a, x, e)
        }
        function d(a, x, e, _) {
            for (var t = _ || 1; t > 0; t--)
                e[_0x50a1[251]] = e[_0x50a1[251]][_0x50a1[250]];
            return s(a, x, e)
        }
        function c(a) {
            var x = a[_0x50a1[214]]()[_0x50a1[253]]();
            m = K[_0x50a1[254]](x) ? _0x50a1[223] : T[_0x50a1[254]](x) ? _0x50a1[226] : _0x50a1[235]
        }
        var u = e[_0x50a1[193]];
        e[_0x50a1[194]] || (e = a[_0x50a1[196]](_0x50a1[195]));
        var p, m, b = x[_0x50a1[197]], h = e[_0x50a1[198]], f = e[_0x50a1[199]] || {}, g = e[_0x50a1[200]] || {}, y = e[_0x50a1[201]] || {}, v = e[_0x50a1[202]] || {}, w = e[_0x50a1[194]] || {}, k = e[_0x50a1[203]] || {}, $ = e[_0x50a1[204]] || {}, z = e[_0x50a1[205]] || {}, T = e[_0x50a1[206]] || {}, K = e[_0x50a1[207]] || {}, C = e[_0x50a1[208]], E = !0 === e[_0x50a1[209]], X = {};
        return X[_0x50a1[1]] = function(a, x, e) {
            if (a == _0x50a1[255])
                return n(e, x, _0x50a1[256]);
            if (a == _0x50a1[257] && e[_0x50a1[251]][_0x50a1[250]])
                return l(e);
            if (E && /@component/[_0x50a1[228]](a))
                return n(e, x, _0x50a1[258]);
            if (/^@(-moz-)?document$/[_0x50a1[228]](a))
                return n(e, x, _0x50a1[199]);
            if (/^@(media|supports|(-moz-)?document|import)$/[_0x50a1[228]](a))
                return n(e, x, _0x50a1[259]);
            if (/^@(font-face|counter-style)/[_0x50a1[228]](a))
                return e[_0x50a1[260]] = a,
                _0x50a1[261];
            if (/^@(-(moz|ms|o|webkit)-)?keyframes$/[_0x50a1[228]](a))
                return _0x50a1[262];
            if (a && a[_0x50a1[263]](0) == _0x50a1[211])
                return n(e, x, _0x50a1[264]);
            if (a == _0x50a1[224])
                m = _0x50a1[265];
            else if (a == _0x50a1[243])
                m = _0x50a1[266];
            else {
                if (a == _0x50a1[234])
                    return _0x50a1[267];
                if (a == _0x50a1[268])
                    return n(e, x, _0x50a1[268]);
                if (a == _0x50a1[269])
                    return _0x50a1[270];
                if (C && a == _0x50a1[247])
                    return n(e, x, _0x50a1[271])
            }
            return e[_0x50a1[251]][_0x50a1[248]]
        }
        ,
        X[_0x50a1[256]] = function(a, x, e) {
            if (a == _0x50a1[243]) {
                var _ = x[_0x50a1[214]]()[_0x50a1[253]]();
                return w[_0x50a1[254]](_) ? (m = _0x50a1[242],
                _0x50a1[267]) : k[_0x50a1[254]](_) ? (m = _0x50a1[272],
                _0x50a1[267]) : C ? (m = x[_0x50a1[225]](/^\s*:(?:\s|$)/, !1) ? _0x50a1[242] : _0x50a1[266],
                _0x50a1[256]) : (m += _0x50a1[273],
                _0x50a1[267])
            }
            return a == _0x50a1[236] ? _0x50a1[256] : C || a != _0x50a1[224] && a != _0x50a1[238] ? X[_0x50a1[1]](a, x, e) : (m = _0x50a1[274],
            _0x50a1[256])
        }
        ,
        X[_0x50a1[267]] = function(a, x, e) {
            return a == _0x50a1[269] ? n(e, x, _0x50a1[275]) : s(a, x, e)
        }
        ,
        X[_0x50a1[275]] = function(a, x, e) {
            if (a == _0x50a1[276])
                return l(e);
            if (a == _0x50a1[255] && C)
                return n(e, x, _0x50a1[277]);
            if (a == _0x50a1[257] || a == _0x50a1[255])
                return d(a, x, e);
            if (a == _0x50a1[247])
                return n(e, x, _0x50a1[271]);
            if (a != _0x50a1[224] || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/[_0x50a1[228]](x[_0x50a1[214]]())) {
                if (a == _0x50a1[243])
                    c(x);
                else if (a == _0x50a1[268])
                    return n(e, x, _0x50a1[268])
            } else
                m += _0x50a1[273];
            return _0x50a1[275]
        }
        ,
        X[_0x50a1[277]] = function(a, x, e) {
            return a == _0x50a1[257] ? l(e) : a == _0x50a1[243] ? (m = _0x50a1[242],
            _0x50a1[267]) : e[_0x50a1[251]][_0x50a1[248]]
        }
        ,
        X[_0x50a1[271]] = function(a, x, e) {
            return a == _0x50a1[255] || a == _0x50a1[257] ? d(a, x, e) : a == _0x50a1[244] ? l(e) : a == _0x50a1[247] ? n(e, x, _0x50a1[271]) : a == _0x50a1[268] ? n(e, x, _0x50a1[268]) : (a == _0x50a1[243] && c(x),
            _0x50a1[271])
        }
        ,
        X[_0x50a1[270]] = function(a, x, e) {
            return a == _0x50a1[243] ? (m = _0x50a1[278],
            e[_0x50a1[251]][_0x50a1[248]]) : s(a, x, e)
        }
        ,
        X[_0x50a1[199]] = function(a, x, e) {
            return a == _0x50a1[243] && f[_0x50a1[254]](x[_0x50a1[214]]()) ? (m = _0x50a1[266],
            e[_0x50a1[251]][_0x50a1[248]]) : X[_0x50a1[259]](a, x, e)
        }
        ,
        X[_0x50a1[259]] = function(a, x, e) {
            if (a == _0x50a1[247])
                return n(e, x, _0x50a1[279]);
            if (a == _0x50a1[257] || a == _0x50a1[276])
                return d(a, x, e);
            if (a == _0x50a1[255])
                return l(e) && n(e, x, C ? _0x50a1[256] : _0x50a1[1]);
            if (a == _0x50a1[268])
                return n(e, x, _0x50a1[268]);
            if (a == _0x50a1[243]) {
                var _ = x[_0x50a1[214]]()[_0x50a1[253]]();
                m = _ == _0x50a1[280] || _ == _0x50a1[281] || _ == _0x50a1[282] || _ == _0x50a1[283] ? _0x50a1[226] : g[_0x50a1[254]](_) ? _0x50a1[284] : y[_0x50a1[254]](_) ? _0x50a1[242] : v[_0x50a1[254]](_) ? _0x50a1[226] : w[_0x50a1[254]](_) ? _0x50a1[242] : k[_0x50a1[254]](_) ? _0x50a1[272] : K[_0x50a1[254]](_) ? _0x50a1[223] : T[_0x50a1[254]](_) ? _0x50a1[226] : _0x50a1[274]
            }
            return e[_0x50a1[251]][_0x50a1[248]]
        }
        ,
        X[_0x50a1[258]] = function(a, x, e) {
            return a == _0x50a1[257] ? d(a, x, e) : a == _0x50a1[255] ? l(e) && n(e, x, C ? _0x50a1[256] : _0x50a1[1], !1) : (a == _0x50a1[243] && (m = _0x50a1[274]),
            e[_0x50a1[251]][_0x50a1[248]])
        }
        ,
        X[_0x50a1[279]] = function(a, x, e) {
            return a == _0x50a1[244] ? l(e) : a == _0x50a1[255] || a == _0x50a1[257] ? d(a, x, e, 2) : X[_0x50a1[259]](a, x, e)
        }
        ,
        X[_0x50a1[261]] = function(a, x, e) {
            return a == _0x50a1[255] ? n(e, x, _0x50a1[285]) : a == _0x50a1[243] && e[_0x50a1[260]] == _0x50a1[286] ? (m = _0x50a1[235],
            _0x50a1[261]) : s(a, x, e)
        }
        ,
        X[_0x50a1[285]] = function(a, x, e) {
            return a == _0x50a1[257] ? (e[_0x50a1[260]] = null,
            l(e)) : a == _0x50a1[243] ? (m = e[_0x50a1[260]] == _0x50a1[287] && !$[_0x50a1[254]](x[_0x50a1[214]]()[_0x50a1[253]]()) || e[_0x50a1[260]] == _0x50a1[286] && !z[_0x50a1[254]](x[_0x50a1[214]]()[_0x50a1[253]]()) ? _0x50a1[274] : _0x50a1[242],
            _0x50a1[267]) : _0x50a1[285]
        }
        ,
        X[_0x50a1[262]] = function(a, x, e) {
            return a == _0x50a1[243] ? (m = _0x50a1[235],
            _0x50a1[262]) : a == _0x50a1[255] ? n(e, x, _0x50a1[1]) : s(a, x, e)
        }
        ,
        X[_0x50a1[264]] = function(a, x, e) {
            return a == _0x50a1[276] ? l(e) : a == _0x50a1[255] || a == _0x50a1[257] ? d(a, x, e) : (a == _0x50a1[243] ? m = _0x50a1[266] : a == _0x50a1[224] && (m = _0x50a1[265]),
            _0x50a1[264])
        }
        ,
        X[_0x50a1[268]] = function(a, x, e) {
            return a == _0x50a1[257] ? l(e) : a == _0x50a1[255] || a == _0x50a1[276] ? d(a, x, e) : (a == _0x50a1[243] ? m = _0x50a1[235] : a != _0x50a1[235] && a != _0x50a1[247] && a != _0x50a1[244] && (m = _0x50a1[274]),
            _0x50a1[268])
        }
        ,
        {
            startState: function(a) {
                return {
                    tokenize: null,
                    state: u ? _0x50a1[256] : _0x50a1[1],
                    stateArg: null,
                    context: new o(u ? _0x50a1[256] : _0x50a1[1],a || 0,null)
                }
            },
            token: function(a, x) {
                if (!x[_0x50a1[221]] && a[_0x50a1[288]]())
                    return null;
                var e = (x[_0x50a1[221]] || t)(a, x);
                return e && typeof e == _0x50a1[289] && (p = e[1],
                e = e[0]),
                m = e,
                x[_0x50a1[290]] = X[x[_0x50a1[290]]](p, a, x),
                m
            },
            indent: function(a, x) {
                var e = a[_0x50a1[251]]
                  , _ = x && x[_0x50a1[263]](0)
                  , t = e[_0x50a1[249]];
                return e[_0x50a1[248]] != _0x50a1[275] || _ != _0x50a1[257] && _ != _0x50a1[244] || (e = e[_0x50a1[250]]),
                e[_0x50a1[250]] && (_ != _0x50a1[257] || e[_0x50a1[248]] != _0x50a1[256] && e[_0x50a1[248]] != _0x50a1[1] && e[_0x50a1[248]] != _0x50a1[268] && e[_0x50a1[248]] != _0x50a1[285] ? (_ != _0x50a1[244] || e[_0x50a1[248]] != _0x50a1[271] && e[_0x50a1[248]] != _0x50a1[279]) && (_ != _0x50a1[255] || e[_0x50a1[248]] != _0x50a1[264] && e[_0x50a1[248]] != _0x50a1[259]) || (t = Math[_0x50a1[291]](0, e[_0x50a1[249]] - b),
                e = e[_0x50a1[250]]) : t = (e = e[_0x50a1[250]])[_0x50a1[249]]),
                t
            },
            electricChars: _0x50a1[257],
            blockCommentStart: _0x50a1[292],
            blockCommentEnd: _0x50a1[293],
            fold: _0x50a1[294]
        }
    });
    var _ = [_0x50a1[118], _0x50a1[296], _0x50a1[297], _0x50a1[298]]
      , t = x(_)
      , r = [_0x50a1[299], _0x50a1[300], _0x50a1[301], _0x50a1[302], _0x50a1[303], _0x50a1[304], _0x50a1[305], _0x50a1[306], _0x50a1[307], _0x50a1[308]]
      , i = x(r)
      , o = [_0x50a1[309], _0x50a1[310], _0x50a1[311], _0x50a1[312], _0x50a1[313], _0x50a1[314], _0x50a1[315], _0x50a1[316], _0x50a1[317], _0x50a1[318], _0x50a1[319], _0x50a1[320], _0x50a1[321], _0x50a1[322], _0x50a1[323], _0x50a1[324], _0x50a1[325], _0x50a1[326], _0x50a1[327], _0x50a1[328], _0x50a1[329], _0x50a1[330], _0x50a1[331], _0x50a1[332], _0x50a1[333], _0x50a1[334], _0x50a1[335], _0x50a1[336], _0x50a1[337], _0x50a1[338], _0x50a1[339], _0x50a1[340], _0x50a1[341], _0x50a1[342], _0x50a1[343], _0x50a1[344], _0x50a1[345], _0x50a1[346], _0x50a1[347], _0x50a1[348]]
      , n = x(o)
      , l = [_0x50a1[349], _0x50a1[350], _0x50a1[351], _0x50a1[352], _0x50a1[353], _0x50a1[354], _0x50a1[347], _0x50a1[355], _0x50a1[356]]
      , s = x(l)
      , d = [_0x50a1[357], _0x50a1[358], _0x50a1[359], _0x50a1[360], _0x50a1[361], _0x50a1[362], _0x50a1[363], _0x50a1[364], _0x50a1[365], _0x50a1[366], _0x50a1[367], _0x50a1[368], _0x50a1[369], _0x50a1[370], _0x50a1[371], _0x50a1[372], _0x50a1[373], _0x50a1[374], _0x50a1[375], _0x50a1[376], _0x50a1[377], _0x50a1[378], _0x50a1[379], _0x50a1[380], _0x50a1[381], _0x50a1[382], _0x50a1[383], _0x50a1[384], _0x50a1[385], _0x50a1[386], _0x50a1[387], _0x50a1[388], _0x50a1[389], _0x50a1[390], _0x50a1[391], _0x50a1[392], _0x50a1[393], _0x50a1[394], _0x50a1[395], _0x50a1[396], _0x50a1[397], _0x50a1[398], _0x50a1[399], _0x50a1[400], _0x50a1[401], _0x50a1[402], _0x50a1[403], _0x50a1[404], _0x50a1[405], _0x50a1[406], _0x50a1[407], _0x50a1[408], _0x50a1[409], _0x50a1[410], _0x50a1[411], _0x50a1[412], _0x50a1[413], _0x50a1[414], _0x50a1[415], _0x50a1[416], _0x50a1[417], _0x50a1[418], _0x50a1[419], _0x50a1[420], _0x50a1[421], _0x50a1[422], _0x50a1[423], _0x50a1[424], _0x50a1[425], _0x50a1[426], _0x50a1[427], _0x50a1[428], _0x50a1[429], _0x50a1[430], _0x50a1[431], _0x50a1[432], _0x50a1[433], _0x50a1[434], _0x50a1[327], _0x50a1[435], _0x50a1[436], _0x50a1[437], _0x50a1[438], _0x50a1[439], _0x50a1[440], _0x50a1[441], _0x50a1[442], _0x50a1[443], _0x50a1[444], _0x50a1[445], _0x50a1[446], _0x50a1[447], _0x50a1[448], _0x50a1[449], _0x50a1[450], _0x50a1[451], _0x50a1[452], _0x50a1[453], _0x50a1[454], _0x50a1[455], _0x50a1[456], _0x50a1[457], _0x50a1[458], _0x50a1[459], _0x50a1[460], _0x50a1[461], _0x50a1[462], _0x50a1[463], _0x50a1[464], _0x50a1[465], _0x50a1[466], _0x50a1[467], _0x50a1[468], _0x50a1[469], _0x50a1[470], _0x50a1[471], _0x50a1[472], _0x50a1[473], _0x50a1[474], _0x50a1[475], _0x50a1[476], _0x50a1[477], _0x50a1[478], _0x50a1[479], _0x50a1[480], _0x50a1[481], _0x50a1[482], _0x50a1[483], _0x50a1[484], _0x50a1[485], _0x50a1[486], _0x50a1[487], _0x50a1[488], _0x50a1[489], _0x50a1[490], _0x50a1[491], _0x50a1[492], _0x50a1[493], _0x50a1[494], _0x50a1[495], _0x50a1[340], _0x50a1[496], _0x50a1[497], _0x50a1[498], _0x50a1[499], _0x50a1[500], _0x50a1[501], _0x50a1[502], _0x50a1[503], _0x50a1[504], _0x50a1[505], _0x50a1[506], _0x50a1[507], _0x50a1[508], _0x50a1[509], _0x50a1[510], _0x50a1[511], _0x50a1[312], _0x50a1[512], _0x50a1[513], _0x50a1[514], _0x50a1[515], _0x50a1[516], _0x50a1[517], _0x50a1[518], _0x50a1[35], _0x50a1[519], _0x50a1[520], _0x50a1[521], _0x50a1[522], _0x50a1[523], _0x50a1[524], _0x50a1[525], _0x50a1[526], _0x50a1[527], _0x50a1[528], _0x50a1[529], _0x50a1[530], _0x50a1[531], _0x50a1[532], _0x50a1[533], _0x50a1[534], _0x50a1[535], _0x50a1[536], _0x50a1[537], _0x50a1[538], _0x50a1[539], _0x50a1[540], _0x50a1[541], _0x50a1[314], _0x50a1[311], _0x50a1[313], _0x50a1[310], _0x50a1[542], _0x50a1[543], _0x50a1[544], _0x50a1[545], _0x50a1[546], _0x50a1[547], _0x50a1[548], _0x50a1[549], _0x50a1[550], _0x50a1[551], _0x50a1[552], _0x50a1[553], _0x50a1[554], _0x50a1[555], _0x50a1[556], _0x50a1[557], _0x50a1[558], _0x50a1[559], _0x50a1[560], _0x50a1[561], _0x50a1[562], _0x50a1[563], _0x50a1[564], _0x50a1[565], _0x50a1[566], _0x50a1[567], _0x50a1[568], _0x50a1[569], _0x50a1[570], _0x50a1[571], _0x50a1[572], _0x50a1[573], _0x50a1[574], _0x50a1[575], _0x50a1[576], _0x50a1[577], _0x50a1[578], _0x50a1[579], _0x50a1[580], _0x50a1[581], _0x50a1[582], _0x50a1[583], _0x50a1[584], _0x50a1[585], _0x50a1[586], _0x50a1[587], _0x50a1[588], _0x50a1[589], _0x50a1[590], _0x50a1[591], _0x50a1[592], _0x50a1[593], _0x50a1[594], _0x50a1[595], _0x50a1[596], _0x50a1[597], _0x50a1[598], _0x50a1[599], _0x50a1[600], _0x50a1[601], _0x50a1[602], _0x50a1[603], _0x50a1[604], _0x50a1[605], _0x50a1[606], _0x50a1[607], _0x50a1[608], _0x50a1[609], _0x50a1[610], _0x50a1[611], _0x50a1[612], _0x50a1[613], _0x50a1[614], _0x50a1[615], _0x50a1[616], _0x50a1[617], _0x50a1[618], _0x50a1[619], _0x50a1[620], _0x50a1[621], _0x50a1[622], _0x50a1[623], _0x50a1[624], _0x50a1[625], _0x50a1[626], _0x50a1[627], _0x50a1[628], _0x50a1[629], _0x50a1[630], _0x50a1[631], _0x50a1[632], _0x50a1[633], _0x50a1[634], _0x50a1[635], _0x50a1[636], _0x50a1[637], _0x50a1[638], _0x50a1[639], _0x50a1[640], _0x50a1[641], _0x50a1[642], _0x50a1[1], _0x50a1[643], _0x50a1[644], _0x50a1[645], _0x50a1[646], _0x50a1[647], _0x50a1[648], _0x50a1[649], _0x50a1[650], _0x50a1[651], _0x50a1[652], _0x50a1[653], _0x50a1[654], _0x50a1[655], _0x50a1[656], _0x50a1[657], _0x50a1[658], _0x50a1[659], _0x50a1[660], _0x50a1[661], _0x50a1[662], _0x50a1[663], _0x50a1[664], _0x50a1[309], _0x50a1[665], _0x50a1[666], _0x50a1[667], _0x50a1[668], _0x50a1[669], _0x50a1[670], _0x50a1[671], _0x50a1[672], _0x50a1[673], _0x50a1[674], _0x50a1[675], _0x50a1[676], _0x50a1[677], _0x50a1[678], _0x50a1[679], _0x50a1[680], _0x50a1[681], _0x50a1[682], _0x50a1[683], _0x50a1[684], _0x50a1[685], _0x50a1[515], _0x50a1[686], _0x50a1[687], _0x50a1[688], _0x50a1[689], _0x50a1[690], _0x50a1[691], _0x50a1[692], _0x50a1[693], _0x50a1[694], _0x50a1[695], _0x50a1[696], _0x50a1[697], _0x50a1[698], _0x50a1[699], _0x50a1[385], _0x50a1[456], _0x50a1[700], _0x50a1[701], _0x50a1[702], _0x50a1[703]]
      , c = x(d)
      , u = [_0x50a1[704], _0x50a1[705], _0x50a1[706], _0x50a1[707], _0x50a1[708], _0x50a1[709], _0x50a1[710], _0x50a1[711], _0x50a1[603], _0x50a1[712], _0x50a1[713], _0x50a1[714], _0x50a1[715], _0x50a1[716]]
      , p = x(u)
      , m = x([_0x50a1[480], _0x50a1[717], _0x50a1[718], _0x50a1[488], _0x50a1[479], _0x50a1[485], _0x50a1[495], _0x50a1[486]])
      , b = x([_0x50a1[719], _0x50a1[720], _0x50a1[721], _0x50a1[722], _0x50a1[723], _0x50a1[724], _0x50a1[608], _0x50a1[725], _0x50a1[726], _0x50a1[727]])
      , h = [_0x50a1[728], _0x50a1[729], _0x50a1[730], _0x50a1[731], _0x50a1[732], _0x50a1[733], _0x50a1[734], _0x50a1[735], _0x50a1[736], _0x50a1[737], _0x50a1[738], _0x50a1[739], _0x50a1[740], _0x50a1[741], _0x50a1[742], _0x50a1[743], _0x50a1[744], _0x50a1[745], _0x50a1[746], _0x50a1[747], _0x50a1[748], _0x50a1[749], _0x50a1[750], _0x50a1[751], _0x50a1[752], _0x50a1[753], _0x50a1[754], _0x50a1[755], _0x50a1[756], _0x50a1[757], _0x50a1[758], _0x50a1[759], _0x50a1[760], _0x50a1[761], _0x50a1[762], _0x50a1[763], _0x50a1[764], _0x50a1[765], _0x50a1[766], _0x50a1[767], _0x50a1[768], _0x50a1[769], _0x50a1[770], _0x50a1[771], _0x50a1[772], _0x50a1[773], _0x50a1[774], _0x50a1[775], _0x50a1[776], _0x50a1[777], _0x50a1[778], _0x50a1[779], _0x50a1[780], _0x50a1[781], _0x50a1[782], _0x50a1[783], _0x50a1[784], _0x50a1[785], _0x50a1[786], _0x50a1[787], _0x50a1[788], _0x50a1[789], _0x50a1[790], _0x50a1[791], _0x50a1[792], _0x50a1[793], _0x50a1[794], _0x50a1[795], _0x50a1[796], _0x50a1[797], _0x50a1[798], _0x50a1[799], _0x50a1[800], _0x50a1[801], _0x50a1[802], _0x50a1[803], _0x50a1[804], _0x50a1[805], _0x50a1[806], _0x50a1[807], _0x50a1[808], _0x50a1[809], _0x50a1[810], _0x50a1[811], _0x50a1[812], _0x50a1[813], _0x50a1[814], _0x50a1[815], _0x50a1[816], _0x50a1[817], _0x50a1[818], _0x50a1[819], _0x50a1[820], _0x50a1[821], _0x50a1[822], _0x50a1[823], _0x50a1[824], _0x50a1[825], _0x50a1[826], _0x50a1[827], _0x50a1[828], _0x50a1[829], _0x50a1[830], _0x50a1[831], _0x50a1[832], _0x50a1[833], _0x50a1[834], _0x50a1[835], _0x50a1[836], _0x50a1[837], _0x50a1[838], _0x50a1[839], _0x50a1[840], _0x50a1[841], _0x50a1[842], _0x50a1[843], _0x50a1[844], _0x50a1[845], _0x50a1[846], _0x50a1[847], _0x50a1[848], _0x50a1[849], _0x50a1[850], _0x50a1[851], _0x50a1[852], _0x50a1[853], _0x50a1[854], _0x50a1[855], _0x50a1[856], _0x50a1[857], _0x50a1[858], _0x50a1[859], _0x50a1[860], _0x50a1[861], _0x50a1[862], _0x50a1[863], _0x50a1[864], _0x50a1[865], _0x50a1[866], _0x50a1[867], _0x50a1[868], _0x50a1[869]]
      , f = x(h)
      , g = [_0x50a1[870], _0x50a1[871], _0x50a1[872], _0x50a1[873], _0x50a1[874], _0x50a1[875], _0x50a1[876], _0x50a1[877], _0x50a1[878], _0x50a1[299], _0x50a1[879], _0x50a1[880], _0x50a1[881], _0x50a1[882], _0x50a1[883], _0x50a1[884], _0x50a1[885], _0x50a1[886], _0x50a1[887], _0x50a1[888], _0x50a1[889], _0x50a1[4], _0x50a1[890], _0x50a1[891], _0x50a1[892], _0x50a1[893], _0x50a1[894], _0x50a1[375], _0x50a1[895], _0x50a1[896], _0x50a1[897], _0x50a1[898], _0x50a1[899], _0x50a1[900], _0x50a1[901], _0x50a1[256], _0x50a1[902], _0x50a1[903], _0x50a1[904], _0x50a1[392], _0x50a1[905], _0x50a1[906], _0x50a1[425], _0x50a1[907], _0x50a1[908], _0x50a1[909], _0x50a1[910], _0x50a1[911], _0x50a1[912], _0x50a1[913], _0x50a1[914], _0x50a1[915], _0x50a1[916], _0x50a1[917], _0x50a1[918], _0x50a1[919], _0x50a1[920], _0x50a1[921], _0x50a1[922], _0x50a1[923], _0x50a1[924], _0x50a1[925], _0x50a1[926], _0x50a1[927], _0x50a1[928], _0x50a1[929], _0x50a1[930], _0x50a1[931], _0x50a1[433], _0x50a1[434], _0x50a1[932], _0x50a1[933], _0x50a1[934], _0x50a1[327], _0x50a1[935], _0x50a1[936], _0x50a1[937], _0x50a1[938], _0x50a1[939], _0x50a1[940], _0x50a1[941], _0x50a1[446], _0x50a1[942], _0x50a1[943], _0x50a1[944], _0x50a1[945], _0x50a1[946], _0x50a1[947], _0x50a1[948], _0x50a1[449], _0x50a1[949], _0x50a1[950], _0x50a1[951], _0x50a1[952], _0x50a1[953], _0x50a1[954], _0x50a1[955], _0x50a1[956], _0x50a1[957], _0x50a1[958], _0x50a1[959], _0x50a1[960], _0x50a1[961], _0x50a1[962], _0x50a1[963], _0x50a1[964], _0x50a1[965], _0x50a1[966], _0x50a1[967], _0x50a1[968], _0x50a1[969], _0x50a1[970], _0x50a1[971], _0x50a1[972], _0x50a1[973], _0x50a1[974], _0x50a1[975], _0x50a1[976], _0x50a1[977], _0x50a1[978], _0x50a1[979], _0x50a1[980], _0x50a1[981], _0x50a1[982], _0x50a1[983], _0x50a1[984], _0x50a1[985], _0x50a1[986], _0x50a1[987], _0x50a1[988], _0x50a1[989], _0x50a1[990], _0x50a1[991], _0x50a1[992], _0x50a1[993], _0x50a1[994], _0x50a1[995], _0x50a1[996], _0x50a1[997], _0x50a1[998], _0x50a1[999], _0x50a1[1e3], _0x50a1[1001], _0x50a1[1002], _0x50a1[1003], _0x50a1[1004], _0x50a1[1005], _0x50a1[1006], _0x50a1[1007], _0x50a1[1008], _0x50a1[1009], _0x50a1[1010], _0x50a1[683], _0x50a1[1011], _0x50a1[1012], _0x50a1[467], _0x50a1[1013], _0x50a1[1014], _0x50a1[1015], _0x50a1[1016], _0x50a1[1017], _0x50a1[1018], _0x50a1[1019], _0x50a1[1020], _0x50a1[1021], _0x50a1[1022], _0x50a1[1023], _0x50a1[1024], _0x50a1[1025], _0x50a1[1026], _0x50a1[1027], _0x50a1[1028], _0x50a1[1029], _0x50a1[1030], _0x50a1[41], _0x50a1[1031], _0x50a1[1032], _0x50a1[1033], _0x50a1[1034], _0x50a1[1035], _0x50a1[1036], _0x50a1[1037], _0x50a1[1038], _0x50a1[1039], _0x50a1[513], _0x50a1[1040], _0x50a1[1041], _0x50a1[1042], _0x50a1[1043], _0x50a1[1044], _0x50a1[1045], _0x50a1[1046], _0x50a1[1047], _0x50a1[1048], _0x50a1[193], _0x50a1[1049], _0x50a1[1050], _0x50a1[1051], _0x50a1[1052], _0x50a1[1053], _0x50a1[1054], _0x50a1[1055], _0x50a1[1056], _0x50a1[1057], _0x50a1[1058], _0x50a1[1059], _0x50a1[1060], _0x50a1[1061], _0x50a1[1062], _0x50a1[1063], _0x50a1[1064], _0x50a1[1065], _0x50a1[1066], _0x50a1[1067], _0x50a1[1068], _0x50a1[349], _0x50a1[1069], _0x50a1[1070], _0x50a1[1071], _0x50a1[35], _0x50a1[1072], _0x50a1[1073], _0x50a1[1074], _0x50a1[1075], _0x50a1[1076], _0x50a1[1077], _0x50a1[1078], _0x50a1[1079], _0x50a1[1080], _0x50a1[1081], _0x50a1[1082], _0x50a1[1083], _0x50a1[1084], _0x50a1[1085], _0x50a1[1086], _0x50a1[1087], _0x50a1[1088], _0x50a1[1089], _0x50a1[1090], _0x50a1[1091], _0x50a1[1092], _0x50a1[1093], _0x50a1[1094], _0x50a1[1095], _0x50a1[1096], _0x50a1[225], _0x50a1[1097], _0x50a1[1098], _0x50a1[1099], _0x50a1[1100], _0x50a1[1101], _0x50a1[1102], _0x50a1[1103], _0x50a1[1104], _0x50a1[1105], _0x50a1[1106], _0x50a1[1107], _0x50a1[1108], _0x50a1[1109], _0x50a1[1110], _0x50a1[1111], _0x50a1[1112], _0x50a1[1113], _0x50a1[1114], _0x50a1[1115], _0x50a1[1116], _0x50a1[1117], _0x50a1[1118], _0x50a1[1119], _0x50a1[1120], _0x50a1[1121], _0x50a1[1122], _0x50a1[1123], _0x50a1[1124], _0x50a1[1125], _0x50a1[1126], _0x50a1[1127], _0x50a1[1128], _0x50a1[1129], _0x50a1[1130], _0x50a1[1131], _0x50a1[1132], _0x50a1[1133], _0x50a1[1134], _0x50a1[1135], _0x50a1[1136], _0x50a1[1137], _0x50a1[1138], _0x50a1[351], _0x50a1[1139], _0x50a1[1140], _0x50a1[1141], _0x50a1[1142], _0x50a1[1143], _0x50a1[1144], _0x50a1[1145], _0x50a1[1146], _0x50a1[1147], _0x50a1[1148], _0x50a1[1149], _0x50a1[1150], _0x50a1[1151], _0x50a1[1152], _0x50a1[1153], _0x50a1[1154], _0x50a1[1155], _0x50a1[1156], _0x50a1[1157], _0x50a1[1158], _0x50a1[563], _0x50a1[1159], _0x50a1[1160], _0x50a1[568], _0x50a1[1161], _0x50a1[1162], _0x50a1[576], _0x50a1[1163], _0x50a1[1164], _0x50a1[345], _0x50a1[1165], _0x50a1[350], _0x50a1[1166], _0x50a1[1167], _0x50a1[1168], _0x50a1[1169], _0x50a1[1170], _0x50a1[1171], _0x50a1[1172], _0x50a1[1173], _0x50a1[1174], _0x50a1[1175], _0x50a1[1176], _0x50a1[1177], _0x50a1[1178], _0x50a1[1179], _0x50a1[1180], _0x50a1[1181], _0x50a1[1182], _0x50a1[1183], _0x50a1[1184], _0x50a1[1185], _0x50a1[1186], _0x50a1[1187], _0x50a1[1188], _0x50a1[1189], _0x50a1[595], _0x50a1[1190], _0x50a1[1191], _0x50a1[1192], _0x50a1[1193], _0x50a1[1194], _0x50a1[1195], _0x50a1[1196], _0x50a1[1197], _0x50a1[1198], _0x50a1[1199], _0x50a1[1200], _0x50a1[1201], _0x50a1[1202], _0x50a1[1203], _0x50a1[1204], _0x50a1[1205], _0x50a1[1206], _0x50a1[1207], _0x50a1[1208], _0x50a1[1209], _0x50a1[305], _0x50a1[1210], _0x50a1[1211], _0x50a1[1212], _0x50a1[1213], _0x50a1[712], _0x50a1[713], _0x50a1[714], _0x50a1[715], _0x50a1[1214], _0x50a1[1215], _0x50a1[1216], _0x50a1[1217], _0x50a1[1218], _0x50a1[1219], _0x50a1[1220], _0x50a1[1221], _0x50a1[1222], _0x50a1[1223], _0x50a1[1224], _0x50a1[1225], _0x50a1[1226], _0x50a1[1227], _0x50a1[1228], _0x50a1[1229], _0x50a1[1230], _0x50a1[1231], _0x50a1[1232], _0x50a1[1233], _0x50a1[1234], _0x50a1[1235], _0x50a1[1236], _0x50a1[1237], _0x50a1[1238], _0x50a1[1239], _0x50a1[1240], _0x50a1[1241], _0x50a1[1242], _0x50a1[1243], _0x50a1[1244], _0x50a1[1245], _0x50a1[1246], _0x50a1[1247], _0x50a1[1248], _0x50a1[1249], _0x50a1[1250], _0x50a1[1251], _0x50a1[1252], _0x50a1[1253], _0x50a1[691], _0x50a1[1254], _0x50a1[1255], _0x50a1[1256], _0x50a1[1257], _0x50a1[1258], _0x50a1[726], _0x50a1[87], _0x50a1[1259], _0x50a1[1260], _0x50a1[1261], _0x50a1[1262], _0x50a1[1263], _0x50a1[1264], _0x50a1[1265], _0x50a1[1266], _0x50a1[1267], _0x50a1[1268], _0x50a1[1269], _0x50a1[1270], _0x50a1[1271], _0x50a1[1272], _0x50a1[1273], _0x50a1[1274], _0x50a1[1275], _0x50a1[1276], _0x50a1[1277], _0x50a1[1278], _0x50a1[1279], _0x50a1[1280], _0x50a1[1281], _0x50a1[1282], _0x50a1[1283], _0x50a1[1284], _0x50a1[1285], _0x50a1[1286], _0x50a1[1287], _0x50a1[1288], _0x50a1[1], _0x50a1[1289], _0x50a1[1290], _0x50a1[1291], _0x50a1[1292], _0x50a1[1293], _0x50a1[1294], _0x50a1[1295], _0x50a1[1296], _0x50a1[1297], _0x50a1[1298], _0x50a1[1299], _0x50a1[1300], _0x50a1[1301], _0x50a1[1302], _0x50a1[1303], _0x50a1[1304], _0x50a1[1305], _0x50a1[1306], _0x50a1[1307], _0x50a1[1308], _0x50a1[1309], _0x50a1[297], _0x50a1[1310], _0x50a1[1311], _0x50a1[1312], _0x50a1[1313], _0x50a1[1314], _0x50a1[1315], _0x50a1[1316], _0x50a1[1317], _0x50a1[1318], _0x50a1[1319], _0x50a1[1320], _0x50a1[1321], _0x50a1[1322], _0x50a1[1323], _0x50a1[1324], _0x50a1[1325], _0x50a1[1326], _0x50a1[1327], _0x50a1[1328], _0x50a1[1329], _0x50a1[1330], _0x50a1[1331], _0x50a1[1332]]
      , y = x(g)
      , v = _[_0x50a1[1333]](r)[_0x50a1[1333]](o)[_0x50a1[1333]](l)[_0x50a1[1333]](d)[_0x50a1[1333]](u)[_0x50a1[1333]](h)[_0x50a1[1333]](g);
    a[_0x50a1[1335]](_0x50a1[1334], _0x50a1[37], v),
    a[_0x50a1[1338]](_0x50a1[195], {
        documentTypes: t,
        mediaTypes: i,
        mediaFeatures: n,
        mediaValueKeywords: s,
        propertyKeywords: c,
        nonStandardPropertyKeywords: p,
        fontProperties: m,
        counterDescriptors: b,
        colorKeywords: f,
        valueKeywords: y,
        tokenHooks: {
            "/": function(a, x) {
                return !!a[_0x50a1[218]](_0x50a1[1336]) && (x[_0x50a1[221]] = e,
                e(a, x))
            }
        },
        name: _0x50a1[37]
    }),
    a[_0x50a1[1338]](_0x50a1[1339], {
        mediaTypes: i,
        mediaFeatures: n,
        mediaValueKeywords: s,
        propertyKeywords: c,
        nonStandardPropertyKeywords: p,
        colorKeywords: f,
        valueKeywords: y,
        fontProperties: m,
        allowNested: !0,
        tokenHooks: {
            "/": function(a, x) {
                return a[_0x50a1[218]](_0x50a1[189]) ? (a[_0x50a1[1340]](),
                [_0x50a1[1337], _0x50a1[1337]]) : a[_0x50a1[218]](_0x50a1[1336]) ? (x[_0x50a1[221]] = e,
                e(a, x)) : [_0x50a1[1341], _0x50a1[1341]]
            },
            ":": function(a) {
                return !!a[_0x50a1[225]](/\s*\{/) && [null, _0x50a1[255]]
            },
            $: function(a) {
                return a[_0x50a1[225]](/^[\w-]+/),
                a[_0x50a1[225]](/^\s*:/, !1) ? [_0x50a1[233], _0x50a1[234]] : [_0x50a1[233], _0x50a1[235]]
            },
            "#": function(a) {
                return !!a[_0x50a1[218]](_0x50a1[255]) && [null, _0x50a1[268]]
            }
        },
        name: _0x50a1[37],
        helperType: _0x50a1[1342]
    }),
    a[_0x50a1[1338]](_0x50a1[1343], {
        mediaTypes: i,
        mediaFeatures: n,
        mediaValueKeywords: s,
        propertyKeywords: c,
        nonStandardPropertyKeywords: p,
        colorKeywords: f,
        valueKeywords: y,
        fontProperties: m,
        allowNested: !0,
        tokenHooks: {
            "/": function(a, x) {
                return a[_0x50a1[218]](_0x50a1[189]) ? (a[_0x50a1[1340]](),
                [_0x50a1[1337], _0x50a1[1337]]) : a[_0x50a1[218]](_0x50a1[1336]) ? (x[_0x50a1[221]] = e,
                e(a, x)) : [_0x50a1[1341], _0x50a1[1341]]
            },
            "@": function(a) {
                return a[_0x50a1[218]](_0x50a1[255]) ? [null, _0x50a1[268]] : !a[_0x50a1[225]](/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, !1) && (a[_0x50a1[212]](/[\w\\\-]/),
                a[_0x50a1[225]](/^\s*:/, !1) ? [_0x50a1[233], _0x50a1[234]] : [_0x50a1[233], _0x50a1[235]])
            },
            "&": function() {
                return [_0x50a1[223], _0x50a1[223]]
            }
        },
        name: _0x50a1[37],
        helperType: _0x50a1[1344]
    }),
    a[_0x50a1[1338]](_0x50a1[1345], {
        documentTypes: t,
        mediaTypes: i,
        mediaFeatures: n,
        propertyKeywords: c,
        nonStandardPropertyKeywords: p,
        fontProperties: m,
        counterDescriptors: b,
        colorKeywords: f,
        valueKeywords: y,
        supportsAtComponent: !0,
        tokenHooks: {
            "/": function(a, x) {
                return !!a[_0x50a1[218]](_0x50a1[1336]) && (x[_0x50a1[221]] = e,
                e(a, x))
            }
        },
        name: _0x50a1[37],
        helperType: _0x50a1[1346]
    })
}),
$(document)[_0x50a1[50]](function() {
    $(_0x50a1[1354])[_0x50a1[47]](function(a) {
        $(_0x50a1[1351])[_0x50a1[28]](_0x50a1[1350]),
        $(_0x50a1[1351])[_0x50a1[16]](_0x50a1[1352]),
        $(_0x50a1[1351])[_0x50a1[16]](_0x50a1[1353])
    }),
    $(_0x50a1[1355])[_0x50a1[47]](function(a) {
        $(_0x50a1[1351])[_0x50a1[16]](_0x50a1[1350]),
        $(_0x50a1[1351])[_0x50a1[28]](_0x50a1[1352]),
        $(_0x50a1[1351])[_0x50a1[16]](_0x50a1[1353])
    }),
    $(_0x50a1[1356])[_0x50a1[47]](function(a) {
        $(_0x50a1[1351])[_0x50a1[16]](_0x50a1[1350]),
        $(_0x50a1[1351])[_0x50a1[16]](_0x50a1[1352]),
        $(_0x50a1[1351])[_0x50a1[28]](_0x50a1[1353])
    }),
    $(_0x50a1[1351])[_0x50a1[1357]](function(a) {
        $(_0x50a1[1351])[_0x50a1[16]](_0x50a1[1350]),
        $(_0x50a1[1351])[_0x50a1[16]](_0x50a1[1352]),
        $(_0x50a1[1351])[_0x50a1[16]](_0x50a1[1353])
    })
});
