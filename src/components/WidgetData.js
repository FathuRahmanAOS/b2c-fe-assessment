import Homeservice from "../pages/assets/homeservice.jpg";
import Lainnya from "../pages/assets/lainnya.jpg";
import Sukucadang from "../pages/assets/sukucadang.jpg";
import Bengkel from "../pages/assets/bengkel.jpg";
import Kupon from "../pages/assets/diskon.jpg";
import First from "../pages/assets/First.jpg";
import Second from "../pages/assets/Second.jpg";
import Third from "../pages/assets/Third.jpg";

export default [
  {
    iconWidgetData: [
      {
        urls: Bengkel,
        menu: "Layanan Bengkel",
      },
      {
        urls: Homeservice,
        menu: "Home Service",
      },
      {
        urls: Sukucadang,
        menu: "Suku Cadang",
      },
      {
        urls: Lainnya,
        menu: "Lainnya",
      },
    ],
  },
  {
    KuponWidgetData: [
      {
        urls: Kupon,
        kode: "BONUS30",
        periode: "05 Mei 2023",
      },
      {
        urls: Kupon,
        kode: "BONUS75",
        periode: "05 Mei 2023",
      },
      {
        urls: Kupon,
        kode: "BONUS50",
        periode: "05 Mei 2023",
      },
    ],
  },
  {
    eventWidgetData: [
      {
        urls: Kupon,
        description: "AKI GS ASTRA Hybrid NS40 untuk mobil",
        hetprice: 797000,
        discount: 2,
        nett: 722260,
        rating: 5,
      },
      {
        urls: Kupon,
        description: "AKI GS ASTRA Hybrid NS40 untuk mobil",
        hetprice: 797000,
        discount: 2,
        nett: 722260,
        rating: 5,
      },
      {
        urls: Kupon,
        description: "AKI GS ASTRA Hybrid NS40 untuk mobil",
        hetprice: 797000,
        discount: 2,
        nett: 722260,
        rating: 5,
      },
      {
        urls: Kupon,
        description: "AKI GS ASTRA Hybrid NS40 untuk mobil",
        hetprice: 797000,
        discount: 2,
        nett: 722260,
        rating: 5,
      },
      {
        urls: Kupon,
        description: "AKI GS ASTRA Hybrid NS40 untuk mobil",
        hetprice: 797000,
        discount: 2,
        nett: 722260,
        rating: 5,
      },
    ],
  },
  {
    sliderImageData: [
      {
        title: "First Slide",
        description: "This is the first slider Image of our carousel",
        urls: First,
      },
      {
        title: "Second Slide",
        description: "This is the second slider Image of our carousel",
        urls: Second,
      },
      {
        title: "Third Slide",
        description: "This is the Third slider Image of our carousel",
        urls: Third,
      },
    ],
  },
];
