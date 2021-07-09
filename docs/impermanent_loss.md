---
id: impermanent_loss
title: Impermanent Loss
---

Due to the widespread utility of automated market makers in defi, demand for asset providers is rising. Lending assets to liquidity pools, like any other investment, can be profitable and rewarding as long as market conditions are favorable. Liquidity providers (LPs) are usually entitled to a stake in the platform's revenue from exchange fees. The promise of additional returns on investment is incentive enough for many to decide to hold their tokens in AMMs. 

Additionally, many pools award special tokens for staking assets that can then be deposited into secondary pools to chase profits even further. If you want to know more about how LPs go about extending and maximizing potential profit, check out our article on [yield farming](#). 

Yield will inevitably be the determining factor to most asset providers. However, liquidation risks, market volatility and gas fees are all worth considering before diving in. A considerable portion of the risk in providing liquidity is the direct result of a phenomenon called “impermanent loss”.  

So what is impermanent loss and how does it create uncertainty for investors?  

*insert clip art* 

In its most basic form, impermanent loss is simply a temporary loss in the value of an asset. It can be calculated by finding the difference between depositing and holding. Impermanent loss is typically found in standard liquidity pools where two assets are provided in a balanced ratio and one of those assets is volatile.  

Let's run through a brief situation further illustrate how impermanent loss occurs.  

One day, ETH spikes in value for whatever reason. (It does this daily, so its quite common) Any reasonable increase in the price of a major token like ETH sets off a smoke signal for arbitrageurs and yield farming bots. Springing to action, they compare DEXs for discrepencies in the price of ETH.  

They find that the price of ETH has increased on *Binance*. At the moment, ETH is cheaper on *Uni*, so opportunists referred to as arbitrageurs are drawn to purchase ETH in order to turn a profit.

*Uniswap* makes use of a constant market maker to preserve its token ratio. Therefore, the more ETH bought, the higher its price rises. The arbitrageur buys until the *Uniswap* price of ETH matches market value. They are then sell off the ETH at its new market price and realize the difference as a profit.

You might have already noticed that this creates a situation where  profit gained from the appreciation of one token is deducted from the liquidity provider. If the LP never withdraws those assets and ETH returns to its earlier price, then it is only ever a monetary loss on paper. Vice versa, if they withdraw their funds, the impermanent loss becomes permanent.

Still confused? 
Here's a step-by-step breakdown of the arbitrage process that creates  impermanent loss.

* A liquidity provider has assets staked in a DAI/ETH 50/50 pool.
* ETH is valued higher on *Coinbase* so arbitrageurs flock to buy  cheaper ETH from the *Uniswap* pool. 
* They exchange DAI for ETH until ETH reaches its market value. 
* A new value for the pool is formed as the quantity of DAI rises and the quantity of ETH falls. 
* The difference between the asset's new value and their value if the LP had instead chosen to hold them is the impermanent loss.  


This begs the question: 
With impermanent loss reaping profits from the assets of liquidity providers, why do they continue to lend out funds to AMMs? 

The largest incentive to provide liquidity are rewards collected from trading fees. On Uniswap for example, every trade through a liquidity pool charges a .3 percent fee. These fees are then awarded to LPs like dividends to stock holders. As long as projected impermanent loss isn't greator than the projected value of rewards from trade fees, LPs will continue to stake their assets.


DefiNet's cross-asset liquidity pool is unique in that it is necessary for it to hold a variety of differing levels of assets at all times. Instead of maintaining ratios between assets to balance changing market prices, like a traditional AMM does, DefiNet sets asset ratios for its pool that are determined by projected and historical token use. A detailed explanation on DefiNet’s innovative pool design can be found here. *insert link* 
 
Instead of maintaining its ratio through arbitrage, the Cross-Asset Pool is continually replenished as its asset quantities decline. When the volume of a high usage asset falls, additional rewards are offered to LPs for contributing. The more deficient an asset is from its optimal amount, the higher the reward. Think of it as sort of an inverse arbitrage process. 

Consider the following example.  
 
A LP sees through DefiNet’s medium that levels of ETH in its pool are low. The healthy level of Etherium (which is determined by a usage data algorithm) is currently 35% of the overall pool. However, a lot of ETH was recently bought in order to purchase options leaving its ratio at 25%. 

DefiNet’s model for exchange fees allows providers to receive an average of an additional % in rewards for their contribution to the health of its pool and also serves to assist in smooth operation for buyers of options on DefiNet. 

Realtime pricing provided by on chain oracles removes profit motivated arbitrage making our liquidity pool insuseptible to risk related to impermanent loss.  

Instead of making a quick buck by taking advantage of price imbalances between exchanges, arbitrageurs are motivated to supply liquidity in DefiNet’s liquidity pool when assets become deficient with some of the highest %s of ROI in defi.

# In Summary

In an already volatile DeFi space, where liquidation risks, price risks, and rampant gas fees influence the potential profits of LPs yield farmers, potential yield is negatively impacted by impermanent loss. Impermanent loss, defined as “a temporary loss in the value of assets due to a price imbalance between exchanges”, has been and continues to be a source of concern for potential LPs and yield farmers.  

DefiNet’s innovative “preferred token” method of payment drives users to interact with its pool with exciting new implications. While on the surface level, DefiNet’s liquidity pool acts as a token exchange, its culminating purpose is to provide a convenience to the user. A detailed technical run-through of DefiNet’s groundbreaking new pool type can be found here *insert link to cross asset liquidity pool article*  

DefiNet’s asset ratios are independently determined by historical rate of exchange instead of a fixed dependent relationship; an endeavor made possible through the retrieval of token price by on-chain oracles. Without the necessity to deposit two assets of equivalent value, LPs can focus on earning rewards while leaving out the risk caused by impermanent loss. Welcome to the future of purpose driven pools.  

 
https://finematics.com/impermanent-loss-explained/ 