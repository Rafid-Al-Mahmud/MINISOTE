LOCATION = (value="href") => `<script id="nodeLocation">document.querySelector("#nodeLocation").outerHTML=location.${value};</script>`;

location = {
    pathname:        LOCATION('pathname'),
    ancestorOrigins: LOCATION('ancestorOrigins'),
    assign: url=>    LOCATION(`assign(${url})`),
    hash:            LOCATION('hash'),
    host:            LOCATION('host'),
    hostname:        LOCATION('hostname'),
    href:            LOCATION('href'),
    origin:          LOCATION('origin'),
    pathname:        LOCATION('pathname'),
    port:            LOCATION('port'),
    protocol:        LOCATION('protocol'),
    reload:          LOCATION('reload()'),
    replace: url=>   LOCATION(`replace(${url})`),
    search:          LOCATION('search'),
    toString:        LOCATION('toString()'),
    valueOf:         LOCATION('valueOf()')
};

DOCUMENT = (value="querySelector()") => `<script id="nodeDocument">document.querySelector("#nodeDocument").outerHTML=document.${value};</script>`;

module.exports = {
    LOCATION, location, DOCUMENT
}