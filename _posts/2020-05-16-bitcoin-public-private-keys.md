---
layout: post
title: "Bitcoin Private Keys: Getting Started With The Basics"
description: Everything you need to know on Bitcoin Private and Public Keys. Learn about Bitcoin Private Keys and Bitcoin Public Keys, their differences and how they are each used.
date: 2020-05-16
last_modified_at: 2020-05-20
tags:
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

The Bitcoin network uses cryptography to create a key pair that controls access to bitcoin on the blockchain. Each bitcoin key pair consists of a public and private key.

## What is the difference between private and public keys?

People can over-complicate explanations by trying to explain digital signatures, signing transactions, and wallet import formats. But the truth is most users don't need any of this detail to understand the basics of how keys work in Bitcoin.

**You can think of public-key cryptography as a lock, but with two keys instead of one:**

<img src="/assets/img/blog/01-bitcoin-keys/bitcoin-privatekey-publickey-lock.png" alt="bitcoin private key public key bitcoin clarity" class="center" width="90%">

A **bitcoin private key** is simply a large (256 bits) secret number that ***allows bitcoin to be unlocked and sent***. This key authorizes the bitcoin transaction. It’s called a private key because it’s meant to be kept private and not shown to other people.

A **bitcoin public key** is another large number but ***allows bitcoin to be locked and received***. A bitcoin address is a hashed smaller version of the private key. It’s called a public key because it’s meant to be shared publicly and enables you to receive funds.

Although you don’t need to understand cryptomagic to believe that it works, sometimes understanding the *how* is the key to being able to trust it.

## How is the private key related to the public key?

These two keys (or numbers) are related mathematically on the secp256k1 elliptic curve. The private key is a randomly generated number plotted on the curve, and the public key is a corresponding point on that curve.

The real point of this magical curve is that it creates **trap door functionality**, meaning that once we generate the first point on the curve (the private key) the corresponding second point (public key) is easily found but impossible to find in the opposite direction. If you have the private key you always have the public key, but if you have the public key it's mathematically impossible to find the private key.

## How is the public key related to the address?

**Addresses are smaller (hashed version) of public keys:**

<img src="/assets/img/blog/01-bitcoin-keys/bitcoin-privatekey-publickey-address.png" alt="bitcoin address public key bitcoin clarity" class="center" width="60%">

Public keys start with a 1 , 3 or bc1 because they come in different formats. There are uncompressed public keys, compressed public keys, and wif formats. But what’s important to understand is that when you’re providing someone with a public address (or QR code) you’re giving them the ability to lock bitcoin on your behalf.

## How are bitcoin keys and addresses generated?

<div class='embed-container'>
	<iframe src='https://www.youtube.com/embed//QR1HZYod7Vs' frameborder='0' allowfullscreen></iframe>
</div>

It's the job of the bitcoin wallet software to generate your wallet file, addresses, and keys. The private is generated from a part of the software that is specially designed to be able to handle big numbers and generate them at random.

To get a feel for this you can play around with [bitaddress.org](https://www.bitaddress.org/bitaddress.org-v3.3.0-SHA256-dec17c07685e1870960903d8f58090475b25af946fe95a734f88408cef4aa194.html), but don’t use for any real keys you plan on using, this is just a tool for understanding. For real keys, you'll want to use Bitcoin Core or a hardware wallet.

## How many private keys are there?

There a lot, about 10 million million million million million million million million, or 115792089237316195423570985008687907852837564279074904382605163141518161494336 possible private keys to be exact. The number of possible keys is so large, that security of bitcoin relies on the assumption that no one will ever randomly generate the same two private keys twice.

## What is a seed phrase or mnemonic recovery?

**A mnemonic phrase is a private key in a different form:**

<img src="/assets/img/blog/01-bitcoin-keys/bitcoin-privatekey-generation-mnemonic-recovery.png" alt="bitcoin mnemonic recovery phrase bitcoin clarity" class="center" width="90%">

In the same way numbers can be expressed as words (zero) and numerical digits (0), keys are just a really long string of numbers that have the same properties. Instead of using the word expression of the random number, the seed phrase uses a list of 12 or 24 random words to represent the random number.

The purpose of the mnemonic is to convert currency into human-readable words. So that the transfer of value can be written on to paper, or spoken over a cell phone and easily shared.

To add some security a password can also be added to the phrase.

## What is the best way to store private keys safely?

The most secure way to store private keys safely is offline in cold storage, on a dedicated hardware device with your recovery mnemonic stored separately.
