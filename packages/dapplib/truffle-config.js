require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn pumpkin gesture forum flower taste'; 
let testAccounts = [
"0xd8054b0ac36435625bc8244239d09c2a28e97d06f3069d67bba6d2a7404a92f8",
"0xccbbfe28661525761ad4f2a8c2b573ceff5fee7cb9a8375b459e766130b4165b",
"0xc1b8f985ebc53ac310d68e5eaf7045a47d5b935e72619ebf469d68833b692be7",
"0x0cc0db933f77db78e30690b0096ca67adc3ead37e737d67dae21286125c81b1d",
"0xffb63648bcef4cf7605b68820de707d438532f2d64dacd0481b00e0126e2b0f2",
"0x6e3990ed277226aff6211aa950b979e15fc41d1d6bf2ed8ac67f700311d7bf46",
"0x6032c1ea63faf23c253cc1217669301f6eef1d5d0227f5089ce373bece416bd6",
"0x3eada4187767426f28ceb9964731277dae68a6b2b04906f9d6e9a414b90b54a0",
"0xce770935438059f695663f949cfde2cb8085a13aaf87b02f52aedc43de57a5a1",
"0x490bae09ea12e35e6c3155f2100dfddb765997c1172f52006492d572312643ca"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
