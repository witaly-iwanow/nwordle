const NUM_LETTERS = 3;
const NUM_GUESSES = 8;

// from Oxford 5000
const wordList = [
'all','off','jam','dam','her','hey','son','nor','pan','low','aid','arm','bad','day','cow','gel',
'dig','wow','sum','per','sky','ice','gas','gay','two','cop','god','mum','not','ago','him','lot',
'web','man','how','dub','any','lab','yet','old','fur','top','due','tea','can','duo','pay','yes',
'pub','van','eye','its','tax','pot','bat','cap','oil','new','app','vow','say','let','put','and',
'map','ink','sue','cup','bet','ego','tie','bay','row','tip','sad','fit','toy','our','rob','dry',
'toe','net','now','you','kit','way','via','boy','six','box','aim','ash','shy','war','fry','sun',
'egg','try','bus','lip','pad','hot','ban','bid','bed','dot','flu','pig','win','wet','kid','cat',
'gut','gym','lay','hit','too','for','lap','few','add','sin','lad','ear','era','ray','mix','fun',
'cut','bug','sea','out','dad','fix','top','net','see','opt','mad','lie','key','art','rub','owe',
'use','mob','set','sir','hip','bin','rat','own','gig','dog','pet','gap','fit','ask','sit','pin',
'car','run','say','cry','his','fly','bow','mud','log','get','rip','she','fee','ski','spy','bit',
'ten','fan','the','jet','pit','tin','bee','nut','ill','big','arm','fat','gun','may','pop','act',
'leg','law','job','but','eat','one','bag','cue','bye','pop','red','ton','wit','why','guy','rid',
'beg','odd','who','tap','nod','tag','far','rod','dip','air','hat','age','joy','buy','end','raw',
'die','pen','bar','jog','did'];
// from American English dictionary bundled with Ubuntu
const guessList = [
'ace','act','add','ado','ads','adz','aft','age','ago','aha','aid','ail','aim','air','alb','ale',
'all','amp','and','ani','ant','any','ape','apt','arc','are','ark','arm','art','ash','ask','asp',
'ass','ate','auk','awe','awl','axe','aye','baa','bad','bag','bah','ban','bar','bat','bay','bed',
'bee','beg','bet','bib','bid','big','bin','bit','boa','bob','bog','boo','bop','bow','box','boy',
'bra','brr','bud','bug','bum','bun','bur','bus','but','buy','bye','cab','cad','cam','can','cap',
'car','cat','caw','chi','cob','cod','cog','con','coo','cop','cot','cow','cox','coy','cry','cub',
'cud','cue','cup','cur','cut','dab','dad','dam','day','deb','den','dew','did','die','dig','dim',
'din','dip','dis','doc','doe','dog','don','dos','dot','dry','dub','dud','due','dug','duh','dun',
'duo','dye','ear','eat','ebb','eel','egg','ego','eke','elf','elk','ell','elm','emo','ems','emu',
'end','eon','era','ere','erg','err','eta','eve','ewe','eye','fad','fag','fan','far','fat','fax',
'fed','fee','fen','fer','few','fey','fez','fib','fie','fig','fin','fir','fit','fix','flu','fly',
'fob','foe','fog','fop','for','fox','fro','fry','fun','fur','gab','gad','gag','gal','gap','gas',
'gay','gee','gel','gem','get','gig','gin','gnu','gob','god','goo','got','gum','gun','gut','guy',
'gym','gyp','had','hag','hah','ham','has','hat','haw','hay','hem','hen','hep','her','hes','hew',
'hex','hey','hid','hie','him','hip','his','hit','hob','hod','hoe','hog','hop','hos','hot','how',
'hub','hue','hug','huh','hum','hut','ice','icy','ids','ifs','ilk','ill','imp','ink','inn','ins',
'ion','ire','irk','ism','its','ivy','jab','jag','jam','jar','jaw','jay','jet','jib','jig','job',
'jog','jot','joy','jug','jut','keg','ken','key','kid','kin','kit','lab','lad','lag','lam','lap',
'law','lax','lay','lea','led','lee','leg','lei','let','lib','lid','lie','lip','lit','lob','log',
'lop','lot','low','lox','lug','lye','mad','man','map','mar','mas','mat','maw','may','meg','meh',
'men','mes','met','mew','mid','mil','mix','mob','mod','mom','moo','mop','mow','mud','mug','mum',
'nab','nag','nap','nay','net','new','nib','nil','nip','nit','nix','nod','non','nor','not','now',
'nth','nub','nun','nut','oaf','oak','oar','oat','odd','ode','off','oft','ohm','oho','ohs','oil',
'old','one','opt','orb','orc','ore','our','out','ova','owe','owl','own','pad','pal','pan','pap',
'par','pas','pat','paw','pay','pea','pee','peg','pen','pep','per','pet','pew','pie','pig','pin',
'pip','pis','pit','ply','pod','poi','pol','pop','pot','pox','pro','pry','pub','pug','pun','pup',
'pus','put','pwn','pyx','qua','rag','ram','ran','rap','rat','raw','ray','red','ref','rep','rev',
'rho','rib','rid','rig','rim','rip','rob','rod','roe','rot','row','rub','rue','rug','rum','run',
'rut','rye','sac','sad','sag','sap','sat','saw','sax','say','sea','see','set','sew','sex','she',
'shy','sic','sim','sin','sip','sir','sis','sit','six','ski','sky','sly','sob','sod','sol','son',
'sop','sos','sot','sow','sox','soy','spa','spy','sty','sub','sue','sum','sun','sup','tab','tad',
'tag','tam','tan','tap','tar','tat','tax','tea','tee','ten','the','tho','thy','tic','tie','tin',
'tip','tit','toe','tog','tom','ton','too','top','tor','tot','tow','toy','try','tub','tug','tun',
'tux','two','ugh','ump','ups','urn','use','van','vat','vet','vex','via','vie','vim','vow','wad',
'wag','wan','war','was','wax','way','web','wed','wee','wen','wet','who','why','wig','win','wit',
'wiz','woe','wok','won','woo','wot','wow','wry','yak','yam','yap','yaw','yea','yen','yep','yes',
'yet','yew','yip','yon','you','yuk','yum','yup','zap','zed','zip','zit','zoo'];