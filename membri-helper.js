const membersData = [
	{
		name: "Ioana Popa",
		class: 2023,
		classIndex: "A",
		birth: new Date(2004, 7, 20, 0, 0) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "",
		roles: [],
		description: "",
		insta: ""
	},
	{
		name: "George Cărpinișan",
		class: 2023,
		classIndex: "B",
		birth: new Date(2004, 3, 17, 0, 0) * 1,
		descriptionImage: "static/profile/george.webp",
		thumbnailImage: "static/profile/george.webp",
		passions: "Dansul sportiv, programare, chitara electrică &#127928;",
		roles: [1, 2, 3],
		description: "Salut! Sunt George, iar în echipa de robotică ajut la proiectarea și asamblarea robotului. De asemenea, după ore lungi de chin, am învățat cum se utilizează și calibrează imprimantele noastre 3D. În timpul liber fac dans sportiv și cânt la chitara electrică.",
		insta: "_george17"
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
		description: "Bună! Sunt Robert și ăsta e al treilea meu an în echipa RoboAs, în cadrul căreia mă ocup cu designul și cu programarea. Pe lângă asta, în timpul liber citesc cam orice tip de cărți, mai ales ficțiune, scriu și ascult muzică. Îmi place să mă plimb prin natură și să colecționez chestii care miros frumos &ndash; gen lumânări parfumate și bețișoare parfumate.",
		insta: "robert.sqoop"
	},
	{
		name: "Andrei Borcoman (Borco)",
		class: 2023,
		classIndex: "A",
		birth: new Date(2004, 7, 20, 0, 0) * 1,
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
		passions: "Calisthenics, programarea, electronica, aeromodelismul, cățăratul, uitat chestii &#128690;",
		roles: [1, 3],
		description: "'Neața! Sunt Teodor Neagoe (aka Teon) și mă ocup cu lucratul în Solidedge și asamblarea în cadrul echipei RoboAS. Îmi place cam tot ce e legat de tehnologie: de la programat, proiectat, editat la construit de circuite electrice și aeromodelism. Bine, ce-i drept aeromodelismul cică ar trebui sa-l pun la categoria de sporturi, dar pentru acolo aș lăsa calisthenics, sala, biciclitul, cățăratul, alergatul, schiatul, inotul... Îmi place speed-cubingul și muzica rock.",
		insta: "teo.climber"
	},
	{
		name: "Dennis Bart",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 6, 25, 0, 0) * 1,
		descriptionImage: "static/profile/dennis.webp",
		thumbnailImage: "static/profile/dennis.webp",
		passions: "CS, Formula 1 &#127950;",
		roles: [0, 2, 3],
		description: "Salut. Sunt Dennis și sunt veteran în a tolera aerul închis. Îmi plac mult adrenalina, Formula 1, și să schiez. Cam atât despre mine :))",
		insta: "dennis__bart"
	},
	{
		name: "Ionuț",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 0, 0) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "",
		roles: [],
		description: "",
		insta: ""
	},
	{
		name: "Flavia Trifu",
		class: 2024,
		classIndex: "A",
		birth: new Date(2005, 0, 27, 0, 0) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "",
		roles: [],
		description: "",
		insta: ""
	},
	{
		name: "Rareș Garalbatin",
		class: 2024,
		classIndex: "A",
		birth: new Date(2005, 0, 27, 0, 0) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "",
		roles: [],
		description: "",
		insta: ""
	},
	{
		name: "Ana Răduș",
		class: 2026,
		classIndex: "A",
		birth: new Date(2007, 2, 14, 0, 0) * 1,
		descriptionImage: "static/profile/anaradus.webp",
		thumbnailImage: "static/profile/anaradus.webp",
		passions: "Robotica, programarea, fotografiatul și drumețiile &#129517;",
		roles: [0, 3],
		description: "Hey! Sunt Ana și acesta este primul meu an în echipă. Îmi place robotica și în general îmi place sa învăț limbaje noi de programare, așa că o sa ajut unde pot, având cunoștințele necesare. Călătoritul și fotografiatul sunt două din activitățile mele preferate, așa că sunt plecată majoritatea timpului pe una din cărările de prin pădurea de lângă casa :)",
		insta: "youngspider575"
	},
	{
		name: "Mircea Bodean",
		class: 2026,
		classIndex: "B",
		birth: new Date(2007, 5, 5, 0, 0) * 1,
		descriptionImage: "static/profile/mirceab.webp",
		thumbnailImage: "static/profile/mirceab.webp",
		passions: "Muzica bună și cititul &#128214;",
		roles: [1, 3],
		description: "Salut! Eu sunt Mircea, iar fiind un membru nou al RoboAs-ului, nu pot spune decât că de-abia aștept să mi găsesc rolul în echipă și să ajut cât mai mult. Îmi place să învăț despre ceea ce mă pasionează, de la muzică până la robotică, iar în timpul liber mai zdrăngăn la chitară. See y'all around!",
		insta: "bodean_mircea.s"
	},
	{
		name: "Darius Chițu",
		class: 2025,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 0, 0) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Alexia Muncaciu",
		class: 2025,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 0, 0) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Anastasia Muncaciu",
		class: 2025,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 0, 0) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Rareș George Buteică",
		class: 2025,
		classIndex: "B",
		birth: new Date(2006, 10, 3, 0, 0) * 1,
		descriptionImage: "static/profile/raresb.webp",
		thumbnailImage: "static/profile/raresb.webp",
		passions: "Muzica &#127925;",
		roles: [0, 1, 3],
		description: "cout &lt;&lt; \"Nu știu ce să scriu aici\";",
		insta: "rares.buteica"
	},
	{
		name: "Alexandra Șerban",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 0, 0) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Daria Pampu-Romanescu",
		class: 2025,
		classIndex: "E",
		birth: new Date(2006, 8, 19, 0, 0) * 1,
		descriptionImage: "static/profile/dariapr.webp",
		thumbnailImage: "static/profile/dariapr.webp",
		passions: "Cititul, sportul și actoria &#127917;",
		roles: [3],
		description: "Bună! Sunt super pasionată de actorie, urmată îndeaproape de robotică și sport. Sunt și fecioară, deci pot fi o persoană placută (atunci când vreau). Eu, în echipa de robotică, sunt pe partea de asamblare, care mi se pare foarte interesantă. Îmi plac mult și câinii :)).",
		insta: "dariampr"
	},
	{
		name: "Vlad Ștefan Deaconu",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 0, 0) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "David Iustin Brățucu",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 0, 0) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Maria Vasilescu",
		class: 2026,
		classIndex: "B",
		birth: new Date(2007, 1, 18, 0, 0) * 1,
		descriptionImage: "static/profile/mariav.webp",
		thumbnailImage: "static/profile/mariav.webp",
		passions: "Ceatul, cititul, desenatul &#127912;",
		roles: [2],
		description: "Bună! Eu sunt Maria. Printre lucrurile care îmi plac mult se numără Seria de Cerneală și Seria GrishaVerse.",
		insta: "doamna._.vasi"
	},
	{
		name: "Vlad Cobeniuc",
		class: 2025,
		classIndex: "B",
		birth: new Date(2007, 1, 6, 0, 0) * 1,
		descriptionImage: "static/profile/vladcob.webp",
		thumbnailImage: "static/profile/vladcob.webp",
		passions: "Editatul, crearea de designuri și cântatul &#127908;",
		roles: [1, 2, 4],
		description: "Salut! Eu sunt Vlad și acesta este primul meu an în echipa de robotică. Mi-ar plăcea mult să încerc și să contribui în fiecare etapă de creație a robotului: de la proiectare la programare și asamablare.",
		insta: "_adra.melech_"
	},
].sort((a, b) => {
	if(a.class != b.class) return b.class - a.class;
	return a.name.localeCompare(b.name);
});