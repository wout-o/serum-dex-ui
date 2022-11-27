const web3_js_1 = require("@solana/web3.js");

export const TOKEN_MINTS = [
    {
        address: new web3_js_1.PublicKey("RLBxxFkseAZ4RgJH3Sqn8jXxhmGoz9jWxDNJMh8pL7a"),
        name: "RLB",
    },
    {
        address: new web3_js_1.PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
        name: "USDC",
    }
];

export const MARKETS = [
    {
        address: new web3_js_1.PublicKey("DFdcGFcAVWZ3UgVgpbBChFKen3URZdZ8dmju8GTXQgCE"),
        name: "RLB/USDC",
        programId: new web3_js_1.PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"),
        deprecated: false,
    },
    {
        address: new web3_js_1.PublicKey("72h8rWaWwfPUL36PAFqyQZU8RT1V3FKG7Nc45aK89xTs"),
        name: "RLB/USDC",
        programId: new web3_js_1.PublicKey("srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX"),
        deprecated: false,
    }
];