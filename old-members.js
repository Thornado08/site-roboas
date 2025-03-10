const membersData = [
	{
		name: "Daria Marica",
		class: 2022,
		classIndex: "A",
		birth: new Date(2003, 7, 8, 0, 0) * 1,
		descriptionImage: "static/insta/daria.jpg",
		thumbnailImage: "static/profile/daria.webp",
		passions: "Dansatul, filmele și serialele &#127871;",
		roles: [1, 3, 4],
		description: "Hello! Sunt Daria Marica și fac parte din minunata familie RoboAs. Am parcurs toate departamentele echipei, începând cu design și marketing, și terminând cu asamblare și programare. Îmi place mult să lucrez în echipă, să văd cum trecem peste obstacole și într-un final ne bucurăm de rezultatul obținut. În timpul liber ador să mă joc cu cățelușa mea Roua.",
		insta: "dariamarica"
	},
	{
		name: "Miruna Lungu (Mîsh)",
		class: 2022,
		classIndex: "A",
		birth: new Date(2003, 9, 27, 0, 0) * 1,
		descriptionImage: "static/insta/mish.jpg",
		thumbnailImage: "static/profile/mish.webp",
		passions: "Desenatul, pictatul, cititul, gătitul, cântatul la chitară &#127812;",
		roles: [2, 4],
		description: "Bună! Sunt Miruna sau ciuperca sau creața sau whatever și mă ocup cu design-ul în cadrul echipei RoboAs. Ador să desenez/pictez, să citesc și să gătesc, iar din când în când cânt și la chitară (doar din când în când) :)) Îmi plac pisicile și rock-ul și ador verdele și negrul și iubesc să îmi fac amintiri cu prietenii și colegii.",
		insta: "miru.msh"
	},
	{
		name: "Dominic Satnoianu (Domi)",
		class: 2023,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "static/insta/domi.jpg",
		thumbnailImage: "static/profile/domi.webp",
		passions: "Scrima, programarea, pisicile &#128008;",
		roles: [0, 4],
		description: "Hello! Eu-s Domi, iar în cadrul echipei de robotică mă ocup cu programarea. Iubesc pisicile, motiv pentru care o să mângâi orice mâță pe care o văd pe stradă!! În timpul liber îmi place să practic sporturi, precum scrima sau baschetul.",
		insta: "domi.py"
	},
	{
		name: "Robert Brîndea",
		class: 2023,
		classIndex: "B",
		birth: new Date(2004, 7, 20, 0, 0) * 1,
		descriptionImage: "static/insta/robert.jpg",
		thumbnailImage: "static/profile/robert.webp",
		passions: "Cititul, scrisul, muzica, lumânări &#128367;",
		roles: [0, 2],
		description: "Bună! Sunt Robert și ăsta e primul meu an în echipa RoboAs, în cadrul căreia mă ocup cu designul și cu programarea. Pe lângă asta, în timpul liber citesc cam orice tip de cărți, mai ales ficțiune, scriu și ascult muzică. Îmi place să mă plimb prin natură și să colecționez chestii care miros frumos &ndash; gen lumânări parfumate și bețișoare parfumate.",
		insta: "robert.sqoop"
	},
	{
		name: "Andrei Borcoman (Borco)",
		class: 2023,
		classIndex: "A",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "static/insta/borco.jpg",
		thumbnailImage: "static/profile/borco.webp",
		passions: "Sportul, Pepsi fără zahăr &#127936;",
		roles: [1, 3],
		description: "Neatza! Știi omul ăla care face mereu echipa să râdă chiar și în cele mai nasoale momente? Nu, nu sunt eu! Eu sunt Borco! Glumesc, glumesc! Îmi place să cred că pot să readuc echipa la viață oricât de moartă ar fi. Mă ocup cu proiectarea în cadrul echipei RoboAs. În ultima vreme am început să fiu foarte interesat de sport și de stilul de viață sănătos.",
		insta: "_borco_"
	},
	{
		name: "Teodor Neagoe (Teon)",
		class: 2023,
		classIndex: "A",
		birth: new Date(2004, 5, 8, 0, 0) * 1,
		descriptionImage: "static/insta/teon.jpg",
		thumbnailImage: "static/profile/teon.webp",
		passions: "Calisthenics, programarea, electronica, aeromodelismul, biciclismul, cățăratul &#128690;",
		roles: [0, 1, 3],
		description: "Salut! Sunt Teodor Neagoe (aka Teon) și mă ocup  cu proiectarea 3D în cadrul echipei RoboAs. Îmi place cam tot ce e legat de tehnologie: de la programat, proiectat, editat la construit circuite electrice și aeromodelism. Ca sporturi, ador biciclismul, cățăratul, alergatul, schiatul și înotul. Îmi place speed-cubingul și muzica rock!",
		insta: "teo.climber"
	},
	{
		name: "Angel Huminic",
		class: 2022,
		classIndex: "A",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "static/profile/angel.webp",
		thumbnailImage: "static/profile/angel.webp",
		passions: "",
		roles: [1, 3],
		description: "Vorba vine",
		insta: "angel_huminic"
	},
	{
		name: "Dennis Bart",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "static/insta/dennis.jpg",
		thumbnailImage: "static/profile/dennis.webp",
		passions: "Jocurile de fantezie, schiatul &#9975;",
		roles: [1, 3, 4],
		description: "Salut. Sunt Dennis și mă bucur mult să fiu în echipa RoboAs de un an. Îmi plac filmele, jocurile de fantezie și cărțile de ficțiune. De asemenea, îmi place adrenalina și să schiez. Cam atât despre mine :))",
		insta: "dennis__bart"
	},
	{
		name: "Test test (TES T)",
		class: 2023,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Test test (TES T)",
		class: 2023,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Test test (TES T)",
		class: 2023,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Test test (TES T)",
		class: 2023,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Test test (TES T)",
		class: 2023,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Test test (TES T)",
		class: 2023,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Test test (TES T)",
		class: 2023,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	}
].sort((a, b) => {
	if(a.class != b.class) return b.class - a.class;
	return a.name.localeCompare(b.name);
});