
var songrun=false;
var count=1;
var mod=1;
var path=["songs\\1ban ja rani.mp3"
,"songs\\1Banduk meri laila.mp3"
,"songs\\1ik vari aa.mp3"
,"songs\\1Lala Bheemla.mp3"
,"songs\\1phir bhi.mp3"
,"songs\\2Arabic-kuthu.mp3"
,"songs\\2Gundellonaa.mp3"
,"songs\\2Kalaavathi.mp3"
,"songs\\2main tera.mp3"
,"songs\\2Yegire Mabbulona.mp3"
,"songs\\3Choododdhe Nannu.mp3"
,"songs\\3haareya.mp3"
,"songs\\3musafir.mp3"
,"songs\\3Nammaka Thappani.mp3"
,"songs\\3o sathi.mp3"
,"songs\\4barish.mp3"
,"songs\\4Maate Vinadhuga.mp3"
,"songs\\4mercy.mp3"
,"songs\\4Samajavaragamana.mp3"
,"songs\\4Srivalli.mp3"];

var sname=["ban ja rani",
"Banduk meri laila",
"ik vari aa",
"lala bheemla",
"phir bhi",
"arabic kuthu",
"gundellona",
"kalavathi",
"main tera",
"yegire mabbulona",
"choododdhe nannu",
"haareya",
"musafir",
"nammaka thappani",
"o sathi",
"barish",
"maate vinadhuga",
"mercy",
"Samajavaragamana",
"Srivalli"];

var sd=["Artist: Guru Randhawa<br>Movie: Tumhari Sulu<br>Released: 2017",
"Artists: Ash King, Jigar Saraiya<br>Featured artists: Sidharth Malhotra, Raftaar<br>Movie: A Gentleman<br>Released: 2017",
"Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017",
"Artist:Thaman S<br>Movie:Bheemla Nayak<br>Released:2021",
"Artists: Arijit Singh, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Written: 2001 (lyrics)<br>Lyricist(s): Manoj Muntashir<br>Composer(s): Mithoon",
"Artist:Anirudh ravichander,Jonita Gandhi<br>Movie:Beast<br>released:2022",
"Artist:Leon James<br>Movie:Ori devuda<br>Released:2022",
"Artist:Sid Sriram<br>movie:Sarkaru vari pata<br>Released:2022",
"Artists: Arijit Singh, Neha Kakkar, Meet Bros<br>Movie: Raabta<br>Released: 2017<br>Composer(s): : Sohrabbudin (Original); Sourav Roy (Revamped).<br>Genre: Dance music",
"Artist:Yuvanshankar raja<br>Movie:Happy<br>Released:2006",
"Artist:Devi sri prasad<br>Movie:Aaru<br>Realesed:2005",
"Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Producer - Programming & Arranging",
"Artist: KK<br>Movie: Shab<br>Released: 2017",
"Artist:Devi sri Prasad<br>Movie:Bommarillu<br>Released:2006",
"Artist: Arijit Singh<br>Movie: Shab<br>Released: 2017",
"Artists: Ash King, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Awards: Zee Cine Award for Song of the Year",
"Artist:Jakes Bejoy<br>Movie:Taxiwaala<br>Released:2018",
"Artist: Badshah<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Engineer - Recording and Mixing",
"Artist:Thaman s<br>Movie:Ala vaikuntapuramlo<br>Released:2019",
"Artist:Devi Sri Prasad<br>Movie:Pushpa<br>Released:2021"];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\1.jpg",
"images\\\\2.jpg",
"images\\\\3.jpg",
"images\\\\4.jfif",
"images\\\\5.jpg",
"images\\\\6.jpg",
"images\\\\7.jfif",
"images\\\\8.jfif",
"images\\\\9.jpg",
"images\\\\10.jpg",
"images\\\\11.jpg",
"images\\\\12.jpg",
"images\\\\13.jpg",
"images\\\\14.jpg",
"images\\\\15.jpg",
"images\\\\16.jpg",
"images\\\\17.jpg",
"images\\\\18.jpg",
"images\\\\19.jpg",
"images\\\\20.jpg"];

var mood=[["1","2","3","4","5"],["6","7","8","9","10"],["11","12","13","14","15"],["16","17","18","19","20"]];
var mmm=["1.png","1.png","1.png","1.png","1.png","2.png","2.png","2.png","2.png","2.png","3.png","3.png","3.png","3.png","3.png","4.png","4.png","4.png","4.png","4.png"];

var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	//ins.onclick=function(){
	//next(this);
  	//};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
                else
                	moody(3);
            }