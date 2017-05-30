function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function make_xml_row(in_obj){
	for (key in in_obj){
		if (!in_obj[key]){in_obj[key]=''};
	}
	var out_str = '<Row>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['link']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['name']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['gender']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['birthDate']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['age']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['local']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['phone']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['mail']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['site']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['pref']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['jobTitle']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['spez']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['salary']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['lastJob']['isNow']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['lastJob']['period']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['lastJob']['company']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['lastJob']['city']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['lastJob']['url']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['lastJob']['industries']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['lastJob']['expPosition']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['lastJob']['expDesc']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['recomends']+'</Data></Cell>';
	out_str+='<Cell><Data ss:Type="String">'+in_obj['AddDate']+'</Data></Cell>';
	out_str+= '</Row>';
	return out_str;
}
function make_csv_row(in_obj){
	for (key in in_obj){
		if (!in_obj[key]){in_obj[key]=''};
	}
	var out_str = '';
	out_str+='"'+in_obj['link'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['name'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['gender'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['birthDate'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['age'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['local'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['phone'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['mail'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['site'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['pref'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['jobTitle'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['spez'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['salary'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['lastJob']['isNow']+'";';
	out_str+='"'+in_obj['lastJob']['period'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['lastJob']['company'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['lastJob']['city'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['lastJob']['url'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['lastJob']['industries'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['lastJob']['expPosition'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['lastJob']['expDesc'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['recomends'].replace(/("+)/, "'")+'";';
	out_str+='"'+in_obj['AddDate'].replace(/("+)/, "'")+'";';
	out_str+= "\r\n";
	return out_str;
}
function one_resume_data(url_arr){
if (url_arr.length>0) {
this_elm = url_arr.pop();
page.open(main_url+this_elm, function(){
	console.log('Page opened');
	var timerId = setTimeout(function(){
		var res = page.evaluate(function(){
			!function($){"use strict";var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},hasOwn=Object.prototype.hasOwnProperty;$.toJSON="object"==typeof JSON&&JSON.stringify?JSON.stringify:function(a){if(null===a)return"null";var b,c,d,e,f=$.type(a);if("undefined"===f)return void 0;if("number"===f||"boolean"===f)return String(a);if("string"===f)return $.quoteString(a);if("function"==typeof a.toJSON)return $.toJSON(a.toJSON());if("date"===f){var g=a.getUTCMonth()+1,h=a.getUTCDate(),i=a.getUTCFullYear(),j=a.getUTCHours(),k=a.getUTCMinutes(),l=a.getUTCSeconds(),m=a.getUTCMilliseconds();return 10>g&&(g="0"+g),10>h&&(h="0"+h),10>j&&(j="0"+j),10>k&&(k="0"+k),10>l&&(l="0"+l),100>m&&(m="0"+m),10>m&&(m="0"+m),'"'+i+"-"+g+"-"+h+"T"+j+":"+k+":"+l+"."+m+'Z"'}if(b=[],$.isArray(a)){for(c=0;c<a.length;c++)b.push($.toJSON(a[c])||"null");return"["+b.join(",")+"]"}if("object"==typeof a){for(c in a)if(hasOwn.call(a,c)){if(f=typeof c,"number"===f)d='"'+c+'"';else{if("string"!==f)continue;d=$.quoteString(c)}f=typeof a[c],"function"!==f&&"undefined"!==f&&(e=$.toJSON(a[c]),b.push(d+":"+e))}return"{"+b.join(",")+"}"}},$.evalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){return eval("("+str+")")},$.secureEvalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered))return eval("("+str+")");throw new SyntaxError("Error parsing JSON, source is not valid.")},$.quoteString=function(a){return a.match(escape)?'"'+a.replace(escape,function(a){var b=meta[a];return"string"==typeof b?b:(b=a.charCodeAt(),"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16))})+'"':'"'+a+'"'}}(jQuery);
			
			var spez_arr=[];
			$('li.resume__position__specialization_item').each(function(indx, elm){
				spez_arr.push($(elm).text());
			});
			var last_month = $('.resume__experience__item:first .resume__experience__date span').html();
			var isNow = (last_month!= undefined)?false:true;
			var str_exp = $('.resume__experience__item:first .resume-industries>p>span').text();
			var str_exp2 = ''
			var str_exp_arr2 = [];
			$('.resume__experience__item:first .resume-industries .profareatree__subitem_experience span').each(function(indx, elm){
					str_exp_arr2.push($(elm).text());
				});
			str_exp2 = 	str_exp_arr2.join(', ');
			var str_exp_arr = str_exp.split('...');
			var recom_arr=[];
			$('.resume__recommendation').each(function(indx, elm){
					var this_rec = [];
					$(elm).find('div').each(function(indx2, elm2){
						this_rec.push($(elm2).text());
					});
					recom_arr.push(this_rec.join(' | '));
				});
			var pref=undefined;	
			var phone_arr = [];
			$('[itemprop="telephone"]').each(function(indx, elm){
					var this_phone = $(elm).html().trim().replace(/&nbsp;/g, '');
					phone_arr.push(this_phone);
					$(elm).parents().each(function(indx2, elm2){
						if ($(elm2).hasClass('resume__contacts__preferred')) pref=this_phone;
					}); 
					});
			var mail = $('[itemprop="email"]').eq(0).html();
			$('[itemprop="email"]').eq(0).parents().each(function(indx, elm){
						if ($(elm).hasClass('resume__contacts__preferred')) pref=mail;
					});
			var site_arr = [];
			$('.resume__contacts__personalsite a').each(function(indx, elm){
				site_arr.push($(elm).attr('href'));
				if (!pref && $(elm).parent('.resume__contacts__preferred')) pref=$(elm).attr('href');
			});
			var out_obj = {};
			
			out_obj = {
				link: window.location.toString(),
				name: $('.resume__personal [itemprop="name"]').html().trim(),
				gender: $('[itemprop="gender"]').html(),
				birthDate: ($('[itemprop="birthDate"]').attr('content'))?$('[itemprop="birthDate"]').attr('content'):'',
				age: ($('[itemprop="birthDate"]').siblings('strong').html())?$('[itemprop="birthDate"]').siblings('strong').html().replace(/&nbsp;/g, ' '):'',
				local: $('[itemprop="addressLocality"]').html(),
				phone: phone_arr.join(' | '),
				mail: mail,
				site: site_arr.join(' | '),
				pref: (pref)?pref:'',
				jobTitle: $('[itemprop="jobTitle"]').html(),
				spez: spez_arr.join(' | '),
				salary: ($('.resume__position__salary').html())?$('.resume__position__salary').html().replace(/&nbsp;/g, ''):'',
				lastJob: {
					isNow: isNow,
					period: $('.resume__experience__item:first .resume__experience__date').text().replace($('.resume__experience__timeinterval:first').text(), ''),
					company: ($('.resume__experience__item:first .resume__experience__company a').text())?$('.resume__experience__item:first .resume__experience__company a').text():$('.resume__experience__item:first .resume__experience__company').text(),
					city: $('.resume__experience__item:first [itemprop="addressLocality"]').text(),
					url: $('.resume__experience__item:first [itemprop="url"]').text(),
					industries: str_exp_arr[0]+', '+str_exp2,
					expPosition: $('.resume__experience__item:first .resume__experience__position').text(),
					expDesc: $('.resume__experience__item:first .resume__experience__desc').text()
					},
				recomends: recom_arr.join(' || '),
				AddDate: new Date().toString()
			};
			return $.toJSON(out_obj);
		});
		resume_obj = JSON.parse(res);
		
		var xml_file = fs.read(out_file_name);
		var xml_arr_01 = xml_file.split(sep_01);
		var xml_arr_02 = xml_arr_01[1].split(sep_02);
		var out_2_xml = xml_head+xml_arr_02[0]+make_xml_row(resume_obj)+xml_foot;
		fs.write(out_file_name, out_2_xml, 'w');
		overall_resume_count++;
		
		/*fs.write(out_csv_file_name, make_csv_row(resume_obj), 'a');*/
		timerId = setTimeout(one_resume_data(url_arr), getRandomInt(time_min, time_max)*1000);
	}, 2000);
});
}else{
	if (page_count<max_count_pages){
		get_resume_list(resume_url+'?'+u_right_get_1+items_on_page+num_items+'&page='+page_count);
		page_count++;
	}else{
		console.log(overall_resume_count+' resume processed');
		phantom.exit();	
	}
	
}
}
function get_resume_list(in_url){
	page.open(in_url, function(){
		page.includeJs(jq_url, function(){
			var res = page.evaluate(function(link_selector) {
			  var out_arr = [];
			  $(link_selector).each(function(indx, elm){
				  out_arr.push($(elm).attr('href'));
			  });
			  return out_arr.join(' ');
			},link_selector);
			var link_arr = res.split(' ');
			var count=0;
			one_resume_data(link_arr);
		});
	});
}
var fs = require('fs');

var page = require('webpage').create();
var main_url = 'http://hh.ru';
var login_url = 'https://hh.ru/account/login';
var jq_url = 'http://code.jquery.com/jquery-2.1.3.min.js';
var resume_url = 'http://hh.ru/search/resume';

var login = 'ea@wiseadvice.ru';
var pass = '753214';
var time_min = 3;
var time_max = 18;
var u_right_get_1 = 'age_to=60&age_from=20&specialization=23.478&specialization=23.442&specialization=23.476&specialization=23.2&specialization=23.477&specialization=23.311&specialization=23.36&specialization=23.276&specialization=23.314&specialization=23.72&specialization=23.286&specialization=23.165&specialization=23.187&specialization=23.352&specialization=23.21&specialization=23.188&specialization=23.159&specialization=23.266&specialization=23.29&specialization=23.88&specialization=23.362&specialization=23.539&specialization=23.120&specialization=23.422&area=1&area=2019&text=&saved_search_id=966481&pos=full_text&experience=between1And3&experience=between3And6&experience=moreThan6&exp_period=all_time&logic=normal&isAutosearch=true';

var items_on_page = '&items_on_page=';
var num_items = 10;
var link_selector = 'tr.output__item:not(.output__item_visited) a.output__name.HH-VisitedResume-Href';
var xml_head = '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office"  xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"  xmlns:html="http://www.w3.org/TR/REC-html40"><Worksheet ss:Name="First"><Table>';

var xml_foot = '</Table></Worksheet></Workbook>';
var sep_01 = '<Table>';
var sep_02 = '</Table>';
var out_file_name='out.xml';
var out_csv_file_name='out.csv';

var config_file = fs.read('config.js');
var config_obj = JSON.parse(config_file);
var overall_resume_count = 0;

u_right_get_1 = (config_obj['resume_list_link'])?config_obj['resume_list_link']:u_right_get_1;
login = (config_obj['login'])?config_obj['login']:login;
pass = (config_obj['pass'])?config_obj['pass']:pass;
time_min = (config_obj['min_wait_time'])?Math.ceil(Math.abs(config_obj['min_wait_time']-2)):time_min;
time_max = (config_obj['max_wait_time'])?Math.ceil(Math.abs(config_obj['max_wait_time']-2)):time_max;
out_file_name = (config_obj['xml_out_file_name'])?config_obj['xml_out_file_name']:out_file_name;
var max_count_pages = (config_obj['resume_number'])?Math.ceil(config_obj['resume_number']/num_items):1;
var page_count=1;
console.log('Start mission');
page.open(login_url, function (status) {
	if (status !== 'success'){
		console.log('Page failed');
	} else {
	page.includeJs(jq_url, function() {
		var res = page.evaluate(function(login, pass) {
		  var out_arr = [];
		  $('input[name="username"]').val(login);
		  $('input[name="password"]').val(pass);
		  $('input[name="remember"]').prop('checked', true);
		  $('form.account-form input').each(function(indx, elm){
			  if ($(elm).attr('name')!=undefined){
			  out_arr.push($(elm).attr('name')+'='+encodeURIComponent($(elm).val()));
			  }
		  });
		  return out_arr.join('&');
		}, login, pass);
		page.open(login_url, 'POST', res, function (status) {
			get_resume_list(resume_url+'?'+u_right_get_1+items_on_page+num_items);
		});
	});
	}
});