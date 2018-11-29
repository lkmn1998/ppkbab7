var dataObject = [{"nim":"125060400111044", "nama": "Isyana Sarasvati", 
 "jurusan": "Teknik Informatika","fakultas":"Filkom","alamat": "Jl. SukaNyanyi","noHP": "081234567890"}
,{"nim":"135060401111005", "nama": "Marion Jola",
  "jurusan":"komunikasi","fakultas": "FISIP","alamat": "Kec. Wakanda","noHP":"08765432109"},
  {"nim":"165150200111008", "nama": "Imam HarisAfandi",
  "jurusan":"Teknik Informatika","fakultas": "Filkom","alamat": "DesaPatemon Dusun Duklengkong","noHP":"085234470597"},
    {"nim":"165150200111009", "nama": "Peter Parkir",
  "jurusan":"Teknik Informatika","fakultas": "Filkom","alamat": "Jl. Naik Turun","noHP":"085234567890"},
    {"nim":"165150200111010", "nama": "Mariano Perez",
  "jurusan":"Teknik Informatika","fakultas": "Filkom","alamat": "Madrid Spanyol","noHP":"066234470597"},
    {"nim":"165150200111011", "nama": "AlamSule",
  "jurusan":"Teknik Informatika","fakultas": "Filkom","alamat": "Jl. Soekarno Hatta","noHP":"085744320597"},
    {"nim":"165150200111012", "nama": "IsnantoSarapan",
  "jurusan":"Teknik Informatika","fakultas": "Filkom","alamat": "DesaButemon Dusun lengko","noHP":"085705970597"},
    {"nim":"165150200111013", "nama": "MarimarSuhendra",
  "jurusan":"Teknik Informatika","fakultas": "Filkom","alamat": "Jl. terustidak pulang","noHP":"085998810597"},
    {"nim":"165150200111014", "nama": "Felix Santoso",
  "jurusan":"Teknik Informatika","fakultas": "Filkom","alamat": "Jl. Menuju Surga","noHP":"08134256901"},
    {"nim":"165150200111015", "nama": "Insan Mulia",
  "jurusan":"Teknik Informatika","fakultas": "Filkom","alamat": "Jl. Mt Haryono","noHP":"081434470597"},];

var Application = {
	initApplication : function() {
		$(window).load('pageinit', '#page-one', function() {
			Application.initShowMhs();
		})
		$(document).on('click', '#detail-mhs', function() {
			var nim = $(this).data('nimmhs');
			Application.initShowDetailMhs(nim);
		})
	},

	initShowMhs : function() {
		$.ajax({
			url : 'https://api.myjson.com/bins/18tt0u',
			type : 'get',
			beforeSend : function() {
				$.mobile.loading('show', {
					text : 'Please wait while retrieving data...',
					textVisible : true
				});
			},
			success : function(dataObject) {
				for(var i = 0; i<dataObject.length; i++){	
					var appendList = '<li><a href="#page-two?id='+
					dataObject[i].NIM+'" target="_self" id="detail-mhs" data-nimmhs="'+
					dataObject[i].NIM+'"><h2>'+dataObject[i].Nama+'</h2><p>'+dataObject[i].NIM+
	'</p><p><b>'+dataObject[i].Fakultas+'</b></p></a></li>';
	$('#list-mhs').append(appendList);
				}
$('#list-mhs').listview('refresh');
			},
			complete : function() {
				$.mobile.loading('hide');
			}
		});
	},
	initShowDetailMhs : function(nim) {
$.ajax({
	url : 'https://api.myjson.com/bins/18tt0u',
			type : 'get',
			beforeSend : function() {
$.mobile.loading('show', {
	text : 'Please wait while retrieving data...',
				textVisible : true
				});
			},
			success : function(dataObject) {
				$('#p-nim,#p-nama,#p-jurusan,#p-fakultas,#p-alamat,#p-nohp').empty();
for(var i = 0; i<dataObject.length; i++){
	if(dataObject[i].NIM == nim){
$('#p-nim').append('<b>NIM: </b>'+dataObject[i].NIM);
$('#p-nama').append('<b>Nama: </b>'+dataObject[i].Nama);
$('#p-jurusan').append('<b>Jurusan: </b>'+dataObject[i].Jurusan);
$('#p-fakultas').append('<b>Fakultas: </b>'+dataObject[i].Fakultas);
$('#p-alamat').append('<b>Alamat: </b>'+dataObject[i].Alamat);
$('#p-nohp').append('<b>NoHp: </b>'+dataObject[i].NoHp);
}}},
			complete : function() {
				$.mobile.loading('hide');
			}
		});   
	}
};
