import { Category, CategoryId, Player } from '../models/models'

export const CATEGORIES = [
  {
    id: CategoryId.REBOUNDERS_ID,
    name: 'Rebounders',
    description:
      "Some of the game's greatest rebounders all had different characteristics in their game that made them great rebounders. For example, when it comes to fundamentals, Tim Duncan is the master of boxing out.  And guys like Moses Malone and Dennis Rodman were great offensive rebounders.",
  } as Category,
  {
    id: CategoryId.SIXTIES_ID,
    name: '60s',
    description:
      'The NBA in the 1960s was rougher, tougher, smaller and less visible than just about every decade that followed. But it may have been the best basketball decade of them all. The Boston Celtics dominated. Wilt Chamberlain scored 100 points in a game. Jerry West modeled the NBA logo, the league expanded and television audiences took notice. The brutish big man was the prized commodity in an era characterized by physicality. Chamberlain and Bill Russell won nine of the 11 MVP awards between 1958 and 1968.  While condensed in size and geographical scope, the league possessed some of the greatest players to ever set foot on the court. ',
  } as Category,
  {
    id: CategoryId.FLOOR_GENERALS_ID,
    name: 'Floor Generals',
    description:
      "The point guard position has always been arguably the most important position in the NBA since he is the player who touches the ball first on every possession. This means that the point guard is the extension of the coach on the floor, and is responsible for making the correct plays on a nightly basis.  It is no wonder why some of the league’s greatest players have been point guards, with exceptional skill sets beyond simply passing the basketball. Especially in the modern era, the point guard is no longer required to just run the plays, and must actually lead the team's offense every night by scoring a ton of points!",
  } as Category,
  {
    id: CategoryId.ROLE_PLAYERS_ID,
    name: 'Championship role players',
    description:
      'No matter how good a player is, they cannot win an NBA championship by themselves. To win it all, a team must have a solid supporting cast of role players.  Role players are essential for a team’s success, often making the difference between a title and a first-round exit from the playoffs.',
  } as Category,
  {
    id: CategoryId.CRAZY_ID,
    name: 'Bizarre and Crazy',
    description:
      'No matter what era, the NBA attracts a wide array of characters. Some guys make it to the league because of their relentless work ethic and singular passion for the game. They approach their craft with the care and precision of someone whose very life hinges upon their ability to competently do their job without making any waves or creating any distractions or controversy.  These are not those guys.',
  } as Category,
]

