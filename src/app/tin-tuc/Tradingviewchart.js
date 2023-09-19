// // Trong /components/TradingViewChart.js
// import Script from 'next/script';

// export default function TradingViewChart() {
//   // Component để hiển thị biểu đồ nâng cao của TradingView
//   return (
//     <div>
//       <div id="tradingview-chart"></div>
//       <Script src="https://s3.tradingview.com/tv.js"></Script>
//       <Script>
//         {`
//           new TradingView.widget(
//           {
//           "width": 980,
//           "height": 610,
//           "symbol": "NASDAQ:AAPL",
//           "interval": "D",
//           "timezone": "Etc/UTC",
//           "theme": "light",
//           "style": "1",
//           "locale": "en",
//           "toolbar_bg": "#f1f3f6",
//           "enable_publishing": false,
//           "allow_symbol_change": true,
//           "container_id": "tradingview-chart"
//           }
//           );
//         `}
//       </Script>
//     </div>
//   );
// }
