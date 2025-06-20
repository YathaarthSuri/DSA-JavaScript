// Brute Force

 var maxProfit = function(prices) {
      let maxProfit = 0;
      for (let i = 0; i < prices.length; i++) {
          for (let j = i + 1; j < prices.length; j++) {
              if ((prices[j] - prices[i]) > maxProfit) {
                  maxProfit = prices[j] - prices[i];
              }
          }
      }
      return maxProfit;
  };

// Optimal

var maxProfit = function(prices) {
      let min = prices[0];
      let maxProfit = 0;
      for (let i = 1; i < prices.length; i++) {
          if (prices[i] - min > maxProfit) {
              maxProfit = prices[i] - min;
          }
          if (prices[i] < min) {
              min = prices[i];
          }
      }
      return maxProfit;
  };
