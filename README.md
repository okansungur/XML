# Xml & Xsd



XML'in en önemli amaçlarından biri paylaşılan verilerin standartlaştırılmasını sağlamaktır. Verilerin XML dosyası halinde dağıtılması, standartlara uymuş olmak anlamına gelmiyor. Asıl gereken şey, XML biçimindeki veri kümesinde bulunan elemanların özellik ve dizilişlerinin standartlaştırılmasıdır. 
XML
•	XML deklarasyonuyla başlamalıdır.
•	Benzersiz bir kök elemanına sahip olmalıdır.
•	Başlangıç ve bitiş tagları uyuşmalıdır.
•	XML tagları küçük-büyük harfe duyarlıdır.
•	Tüm elemanlar kapatılmalıdır.
•	Elemanlar düzgün şekilde kümelenmelidir 
•	Tüm  özellikler tırnak içerisine alınmalıdır 

<?xml version="1.0" encoding="ISO-8859-9"?>
Xml elemanlarının hepsinin kapanış tagı vardır.Ancak yukarıdaki ifadenin bir eleman olmadığını unutmayalım.

Elemanlar düzgün şekilde kümelenmelidirler 
Tüm xml dokümanlarının root elemanı olmalıdır
Attribute değerleri çift veya tek tırnak içerisinde gösterilmelidir
<!--  Yorum  Satırı-->
-XML elemanları basit isimlendirme kurallarına sahiptir.
•	İsimler harf,sayı ya da diğer karakterleri içerebilir. 
•	İsimler bir harf veya _ (underscore) karakteri ile başlamalıdır. 
•	İsimler "xml"(ya da XML veya Xml) şeklinde başlamamalıdır 
•	İsimler boşluk içermemelidir.
-XML elemanları esnektir farklı elemanlar eklenebilir ve bunlar belge içeriğini bozmaz.
Örnek:

