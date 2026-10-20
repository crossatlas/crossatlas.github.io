/* Protests, riots and revolts: Europe, the United States and the Roman Mediterranean, AD 60 to October 2026.
   Shared by the Cross and Crescent Atlas and the Protest Tracker.
   Each entry: id, name, place, start/end ("YYYY", "YYYY-MM" or "YYYY-MM-DD"), lat, lon,
   region ("Europe" | "United States" | "Mediterranean"), level ("violent" | "clash" | "peaceful"),
   what, cause, links [[outlet, title, url, isVideo]].
   Links without a URL point to a Wikipedia search for the entry's name. */
window.PROTESTS = (function () {
  function W(t) { return ["Wikipedia", t, "https://en.wikipedia.org/w/index.php?search=" + encodeURIComponent(t)]; }
  var E = [];
  function add(o) {
    if (!o.links) o.links = [W(o.wiki || o.name)];
    E.push(o);
  }

  /* ---------------- Antiquity and Middle Ages ---------------- */
  add({ id: "boudica", name: "Boudica's revolt", place: "Colchester and London, Britain", start: "60", end: "61", lat: 51.89, lon: 0.9, region: "Europe", level: "violent",
        what: "The Iceni queen Boudica led tribes in burning Roman Colchester, London and St Albans before Rome crushed the revolt.", cause: "Roman seizure of Iceni lands and abuse of the royal family.", wiki: "Boudican revolt" });
  add({ id: "judea66", name: "First Jewish–Roman War", place: "Jerusalem, Judea", start: "66", end: "73", lat: 31.78, lon: 35.23, region: "Mediterranean", level: "violent",
        what: "Judea rose against Rome; Jerusalem and its Temple were destroyed in 70 and the last holdout, Masada, fell in 73.", cause: "Roman taxation and religious tensions." });
  add({ id: "barkokhba", name: "Bar Kokhba revolt", place: "Judea", start: "132", end: "136", lat: 31.7, lon: 35.1, region: "Mediterranean", level: "violent",
        what: "The last great Jewish revolt against Rome; Judea was devastated and Jews barred from Jerusalem.", cause: "Hadrian's plans to rebuild Jerusalem as a Roman city." });
  add({ id: "thessalonica", name: "Massacre of Thessalonica", place: "Thessalonica, Greece", start: "390", lat: 40.64, lon: 22.94, region: "Mediterranean", level: "violent",
        what: "After a riot killed a Roman commander, imperial troops massacred thousands in the city's hippodrome. Bishop Ambrose made Emperor Theodosius do public penance.", cause: "Arrest of a popular charioteer." });
  add({ id: "serapeum", name: "Destruction of the Serapeum", place: "Alexandria, Egypt", start: "391", lat: 31.2, lon: 29.92, region: "Mediterranean", level: "violent",
        what: "Christian crowds destroyed the great pagan temple of Serapis after imperial bans on pagan worship.", cause: "Clashes between Christians and pagans.", wiki: "Serapeum of Alexandria" });
  add({ id: "hypatia", name: "Killing of Hypatia", place: "Alexandria, Egypt", start: "415", lat: 31.21, lon: 29.9, region: "Mediterranean", level: "violent",
        what: "A Christian mob murdered the philosopher Hypatia amid a feud between the city's bishop and governor.", cause: "Political and religious factional conflict.", wiki: "Hypatia" });
  add({ id: "nika", name: "Nika riots", place: "Constantinople", start: "532", lat: 41.01, lon: 28.98, region: "Mediterranean", level: "violent",
        what: "Chariot-racing factions rioted for a week and burned much of the city, including the old Hagia Sophia; Justinian's troops killed about 30,000.", cause: "Taxes and anger at Emperor Justinian's officials." });
  add({ id: "rhineland", name: "Rhineland massacres", place: "Worms, Mainz and Speyer", start: "1096", lat: 50.0, lon: 8.27, region: "Europe", level: "violent",
        what: "Mobs gathering for the First Crusade killed thousands of Jews in Rhineland towns.", cause: "Crusade fervor and anti-Jewish hostility." });
  add({ id: "york1190", name: "York massacre of 1190", place: "York, England", start: "1190", lat: 53.96, lon: -1.08, region: "Europe", level: "violent",
        what: "Rioters besieged York's Jews in Clifford's Tower; about 150 died. Attacks also hit London and other towns after Richard I's coronation.", cause: "Crusade fervor and debts owed to Jewish moneylenders.", wiki: "Clifford's Tower massacre" });
  add({ id: "vespers", name: "Sicilian Vespers", place: "Palermo, Sicily", start: "1282", lat: 38.12, lon: 13.36, region: "Europe", level: "violent",
        what: "An uprising against French rule began at Easter vespers in Palermo; thousands of French were killed.", cause: "Resentment of Charles of Anjou's rule." });
  add({ id: "bruges", name: "Bruges Matins", place: "Bruges, Flanders", start: "1302", lat: 51.21, lon: 3.22, region: "Europe", level: "violent",
        what: "Flemish townspeople killed the French garrison at dawn, leading to the Battle of the Golden Spurs.", cause: "French occupation of Flanders.", wiki: "Bruges Matins" });
  add({ id: "jacquerie", name: "Jacquerie", place: "Beauvaisis, France", start: "1358", lat: 49.43, lon: 2.08, region: "Europe", level: "violent",
        what: "Peasants in northern France rose against nobles during the Hundred Years' War and were brutally suppressed.", cause: "War taxes, plunder and famine." });
  add({ id: "ciompi", name: "Revolt of the Ciompi", place: "Florence, Italy", start: "1378", lat: 43.77, lon: 11.25, region: "Europe", level: "violent",
        what: "Wool workers seized the city government for several weeks.", cause: "Workers excluded from guilds and political power.", wiki: "Ciompi revolt" });
  add({ id: "peasants1381", name: "Peasants' Revolt", place: "London, England", start: "1381", lat: 51.51, lon: -0.09, region: "Europe", level: "violent",
        what: "Rebels led by Wat Tyler marched on London, burned the Savoy Palace and killed the Archbishop of Canterbury.", cause: "Poll tax and serfdom." });
  add({ id: "1391", name: "Anti-Jewish riots of 1391", place: "Seville and across Spain", start: "1391", lat: 37.39, lon: -5.98, region: "Europe", level: "violent",
        what: "Massacres spread from Seville across Castile and Aragon; thousands were killed and many forced to convert.", cause: "Preaching against Jews and economic resentment.", wiki: "Massacre of 1391" });
  add({ id: "prague1419", name: "First Defenestration of Prague", place: "Prague, Bohemia", start: "1419", lat: 50.08, lon: 14.42, region: "Europe", level: "violent",
        what: "Hussite protesters threw town councillors from a window, starting the Hussite Wars.", cause: "Execution of reformer Jan Hus and arrests of his followers." });
  add({ id: "cade", name: "Jack Cade's Rebellion", place: "London, England", start: "1450", lat: 51.5, lon: -0.1, region: "Europe", level: "violent",
        what: "Kentish rebels occupied London before being dispersed.", cause: "Corruption and military defeats in France.", wiki: "Jack Cade's Rebellion" });
  add({ id: "lisbon1506", name: "Lisbon massacre", place: "Lisbon, Portugal", start: "1506", lat: 38.72, lon: -9.14, region: "Europe", level: "violent",
        what: "Mobs killed between 1,000 and 4,000 New Christians (converted Jews) over three days.", cause: "Plague, drought and religious agitation." });
  add({ id: "comuneros", name: "Revolt of the Comuneros", place: "Toledo and Castile, Spain", start: "1520", end: "1521", lat: 39.86, lon: -4.02, region: "Europe", level: "violent",
        what: "Castilian cities rose against Charles V and were defeated at Villalar.", cause: "Foreign advisers and taxes under the new king." });
  add({ id: "peasantswar", name: "German Peasants' War", place: "Southern and central Germany", start: "1524", end: "1525", lat: 51.36, lon: 11.1, region: "Europe", level: "violent",
        what: "Europe's largest popular uprising before the French Revolution; up to 100,000 peasants were killed.", cause: "Feudal burdens, inspired in part by Reformation ideas." });
  add({ id: "munster", name: "Münster rebellion", place: "Münster, Germany", start: "1534", end: "1535", lat: 51.96, lon: 7.63, region: "Europe", level: "violent",
        what: "Radical Anabaptists seized the city and declared a 'New Jerusalem' until it was retaken by siege.", cause: "Radical Reformation beliefs." });
  add({ id: "pilgrimage", name: "Pilgrimage of Grace", place: "York, England", start: "1536", end: "1537", lat: 53.96, lon: -1.08, region: "Europe", level: "clash",
        what: "Tens of thousands in northern England rose in defense of the monasteries and the old faith.", cause: "Henry VIII's break with Rome and dissolution of the monasteries." });
  add({ id: "beeldenstorm", name: "Beeldenstorm (Iconoclastic Fury)", place: "Antwerp and the Low Countries", start: "1566", lat: 51.22, lon: 4.4, region: "Europe", level: "violent",
        what: "Calvinist crowds smashed images in hundreds of churches, helping trigger the Dutch Revolt.", cause: "Protestant anger at Spanish and Catholic rule.", wiki: "Beeldenstorm" });
  add({ id: "alpujarras", name: "Morisco Revolt", place: "Alpujarras, Granada", start: "1568", end: "1571", lat: 36.95, lon: -3.3, region: "Europe", level: "violent",
        what: "Converted Muslims (Moriscos) in Granada rose against Spain; after defeat they were scattered across Castile.", cause: "Royal decree banning Arabic language, dress and customs.", wiki: "Morisco Revolt" });
  add({ id: "stbart", name: "St. Bartholomew's Day massacre", place: "Paris, France", start: "1572", lat: 48.86, lon: 2.34, region: "Europe", level: "violent",
        what: "Catholic mobs killed thousands of Huguenots (French Protestants) in Paris and other cities.", cause: "Wars of Religion; assassination of Huguenot leaders." });
  add({ id: "prague1618", name: "Second Defenestration of Prague", place: "Prague, Bohemia", start: "1618", lat: 50.09, lon: 14.4, region: "Europe", level: "violent",
        what: "Protestant nobles threw royal officials from a castle window, starting the Thirty Years' War.", cause: "Restrictions on Protestant worship.", wiki: "Defenestrations of Prague" });
  add({ id: "reapers", name: "Reapers' War", place: "Barcelona, Catalonia", start: "1640", end: "1652", lat: 41.39, lon: 2.17, region: "Europe", level: "violent",
        what: "Catalan peasants and the city of Barcelona revolted against the Spanish crown.", cause: "Billeting of troops and royal centralization." });
  add({ id: "masaniello", name: "Masaniello's revolt", place: "Naples, Italy", start: "1647", lat: 40.85, lon: 14.27, region: "Europe", level: "violent",
        what: "A fishmonger led Naples in revolt against Spanish taxes.", cause: "A new tax on fruit." });
  add({ id: "fronde", name: "The Fronde", place: "Paris, France", start: "1648", end: "1653", lat: 48.85, lon: 2.35, region: "Europe", level: "violent",
        what: "Parisians built barricades and nobles waged civil war against Cardinal Mazarin and the young Louis XIV.", cause: "Royal taxation and centralization." });
  add({ id: "bacon", name: "Bacon's Rebellion", place: "Jamestown, Virginia", start: "1676", lat: 37.21, lon: -76.78, region: "United States", level: "violent",
        what: "Settlers led by Nathaniel Bacon burned Jamestown.", cause: "Governor Berkeley's frontier policy toward Native Americans." });
  add({ id: "pueblo", name: "Pueblo Revolt", place: "Santa Fe, New Mexico", start: "1680", lat: 35.69, lon: -105.94, region: "United States", level: "violent",
        what: "Pueblo peoples drove the Spanish from New Mexico for 12 years.", cause: "Suppression of Pueblo religion and forced labor." });
  add({ id: "stono", name: "Stono Rebellion", place: "Near Charleston, South Carolina", start: "1739", lat: 32.78, lon: -80.2, region: "United States", level: "violent",
        what: "The largest slave uprising in the British mainland colonies.", cause: "Slavery." });
  add({ id: "stampact", name: "Stamp Act riots", place: "Boston, Massachusetts", start: "1765", lat: 42.36, lon: -71.06, region: "United States", level: "violent",
        what: "Crowds hanged tax officials in effigy and wrecked their houses.", cause: "British Stamp Act taxes.", wiki: "Stamp Act 1765" });
  add({ id: "bostonmassacre", name: "Boston Massacre", place: "Boston, Massachusetts", start: "1770", lat: 42.359, lon: -71.057, region: "United States", level: "violent",
        what: "British soldiers fired on a crowd, killing five.", cause: "Occupation of Boston by British troops." });
  add({ id: "teaparty", name: "Boston Tea Party", place: "Boston, Massachusetts", start: "1773", lat: 42.353, lon: -71.051, region: "United States", level: "clash",
        what: "Colonists dumped 342 chests of East India Company tea into Boston Harbor.", cause: "Tea Act and 'taxation without representation'." });
  add({ id: "gordon", name: "Gordon Riots", place: "London, England", start: "1780", lat: 51.51, lon: -0.12, region: "Europe", level: "violent",
        what: "Anti-Catholic rioters burned prisons and Catholic chapels for a week; hundreds died.", cause: "Law easing restrictions on Catholics." });
  add({ id: "shays", name: "Shays' Rebellion", place: "Springfield, Massachusetts", start: "1786", end: "1787", lat: 42.1, lon: -72.59, region: "United States", level: "violent",
        what: "Indebted farmers closed courts and attacked the Springfield armory, spurring the new Constitution.", cause: "Debt and tax collection." });
  add({ id: "bastille", name: "Storming of the Bastille", place: "Paris, France", start: "1789-07-14", lat: 48.853, lon: 2.369, region: "Europe", level: "violent",
        what: "Parisians seized the royal fortress-prison, the opening act of the French Revolution.", cause: "Food prices, debt and royal dismissal of reformers." });
  add({ id: "versailles", name: "Women's March on Versailles", place: "Paris to Versailles", start: "1789-10-05", lat: 48.8, lon: 2.12, region: "Europe", level: "violent",
        what: "Market women marched on the palace and forced the royal family back to Paris.", cause: "Bread prices and scarcity." });
  add({ id: "whiskey", name: "Whiskey Rebellion", place: "Western Pennsylvania", start: "1791", end: "1794", lat: 40.44, lon: -79.99, region: "United States", level: "violent",
        what: "Farmers attacked tax collectors; Washington led 13,000 militia to end it.", cause: "Federal whiskey tax." });
  add({ id: "germancoast", name: "German Coast Uprising", place: "Near New Orleans, Louisiana", start: "1811", lat: 30.0, lon: -90.4, region: "United States", level: "violent",
        what: "The largest slave revolt in U.S. history; about 500 people marched on New Orleans before being crushed.", cause: "Slavery." });
  add({ id: "luddites", name: "Luddite uprisings", place: "Nottingham and northern England", start: "1811", end: "1816", lat: 52.95, lon: -1.15, region: "Europe", level: "violent",
        what: "Textile workers smashed machines; the army was deployed.", cause: "Mechanization and wage cuts.", wiki: "Luddite" });
  add({ id: "peterloo", name: "Peterloo Massacre", place: "Manchester, England", start: "1819-08-16", lat: 53.48, lon: -2.24, region: "Europe", level: "violent",
        what: "Cavalry charged a crowd of about 60,000 demanding reform; 18 died.", cause: "Demands for parliamentary reform." });
  add({ id: "july1830", name: "July Revolution", place: "Paris, France", start: "1830-07", lat: 48.856, lon: 2.352, region: "Europe", level: "violent",
        what: "Three days of street fighting overthrew Charles X.", cause: "Royal decrees curbing the press and voting." });
  add({ id: "turner", name: "Nat Turner's rebellion", place: "Southampton County, Virginia", start: "1831", lat: 36.68, lon: -77.1, region: "United States", level: "violent",
        what: "An uprising of enslaved people killed about 55 white residents; reprisals killed many more Black people.", cause: "Slavery." });
  add({ id: "phila1844", name: "Philadelphia nativist riots", place: "Philadelphia, Pennsylvania", start: "1844", lat: 39.95, lon: -75.17, region: "United States", level: "violent",
        what: "Anti-Catholic mobs burned Irish Catholic churches and homes.", cause: "Nativism and anti-Catholic sentiment." });
  add({ id: "1848paris", name: "Revolutions of 1848: Paris", place: "Paris, France", start: "1848-02", lat: 48.86, lon: 2.36, region: "Europe", level: "violent",
        what: "Barricades toppled King Louis-Philippe and sparked revolutions across Europe.", cause: "Economic crisis, demands for democracy.", wiki: "French Revolution of 1848" });
  add({ id: "1848vienna", name: "Revolutions of 1848: Vienna and Berlin", place: "Vienna and Berlin", start: "1848-03", lat: 48.21, lon: 16.37, region: "Europe", level: "violent",
        what: "Uprisings forced out Metternich and won constitutions before being rolled back.", cause: "Demands for liberal reforms and national unity.", wiki: "Revolutions of 1848 in the Austrian Empire" });
  add({ id: "draftriots", name: "New York City draft riots", place: "New York City", start: "1863-07", lat: 40.73, lon: -73.99, region: "United States", level: "violent",
        what: "Four days of rioting against the Civil War draft; mobs attacked Black New Yorkers. At least 119 died.", cause: "Conscription law that let the rich buy exemptions." });
  add({ id: "commune", name: "Paris Commune", place: "Paris, France", start: "1871-03", end: "1871-05", lat: 48.87, lon: 2.38, region: "Europe", level: "violent",
        what: "A socialist and radical government ruled Paris for two months; the army crushed it, killing thousands in 'Bloody Week'.", cause: "Defeat by Prussia and radical republican and socialist politics." });
  add({ id: "rail1877", name: "Great Railroad Strike", place: "Baltimore and Pittsburgh", start: "1877-07", lat: 40.44, lon: -79.99, region: "United States", level: "violent",
        what: "A national strike with riots in Pittsburgh and Baltimore; about 100 died.", cause: "Wage cuts.", wiki: "Great Railroad Strike of 1877" });
  add({ id: "haymarket", name: "Haymarket affair", place: "Chicago, Illinois", start: "1886-05-04", lat: 41.88, lon: -87.64, region: "United States", level: "violent",
        what: "A bomb at a labor rally killed police officers; anarchists were hanged after a disputed trial. Origin of International Workers' Day.", cause: "Eight-hour workday movement." });
  add({ id: "homestead", name: "Homestead strike", place: "Homestead, Pennsylvania", start: "1892", lat: 40.4, lon: -79.91, region: "United States", level: "violent",
        what: "A gun battle between steelworkers and Pinkerton agents left 10 dead.", cause: "Wage cuts and union busting at Carnegie Steel." });
  add({ id: "pullman", name: "Pullman strike", place: "Chicago, Illinois", start: "1894", lat: 41.69, lon: -87.61, region: "United States", level: "violent",
        what: "A national railroad boycott broken by federal troops; about 30 killed.", cause: "Wage cuts at the Pullman company." });

  /* ---------------- 1900 to 1999 ---------------- */
  add({ id: "kishinev", name: "Kishinev pogrom", place: "Chișinău, Moldova", start: "1903-04", lat: 47.01, lon: 28.86, region: "Europe", level: "violent",
        what: "Anti-Jewish riots killed 49 and drew worldwide condemnation.", cause: "Antisemitic agitation and blood libel." });
  add({ id: "bloodysunday1905", name: "Bloody Sunday", place: "St. Petersburg, Russia", start: "1905-01-22", lat: 59.94, lon: 30.31, region: "Europe", level: "violent",
        what: "Troops fired on peaceful marchers petitioning the Tsar, starting the 1905 Revolution.", cause: "Working conditions and demands for reform.", wiki: "Bloody Sunday (1905)" });
  add({ id: "lawrence", name: "Lawrence textile strike", place: "Lawrence, Massachusetts", start: "1912", lat: 42.71, lon: -71.16, region: "United States", level: "clash",
        what: "The 'Bread and Roses' strike by mostly immigrant women workers won pay raises.", cause: "Pay cuts." });
  add({ id: "easter", name: "Easter Rising", place: "Dublin, Ireland", start: "1916-04", lat: 53.35, lon: -6.26, region: "Europe", level: "violent",
        what: "Irish republicans seized central Dublin for six days; the executions that followed turned opinion toward independence.", cause: "Irish independence from Britain." });
  add({ id: "feb1917", name: "February Revolution", place: "Petrograd, Russia", start: "1917-03", lat: 59.93, lon: 30.36, region: "Europe", level: "violent",
        what: "Bread protests and a garrison mutiny brought down Tsar Nicholas II.", cause: "War losses, food shortages." });
  add({ id: "spartacist", name: "Spartacist uprising", place: "Berlin, Germany", start: "1919-01", lat: 52.52, lon: 13.4, region: "Europe", level: "violent",
        what: "A communist general strike and armed uprising, crushed by the government and Freikorps.", cause: "Revolutionary socialism after World War I." });
  add({ id: "seattle1919", name: "Seattle General Strike", place: "Seattle, Washington", start: "1919-02", lat: 47.6, lon: -122.33, region: "United States", level: "peaceful",
        what: "65,000 workers shut down the city for five days, the first U.S. citywide general strike.", cause: "Shipyard wages." });
  add({ id: "redsummer", name: "Red Summer and Chicago race riot", place: "Chicago and other U.S. cities", start: "1919", lat: 41.83, lon: -87.62, region: "United States", level: "violent",
        what: "White mobs attacked Black communities in more than 30 cities; 38 died in Chicago.", cause: "Racial violence after World War I.", wiki: "Red Summer" });
  add({ id: "kronstadt", name: "Kronstadt rebellion", place: "Kronstadt, Russia", start: "1921-03", lat: 59.99, lon: 29.77, region: "Europe", level: "violent",
        what: "Sailors who had backed the revolution rose against Bolshevik rule and were crushed.", cause: "Bolshevik repression and grain requisitions." });
  add({ id: "tulsa", name: "Tulsa race massacre", place: "Tulsa, Oklahoma", start: "1921-05-31", lat: 36.16, lon: -95.99, region: "United States", level: "violent",
        what: "A white mob destroyed the Black Greenwood district; estimates of the dead run up to 300.", cause: "Racial violence." });
  add({ id: "beerhall", name: "Beer Hall Putsch", place: "Munich, Germany", start: "1923-11", lat: 48.14, lon: 11.58, region: "Europe", level: "violent",
        what: "Hitler's Nazis attempted a coup and were stopped by police; 16 Nazis and 4 police died.", cause: "Far-right attempt to seize power." });
  add({ id: "uk1926", name: "UK General Strike", place: "London and across Britain", start: "1926-05", lat: 51.5, lon: -0.13, region: "Europe", level: "peaceful",
        what: "About 1.7 million workers struck for nine days in support of coal miners.", cause: "Miners' wage cuts.", wiki: "1926 United Kingdom general strike" });
  add({ id: "bonus", name: "Bonus Army", place: "Washington, D.C.", start: "1932-07", lat: 38.89, lon: -77.03, region: "United States", level: "violent",
        what: "The army drove out tens of thousands of World War I veterans camped in Washington.", cause: "Veterans demanding early bonus payments." });
  add({ id: "feb1934", name: "6 February 1934 crisis", place: "Paris, France", start: "1934-02-06", lat: 48.866, lon: 2.32, region: "Europe", level: "violent",
        what: "Far-right leagues rioted outside parliament; 15 died.", cause: "Financial scandal and anti-parliament politics." });
  add({ id: "cable", name: "Battle of Cable Street", place: "London, England", start: "1936-10-04", lat: 51.51, lon: -0.06, region: "Europe", level: "clash",
        what: "Tens of thousands blocked a march by Oswald Mosley's British Union of Fascists through the Jewish East End.", cause: "Opposition to fascism and antisemitism." });
  add({ id: "kristallnacht", name: "Kristallnacht", place: "Berlin and across Germany", start: "1938-11-09", lat: 52.52, lon: 13.38, region: "Europe", level: "violent",
        what: "A Nazi-organized pogrom destroyed synagogues and Jewish businesses; about 30,000 Jewish men were sent to camps.", cause: "State-directed antisemitism." });
  add({ id: "detroit1943", name: "Detroit race riot", place: "Detroit, Michigan", start: "1943-06", lat: 42.33, lon: -83.05, region: "United States", level: "violent",
        what: "Three days of violence killed 34.", cause: "Racial tension over housing and wartime jobs.", wiki: "1943 Detroit race riot" });
  add({ id: "warsawghetto", name: "Warsaw Ghetto Uprising", place: "Warsaw, Poland", start: "1943-04", lat: 52.25, lon: 21.0, region: "Europe", level: "violent",
        what: "Jewish fighters resisted Nazi deportation to death camps for nearly a month.", cause: "Nazi genocide." });
  add({ id: "eg1953", name: "East German uprising", place: "East Berlin", start: "1953-06-17", lat: 52.51, lon: 13.41, region: "Europe", level: "violent",
        what: "Strikes and protests across East Germany were crushed by Soviet tanks.", cause: "Work quotas and communist rule.", wiki: "East German uprising of 1953" });
  add({ id: "montgomery", name: "Montgomery bus boycott", place: "Montgomery, Alabama", start: "1955-12", end: "1956-12", lat: 32.37, lon: -86.3, region: "United States", level: "peaceful",
        what: "A 381-day boycott sparked by Rosa Parks ended bus segregation.", cause: "Racial segregation." });
  add({ id: "hungary1956", name: "Hungarian Revolution", place: "Budapest, Hungary", start: "1956-10", lat: 47.5, lon: 19.04, region: "Europe", level: "violent",
        what: "A national uprising against Soviet control was crushed by Soviet forces; about 2,500 Hungarians died.", cause: "Soviet domination.", wiki: "Hungarian Revolution of 1956" });
  add({ id: "birmingham", name: "Birmingham campaign", place: "Birmingham, Alabama", start: "1963-04", lat: 33.52, lon: -86.81, region: "United States", level: "clash",
        what: "Police used dogs and fire hoses on children marching against segregation.", cause: "Racial segregation." });
  add({ id: "marchwash", name: "March on Washington", place: "Washington, D.C.", start: "1963-08-28", lat: 38.889, lon: -77.05, region: "United States", level: "peaceful",
        what: "About 250,000 marched for civil rights; Martin Luther King Jr. gave his 'I Have a Dream' speech.", cause: "Civil rights and jobs." });
  add({ id: "selma", name: "Selma to Montgomery marches", place: "Selma, Alabama", start: "1965-03", lat: 32.41, lon: -87.02, region: "United States", level: "clash",
        what: "State troopers beat marchers on 'Bloody Sunday'; the marches led to the Voting Rights Act.", cause: "Voting rights." });
  add({ id: "watts", name: "Watts riots", place: "Los Angeles, California", start: "1965-08", lat: 33.94, lon: -118.24, region: "United States", level: "violent",
        what: "Six days of rioting left 34 dead.", cause: "Police brutality and poverty." });
  add({ id: "detroit1967", name: "Detroit riot", place: "Detroit, Michigan", start: "1967-07", lat: 42.37, lon: -83.1, region: "United States", level: "violent",
        what: "Five days of rioting; 43 died and the National Guard and Army were deployed.", cause: "Police raid and racial inequality.", wiki: "1967 Detroit riot" });
  add({ id: "newark1967", name: "Newark riots", place: "Newark, New Jersey", start: "1967-07", lat: 40.73, lon: -74.17, region: "United States", level: "violent",
        what: "Four days of riots left 26 dead.", cause: "Police beating of a Black cab driver.", wiki: "1967 Newark riot" });
  add({ id: "mai68", name: "May 68", place: "Paris, France", start: "1968-05", lat: 48.85, lon: 2.34, region: "Europe", level: "violent",
        what: "Student barricades and a general strike of about 10 million workers nearly toppled de Gaulle.", cause: "Student and worker protest against conservatism and capitalism.", wiki: "May 68" });
  add({ id: "kingriots", name: "King assassination riots", place: "Washington, D.C., and 100+ cities", start: "1968-04", lat: 38.91, lon: -77.03, region: "United States", level: "violent",
        what: "Riots in more than 100 cities after Martin Luther King Jr.'s murder; 43 died.", cause: "Assassination of Martin Luther King Jr.", wiki: "King assassination riots" });
  add({ id: "dnc1968", name: "1968 Democratic Convention protests", place: "Chicago, Illinois", start: "1968-08", lat: 41.87, lon: -87.62, region: "United States", level: "violent",
        what: "Police clubbed anti-war protesters on live television.", cause: "Vietnam War.", wiki: "1968 Democratic National Convention protests" });
  add({ id: "prague1968", name: "Protests against the Warsaw Pact invasion", place: "Prague, Czechoslovakia", start: "1968-08", lat: 50.08, lon: 14.43, region: "Europe", level: "clash",
        what: "Crowds confronted Soviet tanks that ended the Prague Spring reforms.", cause: "Soviet-led invasion.", wiki: "Warsaw Pact invasion of Czechoslovakia" });
  add({ id: "stonewall", name: "Stonewall riots", place: "New York City", start: "1969-06-28", lat: 40.734, lon: -74.002, region: "United States", level: "violent",
        what: "Patrons of a gay bar fought back during a police raid, launching the modern gay rights movement.", cause: "Police raids on gay bars." });
  add({ id: "bogside", name: "Battle of the Bogside", place: "Derry, Northern Ireland", start: "1969-08", lat: 55.0, lon: -7.33, region: "Europe", level: "violent",
        what: "Three days of rioting between Catholic residents and police; British troops were deployed, beginning the Troubles' military phase.", cause: "Sectarian tensions and civil rights demands." });
  add({ id: "kentstate", name: "Kent State shootings", place: "Kent, Ohio", start: "1970-05-04", lat: 41.15, lon: -81.34, region: "United States", level: "violent",
        what: "National Guardsmen killed four students protesting the war.", cause: "Expansion of the Vietnam War into Cambodia." });
  add({ id: "bloodysunday1972", name: "Bloody Sunday (Derry)", place: "Derry, Northern Ireland", start: "1972-01-30", lat: 54.998, lon: -7.326, region: "Europe", level: "violent",
        what: "British paratroopers shot 26 unarmed civil rights marchers, killing 14.", cause: "Protest against internment without trial.", wiki: "Bloody Sunday (1972)" });
  add({ id: "carnation", name: "Carnation Revolution", place: "Lisbon, Portugal", start: "1974-04-25", lat: 38.71, lon: -9.14, region: "Europe", level: "peaceful",
        what: "A nearly bloodless military coup, backed by crowds, ended Portugal's dictatorship.", cause: "Colonial wars and dictatorship." });
  add({ id: "gdansk", name: "Gdańsk shipyard strike (Solidarity)", place: "Gdańsk, Poland", start: "1980-08", lat: 54.35, lon: 18.65, region: "Europe", level: "peaceful",
        what: "Strikers led by Lech Wałęsa won the right to a free trade union, Solidarity.", cause: "Food price rises and communist rule.", wiki: "August 1980 strikes in Poland" });
  add({ id: "brixton", name: "Brixton riot", place: "London, England", start: "1981-04", lat: 51.46, lon: -0.11, region: "Europe", level: "violent",
        what: "Clashes between mainly Black youths and police; nearly 300 police injured.", cause: "Stop-and-search policing and unemployment.", wiki: "1981 Brixton riot" });
  add({ id: "miners", name: "UK miners' strike and Battle of Orgreave", place: "Orgreave, South Yorkshire", start: "1984-03", end: "1985-03", lat: 53.38, lon: -1.37, region: "Europe", level: "violent",
        what: "A year-long strike against pit closures; mass clashes with police at Orgreave.", cause: "Coal mine closures.", wiki: "UK miners' strike (1984–85)" });
  add({ id: "leipzig", name: "Monday demonstrations and fall of the Berlin Wall", place: "Leipzig and Berlin, East Germany", start: "1989-09", end: "1989-11", lat: 51.34, lon: 12.37, region: "Europe", level: "peaceful",
        what: "Weekly peaceful marches grew to hundreds of thousands; the Berlin Wall opened on November 9.", cause: "Communist rule.", wiki: "Monday demonstrations in East Germany" });
  add({ id: "velvet", name: "Velvet Revolution", place: "Prague, Czechoslovakia", start: "1989-11", lat: 50.08, lon: 14.42, region: "Europe", level: "peaceful",
        what: "Mass peaceful protests ended communist rule in six weeks.", cause: "Communist rule." });
  add({ id: "romania1989", name: "Romanian Revolution", place: "Timișoara and Bucharest, Romania", start: "1989-12", lat: 45.75, lon: 21.23, region: "Europe", level: "violent",
        what: "Protests turned into a violent overthrow; Ceaușescu was executed. About 1,100 died.", cause: "Dictatorship and poverty." });
  add({ id: "polltax", name: "Poll tax riots", place: "London, England", start: "1990-03-31", lat: 51.507, lon: -0.128, region: "Europe", level: "violent",
        what: "A march of 200,000 against the poll tax ended in riots in Trafalgar Square.", cause: "The Community Charge (poll tax)." });
  add({ id: "la1992", name: "Los Angeles riots", place: "Los Angeles, California", start: "1992-04", lat: 34.0, lon: -118.3, region: "United States", level: "violent",
        what: "Six days of riots after police were acquitted of beating Rodney King; 63 died.", cause: "Police brutality verdict.", wiki: "1992 Los Angeles riots" });
  add({ id: "wto", name: "Seattle WTO protests", place: "Seattle, Washington", start: "1999-11", lat: 47.61, lon: -122.33, region: "United States", level: "clash",
        what: "40,000 protesters shut down the WTO opening; police used tear gas.", cause: "Globalization and trade policy.", wiki: "1999 Seattle WTO protests" });

  /* ---------------- 2000 to 2024 ---------------- */
  add({ id: "genoa", name: "Genoa G8 protests", place: "Genoa, Italy", start: "2001-07", lat: 44.41, lon: 8.93, region: "Europe", level: "violent",
        what: "Mass anti-globalization protests; police shot dead a protester and later raided a school, beating those inside.", cause: "Globalization; G8 summit.", wiki: "Protests against the 27th G8 summit" });
  add({ id: "iraq2003", name: "Protests against the Iraq War", place: "London, Rome and worldwide", start: "2003-02-15", lat: 51.51, lon: -0.14, region: "Europe", level: "peaceful",
        what: "Millions marched worldwide in one day; London and Rome drew the largest crowds.", cause: "Planned invasion of Iraq.", wiki: "15 February 2003 anti-war protests" });
  add({ id: "france2005", name: "French riots", place: "Clichy-sous-Bois and suburbs across France", start: "2005-10", end: "2005-11", lat: 48.91, lon: 2.55, region: "Europe", level: "violent",
        what: "Three weeks of riots in poor suburbs; about 9,000 cars burned and a state of emergency was declared.", cause: "Deaths of two teenagers fleeing police; discrimination and unemployment.", wiki: "2005 French riots" });
  add({ id: "greece2008", name: "Greek riots", place: "Athens, Greece", start: "2008-12", lat: 37.98, lon: 23.73, region: "Europe", level: "violent",
        what: "Weeks of rioting after police shot a 15-year-old.", cause: "Police shooting; economic anger.", wiki: "2008 Greek riots" });
  add({ id: "15m", name: "15-M (Indignados) movement", place: "Madrid, Spain", start: "2011-05", lat: 40.417, lon: -3.703, region: "Europe", level: "peaceful",
        what: "Mass occupations of city squares against austerity and the political establishment.", cause: "Unemployment and austerity.", wiki: "15-M Movement" });
  add({ id: "england2011", name: "England riots", place: "Tottenham, London, and other cities", start: "2011-08", lat: 51.6, lon: -0.07, region: "Europe", level: "violent",
        what: "Five days of rioting and looting after police shot Mark Duggan; five died.", cause: "Police shooting; social deprivation.", wiki: "2011 England riots" });
  add({ id: "occupy", name: "Occupy Wall Street", place: "New York City", start: "2011-09", lat: 40.709, lon: -74.011, region: "United States", level: "peaceful",
        what: "A two-month encampment in Zuccotti Park inspired protests in hundreds of cities.", cause: "Economic inequality ('We are the 99%')." });
  add({ id: "euromaidan", name: "Euromaidan", place: "Kyiv, Ukraine", start: "2013-11", end: "2014-02", lat: 50.45, lon: 30.52, region: "Europe", level: "violent",
        what: "Protests in Kyiv's Maidan square ended with about 100 protesters killed and the president fleeing.", cause: "Government turning away from an EU agreement; corruption." });
  add({ id: "ferguson", name: "Ferguson unrest", place: "Ferguson, Missouri", start: "2014-08", lat: 38.74, lon: -90.31, region: "United States", level: "violent",
        what: "Protests and riots after police killed Michael Brown; the National Guard was deployed.", cause: "Police killing of Michael Brown." });
  add({ id: "baltimore", name: "Baltimore protests", place: "Baltimore, Maryland", start: "2015-04", lat: 39.29, lon: -76.61, region: "United States", level: "violent",
        what: "Riots and a curfew after Freddie Gray died in police custody.", cause: "Death of Freddie Gray.", wiki: "2015 Baltimore protests" });
  add({ id: "charlottesville", name: "Unite the Right rally", place: "Charlottesville, Virginia", start: "2017-08-12", lat: 38.03, lon: -78.48, region: "United States", level: "violent",
        what: "A white nationalist rally; a neo-Nazi drove into counter-protesters, killing Heather Heyer.", cause: "White nationalist rally over a Confederate statue's removal." });
  add({ id: "catalonia2017", name: "Catalan referendum protests", place: "Barcelona, Spain", start: "2017-10", lat: 41.39, lon: 2.16, region: "Europe", level: "clash",
        what: "Police raided polling stations; hundreds were injured.", cause: "Catalan independence referendum.", wiki: "2017 Catalan independence referendum" });
  add({ id: "giletsjaunes", name: "Yellow vests movement", place: "Paris and across France", start: "2018-11", end: "2019-06", lat: 48.873, lon: 2.295, region: "Europe", level: "violent",
        what: "Weekly protests; the Arc de Triomphe was vandalized and thousands were injured.", cause: "Fuel tax and cost of living.", wiki: "Yellow vests protests" });
  add({ id: "floyd", name: "George Floyd protests", place: "Minneapolis and nationwide", start: "2020-05", end: "2020-08", lat: 44.95, lon: -93.26, region: "United States", level: "violent",
        what: "Protests in some 2,000 U.S. cities; a Minneapolis police station burned and about 14,000 people were arrested nationwide.", cause: "Police murder of George Floyd." });
  add({ id: "belarus2020", name: "Belarusian protests", place: "Minsk, Belarus", start: "2020-08", end: "2021-03", lat: 53.9, lon: 27.56, region: "Europe", level: "clash",
        what: "Hundreds of thousands protested a disputed election; tens of thousands were detained.", cause: "Election fraud claims against Lukashenko.", wiki: "2020–2021 Belarusian protests" });
  add({ id: "jan6", name: "January 6 Capitol attack", place: "Washington, D.C.", start: "2021-01-06", lat: 38.89, lon: -77.01, region: "United States", level: "violent",
        what: "A mob of Trump supporters stormed the Capitol to stop certification of the 2020 election; about 140 police were injured.", cause: "False claims that the 2020 election was stolen.", wiki: "January 6 United States Capitol attack" });
  add({ id: "pensions2023", name: "French pension reform protests", place: "Paris and across France", start: "2023-01", end: "2023-06", lat: 48.86, lon: 2.35, region: "Europe", level: "clash",
        what: "Months of strikes and marches, with clashes after the government forced the law through.", cause: "Raising the retirement age to 64.", wiki: "2023 French pension reform strikes" });
  add({ id: "nahel", name: "Nahel Merzouk riots", place: "Nanterre and across France", start: "2023-06", end: "2023-07", lat: 48.89, lon: 2.2, region: "Europe", level: "violent",
        what: "A week of riots after police shot a 17-year-old at a traffic stop; over 3,000 arrests.", cause: "Police killing of Nahel Merzouk.", wiki: "2023 French riots" });
  add({ id: "uk2024", name: "UK riots", place: "Southport and towns across England", start: "2024-07-30", end: "2024-08", lat: 53.65, lon: -3.01, region: "Europe", level: "violent",
        what: "Anti-immigration riots after a stabbing at a children's dance class; mosques and asylum hotels were attacked and over 1,000 arrested.", cause: "False online claims about the attacker's identity; anti-immigration anger.", wiki: "2024 United Kingdom riots" });
  add({ id: "serbia", name: "Serbian anti-corruption protests", place: "Novi Sad and Belgrade, Serbia", start: "2024-11", end: "2025", lat: 45.27, lon: 19.83, region: "Europe", level: "clash",
        what: "Student-led protests after a station canopy collapse killed 16 grew into some of Serbia's largest demonstrations.", cause: "Corruption.", wiki: "2024–present Serbian anti-corruption protests" });

  /* ---------------- 2025 ---------------- */
  add({ id: "la2025", name: "Los Angeles immigration raid protests", place: "Los Angeles, California", start: "2025-06-06", end: "2025-06", lat: 34.05, lon: -118.24, region: "United States", level: "violent",
        what: "Protests against ICE raids; cars were burned and the president deployed the National Guard and Marines.", cause: "Immigration enforcement raids.", wiki: "June 2025 Los Angeles protests against mass deportation" });
  add({ id: "nokings2025a", name: "No Kings protests (June 2025)", place: "Nationwide; flagship Philadelphia", start: "2025-06-14", lat: 39.95, lon: -75.16, region: "United States", level: "peaceful",
        what: "About 2,100 rallies nationwide with millions attending, largely peaceful.", cause: "Opposition to President Trump's policies.", wiki: "No Kings protests" });
  add({ id: "bloquons", name: "Bloquons tout ('Block Everything')", place: "Paris and across France", start: "2025-09-10", lat: 48.86, lon: 2.36, region: "Europe", level: "clash",
        what: "A nationwide day of blockades and protests; hundreds were arrested.", cause: "Budget cuts and the government.", wiki: "Bloquons tout" });
  add({ id: "hague2025", name: "The Hague anti-immigration riot", place: "The Hague, Netherlands", start: "2025-09-20", lat: 52.08, lon: 4.31, region: "Europe", level: "violent",
        what: "An anti-immigration demonstration turned into a riot; a police car was burned and a party office attacked.", cause: "Anti-immigration anger.", wiki: "2025 The Hague riot" });
  add({ id: "broadview2025", name: "Broadview and Chicago immigration protests", place: "Chicago area, Illinois", start: "2025-09", end: "2025-10", lat: 41.86, lon: -87.86, region: "United States", level: "clash",
        what: "Protests at the Broadview ICE facility and after a Border Patrol shooting in Brighton Park; agents used tear gas and pepper balls.", cause: "Operation Midway Blitz immigration enforcement.", links: [W("Operation Midway Blitz")] });
  add({ id: "nokings2025b", name: "No Kings protests (October 2025)", place: "Nationwide; 250,000 in Chicago's Grant Park", start: "2025-10-18", lat: 41.876, lon: -87.62, region: "United States", level: "peaceful",
        what: "Second nationwide No Kings day; organizers reported about 7 million participants. Largely peaceful.", cause: "Opposition to President Trump's policies.", wiki: "October 2025 No Kings protests" });

  /* ---------------- 2026 ---------------- */
  add({ id: "mpls2026", name: "Minneapolis ICE protests", place: "Minneapolis, Minnesota", start: "2026-01-07", end: "2026-01-31", lat: 44.98, lon: -93.27, region: "United States", level: "clash",
        what: "After ICE killed Renée Good (Jan 7) and CBP killed Alex Pretti (Jan 24), protests drew tens of thousands; tear gas and dozens of arrests. About 100 clergy were arrested at the airport on Jan 23.", cause: "Killings during an immigration enforcement surge.", wiki: "2026 U.S. immigration enforcement protests" });
  add({ id: "iceout", name: "'ICE Out of Everywhere' protests", place: "300+ U.S. locations", start: "2026-01-31", lat: 41.5, lon: -81.69, region: "United States", level: "peaceful",
        what: "Coordinated protests in more than 300 locations; about 50,000 in Minneapolis by organizers' estimate.", cause: "Immigration enforcement.", wiki: "January 30, 2026 protests against ICE" });
  add({ id: "iranwar", name: "Protests against strikes on Iran", place: "U.S. cities", start: "2026-03", lat: 40.75, lon: -73.98, region: "United States", level: "peaceful",
        what: "Anti-war protests in dozens of U.S. cities after the war with Iran began.", cause: "U.S. military action against Iran.", wiki: "2026 United States protests against strikes on Iran" });
  add({ id: "nokings2026a", name: "No Kings protests (March 2026)", place: "Nationwide; flagship St. Paul, Minnesota", start: "2026-03-28", lat: 44.955, lon: -93.102, region: "United States", level: "peaceful",
        what: "Third No Kings day; organizers expected more than 9 million and estimated 200,000 at the Minnesota State Capitol.", cause: "Opposition to President Trump's policies.", wiki: "March 2026 No Kings protests" });
  add({ id: "bushwick", name: "Bushwick hospital ICE clash", place: "Brooklyn, New York City", start: "2026-05-02", lat: 40.704, lon: -73.917, region: "United States", level: "clash",
        what: "About 200 protesters confronted ICE and NYPD outside Wyckoff Heights Medical Center; pepper spray used, ICE vehicle windows smashed, 8 to 9 arrested.", cause: "ICE removal of an injured detainee from the hospital.", wiki: "2026 Bushwick hospital ICE incident" });
  add({ id: "delaney", name: "Delaney Hall protests", place: "Newark, New Jersey", start: "2026-05-22", end: "2026-06", lat: 40.73, lon: -74.12, region: "United States", level: "clash",
        what: "Protests outside the ICE detention center during a detainee hunger strike; over 90 arrests, pepper spray and rubber bullets reported; a curfew was imposed.", cause: "Detention conditions.", wiki: "2026 U.S. immigration enforcement protests" });
  add({ id: "indy", name: "Indianapolis ICE protests", place: "Indianapolis, Indiana", start: "2026-09-03", end: "2026-09-05", lat: 39.77, lon: -86.2, region: "United States", level: "peaceful",
        what: "A noise rally outside a hotel and a protest of 100+ near the ICE office. No arrests reported.", cause: "Increase in ICE arrests.",
        links: [["WFYI", "ICE protests held in Indianapolis", "https://www.wfyi.org/wfyi-news/2026-09-06/ice-protests-held-in-indianapolis-after-increase-in-reports-of-arrests"]] });
  add({ id: "antidsa", name: "Rally against the Democratic Socialists of America", place: "Manhattan, New York City", start: "2026-09-08", lat: 40.715, lon: -73.987, region: "United States", level: "peaceful",
        what: "About 300 people rallied near NYC-DSA headquarters before the 9/11 anniversary.", cause: "Opposition to DSA's positions on Israel and terrorism.",
        links: [["JNS", "Anti-DSA rally draws about 300", "https://www.jns.org/news/u-s-news/anti-dem-socialists-rally-in-manhattan-draws-about-300"],
                ["JNS", "Preview of the rally", "https://www.jns.org/news/u-s-news/dsa-is-anti-usa-rally-targets-socialist-group-ahead-of-9-11-anniversary"]] });
  add({ id: "madrid", name: "Madrid housing protests", place: "Madrid, Spain", start: "2026-09-26", end: "2026-10", lat: 40.42, lon: -3.7, region: "Europe", level: "peaceful",
        what: "Sparked by the forced eviction of 87-year-old Maricarmen Abascal. Activists occupied an agency, tens of thousands marched on October 3, and a Puerta del Sol encampment entered its third week. Spain called snap elections for November 29.", cause: "Housing costs and evictions.",
        links: [["Euronews", "Tens of thousands march", "https://www.euronews.com/video/2026/10/03/tens-of-thousands-take-to-madrid-streets-demanding-housing-action", 1],
                ["Euronews", "Activists occupy agency", "https://www.euronews.com/video/2026/09/29/madrid-housing-activists-occupy-agency-amid-eviction-protests", 1],
                ["Democracy Now!", "Eviction sparks encampment", "https://www.democracynow.org/2026/9/28/spain_housing_crisis", 1]] });
  add({ id: "cornell", name: "'Students vs. Billionaires' rally", place: "Ithaca, New York", start: "2026-09-27", lat: 42.44, lon: -76.5, region: "United States", level: "peaceful",
        what: "Cornell Young Democratic Socialists hosted about 2,000 people with Rep. Alexandria Ocasio-Cortez; controversy over 'from the river to the sea' chants. No violence reported.", cause: "Democratic socialist campaign event.",
        links: [["Political.org", "Rally report", "https://political.org/2026/09/28/aocs-cornell-students-vs-billionaires-rally-opens-with-from-the-river-to-the-sea-chant-led-by-young-democratic-socialists/"]] });
  add({ id: "paris", name: "French school and cost-of-living protests", place: "Paris, France", start: "2026-09-17", end: "2026-10", lat: 48.86, lon: 2.35, region: "Europe", level: "violent",
        what: "Began September 17 with teachers and students at a south-eastern Paris high school. On October 17 more than 550,000 marched nationwide; clashes and looting in Paris, a Euronews crew attacked near Place de la République. Curfews in parts of Paris. PM Lecornu reported 1,200 arrests and 150 police injured nationwide; Paris police reported 855 arrests.", cause: "School conditions, then cost of living and budget cuts.",
        links: [["CNN", "Half a million protesters sweep France", "https://www.cnn.com/2026/10/17/europe/half-million-protesters-sweep-france-in-youth-unrest-latam-intl"],
                ["CNBC", "In pictures: France protests", "https://www.cnbc.com/2026/10/19/france-protests-paris-violence-pictures.html"],
                ["U.S. News (Reuters)", "Paris police report 855 arrests", "https://www.usnews.com/news/world/articles/2026-10-18/paris-police-report-855-arrests-after-violent-clashes-and-looting-during-protests"],
                ["Al Jazeera", "Protests hit Belgium, Italy, Portugal, France", "https://www.aljazeera.com/news/2026/10/17/cost-of-living-protests-hit-belgium-italy-portugal-and-france"]] });
  add({ id: "brussels", name: "Belgian student and budget protests", place: "Brussels, Belgium", start: "2026-10-01", end: "2026-10-17", lat: 50.85, lon: 4.35, region: "Europe", level: "clash",
        what: "Students rallied from October 1. On October 17 police fired tear gas and water cannon at youths throwing bottles in the Bourse district. Interior Minister Quintin called it \"pure and simple violence.\"", cause: "Education costs, budget cuts and cost of living.",
        links: [["Fox News", "Tear gas and water cannon in Brussels", "https://www.foxnews.com/video/6406535044112", 1],
                ["Euronews", "Protesters clash with police in Belgium", "https://www.euronews.com/2026/10/17/protesters-clash-with-police-in-belgium-as-demonstrations-turn-violent-across-europe"]] });
  add({ id: "nyc-oct7", name: "Protest announced at NYC City Hall", place: "New York City", start: "2026-10-07", lat: 40.713, lon: -74.006, region: "United States", level: "peaceful",
        what: "Several DSA and Young DSA chapters, with other groups, announced a protest against Mayor Mamdani. Their post praised the October 7, 2023 Hamas attacks as 'resistance'; two chapters withdrew after criticism. Coverage describes the announcement, not the turnout.", cause: "Opposition to Mayor Mamdani's handling of anti-Israel protest arrests and his antisemitism plan.",
        links: [["Denver Gazette", "DSA groups walk back post", "https://www.denvergazette.com/2026/10/06/dsa-groups-walk-back-calling-oct-7-resistance-against-imperialism/"]] });
  add({ id: "bronx", name: "Marble Hill ICE shooting protests", place: "Bronx, New York City", start: "2026-10-08", lat: 40.876, lon: -73.91, region: "United States", level: "clash",
        what: "An ICE officer fired seven rounds into a car with a five-year-old inside, wounding the driver. Protesters marched to the hospital that evening; some scuffles with police. Mayor Mamdani called for ICE to be abolished.", cause: "ICE shooting during an arrest.",
        links: [["Al Jazeera", "ICE shooting sparks protests", "https://www.aljazeera.com/news/2026/10/9/ice-agent-shoots-man-in-car-with-five-year-old-child-in-new-york-mayor"],
                ["ABC7 New York", "ICE agent fired 7 rounds", "https://abc7ny.com/post/ice-officer-shoots-man-vehicle-marble-hill-nyc/19924201/"]] });
  add({ id: "salem", name: "Salem ICE confrontation", place: "Salem, Oregon", start: "2026-10-10", lat: 44.92, lon: -123.0, region: "United States", level: "clash",
        what: "Protesters blocked ICE vehicles; federal agents used tear gas. DHS says protesters hit vehicles with bats and rocks. No arrests reported.", cause: "Immigration enforcement.",
        links: [["OPB", "ICE says protesters damaged vehicles", "https://www.opb.org/article/2026/10/12/salem-ice-officers-protestors-clash-damage-vehicles/"]] });
  add({ id: "lisbon", name: "Portugal cost-of-living marches", place: "Lisbon, Portugal", start: "2026-10-10", end: "2026-10-17", lat: 38.72, lon: -9.14, region: "Europe", level: "peaceful",
        what: "Tens of thousands joined a CGTP union march in Lisbon, reported as peaceful. Protests also in Funchal, Madeira.", cause: "Low wages, housing costs and labor law changes.",
        links: [["Al Jazeera", "Cost of living protests", "https://www.aljazeera.com/news/2026/10/17/cost-of-living-protests-hit-belgium-italy-portugal-and-france"],
                ["RTP (Portuguese)", "CGTP march in Lisbon", "https://www.rtp.pt/noticias/economia/segundo-em-tres-meses-protesto-da-cgtp-ja-esta-em-marcha-na-capital_n1696774"]] });
  add({ id: "tirana", name: "Albania's 'Flamingo Revolution'", place: "Tirana, Albania", start: "2026-10-13", end: "2026-10-19", lat: 41.33, lon: 19.82, region: "Europe", level: "violent",
        what: "Six days of anti-government protests: stones thrown, shops smashed; police used tear gas, water cannon and reportedly rubber bullets. By Oct 14, 16 arrested and 49 facing charges; six officers and a journalist injured. PM Edi Rama refuses to resign.", cause: "Students' university conditions, corruption allegations and a contested coastal development.",
        links: [["Euronews", "Student protests turn violent", "https://www.euronews.com/video/2026/10/14/albania-student-protests-in-tirana-turn-violent-as-flamingo-revolution-escalates", 1],
                ["Euronews", "Rubber bullets, hundreds arrested", "https://www.euronews.com/video/2026/10/17/albanian-police-fire-rubber-bullets-and-arrest-hundreds-as-anti-government-protests-enter-", 1],
                ["France 24", "Riots enter fifth day", "https://www.france24.com/en/video/20261018-riots-in-tirana-enter-a-fifth-day-as-albania-s-anti-government-protests-escalate", 1],
                ["Euronews", "Clashes on day six", "https://www.euronews.com/video/2026/10/19/albanian-police-clash-with-protesters-in-tirana-as-unrest-enters-sixth-day", 1]] });
  add({ id: "limoges", name: "Limoges town hall fire", place: "Limoges, France", start: "2026-10-17", end: "2026-10-18", lat: 45.83, lon: 1.26, region: "Europe", level: "violent",
        what: "Masked protesters burned a police car, broke into the 1873 town hall and set it on fire. The building was largely lost; its spire collapsed the next day.", cause: "Nationwide student and cost-of-living protests.",
        links: [["Euronews", "Town hall engulfed in flames", "https://www.euronews.com/video/2026/10/17/historic-limoges-town-hall-engulfed-in-flames-amid-protests-in-france", 1],
                ["Fox News", "Town hall 'largely lost'", "https://www.foxnews.com/world/limoges-town-hall-largely-lost-after-far-left-rioters-set-historic-building-fire-amid-french-unrest"],
                ["The Week", "What's behind the France riots", "https://www.theweek.in/news/world/2026/10/18/france-student-riots-and-protests-historic-limoges-town-hall-destroyed-macron-condemns-violence-clashes.html"]] });
  add({ id: "lyon", name: "Lyon tourist office arson", place: "Lyon, France", start: "2026-10-17", lat: 45.76, lon: 4.84, region: "Europe", level: "violent",
        what: "Protesters set the city's tourist office on fire.", cause: "Nationwide cost-of-living protests.",
        links: [["Euronews", "Violence spreads", "https://www.euronews.com/2026/10/17/protesters-clash-with-police-in-belgium-as-demonstrations-turn-violent-across-europe"],
                ["Al Jazeera", "Cost of living protests", "https://www.aljazeera.com/news/2026/10/17/cost-of-living-protests-hit-belgium-italy-portugal-and-france"]] });
  add({ id: "marseille", name: "Marseille city hall stormed", place: "Marseille, France", start: "2026-10-17", lat: 43.3, lon: 5.37, region: "Europe", level: "violent",
        what: "Black-clad protesters stormed City Hall, defaced it with graffiti and clashed with police.", cause: "Nationwide cost-of-living protests.",
        links: [["Euronews", "Report", "https://www.euronews.com/2026/10/17/protesters-clash-with-police-in-belgium-as-demonstrations-turn-violent-across-europe"]] });
  add({ id: "lille", name: "Lille clashes and curfew", place: "Lille, France", start: "2026-10-17", lat: 50.63, lon: 3.06, region: "Europe", level: "clash",
        what: "Clashes, looting and fires reported on October 17; curfews in parts of the city.", cause: "Nationwide cost-of-living protests.",
        links: [["ABC News (Australia)", "Europe's protests explained", "https://www.abc.net.au/news/2026-10-20/europe-protests-explained-as-demonstrations-grow/107285508"]] });
  [["nantes", "Nantes", 47.22, -1.55], ["bordeaux", "Bordeaux", 44.84, -0.58], ["toulouse", "Toulouse", 43.6, 1.44], ["nice", "Nice", 43.7, 7.26], ["strasbourg", "Strasbourg", 48.57, 7.75]].forEach(function (c) {
    add({ id: c[0], name: c[1] + " clashes", place: c[1] + ", France", start: "2026-10-17", lat: c[2], lon: c[3], region: "Europe", level: "clash",
          what: "Al Jazeera reports clashes, looting and fires in " + c[1] + " during the October 17 protests.", cause: "Nationwide cost-of-living protests.",
          links: [["Al Jazeera", "Report", "https://www.aljazeera.com/news/2026/10/17/cost-of-living-protests-hit-belgium-italy-portugal-and-france"]] });
  });
  add({ id: "milan", name: "Milan riots", place: "Milan, Italy", start: "2026-10-17", end: "2026-10-18", lat: 45.46, lon: 9.19, region: "Europe", level: "violent",
        what: "Rioters looted shops, set barricades on fire and wrecked a carabinieri car near the Duomo. Water cannon and tear gas; about 50 detained, many minors; two officers hurt. Clashes continued a second day.", cause: "Against wars and rising living costs. Meloni: \"Demonstrating is a right. Setting our cities ablaze is not.\"",
        links: [["CNN", "Milan protesters clash with police", "https://www.cnn.com/2026/10/19/world/video/milan-italy-cost-of-living-europe-police-protest-clash-vrtc-hnk-digvid", 1],
                ["Fox News", "Protesters attack police by the Duomo", "https://www.foxnews.com/video/6407051959112", 1],
                ["ABC News (AP)", "Rioters loot stores, set fires", "https://abcnews.com/International/wireStory/rioters-loot-stores-set-fires-central-milan-cost-137352156"],
                ["France 24", "Second day of clashes", "https://www.france24.com/en/live-news/20261018-second-day-of-street-clashes-in-milan"]] });
  add({ id: "bologna", name: "Bologna clashes", place: "Bologna, Italy", start: "2026-10-17", lat: 44.49, lon: 11.34, region: "Europe", level: "clash",
        what: "Stones were thrown during clashes with police.", cause: "Cost-of-living protests.",
        links: [["Al Jazeera", "Report", "https://www.aljazeera.com/news/2026/10/17/cost-of-living-protests-hit-belgium-italy-portugal-and-france"]] });
  add({ id: "liege", name: "Liège water cannon", place: "Liège, Belgium", start: "2026-10-17", lat: 50.63, lon: 5.57, region: "Europe", level: "clash",
        what: "Police used water cannon on smaller groups of demonstrators.", cause: "Cost of living and budget cuts.",
        links: [["Euronews", "Report", "https://www.euronews.com/2026/10/17/protesters-clash-with-police-in-belgium-as-demonstrations-turn-violent-across-europe"]] });
  add({ id: "nokings2026b", name: "No Kings: Vote Early (October 2026)", place: "Nationwide, 3,000+ events in all 50 states", start: "2026-10-17", lat: 39.74, lon: -104.99, region: "United States", level: "peaceful",
        what: "Fourth No Kings day, focused on early voting before the Nov 3 midterms. Organizers reported millions at more than 3,000 events; no violence reported in coverage reviewed. Organizers include Indivisible, 50501, Women's March and unions.", cause: "Opposition to President Trump's policies; early-voting turnout.", events: 3000,
        links: [["Democracy Now!", "Millions join No Kings", "https://www.democracynow.org/2026/10/19/headlines", 1],
                ["NPR", "No Kings draws crowds across the country", "https://www.npr.org/2026/10/17/nx-s1-6004887/no-kings-voting-trump"],
                ["Wikipedia", "October 2026 No Kings protests", "https://en.wikipedia.org/wiki/October_2026_No_Kings_protests"]] });
  add({ id: "nk-slc", name: "No Kings: Salt Lake City", place: "Salt Lake City, Utah", start: "2026-10-17", lat: 40.76, lon: -111.89, region: "United States", level: "peaceful",
        what: "2,000 to 3,000 marched from the Capitol to a ballot drop box; described as peaceful and celebratory. Rallies in 11 other Utah cities.", cause: "Early voting; opposition to Trump policies.",
        links: [["Salt Lake Tribune", "March to a ballot box", "https://www.sltrib.com/news/2026/10/17/no-kings-protest-salt-lake-city/"]] });
  add({ id: "nk-eugene", name: "No Kings: Eugene", place: "Eugene, Oregon", start: "2026-10-17", lat: 44.05, lon: -123.09, region: "United States", level: "peaceful",
        what: "Organizers estimated 2,000 to 3,000 at City Hall plaza. No incidents reported.", cause: "Early voting; opposition to Trump policies.",
        links: [["KLCC", "No Kings draws heavy crowd", "https://www.klcc.org/2026-10-17/with-midterm-elections-closing-in-no-kings-event-draws-heavy-crowd-in-eugene"]] });
  add({ id: "nk-mpls", name: "No Kings: Minneapolis", place: "Minneapolis, Minnesota", start: "2026-10-17", lat: 44.976, lon: -93.258, region: "United States", level: "peaceful",
        what: "Hundreds gathered at Commons Park; smaller than earlier Twin Cities rallies. No incidents reported.", cause: "Early voting; opposition to Trump policies.",
        links: [["Minnesota Reformer", "Hundreds gather downtown", "https://minnesotareformer.com/2026/10/17/hundreds-gather-in-downtown-minneapolis-for-no-kings-early-voting-day-of-action/"]] });

  /* ---------------- Added: Black Lives Matter, anti-ICE and pro-Palestinian protests ---------------- */
  add({ id: "dallas2016", name: "Dallas police shooting at BLM march", place: "Dallas, Texas", start: "2016-07-07", lat: 32.78, lon: -96.8, region: "United States", level: "violent", cats: ["blm"],
        what: "At the end of a peaceful Black Lives Matter march, a gunman killed five police officers.", cause: "March protesting police killings of Alton Sterling and Philando Castile.", wiki: "2016 shooting of Dallas police officers" });
  add({ id: "batonrouge2016", name: "Alton Sterling protests", place: "Baton Rouge, Louisiana", start: "2016-07", lat: 30.45, lon: -91.19, region: "United States", level: "clash", cats: ["blm"],
        what: "Protests after police killed Alton Sterling; nearly 200 arrests.", cause: "Police killing of Alton Sterling.", wiki: "Shooting of Alton Sterling" });
  add({ id: "charlotte2016", name: "Charlotte riots", place: "Charlotte, North Carolina", start: "2016-09", lat: 35.23, lon: -80.84, region: "United States", level: "violent", cats: ["blm"],
        what: "Two nights of rioting after police killed Keith Lamont Scott; a state of emergency was declared and one protester was shot dead.", cause: "Police killing of Keith Lamont Scott.", wiki: "2016 Charlotte riots" });
  add({ id: "atlanta2020", name: "Rayshard Brooks protests", place: "Atlanta, Georgia", start: "2020-06-12", lat: 33.75, lon: -84.39, region: "United States", level: "violent", cats: ["blm"],
        what: "The Wendy's restaurant where police killed Rayshard Brooks was burned down.", cause: "Police killing of Rayshard Brooks.", wiki: "Killing of Rayshard Brooks" });
  add({ id: "chaz", name: "Capitol Hill Occupied Protest (CHAZ)", place: "Seattle, Washington", start: "2020-06-08", end: "2020-07-01", lat: 47.615, lon: -122.318, region: "United States", level: "violent", cats: ["blm"],
        what: "Protesters held several blocks after police left a precinct; shootings in the zone killed two before police cleared it.", cause: "George Floyd protests.", wiki: "Capitol Hill Occupied Protest" });
  add({ id: "portland2020", name: "Portland protests and federal deployment", place: "Portland, Oregon", start: "2020-05-29", end: "2020-11", lat: 45.52, lon: -122.68, region: "United States", level: "violent", cats: ["blm"],
        what: "More than 100 consecutive nights of protests; federal agents were deployed in July and clashed nightly at the federal courthouse.", cause: "George Floyd protests; federal deployment.", wiki: "2020–2021 United States racial unrest in Portland" });
  add({ id: "kenosha", name: "Kenosha unrest", place: "Kenosha, Wisconsin", start: "2020-08-23", end: "2020-09-01", lat: 42.58, lon: -87.82, region: "United States", level: "violent", cats: ["blm"],
        what: "Arson and riots after police shot Jacob Blake; Kyle Rittenhouse shot three men, killing two (later acquitted on self-defense grounds).", cause: "Police shooting of Jacob Blake.", wiki: "Kenosha unrest" });
  add({ id: "louisville2020", name: "Breonna Taylor protests", place: "Louisville, Kentucky", start: "2020-05-28", end: "2020-09", lat: 38.25, lon: -85.76, region: "United States", level: "violent", cats: ["blm"],
        what: "Months of protests; after the September grand jury decision, two police officers were shot.", cause: "Police killing of Breonna Taylor.", wiki: "Breonna Taylor protests" });
  add({ id: "blmlondon", name: "Black Lives Matter protests in Britain", place: "London and Bristol, England", start: "2020-06-06", end: "2020-06-13", lat: 51.45, lon: -2.59, region: "Europe", level: "clash", cats: ["blm"],
        what: "Large marches in London; in Bristol protesters toppled the statue of slave trader Edward Colston into the harbor. Some clashes with police and counter-protesters.", cause: "George Floyd's killing and racism in Britain.", wiki: "George Floyd protests in the United Kingdom" });
  add({ id: "blmparis", name: "Justice for Adama protests", place: "Paris, France", start: "2020-06-02", lat: 48.89, lon: 2.4, region: "Europe", level: "clash", cats: ["blm"],
        what: "About 20,000 rallied despite a ban; clashes and tear gas at the end.", cause: "Death of Adama Traoré in police custody (2016), inspired by U.S. protests.", wiki: "Death of Adama Traoré" });

  add({ id: "newark2025", name: "Delaney Hall protest and arrests of officials", place: "Newark, New Jersey", start: "2025-05-09", lat: 40.731, lon: -74.121, region: "United States", level: "clash", cats: ["ice"],
        what: "Newark Mayor Ras Baraka was arrested outside the ICE detention center (charge later dropped); Rep. LaMonica McIver was later charged over the scuffle.", cause: "Opposition to the new ICE detention center.", wiki: "Delaney Hall" });
  add({ id: "nyc2025", name: "26 Federal Plaza ICE protests", place: "Manhattan, New York City", start: "2025-06", lat: 40.715, lon: -74.004, region: "United States", level: "clash", cats: ["ice"],
        what: "Repeated sit-ins and arrests at the immigration court building; city comptroller Brad Lander was detained by federal agents on June 17.", cause: "Arrests of immigrants at their court hearings.", wiki: "Brad Lander" });
  add({ id: "portland2025", name: "Portland ICE facility protests", place: "Portland, Oregon", start: "2025-06", end: "2025-10", lat: 45.497, lon: -122.676, region: "United States", level: "clash", cats: ["ice"],
        what: "Months of nightly protests at the ICE building; the administration moved to deploy the National Guard, which was fought in court.", cause: "Immigration enforcement.", wiki: "Portland, Oregon ICE facility protests" });
  add({ id: "portland2026", name: "Portland CBP shooting protests", place: "Portland, Oregon", start: "2026-01-08", lat: 45.53, lon: -122.57, region: "United States", level: "clash", cats: ["ice"],
        what: "Two people were shot and wounded by CBP agents; protests and arrests followed at the ICE building.", cause: "Federal agents' shooting; immigration enforcement.", wiki: "2026 U.S. immigration enforcement protests" });

  add({ id: "london2023", name: "London pro-Palestinian marches", place: "London, England", start: "2023-10", end: "2025", lat: 51.503, lon: -0.127, region: "Europe", level: "clash", cats: ["palestine"],
        what: "Regular marches drew tens of thousands to hundreds of thousands, mostly peaceful, with arrests at many and clashes with counter-protesters on Armistice Day 2023.", cause: "Israel's war in Gaza.", wiki: "Protests in the United Kingdom against the Gaza war" });
  add({ id: "columbia2024", name: "Columbia University encampment", place: "New York City", start: "2024-04-17", end: "2024-05-01", lat: 40.808, lon: -73.962, region: "United States", level: "clash", cats: ["palestine"],
        what: "A tent encampment spread to campuses nationwide; protesters occupied Hamilton Hall and police arrested over 100 on April 30. Over 3,000 arrests on U.S. campuses that spring.", cause: "Israel's war in Gaza; demands to divest.", wiki: "2024 Columbia University pro-Palestinian campus occupations" });
  add({ id: "ucla2024", name: "UCLA encampment attack", place: "Los Angeles, California", start: "2024-04-30", end: "2024-05-02", lat: 34.072, lon: -118.443, region: "United States", level: "violent", cats: ["palestine"],
        what: "Counter-protesters attacked the encampment overnight while police were slow to act; police cleared it two days later with over 200 arrests.", cause: "Israel's war in Gaza.", wiki: "2024 University of California, Los Angeles pro-Palestinian campus occupation" });
  add({ id: "dc2024", name: "Protests at Netanyahu's address to Congress", place: "Washington, D.C.", start: "2024-07-24", lat: 38.897, lon: -77.007, region: "United States", level: "clash", cats: ["palestine"],
        what: "Thousands protested; flags were burned and Union Station vandalized; police used pepper spray.", cause: "Israel's war in Gaza.", wiki: "Benjamin Netanyahu's 2024 address to Congress" });
  add({ id: "amsterdam2024", name: "Amsterdam violence around Maccabi match", place: "Amsterdam, Netherlands", start: "2024-11-07", end: "2024-11-08", lat: 52.37, lon: 4.9, region: "Europe", level: "violent", cats: ["palestine"],
        what: "After a football match, Israeli fans were chased and attacked in organized assaults; earlier, some Maccabi fans tore down Palestinian flags and chanted anti-Arab slogans. Dozens injured, over 60 arrests.", cause: "Tensions over the Gaza war around a Maccabi Tel Aviv match.", wiki: "November 2024 Amsterdam riots" });
  add({ id: "palaction2025", name: "Palestine Action support sit-ins", place: "Parliament Square, London", start: "2025-08-09", lat: 51.5, lon: -0.127, region: "Europe", level: "peaceful", cats: ["palestine"],
        what: "Over 500 people were arrested for holding signs supporting the group after the U.K. banned it as a terrorist organization.", cause: "Ban on Palestine Action.", wiki: "Palestine Action" });
  add({ id: "vuelta2025", name: "Vuelta a España protests", place: "Madrid, Spain", start: "2025-09-14", lat: 40.41, lon: -3.69, region: "Europe", level: "clash", cats: ["palestine"],
        what: "Protesters against an Israeli team forced the cancellation of the race's final stage; police clashed with demonstrators.", cause: "Israel's war in Gaza.", wiki: "2025 Vuelta a España" });
  add({ id: "italy2025", name: "Italian general strikes for Gaza", place: "Milan, Rome and across Italy", start: "2025-09-22", end: "2025-10-03", lat: 45.486, lon: 9.204, region: "Europe", level: "violent", cats: ["palestine"],
        what: "Nationwide strikes and marches; in Milan protesters clashed with police at Central Station and dozens of officers were injured.", cause: "Israel's war in Gaza and the interception of the Gaza aid flotilla.", wiki: "Global Sumud Flotilla" });
  add({ id: "nyc-arms2026", name: "Arrests at NYC protest over arms sales", place: "New York City", start: "2026-04", lat: 40.754, lon: -73.984, region: "United States", level: "clash", cats: ["palestine"],
        what: "Dozens were detained at a protest against U.S. arms sales to Israel.", cause: "U.S. arms sales to Israel.",
        links: [["Al-Monitor", "Dozens detained in New York", "https://www.al-monitor.com/originals/2026/04/dozens-detained-new-york-city-protest-over-us-arms-sales-israel"]] });

  /* ---------------- Added: communist, socialist, fascist and Nazi takeovers and rallies, worldwide ---------------- */
  add({ id: "hungary1919", name: "Hungarian Soviet Republic", place: "Budapest, Hungary", start: "1919-03", end: "1919-08", lat: 47.49, lon: 19.05, region: "Europe", level: "violent", cats: ["communist"],
        what: "Communists under Béla Kun took power for 133 days; a 'Red Terror' was followed by a 'White Terror' after their fall.", cause: "Communist revolution after World War I." });
  add({ id: "oct1917", name: "October Revolution", place: "Petrograd, Russia", start: "1917-11-07", lat: 59.94, lon: 30.31, region: "Europe", level: "violent", cats: ["communist"],
        what: "Lenin's Bolsheviks stormed the Winter Palace and seized power, beginning Communist rule in Russia.", cause: "Bolshevik revolution; war and hunger.", wiki: "October Revolution" });
  add({ id: "rcw", name: "Russian Civil War", place: "Russia and its empire", start: "1917-11", end: "1922", lat: 55.75, lon: 37.62, region: "Europe", level: "violent", cats: ["communist"],
        what: "Red Army against White forces; the Bolsheviks won. Estimates of deaths from fighting, terror, famine and disease run from 7 to 12 million.", cause: "Bolshevik seizure of power." });
  add({ id: "ussr1922", name: "Soviet Union founded", place: "Moscow", start: "1922-12-30", lat: 55.76, lon: 37.6, region: "Europe", level: "violent", cats: ["communist"],
        what: "Russia, Ukraine, Belarus and the Transcaucasian republics were joined into the USSR under one-party Communist rule.", cause: "Bolshevik victory in the civil war.", wiki: "Treaty on the Creation of the USSR" });
  add({ id: "marchrome", name: "March on Rome", place: "Rome, Italy", start: "1922-10-28", lat: 41.9, lon: 12.49, region: "Europe", level: "violent", cats: ["fascist"],
        what: "Mussolini's Blackshirts marched on Rome; the king made Mussolini prime minister, and Italy became a fascist dictatorship by 1925.", cause: "Fascist seizure of power." });
  add({ id: "nazi1933", name: "Nazi seizure of power", place: "Berlin, Germany", start: "1933-01-30", end: "1933-03-23", lat: 52.516, lon: 13.378, region: "Europe", level: "violent", cats: ["fascist"],
        what: "Hitler was appointed chancellor; the SA held a torchlight parade through the Brandenburg Gate. After the Reichstag fire, the Enabling Act gave Hitler dictatorial power.", cause: "Nazi rise to power.", wiki: "Nazi seizure of power" });
  add({ id: "bookburn", name: "Nazi book burnings", place: "Berlin and university towns", start: "1933-05-10", lat: 52.517, lon: 13.393, region: "Europe", level: "violent", cats: ["fascist"],
        what: "Students and Nazi officials burned tens of thousands of 'un-German' books.", cause: "Nazi censorship.", wiki: "Nazi book burnings" });
  add({ id: "nuremberg", name: "Nuremberg rallies", place: "Nuremberg, Germany", start: "1933", end: "1938", lat: 49.43, lon: 11.12, region: "Europe", level: "peaceful", cats: ["fascist"],
        what: "Annual Nazi Party mass rallies used for propaganda; the 1935 rally announced the Nuremberg race laws.", cause: "Nazi Party propaganda." });
  add({ id: "spain1936", name: "Spanish Civil War", place: "Madrid and across Spain", start: "1936-07", end: "1939-04", lat: 40.42, lon: -3.7, region: "Europe", level: "violent", cats: ["fascist", "communist"],
        what: "Franco's Nationalists, backed by Hitler and Mussolini, fought the Republic, backed by the USSR; Franco won and ruled until 1975. About 500,000 died.", cause: "Military uprising against the elected Republic." });
  add({ id: "baltics1940", name: "Soviet occupation of the Baltic states", place: "Estonia, Latvia and Lithuania", start: "1940-06", lat: 56.95, lon: 24.11, region: "Europe", level: "violent", cats: ["communist"],
        what: "The USSR occupied and annexed the three countries; tens of thousands were deported to Siberia in 1941 and after 1944.", cause: "Nazi-Soviet pact." });
  add({ id: "prague1948", name: "Communist coup in Czechoslovakia", place: "Prague, Czechoslovakia", start: "1948-02", lat: 50.087, lon: 14.421, region: "Europe", level: "clash", cats: ["communist"],
        what: "The Communist Party, with mass rallies and armed militias, forced out democratic ministers and took full control.", cause: "Communist takeover in the Soviet bloc.", wiki: "1948 Czechoslovak coup d'état" });
  add({ id: "nk1948", name: "North Korea founded", place: "Pyongyang, North Korea", start: "1948-09-09", lat: 39.03, lon: 125.75, region: "Asia", level: "violent", cats: ["communist"],
        what: "Kim Il Sung's Soviet-backed regime declared the Democratic People's Republic of Korea; it invaded the South in 1950.", cause: "Soviet occupation of northern Korea.", wiki: "North Korea" });
  add({ id: "china1949", name: "Communist victory in China", place: "Beijing, China", start: "1949-10-01", lat: 39.905, lon: 116.39, region: "Asia", level: "violent", cats: ["communist"],
        what: "After winning the civil war, Mao Zedong proclaimed the People's Republic of China from Tiananmen.", cause: "Chinese Civil War.", wiki: "Proclamation of the People's Republic of China" });
  add({ id: "cuba1959", name: "Cuban Revolution", place: "Havana, Cuba", start: "1959-01-01", lat: 23.13, lon: -82.38, region: "Latin America", level: "violent", cats: ["communist"],
        what: "Fidel Castro's rebels took power after Batista fled; Castro declared the revolution socialist in 1961 and aligned with the USSR.", cause: "Revolt against the Batista dictatorship." });
  add({ id: "cultural", name: "Cultural Revolution", place: "Beijing and across China", start: "1966-05", end: "1976", lat: 39.903, lon: 116.397, region: "Asia", level: "violent", cats: ["communist"],
        what: "Mao launched mass campaigns; Red Guards persecuted teachers, officials and 'class enemies'. Deaths are estimated from hundreds of thousands to about 2 million.", cause: "Mao's campaign against perceived enemies." });
  add({ id: "chile1973", name: "Coup against Allende's socialist government", place: "Santiago, Chile", start: "1973-09-11", lat: -33.44, lon: -70.65, region: "Latin America", level: "violent", cats: ["communist"],
        what: "The military overthrew elected Marxist president Salvador Allende; Pinochet's dictatorship killed or disappeared over 3,000 people.", cause: "Opposition to Allende's socialist program.", wiki: "1973 Chilean coup d'état" });
  add({ id: "ethiopia1974", name: "Derg takeover", place: "Addis Ababa, Ethiopia", start: "1974-09", lat: 9.03, lon: 38.74, region: "Africa", level: "violent", cats: ["communist"],
        what: "A Marxist military junta overthrew Emperor Haile Selassie; its 'Red Terror' killed tens of thousands.", cause: "Famine and revolt against the monarchy.", wiki: "Derg" });
  add({ id: "saigon1975", name: "Fall of Saigon", place: "Saigon, Vietnam", start: "1975-04-30", lat: 10.78, lon: 106.7, region: "Asia", level: "violent", cats: ["communist"],
        what: "North Vietnamese forces captured Saigon, ending the Vietnam War and unifying Vietnam under Communist rule.", cause: "Vietnam War." });
  add({ id: "khmer1975", name: "Khmer Rouge takeover", place: "Phnom Penh, Cambodia", start: "1975-04-17", end: "1979-01", lat: 11.56, lon: 104.92, region: "Asia", level: "violent", cats: ["communist"],
        what: "The Khmer Rouge emptied Phnom Penh within days and forced the population into rural labor camps; about 1.5 to 2 million Cambodians died by 1979.", cause: "Communist revolution under Pol Pot.", wiki: "Khmer Rouge" });
  add({ id: "laos1975", name: "Pathet Lao takeover", place: "Vientiane, Laos", start: "1975-12", lat: 17.97, lon: 102.6, region: "Asia", level: "clash", cats: ["communist"],
        what: "Communists abolished the monarchy and declared the Lao People's Democratic Republic.", cause: "End of the Indochina wars.", wiki: "Lao People's Democratic Republic" });
  add({ id: "afghan1978", name: "Saur Revolution", place: "Kabul, Afghanistan", start: "1978-04-27", lat: 34.53, lon: 69.17, region: "Asia", level: "violent", cats: ["communist"],
        what: "Afghan communists seized power in a coup; the Soviet invasion followed in December 1979.", cause: "Communist coup." });
  add({ id: "nicaragua1979", name: "Sandinista Revolution", place: "Managua, Nicaragua", start: "1979-07-19", lat: 12.13, lon: -86.25, region: "Latin America", level: "violent", cats: ["communist"],
        what: "The socialist Sandinistas overthrew the Somoza dictatorship.", cause: "Revolt against the Somoza family.", wiki: "Nicaraguan Revolution" });
  add({ id: "tiananmen", name: "Tiananmen Square protests", place: "Beijing, China", start: "1989-04", end: "1989-06-04", lat: 39.903, lon: 116.391, region: "Asia", level: "violent", cats: ["communist"],
        what: "Student-led pro-democracy protests against the Communist government were crushed by the army on June 3 and 4; estimates of the dead range from several hundred to several thousand.", cause: "Demands for political reform.", wiki: "1989 Tiananmen Square protests and massacre" });
  add({ id: "chemnitz", name: "Chemnitz far-right riots", place: "Chemnitz, Germany", start: "2018-08", lat: 50.83, lon: 12.92, region: "Europe", level: "violent", cats: ["fascist"],
        what: "After a fatal stabbing, far-right and neo-Nazi groups marched; some chased people they took to be foreigners, and Nazi salutes were shown.", cause: "Killing of a German man by asylum seekers; far-right mobilization.", wiki: "2018 Chemnitz protests" });

  /* ---------------- Added: left-wing protests, riots and takeovers on every inhabited continent and island region ---------------- */
  function L(o) { o.cats = (o.cats || []).concat(["left"]); add(o); }
  // Africa
  L({ id: "egypt1952", name: "Egyptian revolution (Free Officers)", place: "Cairo, Egypt", start: "1952-07-23", lat: 30.04, lon: 31.24, region: "Africa", level: "clash", cats: ["communist"],
      what: "Army officers led by Nasser overthrew King Farouk and built a one-party 'Arab socialist' state.", cause: "Opposition to the monarchy and British influence.", wiki: "Egyptian revolution of 1952" });
  L({ id: "libya1969", name: "Gaddafi's coup", place: "Tripoli, Libya", start: "1969-09-01", lat: 32.89, lon: 13.19, region: "Africa", level: "clash", cats: ["communist"],
      what: "Muammar Gaddafi overthrew King Idris and ruled under his own 'Islamic socialist' system until 2011.", cause: "Military coup.", wiki: "1969 Libyan revolution" });
  L({ id: "somalia1969", name: "Siad Barre's coup", place: "Mogadishu, Somalia", start: "1969-10-21", lat: 2.05, lon: 45.32, region: "Africa", level: "clash", cats: ["communist"],
      what: "General Siad Barre took power and declared 'scientific socialism'.", cause: "Military coup.", wiki: "1969 Somali coup d'état" });
  L({ id: "benin1972", name: "Kérékou's Marxist regime", place: "Porto-Novo / Cotonou, Benin", start: "1972-10", lat: 6.37, lon: 2.43, region: "Africa", level: "clash", cats: ["communist"],
      what: "Mathieu Kérékou seized power and declared Marxism-Leninism the official ideology in 1974.", cause: "Military coup.", wiki: "People's Republic of Benin" });
  L({ id: "mozambique1975", name: "FRELIMO takes power", place: "Maputo, Mozambique", start: "1975-06-25", lat: -25.97, lon: 32.57, region: "Africa", level: "violent", cats: ["communist"],
      what: "After a 10-year independence war, the Marxist FRELIMO ruled a one-party state; a civil war followed until 1992.", cause: "Independence from Portugal.", wiki: "People's Republic of Mozambique" });
  L({ id: "angola1975", name: "MPLA takes power", place: "Luanda, Angola", start: "1975-11-11", lat: -8.84, lon: 13.23, region: "Africa", level: "violent", cats: ["communist"],
      what: "The Marxist MPLA, backed by Cuban troops and the USSR, took Luanda at independence; civil war lasted until 2002.", cause: "Independence from Portugal.", wiki: "People's Republic of Angola" });
  L({ id: "madagascar1975", name: "Ratsiraka's socialist revolution", place: "Antananarivo, Madagascar", start: "1975-06", lat: -18.88, lon: 47.51, region: "Africa", level: "clash", cats: ["communist"],
      what: "Didier Ratsiraka took power and declared a Marxist 'Democratic Republic of Madagascar'.", cause: "Political crisis after a president's assassination.", wiki: "Democratic Republic of Madagascar" });
  L({ id: "seychelles1977", name: "Seychelles coup", place: "Victoria, Seychelles", start: "1977-06-05", lat: -4.62, lon: 55.45, region: "Africa", level: "clash", cats: ["communist"],
      what: "France-Albert René's socialist party seized power and made the islands a one-party state until 1993.", cause: "Coup against President James Mancham.", wiki: "1977 Seychelles coup d'état" });
  L({ id: "burkina1983", name: "Sankara's revolution", place: "Ouagadougou, Burkina Faso", start: "1983-08-04", lat: 12.37, lon: -1.52, region: "Africa", level: "clash", cats: ["communist"],
      what: "Thomas Sankara took power in a coup and led a Marxist revolutionary government until his assassination in 1987.", cause: "Military coup.", wiki: "Thomas Sankara" });
  // Asia
  L({ id: "mongolia1921", name: "Mongolian Revolution", place: "Ulaanbaatar, Mongolia", start: "1921-07", lat: 47.92, lon: 106.92, region: "Asia", level: "violent", cats: ["communist"],
      what: "Mongolian revolutionaries, backed by the Red Army, took power; Mongolia became the world's second Communist state in 1924.", cause: "Revolt against Chinese and White Russian forces.", wiki: "Mongolian Revolution of 1921" });
  L({ id: "vietnam1945", name: "August Revolution", place: "Hanoi, Vietnam", start: "1945-08", lat: 21.03, lon: 105.85, region: "Asia", level: "clash", cats: ["communist"],
      what: "Ho Chi Minh's Viet Minh took power and declared independence on September 2, 1945.", cause: "Japanese surrender; independence from France." });
  L({ id: "anpo1960", name: "Anpo protests", place: "Tokyo, Japan", start: "1960-05", end: "1960-06", lat: 35.68, lon: 139.75, region: "Asia", level: "clash", cats: [],
      what: "Massive left-led protests against the U.S.-Japan Security Treaty; a student died in clashes at the Diet and Prime Minister Kishi resigned.", cause: "U.S.-Japan Security Treaty.", wiki: "Anpo protests" });
  L({ id: "indonesia1965", name: "Indonesian mass killings of communists", place: "Java and Bali, Indonesia", start: "1965-10", end: "1966", lat: -7.6, lon: 110.2, region: "Asia", level: "violent", cats: ["communist"],
      what: "After a failed coup blamed on the Communist Party, the army and militias killed an estimated 500,000 to 1 million suspected leftists.", cause: "Anti-communist purge.", wiki: "Indonesian mass killings of 1965–66" });
  L({ id: "hk1967", name: "Hong Kong leftist riots", place: "Hong Kong", start: "1967-05", end: "1967-12", lat: 22.3, lon: 114.17, region: "Asia", level: "violent", cats: ["communist"],
      what: "Pro-Communist riots and a bombing campaign against British rule; 51 died.", cause: "Labor dispute amplified by the Cultural Revolution.", wiki: "1967 Hong Kong riots" });
  L({ id: "naxalbari", name: "Naxalbari uprising", place: "Naxalbari, West Bengal, India", start: "1967-05", lat: 26.68, lon: 88.22, region: "Asia", level: "violent", cats: ["communist"],
      what: "A Maoist peasant uprising that launched India's long-running Naxalite insurgency.", cause: "Land and tenant rights; Maoist ideology." });
  L({ id: "southyemen1967", name: "South Yemen becomes Marxist", place: "Aden, Yemen", start: "1967-11-30", lat: 12.79, lon: 45.02, region: "Asia", level: "violent", cats: ["communist"],
      what: "After British withdrawal, the National Liberation Front took power; South Yemen became the Arab world's only Marxist state.", cause: "Independence war against Britain.", wiki: "South Yemen" });
  L({ id: "jvp1971", name: "JVP insurrection", place: "Sri Lanka", start: "1971-04", lat: 7.29, lon: 80.63, region: "Asia", level: "violent", cats: ["communist"],
      what: "A Marxist youth uprising was crushed; thousands died.", cause: "Unemployment; revolutionary Marxism.", wiki: "1971 JVP insurrection" });
  L({ id: "nepal1996", name: "Nepalese Civil War (Maoist insurgency)", place: "Nepal", start: "1996-02", end: "2006-11", lat: 28.2, lon: 84.1, region: "Asia", level: "violent", cats: ["communist"],
      what: "Maoists fought the monarchy for a decade; about 17,000 died. The monarchy was abolished in 2008.", cause: "Maoist revolution against the monarchy.", wiki: "Nepalese Civil War" });
  // Latin America and the Caribbean
  L({ id: "mexico1910", name: "Mexican Revolution", place: "Mexico", start: "1910-11", end: "1920", lat: 19.43, lon: -99.13, region: "Latin America", level: "violent", cats: [],
      what: "Revolutionaries including Zapata and Villa overthrew the Díaz regime; land reform and a new constitution followed. About 1 million or more died.", cause: "Dictatorship and land inequality." });
  L({ id: "bolivia1952", name: "Bolivian National Revolution", place: "La Paz, Bolivia", start: "1952-04", lat: -16.5, lon: -68.15, region: "Latin America", level: "violent", cats: [],
      what: "Armed miners and workers brought the MNR to power; mines were nationalized and land redistributed.", cause: "Oligarchic rule and a disputed election.", wiki: "Bolivian National Revolution" });
  L({ id: "farc1964", name: "FARC insurgency begins", place: "Colombia", start: "1964", end: "2016", lat: 3.4, lon: -74.9, region: "Latin America", level: "violent", cats: ["communist"],
      what: "A Marxist guerrilla war lasting over 50 years, ending with a 2016 peace deal; about 220,000 died in the conflict.", cause: "Land conflict and communist insurgency.", wiki: "FARC" });
  L({ id: "grenada1979", name: "Grenada's New Jewel revolution", place: "St. George's, Grenada", start: "1979-03-13", end: "1983-10", lat: 12.05, lon: -61.75, region: "Latin America", level: "clash", cats: ["communist"],
      what: "Maurice Bishop's Marxist movement seized power; after an internal coup killed Bishop, the U.S. invaded in 1983.", cause: "Coup against Eric Gairy.", wiki: "People's Revolutionary Government (Grenada)" });
  L({ id: "sendero", name: "Shining Path insurgency", place: "Ayacucho, Peru", start: "1980-05", end: "1992", lat: -13.16, lon: -74.22, region: "Latin America", level: "violent", cats: ["communist"],
      what: "A Maoist insurgency; the conflict killed about 70,000 people before leader Abimael Guzmán's capture in 1992.", cause: "Maoist revolution.", wiki: "Shining Path" });
  L({ id: "zapatista", name: "Zapatista uprising", place: "Chiapas, Mexico", start: "1994-01-01", lat: 16.74, lon: -92.64, region: "Latin America", level: "violent", cats: [],
      what: "The left-wing EZLN seized towns in Chiapas on the day NAFTA took effect.", cause: "Indigenous rights and opposition to NAFTA.", wiki: "Zapatista uprising" });
  L({ id: "venezuela1992", name: "Chávez coup attempt", place: "Caracas, Venezuela", start: "1992-02-04", lat: 10.49, lon: -66.88, region: "Latin America", level: "violent", cats: [],
      what: "Hugo Chávez led a failed coup; he later won the 1998 election and launched his socialist 'Bolivarian Revolution'.", cause: "Austerity and corruption.", wiki: "1992 Venezuelan coup attempts" });
  L({ id: "argentina2001", name: "Argentine December 2001 riots", place: "Buenos Aires, Argentina", start: "2001-12", lat: -34.61, lon: -58.38, region: "Latin America", level: "violent", cats: [],
      what: "Riots and pot-banging protests during an economic collapse forced President De la Rúa out; 39 died.", cause: "Economic crisis and bank freeze.", wiki: "December 2001 riots in Argentina" });
  L({ id: "chile2019", name: "Chile's estallido social", place: "Santiago, Chile", start: "2019-10", end: "2020-03", lat: -33.45, lon: -70.66, region: "Latin America", level: "violent", cats: [],
      what: "A metro fare protest became mass unrest; metro stations burned and 30+ died. It led to two failed referendums on a new constitution.", cause: "Inequality and cost of living.", wiki: "2019–2022 Chilean protests" });
  // Oceania
  L({ id: "moratorium1970", name: "Vietnam Moratorium marches", place: "Melbourne, Australia", start: "1970-05-08", lat: -37.81, lon: 144.96, region: "Oceania", level: "peaceful", cats: [],
      what: "Australia's largest anti-war protests, led by unions and the left.", cause: "Vietnam War and conscription.", wiki: "Vietnam Moratorium Campaign" });
  L({ id: "springbok1981", name: "Springbok Tour protests", place: "Hamilton and Auckland, New Zealand", start: "1981-07", end: "1981-09", lat: -37.79, lon: 175.28, region: "Oceania", level: "clash", cats: [],
      what: "Protesters invaded the field in Hamilton to stop a South African rugby match; police and protesters clashed for weeks.", cause: "Opposition to apartheid.", wiki: "1981 South Africa rugby union tour of New Zealand" });
  // Europe and North America extras
  L({ id: "biennio", name: "Biennio Rosso (Two Red Years)", place: "Turin and northern Italy", start: "1919", end: "1920", lat: 45.07, lon: 7.69, region: "Europe", level: "clash", cats: ["socialism"],
      what: "Mass strikes and factory occupations; fear of revolution helped Mussolini's rise.", cause: "Post-war inflation and socialist movement.", wiki: "Biennio Rosso" });
  L({ id: "greekcw", name: "Greek Civil War", place: "Greece", start: "1946", end: "1949", lat: 39.6, lon: 21.4, region: "Europe", level: "violent", cats: ["communist"],
      what: "Communist-led forces fought the government; the government, backed by Britain and the U.S., won.", cause: "Post-war power struggle." });
  L({ id: "berlin1968", name: "West German student movement", place: "West Berlin", start: "1967-06-02", end: "1968-04", lat: 52.5, lon: 13.33, region: "Europe", level: "clash", cats: ["socialism"],
      what: "Police killed student Benno Ohnesorg at a protest; after leader Rudi Dutschke was shot in 1968, riots targeted the Springer press.", cause: "Vietnam War, authoritarianism, Springer press.", wiki: "German student movement" });
  L({ id: "daysofrage", name: "Days of Rage", place: "Chicago, Illinois", start: "1969-10", lat: 41.89, lon: -87.63, region: "United States", level: "violent", cats: ["socialism"],
      what: "The Weatherman faction smashed windows and fought police; about 280 arrested.", cause: "Vietnam War; revolutionary militancy.", wiki: "Days of Rage" });
  L({ id: "j20", name: "Inauguration Day riot (J20)", place: "Washington, D.C.", start: "2017-01-20", lat: 38.9, lon: -77.03, region: "United States", level: "violent", cats: [],
      what: "Black-bloc protesters smashed windows and burned a limousine; about 230 arrested (most charges later dropped).", cause: "Opposition to Trump's inauguration.", wiki: "Protests against Donald Trump" });
  L({ id: "g20hamburg", name: "G20 Hamburg riots", place: "Hamburg, Germany", start: "2017-07", lat: 53.55, lon: 9.99, region: "Europe", level: "violent", cats: [],
      what: "'Welcome to Hell' protests turned into riots; hundreds of police were injured and the Schanzenviertel was looted.", cause: "Anti-capitalist opposition to the G20 summit.", wiki: "Protests against the 2017 G20 Hamburg summit" });

  /* Crowd sizes: best documented estimate, with who made it where sources differ. Blank = no reliable count. */
  var CROWD = {
    boudica: "Tens of thousands of rebels (a Roman historian's figure of 230,000 is considered exaggerated)",
    peasants1381: "Tens of thousands marched on London",
    peasantswar: "Up to 300,000 rebels; about 100,000 killed",
    nika: "Large crowds in the Hippodrome; about 30,000 killed",
    bastille: "About 1,000 attackers",
    versailles: "6,000 to 7,000 women at the start, joined by thousands more",
    peterloo: "About 60,000",
    draftriots: "Thousands of rioters; at least 119 killed",
    rail1877: "About 100,000 strikers nationwide",
    haymarket: "About 1,500 to 3,000 at the rally",
    pullman: "About 250,000 workers",
    bloodysunday1905: "About 150,000 marchers",
    lawrence: "About 20,000 to 23,000 strikers",
    easter: "About 1,600 rebels",
    seattle1919: "About 65,000 workers",
    uk1926: "About 1.7 million workers",
    bonus: "About 43,000, including about 17,000 veterans",
    cable: "At least 100,000 counter-protesters (some estimates 300,000); about 3,000 fascists; 6,000 police",
    hungary1956: "About 200,000 in Budapest on October 23",
    montgomery: "About 40,000 Black bus riders boycotted",
    marchwash: "About 250,000",
    selma: "About 600 on 'Bloody Sunday'; about 25,000 at the final rally in Montgomery",
    mai68: "Hundreds of thousands in Paris; general strike of about 10 million workers",
    gdansk: "About 17,000 shipyard strikers; about 700,000 strikers nationwide",
    leipzig: "About 70,000 on October 9; over 300,000 by late October",
    velvet: "Up to 500,000 in Prague on November 25",
    polltax: "About 200,000",
    wto: "About 40,000",
    genoa: "About 200,000 to 300,000",
    iraq2003: "London: police 750,000, organizers 1 million+; worldwide 6 to 10 million",
    euromaidan: "Hundreds of thousands at the largest rallies",
    "15m": "Tens of thousands occupying squares",
    floyd: "15 to 26 million people took part (based on polls)",
    belarus2020: "100,000 to 200,000+ in Minsk on peak Sundays",
    jan6: "About 10,000 on the Capitol grounds; about 2,000 entered the building",
    giletsjaunes: "282,000 on the first day (Interior Ministry)",
    pensions2023: "1.28 million on March 7, 2023 (Interior Ministry); unions said 3.5 million",
    serbia: "March 15, 2025 in Belgrade: about 275,000 to 325,000 (independent count); police said 107,000",
    la2025: "Thousands",
    nokings2025a: "About 4 to 6 million (independent data journalists); organizers said 5 million+",
    nokings2025b: "About 7 million (organizers)",
    nokings2026a: "Organizers expected 9 million+",
    nokings2026b: "Millions (organizers); 2,550 events registered in the organizers' catalog",
    bloquons: "About 175,000 (Interior Ministry)",
    hague2025: "About 1,500",
    mpls2026: "Tens of thousands on January 10; about 50,000 on January 23 (organizers)",
    iceout: "About 50,000 in Minneapolis (organizers); 300+ locations",
    bushwick: "About 200",
    indy: "100+",
    antidsa: "About 300",
    cornell: "About 2,000",
    paris: "More than 550,000 nationwide on October 17 (Interior Ministry)",
    lisbon: "Tens of thousands",
    madrid: "Tens of thousands on October 3",
    "nk-slc": "2,000 to 3,000 (organizer)",
    "nk-eugene": "2,000 to 3,000 (organizers)",
    "nk-mpls": "Hundreds",
    columbia2024: "Hundreds at Columbia; 3,000+ arrests on U.S. campuses that spring",
    london2023: "About 300,000 at the largest march, November 11, 2023 (Metropolitan Police)",
    palaction2025: "532 arrested",
    dc2024: "Thousands",
    blmlondon: "Tens of thousands",
    blmparis: "About 20,000",
    dallas2016: "About 800 marchers",
    delaney: "Over 90 arrests over several weeks",
    milan: "About 50 detained",
    tirana: "16 arrested and 49 charged by October 14",
    marchrome: "About 25,000 to 30,000 Blackshirts",
    nazi1933: "Tens of thousands in the SA torchlight parade",
    bookburn: "About 40,000 at Berlin's Opernplatz",
    nuremberg: "Hundreds of thousands each year",
    china1949: "About 300,000 at the founding ceremony",
    cultural: "About 1 million Red Guards at the first Tiananmen rally, August 18, 1966",
    khmer1975: "About 2 million people forced out of Phnom Penh",
    tiananmen: "Up to about 1 million at the peak in mid-May",
    chemnitz: "About 6,000 far-right marchers and 3,000 counter-protesters (police, August 27)",
    oct1917: "About 10,000 to 20,000 Red Guards, sailors and soldiers",
    prague1948: "Mass Communist rallies of tens of thousands; armed People's Militias",
    anpo1960: "Hundreds of thousands at the largest rallies",
    moratorium1970: "About 100,000 in Melbourne",
    chile2019: "About 1.2 million in Santiago on October 25, 2019",
    g20hamburg: "Tens of thousands of protesters; about 20,000 police",
    daysofrage: "A few hundred",
    j20: "About 230 arrested",
    argentina2001: "Hundreds of thousands nationwide; 39 killed"
  };
  E.forEach(function (e) { e.crowd = CROWD[e.id] || ""; });

  /* Category tags for filters */
  var CATS = { left: "Left-wing (all)", communist: "Communist and socialist takeovers", fascist: "Fascist, Nazi and far-right", ice: "Anti-ICE", blm: "Black Lives Matter", palestine: "Pro-Palestinian", nokings: "No Kings", costofliving: "Cost of living", socialism: "Socialism-related" };
  var TAG = {
    ice: "la2025 broadview2025 mpls2026 iceout bushwick delaney indy bronx salem",
    blm: "ferguson baltimore floyd",
    palestine: "nyc-oct7",
    nokings: "nokings2025a nokings2025b nokings2026a nokings2026b nk-slc nk-eugene nk-mpls",
    costofliving: "paris brussels lisbon madrid limoges lyon marseille lille nantes bordeaux toulouse nice strasbourg milan bologna liege giletsjaunes bloquons pensions2023 15m",
    socialism: "cornell antidsa nyc-oct7 commune spartacist kronstadt",
    communist: "commune spartacist kronstadt eg1953 hungary1956 prague1968 gdansk leipzig velvet romania1989",
    fascist: "beerhall feb1934 cable kristallnacht warsawghetto charlottesville"
  };
  // Every communist and socialism entry is also left-wing, plus classic left protests
  TAG.left = "commune spartacist kronstadt mai68 occupy wto genoa 15m giletsjaunes bloquons pensions2023 haymarket seattle1919 uk1926 gdansk lawrence pullman rail1877 cornell nyc-oct7 iraq2003";
  Object.keys(TAG).forEach(function (c) {
    TAG[c].split(" ").forEach(function (id) { var e = E.find(function (x) { return x.id === id; }); if (e) { e.cats = e.cats || []; if (e.cats.indexOf(c) < 0) e.cats.push(c); } });
  });
  E.forEach(function (e) { e.cats = e.cats || []; if ((e.cats.indexOf("communist") >= 0 || e.cats.indexOf("socialism") >= 0) && e.cats.indexOf("left") < 0) e.cats.push("left"); });
  E.forEach(function (e) { e.cats = e.cats || []; e.catLabels = e.cats.map(function (c) { return CATS[c]; }); });

  /* ---------- helpers ---------- */
  function parts(s) { var p = String(s).split("-"); return { y: +p[0], m: p[1] ? +p[1] : null, d: p[2] ? +p[2] : null }; }
  var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function fmt(s) { var p = parts(s); return (p.m ? MON[p.m - 1] + " " + (p.d ? p.d + ", " : "") : "") + p.y; }
  E.forEach(function (e) {
    var a = parts(e.start), b = parts(e.end || e.start);
    e.y0 = a.y; e.y1 = b.y;
    e.sortKey = a.y * 10000 + (a.m || 0) * 100 + (a.d || 0);
    var A = fmt(e.start), B = e.end ? fmt(e.end) : null;
    if (B && a.y === b.y && a.m && b.m) {
      // same year: "Oct 13 – 19, 2026" or "Sep 26 – Oct, 2026"
      B = ((b.m !== a.m || !a.d ? MON[b.m - 1] + " " : "") + (b.d || "")).trim();
      A = A.replace(", " + a.y, "").replace(" " + a.y, "");
      e.dateLabel = A + " – " + B + (b.d ? ", " : " ") + a.y;
    } else {
      e.dateLabel = B ? A + " – " + B : A;
    }
    e.era = a.y < 1900 ? "pre1900" : a.y < 2000 ? "1900s" : a.y < 2025 ? "2000s" : "now";
  });
  /* X (Twitter) video searches for events since 2007, when X existed. These are searches, not specific posts. */
  var XTERMS = { nokings2025a: '"No Kings"', nokings2025b: '"No Kings"', nokings2026a: '"No Kings"', nokings2026b: '"No Kings"',
    iceout: '"ICE Out"', iranwar: 'Iran (protest OR antiwar)', occupy: '"Occupy Wall Street"', jan6: 'Capitol', giletsjaunes: '"gilets jaunes"',
    bloquons: '"bloquons tout"', floyd: '"George Floyd" protest', euromaidan: 'Maidan', "15m": '"15M" OR indignados', nokings: '"No Kings"',
    tirana: 'Tirana', cornell: 'Cornell YDSA', antidsa: 'DSA rally', "nyc-oct7": 'DSA "City Hall"', bronx: '"Marble Hill" ICE', bushwick: 'Bushwick ICE',
    delaney: '"Delaney Hall"', mpls2026: 'Minneapolis ICE', salem: 'Salem ICE', indy: 'Indianapolis ICE', la2025: '"Los Angeles" ICE',
    broadview2025: 'Broadview ICE', hague2025: '"Den Haag" OR "The Hague" rellen', paris: 'Paris (manifestation OR émeutes OR riots)',
    limoges: 'Limoges', lyon: 'Lyon', marseille: 'Marseille', lille: 'Lille', milan: 'Milano', bologna: 'Bologna', brussels: 'Bruxelles OR Brussels',
    dallas2016: 'Dallas police', batonrouge2016: '"Baton Rouge" protest', charlotte2016: 'Charlotte protest', atlanta2020: 'Atlanta Wendy\'s', chaz: 'CHAZ OR CHOP Seattle',
    portland2020: 'Portland protest', kenosha: 'Kenosha', louisville2020: 'Louisville "Breonna Taylor"', blmlondon: 'Colston OR "Black Lives Matter" London', blmparis: '"Adama Traoré"',
    newark2025: 'Baraka "Delaney Hall"', nyc2025: '"26 Federal Plaza"', portland2025: 'Portland ICE', portland2026: 'Portland CBP shooting',
    london2023: 'London Palestine march', columbia2024: 'Columbia encampment', ucla2024: 'UCLA encampment', dc2024: 'Netanyahu Congress protest',
    amsterdam2024: 'Amsterdam Maccabi', palaction2025: '"Palestine Action" arrests', vuelta2025: 'Vuelta Madrid protest', italy2025: 'sciopero Gaza', "nyc-arms2026": 'NYC protest arms Israel',
    liege: 'Liège', madrid: 'Madrid vivienda', lisbon: 'Lisboa CGTP', nantes: 'Nantes', bordeaux: 'Bordeaux', toulouse: 'Toulouse', nice: 'Nice manifestation', strasbourg: 'Strasbourg' };
  function isoDay(p, endOfRange) {
    var y = p.y, m = p.m || (endOfRange ? 12 : 1), d = p.d || (endOfRange ? 28 : 1);
    var dt = new Date(Date.UTC(y, m - 1, d));
    dt.setUTCDate(dt.getUTCDate() + (endOfRange ? 3 : -1));
    return dt.toISOString().slice(0, 10);
  }
  E.forEach(function (e) {
    var a = parts(e.start);
    if (a.y < 2007) return;
    var b = parts(e.end || e.start);
    var term = XTERMS[e.id] || e.place.split(",")[0];
    if (!XTERMS[e.id]) term = '"' + term + '" (protest OR riot OR clashes)';
    var q = term + " filter:videos since:" + isoDay(a, false) + " until:" + isoDay(b, true);
    e.links.push(["X (Twitter)", "Videos posted at the time", "https://x.com/search?q=" + encodeURIComponent(q) + "&f=live", 1, "x"]);
  });

  E.sort(function (a, b) { return a.sortKey - b.sortKey; });
  E.CATS = CATS;
  return E;
})();
