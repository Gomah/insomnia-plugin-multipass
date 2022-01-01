# insomnia-plugin-multipass

[![](https://img.shields.io/npm/v/insomnia-plugin-multipass.svg)](https://www.npmjs.com/package/insomnia-plugin-multipass)

## Table of Contents

- [Overview](#overview)
  - [Compatibility](#compatibility)
  - [References](#references)
- [Usage](#usage)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Further Reading](#further-reading)

## Overview <a name="overview"></a>

A plugin for generating multipass tokens for Shopify.

[Shopify](https://shopify.com) provides a mechanism for single sign-on known as Multipass. Multipass uses an AES encrypted JSON hash and this plugin is using [multipassify](https://github.com/beaucoo/multipassify) under the hood.

### Compatibility <a name="compatibility"></a>

Insomnia v5.15.0+

### References <a name="references"></a>

- [Shopify Dev, Multipass](https://shopify.dev/api/multipass/)
- [Customer Access Token w/ Multipass](https://shopify.dev/custom-storefronts/customer-accounts#customeraccesstokencreatewithmultipass)

## Usage <a name="usage"></a>

### Prerequisites <a name="prerequisites"></a>

Before using this library, you will need to enable Multipass login in the Shopify admin.

Log in to your shop admin and go to the [Settings > Checkout page](https://www.shopify.com/admin/settings/checkout). Scroll down to the **Customer Accounts** section and ensure that you have either **Accounts are optional** selected or **Accounts are required**.

[![](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/tutorials/customer-accounts-4c4f064e2436fa7ae0a6217232e7a8bd4d6a7d859cb2b975da9cd91de96d7b7f.png)](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/tutorials/customer-accounts-4c4f064e2436fa7ae0a6217232e7a8bd4d6a7d859cb2b975da9cd91de96d7b7f.png)

Select **Enable Multipass**. Once enabled, a **secret** will be shared with you. You will need the secret in order to generate tokens to log your customers into your Shopify store. Make sure you keep your secret private.

[![](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/tutorials/multipass-login-2-1c892ece8693e758aa4554cfc3b04aaf5a0234429ea2d2b3546e58821cb7b3f8.jpg)](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/tutorials/multipass-login-2-1c892ece8693e758aa4554cfc3b04aaf5a0234429ea2d2b3546e58821cb7b3f8.jpg)

### Installation <a name="installation"></a>

#### 1. One-Click Installation

1. Go to https://insomnia.rest/plugins/insomnia-plugin-multipass
2. Click the "Install Plugin" button
3. Click "Open Insomnia" and "Install"

#### 2. From the Plugins Tab

1. Open Insomnia
2. Go to Application > Preferences > Plugins
3. Type "insomnia-plugin-multipass"
4. Click "Install Plugin"

## Further Reading <a name="further-reading"></a>

- [Insomnia Plugins](https://support.insomnia.rest/article/26-plugins)
- [The Insomnia Plugin Hub](https://insomnia.rest/plugins)
