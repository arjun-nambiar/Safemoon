/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ERC20, ERC20Interface } from "../../test/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161099238038061099283398101604081905261002f916100d1565b610039338261003f565b50610110565b8060015461004d91906100ea565b6001556001600160a01b0382166000908152600260205260409020546100749082906100ea565b6001600160a01b0383166000818152600260205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906100c59085815260200190565b60405180910390a35050565b6000602082840312156100e357600080fd5b5051919050565b6000821982111561010b57634e487b7160e01b600052601160045260246000fd5b500190565b6108738061011f6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b41146101ec578063a9059cbb14610211578063d505accf14610224578063dd62ed3e1461023957600080fd5b80633644e515146101a357806370a08231146101ac5780637ecebe00146101cc57600080fd5b806306fdde03146100d4578063095ea7b31461011557806318160ddd1461013857806323b872dd1461014f57806330adf81f14610162578063313ce56714610189575b600080fd5b6100ff6040518060400160405280600c81526020016b5361666573776170204c507360a01b81525081565b60405161010c919061063e565b60405180910390f35b6101286101233660046106af565b610264565b604051901515815260200161010c565b61014160015481565b60405190815260200161010c565b61012861015d3660046106d9565b61027a565b6101417f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b610191601281565b60405160ff909116815260200161010c565b61014160045481565b6101416101ba366004610715565b60026020526000908152604090205481565b6101416101da366004610715565b60056020526000908152604090205481565b6100ff6040518060400160405280600681526020016505346532d4c560d41b81525081565b61012861021f3660046106af565b61030f565b610237610232366004610737565b61031c565b005b6101416102473660046107aa565b600360209081526000928352604080842090915290825290205481565b6000610271338484610534565b50600192915050565b6001600160a01b0383166000908152600360209081526040808320338452909152812054600019146102fa576001600160a01b03841660009081526003602090815260408083203384529091529020546102d59083906107f3565b6001600160a01b03851660009081526003602090815260408083203384529091529020555b610305848484610596565b5060019392505050565b6000610271338484610596565b428410156103655760405162461bcd60e51b815260206004820152601160248201527014d859995cddd85c0e8811561412549151607a1b60448201526064015b60405180910390fd5b6004546001600160a01b038816600090815260056020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b9190876103b88361080a565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e0016040516020818303038152906040528051906020012060405160200161043192919061190160f01b81526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa15801561049c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906104d25750886001600160a01b0316816001600160a01b0316145b61051e5760405162461bcd60e51b815260206004820152601b60248201527f53616665737761703a20494e56414c49445f5349474e41545552450000000000604482015260640161035c565b610529898989610534565b505050505050505050565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166000908152600260205260409020546105ba9082906107f3565b6001600160a01b0380851660009081526002602052604080822093909355908416815220546105ea908290610825565b6001600160a01b0380841660008181526002602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906105899085815260200190565b600060208083528351808285015260005b8181101561066b5785810183015185820160400152820161064f565b8181111561067d576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146106aa57600080fd5b919050565b600080604083850312156106c257600080fd5b6106cb83610693565b946020939093013593505050565b6000806000606084860312156106ee57600080fd5b6106f784610693565b925061070560208501610693565b9150604084013590509250925092565b60006020828403121561072757600080fd5b61073082610693565b9392505050565b600080600080600080600060e0888a03121561075257600080fd5b61075b88610693565b965061076960208901610693565b95506040880135945060608801359350608088013560ff8116811461078d57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156107bd57600080fd5b6107c683610693565b91506107d460208401610693565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600082821015610805576108056107dd565b500390565b600060001982141561081e5761081e6107dd565b5060010190565b60008219821115610838576108386107dd565b50019056fea26469706673582212208db031041a3e37148f410269f45f8df2f79fa7c2f221a041e544960947242c5a64736f6c634300080b0033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20> {
    return super.deploy(_totalSupply, overrides || {}) as Promise<ERC20>;
  }
  override getDeployTransaction(
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_totalSupply, overrides || {});
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