```
<mesaj>
<kime>Ali</kime >
<kimden>Ayse</ kimden>
<konu>Hafta sonu yaşgünün!</ konu>
</ mesaj >


<?xml version="1.0"?>
<kayitlar>		 			  >>>>>>>root element (parent)
<ogrenci>Genel bilgiler				   >>>>>>> child element (siblings)
<ad>ali</ad>					>>>>>>>>>element 	//sister element		
<soyad>geldi</soyad>
<yas></yas>
</ogrenci>
</kayitlar>
Ögrenci elemanı karışık içeriğe sahip çünkü hem metin hemde diğer elemanları içerir
Soyad  elemanı basit içeriğe sahip 
Yas elemanı bos içeriğe sahip 

XML elemanlarını isimlendirirken basit isimlendirme kurallarına uyulur
"-" ve "."   gibi ifadelerden kaçınılır.Elemanlar Tek başına açıklayıcı olmalıdır.
Veriler child elemanlar veya özellikler  şeklinde tutulabilir
<ogrenci cinsiyet=”E”>		=x "y" z	 gibi
< cinsiyet>E</cinsiyet>   //veyaaaa
<ad>ali</ad>						
<soyad>geldi</soyad>
<yas></yas>
</ogrenci>
```
Veyaaaa
```
<ogrenci cinsiyet=”E” ad =”ali” soyad =” geldi”>	
</ogrenci>

<katalog>
 <cd>
  <ad>xxx</ ad> 
  <fiyat>1000</ fiyat> 
  <yıl>1999</ yıl > 
</cd>
*Dikkat<kime></kime >  eleman boş ise   <kime/> şeklindede kullanılabilir
*Xml dokumanı içerisindeki tüm veri parser tarafından parse edilir.Sadece CDATA içerisindeki bölüm gözardı edilir
CDATA
<?xml version="1.0" encoding="ISO-8859-9"?>
<ozelkarakterler>
<kayit>
<![CDATA[Xml için ozel karekterler ' " <  >]]>
<!-- Xml tarafından dikkate alınmayacak bolumler 
CDATA içerisinde yazılır-->
<ad></ad>
<soyad/> <!—bos leman için tagı bu şekilde ifade 
edebiliriz-->
</kayit>
</ozelkarakterler>

Özel Karakterler
<?xml version="1.0" ?>
<kayitlar>  <!--  Root  Element(parent)  -->  
<ogrenci bilgi="test">    
<ad>ali</ad> <!-- Child  Element(siblings)  -->
<soyad>&lt; &gt; &amp; &quot;</soyad>	<!-- noktali virgul olacak mutlaka -->
<tel>aloo</tel>
</ogrenci>
</kayitlar>

Entity
*Entity element içindeki metinsel ifadelere kısayoldur  (&lt;)
Örnek(a.xml) 
<?xml version="1.0" encoding="ISO_8859-9" ?> 
<!DOCTYPE firma[
<!ELEMENT  firma (ad,adresi,mail,mesajlar)>
	<!ELEMENT ad (#PCDATA)>
	<!ELEMENT adresi (#PCDATA)>
	<!ELEMENT mail (#PCDATA)>
	<!ELEMENT mesajlar (#PCDATA)>
	<!ENTITY firma_adi "Yuce Bilgi Academisi">
	<!ENTITY mail "deneme@deneme.com">
	<!ENTITY kisayol "Entityler ile kisayol">
	]>
<firma>
<ad> &firma_adi;</ad>
<adresi>konur sokak</adresi>
<mail>&mail;</mail>
<mesajlar>&kisayol;  &amp; &gt; &quot;</mesajlar>
</firma>	
<!-- ENTITY firma "Yuce Bilgi Akademisi"
	ENTITY mail  "test@test.com">
<ad> &firma; </ad>
entity element içerisindeki metinsel ifadelere 
kısayoldur
<ad> &firma </ad> yazildiði zaman
çiktisi.
<ad>Yuce Bilgi Academy</ad> şeklinde olacaktir
-->

DataIslands
Ornek 1
a.xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<telefon>
<mesaj>
  <kime>Ayseye</kime>
  <kimden>Aliden</kimden>
  <sebep>Yasgünü</sebep>
 </mesaj>
<mesaj>
  <kime>Aliye</kime>
  <kimden>Fatmadan</kimden>
  <sebep>Yildönümü</sebep>
 </mesaj>
 </telefon>
a.htm
<html>
<body>
<xml id="not" src="a.xml"></xml>
<table border="1" datasrc="#not">
<tr>
< td ><img datafld ="kime"></td>
<td><span datafld="kimden"></span></td>
<td><span datafld="sebep"></span></td>
</tr>
</table>
</body>
</html>

*XML Data Island  idsi not olan dış kaynaklı bir a.xml dosyası  data source 
özelliği kullanılarak html sayfasındaki tabloya bağlanmış
Örnek 2
Resim.xml
<?xml version="1.0" encoding="ISO-8859-9"?>
<album>
<resim>
  <resim1>a.gif</resim1>
  <resim2>b.gif</resim2>
  <resim3>c.gif</resim3>
 </resim>
<resim>
  <resim1>d.gif</resim1>
  <resim2>e.gif</resim2>
  <resim3>f.gif</resim3>
 </resim>
 </album>
Resim.htm
<html>
<body>
<xml id="not" src="a.xml"></xml>
<table  id="alo" border="1" datasrc="#not" datapagesize="1">
<!-- datapagesize SADECE 1 RESIM GOSTERMESI IÇIN         -->
<tr>
<td><image datafld ="resim1"></image></td>
<td><image datafld="resim2"></image></td>
<td><image datafld="resim3"></image></td>
</tr>
</table>
<b>
<input type=button onclick="alo.firstPage()" value=" ilk sayfa "><br>
<input type=button onclick="alo.previousPage()" value="<<<<<<<<"><br>
<input type=button onclick="alo.nextPage()" value=">>>>>>>>"><br>
<input type=button onclick="alo.lastPage()" value="son sayfa"><br>
</BODY>
</HTML>
```
İsimalanları
XML Namespaces kavramı sayesinde isimlendirmeden doğabilecek karışıklıklar önlenir.( xmlns:xs="http://www.a.com”) bu sayede benzersiz bir isimalanına sahip olmuş olacağız.Burada xs kısaltma olup her eleman için isimalanını belirtmek zorunda kalmamamızı sağlamaktadır.
```
<table>
   <tr>   
<td>ali</td>
<td>veli</td>
   </tr>
</table>
----*Karışıklık----
<table>
   <name>ayse</name>
      <surname>120</surname>
</table>
Karışıklıklığı önlemek için önek kullanılır:
<h:table>  //h isimalanı kullanılacak
   <h:tr>
   <h:td>ali</td>
   <h:td>veli</td>
   </h:tr>
</h:table>
---h ve f kısaltma olarak kullanılmış herbiri kendi isimalanını belirtmektedir
<f:table>
   <f:name>ayse</f:name>
      <f:surname>fatma</f:surname>
</f:table>
* Her eleman  için kısaltma kullanmak zorunda değiliz.Aşağıda Tanımlanan  isimalanı varsayılan olarak tüm elemanlara uygulanmaktadır.Eğer birden cok isimalanı kullanılacaksa o zaman bu isimalanının belirtilmesi zorunludur. 
<table xmlns="http://www.test.isimalani">
   <tr>
   <td>ali</td>
   <td>veli</td>
   </tr>
</table>
```
XML – CSS 
```
a.css
ad
{
display: block;
margin-bottom: 30pt;
margin-left: 0;
}
fiyat
{
color: #FF0000;
font-size: 20pt;
}
************************************************************************--
a.xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<?xml-stylesheet type="text/css" href="a.css"?>
<katalog>
 <cd>
  <ad>Jurrasic Park</ad> 
  <fiyat>100</fiyat> 
  <yil>2003</yil > 
</cd>
</katalog>
************************************************************************--
```

