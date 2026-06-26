import heroBanarasi from '../assets/collections/banarasi saree.png';
import heroKanjeevaram from '../assets/collections/kanjeevaram.jpg';
import heroLucknowi from '../assets/collections/lucknowi/hero image.jpg';

// Banarasi Uploaded Images
import banarasiTheme from '../assets/collections/banarasi/theme inspiration.png';
import banarasiArchBg from '../assets/collections/banarasi/architecture background.png';
import banarasiArch1 from '../assets/collections/banarasi/architecture 1.png';
import banarasiArch2 from '../assets/collections/banarasi/architecture 2.png';
import banarasiArch3 from '../assets/collections/banarasi/architecture 3.png';
import banarasiWeaver1 from '../assets/collections/banarasi/weaver 1.png';
import banarasiWeaver2 from '../assets/collections/banarasi/weaver 2.png';
import banarasiWeaver3 from '../assets/collections/banarasi/weaver 3.png';
import banarasiCraft1 from '../assets/collections/banarasi/craft 1.png';
import banarasiCraft2 from '../assets/collections/banarasi/craft 2.png';
import banarasiCraft3 from '../assets/collections/banarasi/craft 3.png';
import banarasiCraft4 from '../assets/collections/banarasi/craft 4.png';

// Kanjeevaram Uploaded Images
import kanjeevaramTheme from '../assets/collections/kanjeevaram/theme inspiration .png';
import kanjeevaramArchBg from '../assets/collections/kanjeevaram/architecture background.png';
import kanjeevaramArch1 from '../assets/collections/kanjeevaram/architecture 1.png';
import kanjeevaramArch2 from '../assets/collections/kanjeevaram/architecture 2.png';
import kanjeevaramArch3 from '../assets/collections/kanjeevaram/architecture 3.png';
import kanjeevaramWeaver1 from '../assets/collections/kanjeevaram/weaver 1.png';
import kanjeevaramWeaver2 from '../assets/collections/kanjeevaram/weaver 2.png';
import kanjeevaramWeaver3 from '../assets/collections/kanjeevaram/weaver 3.png';
import kanjeevaramCraft1 from '../assets/collections/kanjeevaram/craft 1.png';
import kanjeevaramCraft2 from '../assets/collections/kanjeevaram/craft 2.png';
import kanjeevaramCraft3 from '../assets/collections/kanjeevaram/craft 3.png';
import kanjeevaramCraft4 from '../assets/collections/kanjeevaram/craft 4.png';

// Lucknowi Uploaded Images
import lucknowiTheme from '../assets/collections/lucknowi/theme inspiration.jpg';
import lucknowiArchBg from '../assets/collections/lucknowi/architecture background.jpg';
import lucknowiArch1 from '../assets/collections/lucknowi/architecture1.jpg';
import lucknowiArch2 from '../assets/collections/lucknowi/architecture1.jpg'; // fallback for missing upload
import lucknowiArch3 from '../assets/collections/lucknowi/architecture1.jpg'; // fallback for missing upload
import lucknowiWeaver1 from '../assets/collections/lucknowi/weaver 1.jpg';
import lucknowiWeaver2 from '../assets/collections/lucknowi/weaver 2.jpg';
import lucknowiWeaver3 from '../assets/collections/lucknowi/weaver 3.jpg';
import lucknowiCraft1 from '../assets/collections/lucknowi/craft 2.jpg'; // fallback for missing upload
import lucknowiCraft2 from '../assets/collections/lucknowi/craft 2.jpg';
import lucknowiCraft3 from '../assets/collections/lucknowi/craft 3.jpg';
import lucknowiCraft4 from '../assets/collections/lucknowi/craft 4.jpg';

