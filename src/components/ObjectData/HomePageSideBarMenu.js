import CryptoImage from "../Images/cryptocurrency.png";
import TradeImage from "../Images/stock-market.png";
import BitcoinImage from "../Images/bitcoin.png";
import TetherImage from "../Images/tether.png";
import DogeImage from "../Images/dogecoin.png";
import SupportImage from "../Images/headset.png";

const HomePageSideBarMenuUpper = [
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
];

const HomePageSideBarMenu = [
  {
    src: BitcoinImage,
    item: `Buy Bitcoin`,
    id: "bitcoin",
  },
  {
    src: TetherImage,
    item: `Buy Tether`,
    id: "tether",
  },
  {
    src: DogeImage,
    item: `Buy Dogecoin`,
    id: "dogecoin",
  },
  {
    src: SupportImage,
    item: `24/7 Chat Support`,
    path: "",
  },
];
export { HomePageSideBarMenu, HomePageSideBarMenuUpper };