export const PLAYERS = [
  {
    id: 1,
    firstName: 'Dennis',
    lastName: 'Rodman',
    imageUrl:
      'https://www.giantbomb.com/a/uploads/scale_small/46/462814/3187393-3145451348-5ea88.png',
    oneLiner:
      'One of the greatest rebounders ever to play professional basketball',
    careerBio:
      "He earned NBA All-Defensive First Team honors seven times and won the NBA Defensive Player of the Year Award twice. He also led the NBA in rebounds per game for a record seven consecutive years and won five NBA championships. On April 1, 2011, the Pistons retired Rodman's No. 10 jersey,[3] and he was inducted into the Naismith Memorial Basketball Hall of Fame later that year.[4] In October 2021, Rodman was honored as one of the league’s greatest players of all-time by being named to the NBA 75th Anniversary Team.[5]",
    categories: [CategoryId.REBOUNDERS_ID, CategoryId.CRAZY_ID],
  } as Player,
  {
    id: 2,
    firstName: 'Moses',
    lastName: 'Malone',
    imageUrl:
      'https://www.nasljerseys.com/images/ABA/Spirits/Spirits%2075-76%20Head%20Moses%20Malone%208.jpg',
    oneLiner: 'The first player to go straight from high school into the pros',
    careerBio:
      'Malone was a tireless and physical player who led the NBA in rebounding six times, including a then-record five straight seasons (1981–1985). Nicknamed the "Chairman of the Boards" for his rebounding prowess,[3] he finished his career as the all-time leader in offensive rebounds after leading both the ABA and NBA in the category a combined nine times. Combining his ABA and NBA statistics, Malone ranks ninth all-time in career points (29,580) and third in total rebounds (17,834). He was named to the ABA All-Time Team along with the NBA\'s 50th and 75th anniversary teams.',
    categories: [CategoryId.REBOUNDERS_ID],
  } as Player,
  {
    id: 3,
    firstName: 'Charles',
    lastName: 'Barkley',
    imageUrl:
      'https://biographymask.com/wp-content/uploads/2021/03/Charles-Barkley-Former-Professional-Basketball-Player-1200x1200.jpg',
    oneLiner: 'The Round Mound of Rebound',
    careerBio:
      'An All-American power forward at Auburn University, Barkley was drafted as a junior by the Philadelphia 76ers with the fifth pick of the 1984 NBA draft. In his rookie season, Barkley was named to the NBA All-Rookie First Team in 1985. In the 1986–87 season, Barkley led the league with the highest rebounding average and earned his first NBA rebounding title. He was named the NBA All-Star Game MVP in 1991, and in 1993 with the Phoenix Suns, he was voted the league\'s MVP. He competed in the 1992 and 1996 Olympic Games, winning two gold medals as a member of the U.S. national team. In 2000, he retired as the fourth player in NBA history to achieve 20,000 points, 10,000 rebounds, and 4,000 assists.[4] Since his retirement, Tim Duncan, Kevin Garnett, and LeBron James have joined the 20K/10K/4K Club.[5] Barkley is a two-time inductee into the Naismith Memorial Basketball Hall of Fame, being inducted in 2006 for his individual career, and in 2010 as a member of the "Dream Team".[6][7]',
    categories: [CategoryId.REBOUNDERS_ID, CategoryId.CRAZY_ID],
  } as Player,
  {
    id: 4,
    firstName: 'Bob',
    lastName: 'Cousy',
    oneLiner: '"The Houdini of the Hardwood",',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/c5/Bob_Cousy_%281%29.jpeg',
    careerBio:
      'Making his high school varsity squad as a junior, Cousy went on to earn a scholarship to the College of the Holy Cross, where he led the Crusaders to berths in the 1948 NCAA Tournament and 1950 NCAA Tournament, while winning NCAA All-American honors for three seasons. Cousy entered the 1950 NBA draft and was initially drafted by the Tri-Cities Blackhawks as the third overall pick in the first round, but after he refused to report he was picked up by Boston.  Upon his election to the Naismith Memorial Basketball Hall of Fame in 1971 the Celtics retired his No. 14 jersey and hung it in the rafters of the Garden.[2] Cousy was named to the NBA 25th Anniversary Team in 1971, the NBA 35th Anniversary Team in 1981, and the NBA\'s 50th Anniversary All-Time Team in 1996, making him one of only four players that were selected to each of those teams. He was also the first president of National Basketball Players Association.  Cousy was well-known, both on and off the court, for his public stance against racism, a result of his upbringing in a multicultural environment. In 1950, the Celtics played a game in the then-segregated city of Charlotte, North Carolina, and teammate Chuck Cooper—the first African-American in NBA history to be drafted—would have been denied a hotel room. Instead of taking the hotel room, Cousy insisted on travelling with Cooper on an uncomfortable overnight train. He described their visit to a segregated men\'s toilet—Cooper was prohibited from using the clean "for whites" bathroom and had to use the shabby "for colored" facility—as one of the most shameful experiences of his life.[53] He also sympathized with the plight of black Celtics star Bill Russell, who was frequently a victim of racism.[54]',
    categories: [CategoryId.SIXTIES_ID, CategoryId.FLOOR_GENERALS_ID],
  } as Player,
  {
    id: 5,
    firstName: 'Bob',
    lastName: 'Pettit',
    oneLiner: 'A 4-time NBA All-Star Game MVP',
    imageUrl:
      'https://fadeawayworld.net/.image/t_share/MTgwMTMyNjM5NDA5MzgyNzQ0/bob-pettit.jpg',
    careerBio:
      "an American former professional basketball player. He played 11 seasons in the NBA, all with the Milwaukee/St. Louis Hawks (1954–1965). In 1956, he became the first recipient of the NBA's Most Valuable Player Award and he won the award again in 1959. He also won the NBA All-Star Game MVP award four times.  The first NBA player to score more than 20,000 points, Pettit was inducted into the Naismith Memorial Basketball Hall of Fame in 1970. He was honored as one the league all-time players by being named to the NBA 25th Anniversary Team,[3] the NBA 35th Anniversary Team,[4] the 50 Greatest Players in NBA History,[5] and the NBA 75th Anniversary Team.[6] He is widely regarded as one of the greatest power forwards of all time.[7][8]",
    categories: [CategoryId.SIXTIES_ID],
  } as Player,
  {
    id: 6,
    firstName: 'Jerry',
    lastName: 'West',
    oneLiner: 'The NBA logo',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jerry_West_1972.jpeg/170px-Jerry_West_1972.jpeg',
    careerBio:
      'Playing the guard position, he was voted 12 times into the All-NBA First and Second Teams, was elected into the NBA All-Star Team 14  times, and was chosen as the All-Star MVP in 1972, the same year that he won the only title of his career. West holds the NBA record for the highest points per game average in a playoff series with 46.3. He was also a member of the first five NBA All-Defensive Teams (one second, followed by four firsts), which were introduced when he was 32 years old. Having played in nine NBA Finals, he is also the only player in NBA history to be named Finals MVP despite being on the losing team (1969). In 1980, West was inducted into the Naismith Basketball Hall of Fame and named to the NBA 35th Anniversary Team.[5] West was named as one of the 50 Greatest Players in NBA history in 1996, and to the NBA 75th Anniversary Team in 2021.[6][7  After his playing career ended, West took over as head coach of the Lakers for three years. He led Los Angeles into the playoffs each year and earned a Western Conference Finals berth once. Working as a player-scout for three years, West was named general manager of the Lakers before the 1982–83 NBA season. Under his reign, Los Angeles won six championship rings. In 2002, West became general manager of the Memphis Grizzlies and helped the franchise win their first-ever playoff berths. For his contributions, West won the NBA Executive of the Year Award twice, once as a Lakers manager (1995) and then as a Grizzlies manager (2004).',
    categories: [CategoryId.SIXTIES_ID],
  } as Player,
  {
    id: 7,
    firstName: 'John',
    lastName: 'Stockton',
    oneLiner: 'All-time assists and steals leader',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/John_Stockton_Lipofskydotcom-32245.jpg/180px-John_Stockton_Lipofskydotcom-32245.jpg',
    careerBio:
      "Regarded as one of the greatest point guards and passers of all time, he spent his entire NBA career (1984–2003) as a point guard for the Utah Jazz, and the team made the playoffs in each of his 19 seasons. In 1997 and 1998, together with his longtime teammate Karl Malone, Stockton led the Jazz to the franchise's only two NBA Finals appearances, both of which were lost to the Chicago Bulls.  Stockton was a ten-time NBA All-Star and holds the NBA records for most career assists and steals by wide margins.[1][2][3] He was inducted into the Naismith Memorial Basketball Hall of Fame inductee in 2009 for his individual career, and again in 2010 as a member of the 1992 United States Olympic basketball team.[4] In 1996, he was named one of the 50 greatest players in NBA history.[5]",
    categories: [CategoryId.FLOOR_GENERALS_ID],
  } as Player,
  {
    id: 8,
    firstName: 'Kevin',
    lastName: 'Johnson',
    oneLiner: 'Former mayor of Sacramento',
    careerBio:
      'an American former professional basketball player and Democratic Party politician who served as the 55th Mayor of Sacramento, California from 2008 to 2016. He is the husband of educator Michelle Rhee. Elected in 2008 and re-elected in 2012, Johnson is the first African American to serve as Mayor of Sacramento.[1] Before entering politics, Johnson was a professional basketball player in the National Basketball Association (NBA). After a stint with the Cleveland Cavaliers during a portion of his rookie year, the point guard played as a member of the Phoenix Suns for the remainder of his NBA career.  During his 12-year playing career, Johnson was a three-time NBA All-Star as well as four-time second team All-NBA selection and held numerous records for the Phoenix Suns organization.[2] At the University of California, Berkeley, Johnson was named a two-time All-Pac-10 Conference player and an honorable-mention All-American by the Associated Press.[3][4]',
    imageUrl:
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/2-kevin-johnson-rocky-widner.jpg',
    categories: [CategoryId.FLOOR_GENERALS_ID],
  } as Player,
  {
    id: 9,
    firstName: 'Robert',
    lastName: 'Horry',
    oneLiner: 'Won 7 championships',
    careerBio:
      'Robert Keith Horry (/ˈɒri/; born August 25, 1970) is an American former professional basketball player and current sports commentator. He played 16 seasons in the National Basketball Association (NBA), winning seven championships, the most of any player not to have played for the Boston Celtics. He is one of only four players to have won NBA championships with three teams; he won two with the Houston Rockets, three with the Los Angeles Lakers and two with the San Antonio Spurs with no defeats in NBA Finals. He earned the nickname "Big Shot Bob",[a] because of his clutch shooting in important games; he is widely considered to be one of the greatest clutch performers and winners in NBA history.[2][3][4] Horry now works as a commentator on Spectrum SportsNet for the Lakers.',
    imageUrl:
      'https://images2.minutemediacdn.com/image/upload/c_crop,w_1648,h_927,x_0,y_95/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/29/01fq4kkfy0az8y6w8rav.jpg',
    categories: [CategoryId.ROLE_PLAYERS_ID],
  } as Player,
  {
    id: 10,
    firstName: 'James',
    lastName: 'Posey',
    oneLiner: 'NBA champion in 2006 and 2008',
    careerBio:
      'James Mikely Mantell Posey Jr. (born January 13, 1977) is an American former professional basketball player. He played the small forward position for the Denver Nuggets, the Miami Heat, the Boston Celtics, the New Orleans Hornets, and the Indiana Pacers in the National Basketball Association (NBA). Posey won NBA championships as a member of the 2006 Miami Heat and the 2008 Boston Celtics. He is also a former assistant coach for the Cleveland Cavaliers of the NBA.',
    imageUrl:
      'https://static.wikia.nocookie.net/nba/images/3/36/James_Posey.jpg/revision/latest/scale-to-width-down/1200?cb=20101130234518',
    categories: [CategoryId.ROLE_PLAYERS_ID],
  } as Player,
  {
    id: 15,
    firstName: 'Steve',
    lastName: 'Kerr',
    oneLiner: "Made the game winning shot in the '97 Finals",
    careerBio:
      "Stephen Douglas Kerr (born September 27, 1965) is an American professional basketball coach and former player who is the head coach of the Golden State Warriors of the National Basketball Association (NBA). He is an eight-time NBA champion, having won five titles as a player (three with the Chicago Bulls and two with the San Antonio Spurs) as well as three with the Warriors as a head coach. Kerr is the only NBA player to win four straight NBA titles after 1969. Kerr has the highest career three-point field goal percentage (45.4%) in NBA history for any player with at least 250 three-pointers made. He also held the NBA record for the highest three-point percentage in a season at 52.4% until the record was broken by Kyle Korver in 2010..  In 2004, Kerr became a minority owner of the Phoenix Suns, part of the group led by Robert Sarver that purchased the team in 2004. In June 2007, the Phoenix Suns named Kerr the team's president of basketball operations and general manager and was one of the majority owner, Sarver's trusted basketball advisors. Kerr announced he was leaving the position in June 2010, but retained his minority share until 2014. Afterward, Kerr returned as a color commentator for NBA on TNT until 2014, when he pursued a career in coaching.  In May 2014, Kerr received his first head coaching job with the Golden State Warriors. Under his leadership, the franchise entered the most successful period in its history, reaching five consecutive NBA Finals and winning three championships in 2015, 2017, and 2018. The 2015–16 Warriors won an unprecedented 73 games, breaking the record for the most wins in an NBA season, previously held by Kerr's 1995–96 Chicago Bulls.",
    imageUrl:
      'https://cdn.theathletic.com/app/uploads/2017/11/25213340/GettyImages-167431814-e1511663642724.jpg',
    categories: [CategoryId.ROLE_PLAYERS_ID],
  } as Player,
  {
    id: 11,
    firstName: 'Bison',
    lastName: 'Dele',
    oneLiner: 'Tragically lost at sea',
    careerBio:
      "Bison Dele (/ˈbaɪsən ˈdɛli/ BYE-sən DEL-ee; born Brian Carson Williams; April 6, 1969 – July 7, 2002) was an American professional basketball player who played center for the NBA's Orlando Magic, Denver Nuggets, Los Angeles Clippers, Chicago Bulls and Detroit Pistons. Dele won a championship with the Bulls in 1997. He is believed to have been murdered at sea by his older brother Miles Dabord in 2002.[1] His girlfriend, Serena Karlan, and skipper Bertrand Saldo are also presumed to have been killed by Dabord.",
    imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/183.png',
    categories: [CategoryId.CRAZY_ID],
  } as Player,
  {
    id: 12,
    firstName: 'Gilbert',
    lastName: 'Arenas',
    careerBio:
      'Gilbert Jay Arenas Jr. (/əˈriːnəz/; born January 6, 1982) is an American former professional basketball player. Arenas attended Grant High School in the Valley Glen district of Los Angeles, and accepted a scholarship offer to the University of Arizona late in his junior year. He was drafted by the Golden State Warriors with the 31st overall pick in the 2001 NBA draft.  Arenas is a three-time NBA All-Star, three-time member of the All-NBA Team, and was voted the NBA Most Improved Player in the 2002–03 season. Arenas was nicknamed "Agent Zero", due to his former jersey number and his late-game shot-making ability.[1] Both names quickly became fan favorites during his time in the Washington, D.C. area. He has also been nicknamed "Gibby."[2]  Arenas was suspended for most of the 2009–10 NBA season because of handgun violations stemming from an episode on December 24, 2009, and for subsequent actions that appeared to make light of this episode.',
    imageUrl:
      'https://phantom-marca.unidadeditorial.es/e4286c9ab9096433b58d87da1ce4fae4/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/07/16415111831199.jpg',
    categories: [CategoryId.CRAZY_ID],
  } as Player,
  {
    id: 14,
    firstName: 'Metta World',
    lastName: 'Peace',
    oneLiner: 'AKA Panda Friend',
    careerBio:
      "Metta Sandiford-Artest[1] (born Ronald William Artest Jr.; November 13, 1979) is an American former professional basketball player. He was known as Ron Artest before legally changing his name to Metta World Peace in 2011 and later to Metta Sandiford-Artest in 2020.Sandiford-Artest played college basketball for the St. John's Red Storm. He played for six teams in the NBA and gained a reputation as one of the league's premier defenders. He won the NBA Defensive Player of the Year Award in 2004, when he was also named an NBA All-Star and earned All-NBA honors. He won an NBA championship in 2010 as a member of the Los Angeles Lakers.  Sandiford-Artest was a participant in several controversial on-court incidents, most notably the Malice at the Palace, and is known for his sometimes eccentric and outspoken behavior. During the 2017–18 season, Sandiford-Artest was a player development coach for the South Bay Lakers of the NBA G League.",
    imageUrl:
      'https://media.gq.com/photos/581cd412a36741ab138323c3/1:1/w_3456,h_3456,c_limit/metta-world-peace.jpg',
    categories: [CategoryId.CRAZY_ID],
  } as Player,
]
