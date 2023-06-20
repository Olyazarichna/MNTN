import styles from "./EquipmentArticle.module.scss";
import Image from "next/image";
import hikingMan from "../../../images/blog/hikingMan.jpg";
import forest from "../../../images/blog/forest.jpg";
import tents from "../../../images/blog/tents.jpg";
import bag from "../../../images/blog/bag.jpg";
import equipment from "../../../images/blog/equipment.jpg";
import rain from "../../../images/blog/rain.jpg";
import mountains from "../../../images/blog/mountains.jpg";

const EquipmentArticle = () => {
  return (
    <section className={`${"container"} ${styles.equipmentSection}`}>
      <p className={styles.mainInfo}>
        Whether you’re casually hiking to a favorite waterfall or bagging a
        difficult summit, carrying the proper equipment is absolutely critical.
        When things go wrong, as they often do, this can mean the difference
        between a minor inconvenience and a dire result. For first-timers and
        sage backcountry traveler alike, dialing in essential day hiking gear is
        an important part of any pre-trip preparations.
      </p>
      <div className={styles.gridWrapper}>
        <nav className={styles.sidebar}>
          <ul>
            <li className={styles.sidebar_listItem}>
              <a href="">NAVIGATION</a>
            </li>
            <li className={styles.sidebar_listItem}>
              <a href="">SUN PROTECTION</a>
            </li>
            <li className={styles.sidebar_listItem}>
              <a href="">INSULATION</a>
            </li>
            <li className={styles.sidebar_listItem}>
              <a href="">ILLUMINATION </a>
            </li>
            <li className={styles.sidebar_listItem}>
              <a href="">FIRST AID SUPPLIES</a>
            </li>
            <li className={styles.sidebar_listItem}>
              <a href="">FIRE</a>
            </li>
            <li className={styles.sidebar_listItem}>
              <a href="">REPAIR KIT & TOOLS</a>
            </li>
            <li className={styles.sidebar_listItem}>
              <a href="">NUTRITION</a>
            </li>
            <li className={styles.sidebar_listItem}>
              <a href="">HYDRATION</a>
            </li>
            <li className={styles.sidebar_listItem}>
              <a href="">EMERGENCY SHELTER</a>
            </li>
          </ul>
        </nav>
        <ul className={styles.content}>
          <li className={styles.contentListItem}>
            <p>
              1. NAVIGATION - A topo map and trusty compass are two navigation
              components that should accompany you on any trip into the
              backcountry. They’re reliable, lightweight, durable, and
              guaranteed to never run out of batteries. They can keep you from
              getting lost or help you find your way again, but they won’t do
              any good if you don’t know how to use them. So brush up on how to
              use a map and compass and how to keep from getting lost before
              heading out on your next trip. We also recommend keeping your maps
              in a clear, waterproof map sack to keep them dry and protected.
              Though not technically a component of the 10 Essentials List, GPS
              devices and phone apps (GAIA, TopoMaps, etc) are excellent tools
              for supplementing a map and compass. If you plan on using GPS
              regularly, you may want to carry a power bank in case your device
              runs out of juice. While GPS tools can be very convenient and
              useful on the trail, they should never fully replace your map and
              compass.
            </p>
            <Image
              src={hikingMan}
              alt="hiking man"
              width="300"
              height="400"
              loading="lazy"
              className={styles.contentList_img}
            />
          </li>

          <li className={styles.contentListItem}>
            <p>
              2. SUN PROTECTION - Sun protection is an incredibly important part
              of any backcountry trip, even when the weather looks cloudy.
              Sunscreen, spf lip balm, sunglasses (preferably polarized), a
              brimmed hat, and protective clothing should be considered
              essential on every hiking trip. Bad sunburns, bleeding cracked
              lips, and conditions like snow blindness can be debilitating if
              proper respect isn't paid to the sun's power.
            </p>
          </li>

          <li className={styles.contentListItem}>
            <p>
              3. INSULATION - Weather can change quickly on any wilderness trip,
              so we always recommend bringing an extra insulation clothing layer
              - even on warm weather trips. A simple layerable, quick dry
              clothing system will ensure you're safe and warm when temps drop.
              For example, we pack a down hooded jacket and rain protection on
              almost every hiking trip, regardless of the forecast. For your
              clothing system, you’ll want to avoid cotton products, which take
              a long time to dry and pull heat from your body. Instead, wear
              quick dry, synthetic layers and manage perspiration to keep your
              clothing from soaking with sweat. Wet clothing will quickly chill
              you to the bone as soon as you stop hiking. Check out our post on
              building a layering system for hiking for more tips.
            </p>
            <ul className={styles.imgList}>
              <li className={styles.imgList_item}>
                <Image
                  src={forest}
                  alt="forest"
                  width="300"
                  height="400"
                  loading="lazy"
                  className={styles.contentList_imgList}
                />
              </li>
              <li className={styles.imgList_item}>
                <Image
                  src={tents}
                  alt="tents"
                  width="300"
                  height="400"
                  loading="lazy"
                  className={styles.contentList_imgList}
                />
              </li>
            </ul>
          </li>

          <li className={styles.contentListItem}>
            <p>
              4. ILLUMINATION - We bring a reliable headlamp on every hiking
              trip, even if we're not planning on being out past dark. Sometimes
              a hike will take longer than expected, and getting lost in the
              dark can quickly compound a bad situation. If you ever do find
              yourself unexpectedly in the backcountry as daylight is fading,
              you'll be happy to have a headlamp to help you find the way home.
              We usually hike with our phones as well, and their built-in
              flashlights serve as a good backup light source. Make sure to test
              your headlamp batteries prior to your hike as well.
            </p>
          </li>

          <li className={styles.contentListItem}>
            <p>
              5. FIRST AID SUPPLIES - When traveling into the backcountry,
              you’ll always want to carry a comprehensive first aid kit. Most
              backpackers buy a pre-packaged first aid kit, which will provide a
              lightweight and reliable setup for minor ailments. As you gain
              more trail experience you'll be able to add or subtract from your
              first aid kit depending on your individual needs. And always make
              sure to replace anything you use as soon as you return home from
              your trek. Check out these videos we made to see what's in our
              first aid kit and learn some critical wilderness emergency first
              aid skills.
            </p>
          </li>
          <li className={styles.contentListItem}>
            <p>
              6. FIRE - Knowing how to build a fire in nasty weather can be a
              life saving backcountry skill. For a quick tutorial, check out
              this video we made on building fires in harsh conditions. To make
              a fire as easy as possible, we always bring two small Bic lighters
              (one is kept in a dry place as a backup), a few stormproof
              matches, and a few small firestarter cubes. We only use the fire
              starters when we really need them, but they make fire building
              much easier, especially in wet conditions. If you’re looking to go
              more survivalist style, you can carry a small fire flint, but
              small lighters tend to work just fine for us. Additionally, some
              hikers make homemade fire starters, which are cheap and easy to
              make, but we usually prefer the convenience and ease of the store
              bought stuff.
            </p>

            <ul className={styles.imgList}>
              <li className={styles.imgList_item}>
                <Image
                  src={bag}
                  alt="bag"
                  width="300"
                  height="400"
                  loading="lazy"
                  className={styles.contentList_imgList}
                />
              </li>
              <li className={styles.imgList_item}>
                <Image
                  src={equipment}
                  alt="equipment"
                  width="300"
                  height="400"
                  loading="lazy"
                  className={styles.contentList_imgList}
                />
              </li>
              <li className={styles.imgList_item}>
                <Image
                  src={rain}
                  alt="rain"
                  width={300}
                  height={400}
                  loading="lazy"
                  className={styles.contentList_imgList}
                />
              </li>
            </ul>
          </li>
          <li className={styles.contentListItem}>
            <p>
              7. REPAIR KIT & TOOLS - We bring a lightweight multitool and basic
              repair equipment on every backcountry trip we take. A simple
              multi-tool knife, like the Swiss Army Classic, will come in handy
              in a variety of situations and we use ours all the time on the
              trail. Duct tape and Tenacious Tape are also excellent tools for
              repairing gear in the field, so we always hike with a small amount
              of both in our packs. Tenacious Tape is great for fixing sleeping
              pad punctures, tent fabric tears, sleeping bag rips, puffy coat
              holes, and stuff like that. Duct tape is a great all-around repair
              tool that can be used for things like splinting a broken tent pole
              or repairing sunglasses, and it's even good for preventing
              blisters when you feel a hot spot on your foot.
            </p>
          </li>

          <li className={styles.contentListItem}>
            <p>
              8. NUTRITION - When preparing for a hike, you’ll want to make sure
              to bring along enough calories to sustain your energy for a long
              day of activity. We commonly snack on energy bars (Larabar, Clif
              Bar, ProBar, Luna, and Kind bars tend to be our favorites), dried
              fruits, nuts, and jerky while we hike. For a more substantial
              lunch, we like to pack tortillas or bagels and make sandwiches
              with hard meats (like salami) and cheeses (like parmesan). If
              you’re headed out on a long hike, we recommend bringing some extra
              calorically-dense food, just in case your trip takes longer than
              expected. Check out our Backpacking Food Guide for a bunch more
              information and recommendations on our favorite trail grub.
            </p>
          </li>
          <li className={styles.contentListItem}>
            <p>
              9. HYDRATION - It's absolutely essential to stay well hydrated on
              the trail to keep your body’s critical systems running properly.
              Water helps cool you down when you’re hot, warm you up when you’re
              cold, and will keep your muscles and joints working properly to
              avoid injury while you hike. Make sure to bring enough water for
              the duration of your hike, or bring a lightweight water filter and
              know where water sources will be located along your route. For a
              24-hour water supply, one gallon (or 4 liters) is recommended per
              person. Make sure your water is easily accessible via water
              bottles or a hydration pack so you can drink freely while you
              hike. Also, it’s important to remember that while water is
              critically important, it’s also one of the heaviest things you’ll
              carry on the trail. So carrying a bunch of extra water should be
              avoided as well.
            </p>
          </li>

          <li className={styles.contentListItem}>
            <p>
              10. EMERGENCY SHELTER - If you’re on a multi-day backpacking trip,
              you'll already have a shelter in your pack. But for day hiking
              trips, we recommended bringing a small, lightweight emergency
              shelter, just in case you unexpectedly have to spend a night
              outside. Emergency blankets and bivys (we prefer the bivy) are
              lightweight, affordable options that could potentially save your
              life if you are ever in a really bad spot.
            </p>
            <Image
              src={mountains}
              alt="mountains"
              width={1280}
              height={400}
              loading="lazy"
              className={styles.contentList_img}
            />
          </li>
        </ul>
      </div>
      <div className={styles.quoteContainer}>
        <p className={styles.quoteText}>
          <q> The world reveals itself to those who travel on foot.</q>
        </p>
        <span className={styles.quoteAuthor}>Werner Herzog</span>
      </div>

      {/* Extra Hiking Essentials
Lip balm – to prevent your lips from chapping.
Spare batteries – in case your headlamp runs out of juice.
Water filtration system – this will be useful if you run out of water supplies.
Emergency shelter – this can be in the form of a tent, a bivy, a storm shelter or even just an emergency reflective blanket.
Sleeping bag – in case you get caught in low-light and need the camp the night out.
Whistle – this can be life-saving if you get lost and need to get attention.
Insect repellent – very useful for when the midges come out to play.
Binoculars – you may be able to see an escape route that you can’t see with your naked eye.
Trekking poles – these can be used for stability while walking while also making great splints should there be any injuries.
Rubbish bag – remember – Leave No Trace!
Rain gear – you can never be too prepared for the rain.
Piece of cord/rope – you will undoubtedly find a use for this, whether it’s a new shoelace or tying your whole shoe back together.
Blister kit – this will be your best friend when those little blisters start to form.
Toilet paper – you never know when nature will call on the trail!
Itinerary of your hike – leave one in your car at the trail head and one with a friend so people know where you are.
Emergency contact info – have a piece of paper on you with this information, and also any medications you may need to take. */}
    </section>
  );
};

export default EquipmentArticle;
