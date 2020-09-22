
class Stock {
    symbol  = String
    price   = Number
    history = [Number]
    update(){
        // fetch price from the API
    }
}

class BoughtStock extends Stock {
    date     = Date | Number
    quantity = Number
    buyPrice = Number
}

class Portfolio {
    cash   = Number
    stocks = [BoughtStock]
    constructor(){
        load();
    }
    load(){
        const { cash, stocks } = JSON.parse( localStorage.getItem('portfolio') );
        this.cash   = cash;
        this.stocks = stocks;
    }

    save(){
        localStorage.setItem( 'portfolio', JSON.stringify({
            cash:   this.cash,
            stocks: this.stocks
        }));
        localStorage.setItem( 'buyTransactions',  JSON.stringify(this.buyTransactions)  );
        localStorage.setItem( 'sellTransactions', JSON.stringify(this.sellTransactions) );
    }

    async buy(symbol,quantity){
        // notify buying...
        const stock = new BoughtStock('symbol', quantity);
        const buyTransactions = this.buyTransactions;
        const transaction = { symbol, quantity };
        try {
            await stock.update();
            // successfully bought....
            buyTransactions.splice( buyTransactions.indexOf(transaction), 1 ); // remove transaction from buyTransactions
            this.stocks.push(stock);
            this.save();
        }
        catch(e){
            // notify user of error, offer to retry
        }
        buyTransactions.push(transaction);
        this.save();
    }
}

const PORTFOLIO = new Portfolio();
