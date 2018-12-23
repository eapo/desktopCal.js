/**
 * i18n functions and global variables
 */

// current language and country
var lang, country;

// countries for holiday selection list
var countries = {
	br: { name: 'Brasil' },
	es: { name: 'España' },
	fr: { name: 'France' },
	pt: { name: 'Portugal' },
	uk: { name: 'United Kingdom' },
	us: { name: 'United States' }
}

// translations of messages
var msg = {
	en: {
		langName:   'English',
		defCountry: 'us',
		monthNames: [ 'Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
		weekDays:   [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
		year:       'Year',
		day:        'Day',
		design:     'Design your calendar',
		language:   'Language',
		layout:     'Layout',
		desktopCal: 'Desktop calendar',
		wallSingle: 'Wall calendar',
		digitalBg:  'Digital wallpaper',
		screenRes:  'Screen resolution',
		chgOrient:  'Change orientation',
		calSize:    'Style / Size',
		small:      'Small',
		medium:     'Medium',
		large:      'Large',
		column:     'Column',
		row:        'Row',
		horAlign:   'Horizontal pos',
		verAlign:   'Vertical pos',
		left:       'Left',
		horCenter:  'Center',
		right:      'Right',
		top:        'Top',
		verCenter:  'Center',
		bottom:     'Bottom',
		width:      'Width',
		height:     'Height',
		pixels:     'pixels',
		loadImage:  'Load Image',
		holidays:   'National holidays',
		customHolidays: 'Custom holidays',
		none:       'None',
		add:        'Add',
		delete:     'Delete',
		imgNotice:  'Images are NOT uploaded anywhere out your computer.<br>All processing takes place in your browser.',
		printIt:    'Print It!',
		print:      'Print',
		tipBgImg:   'Configure your printer to print <strong>background images;</strong>',
		tipMargins: 'Set the minimum margins allowed;',
		tipHeaders: 'Turn off all headers and footers.',
		downloadIt: 'Download your wallpaper',
		download:   'Download',
		fileFormat: 'File format',
		preview:    'Preview',
		fold:       'fold on the dashed lines',
	},

	es: {
		langName:   'Español',
		defCountry: 'us',
		monthNames: [ 'Mes', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubure', 'Noviembre', 'Diciembre' ],
		weekDays:   [ 'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb' ],
		year:       'Año',
		day:        'Día',
		design:     'Diseña tu calendario',
		language:   'Idioma',
		layout:     'Layout',
		desktopCal: 'Calendario de escritorio',
		wallSingle: 'Calendario de pared',
		digitalBg:  'Fondo de pantalla',
		screenRes:  'Resolución de la pantalla',
		chgOrient:  'Cambiar orientación',
		calSize:    'Estilo / Tamaño',
		small:      'Pequeño',
		medium:     'Mediano',
		large:      'Grande',
		column:     'Columna',
		row:        'Fila',
		horAlign:   'Pos. horizontal',
		verAlign:   'Pos. vertical',
		left:       'Izquierda',
		horCenter:  'Centrado',
		right:      'Derecha',
		top:        'Superior',
		verCenter:  'Centrado',
		bottom:     'Inferior',
		width:      'Anchura',
		height:     'Altura',
		pixels:     'píxeles',
		loadImage:  'Cargar Imagen',
		holidays:   'Feriados nacionales',
		customHolidays: 'Feriados personalizados',
		none:       'Ninguno',
		add:        'Añadir',
		delete:     'Borrar',
		imgNotice:  'Las imágenes NO se envían fuera de su computadora.<br>Todo el procesamiento se lleva a cabo en su navegador.',
		printIt:    '¡Imprímelo!',
		print:      'Imprimir',
		tipBgImg:   'Configure su impresora para imprimir <strong>imágenes de fondo;</strong>',
		tipMargins: 'Ajuste los márgenes para los valores más bajos permitidos;',
		tipHeaders: 'Desactive todos los encabezados y pies de página.',
		downloadIt: 'Descarga tu fondo de pantalla',
		download:   'Descargar',
		fileFormat: 'Formato',
		preview:    'Vista previa',
		fold:       'doblar en las líneas punteadas',
	},

	fr: {
		langName:   'Français',
		defCountry: 'fr',
		monthNames: [ 'Mois', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
		weekDays:   [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ],
		year:       'Année',
		day:        'Jour',
		design:     'Concevez votre calendrier',
		language:   'Langue',
		layout:     'Layout',
		desktopCal: 'Calendrier de bureau',
		wallSingle: 'Calendrier mural',
		digitalBg:  'Fond d\'écran',
		screenRes:  'Résolution d\'écran',
		chgOrient:  'Changer d\'orientation',
		calSize:    'Style / Taille',
		small:      'Petit',
		medium:     'Moyen',
		large:      'Grand',
		column:     'Colonne',
		row:        'Rangée',
		horAlign:   'Pos. horizontale',
		verAlign:   'Pos. verticale',
		left:       'Gauche',
		horCenter:  'Centré',
		right:      'Droit',
		top:        'Haut',
		verCenter:  'Centré',
		bottom:     'Bas',
		width:      'Largeur',
		height:     'Hauteur',
		pixels:     'pixels',
		loadImage:  'Charger Image',
		holidays:   'Fêtes nationales',
		customHolidays: 'Jours fériés personnalisées',
		none:       'Aucun',
		add:        'Ajouter',
		delete:     'Effacer',
		imgNotice:  'Les images NE sont PAS envoyées sur votre ordinateur.<br>Tous les traitements ont lieu dans votre navigateur.',
		printIt:    'Imprime le!',
		print:      'Imprimer',
		tipBgImg:   'Configurez votre imprimante pour imprimer des <strong>images d’arrière-plan;</strong>',
		tipMargins: 'Ajuster les marges aux valeurs les plus basses autorisées;',
		tipHeaders: 'Désactiver tous les en-têtes et pieds de page.',
		downloadIt: 'Téléchargez votre fond d\'écran',
		download:   'Télécharger',
		fileFormat: 'Format',
		preview:    'Aperçu',
		fold:       'plier sur les lignes pointillées',
	},

	pt: {
		langName:   'Português',
		defCountry: 'br',
		monthNames: [ 'Mês', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
		weekDays:   [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ],
		year:       'Ano',
		day:        'Dia',
		design:     'Crie seu calendário',
		language:   'Idioma',
		layout:     'Layout',
		desktopCal: 'Calendário de mesa',
		wallSingle: 'Calendário de parede',
		digitalBg:  'Papel de parede digital',
		screenRes:  'Resolução da tela',
		chgOrient:  'Mudar orientação',
		calSize:    'Estilo / Tamanho',
		small:      'Pequeno',
		medium:     'Médio',
		large:      'Grande',
		column:     'Coluna',
		row:        'Linha',
		horAlign:   'Pos. horizontal',
		verAlign:   'Pos. vertical',
		left:       'Esquerda',
		horCenter:  'Centro',
		right:      'Direita',
		top:        'Superior',
		verCenter:  'Centro',
		bottom:     'Inferior',
		width:      'Largura',
		height:     'Altura',
		pixels:     'pixels',
		loadImage:  'Carregar Imagem',
		holidays:   'Feriados nacionais',
		customHolidays: 'Feriados personalizados',
		none:       'Nenhum',
		add:        'Adicionar',
		delete:     'Excluir',
		imgNotice:  'As imagens NÃO são enviadas para fora de seu computador.<br>Todo o processamento ocorre no seu navegador.',
		printIt:    'Imprima',
		print:      'Imprimir',
		tipBgImg:   'Configure sua impressora para imprimir <strong>imagens de fundo;</strong>',
		tipMargins: 'Ajuste as margens para os menores valores permitidos;',
		tipHeaders: 'Desative todos os cabeçalhos e rodapés.',
		downloadIt: 'Baixe sua tela de fundo',
		download:   'Baixar',
		fileFormat: 'Formato',
		preview:    'Pré-visualização',
		fold:       'dobre nas linhas tracejadas',
	}
}


function langOptions() {

	var html = '',
		keys = Object.keys( msg );

	for ( var i = 0; i < keys.length; i++ )
		html += `<li><a href="javascript:changeLang('${ keys[ i ] }');" title="${ msg[ keys[ i ] ].langName }"><img src="img/icons8-${ keys[ i ] }-flag.png"></a></li>`;

	return html;
}

function monthOptions() {

	var html = '';

	for ( var i = 0; i < 13; i++ )
		html += `<option value="${ i }">${ msg[ lang ].monthNames[ i ] }</option>`;

	return html;
}

function countryOptions() {

	var html = `<option value="">${msg[lang].none}</option>`,
		keys = Object.keys( countries );

	for ( var i = 0; i < keys.length; i++ )
		html += `<option value="${ keys[ i ] }" ${ keys[ i ] == country ? 'selected' : '' }>${ countries[ keys[ i ] ].name }</option>`;

	return html;
}

function changeCountry( newCountry ) {

	country = newCountry;
	updatePreview();
}

function changeLang( newLang ) {

	if ( ! Object.keys( msg ).includes( newLang ) ) // invalid language?
		return false;

	lang = newLang;

	// save values from input and select elements, so we can restore them after changing the language

	var elems = document.querySelectorAll('input[type="text"], input[type="radio"], select');
	var values = [];

	for ( var i = 0; i < elems.length; i++ ) {
		if ( elems[ i ].localName == 'select' )
			values[ i ] = elems[ i ].selectedIndex;
		else if ( elems[ i ].attributes.type.nodeValue == 'radio' )
			values[ i ] = elems[ i ].checked;
		else
			values[ i ] = elems[ i ].value;
	}

	// save user selected pictures

	var elems = document.querySelectorAll('.cal-image');
	var pics = [];

	for ( i = 0; i < elems.length; i++ )
		pics[ i ] = elems[ i ].style.backgroundImage;

	// upadte page HTML

	document.getElementById('container').innerHTML = pageTemplate();

	// restore input and select values

	elems = document.querySelectorAll('input[type="text"], input[type="radio"], select');

	for ( i = 0; i < elems.length; i++ ) {
		if ( elems[ i ].localName == 'select' )
			elems[ i ].selectedIndex = values[ i ];
		else if ( elems[ i ].attributes.type.nodeValue == 'radio' )
			elems[ i ].checked = values[ i ];
		else
			elems[ i ].value = values[ i ];
	}

	// restore calendar pictures

	elems = document.querySelectorAll('.cal-image');
	for ( i = 0; i < elems.length; i++ )
		elems[ i ].style.backgroundImage = pics[ i ];

	// update preview
	updatePreview();
}
