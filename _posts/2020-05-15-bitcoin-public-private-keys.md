---
layout: post
title: "Bitcoin: Public and Private Keys"
date: 2020-05-10
tags: bitcoin private keys, bitcoin public keys
categories: [blog video]
author: "kiara bickers"
post_image: "/assets/img/blog/thumbnails/01-bitcoin-keys.jpg"
post_video: "https://www.youtube.com/embed/56s_3LNDDqw"
seo:
  type: BlogPosting
image:
  path: "/assets/img/blog/thumbnails/01-bitcoin-keys.jpg"
---

Bitcoin uses public-key cryptography to create a key pair that controls your access to bitcoin on the blockchain. The key pair consists of a private key to unlock and send bitcoin, and derived from it is a series of public keys that are used to receive and lock bitcoin. Addresses are smaller versions of public keys, that serves as your one-time location on the blockchain. When providing someone with a bitcoin address you're giving them the ability to lock up bitcoin on your behalf, at a location you control with your private key.

## How are bitcoin private keys generated?

Random numbers are a big deal in nearly every cryptographic system. In Bitcoin, private keys are generated from a very large random number also called a seed. The set of possible numbers is so large, that security of bitcoin relies on the assumption that no one will every randomly generate the same private key twice.

## What is a mnemonic phrase, mnemonic recovery phrase, or bitcoin seed?

In the same way, numbers can be expressed as words (zero) and numerical digits (0), the private key is just a very large number that has the same properties. Instead of using the literal word expression of the random private key number (vigintillion, googol, or centillion), bitcoin uses a list of 12 or 24 random words to represent the random number.

As specified in [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki), the motivation for this mnemonic is make private keys human-readable, so they can be easily written down as a backup to a private key, or spoken over the telephone and easily shared. A password can also be added to the phrase, to add some additional protection to your private key backup.

## Where is the bitcoin actually stored?

The blockchain is an evolution in databases. Previously databases only recorded and logged transfers of value, but on the blockchain, the value is stored on this ledger directly. Coins are stored in smart contracts (more specifically the scriptPubKey, also called the locking script, or a UTXO) on the blockchain. When you initate a transaction you create a signature with your private key, to unlock a specific batch of bitcoin on the blockchain, proving that you are authorized to move those funds. Your private key gives you control over your bitcoin, and is not stored on the blockchain but in your wallet.
