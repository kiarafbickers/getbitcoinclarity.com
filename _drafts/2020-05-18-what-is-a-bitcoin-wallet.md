---
layout: post
title: "Bitcoin Wallets: The Basics"
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

## What is a bitcoin wallet?

A **bitcoin wallet** is a program that stores your private keys.

Your private keys provides access to your coins, and your wallet stores your private keys.

## What types of bitcoin wallets are there?

There are wallets that run on your phone (**mobile wallets**), wallets that run on your desktop (**desktop wallets**), and wallets that run in the browser (**web wallets**).

## Hot Wallets vs Cold Wallets

Mobile, desktop, and web wallets are all **hot wallets** because they are connected to the internet, putting them in closer reach of hackers.

> Don't feed the thieves! Don't use hot wallets for any bitcoin you plan on keeping long term.

**Hardware wallets** are the most secure wallet option because that keep your keys offline and in **cold storage**, this is why they are also called **cold wallets**

## Custodial vs Non-Custodial Wallets

Most people start off buying on bitcoin on an exchange, which holds your funds for you in a **custodial wallet**, where the exchange is taking custody of your private keys. When you move your funds off of an exchange into a wallet you control, you're using a non-custodial wallet. **Non-custodial** wallets allow you to store your own private keys.

## What is difference between a bitcoin wallet and a physical wallet?

A physical wallet can hold your cash and value directly, whereas a bitcoin wallet only ever stores access to your funds on the blockchain via your private keys.

<img src="/assets/img/blog/02-bitcoin-wallets/bitcoin-wallet-physical-wallet-digital-wallet.png" alt="bitcoin wallet digital wallet physical wallet" class="center" width="60%">

And unlike a physical wallet that has to be carried around, your bitcoin wallet has all the properties of being digital. Because your keys is just data, they sent over the internet, or spoken as human-readable words over the phone. This means thet are easy to send, but also easier for hackers to steal.

### Can bitcoin wallets be hacked?

Yes, and it happens all the time. It's practically impossible to 'hack' a blockchain, but hacking a wallet is a different story. Bitcoin wallets are a weak link in the industry because not all wallets are held to the same standards, exchanges, in particular, are honeypots for hackers.

1. **Exchanges get hacked frequently**. Their hot wallets can be hacked, [cold wallets can be stolen from someone inside the company](https://www.reddit.com/r/pwned/comments/2w2ijm/hackers_steal_7170_bitcoins_from_chinese_exchange/), [a hacker can find their wallet backup](https://web.archive.org/web/20200416223242/http://bitcoinmagazine.com/articles/bitfloor-hacked-250000-missing-1346821046) if not stored properly. Even if you choose to not use an exchange, your wallet chose matters.

2. **The wallets random number generation can fail.** When working with private keys, the random number generator is fundamentally one of the most important parts of the software. Bitcoin private keys are [computer generated random numbers](/blog/2020/05/16/bitcoin-public-private-keys), but if the program or library that your wallet is using to generating those numbers aren't truly random, then the wallet ends up reusing the same random number. This happened to a [secure random number generator on Android back in 2013](https://android-developers.googleblog.com/2013/08/some-securerandom-thoughts.html), it affected at least 4 Android wallets, and [over 55 BTC was lost](https://bitcointalk.org/index.php?topic=271486.0).

3. **The wallet can accept nefarious code.** Developers often import libraries of code written by other people as a starting point to write their app on top off. Some programing languages require an abnormally large number of dependencies, and not ideal for security-critical code. For instance, if you were writing a wallet app you might import a library to handle big numbers, one for unit testing, and a hundred more for UI components. Those libraries are often open source and are not fully vetted by app developer that's choosing to use them. A hacker could easily gain access to one of these popular libraries put injected malicious code into the wallet without the developer knowing. This happened in a [JavaScript library back in 2018](https://web.archive.org/web/20200314161742/https://www.zdnet.com/article/hacker-backdoors-popular-javascript-library-to-steal-bitcoin-funds/), a wallet was targeted with the malicious code was written to steal the users' private keys.
