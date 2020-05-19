---
layout: post
title: "Bitcoin Basics: The Best Bitcoin Wallet For You"
description:
date: 2020-05-17
tags: wallet hacks
categories: [blog video]
author: kiarabickers
post_image: "/assets/img/blog/thumbnails/02-bitcoin-wallets.jpg"
post_video: "https://www.youtube.com/embed/QR1HZYod7Vs"
seo:
  type: BlogPosting
defaults:
  - scope:
      path: ""
    values:
      image: /assets/img/blog/thumbnails/02-bitcoin-wallets.jpg
image:
  path: "/assets/img/blog/thumbnails/02-bitcoin-wallets.jpg"
---

<br>

## What is the best and safest Bitcoin wallet?

The best bitcoin wallet is that one that you don't have to doubt, [Bitcoin Core](https://bitcoincore.org/en/download/), or a [hardware wallet](https://www.ledger.com/).

Not all wallets are created equal, there are a few hundred different wallets out there, and there are several things that can go wrong or with anyone of those wallets.

### Can bitcoin wallets be hacked?

Yes, and it happens all the time. It's practically impossible to 'hack' a blockchain, but hacking wallets is a different story. Bitcoin wallets are a weak link in the industry because not all wallets are held to the same standards, exchanges, in particular, are honeypots for hackers.

1. **Exchanges get hacked frequently**. Their hot wallets can be hacked, [cold wallets can be stolen from someone inside the company](https://www.reddit.com/r/pwned/comments/2w2ijm/hackers_steal_7170_bitcoins_from_chinese_exchange/), [a hacker can find their wallet backup](https://web.archive.org/web/20200416223242/http://bitcoinmagazine.com/articles/bitfloor-hacked-250000-missing-1346821046) if not stored properly. Even if you choose to not use an exchange, your wallet chose matters.

2. **The wallets random number generation can fail.** When working with private keys, the random number generator is fundamentally one of the most important parts of the software. Bitcoin private keys are [computer generated random numbers](/blog/2020/05/16/bitcoin-public-private-keys), but if the program or library that your wallet is using to generating those numbers aren't truly random, then the wallet ends up reusing the same random number. This happened to a [secure random number generator on Android back in 2013](https://android-developers.googleblog.com/2013/08/some-securerandom-thoughts.html), it affected at least 4 Android wallets, and [over 55 BTC was lost](https://bitcointalk.org/index.php?topic=271486.0).

3. **The wallet can accept nefarious code.** Developers often import libraries of code written by other people as a starting point to write their app on top off. Some programing languages require an abnormally large number of dependencies, and not ideal for security-critical code. For instance, if you were writing a wallet app you might import a library to handle big numbers, one for unit testing, and a hundred more for UI components. Those libraries are often open source and are not fully vetted by app developer that's choosing to use them. A hacker could easily gain access to one of these popular libraries put injected malicious code into the wallet without the developer knowing. This happened in a [JavaScript library back in 2018](https://web.archive.org/web/20200314161742/https://www.zdnet.com/article/hacker-backdoors-popular-javascript-library-to-steal-bitcoin-funds/), a wallet was targeted with the malicious code was written to steal the users' private keys.

This isn't a comprehensive list, but you get the idea. Nothing is ever 100% secure.

### *With that in mind, let's help you choose a bitcoin wallet . . .*

<br>

## Step 1: Decide if you want to store your keys

Controlling your own private keys is the only way to be fully in control and have access to your bitcoin, but that also means that you’re fully responsible for protecting your keys and its backup. Exchanges or custodial wallets provide the service of storing your private keys on your behalf, which is great for new users, but can also [end badly if the exchange gets hacked](https://web.archive.org/web/20200417102334/https://selfkey.org/list-of-cryptocurrency-exchange-hacks/).

**TIP:** For long-term storage consider using a hardware wallet.

## Step 2: Do you prioritize privacy or security?

In Bitcoin, there are privacy-focused wallets and there are security-focused wallets. The goal of privacy-focused wallets is to stop your transactions on the blockchain from being linked back to you. They do this using the CoinJoin protocol, the Tor anonymity network and allowing users to manually select and label coins.

Security-focused wallets are hardware wallets, cold storage, that allows you to store your bitcoin offline making them less vulnerable to a range of different hacks.

**TIP:** For privacy AND security, you can use a privacy wallet with a hardware wallet.

## Step 3: Decide if you want to validate your transactions

Being able to validate your transactions is the only way to get the full properties of the Bitcoin system. You can validate the entire history of the blockchain with a full node or just your transactions with a light node/SPV Wallet. In either case, running something like MyNode is one of the simplest ways to get started with validating your bitcoin transactions.

## Is there a best mobile wallet in Bitcoin?

Mobile wallets offer convenience at the cost of security. Be extra cautious when using a mobile wallet. Consider only using mobile wallets for small values of bitcoin, since they are not great at privacy or security.
