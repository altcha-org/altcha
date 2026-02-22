export var AudioState;
(function (AudioState) {
    AudioState["ERROR"] = "error";
    AudioState["LOADING"] = "loading";
    AudioState["PLAYING"] = "playing";
    AudioState["PAUSED"] = "paused";
    AudioState["READY"] = "ready";
})(AudioState || (AudioState = {}));
export var HmacAlgorithm;
(function (HmacAlgorithm) {
    HmacAlgorithm["SHA_256"] = "SHA-256";
    HmacAlgorithm["SHA_384"] = "SHA-384";
    HmacAlgorithm["SHA_512"] = "SHA-512";
})(HmacAlgorithm || (HmacAlgorithm = {}));
export var State;
(function (State) {
    State["CODE"] = "code";
    State["ERROR"] = "error";
    State["VERIFIED"] = "verified";
    State["VERIFYING"] = "verifying";
    State["UNVERIFIED"] = "unverified";
    State["EXPIRED"] = "expired";
})(State || (State = {}));
