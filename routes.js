const LOCATION = (value="href") => `<script id="nodeLocation">document.querySelector("#nodeLocation").outerHTML=location.${value};</script>`;
const location = {
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

module.exports = {
    location, LOCATION
}