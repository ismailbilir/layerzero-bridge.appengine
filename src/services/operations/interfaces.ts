export enum NETWORK_TYPE {
  ETHEREUM = 'ETHEREUM',
  BINANCE = 'BINANCE',
  ARBITRUM = 'ARBITRUM',
}

export enum TOKEN_TYPE {
  MAIN = 'main',
  SUB = 'sub',
}

export enum OPERATION_TYPE {
  ETH_ONE = 'eth_to_one',
  ONE_ETH = 'one_to_eth',
}

export enum TOKEN {
  BUSD = 'busd',
  LINK = 'link',
  ERC20 = 'erc20',
  HRC20 = 'hrc20',
  ETH = 'eth',
  ONE = 'one',
  ERC721 = 'erc721',
  HRC721 = 'hrc721',
  ERC1155 = 'erc1155',
  HRC1155 = 'hrc1155',
}

export enum ACTION_TYPE {
  // ALL
  'depositOne' = 'depositOne',
  'withdrawOne' = 'withdrawOne',

  // ETH_TO_ONE
  'getHRC20Address' = 'getHRC20Address',
  'approveEthManger' = 'approveEthManger',
  'lockToken' = 'lockToken',
  'waitingBlockNumber' = 'waitingBlockNumber',
  'mintToken' = 'mintToken',
  'mintTokenRollback' = 'mintTokenRollback',
  'topUpAccount' = 'topUpAccount',

  // ONE_TO_ETH
  'approveHmyManger' = 'approveHmyManger',
  'burnToken' = 'burnToken',
  'waitingBlockNumberHarmony' = 'waitingBlockNumberHarmony',
  'unlockToken' = 'unlockToken',
  'unlockTokenRollback' = 'unlockTokenRollback',

  // HRC20
  'approveHRC20HmyManger' = 'approveHRC20HmyManger',
  'approveHRC20EthManger' = 'approveHRC20EthManger',
  'getERC20Address' = 'getERC20Address',
  'lockHRC20Token' = 'lockHRC20Token',
  'unlockHRC20Token' = 'unlockHRC20Token',
  'burnHRC20Token' = 'burnHRC20Token',
  'mintHRC20Token' = 'mintHRC20Token',
  'unlockHRC20TokenRollback' = 'unlockHRC20TokenRollback',
  'mintHRC20TokenRollback' = 'mintHRC20TokenRollback',

  // HRC721
  'getHRC721Address' = 'getHRC721Address',
  'approveHRC721HmyManger' = 'approveHRC721HmyManger',
  'approveHRC721EthManger' = 'approveHRC721EthManger',
  'lockHRC721Token' = 'lockHRC721Token',
  'unlockHRC721Token' = 'unlockHRC721Token',
  'burnHRC721Token' = 'burnHRC721Token',
  'mintHRC721Token' = 'mintHRC721Token',
  'unlockHRC721TokenRollback' = 'unlockHRC721TokenRollback',
  'mintHRC721TokenRollback' = 'mintHRC721TokenRollback',

  // HRC1155
  'getHRC1155Address' = 'getHRC1155Address',
  'approveHRC1155HmyManger' = 'approveHRC1155HmyManger',
  'approveHRC1155EthManger' = 'approveHRC1155EthManger',
  'lockHRC1155Token' = 'lockHRC1155Token',
  'unlockHRC1155Token' = 'unlockHRC1155Token',
  'burnHRC1155Token' = 'burnHRC1155Token',
  'mintHRC1155Token' = 'mintHRC1155Token',
  'unlockHRC1155TokenRollback' = 'unlockHRC1155TokenRollback',
  'mintHRC1155TokenRollback' = 'mintHRC1155TokenRollback',

  // ERC1155
  'getERC1155Address' = 'getERC1155Address',
  'approveERC1155HmyManger' = 'approveERC1155HmyManger',
  'approveERC1155EthManger' = 'approveERC1155EthManger',
  'lockERC1155Token' = 'lockERC1155Token',
  'unlockERC1155Token' = 'unlockERC1155Token',
  'burnERC1155Token' = 'burnERC1155Token',
  'mintERC1155Token' = 'mintERC1155Token',
  'unlockERC1155TokenRollback' = 'unlockERC1155TokenRollback',
  'mintERC1155TokenRollback' = 'mintERC1155TokenRollback',
}

export enum STATUS {
  ERROR = 'error',
  SUCCESS = 'success',
  WAITING = 'waiting',
  IN_PROGRESS = 'in_progress',
  CANCELED = 'canceled',
}

export interface ITokenInfo {
  token: TOKEN;
  erc20Address: string;
  hrc20Address: string;
  network?: NETWORK_TYPE;
}

export interface ITokenDetails extends ITokenInfo {
  name: string;
  symbol: string;
  decimals?: number;
  network: NETWORK_TYPE;
}

export enum MANAGER_ACTION {
  RESET = 'reset',
  SET_TRANSACTION = 'set_transaction',
  RELOAD_EVENTS = 'reload_events',
}
