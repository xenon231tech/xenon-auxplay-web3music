# Wallet Configuration

/**
 * Wallet configuration for Web3 integration
 * Supports: MetaMask, WalletConnect, Coinbase Wallet
 */

const walletConfig = {
  // Chains
  chains: {
    base: {
      id: 8453,
      name: 'Base',
      network: 'base',
      nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
      },
      rpcUrls: {
        default: { http: ['https://mainnet.base.org'] },
      },
      blockExplorers: {
        default: { name: 'Basescan', url: 'https://basescan.org' },
      },
    },
  },

  // Wallet Connectors
  connectors: [
    {
      name: 'MetaMask',
      icon: '🦊',
      connector: 'metaMask',
    },
    {
      name: 'WalletConnect',
      icon: '🔗',
      connector: 'walletConnect',
    },
    {
      name: 'Coinbase Wallet',
      icon: '🪙',
      connector: 'coinbaseWallet',
    },
  ],

  // RPC Endpoints
  rpc: {
    mainnet: 'https://mainnet.base.org',
    testnet: 'https://sepolia.base.org',
  },

  // Contract Addresses
  contracts: {
    auxToken: process.env.VITE_AUX_TOKEN_ADDRESS,
    streaming: process.env.VITE_STREAMING_CONTRACT_ADDRESS,
    creatorRegistry: process.env.VITE_CREATOR_REGISTRY_ADDRESS,
  },

  // Gas Settings
  gas: {
    standard: 21000,
    fast: 50000,
    custom: 100000,
  },
};

export default walletConfig;