export const collectionsData = {
  "banarasi-silk": {
    name: "Banarasi Silk",
    slug: "banarasi-silk",
    region: "Varanasi, Uttar Pradesh",
    tagline: "Woven in the city of light",
    heroImage: heroBanarasi,
    accentColor: "#802520",
    themeHeading: "The Eternal Glow of Banaras Ghats",
    themeBody: "Drawing from the spiritual epicenter of India, our Banarasi collection reflects the golden hour over the Ganges. The heavy brocade and intricate zari work echo the temple bells, the incense smoke, and the eternal flames of the aarti. Each piece is a celebration of divine light captured in silk.",
    themePullQuote: "Every thread carries the reflection of the Ganges at dawn.",
    themeImage: banarasiTheme,
    weaverHeading: "The Karigar of Varanasi",
    weaverBody: "For generations, the weaver families of Madanpura and Peeli Kothi have guarded the secrets of the Kadwa and fekwa techniques. These karigars treat their looms not just as tools, but as altars. Weaving a masterpiece can take anywhere from 15 days to six months, with multiple craftsmen working in silent harmony to bring complex shikargah (hunting) and floral motifs to life.",
    craftImages: [banarasiCraft1, banarasiCraft2, banarasiCraft3, banarasiCraft4],
    architectureHeading: "The Ghats & Temples of Varanasi",
    architectureBody: "The geometric precision of the Ghat steps descending into the water directly inspires the strong border patterns found in our sarees. The towering spires (shikharas) of Kashi Vishwanath and the intricate stone carvings of ancient riverfront palaces find their way into the traditional buttas and pallu designs. Wearing Banarasi is wearing the architecture of the holy city.",
    architectureBgImage: banarasiArchBg,
    architectureImages: [banarasiArch1, banarasiArch2, banarasiArch3],
    weavers: [
      { name: "Ustad Hamid Ali", location: "Varanasi", quote: "I weave what my father taught me.", image: banarasiWeaver1 },
      { name: "Ramesh Prasad", location: "Madanpura", quote: "Each saree takes twelve days of my life.", image: banarasiWeaver2 },
      { name: "Zubair Khan", location: "Banaras", quote: "The zari speaks what words cannot.", image: banarasiWeaver3 }
    ]
  },
  "kanjeevaram": {
    name: "Kanjeevaram",
    slug: "kanjeevaram",
    region: "Kanchipuram, Tamil Nadu",
    tagline: "The Silk of the Gods",
    heroImage: heroKanjeevaram,
    accentColor: "#0F5E3A",
    themeHeading: "Temples, Gold & the Sacred South",
    themeBody: "Rooted in the mythos of Sage Markanda, who wove tissue from lotus fiber, Kanjeevaram silk is inherently sacred. Our collection explores the deep gem tones and contrasting borders that characterize this weaving tradition. The heavy mulberry silk and pure gold zari create a drape that is majestic, heavy, and eternal.",
    themePullQuote: "Woven with pure gold and divine devotion.",
    themeImage: kanjeevaramTheme,
    weaverHeading: "The Silk Masters of Kanchipuram",
    weaverBody: "The Chaliyar weaver community of Kanchipuram employs the unique Korvai technique, interlocking the body and the border of the saree to create a flawless transition. This labor-intensive process requires two weavers working simultaneously. Their dedication ensures the legendary durability and luster of the Kanjeevaram drape.",
    craftImages: [kanjeevaramCraft1, kanjeevaramCraft2, kanjeevaramCraft3, kanjeevaramCraft4],
    architectureHeading: "Dravidian Temple Architecture",
    architectureBody: "Kanjeevaram motifs are a direct homage to Dravidian temples. The signature 'Temple border' (Rekku) mimics the towering Gopurams. Look closely and you will find the Yali (mythical beast), Annapakshi (divine swan), and intricate pillar carvings translated flawlessly into woven gold. The fabric is a structural marvel, just like the temples of the Pallava kings.",
    architectureBgImage: kanjeevaramArchBg,
    architectureImages: [kanjeevaramArch1, kanjeevaramArch2, kanjeevaramArch3],
    weavers: [
      { name: "Muthusamy K.", location: "Kanchipuram", quote: "The temple guides our hands.", image: kanjeevaramWeaver1 },
      { name: "Lakshmi N.", location: "Weavers Colony", quote: "Korvai takes patience, like prayer.", image: kanjeevaramWeaver2 },
      { name: "Velu P.", location: "Kanchipuram", quote: "Our silk carries the weight of history.", image: kanjeevaramWeaver3 }
    ]
  },
  "lucknowi": {
    name: "Lucknowi",
    slug: "lucknowi",
    region: "Lucknow, Uttar Pradesh",
    tagline: "The Grace of Chikankari",
    heroImage: heroLucknowi,
    accentColor: "#D8C3A5",
    themeHeading: "The Nawabi Elegance",
    themeBody: "Lucknowi chikankari is a delicate and artfully done hand embroidery that brings a touch of royalty. Celebrated for its ethereal grace, this collection brings the historic charm of Awadh to your wardrobe.",
    themePullQuote: "Woven with the breath of the nawabs.",
    themeImage: lucknowiTheme,
    weaverHeading: "The Artisans of Awadh",
    weaverBody: "The karigars of Lucknow have preserved the art of Chikankari for centuries. Using fine needles on sheer fabrics, they create intricate patterns that look like poetry woven into cloth.",
    craftImages: [lucknowiCraft1, lucknowiCraft2, lucknowiCraft3, lucknowiCraft4],
    architectureHeading: "The Palaces of Lucknow",
    architectureBody: "The motifs of Chikankari are heavily inspired by the Mughal architecture of Lucknow. The intricate floral patterns and paisley designs mirror the majestic arches and domes of the city's historic monuments.",
    architectureBgImage: lucknowiArchBg,
    architectureImages: [lucknowiArch1, lucknowiArch2, lucknowiArch3],
    weavers: [
      { name: "Rafiq Ahmad", location: "Lucknow", quote: "My needle paints the flowers.", image: lucknowiWeaver1 },
      { name: "Fatima Bi", location: "Aminabad", quote: "Each stitch is a whisper of history.", image: lucknowiWeaver2 },
      { name: "Zainab", location: "Chowk", quote: "Patience woven into muslin.", image: lucknowiWeaver3 }
    ]
  }
};
