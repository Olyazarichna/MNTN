"use client";

import styles from "./EquipmentArticle.module.scss";
import { useState,useEffect } from "react";
import Image from "next/image";
import  {
  hikingMan, forest, tents, bag, equipment, rain, mountains
} from './gallery';
import { Link, animateScroll as scroll } from "react-scroll";

const EquipmentArticle = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${"container"} ${styles.equipmentSection}`}>
      <p className={styles.mainInfo}>
        Whether you&rsquo;re casually hiking to a favorite waterfall or bagging
        a difficult summit, carrying the proper equipment is absolutely
        critical. When things go wrong, as they often do, this can mean the
        difference between a minor inconvenience and a dire result. For
        first-timers and sage backcountry traveler alike, dialing in essential
        day hiking gear is an important part of any pre-trip preparations.
      </p>
      <div className={styles.gridWrapper}>
        <nav className={styles.sidebar}>
          <ul>
            <li className={styles.sidebar_listItem}>
              <Link to="navigation" smooth={true} duration={500}>
                NAVIGATION
              </Link>
            </li>
            <li className={styles.sidebar_listItem}>
              <Link to="sun-protection" smooth={true} duration={500}>
                SUN PROTECTION
              </Link>
            </li>
            <li className={styles.sidebar_listItem}>
              <Link to="insulation" smooth={true} duration={500}>
                INSULATION
              </Link>
            </li>
            <li className={styles.sidebar_listItem}>
              <Link to="illumination" smooth={true} duration={500}>
                ILLUMINATION{" "}
              </Link>
            </li>
            <li className={styles.sidebar_listItem}>
              <Link to="first-aid-supplies" smooth={true} duration={500}>
                FIRST AID SUPPLIES
              </Link>
            </li>
            <li className={styles.sidebar_listItem}>
              <Link to="fire" smooth={true} duration={500}>
                FIRE
              </Link>
            </li>
            <li className={styles.sidebar_listItem}>
              <Link to="repair-kit-tools" smooth={true} duration={500}>
                REPAIR KIT & TOOLS
              </Link>
            </li>
            <li className={styles.sidebar_listItem}>
              <Link to="nutrition" smooth={true} duration={500}>
                NUTRITION
              </Link>
            </li>
            <li className={styles.sidebar_listItem}>
              <Link to="hydration" smooth={true} duration={500}>
                HYDRATION
              </Link>
            </li>
            <li className={styles.sidebar_listItem}>
              <Link to="emergency" smooth={true} duration={500}>
                EMERGENCY SHELTER
              </Link>
            </li>
          </ul>
        </nav>
        <ul className={styles.content}>
          <li id="navigation" className={styles.contentListItem}>
            <p>
              1. NAVIGATION - A topo map and trusty compass are two navigation
              components that should accompany you on any trip into the
              backcountry. They&rsquo;re reliable, lightweight, durable, and
              guaranteed to never run out of batteries. They can keep you from
              getting lost or help you find your way again, but they won&rsquo;t
              do any good if you don&rsquo;t know how to use them. So brush up
              on how to use a map and compass and how to keep from getting lost
              before heading out on your next trip. We also recommend keeping
              your maps in a clear, waterproof map sack to keep them dry and
              protected. Though not technically a component of the 10 Essentials
              List, GPS devices and phone apps (GAIA, TopoMaps, etc) are
              excellent tools for supplementing a map and compass. If you plan
              on using GPS regularly, you may want to carry a power bank in case
              your device runs out of juice. While GPS tools can be very
              convenient and useful on the trail, they should never fully
              replace your map and compass.
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

          <li id="sun-protection" className={styles.contentListItem}>
            <p>
              2. SUN PROTECTION - Sun protection is an incredibly important part
              of any backcountry trip, even when the weather looks cloudy.
              Sunscreen, spf lip balm, sunglasses (preferably polarized), a
              brimmed hat, and protective clothing should be considered
              essential on every hiking trip. Bad sunburns, bleeding cracked
              lips, and conditions like snow blindness can be debilitating if
              proper respect isn&rsquo;t paid to the sun&rsquo;s power.
            </p>
          </li>

          <li id="insulation" className={styles.contentListItem}>
            <p>
              3. INSULATION - Weather can change quickly on any wilderness trip,
              so we always recommend bringing an extra insulation clothing layer
              - even on warm weather trips. A simple layerable, quick dry
              clothing system will ensure you&rsquo;re safe and warm when temps
              drop. For example, we pack a down hooded jacket and rain
              protection on almost every hiking trip, regardless of the
              forecast. For your clothing system, you&rsquo;ll want to avoid
              cotton products, which take a long time to dry and pull heat from
              your body. Instead, wear quick dry, synthetic layers and manage
              perspiration to keep your clothing from soaking with sweat. Wet
              clothing will quickly chill you to the bone as soon as you stop
              hiking. Check out our post on building a layering system for
              hiking for more tips.
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

          <li id="illumination" className={styles.contentListItem}>
            <p>
              4. ILLUMINATION - We bring a reliable headlamp on every hiking
              trip, even if we&rsquo;re not planning on being out past dark.
              Sometimes a hike will take longer than expected, and getting lost
              in the dark can quickly compound a bad situation. If you ever do
              find yourself unexpectedly in the backcountry as daylight is
              fading, you&rsquo;ll be happy to have a headlamp to help you find
              the way home. We usually hike with our phones as well, and their
              built-in flashlights serve as a good backup light source. Make
              sure to test your headlamp batteries prior to your hike as well.
            </p>
          </li>

          <li id="first-aid-supplies" className={styles.contentListItem}>
            <p>
              5. FIRST AID SUPPLIES - When traveling into the backcountry,
              you&rsquo;ll always want to carry a comprehensive first aid kit.
              Most backpackers buy a pre-packaged first aid kit, which will
              provide a lightweight and reliable setup for minor ailments. As
              you gain more trail experience you&rsquo;ll be able to add or
              subtract from your first aid kit depending on your individual
              needs. And always make sure to replace anything you use as soon as
              you return home from your trek. Check out these videos we made to
              see what&rsquo;s in our first aid kit and learn some critical
              wilderness emergency first aid skills.
            </p>
          </li>
          <li id="fire" className={styles.contentListItem}>
            <p>
              6. FIRE - Knowing how to build a fire in nasty weather can be a
              life saving backcountry skill. For a quick tutorial, check out
              this video we made on building fires in harsh conditions. To make
              a fire as easy as possible, we always bring two small Bic lighters
              (one is kept in a dry place as a backup), a few stormproof
              matches, and a few small firestarter cubes. We only use the fire
              starters when we really need them, but they make fire building
              much easier, especially in wet conditions. If you&rsquo;re looking
              to go more survivalist style, you can carry a small fire flint,
              but small lighters tend to work just fine for us. Additionally,
              some hikers make homemade fire starters, which are cheap and easy
              to make, but we usually prefer the convenience and ease of the
              store bought stuff.
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
          <li id="repair-kit-tools" className={styles.contentListItem}>
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
              or repairing sunglasses, and it&rsquo;s even good for preventing
              blisters when you feel a hot spot on your foot.
            </p>
          </li>

          <li id="nutrition" className={styles.contentListItem}>
            <p>
              8. NUTRITION - When preparing for a hike, you&rsquo;ll want to
              make sure to bring along enough calories to sustain your energy
              for a long day of activity. We commonly snack on energy bars
              (Larabar, Clif Bar, ProBar, Luna, and Kind bars tend to be our
              favorites), dried fruits, nuts, and jerky while we hike. For a
              more substantial lunch, we like to pack tortillas or bagels and
              make sandwiches with hard meats (like salami) and cheeses (like
              parmesan). If you&rsquo;re headed out on a long hike, we recommend
              bringing some extra calorically-dense food, just in case your trip
              takes longer than expected. Check out our Backpacking Food Guide
              for a bunch more information and recommendations on our favorite
              trail grub.
            </p>
          </li>
          <li id="hydration" className={styles.contentListItem}>
            <p>
              9. HYDRATION - It&rsquo;s absolutely essential to stay well
              hydrated on the trail to keep your body&rsquo;s critical systems
              running properly. Water helps cool you down when you&rsquo;re hot,
              warm you up when you&rsquo;re cold, and will keep your muscles and
              joints working properly to avoid injury while you hike. Make sure
              to bring enough water for the duration of your hike, or bring a
              lightweight water filter and know where water sources will be
              located along your route. For a 24-hour water supply, one gallon
              (or 4 liters) is recommended per person. Make sure your water is
              easily accessible via water bottles or a hydration pack so you can
              drink freely while you hike. Also, it&rsquo;s important to
              remember that while water is critically important, it&rsquo;s also
              one of the heaviest things you&rsquo;ll carry on the trail. So
              carrying a bunch of extra water should be avoided as well.
            </p>
          </li>

          <li id="emergency" className={styles.contentListItem}>
            <p>
              10. EMERGENCY SHELTER - If you&rsquo;re on a multi-day backpacking
              trip, you&rsquo;ll already have a shelter in your pack. But for
              day hiking trips, we recommended bringing a small, lightweight
              emergency shelter, just in case you unexpectedly have to spend a
              night outside. Emergency blankets and bivys (we prefer the bivy)
              are lightweight, affordable options that could potentially save
              your life if you are ever in a really bad spot.
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
      {showButton &&(
        <button onClick={scroll.scrollToTop} className={styles.btn}><svg  className={styles.btn_icon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024"><path d="M104.7 685.2a64 64 0 0 0 90.5 0L512 368.4l316.8 316.8a64 64 0 0 0 90.5-90.4l-362-362.1a64 64 0 0 0-90.5 0l-362.1 362a64 64 0 0 0 0 90.5z"/></svg></button>
      )}
      

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
