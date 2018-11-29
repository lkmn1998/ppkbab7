var Application = {
	initApplication : function() {
		$(window).load("pageinit", "#page-one", function() {
			Application.initShowMhs();
		})
		$(document).on("click", "#detail-mhs", function() {
			var nim = $(this).data("nimmhs");
			Application.initShowDetailMhs(nim);
		})
	},

	initShowMhs : function() {
		$.ajax({
			url : 'https://api.myjson.com/bins/168tvm',
			type: 'get',
			beforeSend : function() {
				$.mobile.loading('show', {
					text : 'Please wait while retrieving data...',
					textVisible : true
				});
			},
			success : function(dataObject) {
				for (i in dataObject) {
					var appendList = '<li><a href="#page-two?id='+dataObject[i].NIM+
					'" target="_self" id="detail-mhs" data-nimmhs="'+dataObject[i].NIM+
					'"><h2>'+dataObject[i].Nama+'</h2><p>'+dataObject[i].NIM+'</p><p><b>'+
					dataObject[i].Fakultas+'</b></p></a></li>';
					$('#list-mhs').append(appendList);
					$('#list-mhs').listview('refresh');
				}
			},
			complete : function() {
				$.mobile.loading('hide');
			}
		});
	},

	initShowDetailMhs : function(nim) {
		$.ajax({
			url : 'http://192.168.1.68/servisppk/web_service.php',
			type: 'get',
			beforeSend : function() {
				$.mobile.loading('show', {
					text : 'Please wait while retrieving data...',
					textVisible : true
				});
			},
			success : function(dataObject) {
				console.log(dataObject.length);
				for (i in dataObject) {
					if (dataObject[i].NIM == nim) {
						$('#p-nim, #p-nama,#p-jurusan,#p-fakultas,#p-alamat,#p-nohp').empty();
						$('#p-nim').append('<b>NIM: </b>'+dataObject[i].NIM);
						$('#p-nama').append('<b>Nama: </b>'+dataObject[i].Nama);
						$('#p-jurusan').append('<b>Jurusan: </b>'+dataObject[i].Jurusan);
						$('#p-fakultas').append('<b>Fakultas: </b>'+dataObject[i].Fakultas);
						$('#p-alamat').append('<b>Alamat: </b>'+dataObject[i].Alamat);
						$('#p-nohp').append('<b>NoHp: </b>'+dataObject[i].NoHP);
					}
				}
			},
			complete : function() {
				$.mobile.loading('hide');
			}
		});
	}
}
