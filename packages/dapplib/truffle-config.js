require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth office color hunt opinion swallow gate'; 
let testAccounts = [
"0x8ca12798ff77d10d5aa32e20143346ada6eb6815aa7d6ef8dbece888a09e0944",
"0x7526bb2f61ae581fa6f5e11d55ce35f579e43cdf39c2dcd6017c26d3e7fe1826",
"0x28a4bec4e0396ca323362a7df2f4ce5622a557d29307a8cb17c34d5c3a823675",
"0x7d37ea60b66a2d0b4914086dba049ef75d0be1934c8cb979eeb1663f839353ae",
"0xdf13144eb85c9a22974919d2a6a90681a164081db0e7ec55682aa475f790d46d",
"0xdccfe44582837026a08d3e6a0a4ca56f3d5972f1f10ac55b49e49ed1151451cd",
"0x26ed155c7f661f8a7ca40cdcd4437ef052cf91de2d84984e3d76ece4bfd5a50a",
"0xcb6a87e05628f30176330b530aa3a861b3e6c6b8f424e6d5c0a2358caa803a0b",
"0x10ee7abe72be5d637125f5f91c8d6c6a124d47e49754760930af906d945bd40f",
"0x4beed66f1e055aaca451d183a55a807adec6104629aa216da087f6b6532a2fd3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


