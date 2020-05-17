---
layout: post
title: "Bitcoin Private and Public Keys: The Basics"
description: Everything you need to know on Bitcoin Private and Public Keys. Learn about Bitcoin Private Keys and Bitcoin Public Keys, their differences and how they are each used.
date: 2020-05-16
last_modified_at: 2020-05-17
tags: private-keys public-keys mnemonic-recovery addresses wallet
categories: [blog video]
author: kiarabickers
post_image: "/assets/img/blog/thumbnails/01-bitcoin-keys.jpg"
post_video: "https://www.youtube.com/embed/56s_3LNDDqw"
seo:
  type: BlogPosting
image:
  path: "/assets/img/blog/thumbnails/01-bitcoin-keys.jpg"
---

<br>

Bitcoin uses asymmetric or public-key cryptography to create a **key pair** that controls your access to bitcoin on the blockchain. Each bitcoin key pair consists of a public and private key.

## What’s the difference between the bitcoin private and public keys?

A **bitcoin private key** is simply a massive secret number that ***allows bitcoin to be unlocked and sent***. It's called a private key because it's meant to stay concealed and hidden from other people.

A **bitcoin public key** is another large number, but ***allows bitcoin to be locked and received***. It's called a public key because it's meant to be shared with the person who is sending you bitcoin. The public key is generated from the private key but not vice versa.

**You can think of public-key cryptography as a lock with two keys:**

<img src="/assets/img/blog/01-bitcoin-keys/bitcoin-privatekey-publickey-lock.png" alt="bitcoin private key public key" class="center" width="90%">

## How is the private key related to the public key?

Bitcoin Private and Public Keys are related mathematically on a curve. Or, simply the two keys are just two numbers that are mathematically related on an elliptic curve, that's why it's called **elliptic-curve cryptography**.

> Although you don't need to understand this cryptomagic to believe that it works, sometimes understanding the *how* of technology is the key to being able to trust it.

The math isn't as simple, and neither is explaining it. But we can say that a bitcoin private key is randomly generated then plotted on the *secp256k1* curve, and the bitcoin public key is the corresponding point on that curve.

Still don’t understand how bitcoin keys relate . . .

The real point of this magical curve is that it creates ***trap door*** functionality, meaning that once we have the first point on the curve (the private key) the corresponding second point (public key) is easily calculated but impossible to find in the opposite direction.

If you have the private key you always have the public key, but if you have the public key, it is impossible to find the private key. The trap door functionally makes this the perfect tool for the sending and receiving functionality that we have in the public-private keys.

## How is the public key related to the bitcoin key address?

**Public keys are generated from public keys, and addresses are smaller versions of public keys:**

<img src="/assets/img/blog/01-bitcoin-keys/bitcoin-privatekey-publickey-address.png" alt="bitcoin address public key" class="center" width="60%">

When providing someone with a bitcoin address, you're giving them the ability to lock bitcoin on your behalf, at a "location you control" with your private key.

## How are bitcoin private keys generated?

Random number generation is critical in nearly every cryptographic system, unfortunately, computers are fairly bad at generating random numbers. If the number was generated from computer code telling it how to be “random”, that would make it predictable.  Instead, the computer has to seed the random number function with data from outside of the code. To get feel for this you can play around with [bitaddress.org](https://www.bitaddress.org/bitaddress.org-v3.3.0-SHA256-dec17c07685e1870960903d8f58090475b25af946fe95a734f88408cef4aa194.html) as an example, but don't use any of the keys you generate here for real, this is just a tool for understanding.

Bitcoin Core uses the OpenSSL library to seed the randomness needed to generate its random private keys. But not all wallets are using good sources of randomness, something you should look out for.

## How many bitcoin private keys are there?

A lot, about 10 million million million million million million million million, or 115792089237316195423570985008687907852837564279074904382605163141518161494336 to be exact. The number of possible keys is so large, that security of bitcoin relies on the assumption that no one will every randomly generate the same private key twice.

## What is a mnemonic recovery phrase?

**A mnemonic phrase is the private key in a different form:**

<img src="/assets/img/blog/01-bitcoin-keys/bitcoin-privatekey-generation-mnemonic-recovery.png" alt="bitcoin mnemonic recovery phrase" class="center" width="90%">

In the same way, numbers can be expressed as words (zero) and numerical digits (0). The private key is just a very large number that has the same properties. Instead of using the literal word expression of the random private key number (vigintillion, googol, or centillion), bitcoin uses a list of 12 or 24 random words to represent the random number.

As specified in [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki), the purpose of this mnemonic is to make private keys readable by humans, so they can be easily written down as a backup to a private key, or spoken over the telephone and easily shared.

A password can also be added to the phrase, to add some additional protection to your private key backup.

## How exactly do bitcoin private keys work?

Private keys work like a cryptographic lock that's controlled by a smart contract called **Bitcoin Script**. Scripts are stored in the inputs and outputs of a transaction and are the programs that control the locking/unlocking, and sending/receiving funds on the blockchain.

Bitcoin is stored on the blockchain with a specific locking script that is only unlocked by it's corresponding private key. When you want to spend or send that bitcoin by initiating a new transaction, the private key associated with that locking script now creates a signature to prove that it has the authority to move the coins.

## Where are the bitcoin stored?

The blockchain is an evolution in databases. Previously, databases only recorded and logged transfers of value. But on the blockchain, the value is stored on this ledger directly.

Coins are stored in smart contracts (more specifically the scriptPubKey, also called the locking script or a UTXO) on the blockchain. When you initiate a transaction, you create a signature with your private key, to unlock a specific batch of bitcoin on the blockchain, proving that you are authorized to move those funds. Your private key gives you control over your bitcoin and is not stored on the blockchain but in your wallet.

## How do you store private keys safely?

The best way to keep your private keys safe is offline, in cold storage, on a dedicated hardware device, and with your mnemonic backup stored separately.

## Why should I want to store my private keys?

Storing and managing your private keys is the only way to have full control of your bitcoin. That being said, with great power comes great responsibility. If your private keys are misplaced, your backup is lost, you trusted a wallet that you shouldn't have, or you forgot to write down your backup entirely, there is no support number for you to call. This is why it’s important to understand what you’re doing and educate yourself about bitcoin public and private keys.
