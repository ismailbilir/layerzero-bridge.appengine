import { TConfig } from './index';
import { TOKEN } from '../services/operations/interfaces';

const api = {
  validators: [
    'https://testnet.bridge.hmny.io:8081',
    'https://testnet.bridge.hmny.io:8082',
    'https://testnet.bridge.hmny.io:8083',
  ],
  threshold: 2, // minimum validators number to do operation
  assetServiceUrl: 'https://testnet.bridge.hmny.io:8084', // assets statistic service
};

const binanceClient: TConfig = {
  // nodeURL: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  nodeURL: 'https://data-seed-prebsc-2-s1.binance.org:8545',
  explorerURL: 'https://testnet.bscscan.com',
  tokens: [TOKEN.ERC20, TOKEN.ONE, TOKEN.ETH, TOKEN.HRC20],
  contracts: {
    erc20Manager: '0x792bEC87EB65a59c5051Ee76c19E80D444A3C8e1',
    multisigWallet: '0x310336b9EBc8291f2Fde665145110d2ace555a13',
    hrc20Manager: '0xa1f590888e35FF13c3C02090ADDF5a31ceC5611f',
    ethManager: '0x792bEC87EB65a59c5051Ee76c19E80D444A3C8e1',

    nativeTokenHRC20: '0xBEF55684b382BaE72051813a898d17282066c007',

    tokenManager: '0x24f5301f563809F78e1307e8Fb102b453E6c40c6',

    erc721Manager: '0x426A61A2127fDD1318Ec0EdCe02474f382FdAd30',
    busd: '0xa011471158D19854aF08A22839f81321309D4A12',
    busdManager: '0xCC93449c89e8064124FFe1E9d3A84398b4f90ebd',
    link: '0xFEFB4061d5c4F096D29e6ac8e300314b5F00199c',
    linkManager: '0x9EDC8d0Bde1Fc666831Bda1ded5B34A45f9E886C',

    hrc721Manager: '',
    hrc721TokenManager: '',

    hrc1155Manager: '',
    hrc1155TokenManager: '',

    erc1155Manager: '',
    erc1155TokenManager: '',
  },
  gasPrice: 100000000000,
};

const arbitrumClient: TConfig = {
  nodeURL: 'https://rpc.ankr.com/arbitrum',
  explorerURL: 'https://arbiscan.io/',
  tokens: [TOKEN.ERC20, TOKEN.ONE, TOKEN.ETH, TOKEN.HRC20],
  contracts: {
    multisigWallet: '0x715CdDa5e9Ad30A0cEd14940F9997EE611496De6',

    erc20Manager: '0xfD53b1B4AF84D59B20bF2C20CA89a6BeeAa2c628',
    hrc20Manager: '0xfD53b1B4AF84D59B20bF2C20CA89a6BeeAa2c628',
    ethManager: '0xfD53b1B4AF84D59B20bF2C20CA89a6BeeAa2c628',

    tokenManager: '0xfE601dE9D4295274b9904D5a9Ad7069F23eE2B32',
    nativeTokenHRC20: '0xb1f6E61E1e113625593a22fa6aa94F8052bc39E0',

    busd: '0xa011471158D19854aF08A22839f81321309D4A12',
    busdManager: '0xCC93449c89e8064124FFe1E9d3A84398b4f90ebd',
    link: '0xFEFB4061d5c4F096D29e6ac8e300314b5F00199c',
    linkManager: '0x9EDC8d0Bde1Fc666831Bda1ded5B34A45f9E886C',
    erc721Manager: '0x426A61A2127fDD1318Ec0EdCe02474f382FdAd30',

    hrc721Manager: '',
    hrc721TokenManager: '',

    hrc1155Manager: '',
    hrc1155TokenManager: '',

    erc1155Manager: '',
    erc1155TokenManager: '',
  },
  gasPrice: 6000000000,
  gasLimit: 1000000,
};

const ethClient: TConfig = {
  nodeURL: 'https://kovan.infura.io/v3',
  explorerURL: 'https://kovan.etherscan.io',
  tokens: [TOKEN.ERC721, TOKEN.HRC721, TOKEN.ERC1155, TOKEN.HRC1155, TOKEN.HRC20, TOKEN.BUSD, TOKEN.LINK, TOKEN.ERC20, TOKEN.ONE, TOKEN.ETH],
  contracts: {
    busd: '0xb0e18106520d05adA2C7fcB1a95f7db5e3f28345',
    link: '0x69FcFe4aFF2778d15f186AcF8845a0Dc0ec08CC7',
    busdManager: '0x89Cb9b988ECe933becbA1001aEd98BdAa660Ef29',
    linkManager: '0xe65143628d598F867Ed5139Ff783bA6f33D51bFa',
    erc20Manager: '0xba1f4b06225A2Cf8B56D711539CbbeF1c097a886',
    erc721Manager: '0x364907a5B9ba4A3353B4Dd11aDC0b2bE8AC58253',
    multisigWallet: '0x4D2F08369476F21D4DEB834b6EA9c41ACAd11413',
    tokenManager: '0xAa0fFF0074E898B922DBAb2c7496cdcC84A28fa0',
    hrc20Manager: '0xA64D59E4350f61679ACDE8eEC06421233Bd2B4E1',
    hrc721Manager: '0x4500Bbc8e248629C20F0b87F865eD1C8649572B9',
    hrc721TokenManager: '0x66e531be7251c8225e8f6ce97a9Aa1Ff2A05613c',
    hrc1155Manager: '0xdc910Bfb4b5274ef1A38a7323D442bA616e671e6',
    hrc1155TokenManager: '0x9cEB5B87C31Dc3a9891eC707656D55b7a4cD0541',
    erc1155Manager: '0x0E60717f030f3aF1AfEc2758fDbd9c21F00E13d3',
    erc1155TokenManager: '0xf7d9bb030cc9ca461082c207bb094ac1465b9d92',
    ethManager: '0xCE670B66C5296e29AB39aBECBC92c60ea330F5dC',
    nativeTokenHRC20: '0x268d6fF391B41B36A13B1693BD25f87FB4E4b392',
  },
};

const hmyClient = {
  nodeURL: 'https://api.s0.b.hmny.io',
  explorerURL: 'https://explorer.testnet.harmony.one/#',
  chainId: 2,
  contracts: {
    busd: '0xc4860463c59d59a9afac9fde35dff9da363e8425',
    link: '0xac8bd2b27d45d582a3882e33f626f4e3d3f49c92',
    busdManager: '0xdc7c9eac2065d683adbe286b54bab4a62baa2654',
    linkManager: '0x32b473d012bea1a7b54df2fa4d9451fc2e37d5e9',
    erc20Manager: '0x97a5455c765c55b6d37eb87ee6bb1205cbf0c570',
    erc20SubManager: '0xef81ab52721abbdae90862ee1ac10c20d3af2d0a',
    erc721Manager: '0xaf573bc93dee447151d5ad778f07eb070f4e82e4',
    depositManager: '0xce3110e4ab757672b0535a9c1410fed80647b693',
  },
};

export const testnet = {
  api,
  ethClient,
  binanceClient,
  arbitrumClient,
  hmyClient,
};
