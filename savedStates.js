var StateArchive = {};
StateArchive.baseState = "<SBURB curRoom='baseRoom' char='karkat'><Asset name='cgSheet' type='graphic'>resources/CGsheetBig.png</Asset><Asset name='compLabBG' type='graphic'>resources/comlab-background.gif</Asset><Asset name='dialogBox' type='graphic'>resources/dialogBoxBig.png</Asset><Asset name='karkatBGM' type='audio'>resources/karkat.ogg;resources/karkat.mp3</Asset><Asset name='tereziBGM' type='audio'>resources/terezi.ogg;resources/terezi.mp3</Asset><Asset name='compLabWalkable' type='path'>70,270;800,270;800,820;70,820</Asset><Room name='baseRoom' width='861' height='909' walkable='compLabWalkable' bgm='karkatBGM' bgStart='undefined' bgPriority='0'><Character name='karkat' x='300' y='501' sx='-36' sy='-87' sWidth='66' sHeight='96' width='45' height='21' sheet='cgSheet' state='walkFront' facing='Front'><Action sprite='null' name='swap' command='changeChar'>karkat</Action></Character><Character name='karclone' x='201' y='399' sx='-36' sy='-87' sWidth='66' sHeight='96' width='45' height='21' sheet='cgSheet' state='walkFront' facing='Front'><Action sprite='null' name='talk' command='talk'>@CGAngry Lorem ipsum\
\
dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\
\
in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
\
mollit anim id\
\
est \
\
laborum. @CGAngry hehehe @CGAngry whaaaat</Action><Action sprite='null' name='change room' command='changeRoom'>cloneRoom,300,300</Action><Action sprite='null' name='swap' command='changeChar'>karclone</Action><Action sprite='null' name='T3R3Z1 TH3M3 4LL D4Y' command='playSong'>tereziBGM, 1.9, 2<Action sprite='null' name='talk' command='talk'>@! Nice choice!</Action></Action></Character><Sprite name='compLabBG' x='0' y='0' sx='0' sy='0' dx='0' dy='0' width='861' height='909' depthing='0' collidable='false' state='image'><Animation name='image' sheet='compLabBG' rowSize='909' colSize='861' startPos='0' length='1' frameInterval='1' /></Sprite></Room><Room name='cloneRoom' width='861' height='909' walkable='compLabWalkable' bgm='tereziBGM' bgStart='undefined' bgPriority='1'><Character name='karclone2' x='501' y='399' sx='-36' sy='-87' sWidth='66' sHeight='96' width='45' height='21' sheet='cgSheet' state='walkFront' facing='Front'><Action sprite='null' name='talk' command='talk'>@! blahblahblah</Action><Action sprite='null' name='change room' command='changeRoom'>baseRoom,300,300</Action><Action sprite='null' name='swap' command='changeChar'>karclone2</Action></Character><Sprite name='compLabBG' x='0' y='0' sx='0' sy='0' dx='0' dy='0' width='861' height='909' depthing='0' collidable='false' state='image'><Animation name='image' sheet='compLabBG' rowSize='909' colSize='861' startPos='0' length='1' frameInterval='1' /></Sprite></Room></SBURB>";