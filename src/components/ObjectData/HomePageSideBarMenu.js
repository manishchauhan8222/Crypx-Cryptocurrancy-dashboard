import CryptoImage from "../Images/cryptocurrency.png";
import TradeImage from "../Images/stock-market.png";
import BitcoinImage from "../Images/bitcoin.png";
import TetherImage from "../Images/tether.png";
import DogeImage from "../Images/dogecoin.png";
import SupportImage from "../Images/headset.png";

const HomePageSideBarMenu = [
  {
    src: CryptoImage,
    item: `Buy Crypto`,
    path: "/CoinList",
  },
  {
    src: TradeImage,
    item: `Trade`,
    path: "/CoinList",
  },
  {
    src: BitcoinImage,
    item: `Buy Bitcoin`,
    path: "/singleCoin",
  },
  {
    src: TetherImage,
    item: `Buy Tether`,
    path: "/singleCoin",
  },
  {
    src: DogeImage,
    item: `Buy Dogecoin`,
    path: "/singleCoin",
  },
  {
    src: SupportImage,
    item: `24/7 Chat Support`,
    path: "",
  },
];
export default HomePageSideBarMenu;
