/* Faith timelines, 0 AD to today.
   Codes: C = Christian, M = Muslim, N = no religion / other faiths.
   Spec "380:C 711-718:M" means: becomes Christian in 380; Muslim takeover runs 711 to 718.
   A range blends the color from the old faith to the new one across those years.
   Everything starts as N. Color = faith of the power ruling the land in that period.
   Colonial empires that ruled without converting the population do not flip a color.
   Modern secular states use the majority faith; officially atheist states are N. */

window.FAITH = (function () {
  var S = {};
  function set(keys, spec) { keys.split("|").forEach(function (k) { S[k.trim()] = spec; }); }
  function prov(a3, names, spec) { names.split("|").forEach(function (n) { S[a3 + ":" + n.trim()] = spec; }); }

  /* ---------- Europe ---------- */
  set("ITA|VAT|SMR|MCO", "40-380:C");
  prov("ITA", "Trapani|Messina|Palermo|Agrigento|Caltanissetta|Ragusa|Siracusa|Catania|Enna", "40-380:C 827-902:M 1061-1091:C");
  prov("ITA", "Bari", "40-380:C 847:M 871:C");
  set("MLT", "60-380:C 870:M 1091-1224:C");
  set("FRA|AND", "150-400:C");
  prov("FRA", "Guyane française", "1643-1850:C");
  prov("FRA", "Guadeloupe|Martinique", "1635-1700:C");
  prov("FRA", "La Réunion", "1665-1700:C");
  prov("FRA", "Mayotte", "1500:M");
  prov("NLD", "Bonaire|Saba|St. Eustatius", "1634-1700:C");
  prov("NOR", "Svalbard|Bouvet Island", "N");
  set("GBR|IMN|JEY|GGY", "200-400:C 450-500:N 597-686:C");
  set("IRL", "432-500:C");
  set("BEL", "400-700:C");
  set("LUX|LIE|CHE", "350-600:C");
  set("NLD", "690-785:C 1960-2015:N");
  set("DEU", "400-804:C");
  set("AUT", "400-800:C");
  set("CZE", "863-900:C 1950-2001:N");
  set("SVK", "863-900:C");
  set("POL", "966-1000:C");
  set("DNK|FRO", "965-1050:C");
  set("NOR", "995-1030:C");
  set("ISL", "1000:C");
  set("SWE", "1000-1100:C");
  set("FIN|ALD", "1150-1250:C");
  set("EST", "1208-1227:C 1940:N");
  set("LVA", "1198-1290:C 1940:N 1991:C");
  set("LTU", "1387-1413:C 1940:N 1991:C");
  set("HUN", "300-400:C 430:N 973-1000:C 1526-1541:M 1686-1699:C");
  set("ROU", "300-400:C 600:N 864-1000:C");
  set("MDA", "864-1000:C 1940:N 1991:C");
  set("BGR", "300-400:C 600-680:N 864-870:C 1371-1396:M 1878:C");
  set("SRB", "300-400:C 600:N 850-880:C 1389-1459:M 1815-1878:C");
  set("KOS", "300-400:C 600:N 850-880:C 1389-1455:M 1912:C 1999-2008:M");
  set("MKD", "300-400:C 600:N 870-900:C 1371-1395:M 1912-1913:C");
  set("ALB", "300-400:C 1385-1479:M 1967:N 1991:M");
  set("MNE", "300-400:C 600:N 850-900:C");
  set("BIH", "300-400:C 600:N 850-900:C 1463-1520:M 1878:C 1992:M");
  set("HRV", "300-400:C 600:N 800-880:C");
  set("SVN", "300-400:C 600:N 750-800:C");
  set("GIB", "100-400:C 711:M 1309:C 1333:M 1462:C");

  /* Iberia, province by province: the Reconquista */
  var IB = "100-400:C 711-718:M ";
  prov("ESP", "Asturias|Cantabria|Bizkaia|Gipuzkoa|Álava|Navarra", "100-400:C 714:M 722-740:C");
  prov("ESP", "La Coruña|Lugo|Orense|Pontevedra", IB + "740-760:C");
  prov("ESP", "León|Zamora|Palencia|Burgos|Valladolid", IB + "850-912:C");
  prov("ESP", "La Rioja", IB + "923-1045:C");
  prov("ESP", "Gerona", IB + "785:C");
  prov("ESP", "Barcelona", IB + "801:C");
  prov("ESP", "Huesca", IB + "1096:C");
  prov("ESP", "Zaragoza|Soria", IB + "1118-1120:C");
  prov("ESP", "Tarragona", IB + "1118-1148:C");
  prov("ESP", "Lérida", IB + "1149:C");
  prov("ESP", "Teruel", IB + "1171:C");
  prov("ESP", "Salamanca|Ávila|Segovia", IB + "1085-1102:C");
  prov("ESP", "Madrid|Toledo|Guadalajara", IB + "1085:C");
  prov("ESP", "Cuenca", IB + "1177:C");
  prov("ESP", "Ciudad Real|Albacete", IB + "1212-1213:C");
  prov("ESP", "Cáceres|Badajoz", IB + "1227-1230:C");
  prov("ESP", "Baleares", IB + "1229-1235:C");
  prov("ESP", "Castellón|Valencia", IB + "1233-1238:C");
  prov("ESP", "Murcia", IB + "1243-1266:C");
  prov("ESP", "Alicante", IB + "1248-1296:C");
  prov("ESP", "Córdoba", IB + "1236:C");
  prov("ESP", "Jaén", IB + "1246:C");
  prov("ESP", "Sevilla", IB + "1248:C");
  prov("ESP", "Cádiz|Huelva", IB + "1262:C");
  prov("ESP", "Málaga", IB + "1487:C");
  prov("ESP", "Almería", IB + "1489:C");
  prov("ESP", "Granada", IB + "1492:C");
  prov("ESP", "Las Palmas|Santa Cruz de Tenerife", "1402-1496:C");
  prov("ESP", "Ceuta", "300-400:C 710:M 1415:C");
  prov("ESP", "Melilla", "300-400:C 710:M 1497:C");
  set("ESP", IB + "1085-1248:C");
  set("PRT", IB + "868-1249:C");
  prov("PRT", "Braga|Porto|Viana do Castelo", IB + "868:C");
  prov("PRT", "Vila Real|Bragança|Viseu|Guarda|Aveiro", IB + "868-1058:C");
  prov("PRT", "Coimbra", IB + "1064:C");
  prov("PRT", "Castelo Branco|Leiria", IB + "1135-1147:C");
  prov("PRT", "Lisboa|Santarém|Setúbal", IB + "1147:C");
  prov("PRT", "Évora|Portalegre", IB + "1165:C");
  prov("PRT", "Beja", IB + "1162-1234:C");
  prov("PRT", "Faro", IB + "1249:C");
  prov("PRT", "Madeira", "1420:C");
  prov("PRT", "Azores", "1432-1450:C");

  /* Greece, Cyprus, Turkey */
  set("GRC", "50-380:C 1393-1460:M 1821-1830:C");
  prov("GRC", "Thessalia", "50-380:C 1393:M 1881:C");
  prov("GRC", "Ipeiros|Dytiki Makedonia|Kentriki Makedonia", "50-380:C 1387-1430:M 1912-1913:C");
  prov("GRC", "Ayion Oros", "50-380:C");
  prov("GRC", "Anatoliki Makedonia kai Thraki", "50-380:C 1361-1380:M 1913-1920:C");
  prov("GRC", "Kriti", "50-380:C 824:M 961:C 1645-1669:M 1898-1913:C");
  prov("GRC", "Notio Aigaio", "50-380:C 1522:M 1912-1947:C");
  prov("GRC", "Voreio Aigaio", "50-380:C 1462:M 1912:C");
  prov("GRC", "Ionioi Nisoi", "50-380:C");
  set("CYP|ESB|WSB", "45-380:C 1571:M 1878:C");
  set("CYN", "45-380:C 1571:M 1878:C 1974:M");
  set("TUR", "50-380:C 1071-1085:M");
  prov("TUR", "Izmir|Manisa|Aydin|Mugla|Balikesir|Çanakkale|Bursa|Bilecik|Sakarya|Kocaeli|Yalova|Denizli|Usak",
       "50-380:C 1078-1081:M 1097-1110:C 1280-1337:M");
  prov("TUR", "Trabzon|Rize|Giresun|Ordu|Gümüshane", "50-380:C 1461:M");
  prov("TUR", "Istanbul|Tekirdag|Kirklareli|Edirne", "50-380:C 1361-1453:M");
  prov("TUR", "Hatay", "50-380:C 638:M 969:C 1084:M 1098:C 1268:M");
  prov("TUR", "Sanliurfa", "50-380:C 638:M 1031:C 1144:M");
  prov("TUR", "Kars|Ardahan|Artvin", "301-340:C 1064:M 1878:C 1918-1921:M");

  /* Caucasus and the former Soviet lands */
  set("ARM", "301:C 654:M 885:C 1064:M 1201:C 1236:N 1360:M 1828:C 1920:N 1991:C");
  set("GEO", "337:C 1921:N 1991:C");
  set("AZE", "313-400:C 640-705:M 1920:N 1991:M");
  set("UKR", "988-1000:C 1922:N 1991:C");
  set("BLR", "988-1100:C 1922:N 1991:C");
  set("RUS", "988-1100:C 1922:N 1991:C");
  prov("RUS", "Crimea|Sevastopol", "350-500:C 1313-1441:M 1783-1800:C 1922:N 1991:C");
  prov("RUS", "Kaliningrad", "1230-1283:C 1945:N 1991:C");
  prov("RUS", "Tatarstan", "922:M 1922:N 1991:M");
  prov("RUS", "Bashkortostan", "1300-1400:M 1922:N 1991:M");
  prov("RUS", "Dagestan", "643-1100:M 1922:N 1991:M");
  prov("RUS", "Chechnya|Ingush", "1700-1850:M 1922:N 1991:M");
  prov("RUS", "Kabardin-Balkar|Karachay-Cherkess", "1700-1800:M 1922:N 1991:M");
  prov("RUS", "North Ossetia", "900-950:C 1922:N 1991:C");
  prov("RUS", "Krasnodar|Stavropol'|Adygey", "1700:M 1864:C 1922:N 1991:C");
  prov("RUS", "Astrakhan'", "1313:M 1556-1600:C 1922:N 1991:C");
  prov("RUS", "Tuva|Buryat|Kalmyk|Maga Buryatdan", "N");
  prov("RUS", "Komi|Perm'|Udmurt|Mariy-El|Chuvash|Mordovia|Kirov|Sverdlovsk|Chelyabinsk|Orenburg",
       "1380-1600:C 1922:N 1991:C");
  prov("RUS", "Tyumen'|Kurgan|Omsk|Novosibirsk|Tomsk|Kemerovo|Altay|Gorno-Altay|Krasnoyarsk|Khakass|Irkutsk|Khanty-Mansiy|Yamal-Nenets|Nenets",
       "1582-1700:C 1922:N 1991:C");
  prov("RUS", "Chita|Amur|Yevrey|Khabarovsk|Primor'ye|Sakhalin|Sakha (Yakutia)|Kamchatka|Chukchi Autonomous Okrug",
       "1640-1860:C 1922:N 1991:C");
  set("KAZ|KAB", "1320-1500:M 1920:N 1991:M");
  set("UZB", "706-715:M 1220:N 1330:M 1920:N 1991:M");
  set("TKM", "651-700:M 1220:N 1330:M 1920:N 1991:M");
  set("TJK", "715-750:M 1220:N 1330:M 1920:N 1991:M");
  set("KGZ", "960-1700:M 1920:N 1991:M");

  /* ---------- Middle East & North Africa ---------- */
  set("SYR", "50-380:C 634-640:M");
  set("LBN", "50-380:C 635:M 1109:C 1289:M 1920:C 1989:M");
  set("ISR", "30-380:C 637:M 1099:C 1187:M 1191:C 1291:M 1948:N");
  prov("ISR", "Jerusalem", "30-380:C 637:M 1099:C 1187:M 1229:C 1244:M 1948:N");
  prov("PSX", "Gaza Strip", "50-380:C 637:M 1149:C 1187:M");
  prov("PSX", "West Bank", "30-380:C 637:M 1099:C 1187:M 1229:C 1244:M");
  set("PSX", "30-380:C 637:M 1099:C 1187:M");
  set("JOR", "50-380:C 636:M 1115:C 1189:M");
  set("EGY", "60-380:C 640-642:M");
  set("LBY", "100-380:C 643:M");
  set("TUN", "100-380:C 670-698:M");
  set("DZA", "150-380:C 680-710:M");
  set("MAR", "200-400:C 700-710:M");
  set("SAH|MRT", "1050-1076:M");
  set("SAU", "622-632:M");
  set("YEM", "525:C 570:N 628-632:M");
  set("OMN|ARE|QAT|KWT|BHR", "630-633:M");
  set("IRQ", "633-638:M 1258:N 1295:M");
  set("IRN", "636-651:M 1220-1256:N 1295:M");
  set("AFG", "650-1000:M 1221:N 1300:M");
  set("PAK", "711-1030:M");
  set("BGD", "1204-1300:M");
  set("MDV", "1153:M");

  /* ---------- South & East Asia ---------- */
  set("IND|KAS", "N");
  prov("IND", "Punjab|Haryana|Delhi|Chandigarh|Uttar Pradesh|Bihar|West Bengal|Uttarakhand|Jharkhand",
       "1192-1206:M 1720-1760:N");
  prov("IND", "Gujarat", "1299-1304:M 1730-1760:N");
  prov("IND", "Madhya Pradesh", "1305:M 1720-1740:N");
  prov("IND", "Maharashtra", "1318:M 1674:N");
  prov("IND", "Telangana", "1323:M 1948:N");
  prov("IND", "Andhra Pradesh", "1590:M 1766:N");
  prov("IND", "Karnataka", "1565:M 1799:N");
  prov("IND", "Tamil Nadu", "1335:M 1378:N");
  prov("IND", "Odisha", "1568:M 1751:N");
  prov("IND", "Jammu and Kashmir", "1339:M 1819:N 1947:M");
  prov("IND", "Lakshadweep", "1300:M");
  prov("IND", "Goa", "1510-1600:C 1900-1961:N");
  prov("IND", "Nagaland|Mizoram|Meghalaya", "1880-1950:C");
  set("CHN|MNG|PRK|KOR|JPN|TWN|HKG|MAC|NPL|BTN|LKA|MMR|THA|LAO|KHM|VNM|SGP|MUS", "N");
  prov("CHN", "Xinjiang", "960-1500:M 1759:N");
  set("MYS", "1400-1500:M");
  prov("MYS", "Sarawak", "1840-1950:C");
  set("BRN", "1360-1400:M");
  set("IDN", "1290-1600:M");
  prov("IDN", "Bali", "N");
  prov("IDN", "Papua|Papua Barat", "1855-1950:C");
  prov("IDN", "Nusa Tenggara Timur", "1556-1950:C");
  prov("IDN", "Sulawesi Utara", "1820-1900:C");
  prov("IDN", "Maluku", "1450:M 1580-1650:C");
  set("PHL", "1565-1600:C");
  prov("PHL", "Sulu|Tawi-Tawi|Basilan|Lanao del Sur|Maguindanao", "1380-1450:M");
  prov("PHL", "Manila", "1500:M 1571:C");
  set("TLS", "1950-1990:C");

  /* ---------- Sub-Saharan Africa ---------- */
  set("ETH", "330-350:C 1529-1535:M 1543:C");
  prov("ETH", "Somali|Afar|Harari People|Dire Dawa", "900-1100:M");
  set("ERI", "330-350:C");
  set("DJI|SOM|SOL", "800-1200:M");
  set("SDN", "540-580:C 1317-1504:M");
  prov("SDN", "Central Darfur|Southern Darfur|North Darfur|Western Darfur|Eastern Darfur", "1600-1650:M");
  set("SDS", "1900-2000:C");
  set("TCD", "1085-1200:M");
  set("NER", "1000-1500:M");
  set("MLI", "1050-1240:M");
  set("SEN", "1040-1900:M");
  set("GMB", "1500-1900:M");
  set("GIN", "1725-1800:M");
  set("GNB|SLE|BFA", "1850-1950:M");
  set("CIV", "1900-2020:M");
  set("NGA", "1850-1950:C");
  prov("NGA", "Borno|Yobe", "1085-1200:M");
  prov("NGA", "Kano|Katsina|Jigawa|Sokoto|Zamfara|Kebbi", "1350-1500:M");
  prov("NGA", "Kaduna|Bauchi|Gombe|Niger|Kwara|Adamawa|Oyo|Osun|Nassarawa", "1804-1830:M");
  set("CMR|BEN|TGO|GHA", "1900-1960:C");
  set("LBR", "1822-1900:C");
  set("CAF|COG|GAB|GNQ", "1880-1960:C");
  set("COD", "1880-1950:C");
  prov("COD", "Bas-Congo|Kinshasa City", "1491-1600:C");
  set("AGO", "1491-1700:C");
  set("KEN|TZA", "1890-1960:C");
  set("UGA", "1877-1930:C");
  set("RWA|BDI", "1900-1950:C");
  set("ZMB|MWI|ZWE|BWA|NAM|SWZ", "1850-1950:C");
  set("MOZ", "1900-1980:C");
  set("MDG", "1820-1900:C");
  set("ZAF", "1652-1900:C");
  set("LSO", "1833-1900:C");
  set("COM", "1100-1500:M");
  set("CPV|STP", "1462-1500:C");
  set("SYC", "1770:C");
  set("SHN", "1659:C");

  /* ---------- Americas ---------- */
  set("MEX", "1519-1600:C");
  set("GTM|SLV|HND|NIC", "1524-1600:C");
  set("CRI", "1561-1600:C");
  set("PAN", "1510-1550:C");
  set("BLZ", "1700-1850:C");
  set("CUB|USG", "1511-1530:C");
  set("HTI|DOM", "1493-1520:C");
  set("JAM", "1509-1530:C");
  set("PRI", "1508-1530:C");
  set("BHS|TCA", "1648-1700:C");
  set("TTO", "1592-1650:C");
  set("BRB|LCA|DMA|GRD|VCT|ATG|KNA|MSR|AIA|VGB|VIR|MAF|SXM|BLM|CUW|ABW|CYM|BMU", "1612-1700:C");
  set("COL", "1509-1600:C");
  set("VEN", "1522-1600:C");
  set("ECU", "1534-1600:C");
  set("PER", "1532-1600:C");
  set("BOL", "1538-1600:C");
  set("CHL", "1541-1600:C");
  set("ARG", "1536-1700:C");
  set("PRY", "1537-1600:C");
  set("URY", "1680-1750:C");
  set("BRA", "1532-1800:C");
  set("GUY|SUR", "1616-1850:C");
  set("FLK|SGS", "1833:C");
  set("SPM", "1604:C");
  set("GRL", "985:C 1450:N 1721-1800:C");
  set("CAN", "1608-1880:C");
  prov("CAN", "Québec", "1608-1650:C");
  prov("CAN", "Nova Scotia|New Brunswick|Prince Edward Island", "1605-1700:C");
  prov("CAN", "Newfoundland and Labrador", "1610-1700:C");
  prov("CAN", "Ontario", "1634-1800:C");
  prov("CAN", "Manitoba|Saskatchewan|Alberta", "1812-1880:C");
  prov("CAN", "British Columbia", "1843-1870:C");
  prov("CAN", "Yukon|Northwest Territories|Nunavut", "1850-1950:C");

  /* United States: first lasting Christian settlement, then settled majority */
  set("USA", "1607-1900:C");
  var US = {
    "Florida": "1565-1845:C",
    "New Mexico": "1598-1610:C 1680:N 1692-1700:C",
    "Virginia": "1607-1700:C", "West Virginia": "1730-1800:C",
    "Massachusetts": "1620-1680:C", "New York": "1614-1700:C",
    "New Hampshire": "1623-1700:C", "Maine": "1630-1750:C",
    "Connecticut": "1633-1680:C", "Rhode Island": "1636-1680:C",
    "Maryland": "1634-1700:C", "District of Columbia": "1634-1700:C",
    "Delaware": "1638-1700:C", "New Jersey": "1660-1700:C",
    "Pennsylvania": "1682-1750:C", "North Carolina": "1653-1750:C",
    "South Carolina": "1670-1750:C", "Georgia": "1733-1780:C",
    "Vermont": "1724-1790:C", "Texas": "1690-1850:C",
    "Arizona": "1691-1880:C", "California": "1769-1850:C",
    "Louisiana": "1699-1800:C", "Mississippi": "1702-1835:C",
    "Alabama": "1702-1835:C", "Tennessee": "1770-1800:C",
    "Kentucky": "1770-1800:C", "Ohio": "1788-1810:C",
    "Indiana": "1732-1816:C", "Illinois": "1699-1830:C",
    "Michigan": "1701-1837:C", "Wisconsin": "1830-1850:C",
    "Minnesota": "1850-1870:C", "Iowa": "1833-1850:C",
    "Missouri": "1735-1820:C", "Arkansas": "1686-1836:C",
    "Oklahoma": "1830-1907:C", "Kansas": "1854-1870:C",
    "Nebraska": "1854-1870:C", "South Dakota": "1860-1890:C",
    "North Dakota": "1860-1890:C", "Montana": "1841-1890:C",
    "Wyoming": "1867-1890:C", "Colorado": "1858-1876:C",
    "Utah": "1847-1860:C", "Nevada": "1850-1864:C",
    "Idaho": "1836-1890:C", "Oregon": "1834-1859:C",
    "Washington": "1836-1889:C", "Alaska": "1784-1950:C",
    "Hawaii": "1820-1860:C"
  };
  Object.keys(US).forEach(function (k) { S["USA:" + k] = US[k]; });

  /* ---------- Oceania ---------- */
  set("AUS|NFK", "1788-1900:C");
  set("NZL", "1814-1860:C 1970-2018:N");
  set("PNG", "1870-1970:C");
  set("FJI", "1835-1860:C");
  set("SLB", "1850-1950:C");
  set("VUT", "1840-1940:C");
  set("NCL", "1843-1900:C");
  set("WSM|TON|ASM|COK|NIU|WLF|PYF|PCN|TUV|KIR|MHL|NRU|FSM|PLW", "1797-1900:C");
  set("GUM|MNP", "1668:C");

  /* ---------- Parse ---------- */
  function parse(spec) {
    var out = [];
    (spec || "N").split(/\s+/).forEach(function (tok) {
      var m = tok.match(/^(\d+)(?:-(\d+))?:([CMN])$/);
      if (m) out.push({ start: +m[1], end: m[2] ? +m[2] : +m[1], to: m[3] });
    });
    return out;
  }
  var P = {};
  Object.keys(S).forEach(function (k) { P[k] = parse(S[k]); });

  /* state at year t: {from, to, f (0..1 progress), start, end} */
  function stateAt(key, t) {
    var steps = P[key] || [];
    var cur = "N";
    for (var i = 0; i < steps.length; i++) {
      var s = steps[i];
      if (t < s.start) break;
      if (t < s.end) return { from: cur, to: s.to, f: (t - s.start) / (s.end - s.start), start: s.start, end: s.end };
      cur = s.to;
    }
    return { from: cur, to: cur, f: 1 };
  }

  function keyFor(a3, provName) {
    var k = a3 + ":" + provName;
    if (P[k]) return k;
    return P[a3] ? a3 : null;
  }

  /* ---------- Events (shown on the ruler) ---------- */
  var EVENTS = [
    [0, "Birth of Jesus", "The timeline starts. Judea is a Roman province; the empire follows Roman and local gods."],
    [33, "Crucifixion; the church begins", "Jesus is crucified in Jerusalem. His followers begin spreading the faith across the Roman world."],
    [301, "Armenia becomes Christian", "Armenia becomes the first kingdom to adopt Christianity as its state religion."],
    [313, "Edict of Milan", "Emperor Constantine legalizes Christianity across the Roman Empire."],
    [330, "Aksum (Ethiopia) converts", "King Ezana of Aksum adopts Christianity."],
    [380, "Rome's state religion", "Theodosius makes Christianity the official religion of the Roman Empire."],
    [476, "Western Rome falls", "Germanic kingdoms replace Roman rule in the West; the East (Byzantium) continues."],
    [496, "Clovis baptized", "The Frankish king Clovis converts, bringing the Franks into the church."],
    [597, "Mission to England", "Augustine of Canterbury begins converting the Anglo-Saxons."],
    [622, "The Hijra", "Muhammad moves from Mecca to Medina; the start of the Islamic calendar."],
    [632, "Rashidun Caliphate", "Muhammad dies. The first caliphs unite Arabia and begin rapid conquests."],
    [636, "Battle of Yarmouk", "Arab armies defeat Byzantium; Syria and Palestine change hands."],
    [637, "Jerusalem surrenders", "Caliph Umar takes Jerusalem from the Byzantines."],
    [641, "Egypt conquered", "Christian Egypt falls to the caliphate (Alexandria 641-642)."],
    [651, "Persia conquered", "The Sasanian Persian empire falls; Iran begins its shift to Islam."],
    [661, "Umayyad Caliphate", "The Umayyads rule from Damascus and push into North Africa, Spain and Central Asia."],
    [711, "Muslims cross into Spain", "Tariq ibn Ziyad lands at Gibraltar; most of Iberia falls by 718."],
    [722, "Covadonga", "A small Christian kingdom holds out in Asturias. The Reconquista begins."],
    [732, "Battle of Tours", "Charles Martel stops the Umayyad advance into France."],
    [750, "Abbasid Caliphate", "The Abbasids take over and move the capital to Baghdad (founded 762)."],
    [800, "Charlemagne crowned", "Charlemagne is crowned emperor; Saxons are forcibly converted by 804."],
    [827, "Sicily invaded", "Aghlabid forces begin the conquest of Christian Sicily (complete 902)."],
    [864, "Bulgaria baptized", "Khan Boris I of Bulgaria converts; Slavic missions spread through the Balkans."],
    [909, "Fatimid Caliphate", "A rival Shia caliphate rises in North Africa, then rules Egypt from Cairo."],
    [929, "Caliphate of Córdoba", "Abd al-Rahman III declares a caliphate in Spain."],
    [966, "Poland baptized", "Mieszko I brings Poland into Latin Christianity."],
    [988, "Baptism of Kyivan Rus", "Prince Vladimir of Kyiv converts; the roots of Orthodox Ukraine, Belarus and Russia."],
    [1054, "East-West Schism", "Catholic and Orthodox churches split."],
    [1071, "Battle of Manzikert", "Seljuk Turks crush Byzantium and pour into Anatolia (modern Turkey)."],
    [1085, "Toledo retaken", "Castile captures Toledo, central Spain turns back to Christian rule."],
    [1091, "Normans retake Sicily", "Norman conquest of Muslim Sicily is completed; Malta follows."],
    [1095, "Crusade called", "Pope Urban II calls for a crusade at Clermont."],
    [1099, "First Crusade takes Jerusalem", "Crusaders capture Jerusalem and found the crusader states."],
    [1144, "Edessa falls", "Zengi captures the County of Edessa, triggering the Second Crusade."],
    [1147, "Second Crusade; Lisbon", "The Second Crusade fails in Syria, but crusaders help Portugal take Lisbon."],
    [1187, "Battle of Hattin", "Saladin destroys the crusader army and retakes Jerusalem."],
    [1189, "Third Crusade", "Richard the Lionheart retakes Acre and the coast, but not Jerusalem."],
    [1198, "Northern Crusades", "Crusades against pagan Baltic peoples: Livonia, Estonia, Prussia."],
    [1204, "Fourth Crusade sacks Constantinople", "Crusaders attack Christian Constantinople instead of the Holy Land."],
    [1212, "Las Navas de Tolosa", "A combined Christian army breaks Almohad power in Spain."],
    [1217, "Fifth Crusade", "Crusaders attack Egypt (Damietta) and are forced out in 1221."],
    [1229, "Sixth Crusade: Jerusalem by treaty", "Frederick II regains Jerusalem by negotiation, not battle."],
    [1236, "Córdoba falls", "Castile captures Córdoba; Seville follows in 1248."],
    [1244, "Jerusalem lost for good", "Khwarazmian forces sack Jerusalem. It stays under Muslim rule until 1917."],
    [1248, "Seventh Crusade", "Louis IX invades Egypt and is captured."],
    [1258, "Mongols sack Baghdad", "The Abbasid Caliphate in Baghdad ends. Mongols rule Iran and Iraq."],
    [1260, "Ain Jalut", "Egypt's Mamluks stop the Mongols in Palestine."],
    [1270, "Eighth Crusade", "Louis IX dies besieging Tunis."],
    [1291, "Fall of Acre", "The last major crusader city falls. The crusader states are over."],
    [1295, "Ilkhanate converts", "Mongol rulers of Iran convert to Islam."],
    [1299, "Ottoman state founded", "Osman I founds the Ottoman state in northwest Anatolia."],
    [1313, "Golden Horde converts", "Uzbeg Khan makes Islam the faith of the Golden Horde."],
    [1389, "Battle of Kosovo", "Serbia falls under Ottoman control."],
    [1396, "Crusade of Nicopolis", "A European crusade army is destroyed by the Ottomans in Bulgaria."],
    [1387, "Lithuania converts", "Europe's last pagan state adopts Christianity."],
    [1444, "Crusade of Varna", "The last big crusade against the Ottomans fails."],
    [1453, "Fall of Constantinople", "Mehmed II captures Constantinople; it becomes the Ottoman capital, Istanbul."],
    [1491, "Kongo kingdom converts", "King Nzinga a Nkuwu of Kongo is baptized."],
    [1492, "Granada falls; Columbus", "Spain takes Granada, the last Muslim state in Iberia. Columbus reaches the Americas."],
    [1517, "Ottoman Caliphate", "Selim I conquers Egypt; the Ottoman sultans claim the caliphate."],
    [1521, "Aztec Empire falls", "Spain conquers Tenochtitlan. Christianity spreads across Latin America."],
    [1522, "Siege of Rhodes", "The Ottomans expel the crusading Knights Hospitaller from Rhodes."],
    [1526, "Battle of Mohács", "The Ottomans defeat Hungary; Buda falls in 1541."],
    [1529, "Siege of Vienna; Ethiopia invaded", "The Ottomans fail at Vienna. Adal's Ahmad Gragn overruns Christian Ethiopia."],
    [1543, "Ethiopia restored", "With Portuguese help, Ethiopia defeats Adal at Wayna Daga."],
    [1565, "Florida and the Philippines", "Spain founds St. Augustine and begins converting the Philippines (Manila 1571)."],
    [1571, "Battle of Lepanto", "A Holy League fleet defeats the Ottoman navy; Cyprus falls to the Ottomans."],
    [1607, "Jamestown", "First lasting English settlement in North America (Plymouth follows in 1620)."],
    [1680, "Pueblo Revolt", "Pueblo peoples drive the Spanish out of New Mexico until 1692."],
    [1683, "Second Siege of Vienna", "A Polish-led army breaks the Ottoman siege. Ottoman retreat from Europe begins."],
    [1699, "Treaty of Karlowitz", "The Ottomans give up Hungary."],
    [1783, "Russia annexes Crimea", "The Muslim Crimean Khanate ends."],
    [1804, "Sokoto Caliphate", "Usman dan Fodio's jihad creates a caliphate across northern Nigeria."],
    [1830, "Greek independence", "Greece wins independence from the Ottomans; Serbia, Romania and Bulgaria follow by 1878."],
    [1878, "Congress of Berlin", "Ottoman Balkans shrink; Bosnia goes to Austria-Hungary, Cyprus to Britain."],
    [1912, "Balkan Wars", "Ottomans lose nearly all remaining European land."],
    [1922, "Soviet Union", "An officially atheist state rules from the Baltic to Central Asia."],
    [1924, "Caliphate abolished", "Turkey abolishes the Ottoman Caliphate."],
    [1947, "Partition of India", "Pakistan (and later Bangladesh) separate from India."],
    [1948, "State of Israel", "Israel is founded as a Jewish state."],
    [1967, "Albania bans religion", "Albania declares itself the world's first atheist state (until 1991)."],
    [1974, "Cyprus divided", "Turkey invades; the north becomes a Turkish Cypriot state."],
    [1991, "Soviet Union collapses", "Former Soviet countries return to Orthodox, Catholic and Muslim identities."],
    [1992, "Bosnian independence", "Bosnia, with a Muslim plurality, leaves Yugoslavia."],
    [2008, "Kosovo independence", "Muslim-majority Kosovo declares independence from Serbia."],
    [2011, "South Sudan", "Largely Christian South Sudan splits from Muslim Sudan."],
    [2014, "ISIS declares a 'caliphate'", "Seizes parts of Iraq and Syria; defeated by 2019. No country changes color."]
  ].sort(function (a, b) { return a[0] - b[0]; });

  /* ---------- Periods (lanes on the ruler) ---------- */
  var LANES = [
    { name: "Crusades", kind: "C", items: [
      [1096, 1099, "First Crusade"], [1147, 1149, "Second Crusade"], [1189, 1192, "Third Crusade"],
      [1202, 1204, "Fourth Crusade"], [1217, 1221, "Fifth Crusade"], [1228, 1229, "Sixth Crusade"],
      [1248, 1254, "Seventh Crusade"], [1270, 1270, "Eighth Crusade"], [1271, 1272, "Ninth Crusade"],
      [1198, 1290, "Northern Crusades"], [722, 1492, "Reconquista"], [1396, 1396, "Crusade of Nicopolis"],
      [1443, 1444, "Crusade of Varna"]
    ]},
    { name: "Caliphates", kind: "M", items: [
      [632, 661, "Rashidun Caliphate"], [661, 750, "Umayyad Caliphate"], [750, 1258, "Abbasid Caliphate"],
      [909, 1171, "Fatimid Caliphate"], [929, 1031, "Caliphate of Córdoba"], [1517, 1924, "Ottoman Caliphate"],
      [1804, 1903, "Sokoto Caliphate"]
    ]},
    { name: "Empires", kind: "N", items: [
      [0, 476, "Roman Empire"], [330, 1453, "Byzantine Empire"], [1206, 1368, "Mongol Empire"],
      [1299, 1922, "Ottoman Empire"], [1922, 1991, "Soviet Union"]
    ]}
  ];

  /* ---------- Historic places (always shown, with notes) ---------- */
  var PLACES = [
    ["Jerusalem", 35.23, 31.78, "Crusaders held it 1099-1187 and 1229-1244."],
    [function (y) { return y < 330 ? "Byzantium" : y < 1930 ? "Constantinople" : "Istanbul"; }, 28.98, 41.01, "Christian capital for 1,100 years; Ottoman from 1453."],
    ["Rome", 12.5, 41.9, "Seat of the popes."],
    ["Mecca", 39.83, 21.42, "Birthplace of Islam."],
    ["Medina", 39.61, 24.47, "First Muslim state, 622."],
    ["Damascus", 36.29, 33.51, "Umayyad capital, 661-750."],
    [function (y) { return y < 762 ? "(Baghdad, founded 762)" : "Baghdad"; }, 44.36, 33.31, "Abbasid capital until the Mongol sack of 1258."],
    ["Córdoba", -4.78, 37.88, "Capital of Muslim Spain; Christian from 1236."],
    ["Granada", -3.6, 37.18, "Last Muslim kingdom in Spain, until 1492."],
    ["Toledo", -4.02, 39.86, "Retaken by Castile, 1085."],
    ["Antioch", 36.16, 36.2, "Crusader principality 1098-1268."],
    ["Edessa", 38.79, 37.16, "First crusader state, 1098-1144."],
    ["Acre", 35.08, 32.93, "Last crusader stronghold, fell 1291."],
    [function (y) { return y < 969 ? "Fustat" : "Cairo"; }, 31.24, 30.04, "Fatimid capital, founded 969."],
    ["Alexandria", 29.92, 31.2, "Great Christian center; Muslim from 642."],
    ["Vienna", 16.37, 48.21, "Ottoman sieges failed in 1529 and 1683."],
    ["Kyiv", 30.52, 50.45, "Baptism of the Rus, 988."],
    ["Aksum", 38.72, 14.13, "Christian since about 330."]
  ];
  var BATTLES = [
    [636, "Yarmouk", 35.95, 32.8], [732, "Tours", 0.69, 46.6], [1071, "Manzikert", 42.53, 39.14],
    [1099, "Siege of Jerusalem", 35.23, 31.78], [1187, "Hattin", 35.45, 32.8], [1212, "Las Navas de Tolosa", -3.58, 38.28],
    [1260, "Ain Jalut", 35.36, 32.55], [1389, "Kosovo", 21.1, 42.72], [1396, "Nicopolis", 24.9, 43.7],
    [1444, "Varna", 27.91, 43.21], [1453, "Constantinople", 28.98, 41.01], [1492, "Granada", -3.6, 37.18],
    [1526, "Mohács", 18.68, 45.99], [1529, "Vienna", 16.37, 48.21], [1571, "Lepanto", 21.0, 38.25],
    [1683, "Vienna", 16.37, 48.21], [1543, "Wayna Daga", 37.6, 12.0]
  ];

  return { stateAt: stateAt, keyFor: keyFor, EVENTS: EVENTS, LANES: LANES, PLACES: PLACES, BATTLES: BATTLES };
})();
