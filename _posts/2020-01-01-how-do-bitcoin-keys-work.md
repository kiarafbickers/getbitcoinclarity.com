---
layout: post
title: "How Do Bitcoin Keys Work?"
date: 2020-01-01
tags: fed, economics
categories: [blog video]
author: "kiara bickers"
post_image: "/assets/img/blog/what-you-need-to-know-about-hashrate.png"
post_video: ""
seo:
  type: BlogPosting
image:
  path: "/assets/img/blog/what-you-need-to-know-about-hashrate.png"
---

# How Do Bitcoin Keys Work?

<br>header pic<br>

A bitcoin key is not just one key but two keys. A <b>public key</b> is the key that allows bitcoin to be locked and received. While the <b>private key</b>  is the key that allows bitcoin to be unlocked and spent.

The Bitcoin Wiki and technical documentation will often explain keys as large numbers. Although technically true, I think it's easier just to gloss over that. Let’s leave the “crypto” to the cryptographers. This is the simplest way to explain Bitcoin keys that I’ve been able to pull together.

<br>video<br>

Think of the typical lock that can lock and unlock, Bitcoins use of <b>public-key cryptography</b> splits that functionality into two keys. The unlocking function simultaneously sends, and the receiving functionality simultaneously locks.

## A Private Key Unlocks and Sends

Private keys are the instructions for moving bitcoin on the blockchain. That fact that no one can move your Bitcoin without your private key has both its advantages and disadvantages. The main advantage is that you are fully reasonable for your funds. The main disadvantage is <b>you are fully reasonable for your funds</b>. As the term suggests your private key should remain private. Once you send funds from a key you own to address associated with a private key someone else controls, you no longer control those funds. Transactions are fully <b>irreversible</b>, so this means you want to be thoughtful about what transactions you authorize and what wallet software you trust to manage your private keys.

### The Public Key is Created from The Private Key

<br>pic<br>

The idea is that the public key

## A Public Key Locks and Receives

Public Keys are instructions for locking Bitcoin on the blockchain. When you receive Bitcoin you typically receive them at a bitcoin address you’ve provided to the sender.

### The Public Key is Created from The Private Key

<br>pic<br>

The address is really just a smaller version of the public key but the functionality is largely the same, <b>bitcoin addresses</b> lock up bitcoins on your behalf. Public keys are invented to be public and shared, but they shouldn’t be reused. Address and public keys are intended to be used only once, as a one-time location on the blockchain.

I could have shown a literal example of bitcoin public and private keys, but let's be honest, it’s not exactly pretty. Bitcoin is far from easy to use, but I hope this expiation has helped some. For most users, this would be the minimum amount of information needed on keys to feel conformable enough in using Bitcoin. Maybe later I’ll come back and over complicate this by explaining Hierarchical deterministic (HD) keys.

# Final Conclusions

Public and private keys are used both used simultaneously in a transaction. Private keys unlock the bitcoin being sent, by proving they own the bitcoin they’re sending. Whereas the public key is used to lock up the bitcoin at the new address for the recipient. Private keys are almost never interacted with by users because they’re managed by the users' wallet.

To read more about wallets you can check out the next post.
