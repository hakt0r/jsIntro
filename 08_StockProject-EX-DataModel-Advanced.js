
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

class BuyStock {
    promise  = Promise
    symbol   = Number
    quantity = Number
    constructor(symbol,quantity){
        this.symbol   = symbol
        this.quantity = quantity
        this.promise  = new Promise( async resolve => {
            // show notice: acquiring ${symbol}
            const stock = new BoughtStock('symbol', quantity);
            try {
                await stock.update();
                // successfully bought....
                BuyStock.list.splice( BuyStock.list.indexOf(this), 1 );
                saveTransactionList();
                Portfolio.stocks.push(stock);
            }
            catch(e){
                // notify user of error, offer to retry
            }
            resolve(stock);
        });
        BuyStock.list.push(this);
        saveTransactionList();
    }
    saveTransactionList(){
        localStorage.setItem( 'buytransaction', JSON.stringify(BuyStock.list) )
    }
}

// keep track of all transactions as long as they are not complete
BuyStock.list = []

new BuyStock('AAPL',123)