---
layout: post
title: "Bitcoin Private Keys, Public Keys, and Addresses: The Basics"
description: Everything you need to know on Bitcoin Private and Public Keys. Learn about Bitcoin Private Keys and Bitcoin Public Keys, their differences and how they are each used.
date: 2020-05-16
last_modified_at: 2020-05-21
keywords: bitcoin private keys, bitcoin private, bitcoin key, bitcoin keys, what is a private key, what is a public key, bitcoin public key and private key, bitcoin public key from private key, how to generate private key from bitcoin address, how to get private key from bitcoin address
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

Bitcoin uses cryptography to create a key pair that controls access to bitcoin on the blockchain. Each bitcoin key pair consists of a public and private key.

## What is a Bitcoin private key?

A **bitcoin private key** is simply a large (256 bits) secret number that ***allows bitcoin to be unlocked and sent***. Each private key creates a unique signature that authorizes the transaction of bitcoin for the owner. It’s called a private key because it is meant to be kept private and not shown to other people.

## What is a Bitcoin public key?

A **bitcoin public key** is another large number but ***allows bitcoin to be locked and received***. It’s called a public key because it is meant to be shared publicly and enables you to receive funds.

## What is a Bitcoin address?

A bitcoin address is a hashed smaller version of the private key.

## What is the difference between private and public keys?

People can over-complicate explanations by trying to explain digital signatures, signing transactions, and wallet import formats. But the truth is most users don’t need any of this detail to understand the basics of how keys work in Bitcoin.

### You can think of public-key cryptography as a lock, but with two keys instead of one:

<img src="/assets/img/blog/01-bitcoin-keys/bitcoin-privatekey-publickey-lock.png" alt="bitcoin private key public key bitcoin clarity" class="center" width="90%">


Although you don’t need to understand cryptomagic to believe that it works, sometimes understanding the *how* is the key to being able to trust it.

## How does the Bitcoin private key relate to the Bitcoin public key?

These two keys (or numbers) are related mathematically on the secp256k1 elliptic curve. The private key is a randomly generated number plotted on the curve, and the corresponding public key is a related point on that curve.

The real point of this magical curve is that it creates **trap door functionality**, meaning that once we generate the first point on the curve (the private key) the corresponding second point (public key) is easily found but impossible to find in the opposite direction. If the user has the private key then the user always has the public key, but if other users have the public key it’s mathematically impossible for them to do the reverse to find the private key.

## Is the Bitcoin address the same as the public key?

### Addresses are smaller (hashed version) of public keys:

<img src="/assets/img/blog/01-bitcoin-keys/bitcoin-privatekey-publickey-address.png" alt="bitcoin address public key bitcoin clarity" class="center" width="60%">

Because public kets come in different formats they can start with a 1 , 3 or bc1. There are uncompressed public keys, compressed public keys, and wif format. But what’s important to understand is that when you’re providing someone with a public address (or QR code) you’re giving them the ability to lock bitcoin on your behalf.

## How are bitcoin keys and addresses generated?

<div class='embed-container'>
	<iframe src='https://www.youtube.com/embed//QR1HZYod7Vs' frameborder='0' allowfullscreen></iframe>
</div>

The bitcoin wallet software generates the users' wallet file, addresses, and keys. The private is generated from a part of the software that is specially designed to be able to handle big numbers and generate them at random.

**TIP:** To get a more hands-on understanding of this you can play around with [bitaddress.org](https://www.bitaddress.org/bitaddress.org-v3.3.0-SHA256-dec17c07685e1870960903d8f58090475b25af946fe95a734f88408cef4aa194.html), but don’t use for any real keys you plan on using, this is just a tool for understanding. For keys that you plan on using, you'll want to use Bitcoin Core or a hardware wallet.

## How many private keys are there?

There a lot, about 10 million million million million million million million million, or 115792089237316195423570985008687907852837564279074904382605163141518161494336 possible private keys to be exact. The number of possible keys is so large, that security of bitcoin relies on the assumption that no one will ever randomly generate the same two private keys twice.

## What is a seed phrase or mnemonic recovery?

**A mnemonic phrase is a private key in a different form:**

<img src="/assets/img/blog/01-bitcoin-keys/bitcoin-privatekey-generation-mnemonic-recovery.png" alt="bitcoin mnemonic recovery phrase bitcoin clarity" class="center" width="90%">

In the same way numbers can be expressed as words (zero) and numerical digits (0), keys are just a really long string of numbers that have the same properties. Instead of using the word expression of the random number, the seed phrase uses a list of 12 or 24 random words to represent the random number.

The purpose of the mnemonic is to convert currency, money, and funds into human-readable words. So that the transfer of value can be written on to paper, or spoken over a cell phone and easily shared.

**TIP:** To add some security a password can also be added to the phrase.

## What is the best way to store Bitcoin private keys privately?

The most secure way to store private keys safely is offline in cold storage, on a dedicated hardware device with your recovery mnemonic stored separately.
